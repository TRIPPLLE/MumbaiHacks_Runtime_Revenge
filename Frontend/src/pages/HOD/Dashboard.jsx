import React from 'react';
import StatsCard from '../../components/Admin/StatsCard';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Users, Package, AlertTriangle, Clock } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Cardiology Department</h1>
          <p className="text-gray-400">Head: Dr. Rajesh Sharma</p>
        </div>
        <div className="flex gap-2">
          <Button variant="danger" className="gap-2">
            <AlertTriangle size={18} /> Report Issue
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Active Patients"
          value="42"
          icon={Users}
          trend="up"
          trendValue="12"
          color="primary"
        />
        <StatsCard
          title="Staff on Duty"
          value="18/24"
          icon={Users}
          trend="down"
          trendValue="4"
          color="warning"
        />
        <StatsCard
          title="Critical Supplies"
          value="92%"
          icon={Package}
          trend="down"
          trendValue="2"
          color="secondary"
        />
        <StatsCard
          title="Avg Wait Time"
          value="14m"
          icon={Clock}
          trend="down"
          trendValue="8"
          color="accent"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Staffing Recommendations */}
        <Card>
          <h2 className="text-xl font-bold text-white mb-4">AI Staffing Recommendations</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-white">Night Shift Surge</h3>
                <span className="text-xs font-medium px-2 py-1 bg-warning/20 text-warning rounded-full">
                  Predicted
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Expected 20% increase in emergency cardiac cases tonight due to weather conditions.
              </p>
              <div className="flex items-center justify-between bg-surface/50 p-3 rounded-lg">
                <span className="text-sm text-gray-300">Recommended Action:</span>
                <span className="font-medium text-white">+2 Senior Nurses</span>
              </div>
            </div>

            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-white">Weekend Schedule</h3>
                <span className="text-xs font-medium px-2 py-1 bg-info/20 text-info rounded-full">
                  Optimization
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Historical data suggests lower OPD load this Saturday.
              </p>
              <div className="flex items-center justify-between bg-surface/50 p-3 rounded-lg">
                <span className="text-sm text-gray-300">Recommended Action:</span>
                <span className="font-medium text-white">Reduce Junior Staff by 1</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Supply Alerts */}
        <Card>
          <h2 className="text-xl font-bold text-white mb-4">Supply Chain Alerts</h2>
          <div className="space-y-4">
            {[
              { name: 'Epinephrine Injection', status: 'Critical', stock: '12 units', days: '2 days' },
              { name: 'ECG Electrodes', status: 'Low', stock: '4 boxes', days: '5 days' },
              { name: 'Heparin', status: 'Optimal', stock: '45 vials', days: '15 days' },
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors">
                <div>
                  <p className="font-medium text-white">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.stock} remaining</p>
                </div>
                <div className="text-right">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    item.status === 'Critical' ? 'bg-danger/20 text-danger' :
                    item.status === 'Low' ? 'bg-warning/20 text-warning' :
                    'bg-secondary/20 text-secondary'
                  }`}>
                    {item.status}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">{item.days}</p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="secondary" className="w-full mt-4">View All Inventory</Button>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
