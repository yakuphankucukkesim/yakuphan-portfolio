import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const translations = {
  en: {
    homepage: 'Homepage',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact'
  },
  tr: {
    homepage: 'Anasayfa',
    about: 'Hakkımda',
    projects: 'Projeler',
    contact: 'İletişim'
  }
};

const Navbar: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const t = translations[language];

  const navItems = [
    { path: '/', label: t.homepage },
    { path: '/about', label: t.about },
    { path: '/projects', label: t.projects },
    { path: '/contact', label: t.contact },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Yakuphan Küçükkesim
          </motion.div>
        </Link>

        <div className="navbar-menu">
          <ul className="navbar-nav">
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Dil seçici */}
          <div className="language-switcher">
            <button
              onClick={() => setLanguage('en')}
              className={`lang-btn${language === 'en' ? ' active' : ''}`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('tr')}
              className={`lang-btn${language === 'tr' ? ' active' : ''}`}
              aria-label="Switch to Turkish"
            >
              TR
            </button>
          </div>
        </div>

        <button className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <motion.div
          className={`navbar-mobile ${isOpen ? 'open' : ''}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="navbar-mobile-nav">
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {/* Mobilde de dil seçici */}
            <li style={{ marginTop: 12, display: 'flex', gap: 8, justifyContent: 'center' }}>
              <button
                onClick={() => setLanguage('en')}
                className={`lang-btn${language === 'en' ? ' active' : ''}`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('tr')}
                className={`lang-btn${language === 'tr' ? ' active' : ''}`}
                aria-label="Switch to Turkish"
              >
                TR
              </button>
            </li>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;