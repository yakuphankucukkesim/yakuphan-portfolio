# 📧 EmailJS Kurulum Rehberi

Bu rehber ile iletişim formunuzu çalışır hale getirebilirsiniz.

## 🚀 Adım 1: EmailJS Hesabı Oluşturun

1. [EmailJS.com](https://www.emailjs.com/) adresine gidin
2. **"Sign Up"** ile ücretsiz hesap oluşturun
3. Email adresinizi doğrulayın

## 🔧 Adım 2: Email Service Oluşturun

1. **Dashboard** → **"Email Services"**
2. **"Add New Service"** tıklayın
3. **Gmail** veya **Outlook** seçin
4. Email ve şifrenizi girin
5. **"Create Service"** tıklayın
6. **Service ID**'yi kopyalayın (örn: `service_abc123`)

## 📝 Adım 3: Email Template Oluşturun

1. **Dashboard** → **"Email Templates"**
2. **"Create New Template"** tıklayın
3. Template adı: `Portfolio Contact Form`
4. Aşağıdaki template'i kullanın:

```html
Subject: Yeni İletişim Mesajı - {{subject}}

Yeni bir iletişim mesajı aldınız:

Ad Soyad: {{user_name}}
Email: {{user_email}}
Konu: {{subject}}
Mesaj: {{message}}

Bu mesaj yakuphankucukkesim.com sitesinden gönderildi.
```

5. **"Save"** tıklayın
6. **Template ID**'yi kopyalayın (örn: `template_xyz789`)

## 🔑 Adım 4: Public Key Alın

1. **Dashboard** → **"Account"** → **"API Keys"**
2. **Public Key**'i kopyalayın (örn: `user_def456`)

## ⚙️ Adım 5: Kodu Güncelleyin

`frontend/src/pages/Contact.tsx` dosyasında şu değerleri değiştirin:

```typescript
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',     // ← Service ID'nizi yazın
  'YOUR_TEMPLATE_ID',    // ← Template ID'nizi yazın  
  formRef.current!,
  'YOUR_PUBLIC_KEY'      // ← Public Key'nizi yazın
);
```

**Örnek:**
```typescript
const result = await emailjs.sendForm(
  'service_abc123',
  'template_xyz789', 
  formRef.current!,
  'user_def456'
);
```

## 🧪 Adım 6: Test Edin

1. `npm start` ile uygulamayı başlatın
2. İletişim sayfasına gidin
3. Formu doldurun ve gönderin
4. Email'inizi kontrol edin

## 📱 Form Alanları

Form şu alanları EmailJS'e gönderir:
- `user_name` - Ad Soyad
- `user_email` - Email adresi  
- `subject` - Mesaj konusu
- `message` - Mesaj içeriği

## 🔒 Güvenlik

- Public Key güvenlidir, client-side'da kullanılabilir
- Rate limiting vardır (ücretsiz plan: 200 email/ay)
- Spam koruması mevcuttur

## 💰 Fiyatlandırma

- **Ücretsiz Plan**: 200 email/ay
- **Starter**: $15/ay - 1000 email
- **Professional**: $35/ay - 5000 email

## 🆘 Sorun Giderme

**Form gönderilmiyor:**
- Service ID, Template ID ve Public Key'i kontrol edin
- Console'da hata mesajlarını kontrol edin
- EmailJS hesabınızın aktif olduğundan emin olun

**Email gelmiyor:**
- Spam klasörünü kontrol edin
- Email service ayarlarını kontrol edin
- Template formatını kontrol edin

## 🎉 Tamamlandı!

Artık iletişim formunuz tamamen çalışır durumda! Ziyaretçiler size mesaj gönderebilir ve bu mesajlar email olarak size ulaşır.
