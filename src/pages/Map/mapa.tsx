import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { Chip, Group } from '@mantine/core';

const LeafletMap = dynamic(() => import('./LeafletMap'), { ssr: false });

const MapComponent: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    console.log('Realizar búsqueda:', searchValue);
    //Poner la lógica para buscar la dirección en el mapa
  };

  return (
    <div className="relative h-screen">
      <div className="absolute top-6 left-20 z-20 flex items-center">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Buscar..."
          className="px-2 py-1 rounded"
        />
        <button onClick={handleSearch} className="px-4 py-1 bg-orange-400 text-white rounded ml-2">
          Buscar
        </button>
      </div>
      
      <div id="map" className="w-full h-full absolute top-0 left-0 z-10">
        <LeafletMap />
      </div>
    </div>
  );
};

export default MapComponent;
