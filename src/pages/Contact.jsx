import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Button from '../components/ui/Button';
import { CheckCircle, XCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null); // { type: 'success' | 'error', message: '' }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setNotification({
        type: 'error',
        message: 'Please fill in all fields',
      });
      setTimeout(() => setNotification(null), 4000);
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = 'service_b9fnqic'; // You'll need to create a service in EmailJS
      const templateId = 'template_lmd8gzs'; // You'll need to create a template in EmailJS
      const publicKey = 'pBZCFVz-HyIMLsDi6';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message,
        to_email: 'prathamwadhwa7@gmail.com',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setNotification({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      });
      
      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setNotification({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly.',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setNotification(null), 5000);
    }
  };

  return (
    <div className="min-h-screen py-20 px-6 flex items-center relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Let's Build Something<br />Exceptional.</h1>
          <p className="text-xl text-secondary">Ready to start your project? Send me a message.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">Get In Touch</h2>
              <p className="text-secondary mb-8">
                Have a project in mind? Let's discuss how we can work together to bring your vision to life.
              </p>
            </div>

            <div className="space-y-6">
              <motion.a
                href="tel:+919540662129"
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-accent/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-secondary uppercase tracking-wider">Phone</p>
                  <p className="text-lg font-medium">+91 9540662129</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:prathamwadhwa7@gmail.com"
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-accent/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-secondary uppercase tracking-wider">Email</p>
                  <p className="text-lg font-medium">prathamwadhwa7@gmail.com</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6 max-w-md mx-auto"
        >
          <motion.div 
            className="space-y-2"
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <label className="text-sm uppercase tracking-widest text-secondary">Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all hover:bg-white/10" 
              placeholder="John Doe" 
            />
          </motion.div>
          
          <motion.div 
            className="space-y-2"
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <label className="text-sm uppercase tracking-widest text-secondary">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all hover:bg-white/10" 
              placeholder="john@example.com" 
            />
          </motion.div>
          
          <motion.div 
            className="space-y-2"
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <label className="text-sm uppercase tracking-widest text-secondary">Phone</label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all hover:bg-white/10" 
              placeholder="+91 9876543210" 
            />
          </motion.div>
          
          <motion.div 
            className="space-y-2"
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <label className="text-sm uppercase tracking-widest text-secondary">Message</label>
            <textarea 
              rows="4" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all hover:bg-white/10 resize-none" 
              placeholder="Tell me about your project..."
            ></textarea>
          </motion.div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full justify-center group"
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="mr-2"
                >
                  <Send size={18} />
                </motion.div>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </motion.form>
          </motion.div>
        </div>

        {/* Notification Toast */}
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 max-w-md w-full mx-4"
            >
              <div className={`flex items-center gap-3 p-4 rounded-xl backdrop-blur-lg shadow-2xl border ${
                notification.type === 'success' 
                  ? 'bg-green-500/20 border-green-500/50' 
                  : 'bg-red-500/20 border-red-500/50'
              }`}>
                {notification.type === 'success' ? (
                  <CheckCircle className="text-green-400 flex-shrink-0" size={24} />
                ) : (
                  <XCircle className="text-red-400 flex-shrink-0" size={24} />
                )}
                <p className="text-white font-medium">{notification.message}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Contact;
