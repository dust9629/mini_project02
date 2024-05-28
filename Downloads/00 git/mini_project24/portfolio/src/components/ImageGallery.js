import React, { useState, useEffect } from "react";

function ImageGallery() {
  const imageNames = [
    "main_effect00.png",
    "main_effect01.png",
    "main_effect02.png",
    "main_effect03.png",
    "main_effect04.png",
    "main_effect05.png",
  ];

  const [loadedImages, setLoadedImages] = useState([]);
  const [loadingIndex, setLoadingIndex] = useState(0); // 현재 로딩 중인 이미지 인덱스

  // 이미지를 순차적으로 로드하는 useEffect
  useEffect(() => {
    if (
      loadedImages.length < imageNames.length &&
      loadingIndex < imageNames.length
    ) {
      // 로드 간격 감소 (이미지마다 지연 시간을 200ms로 설정)
      const initialDelay = 100 * loadingIndex;
      setTimeout(() => {
        import(`../assets/images/${imageNames[loadingIndex]}`)
          .then((image) => {
            setLoadedImages((prevImages) => [...prevImages, image.default]);
            setLoadingIndex((prevIndex) => prevIndex + 1);
          })
          .catch((error) => console.error("Failed to load images", error));
      }, initialDelay);
    }
  }, [loadingIndex, loadedImages.length]);

  // 모든 이미지가 로드된 후에 이미지를 순차적으로 비우는 useEffect
  useEffect(() => {
    if (loadedImages.length === imageNames.length) {
      let clearIndex = 0;

      const clearDelay = 100;
      const clearTimer = setInterval(() => {
        if (clearIndex < loadedImages.length) {
          setLoadedImages((prevImages) =>
            prevImages.slice(0, prevImages.length - 1)
          );
          clearIndex++;
        } else {
          clearInterval(clearTimer);
          setLoadingIndex(0);
        }
      }, clearDelay - 100 * clearIndex);
    }
  }, [loadedImages.length]);

  return (
    <div className="ImgCont">
      {loadedImages.map((src, index) => (
        <img src={src} alt={`Effect ${index}`} key={index} />
      ))}
    </div>
  );
}

export default ImageGallery;
