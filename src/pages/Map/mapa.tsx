import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Chip, Group } from "@mantine/core";

const MapComponent: React.FC = () => {
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

  return (
    <div className="flex items-center justify-center h-screen">
      <div id="map" className="w-full h-full">
        
      </div>
      
        
      
    </div>
  );
};

export default MapComponent;
