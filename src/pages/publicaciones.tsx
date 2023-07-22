import React from "react";
import {useMediaQuery} from "@mantine/hooks";
import Navigation from "./Components/navigation";
import CustomizedTabs from "./Components/tabs";

const Publicaciones: React.FC = () : JSX.Element => {
    const largeScreen = useMediaQuery('(min-width: 1040px)');


    return (
        <div>
            
            <div className="h-auto flex items-center flex-col justify-start mt-10">
                <h1 className="mb-10">Publicaciones</h1>
                <div><CustomizedTabs/></div>
                
            </div>
            <footer><Navigation></Navigation></footer>
        </div>
    )

}

export default Publicaciones;