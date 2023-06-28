import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { Chip, Group, Switch } from '@mantine/core';
import { FaSearchLocation } from 'react-icons/fa';
import { MdPets } from 'react-icons/md';
import { BsScissors, BsHouseHeartFill } from 'react-icons/bs';
import { BiBone } from 'react-icons/bi';
import { GiDogHouse } from 'react-icons/gi';
import { ReactNode } from 'react';

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

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div id="map" className="w-full h-full absolute top-0 left-0 z-10">
        <LeafletMap />
      </div>

      <div className="relative z-20 flex flex-col md:flex md:flex-row-reverse md:gap-8 md:absolute md:left-20 md:flex-grow md:items-center md:mt-5">
        
        <Chip.Group multiple>
          <div className="flex flex-row gap-4 overflow-x-auto">
            <Chips num="1" icono={<MdPets />} servicio="Veterinaria" />
            <Chips num="2" icono={<BsScissors />} servicio="Peluquería" />
            <Chips num="3" icono={<GiDogHouse />} servicio="Refugio" />
            <Chips num="4" icono={<BiBone />} servicio="PetShop" />
            <Chips num="5" icono={<BsHouseHeartFill />} servicio="Guardería" />
            <Chips num="6" icono={<MdPets />} servicio="Veterinaria" />
            <Chips num="7" icono={<BsScissors />} servicio="Peluquería" />
          </div>
        </Chip.Group>

        <div className="relative flex items-end">
          
            <div className="md:relative relative group">
              
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Buscar..."
                className="px-4 border-l-0 md:w-2 py-1 rounded-full flex items-end border-2 focus:w-56 outline-none focus:border-orange-400 md:group-hover:w-56 md:transition-all md:duration-1000"
              />
              <button
                onClick={handleSearch}
                className="absolute top-0 right-0 flex items-center justify-center h-full w-9 bg-orange-400 text-white rounded-full"
              >
                <FaSearchLocation />
              </button>
            </div>
          
        </div>
      </div>
      <div className='absolute bg-white rounded h-auto w-auto top-52 px-2 flex justify-start ml-3 items-center z-20'>
        <div className='flex flex-col gap-24 mt-3'>
          <div className='flex flex-col gap-3'>
            <button className='bg-slate-300 rounded h-6 w-6 flex justify-center items-center'><MdPets className='text-white text-2xl'/></button>
            <button className='bg-slate-300 rounded h-6 w-6 flex justify-center items-center'><MdPets className='text-white text-2xl'/></button>
            <button className='bg-slate-300 rounded h-6 w-6 flex justify-center items-center'><MdPets className='text-white text-2xl'/></button>
            <button className='bg-slate-300 rounded h-6 w-6 flex justify-center items-center'><MdPets className='text-white text-2xl'/></button>  
          </div>
          <div>            
            <button className='bg-slate-300 rounded-full h-6 w-6 mb-3 flex justify-center items-center'><MdPets className='text-white text-2xl'/></button>
          </div>
        </div>
        
      </div>
      
      

    </div>
  );
};

export default MapComponent;
