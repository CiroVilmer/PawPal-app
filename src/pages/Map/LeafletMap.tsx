import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import markerIcon from '../../../public/marcador.png';

var myIcon = L.icon({
  iconUrl: 'https://play-lh.googleusercontent.com/G5Z7H6eE-n5tSuCszYbf_SZHRAIEmB-zLzZk_DGOMKsf7um_thkZS4QbXcMn6Tql8nVI',
  // iconUrl: markerIcon.toString(),
  iconSize: [40, 40],
});

const LeafletMap: React.FC = () => {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const map = L.map('map').setView([-36.5039461, -63.8486787], 5); // Argentina
    mapRef.current = map;

    const bounds = L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180)); //Limites del mapa
    map.setMaxBounds(bounds);

    map.on('drag', () => {
      map.panInsideBounds(bounds, { animate: false }); //No permite que se arrastre el mapa fuera de los limites
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      minZoom: 3,
      maxZoom: 20,
    }).addTo(map);

    function addMarker(lat: number, lng: number, name: string, description: string, myImage: string) { // Agrega un marcador al mapa
      if (mapRef.current) {
        var marker = L.marker([lat, lng], { icon: myIcon }).addTo(mapRef.current);

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

    addMarker(-34.5499958, -58.454212, 'ORT', 'La sede de PAWPAL', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJARrtwWfIeKn_D67r5yTFqvvy6X_FvlHloU23f1UGzvAvsIMDKLl92xO2qhIllEnbU4&usqp=CAU');

    return () => {
      map.remove();
    };
  }, []);

  useEffect(() => { //Centra el mapa en la ubicacion del usuario
    if (navigator.geolocation && mapRef.current) { 
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
