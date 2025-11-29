import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({ children, variant = 'primary', className, isLoading, ...props }) => {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    danger: 'bg-danger hover:bg-danger/90 text-white font-medium py-2 px-4 rounded-lg transition-colors shadow-lg shadow-danger/20',
    ghost: 'hover:bg-white/10 text-white font-medium py-2 px-4 rounded-lg transition-colors',
  };

  return (
    <button
      className={twMerge(clsx(variants[variant], 'flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed', className))}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      )}
      {children}
    </button>
  );
};

export default Button;
