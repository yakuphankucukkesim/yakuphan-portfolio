import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { path: "/", label: language === "en" ? "home" : "ana sayfa" },
    { path: "/about", label: language === "en" ? "about" : "hakkımda" },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          yakuphan
        </Link>

        <div className="navbar-menu">
          <ul className="navbar-nav">
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? "active" : ""
                    }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <FiMoon /> : <FiSun />}
            </button>

            <div className="language-switcher">
              <button
                className={`lang-pill ${language === "tr" ? "active" : ""}`}
                onClick={() => setLanguage("tr")}
              >
                tr
              </button>
              <button
                className={`lang-pill ${language === "en" ? "active" : ""}`}
                onClick={() => setLanguage("en")}
              >
                en
              </button>
            </div>
          </div>
        </div>

        <div className="navbar-mobile-actions">
          <button
            className="theme-toggle mobile"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>
          <button
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar-mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ul className="navbar-mobile-nav">
              {navItems.map((item) => (
                <li key={item.path} className="nav-item">
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? "active" : ""
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="nav-item" style={{ marginTop: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button
                      className={`lang-pill ${language === "tr" ? "active" : ""}`}
                      onClick={() => {
                        setLanguage("tr");
                        setIsOpen(false);
                      }}
                    >
                      tr
                    </button>
                    <button
                      className={`lang-pill ${language === "en" ? "active" : ""}`}
                      onClick={() => {
                        setLanguage("en");
                        setIsOpen(false);
                      }}
                    >
                      en
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;
