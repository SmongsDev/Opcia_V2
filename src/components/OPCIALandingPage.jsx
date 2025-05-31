// src/components/OPCIALandingPage.jsx
import React from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import HeroSection from './Sections/HeroSection';
import ProblemSection from './Sections/ProblemSection';
import SolutionSection from './Sections/SolutionSection';
import ContactSection from './Sections/ContactSection';
import useScrollNavigation from '../hooks/useScrollNavigation';

const OPCIALandingPage = () => {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Problem', id: 'problem' },
    { name: 'Solution', id: 'solution' },
    { name: 'Contact us', id: 'contact' }
  ];

  const { activeSection, scrollToSection } = useScrollNavigation(navItems);

  return (
    <div className="min-h-screen bg-gray-900 relative">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default OPCIALandingPage;