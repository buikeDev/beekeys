import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "borderless";
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = true,
  variant = "default",
}) => {
  const baseClasses = "bg-white rounded-xl shadow-lg";

  // Variant-specific classes
  const variantClasses = {
    default: "border border-gray-100 shadow-lg",
    borderless: "border-none shadow-none",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5 } : {}}
      className={`bg-white rounded-xl ${baseClasses} ${variantClasses[variant]}  ${className}`}
    >
      {children}
    </motion.div>
  );
};
