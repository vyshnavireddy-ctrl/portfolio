import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, Sparkles, Heart, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emailAddress = 'vyshnavireddy720@gmail.com';
  const githubUrl = 'https://github.com/vyshnavireddy-ctrl';

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please write a brief message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);

    // Confetti celebration
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#A855F7', '#EC4899', '#38BDF8', '#FDE047'],
      });
    } catch {
      // ignore
    }

    // Prepare direct mailto URL
    const subjectEncoded = encodeURIComponent(formData.subject || `Message from ${formData.name} via Portfolio`);
    const bodyEncoded = encodeURIComponent(
      `Hi Vyshu,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    const mailtoLink = `mailto:${emailAddress}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    // Trigger mailto after brief delay so user sees confirmation
    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 400);
  };

  return (
    <section
      id="contact"
      style={{
        padding: '100px 0',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">Have a lovely idea? Let's create something amazing!</h2>
          <p className="section-subtitle">
            Whether you want to connect about coding, discuss a project collaboration, or just say hello, I'd love to hear from you.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Direct Contacts & Chibi Goodbye Greeting */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Email Card */}
            <div
              className="glass-panel"
              style={{
                padding: '26px',
                borderRadius: '24px',
                background: 'rgba(255, 255, 255, 0.85)',
                border: '1.5px solid rgba(255, 255, 255, 0.95)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '16px',
                    background: '#EDE9FE',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#7C3AED',
                  }}
                >
                  <Mail size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#7E7097', fontWeight: 600, textTransform: 'uppercase' }}>Email Address</div>
                  <a
                    href={`mailto:${emailAddress}`}
                    style={{
                      fontSize: '1.02rem',
                      fontWeight: 700,
                      color: '#4C1D95',
                      textDecoration: 'none',
                    }}
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>

              <button
                onClick={copyEmailToClipboard}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  background: copiedEmail ? '#D1FAE5' : '#F3E8FF',
                  color: copiedEmail ? '#059669' : '#7C3AED',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  border: `1px solid ${copiedEmail ? '#A7F3D0' : '#DDD6FE'}`,
                  transition: 'all 0.2s ease',
                }}
              >
                {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* GitHub Card */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel"
              style={{
                padding: '24px 26px',
                borderRadius: '24px',
                background: 'rgba(255, 255, 255, 0.85)',
                border: '1.5px solid rgba(255, 255, 255, 0.95)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0px)')}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '16px',
                  background: '#F3E8FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#4C1D95',
                }}
              >
                <GithubIcon size={22} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>GitHub Profile</div>
                <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)' }}>github.com/vyshnavireddy-ctrl</div>
              </div>
            </a>

            {/* LinkedIn Profile Card */}
            <a
              href="https://www.linkedin.com/in/vyshnavi-reddy-7ba6703b0?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel"
              style={{
                padding: '22px 26px',
                borderRadius: '24px',
                background: 'var(--glass-bg)',
                border: '1.5px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0px)')}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '16px',
                  background: '#E0F2FE',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0284C7',
                }}
              >
                <LinkedinIcon size={22} color="#0284C7" />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>LinkedIn Profile</div>
                <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)' }}>R. Vyshnavi (Vyshu)</div>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href="https://www.instagram.com/vyshu_491?mdxt=NHpkbHVzd2V0Ym9r"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel"
              style={{
                padding: '22px 26px',
                borderRadius: '24px',
                background: 'var(--glass-bg)',
                border: '1.5px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0px)')}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '16px',
                  background: '#FCE7F3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#DB2777',
                }}
              >
                <InstagramIcon size={22} color="#DB2777" />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Instagram</div>
                <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)' }}>@vyshu_491</div>
              </div>
            </a>

            {/* Location Card */}
            <div
              className="glass-panel"
              style={{
                padding: '22px 26px',
                borderRadius: '24px',
                background: 'var(--glass-bg)',
                border: '1.5px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '16px',
                  background: 'var(--primary-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                }}
              >
                <MapPin size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Location & College</div>
                <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)' }}>Narasaraopet, Andhra Pradesh, India</div>
                <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>Narasaraopeta Engineering College</div>
              </div>
            </div>

            {/* Pure Text-Focused Thought Card (No photo/image) */}
            <div
              className="glass-panel"
              style={{
                padding: '22px 24px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(237, 233, 254, 0.7) 0%, rgba(252, 231, 243, 0.7) 100%)',
                border: '1.5px solid var(--glass-border)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Sparkles size={18} color="#7C3AED" />
                <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', fontWeight: 700 }}>
                  Open for Collaboration & Chats
                </h4>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                "Have questions about my projects or want to discuss creative frontend development? Reach out through any of these platforms or drop a note on the right!" — Vyshu 💜
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div
            className="glass-panel"
            style={{
              padding: '36px 32px',
              borderRadius: '28px',
              background: 'rgba(255, 255, 255, 0.88)',
              border: '1.5px solid rgba(255, 255, 255, 0.95)',
              boxShadow: '0 20px 45px -10px rgba(139, 92, 246, 0.2)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <MessageSquare size={20} color="#7C3AED" />
              <h3 style={{ fontSize: '1.4rem', color: '#2E1065' }}>Send a Friendly Message</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#7E7097', marginBottom: '24px' }}>
              Fill out this form to connect. It prepares an email draft directly to my inbox!
            </p>

            {isSubmitted ? (
              <div
                style={{
                  padding: '24px',
                  borderRadius: '20px',
                  background: '#F0FDF4',
                  border: '1.5px solid #86EFAC',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    background: '#DCFCE7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 14px auto',
                    color: '#16A34A',
                  }}
                >
                  <CheckCircle2 size={32} />
                </div>
                <h4 style={{ fontSize: '1.25rem', color: '#166534', marginBottom: '8px' }}>
                  Message Draft Ready! ✨
                </h4>
                <p style={{ fontSize: '0.92rem', color: '#15803D', lineHeight: 1.6, marginBottom: '18px' }}>
                  Thank you, <strong>{formData.name}</strong>! Your email client has been prompted to send this message to{' '}
                  <strong>{emailAddress}</strong>.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href={`mailto:${emailAddress}?subject=${encodeURIComponent(formData.subject || 'Message via Portfolio')}&body=${encodeURIComponent(formData.message)}`}
                    className="btn-primary"
                    style={{ padding: '10px 20px', fontSize: '0.92rem' }}
                  >
                    Open Email App Again
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    style={{
                      fontSize: '0.85rem',
                      color: '#4B5563',
                      textDecoration: 'underline',
                      marginTop: '6px',
                    }}
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Name */}
                <div style={{ marginBottom: '18px' }}>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: 'block',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: '#4C1D95',
                      marginBottom: '6px',
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="e.g. Aditi / Rahul"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '14px',
                      border: errors.name ? '2px solid #EF4444' : '1.5px solid #DDD6FE',
                      background: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '0.95rem',
                      color: '#2E1065',
                      outline: 'none',
                      transition: 'border 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#7C3AED')}
                    onBlur={(e) => (e.target.style.borderColor = errors.name ? '#EF4444' : '#DDD6FE')}
                  />
                  {errors.name && (
                    <span style={{ fontSize: '0.8rem', color: '#DC2626', marginTop: '4px', display: 'block' }}>
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div style={{ marginBottom: '18px' }}>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: 'block',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: '#4C1D95',
                      marginBottom: '6px',
                    }}
                  >
                    Your Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '14px',
                      border: errors.email ? '2px solid #EF4444' : '1.5px solid #DDD6FE',
                      background: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '0.95rem',
                      color: '#2E1065',
                      outline: 'none',
                      transition: 'border 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#7C3AED')}
                    onBlur={(e) => (e.target.style.borderColor = errors.email ? '#EF4444' : '#DDD6FE')}
                  />
                  {errors.email && (
                    <span style={{ fontSize: '0.8rem', color: '#DC2626', marginTop: '4px', display: 'block' }}>
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div style={{ marginBottom: '18px' }}>
                  <label
                    htmlFor="contact-subject"
                    style={{
                      display: 'block',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: '#4C1D95',
                      marginBottom: '6px',
                    }}
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Project Inquiry / Feedback / Hello!"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '14px',
                      border: '1.5px solid #DDD6FE',
                      background: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '0.95rem',
                      color: '#2E1065',
                      outline: 'none',
                      transition: 'border 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#7C3AED')}
                    onBlur={(e) => (e.target.style.borderColor = '#DDD6FE')}
                  />
                </div>

                {/* Message */}
                <div style={{ marginBottom: '24px' }}>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: 'block',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: '#4C1D95',
                      marginBottom: '6px',
                    }}
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows="4"
                    placeholder="Write your sweet note or project details here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '14px',
                      border: errors.message ? '2px solid #EF4444' : '1.5px solid #DDD6FE',
                      background: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '0.95rem',
                      color: '#2E1065',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#7C3AED')}
                    onBlur={(e) => (e.target.style.borderColor = errors.message ? '#EF4444' : '#DDD6FE')}
                  />
                  {errors.message && (
                    <span style={{ fontSize: '0.8rem', color: '#DC2626', marginTop: '4px', display: 'block' }}>
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '14px',
                    fontSize: '1.05rem',
                  }}
                >
                  <Send size={18} />
                  <span>Send Message Draft</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
