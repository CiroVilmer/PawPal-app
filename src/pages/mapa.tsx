import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { Chip } from '@mantine/core';
import { FaSearchLocation } from 'react-icons/fa';
import { MdPets, MdLocalCafe, MdSpa } from 'react-icons/md';
import { BsScissors, BsHouseHeartFill, BsFillFileEarmarkPostFill } from 'react-icons/bs';
import { BiBone, BiUser } from 'react-icons/bi';
import { ReactNode } from 'react';
import { useMediaQuery } from "@mantine/hooks";
import Navigation from './Components/navigation';
import Link from 'next/link';
import {AiFillPlusCircle} from 'react-icons/ai';
import PostForm from './postCreate';
import ModalExample from './Components/modal';
import { geocodeAddress } from '../../lib/Geocoder';
import { centerMap } from './Map/LeafletMap';


// import Navigation from './Components/navigation';

const LeafletMap = dynamic(() => import('./Map/LeafletMap'), { ssr: false });

interface ChipProps {
  num: string;
  servicio: string;
  icono: ReactNode;
}


const MapComponent: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = async () => {

    // Traduce una dirección a coordenadas
    try {
    const address = searchValue;
    const result = await geocodeAddress(address); 
    console.log('Coordenadas de la dirección:', result.lat, result.lon);
    centerMap( result.lat, result.lon);
    } catch (error) {
    console.error('Error al geocodificar la dirección:', error);
    }

  };

  const Chips: React.FC<ChipProps> = ({ num, servicio, icono }) => (
    <Chip value={num} color="orange" variant="outline" className="">
      <i className="pr-2">{icono}</i>
      <a className='font-Poppins text-[13px]'>{servicio}</a>
    </Chip>
  );

  const largeScreen = useMediaQuery("(min-width: 1024px)");
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={"h-screen w-screen font-Poppins"}>
      <div className="flex flex-col">
        <div id="map" className={`w-full h-full z-10`}>
          <LeafletMap />
        </div>

        <div className={`z-20 flex ${largeScreen ? "flex-row absolute left-14 mt-6 flex-grow items-center gap-3" : "flex flex-col  items-center"}`}>
          <div className={largeScreen ? "relative" : "absolute top-3"}>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Buscar..."
              className="pl-4 pr-10 py-1 w-56 rounded-full border-2 flex outline-none focus:border-orange-400 transition-all duration-1000"
            />
          
            <button
              onClick={() => void handleSearch()}
              className="absolute top-0 right-0 flex items-center justify-center h-full w-9 bg-orange-400 text-white rounded-full"
            >
               <FaSearchLocation />
            </button>
          </div>

          {/* Chip Group */}
          <div className={`flex flex-row gap-2 ${largeScreen ? "" : "overflow-x-auto w-80 mx-3 mt-4 absolute top-12"}`}>
            <Chips num="1" icono={<MdPets />} servicio="Veterinaria" />
            <Chips num="2" icono={<BsScissors />} servicio="Peluquería" />
            <Chips num="3" icono={<BiBone />} servicio="PetShop" />
            <Chips num="4" icono={<BsHouseHeartFill />} servicio="Guardería" />
            <Chips num="5" icono={<MdSpa />} servicio="Spa" />
            <Chips num="6" icono={<MdLocalCafe />} servicio="Cafes" />
          </div>
          
        </div>
        <ModalExample/>
        {/* <button className='fixed z-20 bottom-16 md:bottom-10 border-2 rounded-full border-orange-400 right-2 text-5xl drop-shadow-xl text-[#ffa826b6] hover:scale-105 duration-500' onClick={handleClick}>
          {largeScreen ? <AiFillPlusCircle/> : <Link href='/postCreate'><AiFillPlusCircle/></Link>}
        </button>
        <div>{isOpen ? <div className='absolute right-[30%] top-[20%] z-20 h-96 w-72 bg-white rounded-lg'> <PostForm/> </div> : <a></a>} </div> */}
        <div className='z-20'>{largeScreen ?
        <nav><Navigation/></nav> : <footer><Navigation/></footer>}</div>
        

        {/* <div className={largeScreen ? `absolute top-0 bg-white rounded-e-[25px] h-screen shadow-2xl px-2 z-20 duration-500 ${!isOpen ? ' w-12 ':'w-72'}` : 'hidden'}>
          <div className={`absolute top-5 ml-1  duration-500 ease-in-out ${isOpen ? "translate-x-[230px]" : ""}`}>
            <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen}/>
          </div>
          <div className='md:flex md:flex-col md:absolute md:top-16'>
                
            <div className='flex flex-col gap-4 ml-1 text-2xl'>
              <button className='hover:bg-slate-200 duration-500 rounded h-6 w-6 flex justify-center mt-6 items-center'><Link href='./publicaciones'><IoHome/></Link></button>
              <button className='hover:bg-slate-200 duration-500 rounded h-6 w-6 flex justify-center items-center'><Link href='./publicaciones'> </Link></button>
              <button className='hover:bg-slate-200 duration-500 rounded h-6 w-6 flex justify-center items-center'><Link href='./publicaciones'> </Link></button>
              <button className='hover:bg-slate-200 duration-500 rounded h-6 w-6 flex justify-center items-center'><Link href='./publicaciones'> </Link></button>  
            </div>
            
          </div>
          <div className='absolute bottom-10'>            
            <button className='bg-slate-200 hover:bg-slate-300 duration-500 rounded-full h-8 w-8 mb-3 flex justify-center items-center text-xl'><BiUser/></button>
          </div>
        </div> */}
      </div>
      
      {/* <footer className={largeScreen ? "hidden" : 'z-20 w-full absolute'}>
        <Navigation />
      </footer> */}
    </div>
  );
};

//Esto es el scroll
{/* <div className={largeScreen ?  '' : 'absolute bottom-0 w-full' }>
            <div className='flex items-center justify-center bg-gray-200 h-20 md:bg-transparent rounded-t-2xl w-auto md:rounded-none z-20 group'>
              
              
            </div> 
          </div>*/}
          

export default MapComponent;