// src/components/Layout/Header.jsx
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = ({ activeSection, scrollToSection }) => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');
  const { t, i18n } = useTranslation();

  const navItems = [
    { name: t('nav.home'), id: 'home' },
    { name: t('nav.problem'), id: 'problem' },
    { name: t('nav.solution'), id: 'solution' },
    { name: t('nav.contact'), id: 'contact' }
  ];
  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'ko', label: 'KR' }
  ];

  return (
    // <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black from-opacity-30 to-transparent">
      <div className="flex items-center justify-between px-6 lg:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
          <img loading="lazy" src="images/logo.webp" alt="Logo" className="w-6 h-6 object-contain" />
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeSection === item.id 
                  ? 'text-yellow-400' 
                  : 'text-white hover:text-yellow-400'
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center space-x-1 text-white text-sm font-medium hover:text-yellow-400 transition-colors duration-200"
          >
            <span>{currentLang}</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isLangOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-lg py-2 min-w-16">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setCurrentLang(lang.label);
                    i18n.changeLanguage(lang.code);
                    setIsLangOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;