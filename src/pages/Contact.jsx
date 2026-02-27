import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Twitter, Send } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/kushwahtanishk20@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center max-w-4xl mx-auto px-6 py-12 text-center relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-12 w-full"
      >
        <div className="space-y-6">
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
            I’m currently open to internships, collaborations, and interesting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </motion.p>
        </div>

        <motion.div variants={item} className="max-w-2xl mx-auto w-full pt-4">
          <div className="bg-card border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden backdrop-blur-sm">
             <form onSubmit={handleSubmit} className="space-y-6 text-left">
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New message from Portfolio!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-mono text-accent">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      required 
                      disabled={isSubmitting}
                      className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors disabled:opacity-50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-mono text-accent">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      required 
                      disabled={isSubmitting}
                      className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors disabled:opacity-50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-mono text-accent">Message</label>
                  <textarea 
                    id="message"
                    name="message" 
                    required 
                    rows={5}
                    disabled={isSubmitting}
                    className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none disabled:opacity-50"
                    placeholder="Hello Tanishk, I'd like to talk about..."
                  />
                </div>

                <div className="pt-4 flex flex-col items-center">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 bg-accent text-background font-bold text-lg rounded overflow-hidden hover:bg-white transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto min-w-[200px] disabled:opacity-70 disabled:hover:bg-accent disabled:hover:translate-y-0 disabled:cursor-wait"
                  >
                    {isSubmitting ? (
                       <span>Sending...</span>
                    ) : (
                       <>
                         <span>Send Message</span>
                         <Send size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                       </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      className="text-[#00ff9d] mt-4 font-mono text-sm"
                    >
                      Message sent successfully! I'll get back to you soon.
                    </motion.p>
                  )}
                   {submitStatus === 'error' && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      className="text-[#ff00ff] mt-4 font-mono text-sm"
                    >
                      Oops! Something went wrong. Please try again later.
                    </motion.p>
                  )}
                </div>
             </form>
          </div>
        </motion.div>

        <motion.div 
          variants={item}
          className="flex items-center justify-center gap-8 pt-8"
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
