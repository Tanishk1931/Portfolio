import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

// Import images
import videotubeImg from '../assets/videotube.png';
import healthcareImg from '../assets/healthcare.png';
import hearthealthImg from '../assets/hearthealth.png';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "VideoTube",
      tagline: "A YouTube-like video streaming platform with authentication, subscriptions, and media hosting.",
      image: videotubeImg,
      tech: ["React", "Node.js", "MongoDB", "JWT", "Cloudinary"],
      links: {
        github: "https://github.com/Tanishk1931/Project1/tree/c19c483be2a43fd432e10af34c3eafb8be2862a8/Backend",
        live: null // Not deployed yet
      }
    },
    {
      id: 2,
      title: "Heart Health Companion",
      tagline: "AI-powered heart disease prediction system analyzing patient data for instant risk assessment.",
      image: hearthealthImg,
      tech: ["Python", "Scikit-learn", "Flask", "React", "Pandas"],
      links: {
        github: "https://github.com/Tanishk1931/Heart_Health_Companion.git",
        live: null
      }
    },
    {
      id: 3,
      title: "Healthcare Management System",
      tagline: "Enterprise-grade platform for doctors, patients, and admins with role-based dashboards.",
      image: healthcareImg,
      tech: ["MERN Stack", "RBAC", "Cloudinary", "Multer"],
      links: {
        github: "https://github.com/Suyash-D27/Backendproject2.git",
        live: null
      }
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-6xl mx-auto px-6 py-12"
    >
      <motion.h2 
        variants={item}
        className="flex items-center text-3xl md:text-5xl font-bold text-text-primary mb-16"
      >
        Work
        <span className="hidden md:block h-px bg-gradient-to-r from-card to-transparent flex-grow ml-8 max-w-sm"></span>
      </motion.h2>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            variants={item}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center group`}
          >
            {/* Project Image - Large Showcase */}
            <div className="w-full md:w-7/12 relative">
                <div className="absolute inset-0 bg-accent/20 blur-[20px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative rounded-xl overflow-hidden border border-white/10 group-hover:border-accent/40 shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 bg-card">
                  {/* Overlay for inactive projects (optional) or just image */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                     <a 
                        href={project.links.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-full bg-card border border-accent/20 text-accent hover:bg-accent hover:text-black transition-all duration-300 transform hover:scale-110 shadow-glow"
                        title="View on GitHub"
                     >
                       <Github size={28} />
                     </a>
                     {project.links.live && (
                       <a 
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="p-4 rounded-full bg-card border border-accent/20 text-accent hover:bg-accent hover:text-black transition-all duration-300 transform hover:scale-110 shadow-glow"
                          title="Live Demo"
                       >
                         <ExternalLink size={28} />
                       </a>
                     )}
                  </div>
                </div>
            </div>

            {/* Project Info */}
            <div className="w-full md:w-5/12 space-y-6">
              <div className="space-y-2">
                 <h3 className="text-accent font-mono text-sm tracking-widest uppercase">Featured Project</h3>
                 <h4 className="text-3xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                   {project.title}
                 </h4>
              </div>

              <div className="p-6 bg-card rounded-lg border border-white/5 shadow-lg relative z-10">
                <p className="text-text-secondary leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              {/* Tech Stack */}
              <ul className="flex flex-wrap gap-4 text-sm font-mono text-text-secondary/80">
                {project.tech.map((tech, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-accent mr-1">#</span>{tech}
                  </li>
                ))}
              </ul>

              {/* Action Buttons (Mobile/Visible) */}
              <div className="flex items-center gap-6 pt-4">
                 <a 
                    href={project.links.github}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-primary hover:text-accent transition-colors duration-300 font-mono text-sm group/link"
                 >
                   <Github size={18} />
                   <span className="border-b border-transparent group-hover/link:border-accent">GitHub</span>
                 </a>
                 {project.links.live ? (
                   <a 
                      href={project.links.live}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-text-primary hover:text-accent transition-colors duration-300 font-mono text-sm group/link"
                   >
                     <ExternalLink size={18} />
                     <span className="border-b border-transparent group-hover/link:border-accent">Live Demo</span>
                   </a>
                 ) : (
                    <span className="flex items-center gap-2 text-text-secondary/50 font-mono text-sm cursor-not-allowed" title="Not deployed yet">
                       <ExternalLink size={18} />
                       Coming Soon
                    </span>
                 )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Footer / More Work CTA */}
      <motion.div 
        variants={item}
        className="mt-32 text-center"
      >
        <p className="text-text-secondary mb-6 font-mono">Looking for more?</p>
        <a 
          href="https://github.com/Tanishk1931?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2"
        >
          <Github size={18} />
          View Complete Archive
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Work;
