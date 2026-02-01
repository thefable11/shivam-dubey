import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-stone-200 font-sans selection:bg-stone-700">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* NOTE: Added 'pb-32' (padding-bottom) to ensure the Mobile Nav 
         doesn't cover the content at the bottom of the screen.
      */}
      <main className="flex-1 ml-0 md:ml-64 p-6 pb-32 md:p-20 overflow-y-auto h-screen">
        <div className="max-w-3xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {activeTab === 'about' ? (
                <About />
              ) : activeTab === 'work' ? (
                <Work />
              ) : activeTab === 'contact' ? (
                <Contact />
              ) : (
                <Section title="404" body="Content not found." />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default App;