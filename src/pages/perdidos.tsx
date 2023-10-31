import React from 'react';
import PostCard from './Components/publicationCard'
import {useMediaQuery} from "@mantine/hooks";

const Perdidos: React.FC = () : JSX.Element => {
    const mediumScreen = useMediaQuery('(min-width: 768px)');
    return (
        <div className={`background ${mediumScreen ? 'grid  md:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-6 overflow-auto md:h-[480px] w-auto ml-16 mr-10' : 'grid grid-cols-1 ml-4 overflow-auto h-[480px]'}`}>
            <PostCard img='./ejemplo.jpg' name='Manolo' ubication='Pergamino' description='Manolo es un cholo cuando sale por la noche a los bolos. Hace chuza y se lo refriega a la lechuza que come pitusas'/>
            <PostCard img='./ejemplo.jpg' name='Manolo' ubication='Pergamino' description='Manolo es un cholo cuando sale por la noche a los bolos. Hace chuza y se lo refriega a la lechuza que come pitusas'/>
            <PostCard img='./ejemplo.jpg' name='Manolo' ubication='Pergamino' description='Manolo es un cholo cuando sale por la noche a los bolos. Hace chuza y se lo refriega a la lechuza que come pitusas'/>

        </div>
    )
}

export default Perdidos;