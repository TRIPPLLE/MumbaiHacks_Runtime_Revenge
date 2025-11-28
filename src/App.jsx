import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Delivering from './sections/Delivering';
import Features from './sections/Features';
import About from './sections/About';
import Revolutionizing from './sections/Revolutionizing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-primary font-sans selection:bg-white/20">
      <Navbar />
      <main>
        <Hero />
        <Delivering />
        <Features />
        <About />
        <Revolutionizing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
