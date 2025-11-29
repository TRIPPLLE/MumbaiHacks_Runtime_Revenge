import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ProtectedRoute from './components/Layout/ProtectedRoute';
import DashboardLayout from './components/Layout/DashboardLayout';

import AdminDashboard from './pages/Admin/Dashboard';
import HospitalList from './pages/Admin/HospitalList';

import MapPage from './pages/Admin/MapPage';

import HospitalDashboard from './pages/HospitalHead/Dashboard';

import HODDashboard from './pages/HOD/Dashboard';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Admin Routes */}
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/admin/*" element={
            <DashboardLayout>
              <Routes>
                <Route index element={<AdminDashboard />} />
                <Route path="hospitals" element={<HospitalList />} />
                <Route path="forecast" element={<div>Global Forecast</div>} />
                <Route path="map" element={<MapPage />} />
              </Routes>
            </DashboardLayout>
          } />
        </Route>

        {/* Hospital Head Routes */}
        <Route element={<ProtectedRoute allowedRoles={['hospital_head']} />}>
          <Route path="/hospital/*" element={
            <DashboardLayout>
              <Routes>
                <Route index element={<HospitalDashboard />} />
                <Route path="departments" element={<div>Departments</div>} />
                <Route path="analytics" element={<div>Analytics</div>} />
                <Route path="subscription" element={<div>Subscription</div>} />
              </Routes>
            </DashboardLayout>
          } />
        </Route>

        {/* HOD Routes */}
        <Route element={<ProtectedRoute allowedRoles={['hod']} />}>
          <Route path="/hod/*" element={
            <DashboardLayout>
              <Routes>
                <Route index element={<HODDashboard />} />
                <Route path="staffing" element={<div>Staffing</div>} />
                <Route path="supplies" element={<div>Supplies</div>} />
                <Route path="alerts" element={<div>Alerts</div>} />
              </Routes>
            </DashboardLayout>
          } />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
