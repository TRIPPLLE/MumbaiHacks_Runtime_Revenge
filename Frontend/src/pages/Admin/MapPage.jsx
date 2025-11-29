import React from 'react';
import MapView from '../../components/Map/MapView';

const MapPage = () => {
  return (
    <div className="space-y-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Hospital Network Map</h1>
        <div className="flex gap-2">
          <span className="text-sm text-gray-400">Live View</span>
        </div>
      </div>
      <MapView />
    </div>
  );
};

export default MapPage;
