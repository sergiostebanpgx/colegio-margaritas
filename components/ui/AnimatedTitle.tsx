"use client";

import { motion } from "framer-motion";

interface AnimatedTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const AnimatedTitle = ({ 
  children, 
  className = "", 
  as: Component = "h1" 
}: AnimatedTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Component 
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-primary ${className}`}
      >
        {children}
      </Component>
    </motion.div>
  );
};

export default AnimatedTitle; 