import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Download } from 'lucide-react';

const Resume = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="bg-card border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
      >
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>

        {/* Header */}
        <header className="border-b border-white/10 pb-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <motion.h1 variants={item} className="text-4xl md:text-5xl font-bold text-text-primary mb-2">
                Tanishk Kushwah
              </motion.h1>
              <motion.p variants={item} className="text-accent text-xl font-mono mb-4">
                Full Stack Developer
              </motion.p>
              <motion.p variants={item} className="text-text-secondary max-w-xl leading-relaxed">
                Passionate developer specializing in building scalable web applications and intelligent systems. 
                Experienced in MERN stack, Python, and Machine Learning with a focus on creating impact through technology.
              </motion.p>
            </div>
            
            <motion.div variants={item} className="flex flex-col gap-3 text-sm text-text-secondary">
              <a href="mailto:kushwahtanishk20@gmail.com" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Mail size={16} /> kushwahtanishk20@gmail.com
              </a>
              <div className="flex items-center gap-3">
                <Phone size={16} /> +91-9368823041
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} /> Etawah, Uttar Pradesh, India
              </div>
              <div className="flex gap-4 mt-2">
                <a href="https://www.linkedin.com/in/tanishk-kushwah-74b45536a" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/Tanishk1931" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Technical Skills */}
        <section className="mb-10">
          <motion.h2 variants={item} className="text-xl font-bold text-text-primary mb-4 flex items-center">
            <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
            Technical Proficiencies
          </motion.h2>
          <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="text-white font-mono mb-2 text-xs uppercase tracking-wider">Languages & Core</h3>
              <p className="text-text-secondary">JavaScript (ES6+), Python, Java, HTML5/CSS3, SQL, C++</p>
            </div>
            <div>
              <h3 className="text-white font-mono mb-2 text-xs uppercase tracking-wider">Frameworks & Libraries</h3>
              <p className="text-text-secondary">React.js, Node.js, Express.js, MongoDB, Mongoose, Tailwind CSS, Scikit-learn, Pandas</p>
            </div>
            <div>
              <h3 className="text-white font-mono mb-2 text-xs uppercase tracking-wider">Tools & Platforms</h3>
              <p className="text-text-secondary">Git/GitHub, VS Code, Postman, Cloudinary, Vercel</p>
            </div>
            <div>
              <h3 className="text-white font-mono mb-2 text-xs uppercase tracking-wider">Concepts</h3>
              <p className="text-text-secondary">RESTful APIs, MVC Architecture, Authentication (JWT), DSA, OOPS</p>
            </div>
          </motion.div>
        </section>

        {/* Experience */}
        <section className="mb-10">
          <motion.h2 variants={item} className="text-xl font-bold text-text-primary mb-6 flex items-center">
             <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
             Experience
          </motion.h2>
          
          <div className="space-y-8 border-l border-white/10 ml-1 pl-6">
            <motion.div variants={item} className="relative">
              <span className="absolute -left-[29px] top-1.5 w-3 h-3 bg-card border border-accent rounded-full"></span>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h3 className="text-lg font-bold text-white">Full-Stack Developer</h3>
                <span className="text-xs font-mono text-accent">2025 – Present</span>
              </div>
              <p className="text-sm text-text-secondary mb-2">Healthcare Management System</p>
              <ul className="list-disc list-outside ml-4 text-sm text-text-secondary/80 space-y-1">
                <li>Developed a role-based platform for doctors, patients, and admins using the MERN stack.</li>
                <li>Implemented secure JWT authentication and optimized MongoDB schemas for scalable data management.</li>
                <li>Integrated file handling for medical records and streamlined appointment scheduling workflows.</li>
              </ul>
            </motion.div>

            <motion.div variants={item} className="relative">
              <span className="absolute -left-[29px] top-1.5 w-3 h-3 bg-card border border-accent rounded-full"></span>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h3 className="text-lg font-bold text-white">Full-Stack Developer</h3>
                <span className="text-xs font-mono text-accent">Projects</span>
              </div>
              <p className="text-sm text-text-secondary mb-2">Monastery 360</p>
              <ul className="list-disc list-outside ml-4 text-sm text-text-secondary/80 space-y-1">
                 <li>Developed a full-stack web platform integrating both frontend and backend systems for monastery management.</li>
                 <li>Designed responsive UI using React and TailwindCSS to ensure smooth navigation and accessibility.</li>
                 <li>Implemented server-side APIs using Node.js and Express.js, and connected to a MongoDB database.</li>
                 <li>Utilized machine learning libraries (scikit-learn, NumPy, Pandas) to analyze and predict data trends.</li>
              </ul>
            </motion.div>

            <motion.div variants={item} className="relative">
              <span className="absolute -left-[29px] top-1.5 w-3 h-3 bg-card border border-accent rounded-full"></span>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h3 className="text-lg font-bold text-white">Full-Stack Developer</h3>
                <span className="text-xs font-mono text-accent">2025</span>
              </div>
              <p className="text-sm text-text-secondary mb-2">VideoTube (YouTube Clone)</p>
              <ul className="list-disc list-outside ml-4 text-sm text-text-secondary/80 space-y-1">
                <li>Built a video streaming platform with features like video uploads, likes, comments, and subscriptions.</li>
                <li>Engineered RESTful APIs with Node.js/Express and utilized Cloudinary for efficient media storage.</li>
                <li>Designed a responsive frontend with React to deliver a seamless user experience.</li>
              </ul>
            </motion.div>

            <motion.div variants={item} className="relative">
              <span className="absolute -left-[29px] top-1.5 w-3 h-3 bg-card border border-accent rounded-full"></span>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h3 className="text-lg font-bold text-white">ML & Full-Stack Developer</h3>
                <span className="text-xs font-mono text-accent">2024</span>
              </div>
              <p className="text-sm text-text-secondary mb-2">Heart Health Companion</p>
              <ul className="list-disc list-outside ml-4 text-sm text-text-secondary/80 space-y-1">
                <li>Created an AI-powered prediction system for heart disease risk analysis using Python/Scikit-learn.</li>
                <li>Achieved high model accuracy and deployed the solution via a web interface for real-time user access.</li>
              </ul>
            </motion.div>
          </div>
        </section>

         {/* Education */}
         <section className="mb-10">
          <motion.h2 variants={item} className="text-xl font-bold text-text-primary mb-6 flex items-center">
             <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
             Education
          </motion.h2>
          <motion.div variants={item} className="ml-1 space-y-6">
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                  <h3 className="text-lg font-bold text-white">LNCT Group of Colleges</h3>
                  <span className="text-xs font-mono text-accent">2023 – 2027</span>
              </div>
              <p className="text-sm text-text-secondary">Bachelor of Technology (B.Tech) in AI & Data Science</p>
              <p className="text-sm text-accent mt-1">CGPA: 8.31</p>
            </div>
            
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                  <h3 className="text-lg font-bold text-white">St. Peter's Sr. Sec. School</h3>
                  <span className="text-xs font-mono text-accent">2022</span>
              </div>
              <p className="text-sm text-text-secondary">Senior Secondary (12th) - PCM</p>
              <p className="text-sm text-accent mt-1">Percentage: 83%</p>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                  <h3 className="text-lg font-bold text-white">St. Peter's Sr. Sec. School</h3>
                  <span className="text-xs font-mono text-accent">2020</span>
              </div>
              <p className="text-sm text-text-secondary">High School (10th)</p>
              <p className="text-sm text-accent mt-1">Percentage: 90%</p>
            </div>
          </motion.div>
        </section>

        {/* Achievements */}
        <section className="mb-10">
          <motion.h2 variants={item} className="text-xl font-bold text-text-primary mb-6 flex items-center">
             <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
             Extracurricular Activities
          </motion.h2>
          <motion.div variants={item} className="space-y-4 text-sm text-text-secondary">
             <div className="p-4 bg-white/5 rounded border border-white/5">
               <p className="text-white font-bold mb-1">Member of the Coding Club at LNCT</p>
               <p className="text-text-secondary/80">Participating in competitive programming events and enhancing algorithmic skills.</p>
             </div>
             <div className="p-4 bg-white/5 rounded border border-white/5">
               <p className="text-white font-bold mb-1">Volunteer</p>
               <p className="text-text-secondary/80">Volunteered in college tech fests and AI awareness campaigns, organizing events and guiding participants.</p>
             </div>
          </motion.div>
        </section>

        {/* Achievements */}
        <section>
          <motion.h2 variants={item} className="text-xl font-bold text-text-primary mb-6 flex items-center">
             <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
             Achievements
          </motion.h2>
          <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-text-secondary">
             <div className="p-4 bg-white/5 rounded border border-white/5 flex items-center gap-3">
               <span className="text-accent font-bold text-xl">200+</span>
               <span>DSA Questions Solved on LeetCode/GFG</span>
             </div>
             <div className="p-4 bg-white/5 rounded border border-white/5 flex items-center gap-3">
               <span className="text-accent font-bold text-xl">4+</span>
               <span>Real World Full-Stack Projects</span>
             </div>
             <div className="p-4 bg-white/5 rounded border border-white/5 flex items-center gap-3">
               <span className="text-accent font-bold text-xl">2000+</span>
               <span>LinkedIn Connections</span>
             </div>
          </motion.div>
        </section>

         {/* Footer Print Action */}
         <motion.div variants={item} className="mt-12 text-center print:hidden">
            <button 
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black font-bold rounded hover:bg-white transition-colors duration-300"
            >
              <Download size={18} /> Download / Print Resume
            </button>
         </motion.div>

      </motion.div>
    </div>
  );
};

export default Resume;
