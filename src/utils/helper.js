
/**
 * @param {Array} coordinates - Array of objects with lat and lng properties.
 * @returns {Array} Array formatted for use in Leaflet components.
 */
export const formatCoordinates = (coordinates) => {
  return coordinates.map((coord) => [coord.lat, coord.lng]);
};

/**
 * @param {Object} coord1 - Object with lat and lng properties.
 * @param {Object} coord2 - Object with lat and lng properties.
 * @returns {Number} Distance in kilometers.
 */
export const calculateDistance = (coord1, coord2) => {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = ((coord2.lat - coord1.lat) * Math.PI) / 180;
  const dLng = ((coord2.lng - coord1.lng) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((coord1.lat * Math.PI) / 180) *
      Math.cos((coord2.lat * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; 
};
