import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import './Home.css';

const translations = {
  en: {
    heroTitle: <>Hello, I am <span className="highlight">Yakuphan Küçükkesim</span></>,
    heroSubtitle: "Full Stack Developer & Software Developer",
    heroDescription:
      "I develop user-friendly and innovative applications using modern web technologies. With React, Node.js, and MongoDB, I build powerful solutions, while also gaining experience in mobile development, data analysis, and backend systems.",
    projectsBtn: "Projects",
    cvBtn: "CV",
    contactBtn: "Contact",
    profileRole: "Software Developer",
    featuresTitle: "What I Do",
    features: [
      {
        icon: "🚀",
        title: "Web Development",
        desc: "I develop modern and responsive web applications."
      },
      {
        icon: "📱",
        title: "Mobile Applications",
        desc: "Cross-platform mobile applications for access anywhere."
      },
      {
        icon: "⚡",
        title: "API Development",
        desc: "I design fast and secure REST APIs."
      }
    ]
  },
  tr: {
    heroTitle: <>Merhaba, Ben <span className="highlight">Yakuphan Küçükkesim</span></>,
    heroSubtitle: "Full Stack Developer & Yazılım Geliştirici",
    heroDescription:
      "Kullanıcı dostu ve yenilikçi uygulamalar geliştiriyorum. Modern web teknolojileriyle (React, Node.js, MongoDB) güçlü çözümler üretiyor, ayrıca mobil geliştirme, veri analizi ve backend sistemlerinde de deneyim kazanıyorum.",
    projectsBtn: "Projeler",
    cvBtn: "CV",
    contactBtn: "İletişim",
    profileRole: "Yazılım Geliştirici",
    featuresTitle: "Neler Yapıyorum",
    features: [
      {
        icon: "🚀",
        title: "Web Geliştirme",
        desc: "Modern ve duyarlı web uygulamaları geliştiriyorum."
      },
      {
        icon: "📱",
        title: "Mobil Uygulamalar",
        desc: "Her yerden erişim için çapraz platform mobil uygulamalar."
      },
      {
        icon: "⚡",
        title: "API Geliştirme",
        desc: "Hızlı ve güvenli REST API'ler tasarlıyorum."
      }
    ]
  }
};

const Home: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const handleCVDownload = () => {
    window.open('/cv.pdf', '_blank');
  };

  return (
    <div className="home">
      <div className="container">
        <div className="hero-section">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">{t.heroTitle}</h1>
            <p className="hero-subtitle">{t.heroSubtitle}</p>
            <p className="hero-description">{t.heroDescription}</p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                {t.projectsBtn}
              </Link>
              <button onClick={handleCVDownload} className="btn btn-secondary">
                <FiDownload /> {t.cvBtn}
              </button>
              <Link to="/contact" className="btn btn-secondary">
                {t.contactBtn}
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="profile-card">
              <div className="avatar-section">
                <div className="avatar">
                  <div className="avatar-placeholder">YK</div>
                </div>
              </div>
              <div className="profile-info">
                <h3>Yakuphan Küçükkesim</h3>
                <p>{t.profileRole}</p>
                <div className="social-links">
                  <a href="https://github.com/yakuphankucukkesim" target="_blank" rel="noopener noreferrer">
                    <FiGithub />
                  </a>
                  <a href="https://linkedin.com/in/yakuphan" target="_blank" rel="noopener noreferrer">
                    <FiLinkedin />
                  </a>
                  <a href="mailto:yakuphann@icloud.com">
                    <FiMail />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="features-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="section-title">{t.featuresTitle}</h2>
          <div className="features-grid">
            {t.features.map((feature, idx) => (
              <div className="feature-card" key={idx}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;