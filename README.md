# 🚀 Yakuphan Küçükkesim | Portfolio

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

A modern, responsive, and performance-oriented personal portfolio website. Built with React, TypeScript, and Framer Motion, this project is designed to showcase a software engineer's skills, projects, and experiences with a premium aesthetic.

🔗 **Live Demo:** [yakuphankucukkesim.com](https://yakuphankucukkesim.com)

---

## ✨ Features

* 🎨 **Modern Design:** Sleek, minimalist, and user-centric UI.
* 🎭 **Smooth Animations:** Powered by Framer Motion for high-quality transitions.
* 📱 **Fully Responsive:** Optimized for Mobile (320px+), Tablet (768px+), and Desktop (1024px+).
* 🌙 **Dark Theme:** Professional dark mode optimized for readability.
* 📄 **CV Integration:** Direct option for visitors to view and download CV.
* 📧 **Contact Form:** Integrated communication module for direct reach.
* ⚡ **High Performance:** 95+ Lighthouse score with optimized bundle sizes.

---

## 🛠️ Technologies

- **Frontend:** React 18, TypeScript, CSS3
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Routing:** React Router DOM
- **Hosting:** Render.com

---

## 📁 Project Structure

```text
frontend/
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page views (About, Projects, Contact)
│   ├── contexts/      # React context providers
│   └── utils/         # Helper functions & utilities
├── public/            # Static assets
└── build/             # Production build output
```

## 🚀 Local Development

### Requirements
- Node.js 18+
- npm

### Setup
```bash
# Clone the repository
git clone [https://github.com/yakuphan/yakuphan-portfolio.git](https://github.com/yakuphan/yakuphan-portfolio.git)
cd yakuphan-portfolio

# Go to frontend folder
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

### Build
```bash
# Production build
npm run build

# Test the build
npm run test
```

## 🌐 Deployment

### Render.com (Recommended)
1. Connect your GitHub repo to Render
2. Configure as **Static Site**
3. **Build Command**: `npm run build`
4. **Publish Directory**: `build`
5. Add custom domain: `yakuphankucukkesim.com`

### Other Platforms
- **Netlify**: Run `npm run build` → drag & drop the `build/` folder
- **Vercel**: Automatic deploy via GitHub integration
- **GitHub Pages**: Deploy to `gh-pages` branch

## 📝 Content Updates

### Projects
Edit the `projects` array in `src/pages/Projects.tsx`

### About
Update static content in `src/pages/About.tsx`

### Contact
Change contact details in `src/pages/Contact.tsx`

## 🎨 Customization

### Colors
Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --background-color: #0f0f23;
  --text-color: #ffffff;
}
```

### Fonts
Add new fonts from Google Fonts and import them in `src/index.css`

## 📱 Responsive Design

The site is optimized for all devices:
- 📱 Mobile: 320px+
- 📱 Tablet: 768px+
- 💻 Desktop: 1024px+

## 🚀 Performance

- ⚡ Lighthouse Score: 95+
- 📦 Bundle Size: < 500KB
- 🎯 Core Web Vitals: Optimized

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch (git checkout -b feature/amazing-feature)
3. Commit changes (git commit -m 'Add amazing feature')
4. Push to branch (git push origin feature/amazing-feature)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

- **Website**: [yakuphankucukkesim.com](https://yakuphankucukkesim.com)
- **Email**: yakuphann@icloud.com
- **GitHub**: [@yakuphankucukkesim](https://github.com/yakuphankucukkesim)
- **LinkedIn**: [yakuphan](https://linkedin.com/in/yakuphan)

---

⭐ If you liked this project, don’t forget to give it a star!
>>>>>>> 7e182d56 (First commit)
