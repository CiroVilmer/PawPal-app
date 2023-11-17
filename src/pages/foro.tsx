import React from "react";
import {useMediaQuery} from "@mantine/hooks";
import Navigation from "./Components/navigation";
import ModalForo from "./Components/modalForo";
import ForoCard from "./Components/foroCard";
import { api } from "~/utils/api";


const Refugios: React.FC = () : JSX.Element => {

    const mediumScreen = useMediaQuery('(min-width: 768px)');

    const activePosts = api.post.getForumPosts.useQuery({});


    activePosts?.data?.map((post: { id: string; title: string | null; description: string | null; type: string | null }) => {
        console.log(post);

        const id = post.id;
        const title = post.title;
        const descriptionPost = post.description;
        const type = post.type;
        return (
        <ForoCard type={type === null ? "otro" : type} title={title === null ? "" : title } description={descriptionPost === null ? "" : descriptionPost } key={id} />
        )

    });

    return (
        <div className="background h-screen flex items-start justify-center font-Poppins">
            <div className="flex-col justify-start mt-10">
                <h1 className="text-7xl font-semibold text-orange-400 text-center mb-16">Foro</h1>
                <section className="overflow-y-auto h-[400px]">
                {activePosts?.data?.map((post: { title: string | null; description: string | null; id: string; type: string | null}) => (
                <ForoCard type={post.type === null ? "otro" : post.type} title={post.title === null ? "" : post.title } description={post.description === null ? "" : post.description } key={post.id} />
                ))}
                </section>    
            </div>
            <ModalForo/>
            {mediumScreen ?
            <nav><Navigation/></nav> : <footer><Navigation/></footer>}
        </div>
    )

}

export default Refugios;