import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "yellow"
    | "green"
    | "orange"
    | "blue";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  to?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  to,
  onClick,
  ...props
}) => {
  const navigate = useNavigate();

  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-transparent text-yellow-400 hover:bg-transparent focus:ring-yellow-400 border border-yellow-400",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
    yellow:
      "bg-yellow-400 text-gray-900 hover:bg-yellow-500 focus:ring-yellow-500",
    green: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500",
    orange:
      "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500",
    blue: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (to) {
      navigate(to);
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};
