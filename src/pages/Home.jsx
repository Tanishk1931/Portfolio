import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lightbulb, Layers, ShieldCheck } from 'lucide-react';

const Home = () => {
  const [index, setIndex] = useState(0);

  const heroContent = [
    {
      text: "I turn ideas into real-world products.",
      icon: <Lightbulb className="w-8 h-8 md:w-12 md:h-12 text-accent inline-block mb-1" />,
      color: "text-text-secondary"
    },
    {
      text: "I build full-stack applications.",
      icon: <Layers className="w-8 h-8 md:w-12 md:h-12 text-[#ff00ff] inline-block mb-1" />, // Magenta accent
      color: "text-text-secondary"
    },
    {
      text: "I create scalable and secure web systems.",
      icon: <ShieldCheck className="w-8 h-8 md:w-12 md:h-12 text-[#00ff9d] inline-block mb-1" />, // Green accent
      color: "text-text-secondary"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroContent.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center min-h-[70vh] items-start max-w-5xl mx-auto px-4">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-accent font-mono text-sm md:text-lg mb-5 ml-1"
      >
        Hi, my name is
      </motion.p>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl md:text-8xl font-bold text-text-primary mb-6 tracking-tight"
      >
        Tanishk Kushwah.
      </motion.h1>
      
      <div className="h-24 md:h-32 mb-8 relative w-full">
        <AnimatePresence mode="wait">
          <motion.h2
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-5xl font-bold text-text-secondary tracking-tight flex items-center gap-3 md:gap-4 absoluted w-full"
          >
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {heroContent[index].icon}
            </motion.span>
            <span>{heroContent[index].text}</span>
          </motion.h2>
        </AnimatePresence>
      </div>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-text-secondary text-lg max-w-2xl mb-12 leading-relaxed"
      >
        I am a B.Tech undergraduate specializing in Artificial Intelligence and Data Science at LNCT College, passionate about building intelligent, scalable, and impactful digital solutions. I have hands-on experience developing full-stack applications where I integrate machine learning models into real-world systems, bridging the gap between data, intelligence, and user-centric software.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
      >
        <Link to="/resume" className="btn-primary text-lg px-8 py-4 text-center">
          View Resume
        </Link>
        <Link to="/work" className="btn-secondary text-lg px-8 py-4 text-center">
          See My Work
        </Link>
      </motion.div>
      
      {/* Decorative Background Element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </div>
  );
};

export default Home;
