import React from 'react';
import Card from '../ui/Card';
import { Sparkles, Wind, Flame, AlertCircle } from 'lucide-react';

const AIInsights = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white flex items-center gap-2">
        <Sparkles className="text-accent" size={24} />
        AI Insights & Alerts
      </h2>

      <Card className="border-l-4 border-l-warning bg-warning/5">
        <div className="flex justify-between items-start">
          <div className="flex gap-3">
            <div className="p-2 bg-warning/10 rounded-lg h-fit">
              <Wind className="text-warning" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-white">Pollution & Respiratory Surge</h3>
              <p className="text-sm text-gray-400 mt-1">
                High load expected next 3 days due to poor AQI (185). Prepare for asthma cases.
              </p>
            </div>
          </div>
          <span className="text-xs font-medium px-2 py-1 bg-warning/20 text-warning rounded-full">
            High Confidence
          </span>
        </div>
      </Card>

      <Card className="border-l-4 border-l-danger bg-danger/5">
        <div className="flex justify-between items-start">
          <div className="flex gap-3">
            <div className="p-2 bg-danger/10 rounded-lg h-fit">
              <Flame className="text-danger" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-white">Festival Risk: Diwali</h3>
              <p className="text-sm text-gray-400 mt-1">
                Predicted surge in burn cases (1.5x) and respiratory distress in 45 days.
              </p>
            </div>
          </div>
          <span className="text-xs font-medium px-2 py-1 bg-danger/20 text-danger rounded-full">
            Critical
          </span>
        </div>
      </Card>

      <Card className="border-l-4 border-l-info bg-info/5">
        <div className="flex justify-between items-start">
          <div className="flex gap-3">
            <div className="p-2 bg-info/10 rounded-lg h-fit">
              <AlertCircle className="text-info" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-white">Supply Optimization</h3>
              <p className="text-sm text-gray-400 mt-1">
                Oxygen supply projected to last 12 days. Restock recommended before weekend.
              </p>
            </div>
          </div>
          <span className="text-xs font-medium px-2 py-1 bg-info/20 text-info rounded-full">
            Medium Priority
          </span>
        </div>
      </Card>
    </div>
  );
};

export default AIInsights;
