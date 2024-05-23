import React, { useState, useEffect } from "react";

function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: `${position.x - 7.5}px`, // 중심으로 오도록 조정
        top: `${position.y - 7.5}px`,
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        background: "#ff4500",
        pointerEvents: "none", // 클릭 불가능하도록 설정
        zIndex: 99999, // 다른 요소들 위에 오도록 설정
        transition: "left 0.05s linear, top 0.05s linear",
      }}
    />
  );
}

export default CursorFollower;
