import React from 'react';
import StatsCard from '../../components/Admin/StatsCard';
import AIInsights from '../../components/Hospital/AIInsights';
import { Users, Bed, Activity, Stethoscope } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Hospital Overview</h1>
          <p className="text-gray-400">Cooper Hospital • Pro Plan</p>
        </div>
        <div className="flex gap-2">
          <span className="text-sm text-gray-400">Live Updates Active</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Current Occupancy"
          value="87%"
          icon={Bed}
          trend="up"
          trendValue="5"
          color="primary"
        />
        <StatsCard
          title="Active Staff"
          value="142"
          icon={Users}
          trend="down"
          trendValue="2"
          color="secondary"
        />
        <StatsCard
          title="Patient Inflow"
          value="+24"
          icon={Activity}
          trend="up"
          trendValue="15"
          color="accent"
        />
        <StatsCard
          title="Critical Cases"
          value="8"
          icon={Stethoscope}
          trend="up"
          trendValue="1"
          color="danger"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* AI Insights Section */}
        <div className="lg:col-span-2">
          <AIInsights />
        </div>

        {/* Quick Actions / Notifications */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white">Department Status</h2>
          <div className="space-y-4">
            {['Cardiology', 'Emergency', 'Pediatrics', 'Orthopedics'].map((dept, i) => (
              <div key={dept} className="glass-card p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-white">{dept}</h3>
                  <p className="text-xs text-gray-400">HOD: Dr. Sharma</p>
                </div>
                <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-danger animate-pulse' : 'bg-secondary'}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
