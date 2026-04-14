import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Certifications.css';
import Header from './Header';
import Footer from './Footer';
import BackgroundAnimation from '../BackgroundAnimation';
import googleCloudCertificate from '../Image/google cloud certificate.jpg';
import dataVedhiCertificate from '../Image/doc00072120260409212040_page-0001.jpg';
import sihCertificate from '../Image/SIH_Certificate.png';
import aiCertificate from '../Image/Yasaswini_Namana_1765.jpg';

function Certifications() {
  const [theme, setTheme] = useState('dark');
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(theme + '-theme');
  }, [theme]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const certifications = [
    {
      title: "Smart India Hackathon Participation",
      event: "Smart India Hackathon",
      date: "20 September 2025",
      description: "Participated in India's largest hackathon, collaborating with talented developers to solve real-world problems with innovative solutions.",
      image: sihCertificate
    },
    {
      title: "Introduction to Generative AI",
      event: "Generative AI",
      date: "20 October 2025",
      description: "Comprehensive course on generative AI models, covering LLMs, prompt engineering, and practical applications of cutting-edge AI technology.",
      image: googleCloudCertificate
    },
    {
      title: "1st Place - Data Vedhi Workshop",
      event: "Data Vedhi",
      date: "25 October 2025",
      description: "Won first place in a prestigious data analytics workshop, demonstrating expertise in data visualization and statistical analysis.",
      image: dataVedhiCertificate
    },
    {
      title: "Artificial Intelligence Certificate",
      event: "Artificial Intelligence",
      date: "06 December 2025",
      description: "Certificate in artificial intelligence covering foundational AI concepts and practical understanding of intelligent systems.",
      image: aiCertificate
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
                {cert.image && (
                  <button
                    type="button"
                    className="cert-image-button"
                    onClick={() => setSelectedCertificate({ title: cert.title, image: cert.image })}
                    aria-label={`Open ${cert.title} certificate image`}
                  >
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      className="cert-image"
                    />
                  </button>
                )}
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

      {selectedCertificate && (
        <div
          className="cert-modal-overlay"
          onClick={() => setSelectedCertificate(null)}
          role="presentation"
        >
          <div
            className="cert-modal-content"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={selectedCertificate.title}
          >
            <button
              type="button"
              className="cert-modal-close"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close certificate preview"
            >
              x
            </button>
            <img
              src={selectedCertificate.image}
              alt={`${selectedCertificate.title} full certificate`}
              className="cert-modal-image"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Certifications;