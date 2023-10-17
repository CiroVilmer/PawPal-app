import { api } from "~/utils/api";
import { prisma } from "~/server/db"; 

const postsArray = api.post.getPosts.useQuery({});

for (const post of postsArray?.data ?? []) {
    const title = post.title;
    const location = post.location;
    const description = post.description;

}

//


export const Markerlocations = [

    { lat: -34.5550092, lng: -58.4844013, name: 'Doctors House ...', description: 'Descripcion', category: 'Home' },

];

export const Circlelocations = [

    { lat: -34.5497574, lng: -58.4541175, radius: 500, color: 'yellow', name: 'Perro perdido', description: 'Se perdio Pancho, es un golden cachorro', category: 'LostDog' },
    { lat: -34.5366564, lng: -58.4548797, radius: 500, color: 'red', name: 'Perro perdido', description: 'Se perdio Pancho, es un golden adulto', category: 'LostDog' },
    { lat: -34.5626489, lng: -58.4528739, radius: 500, color: 'green', name: 'Perro perdido', description: 'Se perdio Pancho, es un galgo adulto', category: 'LostDog' },
    
  ];  