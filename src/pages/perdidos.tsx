import React from 'react';
import Card from './Components/publicationCard'
import {useMediaQuery} from "@mantine/hooks";

const Perdidos: React.FC = () : JSX.Element => {
    const mediumScreen = useMediaQuery('(min-width: 768px)');
    return (
        <div className={`${mediumScreen ? 'grid mx-auto md:grid-cols-2 lg:grid-cols-3 gap-y-1 gap-x-6' : 'flex justify-start flex-col overflow-auto h-[600px]'}`}>
            <Card 
                img= "/perrito-gatito.png"
                name = 'Carlitos'
                ubication = 'Belgrano'
                description = 'Le gusta chupar patas'
            />
            <Card 
                img= "/perrito-gatito.png"
                name = 'Carlitos'
                ubication = 'Belgrano'
                description = 'Le gusta chupar patas'
            />
            <Card 
                img= "/perrito-gatito.png"
                name = 'Carlitos'
                ubication = 'Belgrano'
                description = 'Le gusta chupar patas'
            />
            <Card 
                img= "/perrito-gatito.png"
                name = 'Carlitos'
                ubication = 'Belgrano'
                description = 'Le gusta chupar patas'
            />
            <Card 
                img= "/perrito-gatito.png"
                name = 'Carlitos'
                ubication = 'Belgrano'
                description = 'Le gusta chupar patas'
            />
            <Card 
                img= "/perrito-gatito.png"
                name = 'Carlitos'
                ubication = 'Belgrano'
                description = 'Le gusta chupar patas'
            />
            <Card 
                img= "/perrito-gatito.png"
                name = 'Carlitos'
                ubication = 'Belgrano'
                description = 'Le gusta chupar patas'
            />
            <Card 
                img= "/perrito-gatito.png"
                name = 'Carlitos'
                ubication = 'Belgrano'
                description = 'Le gusta chupar patas'
            />
        </div>
    )
}

export default Perdidos;