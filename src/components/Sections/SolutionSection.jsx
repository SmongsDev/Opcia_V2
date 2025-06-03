import React, { useState, useRef, useMemo } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SolutionSection = ({ current, setCurrent }) => {
  const { t } = useTranslation();

  // descriptions를 i18n으로 변경
  const descriptions = useMemo(() => ({
    "Consulting": t('solution.descriptions.consulting'),
    "moDon-D": t('solution.descriptions.modonD'),
    "moDon-H": t('solution.descriptions.modonH'),
    "moDon-I": t('solution.descriptions.modonI'),
    "moDon-W": t('solution.descriptions.modonW'),
    "Cyber Training Platform": t('solution.descriptions.cyberTraining'),
    "moDon-M": t('solution.descriptions.modonM'),
    "moDon-N": t('solution.descriptions.modonN'),
    "Satellite Image Analysis": t('solution.descriptions.satellite')
  }), [t]);

  // 모바일 감지 함수
  const isMobile = () => {
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  // 디바이스에 따른 스크롤 duration 결정
  const getScrollDuration = () => {
    if (isMobile()) {
      return 600; // 모바일: 0.6초
    }
    return 1000; // 데스크톱: 1초
  };

  // 상세 내용 렌더 함수 (i18n 적용)
  function renderDetailContent(title) {
    // Consulting
    if (title === t('solution.consulting')) {
      return (
        <div>
          <ul className="space-y-3 text-base md:text-xl text-black list-disc pl-6">
            <li>{t('solution.details.consulting.item1')}</li>
            <li>{t('solution.details.consulting.item2')}</li>
            <li>{t('solution.details.consulting.item3')}</li>
            <li>{t('solution.details.consulting.item4')}</li>
          </ul>
        </div>
      );
    }
    // moDon-D
    if (title === t('solution.modonD')) {
      return (
        <div>
          <ul className="mb-6 space-y-4 text-base md:text-xl">
            <li>
              <span className="font-bold text-black">{t('solution.details.modonD.droneAntiForensics')}:</span>
              <span className="ml-2 text-gray-800">
                {t('solution.details.modonD.droneAntiForensicsDesc')}
              </span>
            </li>
            <li>
              <span className="font-bold text-black">{t('solution.details.modonD.encryptedDataTypes')}:</span>
              <span className="ml-2 text-gray-800">
                {t('solution.details.modonD.encryptedDataTypesDesc')}
              </span>
              <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                <li>{t('solution.details.modonD.encryption.item1')}</li>
                <li>{t('solution.details.modonD.encryption.item2')}</li>
                <li>{t('solution.details.modonD.encryption.item3')}</li>
                <li>{t('solution.details.modonD.encryption.item4')}</li>
              </ol>
              <div className="border-l-2 border-gray-400 pl-4 mt-4 text-gray-700 text-base">
                {t('solution.details.modonD.firmwareDesc')}<br />
                {t('solution.details.modonD.lightweightDesc')} &rarr; <span className="text-yellow-400 font-semibold">{t('solution.details.modonD.readyForDeployment')}</span>
              </div>
            </li>
          </ul>
        </div>
      );
    }
    // moDon-H
    if (title === t('solution.modonH')) {
      return (
        <div>
          <ul className="mb-8 space-y-3 text-base md:text-xl text-black list-disc pl-6">
            <li>{t('solution.details.modonH.item1')}</li>
            <li>{t('solution.details.modonH.item2')}</li>
            <li>{t('solution.details.modonH.item3')}</li>
            <li>{t('solution.details.modonH.item4')}</li>
          </ul>
          <div className="flex justify-center mb-2">
            <img
              loading="lazy"
              src="images/solution/modon-h-diagram.webp"
              alt={t('solution.details.modonH.diagramAlt')}
              className="rounded-lg shadow-lg bg-gray-100 object-contain"
              style={{ maxHeight: 320, maxWidth: "100%" }}
            />
          </div>
        </div>
      );
    }
    // moDon-I
    if (title === t('solution.modonI')) {
      return (
        <div>
          <div className="mb-6 text-base md:text-xl">
            <span className="text-gray-700">
              {t('solution.details.modonI.whitelistDesc')}{' '}
              <span className="underline text-orange-400 font-semibold">{t('solution.details.modonI.rustLanguage')}</span>
            </span>
          </div>
          <ul className="mb-8 space-y-2 list-disc pl-6 text-base text-black">
            <li>{t('solution.details.modonI.item1')}</li>
            <li>{t('solution.details.modonI.item2')}</li>
            <li>{t('solution.details.modonI.item3')}</li>
            <li>{t('solution.details.modonI.item4')}</li>
            <li>{t('solution.details.modonI.item5')}</li>
            <li>{t('solution.details.modonI.item6')}</li>
          </ul>
          <div className="flex flex-col md:flex-row gap-6 mb-8 items-center justify-center">
            <img
              loading="lazy"
              src="images/solution/modon-i-diagram.webp"
              alt={t('solution.details.modonI.architectureAlt')}
              className="rounded-lg shadow-lg object-contain w-full md:w-2/3 bg-gray-100"
              style={{ maxHeight: 220 }}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="font-bold mb-2">{t('solution.details.modonI.feature1.title')}</div>
              <div className="border-l-4 border-yellow-400 pl-4 text-base mb-4">
                {t('solution.details.modonI.feature1.desc')}
              </div>
            </div>
            <div className="flex-1">
              <div className="font-bold mb-2">{t('solution.details.modonI.feature2.title')}</div>
              <div className="border-l-4 border-yellow-400 pl-4 text-base mb-4">
                {t('solution.details.modonI.feature2.desc')}
              </div>
            </div>
          </div>
        </div>
      );
    }
    // moDon-W
    if (title === t('solution.modonW')) {
      return (
        <div>
          <ul className="mb-6 space-y-2 text-base md:text-xl list-disc pl-6 text-black">
            <li>{t('solution.details.modonW.item1')}</li>
            <li>{t('solution.details.modonW.item2')}</li>
            <li>{t('solution.details.modonW.item3')}</li>
            <li>{t('solution.details.modonW.item4')}</li>
            <li>{t('solution.details.modonW.item5')}</li>
            <li>{t('solution.details.modonW.item6')}</li>
            <li>{t('solution.details.modonW.item7')}</li>
          </ul>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <img
              loading="lazy"
              src="images/solution/modon-w-1.webp"
              alt={t('solution.details.modonW.system1Alt')}
              className="rounded-lg shadow-lg object-cover w-full h-36 bg-gray-100"
              style={{ objectFit: "cover" }}
            />
            <img
              loading="lazy"
              src="images/solution/modon-w-2.webp"
              alt={t('solution.details.modonW.system2Alt')}
              className="rounded-lg shadow-lg object-cover w-full h-36 bg-gray-100"
              style={{ objectFit: "cover" }}
            />
            <img
              loading="lazy"
              src="images/solution/modon-w-3.webp"
              alt={t('solution.details.modonW.system3Alt')}
              className="rounded-lg shadow-lg object-cover w-full h-36 bg-gray-100"
              style={{ objectFit: "cover" }}
            />
            <img
              loading="lazy"
              src="images/solution/modon-w-4.webp"
              alt={t('solution.details.modonW.system4Alt')}
              className="rounded-lg shadow-lg object-cover w-full h-36 bg-gray-100"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      );
    }
    // Cyber Training Platform
    if (title === t('solution.cyberTraining')) {
      return (
        <div>
          <ul className="space-y-3 text-base md:text-xl text-black list-disc pl-6">
            <li>{t('solution.details.cyberTraining.item1')}</li>
            <li>{t('solution.details.cyberTraining.item2')}</li>
            <li>{t('solution.details.cyberTraining.item3')}</li>
            <li>{t('solution.details.cyberTraining.item4')}</li>
          </ul>
        </div>
      );
    }
    // moDon-M
    if (title === t('solution.modonM')) {
      return (
        <div>
          <div className="mb-4">
            <div className="font-semibold text-base md:text-xl text-black mb-2">{t('solution.details.modonM.needTitle')}</div>
            <ul className="list-disc pl-6 space-y-1 text-base md:text-lg text-gray-800">
              <li>{t('solution.details.modonM.need.item1')}</li>
              <li>{t('solution.details.modonM.need.item2')}</li>
              <li>{t('solution.details.modonM.need.item3')}</li>
              <li>{t('solution.details.modonM.need.item4')}</li>
            </ul>
          </div>
          <div className="mb-4">
            <div className="font-semibold text-base md:text-xl text-black mb-2">{t('solution.details.modonM.techTitle')}</div>
            <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-800">
              <li>
                {t('solution.details.modonM.tech.item1')}
                <ul className="list-disc pl-6 text-sm mt-1">
                  <li>{t('solution.details.modonM.tech.item1Sub')}</li>
                </ul>
              </li>
              <li>
                {t('solution.details.modonM.tech.item2')}
                <ul className="list-disc pl-6 text-sm mt-1">
                  <li>{t('solution.details.modonM.tech.item2Sub')}</li>
                </ul>
              </li>
              <li>
                {t('solution.details.modonM.tech.item3')}
                <ul className="list-disc pl-6 text-sm mt-1">
                  <li>{t('solution.details.modonM.tech.item3Sub')}</li>
                </ul>
              </li>
              <li>{t('solution.details.modonM.tech.item4')}</li>
              <li>
                {t('solution.details.modonM.tech.item5')}
                <ul className="list-disc pl-6 text-sm mt-1">
                  <li>{t('solution.details.modonM.tech.item5Sub')}</li>
                </ul>
              </li>
              <li>
                {t('solution.details.modonM.tech.item6')}
                <ul className="list-disc pl-6 text-sm mt-1">
                  <li>{t('solution.details.modonM.tech.item6Sub')}</li>
                </ul>
              </li>
              <li>
                {t('solution.details.modonM.tech.item7')}
                <ul className="list-disc pl-6 text-sm mt-1">
                  <li>{t('solution.details.modonM.tech.item7Sub')}</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="mb-2">
            <div className="font-semibold text-base md:text-xl text-black mb-2">{t('solution.details.modonM.benefitsTitle')}</div>
            <ul className="list-disc pl-6 space-y-1 text-base md:text-lg text-gray-800">
              <li>{t('solution.details.modonM.benefits.item1')}</li>
              <li>{t('solution.details.modonM.benefits.item2')}</li>
              <li>{t('solution.details.modonM.benefits.item3')}</li>
              <li>{t('solution.details.modonM.benefits.item4')}</li>
            </ul>
          </div>
        </div>
      );
    }
    // moDon-N
    if (title === t('solution.modonN')) {
      return (
        <div>
          <ul className="mb-6 space-y-2 text-base md:text-xl list-disc pl-6 text-black">
            <li>{t('solution.details.modonN.item1')}</li>
            <li>{t('solution.details.modonN.item2')}</li>
            <li>{t('solution.details.modonN.item3')}</li>
            <li>{t('solution.details.modonN.item4')}</li>
            <li>{t('solution.details.modonN.item5')}</li>
            <li>{t('solution.details.modonN.item6')}</li>
            <li>{t('solution.details.modonN.item7')}</li>
          </ul>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1 flex flex-col">
              <img
                loading="lazy"
                src="images/solution/modon-n-1.webp"
                alt={t('solution.details.modonN.dashboard1Alt')}
                className="rounded-lg shadow-lg object-contain bg-gray-100 mb-4"
                style={{ maxHeight: 220, width: "100%", maxWidth: 380 }}
              />
              <div className="font-bold text-lg mb-2 text-black">{t('solution.details.modonN.keyFeaturesTitle')}</div>
              <ol className="list-decimal pl-6 space-y-1 text-base text-gray-800">
                <li>{t('solution.details.modonN.keyFeatures.item1')}</li>
                <li>{t('solution.details.modonN.keyFeatures.item2')}</li>
                <li>{t('solution.details.modonN.keyFeatures.item3')}</li>
                <li>{t('solution.details.modonN.keyFeatures.item4')}</li>
                <li>{t('solution.details.modonN.keyFeatures.item5')}</li>
                <li>{t('solution.details.modonN.keyFeatures.item6')}</li>
              </ol>
            </div>
            <div className="flex-1 flex flex-col">
              <img
                loading="lazy"
                src="images/solution/modon-n-2.webp"
                alt={t('solution.details.modonN.dashboard2Alt')}
                className="rounded-lg shadow-lg object-contain bg-gray-100 mb-6"
                style={{ maxHeight: 220, width: "100%", maxWidth: 380 }}
              />
              <div className="font-bold text-lg mb-2 text-black">{t('solution.details.modonN.deploymentTitle')}</div>
              <ul className="list-disc pl-6 space-y-1 text-base text-gray-800">
                <li>{t('solution.details.modonN.deployment.item1')}</li>
                <li>{t('solution.details.modonN.deployment.item2')}</li>
                <li>{t('solution.details.modonN.deployment.item3')}</li>
                <li>{t('solution.details.modonN.deployment.item4')}</li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
    // Satellite Image Analysis
    if (title === t('solution.satellite')) {
      return (
        <div>
          <ul className="mb-4 space-y-2 text-base md:text-xl text-black">
            <li>{t('solution.details.satellite.mainDesc')}</li>
            <li>
              <span className="font-semibold text-black">{t('solution.details.satellite.dataTitle')}:</span>
              <ul className="list-disc pl-6 mt-1 space-y-1 text-gray-800">
                <li>{t('solution.details.satellite.data.item1')}</li>
                <li>{t('solution.details.satellite.data.item2')}</li>
                <li>{t('solution.details.satellite.data.item3')}</li>
              </ul>
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <img
              loading="lazy"
              src="images/solution/satellite-plane-2.webp"
              alt={t('solution.details.satellite.plane1Alt')}
              className="rounded-lg shadow-lg object-cover w-full h-48 bg-gray-100"
              style={{ objectFit: "cover" }}
            />
            <img
              loading="lazy"
              src="images/solution/satellite-plane-1.webp"
              alt={t('solution.details.satellite.plane2Alt')}
              className="rounded-lg shadow-lg object-cover w-full h-48 bg-gray-100"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <img
                loading="lazy"
                src="images/solution/satellite-align.webp"
                alt={t('solution.details.satellite.alignmentAlt')}
                className="rounded-lg shadow-lg object-contain w-full bg-gray-100"
                style={{ maxHeight: 200 }}
              />
            </div>
            <img
              loading="lazy"
              src="images/solution/satellite-pose.webp"
              alt={t('solution.details.satellite.poseAlt')}
              className="rounded-lg shadow-lg object-contain w-full bg-gray-100"
              style={{ maxHeight: 200 }}
            />
          </div>
        </div>
      );
    }
    // fallback
    return null;
  }

  const solutions = useMemo(() => [
    { title: t('solution.consulting'), width: "700px", image: "images/solution/consulting.webp" },
    { title: t('solution.modonD'), width: "865px", featured: true, image: "images/solution/modon-d.webp" },
    { title: t('solution.modonH'), width: "717px", image: "images/solution/modon-h.webp" },
    { title: t('solution.modonI'), width: "807px", image: "images/solution/modon-i.webp" },
    { title: t('solution.modonW'), width: "613px", image: "images/solution/modon-w.webp" },
    { title: t('solution.cyberTraining'), width: "491px", image: "images/solution/cyber-training.webp" },
    { title: t('solution.modonM'), width: "666px", image: "images/solution/modon-m.webp" },
    { title: t('solution.modonN'), width: "483px", image: "images/solution/modon-n.webp" },
    { title: t('solution.satellite'), width: "530px", featured: true, image: "images/solution/satellite-analysis.webp" }
  ], [t]);

  const [showDetail, setShowDetail] = useState(false); // 애니메이션용
  const [isDetailVisible, setIsDetailVisible] = useState(false); // 실제 DOM 표시

  const headerRef = useRef(null);
  const detailRef = useRef(null);

  const goPrev = () => setCurrent((prev) => (prev === 0 ? solutions.length - 1 : prev - 1));
  const goNext = () => setCurrent((prev) => (prev === solutions.length - 1 ? 0 : prev + 1));

  function easeInOutCubic(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  // 개선된 slowScrollTo 함수 - 디바이스별 최적화
  function slowScrollTo(targetY, duration = null, callback) {
    // duration이 명시적으로 전달되지 않으면 자동으로 결정
    const actualDuration = duration || getScrollDuration();
    
    const startY = window.scrollY;
    const diff = targetY - startY;
    
    // 스크롤 거리가 짧으면 duration을 더 줄임
    const scrollDistance = Math.abs(diff);
    const adjustedDuration = scrollDistance < 500 ? actualDuration * 0.7 : actualDuration;
    
    let start;

    function step(timestamp) {
      if (!start) start = timestamp;
      const time = timestamp - start;
      const percent = Math.min(time / adjustedDuration, 1);
      const eased = easeInOutCubic(percent);
      window.scrollTo(0, startY + diff * eased);
      if (percent < 1) {
        window.requestAnimationFrame(step);
      } else if (callback) {
        callback();
      }
    }
    window.requestAnimationFrame(step);
  }

  // 상세 열기
  const handleImageClick = () => {
    setIsDetailVisible(true);
    setTimeout(() => setShowDetail(true), 10); // mount 후 애니메이션 트리거
    setTimeout(() => {
      if (detailRef.current) {
        const y = detailRef.current.getBoundingClientRect().top + window.scrollY - (isMobile() ? 60 : 100);
        slowScrollTo(y); // 자동으로 디바이스에 맞는 duration 적용
      }
    }, 100);
  };

  // 상세 닫기
  const handleCloseDetail = () => {
    setShowDetail(false); // 애니메이션 시작
    setTimeout(() => {
      if (headerRef.current) {
        const y = headerRef.current.getBoundingClientRect().top + window.scrollY - (isMobile() ? 40 : 80);
        slowScrollTo(y, null, () => { // 자동으로 디바이스에 맞는 duration 적용
          setIsDetailVisible(false); // 스크롤 끝난 후 DOM 제거
        });
      } else {
        setIsDetailVisible(false);
      }
    }, 300); // 300ms = transition duration과 맞춤
  };

  return (
    <section id="solution" className="bg-white px-6 lg:px-12 py-24">
      <div className="flex flex-col items-center gap-20 relative bg-white overflow-hidden">
        {/* Header */}
        <div ref={headerRef} className="w-full flex justify-start mb-16">
          <h2 className="font-alata text-4xl sm:text-6xl lg:text-[75px] text-black tracking-[2px] leading-tight">
            {t('nav.solution')}
          </h2>
        </div>

        {/* Carousel */}
        <div className="w-full flex justify-center items-center relative" style={{ minHeight: '400px' }}>
          <div className="relative flex items-center justify-center" style={{ width: 'min(90vw, 900px)' }}>
            {/* Left Arrow */}
            <button
              onClick={goPrev}
              className="
                z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black flex items-center justify-center
                bg-white hover:bg-gray-100 transition
                absolute left-2 top-1/2 -translate-y-1/2
                sm:-left-3 md:-left-6 lg:-left-7 xl:-left-24 2xl:-left-32
                shadow
              "
              aria-label={t('solution.prev')}
            >
              <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
            {/* Main Card */}
            <div
              className="flex flex-col items-start justify-end relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              style={{
                width: '100%',
                height: '380px',
                background: '#222',
                minWidth: '320px',
                maxWidth: '900px'
              }}
              onClick={handleImageClick}
            >
              <img
                src={solutions[current].image}
                loading="lazy"
                alt={solutions[current].title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ zIndex: 1 }}
              />
              <div className="absolute inset-0 bg-black/30" style={{ zIndex: 2 }} />

              {/* Hover 설명 박스 */}
              <div className="absolute inset-0 flex flex-col justify-end p-0 z-10">
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
                          className="font-alata text-xl lg:text-3xl xl:text-5xl font-medium tracking-[-1.44px] leading-tight mb-4 opacity-90 text-white"
                        >
                          {solutions[current].title}
                        </h3>
                        <p
                          className="font-normal"
                          style={{
                            fontSize: '1.1rem',
                            color: '#fff',
                            lineHeight: '1.2',
                            margin: 0,
                          }}
                        >
                          {descriptions[solutions[current].title]}
                        </p>
                      </div>
                      {/* 기본 타이틀(호버 전) */}
                      <div className="transition-all duration-300 opacity-100 group-hover:opacity-0 translate-y-0 group-hover:-translate-y-4 relative z-10">
                        <h3 className="font-alata text-3xl md:text-5xl font-medium mb-2 drop-shadow-lg text-white">
                          {solutions[current].title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Arrow */}
            <button
              onClick={goNext}
              className="
                z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black flex items-center justify-center
                bg-white hover:bg-gray-100 transition
                absolute right-2 top-1/2 -translate-y-1/2
                sm:-right-3 md:-right-6 lg:-right-7 xl:-right-24 2xl:-right-32
                shadow
              "
              aria-label={t('solution.next')}
            >
              <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </div>
        </div>

        {/* 상세 내용 영역 */}
        {isDetailVisible && (
          <div
            ref={detailRef}
            className={`
              w-full max-w-4xl mt-16 p-8 rounded-2xl bg-gray-100 shadow-lg text-gray-900 text-lg mx-auto
              transition-all duration-300
              ${showDetail ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'}
            `}
            style={{ willChange: 'opacity, transform' }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-alata text-3xl md:text-4xl font-bold">
                {solutions[current].title}
              </h3>
              <button
                className="text-gray-500 hover:text-black text-xl px-2"
                onClick={handleCloseDetail}
                aria-label={t('common.close')}
              >
                ×
              </button>
            </div>
            <div>
              {renderDetailContent(solutions[current].title)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SolutionSection;