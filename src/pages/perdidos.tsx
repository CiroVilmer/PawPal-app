import React from 'react';
import Card from './Components/publicationCard'
import {useMediaQuery} from "@mantine/hooks";

const Perdidos: React.FC = () : JSX.Element => {
    const mediumScreen = useMediaQuery('(min-width: 768px)');
    return (
        <div className={`${mediumScreen ? 'grid  md:grid-cols-2 lg:grid-cols-3 gap-y-1 gap-x-6 overflow-auto h-[700px] w-auto ml-16 mr-10' : 'flex justify-start flex-col overflow-auto h-[600px]'}`}>
            <Card 
                img= "/perrito-gatito.png"
                name = 'Carlitos'
                ubication = 'Belgrano'
                description = 'Le gusta chupar patas cuando se va de fiesta por la noche en Valencia porque es un perrito muy loco y divertido que le gusta mucho la fiesta y la noche y la luna y los gatos y los perros ' 
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