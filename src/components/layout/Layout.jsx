import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-primary font-sans antialiased selection:bg-accent selection:text-black">
      <Navbar />
      <main className="flex-grow pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
