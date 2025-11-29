import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { Building2 } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    hospitalName: '',
    address: '',
    lat: '',
    lng: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await register(formData);
    
    if (result.success) {
      navigate('/');
    } else {
      setError(result.message);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden py-10">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <Card className="w-full max-w-2xl backdrop-blur-xl bg-surface/30 border-white/10">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center shadow-lg shadow-secondary/20">
              <Building2 className="text-white" size={24} />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Register Hospital</h1>
          <p className="text-gray-400">Join Aarogyantix network</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-3 rounded-lg bg-danger/10 border border-danger/20 text-danger text-sm text-center">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Admin Details</h3>
              <Input
                label="Full Name"
                name="name"
                placeholder="Admin Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                label="Email Address"
                name="email"
                type="email"
                placeholder="admin@hospital.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                label="Password"
                name="password"
                type="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Hospital Details</h3>
              <Input
                label="Hospital Name"
                name="hospitalName"
                placeholder="Hospital Name"
                value={formData.hospitalName}
                onChange={handleChange}
                required
              />
              <Input
                label="Address"
                name="address"
                placeholder="Full Address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <div className="grid grid-cols-2 gap-2">
                <Input
                  label="Latitude"
                  name="lat"
                  type="number"
                  step="any"
                  placeholder="19.0760"
                  value={formData.lat}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Longitude"
                  name="lng"
                  type="number"
                  step="any"
                  placeholder="72.8777"
                  value={formData.lng}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full" isLoading={loading}>
            Register Hospital
          </Button>

          <p className="text-center text-sm text-gray-400 mt-4">
            Already registered?{' '}
            <Link to="/login" className="text-primary hover:text-primary/80 font-medium">
              Sign In
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default Register;
