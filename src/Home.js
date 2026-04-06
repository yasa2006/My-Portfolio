import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Education from './components/Education';
import BackgroundAnimation from './BackgroundAnimation';

function Home() {
  const [theme, setTheme] = useState('dark');
  const [showLaunch, setShowLaunch] = useState(true);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(theme + '-theme');
  }, [theme]);

  useEffect(() => {
    const timeout = setTimeout(() => setShowLaunch(false), 2400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      {showLaunch && <div className="page-launch"></div>}
      <Header />
      <div className="theme-toggle-container">
        <button onClick={toggleTheme} className="theme-toggle-button">
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
      <BackgroundAnimation />
      <main>
        <section id="hero" className="fade-in"><Hero /></section>
        <section id="about" className="fade-in"><About /></section>
        <section id="skills" className="fade-in"><Skills /></section>
        <section id="education" className="fade-in"><Education /></section>
        <section id="experience" className="fade-in"><Experience /></section>
        <section id="projects" className="fade-in"><Projects /></section>
        <section id="contact" className="fade-in"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;