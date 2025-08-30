<<<<<<< HEAD
# yakuphan-portfolio
This portfolio website was developed using React, TypeScript, and modern web technologies.
=======
# Yakuphan Kucukkesim Portfolio

Modern ve responsive kişisel portfolyo web sitesi. React, TypeScript ve Framer Motion ile geliştirildi.

## 🚀 Demo

**Live Site**: [yakuphankucukkesim.com](https://yakuphankucukkesim.com)

## ✨ Özellikler

- 🎨 Modern ve responsive tasarım
- 📱 Mobil uyumlu
- 🎭 Framer Motion animasyonları
- 🌙 Dark theme
- 📄 CV indirme özelliği
- 📧 İletişim formu
- 🚀 Statik site (hızlı yükleme)

## 🛠️ Teknolojiler

- **Frontend**: React 18, TypeScript, CSS3
- **Animasyonlar**: Framer Motion
- **İkonlar**: React Icons
- **Routing**: React Router DOM
- **Hosting**: Render.com

## 📁 Proje Yapısı

```
frontend/
├── src/
│   ├── components/     # Yeniden kullanılabilir bileşenler
│   ├── pages/         # Sayfa bileşenleri
│   ├── contexts/      # React context'leri
│   └── utils/         # Yardımcı fonksiyonlar
├── public/            # Statik dosyalar
└── build/             # Production build
```

## 🚀 Yerel Geliştirme

### Gereksinimler
- Node.js 18+
- npm

### Kurulum
```bash
# Repository'yi klonlayın
git clone https://github.com/yakuphan/yakuphan-portfolio.git
cd yakuphan-portfolio

# Frontend klasörüne gidin
cd frontend

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm start
```

### Build
```bash
# Production build
npm run build

# Build'i test edin
npm run test
```

## 🌐 Yayınlama

### Render.com (Önerilen)
1. GitHub reponuzu Render'a bağlayın
2. **Static Site** olarak yapılandırın
3. **Build Command**: `npm run build`
4. **Publish Directory**: `build`
5. Custom domain ekleyin: `yakuphankucukkesim.com`

### Diğer Platformlar
- **Netlify**: `npm run build` → `build/` klasörünü sürükleyin
- **Vercel**: GitHub entegrasyonu ile otomatik deploy
- **GitHub Pages**: `gh-pages` branch'e deploy

## 📝 İçerik Güncelleme

### Projeler
`src/pages/Projects.tsx` dosyasındaki `projects` array'ini düzenleyin.

### Hakkımda
`src/pages/About.tsx` dosyasındaki statik içeriği güncelleyin.

### İletişim
`src/pages/Contact.tsx` dosyasındaki iletişim bilgilerini değiştirin.

## 🎨 Özelleştirme

### Renkler
`src/index.css` dosyasındaki CSS değişkenlerini düzenleyin:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --background-color: #0f0f23;
  --text-color: #ffffff;
}
```

### Fontlar
Google Fonts'tan yeni font ekleyin ve `src/index.css`'de import edin.

## 📱 Responsive Tasarım

Site tüm cihazlarda optimize edilmiştir:
- 📱 Mobile: 320px+
- 📱 Tablet: 768px+
- 💻 Desktop: 1024px+

## 🚀 Performance

- ⚡ Lighthouse Score: 95+
- 📦 Bundle Size: < 500KB
- 🎯 Core Web Vitals: Optimized

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

- **Website**: [yakuphankucukkesim.com](https://yakuphankucukkesim.com)
- **Email**: contact@yakuphankucukkesim.com
- **GitHub**: [@yakuphan](https://github.com/yakuphan)
- **LinkedIn**: [Yakuphan Kucukkesim](https://linkedin.com/in/yakuphan)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
>>>>>>> 7e182d56 (First commit)
