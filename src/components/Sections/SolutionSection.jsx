import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const descriptions = {
  "Consulting": "Customized cybersecurity consulting offering penetration testing, vulnerability analysis, security training, and compliance advisory through independent or partner-led engagements.",
  "moDon-D": "Drone anti-forensics system using encryption techniques to conceal drone-collected data with power-efficient design for end-to-end protection of camera modules, sensors, and system logs.",
  "moDon-H": "Industrial honeypot using actual PLCs and HMIs with intentional vulnerabilities to attract and monitor attackers, analyzing attack patterns to strengthen real-world defenses.",
  "moDon-I": "Rust-based whitelist IoT monitoring solution that detects malicious processes, blocks C2 connections, and provides real-time alerts supporting over 20 IoT architectures.",
  "moDon-W": "Wireless communication intelligence system tracking mobile phones and IoT devices across cellular/Wi-Fi networks with geolocation, DoS monitoring, and OSINT/SIGINT integration.",
  "Cyber Training Platform": "ICS-based cyber training platform offering customizable modular training from basic to advanced levels with real-world scenario simulations for operational needs.",
  "moDon-M": "Comprehensive military cybersecurity services providing IoT vulnerability analysis, secure drone firmware development, AI-powered threat detection, and cyber threat intelligence for defense standards.",
  "moDon-N": "Compact network traffic anomaly detection system for industrial environments supporting over 40 protocols with real-time monitoring and immediate alert transmission.",
  "Satellite Image Analysis": "Satellite vision-based cargo demand modeling system using data from Maxar, Planet Labs, and Artula with deep learning image alignment for logistics analysis."
};

// 상세 내용 렌더 함수 (v1 오버레이 내용 그대로)
function renderDetailContent(title) {
  // Consulting
  if (title === "Consulting") {
    return (
      <div>
        <ul className="space-y-3 text-base md:text-xl text-black list-disc pl-6">
          <li>Facility-specific consulting on penetration testing, vulnerability analysis, and training</li>
          <li>Independent or partner-led engagements based on project needs</li>
          <li>Cyber &amp; physical penetration testing, vulnerability research, compliance advisory</li>
          <li>Security awareness and professional workforce training</li>
        </ul>
      </div>
    );
  }
  // moDon-D
  if (title === "moDon-D") {
    return (
      <div>
        <ul className="mb-6 space-y-4 text-base md:text-xl">
          <li>
            <span className="font-bold text-black">Drone Anti-Forensics:</span>
            <span className="ml-2 text-gray-800">
              A set of techniques designed to evade detection or hinder investigation by manipulating or concealing data collected by drones. Typically used to obscure illegal drone activities and disrupt forensic analysis.
            </span>
          </li>
          <li>
            <span className="font-bold text-black">Encrypted Data Types:</span>
            <span className="ml-2 text-gray-800">
              Includes video, image, GPS information, and log data related to sensor activity
            </span>
            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
              <li>Software-based data encryption</li>
              <li>Optimized encryption targeting specific data types</li>
              <li>Hardware-based encryption</li>
              <li>Power-efficient design for minimal battery consumption</li>
            </ol>
            <div className="border-l-2 border-gray-400 pl-4 mt-4 text-gray-700 text-base">
              Firmware-level encryption + hardware-integrated security = end-to-end protection covering camera modules, sensors, and system logs<br />
              Lightweight and power-optimized for minimal battery consumption &rarr; <span className="text-yellow-400 font-semibold">ModOn-D is ready for real-world deployment.</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
  // moDon-H
  if (title === "moDon-H") {
    return (
      <div>
        <ul className="mb-8 space-y-3 text-base md:text-xl text-black list-disc pl-6">
          <li>Diverts attacks away from real systems using actual industrial equipment</li>
          <li>Built with PLCs and HMIs to simulate physical control environments</li>
          <li>Segmented networks and intentional vulnerabilities attract and monitor attackers</li>
          <li>Attack patterns are analyzed to strengthen real-world defenses</li>
        </ul>
        <div className="flex justify-center mb-2">
          <img
            src="images/solution/modon-h-diagram.png"
            alt="moDon-H Industrial Honeynet Diagram"
            className="rounded-lg shadow-lg bg-gray-100 object-contain"
            style={{ maxHeight: 320, maxWidth: "100%" }}
          />
        </div>
        <div className="text-right text-xs text-gray-500 mt-1 pr-1">Taffy Pot</div>
      </div>
    );
  }
  // moDon-I
  if (title === "moDon-I") {
    return (
      <div>
        <div className="mb-6 text-base md:text-xl">
          <span className="text-gray-700">
            Whitelist-based access control and blocking solution developed in{' '}
            <span className="underline text-orange-400 font-semibold">Rust Language</span>
          </span>
        </div>
        <ul className="mb-8 space-y-2 list-disc pl-6 text-base text-black">
          <li>Detects and collects malicious processes and binaries running on IoT/IIoT devices</li>
          <li>Monitors specific directories in real time and dumps created binaries upon detection</li>
          <li>Blocks binaries identified as malicious</li>
          <li>Detects and blocks connections to C2 (Command and Control) servers</li>
          <li>Provides real-time alerts and customizable policies via the IDX management interface</li>
          <li>Supports legacy systems and over 20 IoT CPU architectures and operating systems</li>
        </ul>
        <div className="flex flex-col md:flex-row gap-6 mb-8 items-center justify-center">
          <img
            src="images/solution/modon-i-diagram.png"
            alt="moDon-I Architecture"
            className="rounded-lg shadow-lg object-contain w-full md:w-2/3 bg-gray-100"
            style={{ maxHeight: 220 }}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div className="font-bold mb-2">1. Malware and Detection & Blocking Anomalous Process</div>
            <div className="border-l-4 border-yellow-400 pl-4 text-base mb-4">
              Detects abnormal processes by comparing real-time process activity against a whitelist of known legitimate processes
            </div>
          </div>
          <div className="flex-1">
            <div className="font-bold mb-2">2. File/Directory Anomaly Detection Blocking</div>
            <div className="border-l-4 border-yellow-400 pl-4 text-base mb-4">
              Monitors user-defined paths to detect unauthorized file or directory creation, modification, or deletion activities
            </div>
          </div>
        </div>
      </div>
    );
  }
  // moDon-W
  if (title === "moDon-W") {
    return (
      <div>
        <ul className="mb-6 space-y-2 text-base md:text-xl list-disc pl-6 text-black">
          <li>Tracking mobile phones and IoT devices over cellular networks (3G, 4G, 5G)</li>
          <li>Locating Wi-Fi &amp; cellular devices, access points, routers, and IoT equipment with precise geolocation</li>
          <li>Denial of service (DoS) on cellular and Wi-Fi networks</li>
          <li>IMSI and MAC address acquisition for identification and tracking</li>
          <li>Detection of hidden wireless devices (phones, recorders, cameras, routers, laptops, etc.)</li>
          <li>Simultaneous L-band monitoring of Iridium, Thuraya, and IsatPhone Pro satellite handsets using a unified sensor</li>
          <li>Integration of wireless intelligence into proprietary Webint system (OSINT + SIGINT + Deep Web + SNS)</li>
        </ul>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <img
            src="images/solution/modon-w-1.png"
            alt="moDon-W system 1"
            className="rounded-lg shadow-lg object-cover w-full h-36 bg-gray-100"
            style={{ objectFit: "cover" }}
          />
          <img
            src="images/solution/modon-w-2.png"
            alt="moDon-W system 2"
            className="rounded-lg shadow-lg object-cover w-full h-36 bg-gray-100"
            style={{ objectFit: "cover" }}
          />
          <img
            src="images/solution/modon-w-3.png"
            alt="moDon-W system 3"
            className="rounded-lg shadow-lg object-cover w-full h-36 bg-gray-100"
            style={{ objectFit: "cover" }}
          />
          <img
            src="images/solution/modon-w-4.png"
            alt="moDon-W system 4"
            className="rounded-lg shadow-lg object-cover w-full h-36 bg-gray-100"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    );
  }
  // Cyber Training Platform
  if (title === "Cyber Training Platform") {
    return (
      <div>
        <ul className="space-y-3 text-base md:text-xl text-black list-disc pl-6">
          <li>Facility-specific consulting on penetration testing, vulnerability analysis, and training</li>
          <li>Independent or partner-led engagements based on project needs</li>
          <li>Cyber &amp; physical penetration testing, vulnerability research, compliance advisory</li>
          <li>Security awareness and professional workforce training</li>
        </ul>
      </div>
    );
  }
  // moDon-M
  if (title === "moDon-M") {
    return (
      <div>
        <div className="mb-4">
          <div className="font-semibold text-base md:text-xl text-black mb-2">Need for Military Cybersecurity</div>
          <ul className="list-disc pl-6 space-y-1 text-base md:text-lg text-gray-800">
            <li>Drones, sensors, and comms systems are key cyber targets</li>
            <li>More mission failures and data leaks from GPS spoofing &amp; drone hacks</li>
            <li>Legacy defenses struggle with real-time, complex threats</li>
            <li>Proactive security is essential for military systems and networks</li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="font-semibold text-base md:text-xl text-black mb-2">Technologies &amp; Capabilities</div>
          <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-800">
            <li>
              IoT vulnerability analysis and hacking prevention
              <ul className="list-disc pl-6 text-sm mt-1">
                <li>(CCTV, routers, drones, multifunction devices, robots, etc.)</li>
              </ul>
            </li>
            <li>
              Development and analysis of secure drone firmware
              <ul className="list-disc pl-6 text-sm mt-1">
                <li>Includes anti-forensics design to prevent data recovery from downed mission drones</li>
              </ul>
            </li>
            <li>
              Multi-platform analysis tools for ARM, PPC, MIPS, etc.
              <ul className="list-disc pl-6 text-sm mt-1">
                <li>Uses AI-powered analysis to assess potential vulnerabilities</li>
              </ul>
            </li>
            <li>Network and infrastructure security implementation (service integration projects)</li>
            <li>
              Security assessment of foreign security equipment
              <ul className="list-disc pl-6 text-sm mt-1">
                <li>Including unauthorized and uncertified imported devices</li>
              </ul>
            </li>
            <li>
              CTI (Cyber Threat Intelligence) via satellite communication monitoring
              <ul className="list-disc pl-6 text-sm mt-1">
                <li>Tracking satellite phone activity within domestic use</li>
              </ul>
            </li>
            <li>
              THA (Threat Hunting Analysis)
              <ul className="list-disc pl-6 text-sm mt-1">
                <li>Detection of abnormal or emerging threats</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="mb-2">
          <div className="font-semibold text-base md:text-xl text-black mb-2">Expected Benefits</div>
          <ul className="list-disc pl-6 space-y-1 text-base md:text-lg text-gray-800">
            <li>Lightweight agent enables real-time anomaly detection for stable, continuous operation</li>
            <li>Firmware and data encryption blocks classified info leaks at the source</li>
            <li>AI-driven response counters zero-day and insider threats instantly</li>
            <li>Meets global cybersecurity standards (e.g., EU CRA) for defense market readiness</li>
          </ul>
        </div>
      </div>
    );
  }
  // moDon-N
  if (title === "moDon-N") {
    return (
      <div>
        <ul className="mb-6 space-y-2 text-base md:text-xl list-disc pl-6 text-black">
          <li>Compact network devices deployable without impacting existing industrial environments</li>
          <li>Designed for proactive detection and early response rather than direct blocking, considering the constraints of industrial environments</li>
          <li>Supports analysis of over 40 industrial protocols</li>
          <li>Customizable to fit specific site requirements</li>
          <li>Real-time monitoring of network traffic</li>
          <li>Visual dashboards and anomaly history management tools</li>
          <li>Immediate alert transmission via messenger or email upon abnormal traffic detection</li>
        </ul>
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex-1 flex flex-col">
            <img
              src="images/solution/modon-n-1.png"
              alt="moDon-N Dashboard 1"
              className="rounded-lg shadow-lg object-contain bg-gray-100 mb-4"
              style={{ maxHeight: 220, width: "100%", maxWidth: 380 }}
            />
            <div className="font-bold text-lg mb-2 text-black">Key Features</div>
            <ol className="list-decimal pl-6 space-y-1 text-base text-gray-800">
              <li>Anomaly behavior detection and real-time response</li>
              <li>Support for industrial network protocols</li>
              <li>Compatibility with existing network infrastructure</li>
              <li>Network traffic logging and management</li>
              <li>Alert and notification system</li>
              <li>Data visualization dashboard</li>
            </ol>
          </div>
          <div className="flex-1 flex flex-col">
            <img
              src="images/solution/modon-n-2.png"
              alt="moDon-N Dashboard 2"
              className="rounded-lg shadow-lg object-contain bg-gray-100 mb-6"
              style={{ maxHeight: 220, width: "100%", maxWidth: 380 }}
            />
            <div className="font-bold text-lg mb-2 text-black">Deployment Benefits</div>
            <ul className="list-disc pl-6 space-y-1 text-base text-gray-800">
              <li>Enhanced Real-Time Security</li>
              <li>Minimized Risk Exposure</li>
              <li>Improved Operational Efficiency</li>
              <li>Compliance with Laws & Regulations</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  // Satellite Image Analysis
  if (title === "Satellite Image Analysis") {
    return (
      <div>
        <ul className="mb-4 space-y-2 text-base md:text-xl text-black">
          <li>Satellite Vision based Cargo Demand Modeling &amp; Prediction</li>
          <li>
            <span className="font-semibold text-black">Data:</span>
            <ul className="list-disc pl-6 mt-1 space-y-1 text-gray-800">
              <li>
                Satellite Image from Maxar, Planet Labs, Arlula
              </li>
              <li>Air Cargo Warehouses Data</li>
              <li>International Logistics Company Data</li>
            </ul>
          </li>
        </ul>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <img
            src="images/solution/satellite-plane-2.png"
            alt="Satellite plane 1"
            className="rounded-lg shadow-lg object-cover w-full h-48 bg-gray-100"
            style={{ objectFit: "cover" }}
          />
          <img
            src="images/solution/satellite-plane-1.png"
            alt="Satellite plane 2"
            className="rounded-lg shadow-lg object-cover w-full h-48 bg-gray-100"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <img
              src="images/solution/satellite-align.png"
              alt="Deep Learning-based alignment"
              className="rounded-lg shadow-lg object-contain w-full bg-gray-100"
              style={{ maxHeight: 200 }}
            />
          </div>
          <img
            src="images/solution/satellite-pose.png"
            alt="Pose estimation"
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

const SolutionSection = () => {
  const solutions = [
    { title: "Consulting", width: "700px", image: "images/solution/consulting.png" },
    { title: "moDon-D", width: "865px", featured: true, image: "images/solution/modon-d.png" },
    { title: "moDon-H", width: "717px", image: "images/solution/modon-h.png" },
    { title: "moDon-I", width: "807px", image: "images/solution/modon-i.png" },
    { title: "moDon-W", width: "613px", image: "images/solution/modon-w.png" },
    { title: "Cyber Training Platform", width: "491px", image: "images/solution/cyber-training.png" },
    { title: "moDon-M", width: "666px", image: "images/solution/modon-m.png" },
    { title: "moDon-N", width: "483px", image: "images/solution/modon-n.png" },
    { title: "Satellite Image Analysis", width: "530px", featured: true, image: "images/solution/satellite-analysis.png" }
  ];

  const [current, setCurrent] = useState(0);
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

  // 더 부드러운 slowScrollTo
  function slowScrollTo(targetY, duration = 1000, callback) {
    const startY = window.scrollY;
    const diff = targetY - startY;
    let start;

    function step(timestamp) {
      if (!start) start = timestamp;
      const time = timestamp - start;
      const percent = Math.min(time / duration, 1);
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
        const y = detailRef.current.getBoundingClientRect().top + window.scrollY - 100;
        slowScrollTo(y, 1000);
      }
    }, 100);
  };

  // 상세 닫기
  const handleCloseDetail = () => {
    setShowDetail(false); // 애니메이션 시작
    setTimeout(() => {
      if (headerRef.current) {
        const y = headerRef.current.getBoundingClientRect().top + window.scrollY - 80;
        slowScrollTo(y, 1000, () => {
          setIsDetailVisible(false); // 스크롤 끝난 후 DOM 제거
        });
      } else {
        setIsDetailVisible(false);
      }
    }, 300); // 300ms = transition duration과 맞춤
  };

  // 이미지 프리로딩
  useEffect(() => {
    solutions.forEach((solution) => {
      const img = new window.Image();
      img.src = solution.image;
    });
  }, []);

  return (
    <section id="solution" className="bg-white px-6 lg:px-12 py-24">
      <div className="flex flex-col items-center gap-20 relative bg-white overflow-hidden">
        {/* Header */}
        <div ref={headerRef} className="w-full flex justify-start mb-16">
          <h2 className="font-alata text-4xl sm:text-6xl lg:text-[75px] text-black tracking-[2px] leading-tight">
            Solution
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
              aria-label="Previous"
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
                            fontSize: '0.9rem',
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
              aria-label="Next"
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
                aria-label="닫기"
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