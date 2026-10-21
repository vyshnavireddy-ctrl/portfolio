import React from 'react';
import { ArrowUp, Heart, Mail, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        padding: '50px 0 35px 0',
        background: 'var(--footer-bg)',
        backdropFilter: 'blur(16px)',
        borderTop: '1.5px solid var(--glass-border)',
        position: 'relative',
        zIndex: 1,
        transition: 'background 0.3s ease',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '30px',
          }}
        >
          {/* Brand Info */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '6px',
              }}
            >
              <span>Vyshu's Creative World</span>
              <Sparkles size={18} color="#EC4899" />
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              R. Vyshnavi • B.Tech CSE (2024–Present) • Narasaraopeta Engineering College
            </p>
          </div>

          {/* Quick Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            {['hero', 'about', 'skills', 'projects', 'education', 'contact'].map((sec) => (
              <button
                key={sec}
                onClick={() => onNavigate(sec)}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  textTransform: 'capitalize',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {sec === 'hero' ? 'Home' : sec}
              </button>
            ))}
          </div>

          {/* Social Icons & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a
              href="https://github.com/vyshnavireddy-ctrl"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                transition: 'transform 0.2s',
              }}
              title="GitHub Profile"
              aria-label="GitHub Profile"
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <GithubIcon size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/vyshnavi-reddy-7ba6703b0?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0284C7',
                transition: 'transform 0.2s',
              }}
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <LinkedinIcon size={18} color="#0284C7" />
            </a>

            <a
              href="https://www.instagram.com/vyshu_491?mdxt=NHpkbHVzd2V0Ym9r"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#E11D48',
                transition: 'transform 0.2s',
              }}
              title="Instagram Profile"
              aria-label="Instagram Profile"
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <InstagramIcon size={18} color="#E11D48" />
            </a>

            <a
              href="mailto:vyshnavireddy720@gmail.com"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                transition: 'transform 0.2s',
              }}
              title="Send Email"
              aria-label="Send Email"
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <Mail size={18} />
            </a>

            <button
              onClick={scrollToTop}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #7C3AED, #A855F7)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(124, 58, 237, 0.3)',
                transition: 'transform 0.2s',
              }}
              title="Scroll to Top"
              aria-label="Scroll to Top"
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div
          style={{
            borderTop: '1px solid var(--glass-border)',
            paddingTop: '20px',
            textAlign: 'center',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            flexWrap: 'wrap',
          }}
        >
          <span>© {new Date().getFullYear()} Vyshu's Creative World.</span>
          <span>Crafted with</span>
          <Heart size={14} fill="#EC4899" color="#EC4899" />
          <span>& pastel dreams for R. Vyshnavi.</span>
        </div>
      </div>
    </footer>
  );
}
