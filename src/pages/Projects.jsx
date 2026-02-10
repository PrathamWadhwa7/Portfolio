import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Redesign",
      category: "Shopify",
      description: "A complete overhaul of a fashion brand's online store resulting in 40% increased conversions.",
    },
    {
      title: "SaaS Dashboard",
      category: "Web App",
      description: "Real-time analytics dashboard for a fintech startup.",
    },
    {
      title: "Portfolio Artist",
      category: "Website",
      description: "Minimalist portfolio for a digital artist showcasing 3D works.",
    },
    {
      title: "Health Tech Platform",
      category: "Full Stack",
      description: "Patient management system compliant with healthcare standards.",
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Selected Work</h1>
          <p className="text-secondary text-lg">
            Showcasing projects that push boundaries and deliver results
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <motion.div 
                className="aspect-video bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 mb-6 overflow-hidden relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Animated gradient overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-accent/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
                
                {/* View button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1 }}
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl text-white font-bold rounded-full border border-white/20"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.div>
                </div>

                {/* Background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                  }} />
                </div>
              </motion.div>
              
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <motion.h3 
                    className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-secondary leading-relaxed">{project.description}</p>
                </div>
                <motion.span 
                  className="text-xs uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full text-secondary whitespace-nowrap flex-shrink-0"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(124, 58, 237, 0.5)' }}
                >
                  {project.category}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

