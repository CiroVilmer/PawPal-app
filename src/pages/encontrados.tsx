import React from 'react';
import PostCard from './Components/publicationCard'
import {useMediaQuery} from "@mantine/hooks";
import { api } from '~/utils/api';


const Encontrados: React.FC = () : JSX.Element => {

    const activePosts = api.post.getPosts.useQuery({});

    for (const post of activePosts?.data || []) {
        console.log(post);

        const title = post.title;
        const location = post.location;
        const description = post.description;

    }

    const mediumScreen = useMediaQuery('(min-width: 768px)');
    return (
        <div className={`background ${mediumScreen ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-2 gap-x-6 overflow-y-auto h-[480px] w-auto ml-16 mr-10' : 'flex flex-col ml-4 overflow-y-auto h-[480px]'}`}>
            <PostCard img='./hotdog.jpg' name='Pancho' ubication='Los Pinos' description='Panchito, el salchi, se mandó el viernes a pique para fletar una paloma. Chiquito pero picante, dejó a todos pillos. Ahora anda desaparecido en acción, dejando a su banda buscándolo por cada rincón de la city. ¡A cruzar los dedos para que este fierrito vuelva a casa!'/>
            <PostCard img='./hotdog.jpg' name='Pancho' ubication='Los Pinos' description='Panchito, el salchi, se mandó el viernes a pique para fletar una paloma. Chiquito pero picante, dejó a todos pillos. Ahora anda desaparecido en acción, dejando a su banda buscándolo por cada rincón de la city.'/>
            <PostCard img='./hotdog.jpg' name='Pancho' ubication='Los Pinos' description='Panchito, el salchi, se mandó el viernes a pique para fletar una paloma. Chiquito pero picante, dejó a todos pillos.'/>
            <PostCard img='./hotdog.jpg' name='Pancho' ubication='Los Pinos' description='Panchito, el salchi, se mandó el viernes a pique para fletar una paloma. Chiquito pero picante, dejó a todos pillos. Ahora anda desaparecido en acción, dejando a su banda buscándolo por cada rincón de la city. ¡A cruzar los dedos para que este fierrito vuelva a casa!'/>
            <PostCard img='./hotdog.jpg' name='Pancho' ubication='Los Pinos' description='Panchito, el salchi, se mandó el viernes a pique para fletar una paloma. Chiquito pero picante, dejó a todos pillos. Ahora anda desaparecido en acción, dejando a su banda buscándolo por cada rincón de la city. ¡A cruzar los dedos para que este fierrito vuelva a casa!'/>
            <PostCard img='./hotdog.jpg' name='Pancho' ubication='Los Pinos' description='Panchito, el salchi, se mandó el viernes a pique para fletar una paloma. Chiquito pero picante, dejó a todos pillos. Ahora anda desaparecido en acción, dejando a su banda buscándolo por cada rincón de la city. ¡A cruzar los dedos para que este fierrito vuelva a casa!'/>
            <PostCard img='./hotdog.jpg' name='Pancho' ubication='Los Pinos' description='Panchito, el salchi, se mandó el viernes a pique para fletar una paloma. Chiquito pero picante, dejó a todos pillos. Ahora anda desaparecido en acción, dejando a su banda buscándolo por cada rincón de la city. ¡A cruzar los dedos para que este fierrito vuelva a casa!'/>
            <PostCard img='./logoPawPal.png' name='Ciro' ubication='Burzaco' description='Ciro es negro y tiene rulitos. Se hace el que tiene novia pero todos los findes despues del casino se da una pasadito por los bosques de palermo'/>

        </div>
    )
}

export default Encontrados;