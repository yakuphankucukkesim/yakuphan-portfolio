import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
// Reduced imports; icons not needed after simplification
import { useLanguage } from '../contexts/LanguageContext';
import './About.css';

const translations = {
  en: {
    pageTitle: "About me",
    pageDescription: "Detailed information about my software development passion and experience",
    // Intro text removed to simplify page per new design
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
    // Intro text removed to simplify page per new design
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
  const reduceMotion = useReducedMotion();

  // No personal card / CV button in minimal layout

  return (
    <div className="about">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* About hero and skills removed per request */}

        {/* Deneyim */}
        <motion.div
          className="experience-section"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <h2 className="section-title">{t.experiencesTitle}</h2>
          <div className="timeline">
            {t.experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={reduceMotion ? false : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.45 }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <div className="timeline-content">
                  <h3 className="timeline-company">{exp.title}</h3>
                  <p className="timeline-company">{exp.company}</p>
                  <p className="timeline-period">{exp.period}</p>
                  <p className="timeline-description">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <hr className="divider" />
        {/* Eğitim */}
        <motion.div
          className="education-section"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
          viewport={{ once: true, margin: '-50px' }}
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
                <h3 className="education-school">{edu.school}</h3>
                <p className="education-degree">{edu.degree}</p>
                <p className="education-location">{edu.location}</p>
                <p className="education-period">{edu.period}</p>
                <p className="education-description">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="page-bottom-spacer" />
        </motion.div>
      </div>
    </div>
  );
};
export { About };