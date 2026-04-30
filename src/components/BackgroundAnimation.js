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
    <div className="-mb-28 relative" style={{width: '100%', height: '823px', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <img src={characterWhiteImage} className="absolute"/>
      <img src={characterImage} className="absolute"/>
      <img src={rightEyeImage} className="absolute left-[729.76px] top-[303.04px]" style={eyeStyle}/>
      <img src={leftEyeImage} className="absolute left-[582.04px] top-[307.82px]" style={eyeStyle}/>
      <img src={logoImage} className="absolute right-[83px] bottom-[150px] logo-pulse"/>
    </div>
  );
};

export default BackgroundAnimation;
