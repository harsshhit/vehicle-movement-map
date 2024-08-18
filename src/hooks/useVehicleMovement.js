import { useState, useEffect } from "react";

const useVehicleMovement = (pathCoordinates) => {
  const [currentLocation, setCurrentLocation] = useState(pathCoordinates[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setCurrentLocation(pathCoordinates[index]);
      index = (index + 1) % pathCoordinates.length;
    }, 2000);

    return () => clearInterval(interval);
  }, [pathCoordinates]);

  return currentLocation;
};

export default useVehicleMovement;
