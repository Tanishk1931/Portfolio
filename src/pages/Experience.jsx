import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight, Code, Database, Rocket, Laptop } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Full-Stack Developer",
      company: "Healthcare Management System",
      period: "2025 – Present",
      description: "Designed and developed a role-based healthcare management platform with separate dashboards for doctors, patients, labs, receptionists, and administrators. Built secure authentication and authorization using JWT, cookies, and role-based access control.",
      achievements: [
        "Implemented REST APIs to manage appointments, prescriptions, medical records, lab tests, and patient histories.",
        "Designed MongoDB schemas for doctors, patients, reports, test results, and audit logs.",
        "Integrated file uploads using Multer and Cloudinary for storing reports, prescriptions, and medical documents.",
        "Added pagination, filtering, and status tracking for medical records and lab tests using Mongoose plugins.",
        "Focused on data security, auditability, and real-world healthcare workflows to make the system production-ready."
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "VideoTube (YouTube Clone)",
      period: "2025",
      description: "Designed and built a full-stack video streaming platform that allows users to upload, watch, and manage videos similar to YouTube. Implemented secure user authentication and session handling using JWT and cookies.",
      achievements: [
        "Built RESTful APIs with Node.js and Express to handle video uploads, user profiles, likes, comments, and subscriptions.",
        "Integrated Cloudinary for efficient video and thumbnail storage and retrieval.",
        "Designed MongoDB schemas to manage users, videos, interactions, and channel data.",
        "Developed a responsive frontend to consume APIs and display video feeds, channels, and recommendations.",
        "Focused on scalability, secure media handling, and real-world user workflows."
      ]
    },
    {
      role: "Machine Learning & Full-Stack Developer",
      company: "Heart Health Companion",
      period: "2024",
      description: "Built a machine-learning-powered health application to predict and analyze heart disease risk based on patient data. Implemented data preprocessing, feature scaling, and model training using Python and scikit-learn.",
      achievements: [
        "Evaluated model performance and optimized accuracy using real medical datasets.",
        "Deployed trained ML models to serve real-time predictions through backend APIs.",
        "Developed a web interface that allows users to enter health parameters and receive instant risk assessments.",
        "Connected machine learning outputs with frontend UI to provide meaningful, user-friendly medical insights.",
        "Focused on building an end-to-end intelligent system rather than a standalone ML notebook."
      ]
    }
  ];

  const stats = [
    {
      id: 1,
      number: "200+",
      label: "DSA Questions Solved",
      icon: <Code size={24} />,
      color: "text-accent",
      border: "border-accent/50",
      shadow: "shadow-[0_0_20px_rgba(0,243,255,0.2)]"
    },
    {
      id: 2,
      number: "4+",
      label: "Real World Projects",
      icon: <Laptop size={24} />,
      color: "text-[#d946ef]", // Fuchsia
      border: "border-[#d946ef]/50",
      shadow: "shadow-[0_0_20px_rgba(217,70,239,0.2)]"
    },
    {
      id: 3,
      number: "MERN",
      label: "Stack Proficiency",
      icon: <Database size={24} />,
      color: "text-[#22c55e]", // Green
      border: "border-[#22c55e]/50",
      shadow: "shadow-[0_0_20px_rgba(34,197,94,0.2)]"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-5xl mx-auto px-6 py-12"
    >
      <motion.h2 
        variants={item}
        className="flex items-center text-3xl md:text-5xl font-bold text-text-primary mb-20"
      >
        Experience
        <span className="hidden md:block h-px bg-gradient-to-r from-card to-transparent flex-grow ml-8 max-w-sm"></span>
      </motion.h2>

      {/* Timeline Section */}
      <div className="relative border-l border-white/10 ml-3 md:ml-8 space-y-20 mb-32">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            variants={item}
            className="relative pl-10 md:pl-16 group"
          >
            {/* Timeline Dot - Enhanced */}
            <span className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-background border-2 border-accent shadow-[0_0_15px_rgba(0,243,255,0.6)] group-hover:scale-150 group-hover:bg-accent transition-all duration-300 z-10"></span>
            
            {/* Content Card with transparency */}
            <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-white/5 group-hover:border-accent/20 transition-all duration-300 hover:bg-card/50">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-text-secondary mt-1 font-medium">
                          @ <span className="text-white">{exp.company}</span>
                      </p>
                  </div>
                  
                  <div className="flex items-center text-sm font-mono text-accent mt-4 md:mt-0 bg-accent/5 px-4 py-2 rounded-full border border-accent/20">
                    <Calendar size={16} className="mr-2" />
                    {exp.period}
                  </div>
                </div>

                <p className="text-text-secondary text-base leading-relaxed mb-6 max-w-4xl">
                  {exp.description}
                </p>

                <ul className="grid md:grid-cols-1 gap-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-sm text-text-secondary/80 group-hover:text-text-secondary transition-colors duration-200">
                      <span className="mt-1.5 mr-3 min-w-[15px]">
                        <ChevronRight size={14} className="text-accent" />
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Section - Moved to Bottom */}
      <motion.div variants={item} className="mt-20">
          <h3 className="text-2xl font-mono text-text-primary mb-10 flex items-center justify-center">
             <span className="text-accent mr-3">{'<'}</span> Achievements <span className="text-accent ml-3">{'>'}</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`p-8 rounded-2xl bg-card border ${stat.border} ${stat.shadow} relative overflow-hidden group`}
              >
                {/* Background Glow */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity ${stat.color === 'text-accent' ? 'bg-cyan-500' : stat.color === 'text-[#d946ef]' ? 'bg-fuchsia-500' : 'bg-green-500'}`}></div>

                <div className="flex flex-col items-center text-center relative z-10">
                  <div className={`p-4 rounded-full bg-white/5 mb-6 group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <span className={`text-5xl font-bold font-mono mb-2 ${stat.color}`}>
                    {stat.number}
                  </span>
                  <p className="text-text-secondary font-medium tracking-widest text-sm uppercase">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
