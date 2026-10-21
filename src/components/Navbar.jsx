import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Volume2, VolumeX, Moon, Sun, ArrowUpRight, Star } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

export default function Navbar({ isMuted, setIsMuted, activeSection, onNavigate, theme, toggleTheme, onOpenWishModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: isScrolled ? '10px 20px' : '18px 20px',
          transition: 'all 0.35s ease',
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: '1180px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: isScrolled
              ? 'var(--glass-bg-hover)'
              : 'var(--glass-bg)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1.5px solid var(--glass-border)',
            boxShadow: isScrolled
              ? 'var(--glass-shadow-hover)'
              : 'var(--glass-shadow)',
            borderRadius: '9999px',
            padding: '8px 22px',
            transition: 'all 0.3s ease',
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('hero');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: 700,
              fontSize: '1.25rem',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
              textDecoration: 'none',
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #A855F7, #EC4899)',
                color: '#ffffff',
                boxShadow: '0 4px 12px rgba(168, 85, 247, 0.35)',
              }}
            >
              <Sparkles size={18} />
            </span>
            <span style={{ letterSpacing: '-0.02em' }}>
              Vyshu<span style={{ color: '#EC4899' }}>.dev</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  style={{
                    padding: '8px 15px',
                    borderRadius: '9999px',
                    fontSize: '0.94rem',
                    fontWeight: isActive ? 700 : 600,
                    color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                    background: isActive ? 'var(--primary-subtle)' : 'transparent',
                    border: isActive ? '1px solid var(--glass-border)' : '1px solid transparent',
                    boxShadow: isActive ? '0 2px 8px rgba(139, 92, 246, 0.15)' : 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--primary)';
                      e.currentTarget.style.background = 'var(--primary-subtle)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Magical Wish Modal Button */}
            <button
              onClick={onOpenWishModal}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '6px 13px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #FDE047 0%, #F59E0B 100%)',
                color: '#78350F',
                border: '1.5px solid rgba(255, 255, 255, 0.9)',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 3px 12px rgba(245, 158, 11, 0.35)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              title="Make a Wish & Receive a Positive Affirmation ✨"
            >
              <Star size={14} fill="#78350F" />
              <span>Wish ✨</span>
            </button>

            {/* Theme Toggle Button (Lavender Dream vs Midnight Lavender) */}
            <button
              onClick={toggleTheme}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--primary-subtle)',
                color: 'var(--primary)',
                border: '1px solid var(--glass-border)',
                transition: 'all 0.2s ease',
              }}
              title={theme === 'dark' ? 'Switch to Lavender Dream (Light)' : 'Switch to Midnight Lavender (Dark)'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={17} color="#FBBF24" /> : <Moon size={17} color="#7C3AED" />}
            </button>

            {/* Audio Toggle */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--primary-subtle)',
                color: isMuted ? 'var(--text-muted)' : 'var(--primary)',
                border: '1px solid var(--glass-border)',
                transition: 'all 0.2s ease',
              }}
              title={isMuted ? 'Unmute Character Audio' : 'Mute Character Audio'}
              aria-label="Toggle Sound"
            >
              {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
            </button>

            {/* LinkedIn Quick Icon */}
            <a
              href="https://www.linkedin.com/in/vyshnavi-reddy-7ba6703b0?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--primary-subtle)',
                color: '#0284C7',
                border: '1px solid var(--glass-border)',
                transition: 'transform 0.2s',
              }}
              className="social-nav-btn"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} color="#0284C7" />
            </a>

            {/* Instagram Quick Icon */}
            <a
              href="https://www.instagram.com/vyshu_491?mdxt=NHpkbHVzd2V0Ym9r"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--primary-subtle)',
                color: '#E11D48',
                border: '1px solid var(--glass-border)',
                transition: 'transform 0.2s',
              }}
              className="social-nav-btn"
              title="Instagram Profile"
              aria-label="Instagram Profile"
            >
              <InstagramIcon size={16} color="#E11D48" />
            </a>

            {/* GitHub Profile Button */}
            <a
              href="https://github.com/vyshnavireddy-ctrl"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 15px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #7C3AED, #9333EA)',
                color: '#ffffff',
                fontSize: '0.88rem',
                fontWeight: 600,
                boxShadow: '0 4px 12px rgba(124, 58, 237, 0.3)',
                transition: 'all 0.2s ease',
              }}
              className="github-btn"
            >
              <GithubIcon size={15} />
              <span>GitHub</span>
              <ArrowUpRight size={13} />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-btn"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--primary-subtle)',
                color: 'var(--text-primary)',
                border: '1px solid var(--glass-border)',
              }}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: 'rgba(15, 7, 33, 0.55)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            padding: '90px 20px 30px 20px',
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="glass-panel"
            style={{
              padding: '24px',
              borderRadius: '24px',
              background: 'var(--modal-bg)',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              border: '2px solid var(--glass-border)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  style={{
                    padding: '12px 18px',
                    textAlign: 'left',
                    borderRadius: '14px',
                    fontSize: '1.05rem',
                    fontWeight: isActive ? 700 : 600,
                    color: isActive ? 'var(--primary)' : 'var(--text-primary)',
                    background: isActive ? 'var(--primary-subtle)' : 'transparent',
                    border: '1px solid ' + (isActive ? 'var(--glass-border)' : 'transparent'),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{link.label}</span>
                  {isActive && <Sparkles size={16} color="var(--primary)" />}
                </button>
              );
            })}

            <div style={{ marginTop: '12px', borderTop: '1px solid var(--glass-border)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href="https://github.com/vyshnavireddy-ctrl"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  width: '100%',
                  padding: '12px',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #7C3AED, #9333EA)',
                  color: '#ffffff',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                <GithubIcon size={18} />
                <span>Visit GitHub Profile</span>
                <ArrowUpRight size={16} />
              </a>

              <div style={{ display: 'flex', gap: '8px' }}>
                <a
                  href="https://www.linkedin.com/in/vyshnavi-reddy-7ba6703b0?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    padding: '10px',
                    borderRadius: '12px',
                    background: 'var(--primary-subtle)',
                    color: '#0284C7',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                  }}
                >
                  <LinkedinIcon size={16} color="#0284C7" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://www.instagram.com/vyshu_491?mdxt=NHpkbHVzd2V0Ym9r"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    padding: '10px',
                    borderRadius: '12px',
                    background: 'var(--primary-subtle)',
                    color: '#E11D48',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                  }}
                >
                  <InstagramIcon size={16} color="#E11D48" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Style for mobile responsive display */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .github-btn {
            display: none !important;
          }
          .social-nav-btn {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
