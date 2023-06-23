import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { Chip, Group } from '@mantine/core';

const LeafletMap = dynamic(() => import('./LeafletMap'), { ssr: false });

const MapComponent: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    console.log('Realizar búsqueda:', searchValue);
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
      <div className="absolute top-16 left-5 z-20 mt-4 md:mt-8 lg:mt-12">
        <Chip.Group multiple>
          <Group position="center" mt="md">
            <Chip value="1">Multiple chips</Chip>
            <Chip value="2">Can be selected</Chip>
            <Chip value="3">At a time</Chip>
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
