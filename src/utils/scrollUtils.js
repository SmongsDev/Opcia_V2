// src/utils/scrollUtils.js

/**
 * 부드러운 스크롤 함수
 * @param {string} sectionId - 스크롤할 섹션의 ID
 * @param {number} offset - 스크롤 오프셋 (기본값: 0)
 */
export const smoothScrollTo = (sectionId, offset = 0) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const targetPosition = element.offsetTop - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * 현재 화면에 보이는 섹션 감지
 * @param {Array} sections - 섹션 ID 배열
 * @param {number} offset - 감지 오프셋
 * @returns {string} 현재 활성 섹션 ID
 */
export const getCurrentSection = (sections, offset = 100) => {
  const scrollPosition = window.scrollY + offset;
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const element = document.getElementById(sections[i]);
    if (element && element.offsetTop <= scrollPosition) {
      return sections[i];
    }
  }
  
  return sections[0];
};

/**
 * 스크롤 위치를 퍼센테이지로 반환
 * @returns {number} 스크롤 진행률 (0-100)
 */
export const getScrollProgress = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  return (scrollTop / scrollHeight) * 100;
};