import React, { useEffect, useRef } from "react";

function ScrollChangeSection({
  children,
  threshold,
  defaultBgClass = "norm_mode",
  changeBgClass = "dark_mode",
  onScrollChange,
}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (sectionRef.current) {
        const isAboveThreshold = position > threshold;
        if (isAboveThreshold) {
          sectionRef.current.classList.add(changeBgClass);
        } else {
          sectionRef.current.classList.remove(changeBgClass);
        }
        if (onScrollChange) {
          onScrollChange(isAboveThreshold); // 콜백 함수 호출
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, changeBgClass, onScrollChange]);

  return (
    <div ref={sectionRef} className={defaultBgClass}>
      {children}
    </div>
  );
}

export default ScrollChangeSection;
