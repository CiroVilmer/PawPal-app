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
    // { lat: -34.5497574, lng: -58.4541175, radius: 500, color: 'yellow', name: 'Perro perdido', description: 'Se perdio Pancho, es un golden cachorro', category: 'LostDog' },
    // { lat: -34.5366564, lng: -58.4548797, radius: 500, color: 'red', name: 'Perro perdido', description: 'Se perdio Pancho, es un golden adulto', category: 'LostDog' },
    // { lat: -34.5626489, lng: -58.4528739, radius: 500, color: 'green', name: 'Perro perdido', description: 'Se perdio Pancho, es un galgo adulto', category: 'LostDog' },
    // { lat: -34.49470022448979, lng: -58.501759102040815, radius: 500, color: 'orange', name: 'Perro perdido', description: 'CiroVilmer', category: 'LostDog' },
    // { lat: -34.5563341, lng: -58.4864264, radius: 500, color: 'orange', name: 'Perro perdido', description: '1', category: 'LostDog' },
    // { lat: -34.5568197, lng: -58.5409771, radius: 500, color: 'orange', name: 'Perro perdido', description: '2', category: 'LostDog' },
    // { lat: -34.6059986, lng: -58.5584509, radius: 500, color: 'orange', name: 'Perro perdido', description: '3', category: 'LostDog' },
    // { lat: -34.6710493, lng: -58.4421146, radius: 500, color: 'orange', name: 'Perro perdido', description: '4', category: 'LostDog' },
    // { lat: -34.70428, lng: -58.3589103, radius: 500, color: 'orange', name: 'Perro perdido', description: '5', category: 'LostDog' },
    // { lat: -34.7687485, lng: -58.2557963, radius: 500, color: 'orange', name: 'Perro perdido', description: '6', category: 'LostDog' },
    // { lat: -34.7316364, lng: -58.6429937, radius: 500, color: 'orange', name: 'Perro perdido', description: '7', category: 'LostDog' },
    // { lat: -34.5829049, lng: -58.6890849, radius: 500, color: 'orange', name: 'Perro perdido', description: '8', category: 'LostDog' },
    // { lat: -34.533195, lng: -58.5842487, radius: 500, color: 'orange', name: 'Perro perdido', description: '9', category: 'LostDog' },
    // { lat: -34.7168895, lng: -58.4172575, radius: 500, color: 'orange', name: 'Perro perdido', description: '10', category: 'LostDog' },
    // { lat: -34.6707437, lng: -58.3537204, radius: 500, color: 'orange', name: 'Perro perdido', description: '11', category: 'LostDog' },   

];