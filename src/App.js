import React, { useState } from "react";
import MapContainer from "./components/MapContainer";
import VehicleMarker from "./components/VehicleMarker";
import RoutePath from "./components/RoutePath";
import useVehicleMovement from "./hooks/useVehicleMovement";
import { useMap } from "react-leaflet";

const pathCoordinates = [
  { lat: 28.6139, lng: 77.209 },
  { lat: 28.616, lng: 77.212 },
  { lat: 28.618, lng: 77.214 },
  { lat: 28.62, lng: 77.216 },
  { lat: 28.623, lng: 77.218 },
  { lat: 28.626, lng: 77.219 },
  { lat: 28.628, lng: 77.2197 },
];

function SetViewOnCurrentLocation({ position }) {
  const map = useMap();

  React.useEffect(() => {
    if (position) {
      map.setView([position.lat, position.lng], 15);
    }
  }, [position, map]);

  return null;
}

function App() {
  const [userLocation, setUserLocation] = useState(null);
  const [error, setError] = useState(null);

  const vehicleLocation = useVehicleMovement(pathCoordinates);

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          setError(null);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  const currentLocation = userLocation || vehicleLocation;

  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-100 text-gray-900 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">Vehicle Movement on a Map</h1>

      <button
        onClick={handleGetCurrentLocation}
        className="mb-6 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Get Current Location
      </button>

      {error && <p className="mb-4 text-red-500">{`Error: ${error}`}</p>}

      <div className="w-full max-w-4xl bg-gray-800 p-4 rounded-lg shadow-lg">
        <MapContainer className="rounded-lg overflow-hidden">
          <SetViewOnCurrentLocation position={currentLocation} />
          <VehicleMarker position={currentLocation} />
          <RoutePath path={pathCoordinates} />
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
