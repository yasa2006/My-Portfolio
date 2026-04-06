import React, { useEffect, useState } from 'react';
import './BackgroundAnimation.css';

const BackgroundAnimation = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = [];
    const numParticles = 25; // You can adjust the number of particles

    for (let i = 0; i < numParticles; i++) {
      const size = Math.random() * 50 + 20; // size between 20px and 70px
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const animationDuration = Math.random() * 30 + 20; // duration between 20s and 50s
      const animationDelay = Math.random() * 20;
      const animationDirection = Math.random() < 0.5 ? 'normal' : 'reverse';

      newParticles.push({
        id: i,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          animationDuration: `${animationDuration}s`,
          animationDelay: `${animationDelay}s`,
          animationDirection: animationDirection,
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