import React from 'react';
import Container from '../components/Container';
import featureIcon1 from '../assets/doctor_female_portrait.png'; // Placeholder
import featureIcon2 from '../assets/doctor_male_dramatic.png'; // Placeholder
import featureIcon3 from '../assets/hero_doctors.png'; // Placeholder
import featureIcon4 from '../assets/ui_mockups_dark.png'; // Placeholder

const Features = () => {
  const features = [
    {
      icon: featureIcon1,
      title: "Proactive Staffing",
    },
    {
      icon: featureIcon2,
      title: "Supply",
    },
    {
      icon: featureIcon3,
      title: "Citizen",
    },
    {
      icon: featureIcon4,
      title: "Modern",
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#191A21]">
      <Container>
        <div className="text-center mb-16">
          <p className="font-[DM Sans] text-sm text-[#766A95] tracking-wider mb-2">Empowering Hospitals</p>
          <h2 className="text-4xl md:text-5xl font-semibold font-[Quattrocento] text-white">Smarter Care</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="mb-6 w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-white/30 transition-colors">
                <img 
                  src={feature.icon} 
                  alt={feature.title} 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <h3 className="text-lg font-[DM Sans] text-[#BDBBBE] group-hover:text-white transition-colors">{feature.title}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
