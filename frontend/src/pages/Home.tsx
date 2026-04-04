import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiFileText,
  FiExternalLink,
} from "react-icons/fi";
import "./Home.css";

const translations = {
  en: {
    title: "yakuphan küçükkesim",
    intro:
      "information systems and technologies graduate. passionate about technology, eager to learn, and always curious about emerging innovations.",
    actions: {
      github: "github",
      email: "email",
      cv: "cv",
      linkedin: "linkedin",
    },
    recent: "projects",
  },
  tr: {
    title: "yakuphan küçükkesim",
    intro:
      "bilişim sistemleri ve teknolojileri mezunu. teknolojiye tutkulu, öğrenmeye istekli ve gelişen yeniliklere karşı her zaman meraklı.",
    actions: {
      github: "github",
      email: "email",
      cv: "cv",
      linkedin: "linkedin",
    },
    recent: "projeler",
  },
};

const Home: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const projects = language === "en" ? projectsEn : projectsTr;

  return (
    <div className="home">
      <div className="container">
        <motion.section
          className="hero-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-header">
            <div className="hero-logo">yk</div>
            <div className="hero-content">
              <h1>{t.title}</h1>
              <p>{t.intro}</p>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/yakuphankucukkesim" target="_blank" rel="noreferrer" className="social-link">
              <FiGithub /> github
            </a>
            <a href="https://linkedin.com/in/yakuphan" target="_blank" rel="noreferrer" className="social-link">
              <FiLinkedin /> linkedin
            </a>
            <a href="mailto:yakuphann@icloud.com" className="social-link">
              <FiMail /> {language === "en" ? "e-mail" : "e-posta"}
            </a>
            <a href="/cv.pdf" target="_blank" rel="noreferrer" className="social-link">
              <FiFileText /> cv
            </a>
          </div>
        </motion.section>

        <motion.section
          className="projects-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t.recent}</h2>
          <div className="projects-list">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-item"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="project-info">
                  <span className="project-tag">{project.tag}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link" aria-label="GitHub">
                      <FiGithub />
                    </a>
                  )}
                  {project.websiteUrl && (
                    <a href={project.websiteUrl} target="_blank" rel="noreferrer" className="project-link" aria-label="Website">
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;

type ProjectItem = {
  title: string;
  description: string;
  tag: string;
  image: string;
  githubUrl?: string;
  websiteUrl?: string;
};

const projectsEn: ProjectItem[] = [
  {
    title: "portfolio website",
    tag: "web app",
    description: "developed this portfolio website using react, typescript, and modern web technologies.",
    image: "/photos/portfolio.png",
    githubUrl: "https://github.com/yakuphankucukkesim/yakuphan-portfolio",
    websiteUrl: "https://yakuphankucukkesim.com",
  },
  {
    title: "serefmobilya.net",
    tag: "web app",
    description: "developed for şeref mobilya, this website was designed with a high-performance, seo-friendly, and ux-focused modern interface using react and tailwind css.",
    image: "/photos/serefmobilya.png",
    websiteUrl: "https://serefmobilya.net",
  },
  {
    title: "kovan",
    tag: "mobile app",
    description: "kovan is a real-time collective photo-sharing platform for event attendees, built with react native.",
    image: "/photos/kripto.jpg",
    githubUrl: "https://github.com/yakuphankucukkesim/kovan",
  },
  {
    title: "resonora.ai",
    tag: "ai / saas",
    description: "built an ai podcast clipping tool using python, next.js, aws, stripe, tailwind, ts, modal, and inngest.",
    image: "/photos/resonora.png",
    githubUrl: "https://github.com/yakuphankucukkesim/resonora-ai",
    websiteUrl: "https://resonora-ai.vercel.app",
  },
  {
    title: "real estate platform",
    tag: "web app",
    description: "built a scalable real estate app with next.js, node.js, and aws.",
    image: "/photos/realestate.png",
    githubUrl: "https://github.com/yakuphankucukkesim/real-estate",
  },
  {
    title: "e-commerce website",
    tag: "full stack",
    description: "developed a full-stack e-commerce web application with react.js, nest.js, and mongodb.",
    image: "/photos/ecommercess.png",
    githubUrl: "https://github.com/yakuphankucukkesim/e-commerce-website",
  },
  {
    title: "note-taking mobile app",
    tag: "mobile app",
    description: "developed a cross-platform note-taking mobile application with react native, node.js, and mongodb.",
    image: "/photos/notepad.png",
    githubUrl: "https://github.com/yakuphankucukkesim/notepad-project-main",
  },
  {
    title: "eat&move fitness app",
    tag: "ai / mobile",
    description: "built an ai-powered sports app that personalized workouts and nutrition with community social features.",
    image: "/photos/Team9.jpg",
    websiteUrl: "https://www.ctis.bilkent.edu.tr/ctis_seniorProject.php?semester=31&id=5041",
  },
  {
    title: "screen break app",
    tag: "mobile app",
    description: "developed a mobile application for families to reduce screen time and spend quality time together.",
    image: "/photos/buruciye.jpg",
    githubUrl: "https://github.com/yakuphankucukkesim/TubitakAile",
  },
  {
    title: "cryptography puzzle game",
    tag: "mobile game",
    description: "created an interactive mobile game that taught users basic encryption methods and the history of cryptography.",
    image: "/photos/kripto.jpg",
    githubUrl: "https://github.com/yakuphankucukkesim/kriptouzayussu-main",
  },
];

const projectsTr: ProjectItem[] = [
  {
    title: "portfolyo web sitesi",
    tag: "web uygulaması",
    description: "react, typescript ve modern web teknolojileriyle geliştirilen kişisel portfolyo.",
    image: "/photos/portfolio.png",
    githubUrl: "https://github.com/yakuphankucukkesim/yakuphan-portfolio",
    websiteUrl: "https://yakuphankucukkesim.com",
  },
  {
    title: "serefmobilya.net",
    tag: "web uygulaması",
    description: "şeref mobilya için geliştirilen bu web sitesi, react ve tailwind css kullanılarak yüksek performanslı, seo uyumlu ve kullanıcı deneyimi odaklı modern bir kurumsal kimlik arayüzü olarak tasarlandı.",
    image: "/photos/serefmobilya.png",
    websiteUrl: "https://serefmobilya.net",
  },
  {
    title: "kovan",
    tag: "mobil uygulama",
    description: "kovan, etkinlik katılımcıları için react native ile geliştirilmiş, gerçek zamanlı bir kolektif fotoğraf paylaşım platformudur.",
    image: "/photos/kripto.jpg",
    githubUrl: "https://github.com/yakuphankucukkesim/kovan",
  },
  {
    title: "resonora.ai",
    tag: "yapay zeka / saas",
    description: "yapay zeka podcast kırpma uygulaması. python ve next.js ile geliştirildi.",
    image: "/photos/resonora.png",
    githubUrl: "https://github.com/yakuphankucukkesim/resonora-ai",
    websiteUrl: "https://resonora-ai.vercel.app",
  },
  {
    title: "gayrimenkul platformu",
    tag: "web uygulaması",
    description: "next.js, node.js ve aws ile modern emlak yönetim platformu.",
    image: "/photos/realestate.png",
    githubUrl: "https://github.com/yakuphankucukkesim/real-estate",
  },
  {
    title: "e-ticaret platformu",
    tag: "full stack",
    description: "react.js, nest.js ve mongodb ile tam kapsamlı e-ticaret platformu.",
    image: "/photos/ecommercess.png",
    githubUrl: "https://github.com/yakuphankucukkesim/e-commerce-website",
  },
  {
    title: "not alma uygulaması",
    tag: "mobil uygulama",
    description: "react native ve node.js ile çapraz platform mobil not alma uygulaması.",
    image: "/photos/notepad.png",
    githubUrl: "https://github.com/yakuphankucukkesim/notepad-project-main",
  },
  {
    title: "eat&move fitness",
    tag: "yapay zeka / mobil",
    description: "yapay zeka destekli, sosyal özellikli antrenman ve beslenme uygulaması.",
    image: "/photos/Team9.jpg",
    websiteUrl: "https://www.ctis.bilkent.edu.tr/ctis_seniorProject.php?semester=31&id=5041",
  },
  {
    title: "ekran molası uygulaması",
    tag: "mobil uygulama",
    description: "aile içi iletişimi artırmayı hedefleyen ekran süresi azaltma uygulaması.",
    image: "/photos/buruciye.jpg",
    githubUrl: "https://github.com/yakuphankucukkesim/TubitakAile",
  },
  {
    title: "kriptografi bulmaca oyunu",
    tag: "mobil oyun",
    description: "kullanıcılara şifreleme yöntemlerini öğreten interaktif bir mobil oyun.",
    image: "/photos/kripto.jpg",
    githubUrl: "https://github.com/yakuphankucukkesim/kriptouzayussu-main",
  },
];
