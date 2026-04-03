import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import "./About.css";

const translations = {
  en: {
    experiencesTitle: "experiences",
    experiences: [
      {
        title: "full-stack developer intern",
        company: "huawei",
        period: "jan 2024 - may 2024",
        description:
          "developed a full-stack e-commerce web application using react.js, nest.js, and mongodb.",
      },
      {
        title: "full-stack developer intern",
        company: "huawei",
        period: "aug 2023 (1 month)",
        description:
          "developed a cross-platform note-taking mobile application using react native, node.js, and mongodb.",
      },
    ],
    educationTitle: "education",
    education: [
      {
        degree: "b.sc. in information systems and technologies",
        school: "bilkent university",
        location: "ankara, türkiye",
        period: "2019 - 2025",
        description:
          "object-oriented programming, data structures and algorithms, computer networks (cisco ccna), web technologies, database management systems, operating systems, software engineering, mobile application development, network security.",
      },
    ],
  },
  tr: {
    experiencesTitle: "deneyimler",
    experiences: [
      {
        title: "full-stack developer stajyeri",
        company: "huawei",
        period: "ocak 2024 - mayıs 2024",
        description:
          "react.js, nest.js ve mongodb kullanarak tam kapsamlı bir e-ticaret web uygulaması geliştirdim.",
      },
      {
        title: "full-stack developer stajyeri",
        company: "huawei",
        period: "ağustos 2023 (1 ay)",
        description:
          "react native, node.js ve mongodb kullanarak çapraz platform bir not alma mobil uygulaması geliştirdim.",
      },
    ],
    educationTitle: "eğitim",
    education: [
      {
        degree: "bilgisayar teknolojileri ve bilişim sistemleri lisans derecesi",
        school: "bilkent üniversitesi",
        location: "ankara, türkiye",
        period: "2019 - 2025",
        description:
          "nesne yönelimli programlama, veri yapıları ve algoritmalar, bilgisayar ağları (cisco ccna), web teknolojileri, veritabanı yönetim sistemleri, işletim sistemleri, yazılım mühendisliği, mobil uygulama geliştirme, ağ güvenliği.",
      },
    ],
  },
};

const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="about">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="experience-section">
            <h2 className="section-title">{t.experiencesTitle}</h2>
            <div className="timeline">
              {t.experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-content">
                    <h3 className="timeline-company">{exp.title} - {exp.company}</h3>
                    <p className="timeline-period">{exp.period}</p>
                    <p className="timeline-description">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="education-section">
            <h2 className="section-title">{t.educationTitle}</h2>
            <div className="education-grid">
              {t.education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="education-card"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="education-school">{edu.school}</h3>
                  <p className="education-degree">{edu.degree}</p>
                  <p className="education-period">{edu.period} | {edu.location}</p>
                  <p className="education-description">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export { About };
