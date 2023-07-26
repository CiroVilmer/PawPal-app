import React from "react";
import Navigation from "./Components/navigation";


const Chats: React.FC = () : JSX.Element => {
    return (
        <div>
            <div className="h-auto flex items-center flex-col justify-start mt-10">
                <h1>Chats</h1>
                
            </div>
            <footer><Navigation/></footer>
        </div>
    )

}

export default Chats;