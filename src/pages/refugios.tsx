import React from "react";
import {useMediaQuery} from "@mantine/hooks";
import Navigation from "./Components/navigation";
import ModalForo from "./Components/modalForo";


const Refugios: React.FC = () : JSX.Element => {
    const mediumScreen = useMediaQuery('(min-width: 768px)');
    return (
        <div className="background h-screen flex items-start justify-center font-Poppins">
            <div className="flex-col justify-start mt-10  ">
                
                <ModalForo/>
                
            </div>
            {mediumScreen ?
            <nav><Navigation/></nav> : <footer><Navigation/></footer>}
        </div>
    )

}

export default Refugios;