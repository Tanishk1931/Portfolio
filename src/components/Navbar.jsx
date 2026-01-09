import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Work', path: '/work' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/90 backdrop-blur-md border-b border-card/50">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-accent font-mono text-2xl font-bold tracking-tighter hover:text-white hover:shadow-glow transition-all duration-300">
          Tanishk Kushwah
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link flex items-center space-x-1 text-lg hover:text-accent hover:scale-105 transition-all duration-300 ${location.pathname === link.path ? 'active' : ''}`}
            >
              <span>{link.name}</span>
            </Link>
          ))}
          <a
            href="/resume"
            className="px-6 py-2 border border-accent text-accent font-mono text-sm rounded hover:bg-accent/10 hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-accent focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 top-24 bg-background md:hidden p-8 flex flex-col items-center space-y-8 h-[calc(100vh-96px)]"
          >
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={toggleMenu}
                className="text-text-primary text-2xl font-mono hover:text-accent hover:scale-110 transition-all duration-300 flex flex-col items-center"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/resume"
              className="mt-8 px-8 py-3 border border-accent text-accent font-mono text-lg rounded hover:bg-accent/10 hover:shadow-glow transition-all duration-300"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
