import React from "react";
import {useMediaQuery} from "@mantine/hooks";
import Navigation from "./Components/navigation";


const Chats: React.FC = () : JSX.Element => {
    const largeScreen = useMediaQuery('(min-width: 1040px)');
    return (
        <div>
            <div className="min-h-screen flex items-center flex-col justify-start mt-10">
                <h1>Chats</h1>
                
            </div>
            <footer><Navigation/></footer>
        </div>
    )

}

export default Chats;