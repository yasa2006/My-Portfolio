import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const { pathname } = useLocation();
  const homePrefix = pathname === '/certifications' ? '/' : '';
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header slide-in-down">
      <nav className="navbar" aria-label="Primary">
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href={`${homePrefix}#hero`} className="hover-scale" onClick={closeMenu}>YASASWINI</a></li>
          <li><a href={`${homePrefix}#about`} className="hover-scale" onClick={closeMenu}>ABOUT</a></li>
          <li><a href={`${homePrefix}#skills`} className="hover-scale" onClick={closeMenu}>SKILLS</a></li>
          <li><a href={`${homePrefix}#projects`} className="hover-scale" onClick={closeMenu}>PROJECTS</a></li>
          <li><a href={`${homePrefix}#contact`} className="hover-scale" onClick={closeMenu}>CONNECT</a></li>
          <li><a href="/certifications" className="hover-scale" onClick={closeMenu}>CERTIFICATIONS</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;