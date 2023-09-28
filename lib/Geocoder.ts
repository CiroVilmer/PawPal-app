// Geocoder.ts


import axios from 'axios';

type Coord = {
    lat: string;
    lon: string;
}


export async function geocodeAddress(address: string): Promise<{ lat: number, lon: number }> {
    try {
        const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
        const response = await axios.get(apiUrl);

        if (response.status === 200) {
            const data = response.data as Coord[];

            if (data.length > 0) {
                const firstResult = data[0] as Coord;
                const lat = parseFloat(firstResult.lat);
                const lon = parseFloat(firstResult.lon);

                return { lat, lon };
            } else {
                throw new Error('No se encontraron resultados para la dirección proporcionada.');
            }
        } else {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
    } catch (error) {
        throw new Error(`Error al geocodificar la dirección`);

    }
}
