import React, { useEffect, useRef } from 'react';
import { Markerlocations, Circlelocations } from '../../../lib/MapLocations';
import { Circle } from '@chakra-ui/react';

const LeafletMap: React.FC = () => {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    import('leaflet').then((L) => {
      if (typeof window !== 'undefined') {
        const myIcon = L.icon({
          iconUrl: 'marcador.png',
          iconSize: [40, 40],
        });

        const map = L.map('map').setView([-36.5039461, -63.8486787], 5); // Coordenadas de Argentina
        mapRef.current = map;

        const bounds = L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180)); // Limite del mapa
        map.setMaxBounds(bounds);

        map.on('drag', () => {
          map.panInsideBounds(bounds, { animate: false }); // Para que no se pueda arrastrar el mapa fuera de los límites
        });

        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          minZoom: 3,
          maxZoom: 20,
        }).addTo(map);

        // Esto es para obtener la ubicación del usuario. No se porque pero no es precisa
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              const userLocation = L.latLng(latitude, longitude);
              map.setView(userLocation, 15); // Centrar el mapa en la ubicación con zoom 15

              // // Agregar marcador en la ubicación del usuario con descripción (popup)
              // const userMarker = L.marker(userLocation, { icon: myIcon })
              //   .bindPopup('<b>Ubicación Actual</b><br>Tu ubicación')
              //   .addTo(mapRef.current!);
              // // Hacer que el popup aparezca al pasar el mouse sobre el marcador (hover)
              // userMarker.on('mouseover', () => {
              //   userMarker.openPopup();
              // });
              // // Cerrar el popup al retirar el mouse del marcador
              // userMarker.on('mouseout', () => {
              //   userMarker.closePopup();
              // });
            },
            (error) => {
              console.error('Error getting user location:', error);
            }
          );
        }

        //Funcion para agregar los marcadores
        function addMarker(lat: number, lng: number, name: string, description: string, category: string) {
          const marker = L.marker([lat,lng], { icon: myIcon })
            .bindPopup(`<b>${name}</b><br>${description}`)
            .addTo(mapRef.current!);
          // Hacer que el popup aparezca al pasar el mouse sobre el marcador (hover)
          marker.on('mouseover', () => {
            marker.openPopup();
          });
          // Cerrar el popup al retirar el mouse del marcador
          marker.on('mouseout', () => {
            marker.closePopup();
          });
        }

        //Funcion para agregar circulos de areas
        function addArea (lat: number, lng: number, radius: number, color: string, name: string, description: string, category: string) {
          const area = L.circle([lat, lng], { radius: radius, color: color})
            .bindPopup(`<b>${name}</b><br>${description}`)
            .addTo(mapRef.current!);
          // Hacer que el popup aparezca al pasar el mouse sobre el marcador (hover)
          area.on('mouseover', () => {
            area.openPopup();
          });
          // Cerrar el popup al retirar el mouse del marcador
          area.on('mouseout', () => {
            area.closePopup();
          });
        }


        // const Markerlocations = [
        //   { lat: -34.5550092, lng: -58.4844013, name: 'Doctors House', description: 'Descripcion', category: 'Home' },
        // ];
      
        // const Circlelocations = [
        //   { lat: -34.5497574, lng: -58.4541175, radius: 500, color: 'orange', name: 'Perro perdido', description: 'Se perdio Pancho, es un golden cachorro', category: 'LostDog' },
        //   { lat: -34.5366564, lng: -58.4548797, radius: 500, color: 'red', name: 'Perro perdido', description: 'Se perdio Pancho, es un golden adulto', category: 'LostDog' },
        //   { lat: -34.5626489, lng: -58.4528739, radius: 500, color: 'green', name: 'Perro perdido', description: 'Se perdio Pancho, es un galgo adulto', category: 'LostDog' },
        // ];  


        //Recorre la lista de ubicaciones y agrega los marcadores
        Markerlocations.forEach((location) => {
          addMarker(location.lat, location.lng, location.name, location.description, location.category);
        }, []);
        //Lo mismo pero con areas
        Circlelocations.forEach((location) => {
          addArea(location.lat, location.lng, location.radius, location.color, location.name, location.description, location.category);
        }, []);


      }
    }).catch((error) => {
      console.log('Error loading Leaflet:', error);
    });
  }, []);

  return <div id="map" className="w-full h-full" style={{ height: '100vh' }} />;
};

export default LeafletMap;
