import React, { useEffect, useState } from 'react';
import './Contact.css';
import resumeFile from '../Documents/YASASWINI RESUME.pdf';

function Contact() {
  const [resumeGlow, setResumeGlow] = useState(false);

  useEffect(() => {
    if (!resumeGlow) {
      return undefined;
    }

    const resetGlow = setTimeout(() => setResumeGlow(false), 900);
    return () => clearTimeout(resetGlow);
  }, [resumeGlow]);

  const handleResumeClick = (event) => {
    event.preventDefault();
    setResumeGlow(true);
    setTimeout(() => {
      window.open(resumeFile, '_blank', 'noopener,noreferrer');
    }, 180);
  };

  return (
    <section className="Contact fade-in">
      <div className="Contact-content">
        <h2 className="slide-in-left">Let's Build Something Great Together</h2>

        <p className="connect-subtext slide-in-up">Always looking for opportunities to collaborate on innovative AI solutions, Web Dev projects, or open-source initiatives. Let's connect!</p>

        <div className="social-cards slide-in-up">
          <div className="social-card linkedin">
            <i className="fab fa-linkedin"></i>
            <h3>LinkedIn</h3>
            <p>Professional Networking & AI Industry Updates</p>
            <a href="https://www.linkedin.com/in/yasaswini-namana/" target="_blank" rel="noopener noreferrer" className="cta-button">Connect</a>
          </div>
          <div className="social-card github">
            <i className="fab fa-github"></i>
            <h3>GitHub</h3>
            <p>Explore my repositories, open-source contributions, and AI experiments.</p>
            <a href="https://github.com/yasa2006" target="_blank" rel="noopener noreferrer" className="cta-button">Follow</a>
          </div>
          <div className="social-card instagram">
            <i className="fab fa-instagram"></i>
            <h3>Instagram</h3>
            <p>A glimpse into my life as a developer, tech events, and campus at VBIT.</p>
            <a href="https://www.instagram.com/yassu.2909?igsh=MXEwYjdmMmV6aHdnbw==" target="_blank" rel="noopener noreferrer" className="cta-button">Follow</a>
          </div>
        </div>

        <div className="quick-contact slide-in-up">
          <div className="contact-item email-item">
            <i className="fas fa-envelope"></i>
            <span>yasaswininamana@gmail.com</span>
          </div>
          <a
            className={`contact-item resume-item${resumeGlow ? ' resume-glow' : ''}`}
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleResumeClick}
          >
            <i className="fas fa-file-alt"></i>
            <span>RESUME</span>
          </a>
          <div className="contact-item phone-item">
            <i className="fas fa-phone"></i>
            <span>+91 83415 53322</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
