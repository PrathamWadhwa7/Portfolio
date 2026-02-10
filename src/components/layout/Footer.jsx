import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-display font-bold text-white mb-2">
              Pratham Wadhwa<span className="text-accent">.</span>
            </h2>
            <p className="text-secondary text-sm">
              Creating premium digital experiences.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-secondary hover:text-accent transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-secondary hover:text-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-secondary hover:text-accent transition-colors">
              <Twitter size={20} />
            </a>
            <a href="mailto:hello@pratham.dev" className="text-secondary hover:text-accent transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-secondary/60">
          © {new Date().getFullYear()} Pratham Wadhwa. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
