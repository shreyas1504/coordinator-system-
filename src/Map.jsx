// Map.js
import React, { useEffect } from 'react';
import L from 'leaflet';

const Map = () => {
  // Define allocatedRoutes data with three routes
  const allocatedRoutes = [
    {
      latLngs: [[30.3398, 76.3869], [30.3401, 76.3872], [30.3397, 76.3874]], // Example coordinates for route 1
      color: 'red',
      description: 'Route 1: Example Route Description',
    },
    {
      latLngs: [[30.3398, 76.3869], [30.3405, 76.3878], [30.3401, 76.3880]], // Example coordinates for route 2
      color: 'blue',
      description: 'Route 2: Example Route Description',
    },
    {
      latLngs: [[30.3398, 76.3869], [30.341, 76.388], [30.341, 76.3885]], // Example coordinates for route 3
      color: 'green',
      description: 'Route 3: Example Route Description',
    },
    // Add more routes if needed
  ];

  useEffect(() => {
    const map = L.map('map').setView([30.3398, 76.3869], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    if (Array.isArray(allocatedRoutes)) {
      allocatedRoutes.forEach((route, index) => {
        if (
          Array.isArray(route.latLngs) &&
          route.latLngs.length > 1 &&
          typeof route.color === 'string'
        ) {
          L.polyline(route.latLngs, { color: route.color })
            .addTo(map)
            .bindPopup(route.description);
        }
      });
    }

    return () => {
      map.remove();
    };
  }, [allocatedRoutes]);

  return (
    <div style={{ textAlign: 'center', margin: '20px auto', maxWidth: '600px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      
      {/* Map component */}
      <div id="map" style={{ height: '500px', width: '100%' }}></div>
    </div>
  );
};

export default Map;
