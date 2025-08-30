import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';
import './Contact.css';

const translations = {
  en: {
    pageTitle: "Contact",
    pageDescription: "Feel free to reach out for collaboration, questions, or just to say hi!",
    infoTitle: "Contact Information",
    infoDesc: "You can reach me through the channels below or send a message by filling out the form.",
    formTitle: "Send a Message",
    formDesc: "For your projects, job offers, or any questions, you can use the form below.",
    nameLabel: "Name and Surname *",
    emailLabel: "Email *",
    subjectLabel: "Subject *",
    messageLabel: "Message *",
    sendBtn: "Send Message",
    sending: "Sending...",
    successMsg: "✅ Your message has been sent successfully! I will get back to you as soon as possible.",
    errorMsg: "❌ An error occurred while sending the message. Please try again.",
    socials: [
      { icon: <FiGithub />, url: "https://github.com/yakuphankucukkesim", label: "GitHub" },
      { icon: <FiLinkedin />, url: "https://linkedin.com/in/yakuphan", label: "LinkedIn" },
      { icon: <FiMail />, url: "mailto:yakuphann@icloud.com", label: "Email" }
    ],
    contactInfo: [
      {
        icon: <FiMail />,
        title: 'Email',
        value: 'yakuphann@icloud.com',
        link: 'mailto:yakuphann@icloud.com'
      },
      {
        icon: <FiMapPin />,
        title: 'Location',
        value: 'İzmir, Turkey',
        link: null
      },
      {
        icon: <FiGithub />,
        title: 'GitHub',
        value: 'yakuphankucukkesim',
        link: 'https://github.com/yakuphankucukkesim'
      },
      {
        icon: <FiLinkedin />,
        title: 'LinkedIn',
        value: 'yakuphan',
        link: 'https://linkedin.com/in/yakuphan'
      }
    ]
  },
  tr: {
    pageTitle: "İletişim",
    pageDescription: "İş birliği, soru veya sadece merhaba demek için bana ulaşabilirsiniz!",
    infoTitle: "İletişim Bilgileri",
    infoDesc: "Aşağıdaki kanallardan bana ulaşabilir veya formu doldurarak mesaj gönderebilirsiniz.",
    formTitle: "Mesaj Gönder",
    formDesc: "Projeleriniz, iş teklifleri veya herhangi bir sorunuz için aşağıdaki formu kullanabilirsiniz.",
    nameLabel: "Ad Soyad *",
    emailLabel: "E-posta *",
    subjectLabel: "Konu *",
    messageLabel: "Mesaj *",
    sendBtn: "Mesaj Gönder",
    sending: "Gönderiliyor...",
    successMsg: "✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.",
    errorMsg: "❌ Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
    socials: [
      { icon: <FiGithub />, url: "https://github.com/yakuphankucukkesim", label: "GitHub" },
      { icon: <FiLinkedin />, url: "https://linkedin.com/in/yakuphan", label: "LinkedIn" },
      { icon: <FiMail />, url: "mailto:yakuphann@icloud.com", label: "E-posta" }
    ],
    contactInfo: [
      {
        icon: <FiMail />,
        title: 'E-posta',
        value: 'yakuphann@icloud.com',
        link: 'mailto:yakuphann@icloud.com'
      },
      {
        icon: <FiMapPin />,
        title: 'Konum',
        value: 'İzmir, Türkiye',
        link: null
      },
      {
        icon: <FiGithub />,
        title: 'GitHub',
        value: 'yakuphankucukkesim',
        link: 'https://github.com/yakuphankucukkesim'
      },
      {
        icon: <FiLinkedin />,
        title: 'LinkedIn',
        value: 'yakuphan',
        link: 'https://linkedin.com/in/yakuphan'
      }
    ]
  }
};

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // EmailJS ile form gönderimi
      const result = await emailjs.sendForm(
        'service_65t315h', // EmailJS Service ID
        'template_ghfn05v', // EmailJS Template ID
        formRef.current!,
        '1_KlsVlmvyPjhGsGE' // EmailJS Public Key
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error('Email cannot be sent');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(t.errorMsg);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
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

        <div className="contact-content">
          {/* İletişim Bilgileri */}
          <motion.div
            className="contact-info-section"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="section-title">{t.infoTitle}</h2>
            <p className="section-description">{t.infoDesc}</p>
            <div className="contact-info-grid">
              {t.contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="contact-info-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="contact-info-icon">
                    {info.icon}
                  </div>
                  <div className="contact-info-content">
                    <h3>{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="contact-link" target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="social-links">
              {t.socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* İletişim Formu */}
          <motion.div
            className="contact-form-section"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="section-title">{t.formTitle}</h2>
            <p className="section-description">{t.formDesc}</p>
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">{t.nameLabel}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder={t.nameLabel}
                  autoComplete="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t.emailLabel}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder={t.emailLabel}
                  autoComplete="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">{t.subjectLabel}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder={t.subjectLabel}
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">{t.messageLabel}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder={t.messageLabel}
                  autoComplete="off"
                />
              </div>
              <motion.button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    {t.sending}
                  </>
                ) : (
                  <>
                    <FiSend />
                    {t.sendBtn}
                  </>
                )}
              </motion.button>
              {submitStatus === 'success' && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {t.successMsg}
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  className="error-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {errorMessage}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;