"use client";
import { useState } from 'react';
import Image from 'next/image'; 
import './imageSlider.css';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="image-slider">
      <div className="slider-container">
        <div className="slider-arrow left" onClick={prevImage}>
          &#10094;
        </div>
        <div className="slider-image">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            width={746}
            height={500}
            priority
          />
        </div>
        <div className="slider-arrow right" onClick={nextImage}>
          &#10095;
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
