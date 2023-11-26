import React from 'react';
import PostCard from './Components/publicationCard'
import {useMediaQuery} from "@mantine/hooks";
import { api } from '~/utils/api';


const Encontrados: React.FC = () : JSX.Element => {

    const activePosts = api.post.getPosts.useQuery({});

    const mediumScreen = useMediaQuery('(min-width: 768px)');

    activePosts?.data?.map((post) => {
        console.log(post);

        const id = post.id;
        const title = post.title;
        const location = post.location;
        const descriptionPost = post.description;
        const image = post.image;
        return (
        <PostCard img={image === null? "": image} name={title} ubication={location} description={descriptionPost === null ? "" : descriptionPost } key={id} />
        )

    });


    return (
        <div className={`background ${mediumScreen ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-2 gap-x-6 overflow-y-auto h-[450px] xl:h-[520px] w-auto ml-16 mr-10' : 'flex flex-col ml-4 overflow-y-auto h-[480px]'}`}>
            {activePosts?.data?.map((post) => (
                <PostCard img={post.image  === null ? "/vector.jpg" : post.image} name={post.title} ubication={post.location} description={post.description === null ? "" : post.description } key={post.id} />
            ))}
        
        </div>
    )
}

export default Encontrados;