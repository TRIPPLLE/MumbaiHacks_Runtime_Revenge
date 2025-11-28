import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Send } from 'lucide-react';
import Container from './Container';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-6 bg-[#181A1C]">
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Send className="w-6 h-6 text-white rotate-[360deg]" />
          <span className="text-xl font-bold text-white">Medimind</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              className="text-[#AAAAAE] font-[DM Sans] hover:text-white cursor-pointer transition-colors text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link to="faq" smooth={true} duration={500} className="text-gray-300 hover:text-white cursor-pointer transition-colors text-sm font-medium border border-white/20 px-4 py-2 rounded-full">
            FAQ
          </Link>
        </div>

        {/* Mobile FAQ Button */}
        <div className="md:hidden">
            <Link to="faq" smooth={true} duration={500} className="text-gray-300 hover:text-white cursor-pointer transition-colors text-sm font-medium border border-white/20 px-4 py-2 rounded-full">
              FAQ
            </Link>
        </div>

      </Container>
    </nav>
  );
};

export default Navbar;
