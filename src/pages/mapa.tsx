import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { Chip, Group, Switch } from '@mantine/core';
import { FaSearchLocation } from 'react-icons/fa';

const LeafletMap = dynamic(() => import('./Map/LeafletMap'), { ssr: false });

interface ChipProps {
  num: string;
  servicio: string;

}

const MapComponent: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    console.log('Realizar búsqueda:', searchValue);
  };

  const Chips: React.FC<ChipProps> = ({num, servicio}) => (
    <Chip value={num} color='orange' variant='outline' className='shadow-md rounded-full'>{servicio}</Chip>

  );

  return (
    <div className="relative h-screen">
      <div className="flex flex-row absolute flex-grow gap-8 left-20 z-20 items-center mt-5">
        <div className="relative group">
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
        {/* <button onClick={handleSearch} className="px-4 py-1 bg-orange-400 text-white rounded ml-2">
          Buscar
        </button> */}
        
      
        <Chip.Group multiple>
          <Group position="center">
            <Chips num='1' servicio='Veterinaria'/>
            <Chips num='2' servicio='Peluquería'/>
            <Chips num='3' servicio='Refugio'/>
            <Chips num='4' servicio='PetShop'/>
            <Chips num='5' servicio='Guardería'/>
            {/* <button className="flex justify-end items-center pr-3 py-1 w-16 h-8 border-none bg-slate-100 text-black  rounded-full "></button> */}
            
          </Group>
        </Chip.Group>
      </div>
      <div id="map" className="w-full h-full absolute top-0 left-0 z-10">
        <LeafletMap />
      </div>
    </div>
  );
};

export default MapComponent;
