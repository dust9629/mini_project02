import React, { useState, useEffect } from "react";

function TimeDisplay() {
  const [currentTime, setCurrentTime] = useState("");

  const updateTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const milliseconds = String(now.getMilliseconds()).padStart(3, "0");
    const timeString = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    setCurrentTime(timeString);
  };

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100); // 100ms 마다 시간 업데이트
    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 제거
  }, []);

  return <div className="time_txt">{currentTime}</div>;
}

export default TimeDisplay;
