import React from "react";
import {useMediaQuery} from "@mantine/hooks";
import Navigation from "./Components/navigation";


const Publicaciones: React.FC = () : JSX.Element => {
    const largeScreen = useMediaQuery('(min-width: 1040px)');
    return (
        <div className="">
            <h1>Publicaciones</h1>
            <footer><Navigation/></footer>
        </div>
    )

}

export default Publicaciones;