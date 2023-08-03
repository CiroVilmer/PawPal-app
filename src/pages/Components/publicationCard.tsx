import {FiMapPin} from 'react-icons/fi';
import { useMediaQuery } from "@mantine/hooks";
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import React, {useState} from 'react';

interface CardProps {
    img: string,
    name: string,
    ubication: string
    description: string,
}



const Card: React.FC<CardProps> = ({img, name, ubication, description}) => {
    
    const largeScreen = useMediaQuery("(min-width: 1100px)");

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className= {largeScreen ? "bg-orange-200 rounded-2xl shadow-md h-36 w-[400px] p-6 font-Poppins mb-1" : "bg-orange-200 rounded-2xl shadow-md h-36 w-full p-6 font-Poppins mb-1"}>

            <div className = "flex flex-row flex-grow justify-start gap-12 items-center">  

                <img src={img} alt={''} className = "w-24 h-24 rounded-lg"></img>
                <div className = "flex flex-col">
                    <h1 className = 'font-semibold mb-1'>{name}</h1>
                    <div className = 'flex flex-row gap-2 items-center text-sm mb-2'>
                        <FiMapPin className = 'text-gray-400 '/>
                        <h2 className = 'text-gray-400'>{ubication}</h2>

                    </div>
                    <h3 className = 'text-sm font-normal'>{description}</h3>                

                </div>
                <button onClick={handleClick}>                
                    {!isOpen ? 
                    <AiOutlineHeart className = {largeScreen ? 'relative text-[30px] hover:scale-105 hover:text-red-600 duration-500' : 'relative text-[30px]'}/>:
                    <AiFillHeart className = {largeScreen ? 'relative text-[30px] hover:text-red-400 duration-500 text-red-500' : 'relative text-[30px] text-red-500'}/>
                    }
                </button>
            </div>
        </div>
    );
}


export default Card;