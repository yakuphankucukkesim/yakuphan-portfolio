# yakuphan-portfolio
This portfolio website was developed using React, TypeScript, and modern web technologies.
=======
# Yakuphan Küçükkesim Portfolio

A modern and responsive personal portfolio website. Built with React, TypeScript, and Framer Motion.

## 🚀 Demo

[Live Site](https://resonora-ai.vercel.app)

## Features
🎨 Modern and responsive design
📱 Mobile friendly
🎭 Framer Motion animations
🌙 Dark theme
📄 CV download option
📧 Contact form
🚀 Static site (fast loading)

## 🛠️ Technologies
Frontend: React 18, TypeScript, CSS3
Animations: Framer Motion
Icons: React Icons
Routing: React Router DOM
Hosting: Render.com

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── contexts/       # React contexts
│   └── utils/          # Helper functions
├── public/             # Static files
└── build/              # Production build
```

## 🚀 Local Development

### Requirements
- Node.js 18+
- npm

### Setup
```bash
# Clone the repository
git clone https://github.com/yakuphan/yakuphan-portfolio.git
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
- **Email**: contact@yakuphankucukkesim.com
- **GitHub**: [@yakuphan](https://github.com/yakuphan)
- **LinkedIn**: [Yakuphan Kucukkesim](https://linkedin.com/in/yakuphan)

---

⭐ If you liked this project, don’t forget to give it a star!
>>>>>>> 7e182d56 (First commit)
