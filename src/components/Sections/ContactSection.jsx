// src/components/Sections/ContactSection.jsx
import React from 'react';

const ContactSection = () => {
  const partnerCards = [
    {
      img: "images/contact/partner1.png",
      title: "Physical Security",
      items: [
        "Private military companies (PMCs)",
        "Providers of physical security services for land and maritime operations",
        "Supplying military and law enforcement equipment to domestic and international agencies"
      ]
    },
    {
      img: "images/contact/partner2.png",
      title: "Cyber Intelligence",
      items: [
        "Foreign company specializing in cyber intelligence",
        "Communication tracking via satellite, 5G, and LTE networks",
        "Criminal profiling and tracking across online platforms"
      ]
    },
    {
      img: "images/contact/partner3.png",
      title: "Artificial Intelligence",
      items: [
        "Al-focused global company",
        "Deep learning-based data processing and model training",
        "Handles language, video, image, and text data"
      ]
    },
    {
      img: "images/contact/partner4.png",
      title: "Cyber Security Training",
      items: [
        "Establishment of cyber training ranges",
        "Development and operation of professional cybersecurity education programs",
        "Organization of technical competitions",
        "R&D for next-generation security challenge programs"
      ]
    }
  ];

  return (
    <section id="contact" className="bg-white px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24">
      <div className="flex flex-col items-start gap-[48px] sm:gap-[72px] lg:gap-[96px] px-4 sm:px-6 lg:px-[45px] py-[32px] sm:py-[42px] lg:py-[52px] relative bg-white">
        
        {/* Contact us 메인 제목 */}
        <div className="flex items-end justify-start lg:justify-end gap-[36px] sm:gap-[54px] lg:gap-[72px] relative self-stretch w-full mb-20">
          <div className="flex flex-col items-start gap-[10px] sm:gap-[12px] lg:gap-[15px] relative flex-1 grow">
            <div className="flex h-[80px] sm:h-[120px] lg:h-[178px] items-end justify-start lg:justify-end gap-[36px] sm:gap-[54px] lg:gap-[72px] relative self-stretch w-full">
              <div className="flex flex-col items-start gap-[10px] sm:gap-[12px] lg:gap-[15px] relative flex-1 grow">
                <div className="relative w-fit font-alata font-normal text-black text-4xl sm:text-6xl lg:text-[75px] tracking-[0.5px] sm:tracking-[1px] lg:tracking-[2.25px] leading-[28px] sm:leading-[40px] lg:leading-[75px] whitespace-nowrap overflow-hidden text-ellipsis">
                  Contact us
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* History 섹션 */}
        <div className="flex flex-col items-start gap-[36px] sm:gap-[54px] lg:gap-[72px] relative self-stretch w-full m-5">
          {/* History 타이틀 */}
          <div className="gap-6 sm:gap-12 lg:gap-36 flex items-start relative self-stretch w-full mb-10">
            <div className="relative w-fit font-alata font-normal text-black text-2xl sm:text-3xl lg:text-[40px] tracking-[0.3px] sm:tracking-[0.5px] lg:tracking-[1.20px] leading-6 sm:leading-8 lg:leading-10 whitespace-nowrap overflow-hidden text-ellipsis">
              History
            </div>
          </div>

          {/* History 이미지 박스 */}
          <div className="flex items-start relative self-stretch w-full">
            <div className="w-full max-w-[300px] sm:max-w-[600px] lg:max-w-[1200px] mx-auto">
              <img
                className="w-full h-auto object-contain"
                alt="History Timeline"
                src="images/contact/history.png"
              />
            </div>
          </div>
        </div>

        {/* Our Partners 섹션 */}
        <div className="flex flex-col items-start gap-[36px] sm:gap-[54px] lg:gap-[72px] relative self-stretch w-full m-5 mt-20">
          {/* 타이틀 */}
          <div className="gap-6 sm:gap-12 lg:gap-36 flex items-start relative self-stretch w-full mb-10">
            <div className="relative w-fit font-alata font-normal text-black text-2xl sm:text-3xl lg:text-[40px] tracking-[0.3px] sm:tracking-[0.5px] lg:tracking-[1.20px] leading-6 sm:leading-8 lg:leading-10 whitespace-nowrap overflow-hidden text-ellipsis">
              Our Partners
            </div>
          </div>
          {/* 파트너 이미지 그리드 */}
          <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-8 p-4 sm:p-8 lg:p-10">
            {partnerCards.map((card, idx) => (
              <div key={idx} className="partner-card">
                <img
                  src={card.img}
                  alt={card.title}
                  className="partner-card-img"
                />
                <div className="partner-card-darken"></div>
                <div className="partner-card-content">
                  <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">{card.title}</h3>
                  <ul className="text-white text-sm sm:text-base lg:text-lg font-normal space-y-2 sm:space-y-3 list-disc pl-4 sm:pl-5">
                    {card.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Office & Partners 섹션 */}
        <div className="flex flex-col items-start gap-[36px] sm:gap-[54px] lg:gap-[72px] relative self-stretch w-full m-5 mt-20">
          {/* History 타이틀 */}
          <div className="gap-6 sm:gap-12 lg:gap-36 flex items-start relative self-stretch w-full mb-10">
            <div className="relative w-fit font-alata font-normal text-black text-2xl sm:text-3xl lg:text-[40px] tracking-[0.3px] sm:tracking-[0.5px] lg:tracking-[1.20px] leading-6 sm:leading-8 lg:leading-10 whitespace-nowrap overflow-hidden text-ellipsis">
              Office & Partners...
            </div>
          </div>

          <div className="gap-4 sm:gap-5 lg:gap-6 flex items-start relative self-stretch w-full p-10">
            <img
              className="relative flex-1 grow h-[250px] sm:h-[350px] lg:h-[504px] object-cover rounded-lg"
              alt="Office"
              src="images/contact/office.png"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;