import React, { useEffect, useRef } from 'react';
import L from 'leaflet'; // Import Leaflet library
import markerIcon from '../../../public/marcador.png';

const LeafletMap: React.FC = () => {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const myIcon = L.icon({
        iconUrl: markerIcon.toString(),
        iconSize: [40, 40],
      });

      const map = L.map('map').setView([-36.5039461, -63.8486787], 5); // Argentina
      mapRef.current = map;

      const bounds = L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180)); // Map boundaries
      map.setMaxBounds(bounds);

      map.on('drag', () => {
        map.panInsideBounds(bounds, { animate: false }); // Prevent dragging the map outside the boundaries
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        minZoom: 3,
        maxZoom: 20,
      }).addTo(map);

      // Rest of your Leaflet-related code here

      // Solicitar geolocalización al usuario
      if ('geolocation' in navigator) {
        // ...
      }
    }
  }, []); // Empty dependency array ensures this code runs only once, after mount

  return <div id="map" className="w-full h-full" style={{ height: '100vh' }} />;
};

export default LeafletMap;
