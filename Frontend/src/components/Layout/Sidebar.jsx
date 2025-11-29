import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  LayoutDashboard, 
  Building2, 
  Users, 
  Activity, 
  Map as MapIcon, 
  Settings, 
  LogOut,
  Stethoscope,
  Truck,
  Wind,
  Calendar
} from 'lucide-react';
import { clsx } from 'clsx';

const Sidebar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const links = {
    admin: [
      { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
      { name: 'Hospitals', path: '/admin/hospitals', icon: Building2 },
      { name: 'Global Forecast', path: '/admin/forecast', icon: Activity },
      { name: 'Map View', path: '/admin/map', icon: MapIcon },
    ],
    hospital_head: [
      { name: 'Dashboard', path: '/hospital', icon: LayoutDashboard },
      { name: 'Departments', path: '/hospital/departments', icon: Users },
      { name: 'Analytics', path: '/hospital/analytics', icon: Activity },
      { name: 'Subscription', path: '/hospital/subscription', icon: Settings },
    ],
    hod: [
      { name: 'Dashboard', path: '/hod', icon: LayoutDashboard },
      { name: 'Staffing', path: '/hod/staffing', icon: Users },
      { name: 'Supplies', path: '/hod/supplies', icon: Truck },
      { name: 'Alerts', path: '/hod/alerts', icon: Activity },
    ],
  };

  const userLinks = links[user?.role] || [];

  return (
    <div className="h-screen w-64 glass-panel rounded-none border-r border-white/10 flex flex-col fixed left-0 top-0 z-50">
      <div className="p-6 border-b border-white/10">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Aarogyantix
        </h1>
        <p className="text-xs text-gray-400 mt-1">Predictive Healthcare</p>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {userLinks.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path;
          
          return (
            <Link
              key={link.path}
              to={link.path}
              className={clsx(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200',
                isActive 
                  ? 'bg-primary/20 text-primary border border-primary/20 shadow-lg shadow-primary/10' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              )}
            >
              <Icon size={20} />
              <span className="font-medium">{link.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3 px-4 py-3 mb-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
            {user?.name?.[0]?.toUpperCase()}
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-medium text-white truncate">{user?.name}</p>
            <p className="text-xs text-gray-400 truncate capitalize">{user?.role?.replace('_', ' ')}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-2 text-danger hover:bg-danger/10 rounded-lg transition-colors"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
