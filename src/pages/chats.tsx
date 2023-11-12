import React from "react";
import Navigation from "./Components/navigation";
import {useMediaQuery} from "@mantine/hooks";


const Chats: React.FC = () : JSX.Element => {
    const mediumScreen = useMediaQuery('(min-width: 768px)');
    return (
        <div className="background h-screen flex items-center justify-center font-Poppins flex-col">
            
            <h1 className="md:text-8xl text-7xl font-extrabold text-orange-400 mb-14 pointer-events-none select-none">Ooops...</h1>
            <h2 className="md:text-4xl text-2xl font-semibold text-orange-400 mb-8 pointer-events-none select-none">- Pagina en desarrollo -</h2>
            <p className="md:text-lg text-sm text-slate-400  text-center md:w-[620px] w-84 mb-12 select-none">Parece que la pagina que estas buscando aún esta en desarrollo. ¡Vuelve más tarde y encuentrala cuando este lista!</p>
            {mediumScreen ?
            <nav><Navigation/></nav> : <footer><Navigation/></footer>}
        </div>
    )

}

export default Chats;