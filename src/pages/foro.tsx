import React from "react";
import {useMediaQuery} from "@mantine/hooks";
import Navigation from "./Components/navigation";
import ModalForo from "./Components/modalForo";
import AccordionForo from "./Components/accordion";
import { api } from "~/utils/api";


const Refugios: React.FC = () : JSX.Element => {

    const mediumScreen = useMediaQuery('(min-width: 768px)');

    const activePosts = api.post.getForumPosts.useQuery({});


    activePosts?.data?.map((post: { id: string; title: string | null; description: string | null; }) => {
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
                <AccordionForo title="Para que sirve la castración?" description="La castración, en el contexto veterinario, se realiza para controlar la reproducción y modificar el comportamiento de animales, como perros y gatos, al eliminar sus órganos reproductores. También puede tener beneficios en la salud y reducir comportamientos no deseados." key=''/>
                <AccordionForo title="Reunion de goldens" description="Vamos a estar organizando una nueva reunion de goldens en el río de Vicente Lopez el domingo a las 14hs." key=''/>
                {activePosts?.data?.map((post: { title: string | null; description: string | null; id: string; }) => (
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