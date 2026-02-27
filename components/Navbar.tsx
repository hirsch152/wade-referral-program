
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img 
            src="https://user.fm/files/v2-5797ca378bb8d9e1c737738fd796e029/New%20Logo.png" 
            alt="Company Logo" 
            className="h-[53px] w-auto object-contain"
          />
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-slate-600 hover:text-[#a81255] font-medium transition-colors">About</a>
        </div>
      </div>
    </nav>
  );
};
