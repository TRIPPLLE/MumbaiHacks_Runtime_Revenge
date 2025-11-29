import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={twMerge(clsx('glass-panel p-6', className))}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
