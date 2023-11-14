import React from "react";
import {useMediaQuery} from "@mantine/hooks";
import Navigation from "./Components/navigation";
import ModalForo from "./Components/modalForo";
import { Accordion } from "@mui/material";
import AccordionForo from "./Components/accordion";


const Refugios: React.FC = () : JSX.Element => {
    const mediumScreen = useMediaQuery('(min-width: 768px)');
    return (
        <div className="background h-screen flex items-start justify-center font-Poppins">
            <div className="flex-col justify-start mt-10">
                <h1 className="text-7xl font-semibold text-orange-400 text-center mb-16">Foro</h1>
                
                <AccordionForo/>

    
            </div>
            <ModalForo/>
            {mediumScreen ?
            <nav><Navigation/></nav> : <footer><Navigation/></footer>}
        </div>
    )

}

export default Refugios;