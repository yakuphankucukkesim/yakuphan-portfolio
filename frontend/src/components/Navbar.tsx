import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

const translations = {
  en: {
    homepage: "Homepage",
    about: "About",
  },
  tr: {
    homepage: "Anasayfa",
    about: "Hakkımda",
  },
};

const Navbar: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const t = translations[language];

  const navItems = [
    { path: "/", label: t.homepage },
    { path: "/about", label: t.about },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand" />

        <div className="navbar-menu">
          <ul className="navbar-nav">
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="language-switcher">
            <button
              onClick={() => setLanguage("en")}
              className={`lang-pill${language === "en" ? " active" : ""}`}
              aria-label="Switch to English"
            >
              <span className="flag">🇬🇧</span>
              <span className="lang-text">English</span>
            </button>
            <button
              onClick={() => setLanguage("tr")}
              className={`lang-pill${language === "tr" ? " active" : ""}`}
              aria-label="Switch to Turkish"
            >
              <span className="flag">🇹🇷</span>
              <span className="lang-text">Türkçe</span>
            </button>
          </div>
        </div>

        <button className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <motion.div
          className={`navbar-mobile ${isOpen ? "open" : ""}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="navbar-mobile-nav">
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li
              style={{
                marginTop: 12,
                display: "flex",
                gap: 8,
                justifyContent: "center",
              }}
            >
              <button
                onClick={() => setLanguage("en")}
                className={`lang-btn${language === "en" ? " active" : ""}`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("tr")}
                className={`lang-btn${language === "tr" ? " active" : ""}`}
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
