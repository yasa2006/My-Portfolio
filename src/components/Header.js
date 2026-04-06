import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header slide-in-down">
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#hero" className="hover-scale">YASASWINI</a></li>
          <li><a href="#about" className="hover-scale">ABOUT</a></li>
          <li><a href="#skills" className="hover-scale">SKILLS</a></li>
          <li><a href="#projects" className="hover-scale">PROJECTS</a></li>
          <li><Link to="/certifications" className="hover-scale">CERTIFICATIONS</Link></li>
          <li><a href="#contact" className="hover-scale">CONNECT</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;