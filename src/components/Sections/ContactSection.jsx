// src/components/Sections/ContactSection.jsx
import React from 'react';

const ContactSection = () => {

  return (
    <section id="contact" className="bg-white px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24">
      <div className="flex flex-col items-start gap-[48px] sm:gap-[72px] lg:gap-[96px] px-4 sm:px-6 lg:px-[45px] py-[32px] sm:py-[42px] lg:py-[52px] relative bg-white">
        
        {/* Contact us 메인 제목 */}
        <div className="flex items-end justify-start lg:justify-end gap-[36px] sm:gap-[54px] lg:gap-[72px] relative self-stretch w-full ">
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
        {/* Office & Partners 섹션 */}
        <div className="flex flex-col items-start gap-[36px] sm:gap-[54px] lg:gap-[72px] relative self-stretch w-full m-5 mt-20">
          {/* History 타이틀 */}
          {/* <div className="gap-6 sm:gap-12 lg:gap-36 flex items-start relative self-stretch w-full mb-10">
            <div className="relative w-fit font-alata font-normal text-black text-2xl sm:text-3xl lg:text-[40px] tracking-[0.3px] sm:tracking-[0.5px] lg:tracking-[1.20px] leading-6 sm:leading-8 lg:leading-10 whitespace-nowrap overflow-hidden text-ellipsis">
              Office & Partners...
            </div>
          </div> */}

          <div className="gap-4 sm:gap-5 lg:gap-6 flex items-start relative self-stretch w-full ">
            <img
              loading="lazy"
              className="relative flex-1 grow h-[250px] sm:h-[350px] lg:h-[504px] object-cover rounded-lg"
              alt="Office"
              src="images/contact/office.webp"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;