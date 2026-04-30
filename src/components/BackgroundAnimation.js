import {useState, useEffect} from 'react';
import backgroundImage from '../assets/background.png';
import logoImage from '../assets/logo.png';
import characterImage from '../assets/character.png';
import characterWhiteImage from '../assets/character-white.png';
import rightEyeImage from '../assets/right-eye.png';
import leftEyeImage from '../assets/left-eye.png';

const MAX_OFFSET = 5;

const BackgroundAnimation = () => {
  const [eyeOffset, setEyeOffset] = useState({x: 0, y: 0});

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const x = ((e.clientX - cx) / cx) * MAX_OFFSET;
      const y = ((e.clientY - cy) / cy) * (MAX_OFFSET / MAX_OFFSET);
      setEyeOffset({x, y});
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const eyeStyle = {
    transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`,
    transition: 'transform 0.1s ease-out',
  };

  return (
    <div className="sm:-mb-28 relative w-full md:h-[823px] h-[238px]" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <img src={characterWhiteImage} className="absolute md:w-auto md:h-auto w-[317px] h-[238px]"/>
      <img src={characterImage} className="absolute md:w-auto md:h-auto w-[317px] h-[238px]"/>
      <img src={rightEyeImage} className="absolute sm:left-[729.76px] sm:top-[303.04px] md:w-auto md:h-auto left-[212.22px] top-[87.31px] w-[9.77px] h-[7.1px]" style={eyeStyle}/>
      <img src={leftEyeImage} className="absolute sm:left-[582.04px] sm:top-[307.82px] md:w-auto md:h-auto left-[166px] top-[88px] w-[12.28px] h-[9.95px]" style={eyeStyle}/>
      <img src={logoImage} className="absolute sm:right-[83px] sm:bottom-[150px] right-[11px] bottom-[23px] logo-pulse w-[137px] h-[82px] md:w-auto md:h-auto"/>
    </div>
  );
};

export default BackgroundAnimation;
