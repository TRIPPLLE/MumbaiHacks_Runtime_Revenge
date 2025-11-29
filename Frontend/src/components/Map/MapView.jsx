import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import api from '../../utils/api';
import { Building2 } from 'lucide-react';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapView = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const { data } = await api.get('/hospitals');
        setHospitals(data);
      } catch (error) {
        console.error('Failed to fetch hospitals', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHospitals();
  }, []);

  // Mumbai Coordinates
  const center = [19.0760, 72.8777];

  if (loading) {
    return <div className="h-full w-full flex items-center justify-center text-white">Loading Map...</div>;
  }

  return (
    <div className="h-[calc(100vh-120px)] w-full rounded-xl overflow-hidden border border-white/10 relative z-0">
      <MapContainer center={center} zoom={11} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {hospitals.map((hospital) => (
          <Marker 
            key={hospital._id} 
            position={[hospital.location.lat, hospital.location.lng]}
          >
            <Popup className="glass-popup">
              <div className="p-2 min-w-[200px]">
                <h3 className="font-bold text-lg text-gray-900">{hospital.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{hospital.address}</p>
                <div className="flex gap-2 mt-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    hospital.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {hospital.status}
                  </span>
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {hospital.subscriptionPlan}
                  </span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
