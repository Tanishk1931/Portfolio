import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-accent selection:text-background font-sans">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        {children}
      </main>
      <footer className="w-full text-center py-8 text-text-secondary text-xs font-mono">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/Tanishk1931" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/tanishk-kushwah-74b45536a" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
          <a href="mailto:kushwahtanishk20@gmail.com" className="hover:text-accent transition-colors">Email</a>
        </div>
        <p>Designed & Built by Tanishk Kushwah</p>
      </footer>
    </div>
  );
};

export default Layout;
