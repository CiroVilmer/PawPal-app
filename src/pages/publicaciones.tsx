import React, { useState } from 'react';
import CustomizedTabs from './Components/tabs';
import Encontrados from './encontrados'; // Import Encontrados component
import Perdidos from './perdidos'; // Import Perdidos component
import Navigation from './Components/navigation';
import {useMediaQuery} from "@mantine/hooks";
import Link from 'next/link';
import {AiFillPlusCircle} from 'react-icons/ai';
import PostForm from './postCreate';
import {IoIosArrowBack} from 'react-icons/io'
import ModalExample from './Components/modal';

const Publicaciones = () => {
  const [value, setValue] = useState<number>(0);
  const mediumScreen = useMediaQuery('(min-width: 768px)');
  // Actualizar el valor de la tab seleccionada
  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className ='background h-screen overflow-hidden'> 
      <div className = "flex justify-center">{isOpen ? <div className="background border-2 shadow-lg h-[600px] w-[850px] top-8 rounded-xl fixed z-20 container"> <button className='relative top-4 left-3 text-xl text-gray-500' onClick={handleClick}> <IoIosArrowBack/></button> <PostForm/> </div> : <a></a>}</div>
      <div className="h-auto flex items-center flex-col justify-start font-Poppins">
       
        <div className = 'mt-10'>
          <CustomizedTabs value={value} onChange={handleChange} />
        </div>
        {value === 1 ? <Perdidos /> : <Encontrados />}
        {mediumScreen ?
        <ModalExample/> : <button className='fixed z-20 bottom-16 md:bottom-10 border-2 rounded-full border-orange-400 right-2 text-5xl drop-shadow-xl text-[#ffa826b6] hover:scale-105 duration-500' onClick={handleClick}>
          <Link href='/postCreate'><AiFillPlusCircle/></Link></button>}
        
      </div>
      {mediumScreen ? <nav><Navigation/></nav> : <footer><Navigation/></footer>}

    </div>
  );
};

export default Publicaciones;
