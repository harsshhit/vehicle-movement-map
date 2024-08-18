// // src/services/api.js

// /**
//  * Fetch real-time vehicle location data from a server.
//  * @returns {Promise} Returns a promise that resolves to the vehicle's current location data.
//  */
// export const fetchVehicleLocation = async () => {
//   const API_URL = "https://your-api-endpoint.com/vehicle-location";

//   try {
//     const response = await fetch(API_URL);
//     if (!response.ok) {
//       throw new Error("Failed to fetch vehicle location");
//     }
//     const data = await response.json();
//     return data.location; // Assuming the API returns an object with a `location` field
//   } catch (error) {
//     console.error("Error fetching vehicle location:", error);
//     return null;
//   }
// };

// /**
//  * Fetch the path coordinates for the vehicle's route.
//  * @returns {Promise} Returns a promise that resolves to an array of path coordinates.
//  */
// export const fetchRoutePath = async () => {
//   const API_URL = "https://your-api-endpoint.com/vehicle-route";

//   try {
//     const response = await fetch(API_URL);
//     if (!response.ok) {
//       throw new Error("Failed to fetch route path");
//     }
//     const data = await response.json();
//     return data.path; // Assuming the API returns an object with a `path` field
//   } catch (error) {
//     console.error("Error fetching route path:", error);
//     return null;
//   }
// };
