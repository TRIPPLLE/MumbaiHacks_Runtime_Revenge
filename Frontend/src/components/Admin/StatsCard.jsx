import React from 'react';
import Card from '../ui/Card';
import { clsx } from 'clsx';

const StatsCard = ({ title, value, icon: Icon, trend, trendValue, color = 'primary' }) => {
  const colors = {
    primary: 'text-primary bg-primary/10',
    secondary: 'text-secondary bg-secondary/10',
    accent: 'text-accent bg-accent/10',
    warning: 'text-warning bg-warning/10',
    danger: 'text-danger bg-danger/10',
  };

  return (
    <Card className="relative overflow-hidden">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-400 text-sm font-medium">{title}</p>
          <h3 className="text-2xl font-bold text-white mt-1">{value}</h3>
        </div>
        <div className={clsx('p-2 rounded-lg', colors[color])}>
          <Icon size={20} />
        </div>
      </div>
      
      {trend && (
        <div className="mt-4 flex items-center text-sm">
          <span className={clsx('font-medium', trend === 'up' ? 'text-secondary' : 'text-danger')}>
            {trend === 'up' ? '+' : '-'}{trendValue}%
          </span>
          <span className="text-gray-500 ml-2">vs last month</span>
        </div>
      )}
    </Card>
  );
};

export default StatsCard;
