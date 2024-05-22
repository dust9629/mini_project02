import React, { useEffect, useRef } from "react";

function ScrollChangeSection({
  children,
  threshold,
  defaultBgClass = "norm_mode", // 기본 배경색 클래스
  changeBgClass = "dark_mode", // 변경될 배경색 클래스
}) {
  const sectionRef = useRef(null); // DOM 참조를 저장

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (sectionRef.current) {
        if (position > threshold) {
          sectionRef.current.classList.add(changeBgClass);
        } else {
          sectionRef.current.classList.remove(changeBgClass);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, changeBgClass]);

  return (
    <div ref={sectionRef} className={defaultBgClass}>
      {children}
    </div>
  );
}

export default ScrollChangeSection;
