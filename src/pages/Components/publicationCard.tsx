import {FiMapPin} from 'react-icons/fi';
import { useMediaQuery } from "@mantine/hooks";
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import React, {useState} from 'react';
import { Divider } from '@mui/material';
import { Spoiler } from '@mantine/core';

interface CardProps {
    img: string,
    name: string,
    ubication: string
    description: string,
}



const Card: React.FC<CardProps> = ({img, name, ubication, description}) => {
    
    const mediumScreen = useMediaQuery("(min-width: 768px)");

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className= {mediumScreen ? "bg-orange-200 rounded-2xl shadow-md h-auto w-[290px] p-6 font-Poppins mb-1" : "bg-orange-200 rounded-2xl shadow-md h-auto w-full p-6 font-Poppins mb-1"}>

            <div className = {mediumScreen ? "flex flex-col flex-grow gap-12 items-center" : "flex flex-row flex-grow justify-start gap-12 items-center"}>  
            
                <img src={img} alt={''} className = "w-24 h-24 rounded-lg bg-stone-300"></img>
                <Divider orientation="horizontal" flexItem  className={mediumScreen ? 'bg-[#efd0bdfe] w-auto' : 'hidden'}/>
                <div className = "flex flex-col md:text-center">
                    <h1 className = 'font-semibold mb-1'>{name}</h1>
                    <div className = 'flex flex-row gap-2 items-center md:justify-center text-sm mb-2'>
                        <FiMapPin className = 'text-gray-400'/>
                        <h2 className = 'text-gray-400 '>{ubication}</h2>
                    </div>
                    <Spoiler maxHeight={22} showLabel="Leer mas" hideLabel="Leer menos">
                        {description}   
                    </Spoiler>
                

                </div>
                <button onClick={handleClick}>                
                    {!isOpen ? 
                    <AiOutlineHeart className = {mediumScreen ? ' text-[30px] hover:scale-105 hover:text-red-600 duration-500' : 'relative text-[30px]'}/>:
                    <AiFillHeart className = {mediumScreen ? ' text-[30px] hover:text-red-400 duration-500 text-red-500' : 'relative text-[30px] text-red-500'}/>
                    }
                </button>
            </div>
        </div>
    );
}


export default Card;