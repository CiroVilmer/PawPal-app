import React, { useEffect } from 'react';
import L from 'leaflet';

var myIcon = L.icon({
    iconUrl: 'https://play-lh.googleusercontent.com/G5Z7H6eE-n5tSuCszYbf_SZHRAIEmB-zLzZk_DGOMKsf7um_thkZS4QbXcMn6Tql8nVI',
    iconSize: [40, 40],
});

const LeafletMap: React.FC = () => {
    useEffect(() => {
        const map = L.map('map').setView([-34.5695195, -58.4468003], 12);

        const bounds = L.latLngBounds(
            L.latLng(-90, -180),
            L.latLng(90, 180)
        );

        map.setMaxBounds(bounds); // Establecer los límites del mapa
        map.on('drag', () => { map.panInsideBounds(bounds, { animate: false }); }); // Mantener al usuario dentro de los límites durante el arrastre

        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            minZoom: 3,
            maxZoom: 20,
        }).addTo(map);

        function addMarker(lat: number, lng: number, name: string, description: string, myImage: string) {
            var marker = L.marker([lat, lng], { icon: myIcon }).addTo(map);
            
            const content = document.createElement('div');
            content.innerHTML = `<b>${name}</b><br>${description}<br>${myImage ? `<img src=${myImage} />` : ''}`;
            content.style.textAlign = 'center';
          
            marker.bindPopup(content).openPopup();
          }
          

        //PLANTILLA PARA AGREGAR MARCADORES AL MAPA
        //addMarker(-lat, lng, "nombre", "descripcion");
        addMarker(-34.5499958, -58.454212, "ORT", "La sede de PAWPAL", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJARrtwWfIeKn_D67r5yTFqvvy6X_FvlHloU23f1UGzvAvsIMDKLl92xO2qhIllEnbU4&usqp=CAU");

        return () => {
            map.remove();
        };
    }, []);

    return <div id="map" className="w-full h-full" />;
};

export default LeafletMap;