import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import uiMockupDark from '../assets/ui_mockups_dark.png'; // Placeholder for dark UI
import uiMockupLight from '../assets/hero_doctors.png'; // Placeholder for light UI (using hero image as temp)

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#191A21] overflow-hidden">
      <Container className="grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-8">
          <p className="text-[#766A95] font-[DM Sans] text-sm tracking-wider ">Anticipating Surges</p>
          <h2 className="text-4xl md:text-6xl font-[Quattrocento] font-semibold text-white leading-tight">
            Preparing for <br />
            the <br />
            Unpredictable
          </h2>
          <p className="text-[#7A797E] font-[DM Sans] text-lg leading-relaxed">
            Our AI-driven hospital management system leverages predictive analytics and smart algorithms to help healthcare providers stay ahead of patient surges, pollution spikes, and epidemics
          </p>
          <Button variant="outline" className="mt-4  border-white/20 hover:bg-white/5"><p className='text-[#7B7F9A]'>Explore Now</p></Button>
        </div>

        {/* Image Content - 2 Images */}
        <div className="relative flex gap-4 h-[600px]">
          {/* Dark UI Image */}
          <div className="w-1/2 h-full relative ">
             <img 
              src={uiMockupDark} 
              alt="Dark Dashboard" 
              className="w-full h-full object-cover rounded-lg opacity-80"
            />
          </div>
          
          {/* Light UI Image */}
          <div className="w-1/2 h-full relative ">
             <div className="w-full h-full bg-white rounded-lg overflow-hidden">
                <img 
                  src={uiMockupLight} 
                  alt="Light Interface" 
                  className="w-full h-full object-cover rounded opacity-"
                />
             </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
