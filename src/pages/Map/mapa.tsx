import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Chip, Group } from "@mantine/core";

const MapComponent: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const map = L.map('map').setView([-34.5695195, -58.4468003], 12);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20,
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  const handleSearch = () => {
    console.log('Realizar búsqueda:', searchValue);
    // Aquí puedes implementar la lógica de búsqueda en el mapa utilizando el valor de searchValue
  };

  return (
    <div className="relative h-screen">
      <div className="absolute top-5 left-20 z-20">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Buscar..."
          className="px-2 py-1 rounded"
        />
        <button onClick={handleSearch} className="px-4 py-1 ml-2 bg-orange-400 text-white rounded">
          Buscar
        </button>
      </div>
      <div id="map" className="w-full h-full absolute top-0 left-0 z-10"></div>
    </div>
  );
};

export default MapComponent;
