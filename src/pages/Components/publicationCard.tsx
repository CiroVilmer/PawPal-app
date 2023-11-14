import {FiMapPin} from 'react-icons/fi';
import { useMediaQuery } from "@mantine/hooks";
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import React, {useState} from 'react';
import { Divider } from '@mui/material';
import { Spoiler } from '@mantine/core';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import {HiShare} from 'react-icons/hi';

interface CardProps {
    img: string,
    name: string,
    ubication: string
    description: string,
    key: string,
}



const PostCard: React.FC<CardProps> = ({img, name, ubication, description}) => {
    
  const mediumScreen = useMediaQuery("(min-width: 768px)");

  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    // <div className= {mediumScreen ? "bg-orange-200 rounded-2xl shadow-md h-auto w-[290px] p-6 font-Poppins mb-1" : "bg-orange-200 rounded-2xl shadow-md h-auto w-full p-6 font-Poppins mb-1"}>

    //     <div className = {mediumScreen ? "flex flex-col flex-grow gap-12 items-center" : "flex flex-row flex-grow justify-start gap-12 items-center"}>  
            
    //         <img src={img} alt={''} className = "w-24 h-24 rounded-lg bg-stone-300"></img>
    //         <Divider orientation="horizontal" flexItem  className={mediumScreen ? 'bg-[#efd0bdfe] w-auto' : 'hidden'}/>
    //         <div className = "flex flex-col md:text-center">
    //             <h1 className = 'font-semibold mb-1'>{name}</h1>
    //             <div className = 'flex flex-row gap-2 items-center md:justify-center text-sm mb-2'>
    //                 <FiMapPin className = 'text-gray-400'/>
    //                 <h2 className = 'text-gray-400 '>{ubication}</h2>
    //             </div>
    //             <Spoiler maxHeight={22} showLabel="Leer mas" hideLabel="Leer menos">
    //                 {description}   
    //             </Spoiler>
             

    //         </div>
    //         <button onClick={handleClick}>                
    //             {!isOpen ? 
    //             <AiOutlineHeart className = {mediumScreen ? ' text-[30px] hover:scale-105 hover:text-red-600 duration-500' : 'relative text-[30px]'}/>:
    //             <AiFillHeart className = {mediumScreen ? ' text-[30px] hover:text-red-400 duration-500 text-red-500' : 'relative text-[30px] text-red-500'}/>
    //             }
    //         </button>
    //     </div>
    // </div>


        
    // <div className="rounded-[20px] max-w-[300px] w-full p-4 bg-white">
                
    //     <div className="flex flex-col items-center">
    //         <button className="relative left-[44%] flex items-center justify-center rounded-full border-2 p-2 ">
    //                 <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-100 hover:scale-110 duration-500">
    //                     <AiOutlineHeart/>
    //                 </div>
    //             </button>
    //             <div className="relative">
    //             <img src={img} className="mb-3 h-28 w-auto bg-center border-2 rounded-xl 3xl:h-full 3xl:w-full" alt=""></img>
                      
    //         </div>
    //         <div className="mb-3 flex items-center flex-col justify-between px-1 md:items-start">
    //             <p className="text-lg font-bold text-black"> {name} </p>
    //             <div className = 'flex flex-row gap-2 items-center md:justify-center text-sm'>
    //                 <FiMapPin className = 'text-gray-400'/>
    //                 <h2 className = 'text-gray-400 '>{ubication}</h2>
    //             </div>
    //         </div>
    //         <div className="flex items-center justify-between md:items-center lg:justify-between ">
    //             <Spoiler maxHeight={22} showLabel="Leer mas" hideLabel="Leer menos" >
    //                 <p className="text-sm ">{description}</p>
    //             </Spoiler>
    //             <button className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700">Place Bid</button>
    //         </div>
    //     </div>
    // </div>
           
        
    <div className= {mediumScreen ? "container w-[280px] bg-transparent font-Poppins" : "container  bg-transparent w-full px-10 py-2 font-Poppins"}>

      <Card shadow="sm" padding="lg" radius="lg" withBorder>
        <Card.Section component="a">
          <Image
          src={img}
          height={225}
          width={'auto'}
          alt=""
          className=' flex justify-center'
          radius={'0'}
        />
      </Card.Section>
      
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{name}</Text>         
            
          <a className='flex flex-row gap-1 items-center md:justify-center text-sm text-gray-400'>
            <FiMapPin/>
            {ubication}
          </a>
              
        </Group>
      
        <Spoiler maxHeight={22} hideLabel='Ver menos' showLabel='Ver mas' className='text-sm'>
          {description}
        </Spoiler>
        <div className='flex flex-row justify-between items-center mt-3'>
              
          <button className='w-auto hover:bg-orange-300 text-orange-300 hover:text-white border-2 border-orange-300 duration-500 rounded-lg p-[6px] text-sm'>
            Mas informacion
          </button>
          <a className='flex flex-row-reverse gap-1'>
            <button className='text-lg hover:bg-slate-100 duration-500 rounded-full p-1 justify-center items-center flex'> <HiShare/> </button>
            <button className='text-xl hover:bg-slate-100 duration-500 rounded-full p-1 justify-center items-center flex' onClick={handleClick}> 
              {!isOpen ? 
              <AiOutlineHeart className = {mediumScreen ? '  hover:text-red-600 duration-500' : 'relative'}/>:
              <AiFillHeart className = {mediumScreen ? ' hover:text-red-400 duration-500 text-red-500' : 'relative text-red-500'}/>
              }
            </button>

          </a>
                
        </div>
      </Card>
    </div>
  );
}


export default PostCard;