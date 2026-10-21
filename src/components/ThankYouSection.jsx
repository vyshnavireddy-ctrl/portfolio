import React from 'react';
import { ArrowUp, Mail, Sparkles, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function ThankYouSection({ onNavigate }) {
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#A855F7', '#EC4899', '#38BDF8', '#FDE047', '#C084FC'],
      });
    } catch {
      // ignore
    }
  };

  return (
    <section
      id="thanks"
      style={{
        padding: '110px 0 90px 0',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {/* Background Dreamy Glow Orbs */}
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.22) 0%, transparent 70%)',
          filter: 'blur(70px)',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244, 114, 182, 0.18) 0%, transparent 70%)',
          filter: 'blur(60px)',
          bottom: '10%',
          right: '15%',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        {/* Main Text-Focused Glass Card (Zero Photos / Zero Images) */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            padding: '60px 36px',
            borderRadius: '36px',
            textAlign: 'center',
            position: 'relative',
            background: 'var(--glass-bg)',
            boxShadow: '0 25px 60px -15px rgba(139, 92, 246, 0.25), 0 0 35px rgba(244, 114, 182, 0.15)',
            border: '2px solid var(--glass-border)',
          }}
        >
          {/* Floating Pure Star Icons (CSS & SVG only) */}
          <div
            className="animate-float"
            style={{
              position: 'absolute',
              top: '24px',
              left: '36px',
              fontSize: '1.4rem',
              color: '#FBBF24',
              userSelect: 'none',
            }}
          >
            ✨
          </div>
          <div
            className="animate-float-delayed"
            style={{
              position: 'absolute',
              top: '28px',
              right: '40px',
              fontSize: '1.4rem',
              color: '#F472B6',
              userSelect: 'none',
            }}
          >
            ⭐
          </div>
          <div
            className="animate-float"
            style={{
              position: 'absolute',
              bottom: '28px',
              left: '42px',
              fontSize: '1.2rem',
              color: '#A855F7',
              userSelect: 'none',
            }}
          >
            💫
          </div>
          <div
            className="animate-float-delayed"
            style={{
              position: 'absolute',
              bottom: '28px',
              right: '42px',
              fontSize: '1.3rem',
              color: '#38BDF8',
              userSelect: 'none',
            }}
          >
            ✦
          </div>

          {/* Animated Thank You Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 22px',
              borderRadius: '9999px',
              background: 'var(--primary-subtle)',
              border: '1.5px solid var(--glass-border)',
              color: 'var(--primary)',
              fontSize: '0.92rem',
              fontWeight: 700,
              marginBottom: '24px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(139, 92, 246, 0.15)',
              transition: 'transform 0.2s ease',
            }}
            onClick={triggerConfetti}
            title="Click for a sparkle celebration!"
          >
            <Sparkles size={16} />
            <span>Thank You for Stopping By</span>
            <Heart size={15} fill="currentColor" />
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: 'clamp(2.3rem, 5vw, 3.4rem)',
              lineHeight: 1.2,
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
            }}
          >
            Thanks for visiting my little world! ♡
          </h2>

          {/* Inspiring Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              maxWidth: '680px',
              margin: '0 auto 38px auto',
              fontWeight: 500,
            }}
          >
            “Every great idea starts with a little curiosity. Let's create something wonderful together.”
          </p>

          {/* Interactive Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '32px',
            }}
          >
            <button
              onClick={() => onNavigate('hero')}
              className="btn-primary"
              style={{
                padding: '14px 28px',
                fontSize: '1.02rem',
              }}
            >
              <ArrowUp size={18} />
              <span>Back to Home</span>
            </button>

            <a
              href="https://github.com/vyshnavireddy-ctrl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{
                padding: '13px 24px',
                fontSize: '1rem',
              }}
            >
              <GithubIcon size={18} />
              <span>Visit My GitHub</span>
            </a>

            <a
              href="mailto:vyshnavireddy720@gmail.com"
              className="btn-secondary"
              style={{
                padding: '13px 24px',
                fontSize: '1rem',
              }}
            >
              <Mail size={18} />
              <span>Email Me</span>
            </a>
          </div>

          {/* Social Profiles Row: LinkedIn, Instagram, GitHub */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 22px',
              borderRadius: '9999px',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
            }}
          >
            <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-muted)', marginRight: '4px' }}>
              Connect with me:
            </span>

            <a
              href="https://www.linkedin.com/in/vyshnavi-reddy-7ba6703b0?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#0284C7',
                fontSize: '0.88rem',
                fontWeight: 600,
                padding: '4px 10px',
                borderRadius: '8px',
                background: 'rgba(56, 189, 248, 0.1)',
                transition: 'transform 0.2s',
              }}
              title="LinkedIn Profile"
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <LinkedinIcon size={16} color="#0284C7" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://www.instagram.com/vyshu_491?mdxt=NHpkbHVzd2V0Ym9r"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#E11D48',
                fontSize: '0.88rem',
                fontWeight: 600,
                padding: '4px 10px',
                borderRadius: '8px',
                background: 'rgba(244, 114, 182, 0.15)',
                transition: 'transform 0.2s',
              }}
              title="Instagram Profile"
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <InstagramIcon size={16} color="#E11D48" />
              <span>Instagram</span>
            </a>

            <a
              href="https://github.com/vyshnavireddy-ctrl"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--primary)',
                fontSize: '0.88rem',
                fontWeight: 600,
                padding: '4px 10px',
                borderRadius: '8px',
                background: 'var(--primary-subtle)',
                transition: 'transform 0.2s',
              }}
              title="GitHub Profile"
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
