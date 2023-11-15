import React from "react";
import {useMediaQuery} from "@mantine/hooks";
import Navigation from "./Components/navigation";
import ModalForo from "./Components/modalForo";
import AccordionForo from "./Components/accordion";
import { api } from "~/utils/api";


const Refugios: React.FC = () : JSX.Element => {

    const mediumScreen = useMediaQuery('(min-width: 768px)');

    const activePosts = api.post.getForumPosts.useQuery({});


    activePosts?.data?.map((post) => {
        console.log(post);

        const id = post.id;
        const title = post.title;
        const descriptionPost = post.description;
        return (
        <AccordionForo title={title === null ? "" : title } description={descriptionPost === null ? "" : descriptionPost } key={id} />
        )

    });

    return (
        <div className="background h-screen flex items-start justify-center font-Poppins">
            <div className="flex-col justify-start mt-10">
                <h1 className="text-7xl font-semibold text-orange-400 text-center mb-16">Foro</h1>
                
                <AccordionForo title='Hola' description='Panchito, el salchi, se mandó el viernes a pique para fletar una paloma. Chiquito pero picante, dejó a todos pillos. Ahora anda desaparecido en acción, dejando a su banda buscándolo por cada rincón de la city. ¡A cruzar los dedos para que este fierrito vuelva a casa!' key=''/>
                {activePosts?.data?.map((post) => (
                <AccordionForo title={post.title === null ? "" : post.title } description={post.description === null ? "" : post.description } key={post.id} />
                ))}
    
            </div>
            <ModalForo/>
            {mediumScreen ?
            <nav><Navigation/></nav> : <footer><Navigation/></footer>}
        </div>
    )

}

export default Refugios;