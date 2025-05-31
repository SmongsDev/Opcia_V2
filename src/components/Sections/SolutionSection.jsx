// src/components/Sections/SolutionSection.jsx
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const SolutionSection = () => {
  const [activeOverlay, setActiveOverlay] = useState(null);

  const solutions = [
    { title: "Consulting", width: "409px", image: "images/solution/consulting.png" },
    { title: "moDon-D", width: "865px", featured: true, image: "images/solution/modon-d.png" },
    { title: "moDon-H", width: "717px", image: "images/solution/modon-h.png" },
    { title: "moDon-I", width: "807px", image: "images/solution/modon-i.png" }
  ];

  const secondRowSolutions = [
    { title: "moDon-W", width: "613px", image: "images/solution/modon-w.png" },
    { title: "Cyber Training Platform", width: "491px", image: "images/solution/cyber-training.png" },
    { title: "moDon-M", width: "666px", image: "images/solution/modon-m.png" },
    { title: "moDon-N", width: "483px", image: "images/solution/modon-n.png" },
    { title: "Satellite Image Analysis", width: "530px", featured: true, image: "images/solution/satellite-analysis.png" }
  ];

  const overlayDetails = {
    "Consulting": [
      "Facility-specific consulting on penetration testing, vulnerability analysis, and training",
      "Independent or partner-led engagements based on project needs",
      "Cyber & physical penetration testing, vulnerability research, compliance advisory",
      "Security awareness and professional workforce training"
    ],
    "Cyber Training Platform": [
      "Built on industrial control systems (ICS) and industrial network environments",
      "Includes training modules from basic to advanced levels with real-world scenario simulations",
      "Customizable and modular based on operational needs"

    ]
    // ...다른 카드도 필요시 추가...
  };
  
  // DestinationCard 컴포넌트
  const DestinationCard = ({ title, width, featured, image }) => {
    const descriptions = {
      "Consulting": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
      "moDon-D": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
      "moDon-H": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
      "moDon-I": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
      "moDon-W": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
      "Cyber Training Platform": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
      "moDon-M": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
      "moDon-N": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
      "Satellite Image Analysis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
    };

    return (
      <>
        <div
          className={`solution-card ${featured ? 'featured' : ''} relative rounded-lg text-white group cursor-pointer overflow-hidden`}
          style={{ width, height: '22rem' }}
          onClick={() => setActiveOverlay(title)}
        >
        {/* 배경 이미지 */}
        <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ height: '22rem' }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'block';
            }}
          />

        {/* 비네팅 효과 */}
        <div className="absolute inset-0 pointer-events-none rounded-lg"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.35) 100%)'
          }}
        ></div>

        {/* Fallback 배경 */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800" style={{ display: 'none' }}></div>

        {/* 배경 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/80 group-hover:via-black/50 group-hover:to-black/30 transition-all duration-300"></div>

        {/* 우측 상단 화살표 아이콘 */}
        <div className="absolute top-4 right-4 z-20">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border border-white/60 group-hover:bg-white transition-all duration-300 opacity-80 group-hover:opacity-100">
            <ArrowRight className="w-7 h-7 transition-colors duration-300 group-hover:text-black text-white" />
          </div>
        </div>

        {/* 콘텐츠 - 하단 타이틀 및 상세 설명 */}
        <div className="absolute inset-0 flex flex-col justify-end p-0">
          <div className="w-full">
            <div className="transition-all duration-300">
              {/* 호버 시 상세 설명 표시 */}
              <div className="w-full px-8 pb-8">
                {/* 호버 시 나타나는 반투명 박스 - 카드 하단에 고정 */}
                <div
                  className="transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 absolute left-0 right-0 bottom-0 mx-8 mb-8"
                  style={{
                    borderRadius: '28px',
                    background: 'rgba(255,255,255,0.18)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)',
                    padding: '2rem 1.5rem',
                    position: 'absolute',
                    zIndex: 10,
                  }}
                >
                  <h3
                    className="font-alata text-xl lg:text-3xl xl:text-5xl font-medium tracking-[-1.44px] leading-tight mb-4 opacity-90"
                  >
                    {title}
                  </h3>
                  <p
                    className="font-normal"
                    style={{
                      fontSize: '0.9rem',
                      color: '#fff',
                      lineHeight: '1.2',
                      margin: 0,
                    }}
                  >
                    {descriptions[title]}
                  </p>
                </div>
                {/* 기본 타이틀(호버 전) */}
                <div className="transition-all duration-300 opacity-100 group-hover:opacity-0 translate-y-0 group-hover:-translate-y-4 relative z-10">
                  <h3 className="font-alata text-xl lg:text-3xl xl:text-5xl font-medium tracking-[-1.44px] leading-tight mb-4 opacity-90">
                    {title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 호버 효과 오버레이 */}
        <div className="absolute inset-0 bg-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
          {activeOverlay === title && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center"
              onClick={() => setActiveOverlay(null)}
              style={{ cursor: 'pointer' }}
            >
              <div
                className="rounded-2xl p-10 max-w-3xl w-full text-left relative"
                style={{
                  background: 'rgba(20, 24, 31, 0.59)', // 더 어두운 반투명 배경
                  boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  color: '#fff',
                  cursor: 'auto'
                }}
                onClick={e => e.stopPropagation()}
              >
                <ul className="text-xl text-white space-y-6 list-disc pl-6">
                  {(overlayDetails[title] || ["No details available."]).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <button
                  className="absolute top-4 right-6 text-2xl text-white font-bold"
                  onClick={() => setActiveOverlay(null)}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
            </div>
          )}
      </>
    );
  };

  return (
    <section id="solution" className="bg-white px-6 lg:px-12 py-24">
      <div className="flex flex-col items-start gap-[120px] relative bg-white overflow-hidden">
        {/* Header Section */}
        <div className="flex items-end justify-start lg:justify-end gap-[36px] sm:gap-[54px] lg:gap-[72px] relative self-stretch w-full mb-20">
          <div className="flex flex-col items-start gap-[10px] sm:gap-[12px] lg:gap-[15px] relative flex-1 grow">
            <div className="flex h-[80px] sm:h-[120px] lg:h-[178px] items-end justify-start lg:justify-end gap-[36px] sm:gap-[54px] lg:gap-[72px] relative self-stretch w-full">
              <div className="flex flex-col items-start gap-[10px] sm:gap-[12px] lg:gap-[15px] relative flex-1 grow">
                <div className="relative w-fit font-alata font-normal text-black text-4xl sm:text-6xl lg:text-[75px] tracking-[0.5px] sm:tracking-[1px] lg:tracking-[2.25px] leading-[28px] sm:leading-[40px] lg:leading-[75px] whitespace-nowrap overflow-hidden text-ellipsis">
                  Solution
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Cards Section */}
        <div className="relative w-full">
          <div className="solution-cards-container overflow-x-auto pb-4">
            <div className="flex flex-col items-center gap-8 lg:gap-14 min-w-max lg:min-w-[2898px]">
              {/* First Row */}
              <div className="flex items-start gap-3 lg:gap-5 w-full">
                {solutions.map((solution, index) => (
                  <DestinationCard
                    key={index}
                    title={solution.title}
                    width={solution.width}
                    featured={solution.featured}
                    image={solution.image}
                  />
                ))}
              </div>

              {/* Second Row */}
              <div className="flex items-start gap-3 lg:gap-5 w-full">
                {secondRowSolutions.map((solution, index) => (
                  <DestinationCard
                    key={index}
                    title={solution.title}
                    width={solution.width}
                    featured={solution.featured}
                    image={solution.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;