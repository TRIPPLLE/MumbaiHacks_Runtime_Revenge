import React from 'react';
import StatsCard from '../../components/Admin/StatsCard';
import Card from '../../components/ui/Card';
import { Building2, Users, Activity, AlertTriangle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', hospitals: 4, predictions: 240 },
  { name: 'Feb', hospitals: 5, predictions: 300 },
  { name: 'Mar', hospitals: 6, predictions: 450 },
  { name: 'Apr', hospitals: 8, predictions: 510 },
  { name: 'May', hospitals: 9, predictions: 600 },
  { name: 'Jun', hospitals: 12, predictions: 750 },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
        <div className="flex gap-2">
          <span className="text-sm text-gray-400">Last updated: Just now</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Hospitals"
          value="12"
          icon={Building2}
          trend="up"
          trendValue="20"
          color="primary"
        />
        <StatsCard
          title="Active Agents"
          value="48"
          icon={Activity}
          trend="up"
          trendValue="12"
          color="accent"
        />
        <StatsCard
          title="Total Predictions"
          value="1,240"
          icon={Users}
          trend="up"
          trendValue="8"
          color="secondary"
        />
        <StatsCard
          title="Critical Alerts"
          value="3"
          icon={AlertTriangle}
          trend="down"
          trendValue="5"
          color="danger"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-white mb-4">Growth Analytics</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorPredictions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="predictions" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorPredictions)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Activity size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">New prediction generated</p>
                  <p className="text-xs text-gray-400">Cooper Hospital • 2 mins ago</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
