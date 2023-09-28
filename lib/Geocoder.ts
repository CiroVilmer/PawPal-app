// Geocoder.ts

// NO ANDA PARA LA BUILD

import axios from 'axios';

export async function geocodeAddress(address: string): Promise<{ lat: number, lon: number }> {
    try {
        const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
        const response = await axios.get(apiUrl);

        if (response.status === 200) {
            const data = response.data;

            if (data.length > 0) {
                const firstResult = data[0];
                const lat = parseFloat(firstResult.lat);
                const lon = parseFloat(firstResult.lon);

                return { lat, lon };
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

// 14:13  Error: Unsafe assignment of an `any` value.  @typescript-eslint/no-unsafe-assignment
// 17:15  Error: Unsafe assignment of an `any` value.  @typescript-eslint/no-unsafe-assignment
// 18:32  Error: Unsafe argument of type `any` assigned to a parameter of type `string`.  @typescript-eslint/no-unsafe-argument
// 18:32  Error: Unsafe member access .lat on an `any` value.  @typescript-eslint/no-unsafe-member-access
// 19:32  Error: Unsafe argument of type `any` assigned to a parameter of type `string`.  @typescript-eslint/no-unsafe-argument
// 19:32  Error: Unsafe member access .lon on an `any` value.  @typescript-eslint/no-unsafe-member-access

