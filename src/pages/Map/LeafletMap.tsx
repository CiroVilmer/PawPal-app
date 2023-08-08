import React, { useEffect, useRef } from 'react';
import markerIcon from '../../../public/marcador.png';
import L from 'leaflet';

// Función para agregar marcadores
function addMarker(
  map: L.Map,
  lat: number,
  lng: number,
  name: string,
  description: string,
  myImage: string
) {
  const myIcon = L.icon({
    iconUrl: markerIcon.toString(),
    iconSize: [40, 40],
  });

  const marker = L.marker([lat, lng], { icon: myIcon }).addTo(map);

  const content = document.createElement('div');
  content.innerHTML = `<b>${name}</b><br>${description}<br>${myImage ? `<img src=${myImage} />` : ''}`;
  content.style.textAlign = 'center';

  const popup = marker.bindPopup(content);

  marker.on('mouseover', function () {
    popup.openPopup();
  });

  marker.on('mouseout', function () {
    popup.closePopup();
  });
}

const LeafletMap: React.FC = () => {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    import('leaflet').then((L) => {
      if (typeof window !== 'undefined') {
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

        // Solicitar geolocalización al usuario
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              const userLocation = L.latLng(latitude, longitude);
              map.setView(userLocation, 15); // Centrar el mapa en la ubicación con zoom 15

              // Agregar marcador en la ubicación del usuario
              addMarker(map, userLocation.lat, userLocation.lng, 'Tu ubicación', '', '');

              // Agregar marcador en Nueva York
              addMarker(map, 40.7128, -74.0060, 'Nueva York', 'La Gran Manzana', '');
            },
            (error) => {
              console.error('Error getting user location:', error);
            }
          );
        }
      }
    }).catch((error) => {
      console.log('Error loading Leaflet:', error);
    });
  }, []);

  return <div id="map" className="w-full h-full" style={{ height: '100vh' }} />;
};

export default LeafletMap;
