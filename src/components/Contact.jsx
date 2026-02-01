import React from 'react';
import { Mail, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="max-w-2xl w-full">
      {/* 1. High Contrast Heading (Off-White) */}
      <h1 className="text-4xl md:text-5xl font-serif font-medium mb-8 text-stone-100">
        Let's Connect
      </h1>

      {/* 2. Readable Body Text (Light Grey) */}
      <p className="text-xl text-stone-400 leading-relaxed font-light mb-12">
        I am currently open to collaborations that make a positive impact. 
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      {/* 3. The "Action" Card - High Visibility */}
      <a 
        href="mailto:dshivam2005@gmail.com" 
        className="group block bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3 text-stone-300">
            <Mail size={24} />
            <span className="text-sm uppercase tracking-wider font-medium">Email Me</span>
          </div>
          <ArrowRight size={24} className="text-stone-500 group-hover:text-white transition-colors" />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-serif text-white group-hover:text-stone-200">
          dshivam2005@gmail.com
        </h2>
      </a>

      {/* 4. Social Links */}
      <div className="mt-12 flex gap-6">
        <SocialLink href="https://github.com/thefable11" icon={<Github size={24} />} label="GitHub" />
        <SocialLink href="#" icon={<Linkedin size={24} />} label="LinkedIn" />
        <SocialLink href="#" icon={<Twitter size={24} />} label="Twitter" />
      </div>
    </div>
  );
};

// Helper component for social icons
const SocialLink = ({ href, icon, label }) => (
  <a 
    href={href}
    className="text-stone-500 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Contact;