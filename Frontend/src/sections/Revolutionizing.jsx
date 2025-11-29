import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import revolutionImage from '../assets/doctor_male_dramatic.png'; // Using the dramatic male doctor image
import profile1 from '../assets/doctor_female_portrait.png';
import profile2 from '../assets/hero_doctors.png';

const Revolutionizing = () => {
  return (
    <section className="py-20 bg-[#191A21] border border-white/12 rounded-xl">
      <Container>
        <div className=" rounded-[3rem] p-8 md:p-16">
          {/* Part 1: Image and Text */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            {/* Left Side - Large Image */}
            <div className="relative h-[500px] md:h-[600px] w-full rounded-2xl overflow-hidden">
              <img 
                src={revolutionImage} 
                alt="Revolutionizing Healthcare" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-8">
              <p className="text-[#6372AD] font-[DM Sans] text-sm tracking-wider font-medium">Transforming Healthcare</p>
              <h2 className="text-4xl md:text-6xl font-[Quattrocento] font-semibold text-white leading-tight font-medium">
                Revolutionizing the<br />
                Future of Patient Care<br />
                
              </h2>
              <p className="text-[#969798] font-[DM Sans] text-lg leading-relaxed max-w-lg">
At the forefront of healthcare innovation, our AI-powered hospital management system combines cutting-edge predictive analytics, smart resource planning, and real-time data monitoring to enable healthcare providers to anticipate and respond to evolving patient needs</p>
              <div className="pt-4">
                <button className="bg-white text-[#888689] px-8 py-3 rounded-full font-[DM Sans] font-medium hover:bg-gray-200 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Part 2: Image and Text */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            {/* Left Side - Large Image */}
            <div className="relative h-[500px] md:h-[600px] w-full rounded-2xl overflow-hidden">
              <img 
                src={revolutionImage} 
                alt="Revolutionizing Healthcare" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-8">
              <p className="text-[#6372AD] font-[DM Sans] text-sm tracking-wider font-medium">Empowering Hospitals</p>
              <h2 className="text-4xl md:text-6xl font-[Quattrocento] font-semibold text-white leading-tight font-medium">
                Revolutionizing <br />
                Patient Care with <br />
                AI
              </h2>
              <p className="text-[#969798] font-[DM Sans] text-lg leading-relaxed max-w-lg">
                Our AI-driven hospital management system is designed to proactively address the challenges faced by healthcare providers, from predicting patient surges during festivals and pollution spikes to responding effectively to emerging epidemics
              </p>
              <div className="pt-4">
                <button className="bg-white text-[#888689] px-8 py-3 rounded-full font-[DM Sans] font-medium hover:bg-gray-200 transition-colors">
                  Explore Solutions
                </button>
              </div>
            </div>
          </div>


          {/* Part 2: Smarter Care Cards */}
          <div>
            <div className="mb-12">
               <p className="text-[#BA577E] font-[DM Sans] text-sm font-medium mb-2">Pioneering Healthcare</p>
               <h2 className="text-4xl md:text-5xl font-[Quattrocento] font-bold text-white">Smarter Care</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1 - White */}
              <div className="bg-white p-10 rounded-2xl">
                 <div className="flex justify-center mb-8">
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                       <img src={profile1} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                 </div>
                 <h3 className="text-2xl font-[Quattrocento] font-semibold text-[#313133] mb-4">Empowering Providers</h3>
                 <p className="text-[#A7A6A9] font-[DM Sans] text-sm leading-relaxed mb-8">
                   By harnessing the power of AI, our hospital management system can accurately forecast patient surges, optimize staffing, and streamline supply chains
                 </p>
                 <p className="text-[#787F8F] font-[DM Sans] font-medium">Citizen Support</p>
              </div>

              {/* Card 2 - Dark */}
              <div className="bg-[#212429] p-10 rounded-2xl border border-white/5">
                 <div className="flex justify-center mb-8">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/10">
                       <img src={profile2} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                 </div>
                 <h3 className="text-2xl font-[Quattrocento] font-bold text-[#F2F2F3] mb-4">Proactive Preparedness</h3>
                 <p className="text-[#A6A7A9] font-[DM Sans] text-sm leading-relaxed mb-8">
                   Our AI-driven hospital management system combines predictive analytics, smart resource allocation
                 </p>
                 <p className="text-[#5D70A3] font-[DM Sans] font-medium">Patient-Centric Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Revolutionizing;
