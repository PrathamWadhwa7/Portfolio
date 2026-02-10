import React from 'react';
import { motion } from 'framer-motion';
import { RevealOnScroll, Card3D } from '../components/animations/ScrollAnimations';

const Services = () => {
  const services = [
    {
      title: "Shopify Development",
      description: "Custom themes, app integrations, and store optimization to boost sales.",
      tags: ["Liquid", "Theming", "E-commerce"]
    },
    {
      title: "Custom Web Applications",
      description: "Full-stack applications built with React, Node.js, and modern databases.",
      tags: ["React", "Node", "Database"]
    },
    {
      title: "UI/UX Optimization",
      description: "Enhancing user interfaces for better engagement and conversion rates.",
      tags: ["Design System", "Figma", "User Flow"]
    },
    {
      title: "Performance Tuning",
      description: "Speed optimization and SEO best practices to rank higher.",
      tags: ["Lighthouse", "SEO", "Speed"]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <RevealOnScroll direction="up">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center">Services</h1>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <RevealOnScroll
              key={index}
              delay={index * 0.1}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <Card3D className="h-full">
                <div className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-all hover:border-accent/30 group h-full">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-secondary mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/10 text-primary/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card3D>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
