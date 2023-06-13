import React, { useEffect } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

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
    <div className="flex max-h-screen justify-center items-center">
      <div id="map" style={{ margin: '0 auto', width: '50%', minHeight: '400px', maxHeight: '500px', height: '100%', border: 'gray 8px solid', borderRadius: '8px'}}></div>
    </div>
  );
};

export default MapComponent;
