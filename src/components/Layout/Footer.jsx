import React from 'react';
import { useTranslation } from 'react-i18next';

// scrollToSection, onSolutionNav prop 추가
const Footer = ({ scrollToSection, onSolutionNav }) => {
  const { t } = useTranslation();
  return (
    <footer className="bg-black px-0 py-12 w-full">
      <div className="w-full">
        <div className="w-full px-6 lg:px-24">
          {/* 상단: Left(Logo & Description) + Center & Right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
            {/* Left: Logo & Description */}
            <div className="flex-1 min-w-[260px]">
              <div className="mb-6">
                <span className="font-alata text-white text-3xl">OPCIA</span>
              </div>
              <div className="text-gray-200 text-base leading-relaxed max-w-xl">
                <p>{t('footer.description')}</p>
                <div className="border-t border-gray-700 my-10 w-full"></div>
              </div>
            </div>
            {/* Center & Right: grid로 배치 */}
            <div className="flex-1 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-y-0 lg:gap-x-20">
                {/* Left: Solution */}
                <div className="flex flex-col">
                  <span className="font-alata text-white text-lg mb-4">{t('nav.solution')}</span>
                  <div className="w-full flex gap-x-16 md:gap-x-20 lg:gap-x-24">
                    <ul className="text-gray-400 space-y-2 text-xs sm:text-sm md:text-base">
                      <li onClick={() => onSolutionNav ? onSolutionNav('consulting') : scrollToSection && scrollToSection('solution')} className="cursor-pointer hover:text-yellow-400 transition">{t('solution.consulting')}</li>
                      <li onClick={() => onSolutionNav ? onSolutionNav('cyberTraining') : scrollToSection && scrollToSection('solution')} className="cursor-pointer hover:text-yellow-400 transition">{t('solution.cyberTraining')}</li>
                      <li onClick={() => onSolutionNav ? onSolutionNav('modonI') : scrollToSection && scrollToSection('solution')} className="cursor-pointer hover:text-yellow-400 transition">{t('solution.modonI')}</li>
                      <li onClick={() => onSolutionNav ? onSolutionNav('modonN') : scrollToSection && scrollToSection('solution')} className="cursor-pointer hover:text-yellow-400 transition">{t('solution.modonN')}</li>
                      <li onClick={() => onSolutionNav ? onSolutionNav('modonD') : scrollToSection && scrollToSection('solution')} className="cursor-pointer hover:text-yellow-400 transition">{t('solution.modonD')}</li>
                    </ul>
                    <ul className="text-gray-400 space-y-2 text-xs sm:text-sm md:text-base">
                      <li onClick={() => onSolutionNav ? onSolutionNav('modonH') : scrollToSection && scrollToSection('solution')} className="cursor-pointer hover:text-yellow-400 transition">{t('solution.modonH')}</li>
                      <li onClick={() => onSolutionNav ? onSolutionNav('modonM') : scrollToSection && scrollToSection('solution')} className="cursor-pointer hover:text-yellow-400 transition">{t('solution.modonM')}</li>
                      <li onClick={() => onSolutionNav ? onSolutionNav('modonW') : scrollToSection && scrollToSection('solution')} className="cursor-pointer hover:text-yellow-400 transition">{t('solution.modonW')}</li>
                      <li onClick={() => onSolutionNav ? onSolutionNav('satellite') : scrollToSection && scrollToSection('solution')} className="cursor-pointer hover:text-yellow-400 transition">{t('solution.satellite')}</li>
                    </ul>
                  </div>
                </div>
                {/* Right: Contact us */}
                <div className="flex flex-col">
                  <span className="font-alata text-white text-lg mb-4">{t('nav.contact')}</span>
                  <ul className="text-gray-400 space-y-2 text-xs sm:text-sm md:text-base">
                    <li onClick={() => scrollToSection && scrollToSection('contact')} className="cursor-pointer hover:text-yellow-400 transition">{t('footer.office')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="border-t border-gray-100 my-10 w-full"></div>
          {/* Bottom: Navigation & Copyright */}
          <div className="flex flex-col lg:flex-row justify-between items-center w-full px-0 gap-4">
            <nav className="flex flex-wrap gap-8 text-white text-lg font-alata">
              <a href="#home" className="hover:text-gray-400">{t('nav.home')}</a>
              <a href="#problem" className="hover:text-gray-400">{t('nav.problem')}</a>
              <a href="#solution" className="hover:text-gray-400">{t('nav.solution')}</a>
              <a href="#contact" className="hover:text-gray-400">{t('nav.contact')}</a>
            </nav>
            <span className="text-gray-300 text-base font-alata">
              © 2025 {t('footer.copyright')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;