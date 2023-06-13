import React, { useEffect } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

// https://leaflet-extras.github.io/leaflet-providers/preview/
const MapComponent: React.FC = () => {
  useEffect(() => {
    const map = L.map('map').setView([-34.5695195, -58.4468003], 12);

    //ESTE DE ABAJO ES SIMPLE Y LINDO PERO NO TIENE LUGARES
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd', 
      maxZoom: 20,
    }).addTo(map);

    //ESTE TIENE LUGARES PERO NO ES LINDO
    // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   maxZoom: 19,
    //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);

    //ESTE TIENE LUGARES Y ESTA LINDO
    // L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
    //   maxZoom: 20,
    //   attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    // }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="flex max-h-screen justify-center items-center">
      <div id="map" style={{ margin: '0 auto', width: '50%', minHeight: '400px', maxHeight: '500px', height: '100%', border: 'gray 8px solid', borderRadius: '8px' }}></div>
    </div>
  );
};

export default MapComponent;
