import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, GraduationCap, Globe } from 'lucide-react';

const About = () => {
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
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-4xl mx-auto"
    >
      <motion.h2 variants={item} className="flex items-center text-3xl md:text-4xl font-bold text-text-primary mb-12">
        About Me
        <span className="hidden md:block h-px bg-card flex-grow ml-6 max-w-xs"></span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-6 text-text-secondary text-lg leading-relaxed">
          <motion.div variants={item} className="flex gap-4">
             <div className="mt-1 flex-shrink-0"><Code className="text-accent" size={24} /></div>
             <div>
                <p>
                  I am a <span className="text-white font-semibold">B.Tech undergraduate</span> specializing in <span className="text-accent">Artificial Intelligence and Data Science</span> at LNCT College. I possess a strong passion for building intelligent, scalable, and impactful digital products.
                </p>
                <p className="mt-4">
                   My hands-on experience involves working on multiple <span className="text-white">full-stack development projects</span> where I successfully integrated machine learning models into real-world applications, bridging the gap between data, intelligence, and user-centric software.
                </p>
             </div>
          </motion.div>

          <motion.div variants={item} className="flex gap-4">
             <div className="mt-1 flex-shrink-0"><Cpu className="text-[#ff00ff]" size={24} /></div>
             <div>
                <p>
                  My academic foundation, combined with practical project experience, has given me a solid understanding of <span className="text-white">data analysis, model development</span>, backend systems, and modern frontend architectures. I enjoy solving complex problems by transforming data into actionable insights and deploying them through robust, production-ready applications.
                </p>
             </div>
          </motion.div>

           <motion.div variants={item} className="flex gap-4">
             <div className="mt-1 flex-shrink-0"><GraduationCap className="text-[#00ff9d]" size={24} /></div>
             <div>
                <p>
                  I completed my schooling from <span className="text-white">St. Peters Sr. Sec. School</span>, where I developed a strong analytical mindset and interest in technology. I have also earned several professional certifications, reflecting my commitment to continuous learning in emerging tools and frameworks.
                </p>
             </div>
          </motion.div>
          
           <motion.div variants={item} className="flex gap-4">
             <div className="mt-1 flex-shrink-0"><Globe className="text-accent" size={24} /></div>
             <div>
                <p>
                  Driven by curiosity and innovation, I am constantly exploring new ways to apply AI, machine learning, and software engineering to create meaningful solutions. I am actively seeking opportunities to contribute to challenging projects and make a <span className="text-white">real-world impact</span>.
                </p>
             </div>
          </motion.div>
        </div>

        {/* Skills / Right Column */}
        <motion.div variants={item} className="md:col-span-1">
          <div className="bg-card p-6 rounded hover:shadow-glow transition-all duration-300 border border-transparent hover:border-accent/20">
            <h3 className="text-white font-mono mb-4 flex items-center gap-2">
              <span className="text-accent">▹</span> Tech Stack
            </h3>
            <ul className="space-y-2 text-sm font-mono text-text-secondary">
              <li className="flex items-center gap-2"><span className="text-accent">▹</span> JavaScript (ES6+)</li>
              <li className="flex items-center gap-2"><span className="text-accent">▹</span> React & Vite</li>
              <li className="flex items-center gap-2"><span className="text-accent">▹</span> Node.js</li>
              <li className="flex items-center gap-2"><span className="text-accent">▹</span> Python & AI/ML</li>
              <li className="flex items-center gap-2"><span className="text-accent">▹</span> Tailwind CSS</li>
              <li className="flex items-center gap-2"><span className="text-accent">▹</span> SQL / MongoDB</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
