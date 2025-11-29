import React from 'react';
import Container from './Container';
import { Send } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-[#191A21] py-12 md:py-20 border-t border-white/5">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 md:gap-12">
          {/* Brand - Full width on mobile, 1 col on desktop */}
          <div className="col-span-2 md:col-span-1 flex flex-col justify-start">
            <div className="flex items-center gap-2 mb-4 md:mb-8">
              <Send className="w-6 h-6 md:w-8 md:h-8 text-white rotate-[360deg]" />
              <span className="text-xl font-bold text-white">Medimind</span>
            </div>
            {/* Desktop Copyright (Hidden on Mobile) */}
            <div className="hidden md:block text-[#6B7280] mt-auto text-sm font-[DM Sans]">
              <p>© 2025 Medimind, Inc.</p>
              <p>All rights reserved.</p>
            </div>
          </div>

          {/* Resources Column */}
          <div className="col-span-1">
            <h4 className="text-[#9CA3AF] font-[DM Sans] font-medium mb-4 md:mb-6">Resources</h4>
            <ul className="space-y-3 md:space-y-4">
              {['Blog', 'FAQs', 'Careers', 'Privacy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#6B7280] hover:text-white transition-colors font-[DM Sans] text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="col-span-1">
            <h4 className="text-[#9CA3AF] font-[DM Sans] font-medium mb-4 md:mb-6">Company</h4>
            <ul className="space-y-3 md:space-y-4">
              {['About Us', 'Our Mission', 'Leadership', 'Partnerships'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#6B7280] hover:text-white transition-colors font-[DM Sans] text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-[#9CA3AF] font-[DM Sans] font-medium mb-4 md:mb-6">Support</h4>
            <ul className="space-y-3 md:space-y-4">
              {['Help Center', 'Contact Us', 'Feedback', 'Policies'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#6B7280] hover:text-white transition-colors font-[DM Sans] text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Copyright (Visible only on Mobile) */}
          <div className="col-span-2 md:hidden text-[#6B7280] mt-4 text-sm font-[DM Sans]">
            <p>© 2025 Medimind, Inc.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
