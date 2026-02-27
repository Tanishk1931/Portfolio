import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText } from 'lucide-react';

const Resume = () => {
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
    <div className="min-h-[70vh] flex flex-col items-center justify-center max-w-4xl mx-auto px-6 text-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-2xl bg-card border border-white/5 rounded-2xl p-10 md:p-16 shadow-2xl relative overflow-hidden"
      >
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none"></div>

        <motion.div variants={item} className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
            <FileText className="text-accent w-10 h-10" />
          </div>
        </motion.div>

        <motion.h1 variants={item} className="text-4xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight">
          My Resume
        </motion.h1>

        <motion.p variants={item} className="text-text-secondary text-lg mb-10 leading-relaxed">
          Grab a copy of my resume to learn more about my experience, skills, and background in full-stack development and machine learning.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-accent text-background font-bold rounded hover:bg-white transition-colors duration-300"
          >
            <ExternalLink size={20} /> View PDF
          </a>
          
          <a
            href="/resume.pdf"
            download="Tanishk_Kushwah_Resume.pdf"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 border border-accent text-accent font-bold rounded hover:bg-accent/10 transition-colors duration-300"
          >
            <Download size={20} /> Download PDF
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Resume;
