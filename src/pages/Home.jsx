import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, Zap, Smartphone } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import Clients from '../components/sections/Clients';
import { RevealOnScroll, Card3D } from '../components/animations/ScrollAnimations';

const Home = () => {
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 3D parallax transforms
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const rotateX = useTransform(scrollY, [0, 500], [0, 10]);
  const rotateY = useTransform(scrollY, [0, 500], [0, 5]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  // Mouse movement for subtle 3D tilt
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      setMousePosition({
        x: (clientX - centerX) / 50,
        y: (clientY - centerY) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section with 3D Perspective */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden px-6"
        style={{ perspective: '1000px' }}
      >
        {/* Animated gradient background with parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: y1 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-background to-background"></div>
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 80%, rgba(124, 58, 237, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.15) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
        
        {/* Hero Content with 3D Transform */}
        <motion.div 
          className="container mx-auto z-10 text-center"
          style={{ 
            y: y2,
            rotateX,
            rotateY,
            scale,
            opacity,
            transformStyle: 'preserve-3d',
          }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6"
          >
            I Build High-Converting, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-secondary">Premium Web Experiences</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10"
          >
            Freelance Full-Stack & Shopify Developer specializing in scalable web apps and custom e-commerce solutions for modern brands.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <Link to="/projects">
              <Button variant="primary">View Work</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">Hire Me</Button>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-secondary/50"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div 
            className="w-[1px] h-12 bg-gradient-to-b from-secondary/50 to-transparent"
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          ></motion.div>
        </motion.div>
      </section>

      {/* Clients Section */}
      <Clients />

      {/* Intro / Services Teaser */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              What I Do
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              I craft digital experiences that drive results and delight users
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Smartphone size={32} />,
                title: "Shopify Development",
                desc: "Custom themes and high-performance stores that convert."
              },
              {
                icon: <Code size={32} />,
                title: "Web Applications",
                desc: "Scalable React/Next.js apps tailored to your business logic."
              },
              {
                icon: <Zap size={32} />,
                title: "Performance & SEO",
                desc: "Lightning fast load times and optimized structure for visibility."
              }
            ].map((item, index) => (
              <RevealOnScroll
                key={index}
                delay={index * 0.15}
                direction="up"
              >
                <Card3D className="h-full">
                  <div className="group p-8 border border-white/5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer relative overflow-hidden h-full">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10">
                      <motion.div 
                        className="mb-4 text-accent"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {item.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-secondary">{item.desc}</p>
                    </div>
                  </div>
                </Card3D>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

