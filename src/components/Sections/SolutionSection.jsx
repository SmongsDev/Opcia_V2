import React, { useState, useRef, useMemo, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SolutionSection = ({ current, setCurrent }) => {
  const { t } = useTranslation();

  // 디바이스 감지 (리사이즈 이벤트 포함)
  const [deviceInfo, setDeviceInfo] = useState(() => ({
    isMobile: window.innerWidth <= 768,
    isTouch: 'ontouchstart' in window,
    isLowEndDevice: navigator.hardwareConcurrency <= 4 || navigator.deviceMemory <= 4
  }));

  // 터치 상태 관리
  const [touchState, setTouchState] = useState({
    startX: 0,
    currentX: 0,
    isDragging: false,
    threshold: 50
  });

  // 프리로딩 최적화 - 모바일에서는 최소한만
  const [preloadedImages, setPreloadedImages] = useState(new Set());

  const headerRef = useRef(null);
  const detailRef = useRef(null);
  const carouselRef = useRef(null);

  // 리사이즈 감지
  useEffect(() => {
    const handleResize = () => {
      setDeviceInfo({
        isMobile: window.innerWidth <= 768,
        isTouch: 'ontouchstart' in window,
        isLowEndDevice: navigator.hardwareConcurrency <= 4 || navigator.deviceMemory <= 4
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 솔루션 데이터 메모이제이션
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

  // 설명 데이터 메모이제이션
  const descriptions = useMemo(() => ({
    [t('solution.consulting')]: t('solution.descriptions.consulting'),
    [t('solution.modonD')]: t('solution.descriptions.modonD'),
    [t('solution.modonH')]: t('solution.descriptions.modonH'),
    [t('solution.modonI')]: t('solution.descriptions.modonI'),
    [t('solution.modonW')]: t('solution.descriptions.modonW'),
    [t('solution.cyberTraining')]: t('solution.descriptions.cyberTraining'),
    [t('solution.modonM')]: t('solution.descriptions.modonM'),
    [t('solution.modonN')]: t('solution.descriptions.modonN'),
    [t('solution.satellite')]: t('solution.descriptions.satellite')
  }), [t]);

  // 상세 표시 상태
  const [showDetail, setShowDetail] = useState(false);
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  // 최적화된 이미지 프리로딩
  const preloadImage = useCallback((src, priority = false) => {
    if (preloadedImages.has(src)) return Promise.resolve();
    
    // 모바일에서는 우선순위 이미지만 프리로딩
    if (deviceInfo.isMobile && !priority) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        setPreloadedImages(prev => new Set([...prev, src]));
        resolve(src);
      };
      img.onerror = reject;
      img.src = src;
    });
  }, [preloadedImages, deviceInfo.isMobile]);

  // 현재 이미지와 인접 이미지만 프리로딩
  useEffect(() => {
    const preloadCurrentImages = async () => {
      const currentImage = solutions[current].image;
      const nextIndex = (current + 1) % solutions.length;
      const prevIndex = (current - 1 + solutions.length) % solutions.length;
      
      // 현재 이미지는 항상 프리로딩
      await preloadImage(currentImage, true);
      
      // 모바일이 아닌 경우에만 인접 이미지 프리로딩
      if (!deviceInfo.isMobile) {
        preloadImage(solutions[nextIndex].image, false);
        preloadImage(solutions[prevIndex].image, false);
      }
    };

    preloadCurrentImages();
  }, [current, solutions, preloadImage, deviceInfo.isMobile]);

  // 터치 이벤트 핸들러
  const handleTouchStart = useCallback((e) => {
    if (!deviceInfo.isTouch) return;
    
    const touch = e.touches[0];
    setTouchState(prev => ({
      ...prev,
      startX: touch.clientX,
      currentX: touch.clientX,
      isDragging: true
    }));
  }, [deviceInfo.isTouch]);

  const handleTouchMove = useCallback((e) => {
    if (!touchState.isDragging) return;
    
    const touch = e.touches[0];
    setTouchState(prev => ({
      ...prev,
      currentX: touch.clientX
    }));
  }, [touchState.isDragging]);

  const handleTouchEnd = useCallback(() => {
    if (!touchState.isDragging) return;
    
    const deltaX = touchState.currentX - touchState.startX;
    
    if (Math.abs(deltaX) > touchState.threshold) {
      if (deltaX > 0) {
        // 오른쪽으로 스와이프 - 이전
        setCurrent(prev => (prev === 0 ? solutions.length - 1 : prev - 1));
      } else {
        // 왼쪽으로 스와이프 - 다음
        setCurrent(prev => (prev === solutions.length - 1 ? 0 : prev + 1));
      }
    }
    
    setTouchState(prev => ({
      ...prev,
      isDragging: false,
      currentX: 0,
      startX: 0
    }));
  }, [touchState, setCurrent, solutions.length]);

  // 최적화된 스크롤 함수
  const scrollToTarget = useCallback((targetY, callback) => {
    if (deviceInfo.isMobile || deviceInfo.isLowEndDevice) {
      // 모바일이나 저사양 기기에서는 즉시 이동
      window.scrollTo(0, targetY);
      callback && setTimeout(callback, 16);
      return;
    }

    // 고사양 데스크톱에서만 애니메이션
    const startY = window.scrollY;
    const diff = targetY - startY;
    const duration = 700;
    
    let start;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = progress < 0.5 ? 4 * progress ** 3 : 1 - ((-2 * progress + 2) ** 3) / 2;
      
      window.scrollTo(0, startY + diff * eased);
      
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        callback && callback();
      }
    };
    requestAnimationFrame(step);
  }, [deviceInfo.isMobile, deviceInfo.isLowEndDevice]);



  // 원본 상세 내용 렌더링 함수를 useCallback으로 변경
  const renderDetailContent = useCallback((title) => {  
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
              className={`rounded-lg shadow-lg bg-gray-100 object-contain transition-opacity duration-300 ${
                preloadedImages.has("images/solution/modon-h-diagram.webp") ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ maxHeight: 320, maxWidth: "100%" }}
              onLoad={() => setPreloadedImages(prev => new Set([...prev, "images/solution/modon-h-diagram.webp"]))}
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
              className={`rounded-lg shadow-lg object-contain w-full md:w-2/3 bg-gray-100 transition-opacity duration-300 ${
                preloadedImages.has("images/solution/modon-i-diagram.webp") ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ maxHeight: 220 }}
              onLoad={() => setPreloadedImages(prev => new Set([...prev, "images/solution/modon-i-diagram.webp"]))}
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
            {[
              { src: "images/solution/modon-w-1.webp", alt: t('solution.details.modonW.system1Alt') },
              { src: "images/solution/modon-w-2.webp", alt: t('solution.details.modonW.system2Alt') },
              { src: "images/solution/modon-w-3.webp", alt: t('solution.details.modonW.system3Alt') },
              { src: "images/solution/modon-w-4.webp", alt: t('solution.details.modonW.system4Alt') }
            ].map((img, index) => (
              <img
                key={index}
                loading="lazy"
                src={img.src}
                alt={img.alt}
                className={`rounded-lg shadow-lg object-cover w-full h-36 bg-gray-100 transition-opacity duration-300 ${
                  preloadedImages.has(img.src) ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ objectFit: "cover" }}
                onLoad={() => setPreloadedImages(prev => new Set([...prev, img.src]))}
              />
            ))}
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
                className={`rounded-lg shadow-lg object-contain bg-gray-100 mb-4 transition-opacity duration-300 ${
                  preloadedImages.has("images/solution/modon-n-1.webp") ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ maxHeight: 220, width: "100%", maxWidth: 380 }}
                onLoad={() => setPreloadedImages(prev => new Set([...prev, "images/solution/modon-n-1.webp"]))}
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
                className={`rounded-lg shadow-lg object-contain bg-gray-100 mb-6 transition-opacity duration-300 ${
                  preloadedImages.has("images/solution/modon-n-2.webp") ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ maxHeight: 220, width: "100%", maxWidth: 380 }}
                onLoad={() => setPreloadedImages(prev => new Set([...prev, "images/solution/modon-n-2.webp"]))}
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
            {[
              { src: "images/solution/satellite-plane-2.webp", alt: t('solution.details.satellite.plane1Alt') },
              { src: "images/solution/satellite-plane-1.webp", alt: t('solution.details.satellite.plane2Alt') }
            ].map((img, index) => (
              <img
                key={index}
                loading="lazy"
                src={img.src}
                alt={img.alt}
                className={`rounded-lg shadow-lg object-cover w-full h-48 bg-gray-100 transition-opacity duration-300 ${
                  preloadedImages.has(img.src) ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ objectFit: "cover" }}
                onLoad={() => setPreloadedImages(prev => new Set([...prev, img.src]))}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <img
                loading="lazy"
                src="images/solution/satellite-align.webp"
                alt={t('solution.details.satellite.alignmentAlt')}
                className={`rounded-lg shadow-lg object-contain w-full bg-gray-100 transition-opacity duration-300 ${
                  preloadedImages.has("images/solution/satellite-align.webp") ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ maxHeight: 200 }}
                onLoad={() => setPreloadedImages(prev => new Set([...prev, "images/solution/satellite-align.webp"]))}
              />
            </div>
            <img
              loading="lazy"
              src="images/solution/satellite-pose.webp"
              alt={t('solution.details.satellite.poseAlt')}
              className={`rounded-lg shadow-lg object-contain w-full bg-gray-100 transition-opacity duration-300 ${
                preloadedImages.has("images/solution/satellite-pose.webp") ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ maxHeight: 200 }}
              onLoad={() => setPreloadedImages(prev => new Set([...prev, "images/solution/satellite-pose.webp"]))}
            />
          </div>
        </div>
      );
    }
    // fallback
    return null;
  }, [t, preloadedImages, setPreloadedImages]);

  // 내비게이션 함수
  const goPrev = useCallback(() => {
    setCurrent(prev => (prev === 0 ? solutions.length - 1 : prev - 1));
  }, [setCurrent, solutions.length]);

  const goNext = useCallback(() => {
    setCurrent(prev => (prev === solutions.length - 1 ? 0 : prev + 1));
  }, [setCurrent, solutions.length]);

  // 상세 보기 토글
  const handleImageClick = useCallback(() => {
    setIsDetailVisible(true);
    setShowDetail(true);
    
    // 스크롤 처리
    setTimeout(() => {
      if (detailRef.current) {
        const offset = deviceInfo.isMobile ? 60 : 100;
        const y = detailRef.current.getBoundingClientRect().top + window.scrollY - offset;
        scrollToTarget(y);
      }
    }, deviceInfo.isMobile ? 0 : 100);
  }, [deviceInfo.isMobile, scrollToTarget]);

  const handleCloseDetail = useCallback(() => {
    setShowDetail(false);
    
    setTimeout(() => {
      if (headerRef.current) {
        const offset = deviceInfo.isMobile ? 40 : 80;
        const y = headerRef.current.getBoundingClientRect().top + window.scrollY - offset;
        scrollToTarget(y, () => setIsDetailVisible(false));
      } else {
        setIsDetailVisible(false);
      }
    }, deviceInfo.isMobile ? 0 : 300);
  }, [deviceInfo.isMobile, scrollToTarget]);

  return (
    <section id="solution" className="bg-white px-4 sm:px-6 lg:px-12 py-16 sm:py-24">
      <div className="flex flex-col items-center gap-12 sm:gap-20 relative bg-white overflow-hidden">
        {/* Header */}
        <div ref={headerRef} className="w-full flex justify-start mb-8 sm:mb-16">
          <h2 className="font-alata text-3xl sm:text-4xl md:text-6xl lg:text-[75px] text-black tracking-[2px] leading-tight">
            {t('nav.solution')}
          </h2>
        </div>

        {/* 최적화된 캐러셀 */}
        <div 
          ref={carouselRef}
          className="w-full flex justify-center items-center relative"
          style={{ minHeight: deviceInfo.isMobile ? '300px' : '400px' }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative flex items-center justify-center" style={{ width: 'min(90vw, 900px)' }}>
            {/* 내비게이션 버튼 */}
            {!deviceInfo.isMobile && (
              <>
                <button
                  onClick={goPrev}
                  className="z-30 w-12 h-12 rounded-full border border-black flex items-center justify-center bg-white hover:bg-gray-100 transition absolute -left-6 lg:-left-24 xl:-left-32 top-1/2 -translate-y-1/2 shadow"
                  aria-label={t('solution.prev')}
                >
                  <ArrowLeft className="w-7 h-7" />
                </button>
                <button
                  onClick={goNext}
                  className="z-30 w-12 h-12 rounded-full border border-black flex items-center justify-center bg-white hover:bg-gray-100 transition absolute -right-6 lg:-right-24 xl:-right-32 top-1/2 -translate-y-1/2 shadow"
                  aria-label={t('solution.next')}
                >
                  <ArrowRight className="w-7 h-7" />
                </button>
              </>
            )}

            {/* 메인 카드 */}
            <div
              className={`
                flex flex-col items-start justify-end relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer
                ${deviceInfo.isMobile ? 'touch-manipulation' : ''}
              `}
              style={{
                width: '100%',
                height: deviceInfo.isMobile ? '300px' : '380px',
                background: '#222',
                minWidth: deviceInfo.isMobile ? '280px' : '320px',
                maxWidth: '900px'
              }}
              onClick={handleImageClick}
            >
              {/* 이미지 */}
              <img
                src={solutions[current].image}
                loading="lazy"
                alt={solutions[current].title}
                className={`
                  absolute inset-0 w-full h-full object-cover transition-opacity duration-300
                  ${preloadedImages.has(solutions[current].image) ? 'opacity-100' : 'opacity-0'}
                `}
                style={{ zIndex: 1 }}
                onLoad={() => setPreloadedImages(prev => new Set([...prev, solutions[current].image]))}
              />
              
              {/* 오버레이 */}
              <div className="absolute inset-0 bg-black/30" style={{ zIndex: 2 }} />

              {/* 콘텐츠 */}
              <div className="absolute inset-0 flex flex-col justify-end p-0 z-10">
                <div className="w-full px-4 sm:px-8 pb-4 sm:pb-8">
                  {/* 모바일에서는 호버 효과 제거 */}
                  {deviceInfo.isMobile ? (
                    <div>
                      <h3 className="font-alata text-2xl sm:text-3xl font-medium mb-2 drop-shadow-lg text-white">
                        {solutions[current].title}
                      </h3>
                      <p className="text-sm sm:text-base text-white leading-relaxed" style={{ color: 'white' }}>
                        {descriptions[solutions[current].title]}
                      </p>
                    </div>
                  ) : (
                    // 데스크톱 호버 효과
                    <div className="w-full">
                      <div className="transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 absolute left-0 right-0 bottom-0 mx-8 mb-8"
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
                        <h3 className="font-alata text-xl lg:text-3xl xl:text-5xl font-medium tracking-[-1.44px] leading-tight mb-4 opacity-90 text-white">
                          {solutions[current].title}
                        </h3>
                        <p className="text-lg text-white leading-relaxed">
                          {descriptions[solutions[current].title]}
                        </p>
                      </div>
                      <div className="transition-all duration-300 opacity-100 group-hover:opacity-0 translate-y-0 group-hover:-translate-y-4 relative z-10">
                        <h3 className="font-alata text-3xl md:text-5xl font-medium mb-2 drop-shadow-lg text-white">
                          {solutions[current].title}
                        </h3>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 모바일에서 클릭 가능한 Dot Navigation */}
        {deviceInfo.isMobile && (
          <div className="flex space-x-3 mt-4">
            {solutions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 touch-manipulation ${
                  index === current 
                    ? 'bg-black scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400 active:bg-gray-500'
                }`}
                aria-label={`${t('solution.goToSlide')} ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* 상세 내용 (최적화됨) */}
        {isDetailVisible && (
          <div
            ref={detailRef}
            className={`
              w-full max-w-4xl mt-8 sm:mt-16 p-4 sm:p-8 rounded-2xl bg-gray-100 shadow-lg text-gray-900 mx-auto
              transition-all duration-300
              ${showDetail ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'}
            `}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-alata text-xl sm:text-3xl md:text-4xl font-bold">
                {solutions[current].title}
              </h3>
              <button
                className="text-gray-500 hover:text-black text-xl px-2 touch-manipulation"
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