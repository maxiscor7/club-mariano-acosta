import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import "./MapaClub.css"
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import markerIcon from '../assets/logo.png'; // Ruta al ícono de marcador personalizado


let customIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [35, 41], // Tamaño del ícono
  iconAnchor: [12, 41], // Punto de anclaje del ícono
  popupAnchor: [1, -34] // Punto de anclaje del popup
});

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


export default function MapaClub() {
    return (
        <div>
            <MapContainer  center={[-34.7194387,-58.7918921]} zoom={15} scrollWheelZoom={false}>
                <TileLayer 
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-34.7194587,-58.7917931]} icon={customIcon}>
                    <Popup>
                        Sede social <br /> Club Mariano Acosta. <br/> Cnel. Salvadores 2667.
                    </Popup>
                </Marker>
                <Marker position={[-34.7216799,-58.7915741]} icon={customIcon}>
                    <Popup>
                    Anexo polideportivo <br/> Mariano Acosta. <br/> Diamante esq Bossini.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}