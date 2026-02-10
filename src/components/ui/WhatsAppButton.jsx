import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/919540662129', '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse animation ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-green-500/30"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Main button */}
      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg shadow-green-500/50 flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:shadow-green-500/70">
        <MessageCircle size={28} className="text-white" fill="white" />
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-4 py-2 bg-black/80 backdrop-blur-sm text-white text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat on WhatsApp
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-black/80"></div>
        </div>
      </div>
    </motion.button>
  );
};

export default WhatsAppButton;
