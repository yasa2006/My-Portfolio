import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Certifications.css';
import Header from './Header';
import Footer from './Footer';
import BackgroundAnimation from '../BackgroundAnimation';

function Certifications() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(theme + '-theme');
  }, [theme]);

  const certifications = [
    {
      title: "1st Place - Data Vedhi Workshop",
      event: "Data Vedhi",
      date: "October 2025",
      description: "Won first place in a prestigious data analytics workshop, demonstrating expertise in data visualization and statistical analysis."
    },
    {
      title: "Smart India Hackathon Participation",
      event: "Smart India Hackathon",
      date: "May 2025",
      description: "Participated in India's largest hackathon, collaborating with talented developers to solve real-world problems with innovative solutions."
    },
    {
      title: "Ganith Certification",
      event: "Ganith",
      date: "April 2025",
      description: "Specialized training in advanced mathematics and algorithmic problem-solving, enhancing computational skills and logical thinking."
    },
    {
      title: "Introduction to Generative AI",
      event: "Generative AI",
      date: "March 2026",
      description: "Comprehensive course on generative AI models, covering LLMs, prompt engineering, and practical applications of cutting-edge AI technology."
    }
  ];

  return (
    <div className="App">
      <div className="page-launch"></div>
      <Header />
      <div className="theme-toggle-container">
        <button onClick={toggleTheme} className="theme-toggle-button">
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
      <BackgroundAnimation />
      <main className="certifications-main">
        <section className="certifications-section fade-in">
          <h2>Certifications Gallery</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-content">
                  <h3>{cert.title}</h3>
                  <p className="cert-event">{cert.event}</p>
                  <p className="cert-description">{cert.description}</p>
                  <span className="cert-date">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="back-home">
            <Link to="/" className="back-button">Back to Home</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Certifications;