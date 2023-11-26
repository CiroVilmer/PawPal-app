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

export const Circlelocations = [
    { lat: -34.5497574, lng: -58.4541175, radius: 500, color: 'yellow', name: 'Perro perdido', description: 'Se perdio Pancho, es un golden cachorro', category: 'LostDog' },
    { lat: -34.5366564, lng: -58.4548797, radius: 500, color: 'red', name: 'Perro perdido', description: 'Se perdio Pancho, es un golden adulto', category: 'LostDog' },
    { lat: -34.5626489, lng: -58.4528739, radius: 500, color: 'green', name: 'Perro perdido', description: 'Se perdio Pancho, es un galgo adulto', category: 'LostDog' },
];

export const loadAreasFromDatabase = () => {
  try {
    const activePosts = api.post.getPosts.useQuery({});

    return activePosts

  } catch (error) {
    console.error('Error loading areas from database:', error);
  }
}