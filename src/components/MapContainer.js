import React from "react";
import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapContainer = ({ children }) => {
  return (
    <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
      <LeafletMap center={center} zoom={14} className="w-full h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {children}
      </LeafletMap>
    </div>
  );
};

const center = {
  lat: 19.076,
  lng: 72.8777,
};

export default MapContainer;
