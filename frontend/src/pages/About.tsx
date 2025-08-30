import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiMapPin, FiUser } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import './About.css';

const translations = {
  en: {
    pageTitle: "About me",
    pageDescription: "Detailed information about my software development passion and experience",
    hello: "Hello!",
    aboutText: [
      "I’m Yakuphan Küçükkesim, a passionate developer with experience in creating innovative and user-friendly web and mobile applications. I enjoy building projects that combine modern technologies with practical solutions.",
      "While I mainly work with React, Node.js, and MongoDB, I also have experience in mobile app development, data analysis, and backend systems. I focus on learning continuously and applying best practices to write clean, maintainable, and scalable code in every project.",
      "I value collaboration and enjoy contributing to team projects. By leveraging Agile methodologies, I aim to deliver solutions that effectively meet user needs while exploring new technologies and approaches."
    ],
    skillsTitle: "Skills",
    skills: [
      { category: "Programming Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "PHP"] },
      { category: "Frontend Development", items: ["React.js", "React Native", "HTML5", "CSS3", "Sass/SCSS"] },
      { category: "Backend Development", items: ["Node.js", "Next.js", "Nest.js"] },
      { category: "Database & ORM", items: ["MongoDB", "PostgreSQL", "MySQL", "Mongoose"] },
      { category: "Mobile Development", items: ["React Native", "Ionic", "Progressive Web Apps"] },
      { category: "DevOps & Cloud", items: ["Docker", "AWS", "Azure", "Google Cloud", "GitLab CI"] },
      { category: "Tools & Platforms", items: ["Git", "VS Code", "Postman", "Figma", "Slack", "Teams"] }
    ],
    experiencesTitle: "Experiences",
    experiences: [
      {
        title: "Full-Stack Developer Intern",
        company: "Huawei",
        period: "Jan 2024 - May 2024",
        description: "Developed a full-stack e-commerce web application using React.js, Nest.js, and MongoDB."
      },
      {
        title: "Full-Stack Developer Intern",
        company: "Huawei",
        period: "Aug 2023 - Aug 2023",
        description: "Developed a cross-platform note-taking mobile application using React Native, Node.js, and MongoDB."
      }
    ],
    educationTitle: "Education",
    education: [
      {
        degree: "B.Sc. in Information Systems and Technologies",
        school: "Bilkent University",
        location: "Ankara, Turkey",
        period: "2019 - 2025",
        description: "Object-Oriented Programming, Data Structures and Algorithms, Computer Networks (Cisco CCNA), Web Technologies, Database Management Systems, Operating Systems, Software Engineering, Mobile Application Development, Network Security"
      }
    ],
    languagesTitle: "Languages",
    turkish: "Turkish",
    turkishLevel: "Native",
    english: "English",
    englishLevel: "Full Professional",
    downloadCV: "Download CV"
  },
  tr: {
    pageTitle: "Hakkımda",
    pageDescription: "Yazılım geliştirme tutkum ve deneyimlerim hakkında detaylı bilgi",
    hello: "Merhaba!",
    aboutText: [
      "Ben Yakuphan Küçükkesim, yenilikçi ve kullanıcı dostu web ve mobil uygulamalar geliştirme konusunda deneyimli, tutkulu bir geliştiriciyim. Modern teknolojilerle pratik çözümler üreten projeler geliştirmekten keyif alıyorum.",
      "Çoğunlukla React, Node.js ve MongoDB ile çalışıyorum; ayrıca mobil uygulama geliştirme, veri analizi ve backend sistemlerinde de deneyimim var. Her projede temiz, sürdürülebilir ve ölçeklenebilir kod yazmak için en iyi uygulamaları kullanmaya ve sürekli öğrenmeye odaklanıyorum.",
      "Takım çalışmasına değer veriyor ve ekip projelerine katkı sağlamaktan hoşlanıyorum. Agile metodolojileriyle kullanıcı ihtiyaçlarını karşılayan çözümler sunmayı ve yeni teknolojileri keşfetmeyi hedefliyorum."
    ],
    skillsTitle: "Yetenekler",
    skills: [
      { category: "Programlama Dilleri", items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "PHP"] },
      { category: "Frontend Geliştirme", items: ["React.js", "React Native", "HTML5", "CSS3", "Sass/SCSS"] },
      { category: "Backend Geliştirme", items: ["Node.js", "Next.js", "Nest.js"] },
      { category: "Veritabanı & ORM", items: ["MongoDB", "PostgreSQL", "MySQL", "Mongoose"] },
      { category: "Mobil Geliştirme", items: ["React Native", "Ionic", "Progressive Web Apps"] },
      { category: "DevOps & Bulut", items: ["Docker", "AWS", "Azure", "Google Cloud", "GitLab CI"] },
      { category: "Araçlar & Platformlar", items: ["Git", "VS Code", "Postman", "Figma", "Slack", "Teams"] }
    ],
    experiencesTitle: "Deneyimler",
    experiences: [
      {
        title: "Full-Stack Developer Stajyeri",
        company: "Huawei",
        period: "Ocak 2024 - Mayıs 2024",
        description: "React.js, Nest.js ve MongoDB kullanarak tam kapsamlı bir e-ticaret web uygulaması geliştirdim."
      },
      {
        title: "Full-Stack Developer Stajyeri",
        company: "Huawei",
        period: "Ağustos 2023 - Ağustos 2023",
        description: "React Native, Node.js ve MongoDB kullanarak çapraz platform bir not alma mobil uygulaması geliştirdim."
      }
    ],
    educationTitle: "Eğitim",
    education: [
      {
        degree: "Bilgisayar Teknolojileri ve Bilişim Sistemleri Lisans",
        school: "Bilkent Üniversitesi",
        location: "Ankara, Türkiye",
        period: "2019 - 2025",
        description: "Nesne Yönelimli Programlama, Veri Yapıları ve Algoritmalar, Bilgisayar Ağları (Cisco CCNA), Web Teknolojileri, Veritabanı Yönetim Sistemleri, İşletim Sistemleri, Yazılım Mühendisliği, Mobil Uygulama Geliştirme, Ağ Güvenliği"
      }
    ],
    languagesTitle: "Diller",
    turkish: "Türkçe",
    turkishLevel: "Ana Dil",
    english: "İngilizce",
    englishLevel: "İleri Seviye",
    downloadCV: "CV İndir"
  }
};

const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const handleCVDownload = () => {
    window.open('/cv.pdf', '_blank');
  };

  return (
    <div className="about">
      <div className="container">
        <motion.div
          className="page-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">{t.pageTitle}</h1>
          <p className="page-description">{t.pageDescription}</p>
        </motion.div>

        <div className="about-content">
          {/* Kişisel Bilgiler */}
          <motion.div
            className="personal-info-section"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="personal-card">
              <div className="avatar-section">
                <div className="avatar">
                  <div className="avatar-placeholder">YK</div>
                </div>
                <button onClick={handleCVDownload} className="cv-button">
                  <FiDownload /> {t.downloadCV}
                </button>
              </div>
              
              <div className="info-details">
                <div className="info-item">
                  <FiUser className="info-icon" />
                  <span>Yakuphan Küçükkesim</span>
                </div>
                <div className="info-item">
                  <FiMapPin className="info-icon" />
                  <span>İzmir, Turkey</span>
                </div>
                <div className="info-item">
                  <FiMail className="info-icon" />
                  <span>yakuphann@icloud.com</span>
                </div>
              </div>

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
          </motion.div>

          {/* Hakkımda Metni */}
          <motion.div
            className="about-text-section"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2>{t.hello} <span className="wave-emoji">✋</span></h2>
            {t.aboutText.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </motion.div>
        </div>

        {/* Yetenekler */}
        <motion.div
          className="skills-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="section-title">{t.skillsTitle}</h2>
          <div className="skills-grid">
            {t.skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                className="skill-category"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <h3 className="skill-category-title">{skillGroup.category}</h3>
                <div className="skill-items">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Deneyim */}
        <motion.div
          className="experience-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="section-title">{t.experiencesTitle}</h2>
          <div className="timeline">
            {t.experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
              >
                <div className="timeline-content">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <p className="timeline-company">{exp.company}</p>
                  <p className="timeline-period">{exp.period}</p>
                  <p className="timeline-description">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Eğitim */}
        <motion.div
          className="education-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h2 className="section-title">{t.educationTitle}</h2>
          <div className="education-grid">
            {t.education.map((edu, index) => (
              <motion.div
                key={index}
                className="education-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              >
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-school">{edu.school}</p>
                <p className="education-location">{edu.location}</p>
                <p className="education-period">{edu.period}</p>
                <p className="education-description">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Dil Yetenekleri */}
        <motion.div
          className="language-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <h2 className="section-title">{t.languagesTitle}</h2>
          <div className="language-grid">
            <motion.div
              className="language-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <h3 className="language-name">{t.turkish}</h3>
              <p className="language-level">{t.turkishLevel}</p>
            </motion.div>
            <motion.div
              className="language-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.0 }}
            >
              <h3 className="language-name">{t.english}</h3>
              <p className="language-level">{t.englishLevel}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export { About };