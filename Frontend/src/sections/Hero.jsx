import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import heroImage from '../assets/hero_doctors.png';
import cardImage1 from '../assets/doctor_male_dramatic.png';
import cardImage2 from '../assets/doctor_female_portrait.png';
import cardImage3 from '../assets/ui_mockups_dark.png';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#181A1C]">
      <Container className="grid md:grid-cols-2 gap-12 items-center mb-20">
        {/* Text Content */}
        <div className="space-y-8 z-10">
          <p className="text-gray-400 font-[DM Sans] text-sm tracking-wider ">Revolutionizing Healthcare</p>
          <h1 className="text-5xl md:text-7xl font-[Quattrocento] font-semibold leading-tight text-white">
            Transforming <br />
            Patient Care with
          </h1>
          <p className="text-gray-400 font-[DM Sans] text-lg max-w-md leading-relaxed">
            Our cutting-edge AI hospital management system is designed to predict and proactively respond to patient surges during festivals, pollution spikes, and epidemics
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button variant="primary" className="w-full md:w-auto">Get Started</Button>
            <Button variant="outline" className="w-full md:w-auto">Learn More</Button>
          </div>
        </div>

        {/* Image Content */}
        <div className="relative z-10 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden border-white/5 shadow-2xl">
            <img 
              src={heroImage} 
              alt="Medical Team" 
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </Container>
      
      {/* 5 Cards Section */}
      <Container>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {/* Card 1: Text Only */}
          <div className="col-span-3 md:col-span-1 bg-[#292B2E] p-6 rounded-lg flex flex-col justify-center h-48 md:h-64 hover:bg-[#323538] transition-colors">
            <h3 className="text-white font-[Quattrocento] text-xl mb-2">Empowering Patients</h3>
            <p className="mt-2 text-gray-400 font-[DM Sans] text-sm leading-relaxed">Harnessing the Power of AI for Smarter Healthcare</p>
          </div>

          {/* Card 2: Image */}
          <div className="col-span-1 relative rounded-lg overflow-hidden h-32 md:h-64 group">
            <img src={cardImage1} alt="Moucss" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-white font-[Quattrocento] text-sm md:text-2xl font-bold tracking-wider">MOUCSS</h3>
            </div>
          </div>

          {/* Card 3: Image */}
          <div className="col-span-1 relative rounded-lg overflow-hidden h-32 md:h-64 group">
            <img src={cardImage2} alt="Zoo" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
               <div className="border-2 border-white/30 rounded-full w-10 h-10 md:w-16 md:h-16 flex items-center justify-center">
                  <h3 className="text-white font-[Quattrocento] text-xs md:text-xl font-bold">200+</h3>
               </div>
            </div>
          </div>

          {/* Card 4: Image */}
          <div className="col-span-1 relative rounded-lg overflow-hidden h-32 md:h-64 group">
            <img src={cardImage3} alt="Pagiscice" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-white font-[Quattrocento] text-xs md:text-xl font-bold tracking-wider uppercase">PAGISCICE</h3>
            </div>
          </div>

          {/* Card 5: Text Only */}
          <div className="col-span-3 md:col-span-1 bg-[#292B2E] p-6 rounded-lg flex flex-col justify-center h-48 md:h-64 hover:bg-[#323538] transition-colors">
            <h3 className="text-white font-[Quattrocento] text-xl mb-2">Explore Solutions</h3>
            <p className="mt-2 text-gray-400 font-[DM Sans] text-sm leading-relaxed">Revolutionizing the Future of Healthcare Delivery</p>
          </div>
        </div>
      </Container>

    </section>
  );
};

export default Hero;
