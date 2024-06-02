

// Hero.tsx
import React, { useState, useEffect } from "react";
import './Hero.css';
import img1 from './Hero-image/1.jpg';
import img2 from './Hero-image/2.jpg';
import img3 from './Hero-image/3.jpg';
import img4 from './Hero-image/4.jpg';
import img5 from './Hero-image/5.jpg';
import img6 from './Hero-image/6.jpg';
import img7 from './Hero-image/7.jpg';
import img8 from './Hero-image/8.jpg';
import img9 from './Hero-image/9.jpg';
import img10 from './Hero-image/10.jpg';
import img11 from './Hero-image/11.jpg';
import img12 from './Hero-image/12.jpg';
import img13 from './Hero-image/13.jpg';
import img14 from './Hero-image/14.jpg';

const imagePaths = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14
];

interface HeroProps {
  isFirstPage: boolean;
}

const Hero: React.FC<HeroProps> = ({ isFirstPage }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(Math.floor(Math.random() * imagePaths.length));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(Math.floor(Math.random() * imagePaths.length));
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`hero ${isFirstPage ? '' : 'hide-hero'}`} style={{ backgroundImage: `url(${imagePaths[currentImageIndex]})` }}>
    </div>
  );
}

export default Hero; 