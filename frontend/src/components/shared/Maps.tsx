// src/components/shared/Maps.tsx
"use client";
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngBounds } from 'leaflet';

// Import the India GeoJSON file you provided
import indiaBoundary from '../../services/india.json';

const indiaData = indiaBoundary as any;

// A child component to handle fitting the map to the GeoJSON boundaries.
// It uses useMap() hook to get a reference to the map instance.
const FitBoundsToGeoJSON = () => {
  const map = useMap();
  useEffect(() => {
    if (map) {
      const geoJsonLayer = L.geoJSON(indiaData);
      const bounds = geoJsonLayer.getBounds();
      map.fitBounds(bounds, { padding: [20, 20] });
    }
  }, [map]);
  return null;
};

const IndiaMap = () => {
  return (
    <div style={{ height: '300px', width: '80%' }}>
      <MapContainer
        key="india-map" // A unique key ensures the component remounts on navigation
        center={[22.3511148, 78.6677428]}
        zoom={5}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          data={indiaData}
          style={{ color: 'blue', weight: 2, fillOpacity: 0.3 }}
        />
        <FitBoundsToGeoJSON />
      </MapContainer>
    </div>
  );
};

export default IndiaMap;