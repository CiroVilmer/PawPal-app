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
    <div className="relative h-screen w-screen">
      <div className="flex flex-col">
        <div id="map" className="w-full h-full absolute top-0 left-0 z-10">
          <LeafletMap />
        </div>

        <div className="z-20 lg:ml-10 flex lg:flex-row-reverse lg:absolute lg:left-20 lg:flex-grow lg:items-center lg:mt-5">
          
          <Chip.Group multiple>
            <div className="flex flex-row gap-2 mt-4 lg:mt-0 lg:mx-0 mx-5 overflow-x-auto">
              <Chips num="1" icono={<MdPets />} servicio="Veterinaria" />
              <Chips num="2" icono={<BsScissors />} servicio="Peluquería" />
              {/* <Chips num="3" icono={<GiDogHouse />} servicio="Refugio" /> */}
              <Chips num="4" icono={<BiBone />} servicio="PetShop" />
              <Chips num="5" icono={<BsHouseHeartFill />} servicio="Guardería" />
              <Chips num="6" icono={<MdSpa />} servicio="Spa" />
              <Chips num="7" icono={<MdLocalCafe />} servicio="Cafes" />
            </div>
          </Chip.Group>

          <div className="flex justify-center">
            <div className="lg:relative absolute bottom-[5%] right-[20%] group">    
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Buscar..."
                className="px-4 md:w-2 py-1 rounded-full flex items-end border-2 outline-none focus:border-orange-400 md:group-hover:w-56 md:focus:w-56 md:transition-all md:duration-1000"
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
        <div className='md:absolute md:bg-white md:rounded md:h-auto md:w-auto md:top-[30%] md:drop-shadow-xl md:px-2 md:ml-3  md:z-20'>
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
        {/* <div className="-top-5 md:hidden">
          <EmailForm/>
        </div> */}
      </div>
      

    </div>
  );
};

export default MapComponent;
