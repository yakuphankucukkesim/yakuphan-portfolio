import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Footer.css';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  en: {
    name: "Yakuphan Küçükkesim",
    role: "Software Developer",
    domain: "yakuphankucukkesim.com",
    links: "Links",
    homepage: "Homepage",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    contactTitle: "Contact",
    email: "yakuphann@icloud.com",
    social: "Social Media",
    copyright: "All rights reserved."
  },
  tr: {
    name: "Yakuphan Küçükkesim",
    role: "Yazılım Geliştirici",
    domain: "yakuphankucukkesim.com",
    links: "Bağlantılar",
    homepage: "Anasayfa",
    about: "Hakkımda",
    projects: "Projeler",
    contact: "İletişim",
    contactTitle: "İletişim",
    email: "yakuphann@icloud.com",
    social: "Sosyal Medya",
    copyright: "Tüm hakları saklıdır."
  }
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = translations[language];

  const socialLinks = [
    {
      icon: <FiGithub />,
      url: 'https://github.com/yakuphankucukkesim',
      label: 'GitHub'
    },
    {
      icon: <FiLinkedin />,
      url: 'https://linkedin.com/in/yakuphan',
      label: 'LinkedIn'
    },
    {
      icon: <FiMail />,
      url: 'mailto:yakuphann@icloud.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="footer-title">{t.name}</h3>
            <p className="footer-description">{t.role}</p>
            <p className="footer-domain">{t.domain}</p>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="footer-subtitle">{t.links}</h4>
            <ul className="footer-links">
              <li><a href="/">{t.homepage}</a></li>
              <li><a href="/about">{t.about}</a></li>
              <li><a href="/projects">{t.projects}</a></li>
              <li><a href="/contact">{t.contact}</a></li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="footer-subtitle">{t.contactTitle}</h4>
            <div className="footer-contact">
              <p>{t.email}</p>
            </div>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="footer-subtitle">{t.social}</h4>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  {social.icon}
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Yakuphan Küçükkesim. {t.copyright}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;