import React from "react";
import {useMediaQuery} from "@mantine/hooks";


export function Publicaciones(): JSX.Element {
    const largeScreen = useMediaQuery('(min-width: 992px)');
    return (
        <div>
        <h1>Publicaciones</h1>
        </div>
    );

}