import React, { useEffect, useState } from 'react';
import './BackgroundAnimation.css';

const BackgroundAnimation = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = [];
    const numParticles = 18;

    for (let i = 0; i < numParticles; i++) {
      const size = Math.random() * 12 + 10;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const animationDuration = Math.random() * 8 + 14;
      const animationDelay = Math.random() * 10;
      const horizontalOffset = Math.random() * 80 - 40;
      const verticalOffset = Math.random() * 60 - 30;
      const secondaryOffsetX = Math.random() * 100 - 50;
      const secondaryOffsetY = Math.random() * 80 - 40;

      newParticles.push({
        id: i,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          animationDuration: `${animationDuration}s`,
          animationDelay: `${animationDelay}s`,
          '--dx1': `${horizontalOffset}px`,
          '--dy1': `${verticalOffset}px`,
          '--dx2': `${secondaryOffsetX}px`,
          '--dy2': `${secondaryOffsetY}px`,
        },
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="animation-wrapper">
      {particles.map((p) => (
        <div key={p.id} className="particle" style={p.style}></div>
      ))}
    </div>
  );
};

export default BackgroundAnimation;