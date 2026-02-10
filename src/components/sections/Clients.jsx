import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  const clients = [
    { name: 'Rosha India', logo: '/logos/rosha logo-white.png' },
    { name: 'Himalayan Treasures', logo: '/logos/Himalayan Treasures.jfif' },
    { name: 'Crafty Marvels', logo: '/logos/crafty marvels.jfif' },
    { name: 'GetVayu', logo: '/logos/getvayu.jfif' },
    { name: 'Logo', logo: '/logos/logo_cropped_250x310.png' },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-20 overflow-hidden bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Trusted By Industry Leaders
          </h2>
          <p className="text-secondary text-lg">
            Proud to work with amazing brands and startups
          </p>
        </motion.div>

        {/* Infinite scroll container */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Scrolling logos */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-16 items-center"
              animate={{
                x: [0, -100 * clients.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
            >
              {duplicatedClients.map((client, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-40 h-24 flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                  whileHover={{ scale: 1.15, filter: 'grayscale(0%)' }}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
                    style={{ mixBlendMode: 'lighten' }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats section below logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
        >
          {[
            { number: '50+', label: 'Projects Delivered' },
            { number: '25+', label: 'Happy Clients' },
            { number: '3+', label: 'Years Experience' },
            { number: '100%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-white mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-secondary uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
