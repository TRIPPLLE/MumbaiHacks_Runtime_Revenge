import React, { useEffect, useState } from 'react';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import api from '../../utils/api';
import { Search, Filter, MoreVertical } from 'lucide-react';

const HospitalList = () => {
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

  const handleStatusUpdate = async (id, status) => {
    try {
      await api.put(`/hospitals/${id}/status`, { status });
      setHospitals(hospitals.map(h => h._id === id ? { ...h, status } : h));
    } catch (error) {
      console.error('Failed to update status', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Hospital Management</h1>
        <Button>Add New Hospital</Button>
      </div>

      <Card className="p-0 overflow-hidden">
        {/* Table Header / Filters */}
        <div className="p-4 border-b border-white/10 flex gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search hospitals..."
              className="w-full bg-surface/50 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary/50"
            />
          </div>
          <Button variant="secondary" className="gap-2">
            <Filter size={18} /> Filter
          </Button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-white/10 text-gray-400 text-sm">
                <th className="p-4 font-medium">Hospital Name</th>
                <th className="p-4 font-medium">Location</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Subscription</th>
                <th className="p-4 font-medium">Admin</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {loading ? (
                <tr>
                  <td colSpan="6" className="p-8 text-center text-gray-400">Loading...</td>
                </tr>
              ) : hospitals.map((hospital) => (
                <tr key={hospital._id} className="hover:bg-white/5 transition-colors">
                  <td className="p-4">
                    <div className="font-medium text-white">{hospital.name}</div>
                    <div className="text-xs text-gray-400">ID: {hospital._id.slice(-6)}</div>
                  </td>
                  <td className="p-4 text-sm text-gray-300">{hospital.address}</td>
                  <td className="p-4">
                    <Badge variant={
                      hospital.status === 'approved' ? 'success' : 
                      hospital.status === 'pending' ? 'warning' : 'danger'
                    }>
                      {hospital.status}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <Badge variant="info">{hospital.subscriptionPlan}</Badge>
                  </td>
                  <td className="p-4 text-sm text-gray-300">{hospital.adminUser?.name || 'N/A'}</td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      {hospital.status === 'pending' && (
                        <>
                          <Button 
                            size="sm" 
                            variant="primary" 
                            className="py-1 px-2 text-xs"
                            onClick={() => handleStatusUpdate(hospital._id, 'approved')}
                          >
                            Approve
                          </Button>
                          <Button 
                            size="sm" 
                            variant="danger" 
                            className="py-1 px-2 text-xs"
                            onClick={() => handleStatusUpdate(hospital._id, 'rejected')}
                          >
                            Reject
                          </Button>
                        </>
                      )}
                      <button className="p-1 hover:bg-white/10 rounded">
                        <MoreVertical size={18} className="text-gray-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default HospitalList;
