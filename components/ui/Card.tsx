import { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export default function Card({ children, hover = false, padding = 'md', className = '', ...props }: CardProps) {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  return (
    <div
      className={`bg-white rounded-2xl shadow-soft border border-neutral-100 ${paddings[padding]} ${
        hover ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
