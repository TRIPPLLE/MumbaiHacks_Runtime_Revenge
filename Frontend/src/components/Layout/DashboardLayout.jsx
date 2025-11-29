import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

import Chatbot from '../AI/Chatbot';

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-white">
      <Sidebar />
      <Navbar />
      <main className="ml-64 p-6">
        {children}
      </main>
      <Chatbot />
    </div>
  );
};

export default DashboardLayout;
