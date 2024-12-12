import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Placeholder icon for markers
const defaultIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/64/64113.png',
  iconSize: [30, 30],
});

const MapComponent = ({ selectedProfile }) => {
  if (!selectedProfile) {
    return <div>Select a profile to view its location</div>;
  }

  const { lat, lng, name } = selectedProfile;

  return (
    <MapContainer center={[lat, lng]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={[lat, lng]} icon={defaultIcon}>
        <Popup>
          {name} Location
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;




