import React from 'react';

const Section = ({ title, body }) => {
  return (
    <article>
      <h1 className="text-4xl md:text-5xl font-serif font-medium mb-8 text-slate-900 tracking-tight leading-tight">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
        {body}
      </p>
      
      {/* Example of a visual divider */}
      <div className="w-16 h-1 bg-stone-200 mt-12 rounded-full"></div>
    </article>
  );
};

export default Section;