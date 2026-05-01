import {useState, useEffect} from 'react';
import backgroundImage from '../assets/background.webp';
import logoImage from '../assets/logo.png';
import characterImage from '../assets/character.webp';
import characterWhiteImage from '../assets/character-white.png';
import rightEyeImage from '../assets/right-eye.png';
import leftEyeImage from '../assets/left-eye.png';

const MAX_OFFSET = 5;

const BackgroundAnimation = () => {
  const [eyeOffset, setEyeOffset] = useState({x: 0, y: 0});

  useEffect(() => {
    let rafId = null;

    const handleMouseMove = (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const x = ((e.clientX - cx) / cx) * MAX_OFFSET;
        const y = ((e.clientY - cy) / cy) * (MAX_OFFSET / MAX_OFFSET);
        setEyeOffset({x, y});
        rafId = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const eyeStyle = {
    transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`,
    transition: 'transform 0.1s ease-out',
  };

  return (
    <div className="sm:-mb-28 relative w-full lg:h-[823px] h-[238px]" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="absolute">
        <img src={characterWhiteImage} className="block lg:w-auto lg:h-auto w-[317px] h-[238px]"/>
        <img src={characterImage} className="absolute top-0 left-0 lg:w-auto lg:h-auto w-[317px] h-[238px]"/>
        <img src={rightEyeImage} className="absolute" style={{left: '66.5%', top: '36.9%', width: '3.5%', height: '3.55%', ...eyeStyle}}/>
        <img src={leftEyeImage} className="absolute" style={{left: '52.8%', top: '37.5%', width: '3.87%', height: '4.18%', ...eyeStyle}}/>
      </div>
      <img src={logoImage} className="absolute lg:right-[83px] lg:bottom-[150px] right-[11px] bottom-[23px] logo-pulse w-[137px] h-[82px] md:w-auto md:h-auto"/>
    </div>
  );
};

export default BackgroundAnimation;
