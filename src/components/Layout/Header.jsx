// src/components/Layout/Header.jsx
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Header = ({ activeSection, scrollToSection }) => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Problem', id: 'problem' },
    { name: 'Solution', id: 'solution' },
    { name: 'Contact us', id: 'contact' }
  ];
  const languages = ['EN', 'KR'];

  return (
    // <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black from-opacity-30 to-transparent">
      <div className="flex items-center justify-between px-6 lg:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
          <img src="images/logo.png" alt="Logo" className="w-6 h-6 object-contain" />
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
                  key={lang}
                  onClick={() => {
                    setCurrentLang(lang);
                    setIsLangOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                >
                  {lang}
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