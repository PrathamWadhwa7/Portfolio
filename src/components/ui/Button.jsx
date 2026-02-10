import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-accent text-background hover:bg-white hover:text-black shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]",
    outline: "border border-primary/30 text-primary hover:border-accent hover:text-accent bg-transparent backdrop-blur-sm",
    ghost: "text-primary/70 hover:text-white hover:bg-white/5",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
