// src/components/OPCIALandingPage.jsx
import React from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import HeroSection from './Sections/HeroSection';
import ProblemSection from './Sections/ProblemSection';
import SolutionSection from './Sections/SolutionSection';
import ContactSection from './Sections/ContactSection';
import useScrollNavigation from '../hooks/useScrollNavigation';
import { useTranslation } from 'react-i18next';

const OPCIALandingPage = () => {
  const { t } = useTranslation();
  const navItems = [
    { name: t('nav.home'), id: 'home' },
    { name: t('nav.problem'), id: 'problem' },
    { name: t('nav.solution'), id: 'solution' },
    { name: t('nav.contact'), id: 'contact' }
  ];

  const { activeSection, scrollToSection } = useScrollNavigation(navItems);
  const [solutionIndex, setSolutionIndex] = React.useState(0);

  // 제품명과 인덱스 매핑
  const solutionKeys = [
    'consulting', 'modonD', 'modonH', 'modonI', 'modonW',
    'cyberTraining', 'modonM', 'modonN', 'satellite'
  ];

  // Footer에서 제품 클릭 시 호출할 함수
  const handleSolutionNav = (key) => {
    const idx = solutionKeys.indexOf(key);
    if (idx !== -1) setSolutionIndex(idx);
    scrollToSection('solution');
  };

  return (
    <div className="min-h-screen bg-gray-900 relative">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection />
      <ProblemSection />
      <SolutionSection current={solutionIndex} setCurrent={setSolutionIndex} />
      <ContactSection />
      <Footer scrollToSection={scrollToSection} onSolutionNav={handleSolutionNav} />
    </div>
  );
};

export default OPCIALandingPage;