function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
export function generateRandomLocations(centerLat, centerLng, numberOfPoints, maxDistanceKm) {
    const locations = [];
    const earthRadiusKm = 6371; // Radius of the Earth in kilometers

    for (let i = 0; i < numberOfPoints; i++) {
        // Generate a random distance and angle
        const distanceKm = Math.random() * maxDistanceKm;
        const angle = Math.random() * 2 * Math.PI;

        // Calculate new latitude and longitude
        const deltaLat = distanceKm / earthRadiusKm;
        const deltaLng = distanceKm / (earthRadiusKm * Math.cos((Math.PI * centerLat) / 180));

        const lat = centerLat + deltaLat * Math.cos(angle);
        const lng = centerLng + deltaLng * Math.sin(angle);

        const randomNum = generateRandomNumber(10, 100)
        locations.push({ latitude: lat, longitude: lng, price: randomNum, currency: '$' });
    }

    return locations;
}



// Usage
const centerPoint = { latitude: 23.794716682329422, longitude: 90.41353033484006 };
export const sampleLocaiton =  generateRandomLocations(centerPoint.latitude, centerPoint.longitude, 30, 50);