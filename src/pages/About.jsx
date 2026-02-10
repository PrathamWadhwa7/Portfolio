import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RevealOnScroll, Card3D } from '../components/animations/ScrollAnimations';

const About = () => {
  const { scrollY } = useScroll();
  const yProfile = useTransform(scrollY, [0, 500], [0, -50]);
  const rotateProfile = useTransform(scrollY, [0, 500], [0, 5]);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <RevealOnScroll direction="up">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-12">More Than Just Code.</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-secondary text-lg leading-relaxed mb-6">
                  I'm Pratham Wadhwa, a freelance developer with a passion for building digital products that look good and perform even better.
                </p>
                <p className="text-secondary text-lg leading-relaxed mb-6">
                  With a background in both design and engineering, I bridge the gap between creative vision and technical execution. I don't just write code; I solve business problems.
                </p>
                <p className="text-secondary text-lg leading-relaxed">
                  Whether it's a high-converting Shopify store or a complex web application, I bring a detail-oriented approach to every project.
                </p>
              </motion.div>
              <motion.div 
                className="relative"
                style={{ 
                  y: yProfile,
                  rotateY: rotateProfile,
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="aspect-square bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative group">
                  {/* Placeholder for profile image */}
                  <div className="absolute inset-0 flex items-center justify-center text-secondary/30 text-xl font-display">
                    Profile Image
                  </div>
                </div>
              </motion.div>
            </div>

            <h2 className="text-2xl font-display font-bold mb-8">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Shopify Liquid', 'PostgreSQL', 'Framer Motion', 'Git/CI/CD'].map((tech, index) => (
                <RevealOnScroll
                  key={tech}
                  delay={index * 0.05}
                  direction="up"
                >
                  <Card3D>
                    <div className="p-4 border border-white/10 rounded-lg text-center items-center justify-center flex bg-white/5 text-primary hover:border-accent/50 hover:bg-white/10 transition-all cursor-pointer h-full">
                      {tech}
                    </div>
                  </Card3D>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default About;
