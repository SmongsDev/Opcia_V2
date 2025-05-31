import React from 'react';

const Footer = () => {
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
                <p>We provide penetration testing and vulnerability assessment services for industrial and IoT systems, focusing on critical infrastructure such as nuclear power plants, smart factories, water treatment facilities, semiconductor manufacturing facilities, and military sites.</p>
                <div className="border-t border-gray-700 my-10 w-full"></div>
              </div>
            </div>
            {/* Center & Right: grid로 배치 */}
            <div className="flex-1 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-y-0 lg:gap-x-40">
                {/* Center: Solution */}
                <div className="flex flex-col">
                  <span className="font-alata text-white text-lg mb-4">Solution</span>
                  <div className="w-full grid grid-cols-2 gap-x-32">
                    <ul className="text-gray-400 space-y-2 text-base whitespace-nowrap">
                      <li>Consulting</li>
                      <li>Cyber Training Platform</li>
                      <li>moDon-I</li>
                      <li>moDon-N</li>
                      <li>moDon-D</li>
                    </ul>
                    <ul className="text-gray-400 space-y-2 text-base">
                      <li>moDon-H</li>
                      <li>moDon-M</li>
                      <li>moDon-W</li>
                      <li>Satellite Image Analysis</li>
                    </ul>
                  </div>
                </div>
                {/* Right: Contact us */}
                <div className="flex flex-col">
                  <span className="font-alata text-white text-lg mb-4">Contact us</span>
                  <ul className="text-gray-400 space-y-2 text-base">
                    <li>History</li>
                    <li>Our Partners</li>
                    <li>Office & Partners</li>
                    <li>FAQ</li>
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
              <a href="#home" className="hover:text-gray-400">Home</a>
              <a href="#problem" className="hover:text-gray-400">Problem</a>
              <a href="#solution" className="hover:text-gray-400">Solution</a>
              <a href="#contact" className="hover:text-gray-400">Contact us</a>
            </nav>
            <span className="text-gray-300 text-base font-alata">
              © 2025 Copyright By OPCIA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;