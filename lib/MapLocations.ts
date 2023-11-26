import { api } from "~/utils/api";
import { prisma } from "~/server/db";
import { geocodeAddress } from "./Geocoder";

// Función para obtener las ubicaciones geocodificadas
// const getGeocodedLocations = async () => {
//   const postsArray = api.post.getPosts.useQuery({});

//   const geocodedLocations = [];

//   for (const post of postsArray?.data ?? []) {
//     const title = post.title;
//     const location = post.location;
//     const description = post.description;

//     try {
//       const address = post.location;
//       const result = await geocodeAddress(address);
//       geocodedLocations.push({
//         lat: result.lat,
//         lng: result.lon,
//         name: title, // Asigna el título como nombre
//         description: description,
//         category: 'Pet', // Puedes asignar una categoría predeterminada o modificar esto según tus necesidades
//       });
//     } catch (error) {
//       console.error('Error geocoding address:', error);
//     }
//   }

//   return geocodedLocations;
// };

// Exporta las ubicaciones geocodificadas
// export const Markerlocations = await getGeocodedLocations();

export const Markerlocations = [
  { lat: -34.5550092, lng: -58.4844013, name: 'Doctors House ...', description: 'Descripcion', category: 'Home' }
]

export let Circlelocations: {
  lat: number;
  lng: number;
  radius: number;
  color: string;
  name: string;
  description: string;
  category: string;
}[] = [];

export const loadAreasFromDatabase = () => {
  try {
    const activePosts = api.post.getPosts.useQuery({});

    if (activePosts) {
      Circlelocations = activePosts.data?.map((post) => {
        const name = post.title;
        const descriptionPost = post.description;
        const category = 'Perdido';
        const lat = post.lat ?? 0;
        const lng = post.lng ?? 0;
        const radius = 500;
        const color = 'orange';
        const fixedDescription = descriptionPost ?? '';

        console.log('Agregando área:', name, descriptionPost, category, lat, lng, radius, color);

        return {
          lat,
          lng,
          radius,
          color,
          name,
          description: fixedDescription,
          category,
        };
      }) ?? [];
    }
  } catch (error) {
    console.error('Error loading areas from database:', error);
  }
};