import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const { pathname } = useLocation();
  const homePrefix = pathname === '/certifications' ? '/' : '';

  return (
    <header className="header slide-in-down">
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href={`${homePrefix}#hero`} className="hover-scale">YASASWINI</a></li>
          <li><a href={`${homePrefix}#about`} className="hover-scale">ABOUT</a></li>
          <li><a href={`${homePrefix}#skills`} className="hover-scale">SKILLS</a></li>
          <li><a href={`${homePrefix}#projects`} className="hover-scale">PROJECTS</a></li>
          <li><a href={`${homePrefix}#contact`} className="hover-scale">CONNECT</a></li>
          <li><a href="/certifications" className="hover-scale">CERTIFICATIONS</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;