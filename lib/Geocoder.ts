// Geocoder.ts

import axios from 'axios';

export async function geocodeAddress(address: string): Promise<any> {
    try {
        const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
        const response = await axios.get(apiUrl);

        if (response.status === 200) {
            const data = response.data;

            if (data.length > 0) {
                const firstResult = data[0];
                const latitude = firstResult.lat;
                const longitude = firstResult.lon;

                return { latitude, longitude };
            } else {
                throw new Error('No se encontraron resultados para la dirección proporcionada.');
            }
        } else {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
    } catch (error: any) {
        throw new Error(`Error al geocodificar la dirección: ${error.message}`);
    }
}
