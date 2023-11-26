import React from 'react';
import PostCard from './Components/publicationCard'
import {useMediaQuery} from "@mantine/hooks";

const Perdidos: React.FC = () : JSX.Element => {
    const mediumScreen = useMediaQuery('(min-width: 768px)');
    return (
        <div className={`background ${mediumScreen ? 'grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-2 gap-x-6 overflow-auto md:h-[450px] xl:h-[520px] w-auto ml-16 mr-10' : 'grid grid-cols-1 ml-4 overflow-auto h-[480px]'}`}>
            <PostCard img='./ejemplo.jpg' name='Manolo' ubication='Pergamino' description='Manolo se perdio el 23/8 cerca de la plaza. Tiene un collar rojo con mi numero ' key=""/>
            <PostCard img='./perro-husky.jpg' name='Romeo' ubication='Recoleta' description='Romeo salio corriendo asi que no sabemos donde puede estar. Tiene una manchita en la nariz.' key=""/>
            <PostCard img='./perrito-gatito.png' name='Manolo' ubication='Pergamino' description='Manolo ' key=""/>
            <PostCard img='./vector.jpg' name='Jamaica' ubication='Monasterio 4563' description='Se perdio jamaica, es un labrador marron con collar rosado' key=""/>
            <PostCard img='./vector.jpg' name='Hakimi' ubication='Martinez' description=' ' key=""/>
            <PostCard img='./vector.jpg' name='Ñoqui' ubication='San Isidro' description=' ' key=""/>
            <PostCard img='./vector.jpg' name='Wanchope' ubication='Colegiales' description=' ' key=""/>
            <PostCard img='./vector.jpg' name='Makelele' ubication='Munro' description=' ' key=""/>
            <PostCard img='./vector.jpg' name='Cirinho' ubication='Aristobulo del Valle' description=' ' key=""/>
            <PostCard img='./vector.jpg' name='Fescapo' ubication='Vte Lopez' description=' ' key=""/>
            <PostCard img='./vector.jpg' name='Henry' ubication='Carapachay' description=' ' key=""/>



        </div>
    )
}

export default Perdidos;