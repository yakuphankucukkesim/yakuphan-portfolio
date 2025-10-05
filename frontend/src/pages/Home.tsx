import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiFileText,
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
} from "react-icons/fi";
import "./Home.css";

const translations = {
  en: {
    title: "Yakuphan Küçükkesim",
    intro:
      "Hi, my name is Yakuphan and I'm a Software Developer from Turkey. I build practical, user-friendly full-stack websites and mobile apps. I care about clean, scalable code and good collaboration.",
    actions: {
      github: "github",
      email: "email",
      cv: "cv",
      linkedin: "linkedin",
    },
    recent: "Projects",
  },
  tr: {
    title: "Yakuphan Küçükkesim",
    intro:
      "Merhaba, ben Yakuphan. Türkiye’den bir Yazılım Geliştiricisiyim. Kullanıcı dostu, pratik full-stack web siteleri ve mobil uygulamalar geliştiriyorum. Temiz ve ölçeklenebilir koda, ayrıca iyi ekip çalışmasına önem veririm.",
    actions: {
      github: "github",
      email: "email",
      cv: "cv",
      linkedin: "linkedin",
    },
    recent: "Projeler",
  },
};

const Home: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="home">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="hero-band">
            <div className="minimal-header">
              <div className="minimal-avatar">
                <img
                  src="/photos/pp.png"
                  alt="Yakuphan profile"
                  className="minimal-avatar-img"
                />
              </div>
              <div>
                <h1 className="minimal-title">{t.title}</h1>
                <p className="minimal-intro">{t.intro}</p>
              </div>
            </div>
            <hr className="divider projects-divider" />
          </div>

          <div className="at-links">
            <a
              className="at-bracket-link"
              href="https://github.com/yakuphankucukkesim"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub /> {t.actions.github}
            </a>
            <a className="at-bracket-link" href="mailto:yakuphann@icloud.com">
              <FiMail /> {t.actions.email}
            </a>
            <a
              className="at-bracket-link"
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <FiFileText /> {t.actions.cv}
            </a>
            <a
              className="at-bracket-link"
              href="https://linkedin.com/in/yakuphan"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin /> {t.actions.linkedin}
            </a>
          </div>
          <hr className="divider" />
          <RecentVideos title={t.recent} language={language} />
          <div className="page-bottom-spacer" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
type ProjectItem = {
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  websiteUrl?: string;
};

const RecentVideos: React.FC<{ title: string; language: string }> = ({
  title,
  language,
}) => {
  const projectsEn: ProjectItem[] = [
    {
      title: "Portfolio Website",
      description:
        "This portfolio website was developed using React, TypeScript, and modern web technologies.",
      image: "/photos/portfolio.png",
      githubUrl: "https://github.com/yakuphankucukkesim/yakuphan-portfolio",
      websiteUrl: "https://yakuphankucukkesim.com",
    },
    {
      title: "Resonora.ai",
      description:
        "Built an AI Podcast Clipping: Python, Next.js, AWS, Stripe, Tailwind, TS, Modal, Inngest (2025)",
      image: "/photos/resonora.png",
      githubUrl: "https://github.com/yakuphankucukkesim/resonora-ai",
      websiteUrl: "https://resonora-ai.vercel.app",
    },
    {
      title: "Real Estate Platform",
      description:
        "Build a scalable Real Estate app with Next.js, Node.js, AWS (2025)",
      image: "/photos/realestate.png",
      githubUrl: "https://github.com/yakuphankucukkesim/real-estate",
    },
    {
      title: "E-commerce Website",
      description:
        "Developed a full-stack e-commerce web application during my internship using React.js (frontend), Nest.js (backend), and MongoDB (database).",
      image: "/photos/ecommercess.png",
      githubUrl: "https://github.com/yakuphankucukkesim/e-commerce-website",
    },
    {
      title: "Note-taking Mobile App",
      description:
        "Developed a cross-platform note-taking mobile application during my internship using React Native (frontend), Node.js (backend), and MongoDB (database).",
      image: "/photos/notepad.png",
      githubUrl: "https://github.com/yakuphankucukkesim/notepad-project-main",
    },
    {
      title: "Fitness Application",
      description:
        "Eat&Move is an AI-powered sports app that personalizes workouts and nutrition while fostering community through social features that connect users with like-minded fitness enthusiasts.",
      image: "/photos/Team9.jpg",
      websiteUrl:
        "https://www.ctis.bilkent.edu.tr/ctis_seniorProject.php?semester=31&id=5041",
    },
  ];

  const projectsTr: ProjectItem[] = [
    {
      title: "Portfolyo Web Sitesi",
      description:
        "Bu portfolyo web sitesi React, TypeScript ve modern web teknolojileriyle geliştirildi.",
      image: "/photos/portfolio.png",
      githubUrl: "https://github.com/yakuphankucukkesim/yakuphan-portfolio",
      websiteUrl: "https://yakuphankucukkesim.com",
    },
    {
      title: "Resonora.ai",
      description:
        "Yapay zekâ ile podcast kırpma: Python, Next.js, AWS, Stripe, Tailwind, TS, Modal, Inngest (2025)",
      image: "/photos/resonora.png",
      githubUrl: "https://github.com/yakuphankucukkesim/resonora-ai",
      websiteUrl: "https://resonora-ai.vercel.app",
    },
    {
      title: "Gayrimenkul Platformu",
      description:
        "Next.js, Node.js ve AWS ile ölçeklenebilir bir emlak uygulaması (2025)",
      image: "/photos/realestate.png",
      githubUrl: "https://github.com/yakuphankucukkesim/real-estate",
    },
    {
      title: "E-ticaret Web Sitesi",
      description:
        "Stajımda React.js, Nest.js ve MongoDB ile tam kapsamlı e-ticaret uygulaması geliştirdim.",
      image: "/photos/ecommercess.png",
      githubUrl: "https://github.com/yakuphankucukkesim/e-commerce-website",
    },
    {
      title: "Not Alma Mobil Uygulaması",
      description:
        "Stajımda React Native, Node.js ve MongoDB ile çapraz platform not alma uygulaması geliştirdim.",
      image: "/photos/notepad.png",
      githubUrl: "https://github.com/yakuphankucukkesim/notepad-project-main",
    },
    {
      title: "Fitness Uygulaması",
      description:
        "Eat&Move: antrenman ve beslenmeyi kişiselleştiren; topluluk özellikleri sunan yapay zekâ destekli spor uygulaması.",
      image: "/photos/Team9.jpg",
      websiteUrl:
        "https://www.ctis.bilkent.edu.tr/ctis_seniorProject.php?semester=31&id=5041",
    },
  ];

  const videos = language === "tr" ? projectsTr : projectsEn;

  const pageSize = 4;
  const [page, setPage] = React.useState(1);
  const totalPages = Math.max(1, Math.ceil(videos.length / pageSize));
  const startIndex = (page - 1) * pageSize;
  const current = videos.slice(startIndex, startIndex + pageSize);

  const next = () => setPage((p) => (p % totalPages) + 1);
  const prev = () => setPage((p) => ((p - 2 + totalPages) % totalPages) + 1);

  return (
    <div className="videos-section">
      <div className="videos-header">
        <h2 className="minimal-section-title">{title}</h2>
        <div className="videos-controls">
          <button className="nav-arrow" onClick={prev} aria-label="Previous">
            <FiChevronLeft />
          </button>
          <span className="page-indicator">
            {page} / {totalPages}
          </span>
          <button className="nav-arrow" onClick={next} aria-label="Next">
            <FiChevronRight />
          </button>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          className="videos-grid"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          {current.map((v) => (
            <div key={v.title} className="video-card">
              <img src={v.image} alt={v.title} />
              <div className="video-meta">
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </div>
              <div className="video-actions">
                {v.githubUrl && (
                  <a
                    href={v.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${v.title} GitHub`}
                  >
                    <FiGithub />
                  </a>
                )}
                {v.websiteUrl && (
                  <a
                    href={v.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${v.title} Website`}
                  >
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
