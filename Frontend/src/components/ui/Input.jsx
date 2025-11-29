import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Input = React.forwardRef(({ label, error, className, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm text-gray-400 ml-1">{label}</label>}
      <input
        ref={ref}
        className={twMerge(clsx('input-field', error && 'border-danger focus:ring-danger/50', className))}
        {...props}
      />
      {error && <span className="text-xs text-danger ml-1">{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
