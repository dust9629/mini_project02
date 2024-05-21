import React, { useState, useEffect } from "react";

function ImageGallery() {
  const imageNames = [
    "main_effect01.png",
    "main_effect02.png",
    "main_effect03.png",
    "main_effect04.png",
    "main_effect05.png",
    "main_effect06.png",
  ];
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    imageNames.forEach((name, index) => {
      // 랜덤 지연 시간 설정
      const baseDelay = 1000; // 기본 1초
      const randomFactor = Math.random() * 600; // 0초에서 0.6초 사이의 랜덤 값
      const delay = baseDelay + index * 1000 + randomFactor;

      setTimeout(() => {
        import(`../assets/images/${name}`)
          .then((image) => {
            setLoadedImages((prevImages) => {
              // 이미 로드된 이미지를 다시 로드하지 않도록 체크
              if (!prevImages.find((img) => img === image.default)) {
                return [...prevImages, image.default];
              }
              return prevImages;
            });
          })
          .catch((error) => console.error("Failed to load images", error));
      }, delay);
    });
  }, []); // 의존성 배열을 비워 컴포넌트 마운트 시 한 번만 실행되도록 함

  return (
    <div>
      {loadedImages.map((src, index) => (
        <img src={src} alt={`Effect ${index + 1}`} key={index} />
      ))}
    </div>
  );
}

export default ImageGallery;
