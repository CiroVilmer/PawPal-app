import React from 'react';
import PostCard from './Components/publicationCard'
import {useMediaQuery} from "@mantine/hooks";


const Encontrados: React.FC = () : JSX.Element => {
    const mediumScreen = useMediaQuery('(min-width: 768px)');
    return (
        <div className={`background ${mediumScreen ? 'grid  md:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-6 overflow-auto h-[730px] w-auto ml-16 mr-10' : 'grid grid-cols-1 overflow-auto h-[480px]'}`}>
            <PostCard img='./hotdog.jpg' name='Pancho' ubication='Los Pinos' description='Panchito, el salchi, se mandó el viernes a pique para fletar una paloma. Chiquito y pero picante, dejó a todos pillos. Ahora anda desaparecido en acción, dejando a su banda buscándolo por cada rincón de la city. ¡A cruzar los dedos para que este fierrito vuelva a casa!'/>
            <PostCard img='./hotdog.jpg' name='Pancho' ubication='Los Pinos' description='Panchito, el salchi, se mandó el viernes a pique para fletar una paloma. Chiquito y pero picante, dejó a todos pillos. Ahora anda desaparecido en acción, dejando a su banda buscándolo por cada rincón de la city. ¡A cruzar los dedos para que este fierrito vuelva a casa!'/>
            <PostCard img='./hotdog.jpg' name='Pancho' ubication='Los Pinos' description='Panchito, el salchi, se mandó el viernes a pique para fletar una paloma. Chiquito y pero picante, dejó a todos pillos. Ahora anda desaparecido en acción, dejando a su banda buscándolo por cada rincón de la city. ¡A cruzar los dedos para que este fierrito vuelva a casa!'/>
            <PostCard img='./hotdog.jpg' name='Pancho' ubication='Los Pinos' description='Panchito, el salchi, se mandó el viernes a pique para fletar una paloma. Chiquito y pero picante, dejó a todos pillos. Ahora anda desaparecido en acción, dejando a su banda buscándolo por cada rincón de la city. ¡A cruzar los dedos para que este fierrito vuelva a casa!'/>
            <PostCard img='./hotdog.jpg' name='Pancho' ubication='Los Pinos' description='Panchito, el salchi, se mandó el viernes a pique para fletar una paloma. Chiquito y pero picante, dejó a todos pillos. Ahora anda desaparecido en acción, dejando a su banda buscándolo por cada rincón de la city. ¡A cruzar los dedos para que este fierrito vuelva a casa!'/>
            <PostCard img='./hotdog.jpg' name='Pancho' ubication='Los Pinos' description='Panchito, el salchi, se mandó el viernes a pique para fletar una paloma. Chiquito y pero picante, dejó a todos pillos. Ahora anda desaparecido en acción, dejando a su banda buscándolo por cada rincón de la city. ¡A cruzar los dedos para que este fierrito vuelva a casa!'/>
            <PostCard img='./hotdog.jpg' name='Pancho' ubication='Los Pinos' description='Panchito, el salchi, se mandó el viernes a pique para fletar una paloma. Chiquito y pero picante, dejó a todos pillos. Ahora anda desaparecido en acción, dejando a su banda buscándolo por cada rincón de la city. ¡A cruzar los dedos para que este fierrito vuelva a casa!'/>
        </div>
    )
}

export default Encontrados;