import React from 'react';
import { User, Briefcase, Mail, Coffee } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'about', label: 'About', icon: <User size={20} /> },
    { id: 'work', label: 'Work', icon: <Briefcase size={20} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={20} /> },
  ];

  return (
    <>
      {/* =======================================
          DESKTOP SIDEBAR (Hidden on Mobile)
      ======================================== */}
      <nav className="fixed left-0 top-0 h-screen w-64 bg-black/40 backdrop-blur-xl border-r border-white/5 hidden md:flex flex-col justify-between p-8 z-50">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 mb-12 text-stone-100 font-serif font-bold text-xl tracking-wide">
            <Coffee size={24} className="text-stone-300"/>
            <span>Shivam Dubey.</span>
          </div>

          {/* Navigation Links */}
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-4 text-base transition-all duration-300 w-full text-left px-4 py-2 rounded-lg border border-transparent
                    ${activeTab === item.id 
                      ? 'bg-white/10 text-white font-medium border-white/5 shadow-md' 
                      : 'text-stone-500 hover:text-stone-200 hover:bg-white/5'
                    }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="text-sm text-stone-600">
          <p>© 2024 Crafted with care</p>
        </div>
      </nav>

      {/* =======================================
          MOBILE BOTTOM NAV (Hidden on Desktop)
      ======================================== */}
      <nav className="md:hidden fixed bottom-6 left-6 right-6 h-16 bg-[#1a1a1a]/90 backdrop-blur-xl border border-white/10 rounded-2xl flex justify-around items-center z-50 shadow-2xl">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center justify-center w-full h-full rounded-2xl transition-all duration-300
              ${activeTab === item.id 
                ? 'text-white scale-110' 
                : 'text-stone-500 hover:text-stone-300'
              }`}
          >
            {item.icon}
            {/* Small label for accessibility, optional */}
            <span className="text-[10px] mt-1 font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
};

export default Sidebar;