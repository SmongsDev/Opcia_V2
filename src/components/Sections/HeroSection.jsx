// src/components/Sections/HeroSection.jsx
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('images/background.webp')`
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
            <span className="text-yellow-400">OP</span>eration : <span className="text-yellow-400">C</span>yber <span className="text-yellow-400">I</span>nfiltration <span className="text-yellow-400">A</span>gency
          </h2>
          <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-3xl mb-12">
            {t('hero.description')}
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div
            className="group flex items-center space-x-2 text-white text-lg font-medium transition-all duration-300 select-none cursor-default"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            <span>
                {isHovered ? t('hero.scrollDown') : t('hero.exploreMore')}
            </span>
            <ArrowDown className="w-5 h-5 transition-transform duration-300" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;