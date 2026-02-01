import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, Code, Terminal } from 'lucide-react'; 
import profileImg from '../assets/profile.jpeg'; 

// IMPORT YOUR MANUAL SCREENSHOTS HERE
import githubStatsImg from '../assets/github-stats.png'; 
import leetcodeStatsImg from '../assets/leetcode-stats.png'; 

const About = () => {
  // Your Usernames (for the clickable links)
  const githubUsername = "thefable11"; 
  const leetcodeUsername = "thefable11"; 

  return (
    <div className="max-w-3xl w-full">
      {/* ====================
          TOP SECTION: BIO
      ==================== */}
      <div className="flex flex-col md:flex-row gap-10 items-start mb-20">
        
        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="shrink-0 relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl opacity-50 animate-pulse"></div>
          <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-2xl border border-white/10 rotate-3 transition-transform hover:rotate-0 duration-300">
            <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-serif font-medium mb-6 text-stone-100">
            Hello, I'm Shivam Dubey.
          </h1>
          <div className="text-lg text-stone-400 leading-relaxed space-y-4 font-light">
            <p>
              I’m a developer with a strong foundation in Java and currently learning backend development and system design. 
              I enjoy building practical projects and continuously improving my problem-solving skills.
            </p>
            <p>
              When I’m not building projects, I enjoy watching movies, playing sports, and exploring good food.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-stone-200 hover:scale-105 active:scale-95"
            >
              <Eye size={18} />
              <span>View Resume</span>
            </a>
            <a 
              href="/resume.pdf" 
              download
              className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-stone-400 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              <Download size={18} />
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>

      {/* ====================
          STATS SECTION (MANUAL IMAGES)
      ==================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <Terminal size={24} className="text-stone-500" />
          <h2 className="text-2xl font-serif text-stone-200">Continuous Learning</h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          
          {/* 1. GitHub Graph (Manual Image) */}
          <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
            <div className="flex items-center gap-2 mb-4 text-stone-400 text-sm font-medium uppercase tracking-wider">
              <Code size={16} />
              <span>GitHub Activity</span>
            </div>
            
            {/* Clickable Image -> Goes to your Live Profile */}
            <a 
              href={`https://github.com/${githubUsername}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="block opacity-90 hover:opacity-100 transition-opacity"
            >
              {/* Using overflow-auto so it scrolls on mobile if the image is wide */}
              <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/10">
                <img 
                  src={githubStatsImg} 
                  alt="My GitHub Contributions" 
                  className="w-full min-w-[600px] rounded-lg border border-white/5" 
                />
              </div>
              <p className="text-center text-xs text-stone-500 mt-2 hover:text-stone-300 transition-colors">
                (Click to view live GitHub profile)
              </p>
            </a>
          </div>

          {/* 2. LeetCode Stats (Manual Image) */}
          <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
            <div className="flex items-center gap-2 mb-4 text-stone-400 text-sm font-medium uppercase tracking-wider">
              <Terminal size={16} />
              <span>LeetCode Progress</span>
            </div>
            
            {/* Clickable Image -> Goes to your Live Profile */}
            <a 
              href={`https://leetcode.com/u/${leetcodeUsername}/`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block opacity-90 hover:opacity-100 transition-opacity"
            >
               <img 
                 src={leetcodeStatsImg} 
                 alt="My LeetCode Stats"
                 className="w-full md:w-auto rounded-lg border border-white/5"
               />
               <p className="text-center text-xs text-stone-500 mt-2 hover:text-stone-300 transition-colors">
                 (Click to view live LeetCode profile)
               </p>
            </a>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default About;