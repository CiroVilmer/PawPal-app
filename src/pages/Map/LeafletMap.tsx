import React, { useEffect, useRef } from 'react';

const LeafletMap: React.FC = () => {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    import('leaflet').then((L) => {
      if (typeof window !== 'undefined') {
        const myIcon = L.icon({
          iconUrl: 'marcador.png',
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

        // Agregar marcador en la posición especificada
        const doctorsHouseMarker = L.marker([-34.5550092,-58.4844013], { icon: myIcon })
          .bindPopup('<b>Doctors House</b><br>Descripcion')
          .addTo(mapRef.current!);

        // Hacer que el popup aparezca al pasar el mouse sobre el marcador (hover)
        doctorsHouseMarker.on('mouseover', () => {
          doctorsHouseMarker.openPopup();
        });

        // Cerrar el popup al retirar el mouse del marcador
        doctorsHouseMarker.on('mouseout', () => {
          doctorsHouseMarker.closePopup();
        });
      }
    }).catch((error) => {
      console.log('Error loading Leaflet:', error);
    });
  }, []);

  return <div id="map" className="w-full h-full" style={{ height: '100vh' }} />;
};

export default LeafletMap;
