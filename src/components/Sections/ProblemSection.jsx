import React from 'react';

const problems = [
  {
    img: 'images/problem/problem1.png',
    text: 'IT-centric monitoring due to outdated equipment and legacy control systems',
  },
  {
    img: 'images/problem/problem2.png',
    text: 'Overreliance on network separation (air-gapping)',
  },
  {
    img: 'images/problem/problem3.png',
    text: 'Limited security solutions and attack prevention in specialized environments such as industrial facilities',
  },
];

const CARD_MIN_HEIGHT = 462; // 예: 370 * 1.25 (기존 1/1.1에서 1/1.25로 커짐)

const ProblemSection = () => {
  return (
    <section id="problem" className="bg-white px-6 lg:px-12 py-24">
      {/* Title */}
      <div className="flex items-end justify-start lg:justify-end gap-[36px] sm:gap-[54px] lg:gap-[72px] relative self-stretch w-full mb-20">
        <div className="flex flex-col items-start gap-[10px] sm:gap-[12px] lg:gap-[15px] relative flex-1 grow">
          <div className="flex h-[80px] sm:h-[120px] lg:h-[178px] items-end justify-start lg:justify-end gap-[36px] sm:gap-[54px] lg:gap-[72px] relative self-stretch w-full">
            <div className="flex flex-col items-start gap-[10px] sm:gap-[12px] lg:gap-[15px] relative flex-1 grow">
              <div className="relative w-fit font-alata font-normal text-black text-4xl sm:text-6xl lg:text-[75px] tracking-[0.5px] sm:tracking-[1px] lg:tracking-[2.25px] leading-[28px] sm:leading-[40px] lg:leading-[75px] whitespace-nowrap overflow-hidden text-ellipsis">
                Problem
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Problem Cards */}
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center" style={{ minHeight: `calc(${CARD_MIN_HEIGHT}px + 0.5rem)` }}>
        {problems.map((problem, idx) => (
          <div key={idx} className="relative flex-1 min-w-[280px] max-w-[420px] flex flex-col items-center" style={{ alignSelf: 'center' }}>
            <div className="problem-card">
              <img src={problem.img} alt={`Problem ${idx + 1}`} className="problem-card-img" />
              <div className="problem-card-overlay" />
              <div className="problem-card-content">
                <div className="font-alata text-white text-2xl lg:text-3xl leading-snug" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                  {problem.text}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProblemSection;