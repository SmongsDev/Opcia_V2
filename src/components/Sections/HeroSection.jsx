// src/components/Sections/HeroSection.jsx
import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('images/background.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="relative z-40 flex flex-col justify-center min-h-screen px-6 lg:px-12">
        <div className="max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">
            OPCIA Corporation
          </h1>
          <h2 className="text-xl lg:text-2xl font-medium text-white mb-8">
            <span className="text-yellow-400">O</span>peration : <span className="text-yellow-400">C</span>yber Infiltration <span className="text-yellow-400">A</span>gency
          </h2>
          <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-3xl mb-12">
            We provide penetration testing and vulnerability assessment services for industrial and loT systems, focusing on critical infrastructure such as nuclear power plants, smart factories, water treatment facilities, semiconductor manufacturing facilities, and military sites. Our security solutions are designed to bridge IT, loT, and OT technologies, ensuring comprehensive protection across complex operational environments.
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div
            className="group flex items-center space-x-2 text-white text-lg font-medium transition-all duration-300 select-none cursor-default"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            <span>
                {isHovered ? 'Scroll Down' : 'Explore More'}
            </span>
            <ArrowDown className="w-5 h-5 transition-transform duration-300" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;