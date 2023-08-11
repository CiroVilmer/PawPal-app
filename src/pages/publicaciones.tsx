import React, { useState } from 'react';
import CustomizedTabs from './Components/tabs';
import Encontrados from './encontrados'; // Import Encontrados component
import Perdidos from './perdidos'; // Import Perdidos component
import Navigation from './Components/navigation';
import {useMediaQuery} from "@mantine/hooks";
import Link from 'next/link';
import {AiFillPlusCircle} from 'react-icons/ai';

const Publicaciones = () => {
  const [value, setValue] = useState<number>(0);
  const mediumScreen = useMediaQuery('(min-width: 768px)');
  // Actualizar el valor de la tab seleccionada
  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className ='background h-screen overflow-hidden'>
        <div className="h-auto flex items-center flex-col justify-start font-Poppins">
            <div className = 'mt-10'>
              <CustomizedTabs value={value} onChange={handleChange} />
            </div>
            {value === 1 ? <Perdidos /> : <Encontrados />}
          <button className='fixed bottom-20 md:bottom-10 border-2 rounded-full border-orange-400 right-6 text-5xl drop-shadow-xl text-[#ffa826b6] opacity-80'>
            <Link href='/postCreate'><AiFillPlusCircle/></Link>
          </button>
        </div>
        {mediumScreen ?
        <nav><Navigation/></nav> : <footer><Navigation/></footer>}

    </div>
  );
};

export default Publicaciones;
