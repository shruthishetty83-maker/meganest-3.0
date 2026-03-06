import { HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'accent' | 'success' | 'warning' | 'neutral';
  size?: 'sm' | 'md';
}

export default function Badge({ variant = 'primary', size = 'md', className = '', children, ...props }: BadgeProps) {
  const variants = {
    primary: 'bg-primary-100 text-primary-700 border-primary-200',
    accent: 'bg-accent-100 text-accent-700 border-accent-200',
    success: 'bg-green-100 text-green-700 border-green-200',
    warning: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    neutral: 'bg-neutral-100 text-neutral-700 border-neutral-200',
  };
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };
  
  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
