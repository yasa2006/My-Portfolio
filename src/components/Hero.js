import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="Hero fade-in">
      <div className="Hero-content">
        <h1 className="slide-in-down">YASASWINI NAMANA</h1>
        <p className="subhead">Aspiring AI Engineer with a passion for developing innovative AI solutions. Proficient in machine learning, data structures, and web development.</p>
        <div className="cta-buttons">
          <a href="#projects" className="button primary slide-in-up hover-scale">Explore Projects</a>
          <a href="#contact" className="button secondary slide-in-up hover-scale">Connect with Me</a>
        </div>
        <div className="trust-bar">
          <span>Computer Science Engineering[AIML]</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
