import React, { useEffect, useRef } from 'react';
import { Markerlocations, Circlelocations } from '../../../lib/MapLocations';
import { Circle } from '@chakra-ui/react';
import { api } from '~/utils/api';
import { red } from '@mui/material/colors';

let mapInstance: L.Map | null = null; // Referencia al mapa

// Centra el mapa en las coordenadas dadas, las cuales son obtenidas de la dirección ingresada del otro archivo
export const centerMap = (lat: number, lng: number) => {
  if (mapInstance) {
    mapInstance.setView([lat, lng], 18);
    console.log('Centrado en:', lat, lng);
  }
};

// // Manejador para obtener las coordenadas del centro del mapa
export const handleGetCurrentMapCenter = () => {
  if (mapInstance) {
    const center = mapInstance.getCenter();
    console.log(`Coordenadas del centro del mapa: ${center.lat}, ${center.lng}`);

    return { lat: center.lat, lng: center.lng };  }
};

const LeafletMap: React.FC = () => {
  const mapRef = useRef<L.Map | null>(null);

  const activePosts = api.post.getPosts.useQuery({});

  // const dataPosts = activePosts?.data?.map((post) => {
  //   const title = post.title;
  //   const location = post.location;
  //   const descriptionPost = post.description;
  //   const image = post.image;
  //   const category = "Perdido";
  //   const lat = post.lat;
  //   const lng = post.lng;
  //   const radius = 500;
  //   const color = "orange";
  //   const fixedDescription = descriptionPost ?? '';

  //   console.log(post);

  //   if (lat === 0 || lng === 0) {
  //     return
  //   }else{
  //     return { title, location, descriptionPost, image, category, lat, lng, radius, color, fixedDescription};
  //   }
  // });

  useEffect(() => {
    import('leaflet').then((L) => {
      if (typeof window !== 'undefined') {
        const myIcon = L.icon({
          iconUrl: 'marcador.png',
          iconSize: [40, 40],
        });

        const map = L.map('map').setView([-36.5039461, -63.8486787], 5); // Coordenadas de Argentina
        mapRef.current = map;
        mapInstance = map; // Asigna el mapa a la referencia mapInstance

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

        // Esto es para obtener la ubicación del usuario. No sé por qué pero no es precisa
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              const userLocation = L.latLng(latitude, longitude);
              map.setView(userLocation, 15); // Centrar el mapa en la ubicación con zoom 15
            },
            (error) => {
              console.error('Error getting user location:', error);
            }
          );
        }

        //Funcion para agregar los marcadores
        function addMarker(lat: number, lng: number, name: string, description: string, category: string) {
          const marker = L.marker([lat, lng], { icon: myIcon })
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

        //Funcion para agregar circulos de áreas
        function addArea(lat: number, lng: number, radius: number, color: string, name: string, description: string, category: string) {
          const area = L.circle([lat, lng], { radius: radius, color: color })
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

        //Recorre la lista de ubicaciones y agrega los marcadores
        // Markerlocations.forEach((location) => {
        //   const { lat, lng, name, description, category } = location;

        //   // Asigna una descripción vacía si description es null o undefined
        //   const fixedDescription = description ?? '';

        //   addMarker(lat, lng, name, fixedDescription, category);
        // });

        // Circlelocations.forEach((location) => {
        //   addArea(location.lat, location.lng, location.radius, location.color, location.name, location.description, location.category);
        // });

        //Lo mismo pero con áreas
        activePosts?.data?.map((post) => {
          const title = post.title;
          const descriptionPost = post.description;
          const category = "Perdido";
          const lat = post.lat ?? 0;
          const lng = post.lng ?? 0;
          const radius = 500;
          const color = "orange";
          const fixedDescription = descriptionPost ?? '';
 
          addArea(lat, lng, radius, color, title, fixedDescription, category);
        }
        );
        



      }
    }).catch((error) => {
      console.log('Error loading Leaflet:', error);
    });
  }, [activePosts]);

  return <div id="map" className="w-full h-full" style={{ height: '100vh' }} />;
};

export default LeafletMap;