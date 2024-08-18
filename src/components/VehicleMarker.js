import React from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";

const vehicleIcon = new L.Icon({
  iconUrl: "https://img.icons8.com/?size=48&id=15126&format=png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function VehicleMarker({ position }) {
  return (
    <div className="relative">
      {/* Marker Component */}
      <Marker position={position} icon={vehicleIcon} />

      <div
        className="absolute z-10 bg-white p-2 rounded-lg shadow-md"
        style={{ transform: "translate(-50%, -100%)" }}
      >
        <span className="text-sm font-semibold text-gray-800">Vehicle</span>
      </div>
    </div>
  );
}

export default VehicleMarker;
