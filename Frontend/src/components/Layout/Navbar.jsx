import React from 'react';
import { Bell, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="h-16 glass-panel rounded-none border-b border-white/10 flex items-center justify-between px-6 sticky top-0 z-40 ml-64 bg-background/80 backdrop-blur-md">
      <div className="flex items-center gap-4 w-96">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-surface/50 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary/50"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full animate-pulse" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
