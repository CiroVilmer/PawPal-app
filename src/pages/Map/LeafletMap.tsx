import React, { useEffect, useRef } from 'react';
import markerIcon from '../../../public/marcador.png';


const LeafletMap: React.FC = () => {  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    import('leaflet').then((L) => {
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

        function addMarker(lat: number, lng: number, name: string, description: string, myImage: string) {
          if (mapRef.current) {
            const marker = L.marker([lat, lng], { icon: myIcon }).addTo(mapRef.current);

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
        }

        addMarker(
          -34.5499958,
          -58.454212,
          'ORT',
          'La sede de PAWPAL',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJARrtwWfIeKn_D67r5yTFqvvy6X_FvlHloU23f1UGzvAvsIMDKLl92xO2qhIllEnbU4&usqp=CAU'
        );
      }
    }).catch((error) => {
      console.log('Error loading Leaflet:', error);
    });
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && navigator.geolocation && mapRef.current) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const { latitude, longitude } = position.coords;
          const map = mapRef.current;
          if (map) {
            map.setView([latitude, longitude], 13);
          }
        },
        function (error) {
          console.log(error);
        }
      );
    }
  }, []);

  return <div id="map" className="w-full h-full" style={{ height: '100vh' }} />;
};

export default LeafletMap;
