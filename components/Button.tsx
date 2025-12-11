import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "border-transparent text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-500",
    secondary: "border-transparent text-slate-900 bg-white hover:bg-slate-50 focus:ring-slate-300",
    outline: "border-slate-300 text-slate-700 bg-transparent hover:bg-slate-50 focus:ring-blue-500",
    accent: "border-transparent text-slate-900 bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-500"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};