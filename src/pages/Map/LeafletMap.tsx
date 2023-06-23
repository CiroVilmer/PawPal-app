import React, { useEffect } from 'react';
import L from 'leaflet';

const LeafletMap: React.FC = () => {
    useEffect(() => {
        const map = L.map('map').setView([-34.5695195, -58.4468003], 12); // Coordenadas de Buenos Aires (Latitud, Longitud, Zoom)

        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20,
        }).addTo(map);

        const marker = L.marker([-34.5499958, -58.454212]).addTo(map); //Poner el icono
        marker.bindPopup("<b>Estás en ORT!</b><br>La sede de PAWPAL").openPopup();

        return () => {
            map.remove();
        };
    }, []);

    return <div id="map" className="w-full h-full" />;
};

export default LeafletMap;
