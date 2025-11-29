import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Badge = ({ children, variant = 'default', className, ...props }) => {
  const variants = {
    default: 'bg-surface text-gray-300 border-gray-600',
    success: 'bg-secondary/20 text-secondary border-secondary/20',
    warning: 'bg-warning/20 text-warning border-warning/20',
    danger: 'bg-danger/20 text-danger border-danger/20',
    info: 'bg-info/20 text-info border-info/20',
    primary: 'bg-primary/20 text-primary border-primary/20',
  };

  return (
    <span
      className={twMerge(clsx('px-2 py-0.5 rounded-full text-xs font-medium border', variants[variant], className))}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
