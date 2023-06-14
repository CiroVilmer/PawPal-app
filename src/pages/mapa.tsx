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
    <div className="map-container">
      <div id="map"></div>

      <style jsx>{`
        .map-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }

        #map {
          width: 100%;
          height: 100%;
          max-width: 100%;
          max-height: 100%;
          // border: gray 8px solid;
          // border-radius: 8px;
          // outline: none;
        }
      `}</style>
    </div>
  );
};

export default MapComponent;
