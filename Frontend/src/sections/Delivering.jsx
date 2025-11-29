import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import deliveringImage from '../assets/doctor_female_portrait.png'; // Using existing asset

const Delivering = () => {
  return (
    <section className="py-24 bg-[#181A1C]">
      <Container className="grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-8">
          <p className="text-[#5B5D61] font-[DM Sans] text-sm tracking-wider font-medium">Advancing Patient Care</p>
          <h2 className="text-4xl md:text-6xl font-[Quattrocento] font-semibold text-white leading-tight">
            Delivering Exceptional <br />
            Patient Experiences with <br />
            AI-Driven Insights
          </h2>
          <p className="text-[#9CA3AF] font-[DM Sans] text-lg leading-relaxed">
            Our AI-powered hospital management system combines predictive analytics, smart resource allocation, and real-time data monitoring to enable healthcare providers to anticipate and respond to evolving patient needs
          </p>
          <Button variant="primary" className="mt-4 w-full md:w-auto">Learn More</Button>
        </div>

        {/* Image Content */}
        <div className="relative">
          <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden border-white/5 shadow-2xl">
            <img 
              src={deliveringImage} 
              alt="Doctor using tablet" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Delivering;
