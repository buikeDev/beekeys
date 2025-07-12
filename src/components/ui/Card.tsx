// This is a reusable Card component. It wraps content in a nice box with optional hover and style options.
import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode; // The content inside the card
  className?: string; // Extra CSS classes
  hover?: boolean; // If true, the card will have a hover effect
  variant?: "default" | "borderless"; // Style type
}

// This component makes it easy to show content in a styled card box
export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = true,
  variant = "default",
}) => {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02 } : {}}
      className={`rounded-xl bg-white shadow-md p-6 ${
        variant === "borderless" ? "border-0" : "border border-gray-100"
      } ${className}`}
    >
      {children}
    </motion.div>
  );
};
