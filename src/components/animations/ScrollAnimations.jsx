import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * Hook for creating parallax scroll effects
 * @param {number} speed - The speed multiplier for parallax (0.5 = half speed)
 */
export const useParallax = (speed = 0.5) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offsetY;
};

/**
 * Hook for scroll-based rotation effects
 * @param {number} maxRotation - Maximum rotation in degrees
 */
export const useScrollRotation = (maxRotation = 15) => {
  const { scrollYProgress } = useScroll();
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, maxRotation]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, maxRotation / 2]);
  
  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 });

  return { rotateX: springRotateX, rotateY: springRotateY };
};

/**
 * Animated section component with 3D scroll effects
 */
export const AnimatedSection = ({ children, className = '', depth = 50 }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, depth]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <motion.div
      style={{ y, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Floating card component with levitating animation
 */
export const FloatingCard = ({ 
  children, 
  className = '', 
  delay = 0,
  floatDistance = 20 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        rotateX: 5,
        rotateY: 5,
        scale: 1.02,
      }}
      animate={{
        y: [0, -floatDistance, 0],
      }}
      transition={{
        opacity: { delay, duration: 0.6 },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay
        },
        whileHover: { duration: 0.3 }
      }}
      className={className}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * 3D Card with perspective transforms
 */
export const Card3D = ({ children, className = '' }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={className}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Scroll-triggered reveal with 3D rotation
 */
export const RevealOnScroll = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up' // 'up', 'down', 'left', 'right'
}) => {
  const directionVariants = {
    up: { y: 50, rotateX: -15 },
    down: { y: -50, rotateX: 15 },
    left: { x: 50, rotateY: -15 },
    right: { x: -50, rotateY: 15 }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directionVariants[direction]
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0,
        rotateX: 0,
        rotateY: 0
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        delay, 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Parallax background component
 */
export const ParallaxBackground = ({ children, speed = 0.5, className = '' }) => {
  const offsetY = useParallax(speed);

  return (
    <div
      className={className}
      style={{
        transform: `translateY(${offsetY}px)`,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};
