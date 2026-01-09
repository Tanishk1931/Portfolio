import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Twitter, Mail } from 'lucide-react';

const Contact = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center max-w-4xl mx-auto px-6 text-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >

        
        <motion.h2 
          variants={item}
          className="text-5xl md:text-7xl font-bold text-text-primary tracking-tight"
        >
          Get In Touch
        </motion.h2>

        <motion.p 
          variants={item}
          className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          I’m currently open to internships, collaborations, and interesting projects. If you have an opportunity or just want to say hi, my inbox is always open.
        </motion.p>

        <motion.div variants={item} className="pt-8 pb-12">
          <a
            href="mailto:kushwahtanishk20@gmail.com"
            className="inline-block px-10 py-5 border border-accent text-accent font-mono text-lg rounded hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Say Hello
          </a>
        </motion.div>

        <motion.div 
          variants={item}
          className="flex items-center justify-center gap-8"
        >
          <a 
            href="https://github.com/Tanishk1931" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent hover:scale-110 transition-all duration-300"
            title="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/tanishk-kushwah-74b45536a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent hover:scale-110 transition-all duration-300"
            title="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://www.instagram.com/tanishk.krish2107" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent hover:scale-110 transition-all duration-300"
            title="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a 
            href="https://x.com/Tanay_Krish02" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent hover:scale-110 transition-all duration-300"
            title="Twitter / X"
          >
            <Twitter size={24} />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
