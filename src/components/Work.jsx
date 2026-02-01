import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Url Shortener",
    description: "A fast and reliable URL shortener that converts long links into clean, shareable URLs with instant redirection.",
    tags: ["Java", "Spring Boot", "Postman"],
    link: "#",
    github: "https://github.com/thefable11/springboot-url-shortener"
  },
  {
    id: 2,
    title: "Pixel Snake",
    description: "A classic pixel-style Snake game focused on simple controls, quick reflexes, and addictive gameplay.",
    tags: ["JavaScript", "CSS", "HTML"],
    link: "https://pixel-snake-rebooted.vercel.app/",
    github: "https://github.com/thefable11/pixel-snake"
  },
  {
    id: 3,
    title: "TrendJack.ai",
    description: "TrendJack.ai is designed to automate the process of 'news-jacking'—leveraging breaking news to drive social media engagement.",
    tags: ["Agentic ai", "API integration", "Market intelligence"],
    link: "#",
    github: "https://github.com/thefable11/trendjack.ai"
  }
];

const Work = () => {
  return (
    <div className="max-w-4xl w-full">
      <h1 className="text-4xl md:text-5xl font-serif font-medium mb-12 text-stone-100">
        Selected Works
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-[#111] p-6 rounded-xl shadow-lg hover:shadow-2xl border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-white/10"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-serif font-bold text-stone-200 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-3 text-stone-500">
                <a href={project.github} className="hover:text-slate-800 transition-colors"><Github size={18} /></a>
                <a href={project.link} className="hover:text-slate-800 transition-colors"><ExternalLink size={18} /></a>
              </div>
            </div>

            {/* Description */}
            <p className="text-stone-400 mb-6 leading-relaxed text-sm">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 text-stone-300 text-xs rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;