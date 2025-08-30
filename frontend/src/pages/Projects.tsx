import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiDatabase, FiSmartphone } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import './Projects.css';

const translations = {
  en: {
    pageTitle: "Projects",
    pageDescription: "Projects and Technologies Overview",
    categories: [
      { key: 'all', label: 'All', icon: <FiCode /> },
      { key: 'web', label: 'Web', icon: <FiCode /> },
      { key: 'mobile', label: 'Mobile', icon: <FiSmartphone /> },
      { key: 'api', label: 'API', icon: <FiDatabase /> }
    ],
    noProjects: "There are no projects in this category yet.",
    projects: [
      {
        id: 1,
        title: 'Notepad Application',
        description: 'Developed a cross-platform note-taking mobile application during my internship using React Native (frontend), Node.js (backend), and MongoDB (database).',
        technologies: ['React Native', 'Node.js', 'MongoDB'],
        image: '/photos/notepad.png',
        githubUrl: 'https://github.com/yakuphankucukkesim/NotePadProject',
        category: 'mobile'
      },
      {
        id: 2,
        title: 'E-Commerce Website',
        description: 'Developed a full-stack e-commerce web application during my internship using React.js (frontend), Nest.js (backend), and MongoDB (database).',
        technologies: ['React.js', 'Nest.js', 'MongoDB', 'Docker Swarm', 'TypeScript'],
        image: '/photos/ecommercess.png',
        githubUrl: 'https://github.com/yakuphankucukkesim/e-commerce-website.git',
        category: 'web'
      },
      {
        id: 3,
        title: 'Portfolio Website',
        description: 'This portfolio website was developed using React, TypeScript, and modern web technologies.',
        technologies: ['React.js', 'TypeScript', 'CSS3', 'Framer Motion'],
        image: '/photos/portfolio.png',
        githubUrl: 'https://github.com/yakuphan/portfolio',
        category: 'web'
      },
      {
        id: 5,
        title: 'Fitness Application',
        description: 'Eat&Move is an AI-powered sports app that personalizes workouts and nutrition while fostering community through social features that connect users with like-minded fitness enthusiasts.',
        technologies: ['React Native', 'MongoDB', 'Python', 'Figma'],
        image: '/photos/Team9.jpg',
        githubUrl: 'https://www.ctis.bilkent.edu.tr/ctis_seniorProject.php?semester=31&id=5041',
        category: 'mobile'
      },
    ]
  },
  tr: {
    pageTitle: "Projeler",
    pageDescription: "Projeler ve Teknolojiler Genel Bakış",
    categories: [
      { key: 'all', label: 'Hepsi', icon: <FiCode /> },
      { key: 'web', label: 'Web', icon: <FiCode /> },
      { key: 'mobile', label: 'Mobil', icon: <FiSmartphone /> },
      { key: 'api', label: 'API', icon: <FiDatabase /> }
    ],
    noProjects: "Bu kategoride henüz proje yok.",
    projects: [
      {
        id: 1,
        title: 'Not Defteri Uygulaması',
        description: 'Stajım sırasında React Native (frontend), Node.js (backend) ve MongoDB (veritabanı) kullanarak çapraz platform bir not alma mobil uygulaması geliştirdim.',
        technologies: ['React Native', 'Node.js', 'MongoDB'],
        image: '/photos/notepad.png',
        githubUrl: 'https://github.com/yakuphankucukkesim/NotePadProject',
        category: 'mobile'
      },
      {
        id: 2,
        title: 'E-Ticaret Web Sitesi',
        description: 'Stajım sırasında React.js (frontend), Nest.js (backend) ve MongoDB (veritabanı) kullanarak tam kapsamlı bir e-ticaret web uygulaması geliştirdim.',
        technologies: ['React.js', 'Nest.js', 'MongoDB', 'Docker Swarm', 'TypeScript'],
        image: '/photos/ecommercess.png',
        githubUrl: 'https://github.com/yakuphankucukkesim/e-commerce-website.git',
        category: 'web'
      },
      {
        id: 3,
        title: 'Portfolyo Web Sitesi',
        description: 'Bu portfolyo web sitesi React, TypeScript ve modern web teknolojileri kullanılarak geliştirildi.',
        technologies: ['React.js', 'TypeScript', 'CSS3', 'Framer Motion'],
        image: '/photos/portfolio.png',
        githubUrl: 'https://github.com/yakuphan/portfolio',
        category: 'web'
      },
      {
        id: 5,
        title: 'Fitness Uygulaması',
        description: 'Eat&Move, yapay zeka destekli bir spor uygulamasıdır; kişiselleştirilmiş antrenman ve beslenme sunar, sosyal özelliklerle kullanıcıları benzer spor tutkunlarıyla buluşturur.',
        technologies: ['React Native', 'MongoDB', 'Python', 'Figma'],
        image: '/photos/Team9.jpg',
        githubUrl: 'https://www.ctis.bilkent.edu.tr/ctis_seniorProject.php?semester=31&id=5041',
        category: 'mobile'
      },
    ]
  }
};

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all'
    ? t.projects
    : t.projects.filter(project => project.category === filter);

  return (
    <div className="projects">
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

        <motion.div
          className="filter-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="filter-buttons">
            {t.categories.map((category) => (
              <button
                key={category.key}
                className={`filter-btn ${filter === category.key ? 'active' : ''}`}
                onClick={() => setFilter(category.key)}
              >
                {category.icon}
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
  <a
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="project-link github"
  >
    <FiGithub />
  </a>
</div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="no-projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p>{t.noProjects}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;