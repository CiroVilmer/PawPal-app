import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { Chip, Group, Switch } from '@mantine/core';
import { FaSearchLocation } from 'react-icons/fa';
import { MdPets, MdLocalCafe, MdSpa } from 'react-icons/md';
import { BsScissors, BsHouseHeartFill } from 'react-icons/bs';
import { BiBone } from 'react-icons/bi';
import { GiDogHouse } from 'react-icons/gi';
import { ReactNode } from 'react';
import EmailForm from './CambiarContraseña/emailForm';
import { useMediaQuery } from "@mantine/hooks"; 

const LeafletMap = dynamic(() => import('./Map/LeafletMap'), { ssr: false });

interface ChipProps {
  num: string;
  servicio: string;
  icono: ReactNode;
}


const MapComponent: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    console.log('Realizar búsqueda:', searchValue);
  };

  const Chips: React.FC<ChipProps> = ({ num, servicio, icono }) => (
    <Chip value={num} color="orange" variant="outline" className="">
      <i className="pr-2">{icono}</i>
      {servicio}
    </Chip>
  );

  const largeScreen = useMediaQuery("(min-width: 1010px)");


  return (
    <div className={"h-screen w-screen"}>
      <div className="flex flex-col">
        <div id="map" className="w-full h-full z-10">
          <LeafletMap />
        </div>

        <div className={largeScreen ? "z-20 ml-10 flex flex-row-reverse absolute left-20 flex-grow items-center gap-3" : 'z-20 flex justify-center'}>
          
          <Chip.Group multiple>
            <div className={largeScreen ? 'flex flex-row gap-2 ':'flex flex-row gap-2 overflow-x-auto w-80 mx-3 mt-4 absolute top-0'}>
              <Chips num="1" icono={<MdPets />} servicio="Veterinaria" />
              <Chips num="2" icono={<BsScissors />} servicio="Peluquería" />
              {/* <Chips num="3" icono={<GiDogHouse />} servicio="Refugio" /> */}
              <Chips num="3" icono={<BiBone />} servicio="PetShop" />
              <Chips num="4" icono={<BsHouseHeartFill />} servicio="Guardería" />
              <Chips num="5" icono={<MdSpa />} servicio="Spa" />
              <Chips num="6" icono={<MdLocalCafe />} servicio="Cafes" />
            </div>
          </Chip.Group>

          <div className={largeScreen ?  '' : 'absolute bottom-0 w-full' }>
            <div className='flex items-center justify-center bg-gray-200 h-20 md:bg-transparent rounded-t-2xl w-auto md:rounded-none z-20 group'>
              
              <div className="relative">
                <div className='md:hidden w-14 relative -right-20 -top-3 rounded-full bg-gray-400 h-1'></div>
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Buscar..."
                  className="px-4 md:w-2 py-1 w-56 rounded-full border-2 focus:w-56 outline-none focus:border-orange-400 md:group-hover:w-56 transition-all duration-1000"
                />
                <button
                  onClick={handleSearch}
                  className={largeScreen ? "absolute top-0 right-0 flex items-center justify-center h-full w-9 bg-orange-400 text-white rounded-full" : "hidden"}
                >
                  <FaSearchLocation />
                </button>
                
              </div>
            </div>
          </div>
          
        </div>
        <div className={largeScreen ? 'absolute top-[30%] bg-white rounded h-auto  shadow-xl px-2 ml-3 z-20' : 'hidden'}>
              <div className='md:flex md:flex-col md:gap-24 md:mt-3'>
                <div className='flex flex-col gap-3'>
                  <button className='bg-slate-300 rounded h-6 w-6 flex justify-center p-1 items-center'></button>
                  <button className='bg-slate-300 rounded h-6 w-6 flex justify-center items-center'></button>
                  <button className='bg-slate-300 rounded h-6 w-6 flex justify-center items-center'></button>
                  <button className='bg-slate-300 rounded h-6 w-6 flex justify-center items-center'></button>  
                </div>
                <div>            
                  <button className='bg-slate-300 rounded-full h-6 w-6 mb-3 flex justify-center items-center'></button>
                </div>
              </div>
          </div>
      </div>
      

    </div>
  );
};

export default MapComponent;
