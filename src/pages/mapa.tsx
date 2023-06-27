import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { Chip, Group, Switch } from '@mantine/core';
import { FaSearchLocation } from 'react-icons/fa';
import {MdPets} from 'react-icons/md';
import {BsScissors, BsHouseHeartFill} from 'react-icons/bs';
import {BiBone} from 'react-icons/bi';
import {GiDogHouse} from 'react-icons/gi';
import {ReactNode} from 'react';

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

  const Chips: React.FC<ChipProps> = ({num, servicio, icono}) => (
    <Chip value={num} color='orange' variant='outline' className=''><i className='pr-2'>{icono}</i>{servicio}</Chip>

  );

  return (
    <div className="relative h-screen">
      <div className="relative z-20 flex justify-center md:flex-grow md:gap-8 md:flex-row md:left-20 ">
        <div className='flex items-center'>
          <div className="absolute group flex items-end">
            <button
              onClick={handleSearch}
              className="absolute top-0 right-0 flex items-center justify-center h-full w-9 bg-orange-400 text-white rounded-full"
            >
              <FaSearchLocation />
            </button>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Buscar..."
              className="px-4 w-2 py-1 rounded-full border-2 focus:w-56 outline-none focus:border-orange-400 group-hover:w-56 transition-all duration-1000"
            />
            
          </div>
        </div>
        {/* <button onClick={handleSearch} className="px-4 py-1 bg-orange-400 text-white rounded ml-2">
          Buscar
        </button> */}
        
      
        <Chip.Group multiple>
          <div className='flex flex-row mx-5 mt-5 pl-5 w-84  lg:w-auto gap-4 overflow-x-auto'>
            <Chips num='1' icono={<MdPets/>} servicio='Veterinaria'/>
            <Chips num='2' icono={<BsScissors/>} servicio='Peluquería'/>
            <Chips num='3' icono={<GiDogHouse/>} servicio='Refugio'/>
            <Chips num='4' icono={<BiBone/>} servicio='PetShop'/>
            <Chips num='5' icono={<BsHouseHeartFill/>} servicio='Guardería'/>
            <Chips num='6' icono={<MdPets/>} servicio='Veterinaria'/>
            <Chips num='7' icono={<BsScissors/>} servicio='Peluquería'/>
            <Chips num='8' icono={<GiDogHouse/>} servicio='Refugio'/>
            <Chips num='9' icono={<BiBone/>} servicio='PetShop'/>
            <Chips num='10' icono={<BsHouseHeartFill/>} servicio='Guardería'/>
            
            

            {/* <button className="flex justify-end items-center pr-3 py-1 w-16 h-8 border-none bg-slate-100 text-black  rounded-full "></button> */}
            
          </div>
        </Chip.Group>
      </div>
      <div id="map" className="w-full h-full absolute top-0 left-0 z-10">
        <LeafletMap />
      </div>
    </div>
  );
};

export default MapComponent;
