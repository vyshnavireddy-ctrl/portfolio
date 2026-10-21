import React, { useState, useRef } from 'react';
import { Sparkles, ArrowRight, FastForward, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function IntroScreen({ onEnter }) {
  const [isExiting, setIsExiting] = useState(false);
  const videoRef = useRef(null);

  const handleEnter = () => {
    // Confetti celebration
    try {
      confetti({
        particleCount: 70,
        spread: 90,
        origin: { y: 0.65 },
        colors: ['#A855F7', '#EC4899', '#38BDF8', '#FDE047', '#C084FC'],
      });
    } catch {
      // ignore
    }

    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 600);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(ellipse at 50% 40%, #FAF5FF 0%, #F3E8FF 50%, #E9D5FF 100%)',
        opacity: isExiting ? 0 : 1,
        transform: isExiting ? 'scale(1.05)' : 'scale(1)',
        transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        overflow: 'hidden',
        padding: '20px',
      }}
    >
      {/* Dreamy Ambient Glow Circles */}
      <div
        style={{
          position: 'absolute',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192, 132, 252, 0.35) 0%, transparent 70%)',
          filter: 'blur(50px)',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244, 114, 182, 0.25) 0%, transparent 70%)',
          filter: 'blur(60px)',
          bottom: '10%',
          right: '25%',
          pointerEvents: 'none',
        }}
      />

      {/* Main Welcome Card */}
      <div
        className="glass-panel"
        style={{
          maxWidth: '620px',
          width: '100%',
          padding: '42px 30px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 5,
          background: 'rgba(255, 255, 255, 0.9)',
          boxShadow: '0 25px 60px -15px rgba(147, 51, 234, 0.25), 0 0 40px rgba(236, 72, 153, 0.15)',
          borderRadius: '34px',
          border: '2px solid rgba(255, 255, 255, 0.95)',
        }}
      >
        {/* Animated Character Showcase - Pure Video (Completely Muted & Silent) */}
        <div
          style={{
            position: 'relative',
            width: '210px',
            height: '210px',
            margin: '0 auto 20px auto',
          }}
        >
          {/* Glowing Ring Halo */}
          <div
            style={{
              position: 'absolute',
              inset: '-12px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.5), rgba(244, 114, 182, 0.5), rgba(56, 189, 248, 0.4))',
              filter: 'blur(12px)',
              animation: 'gentlePulse 2.8s infinite',
            }}
          />

          {/* Character Container - Pure Video Only */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid #ffffff',
              boxShadow: '0 12px 32px rgba(139, 92, 246, 0.3)',
              backgroundColor: '#EDE9FE',
            }}
          >
            <video
              ref={videoRef}
              src="/assets/chibi_waving.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
              controlsList="nodownload noplaybackrate nofullscreen"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: 'scale(1.08)',
                display: 'block',
              }}
            />
          </div>

          {/* Floating Star Badges */}
          <div
            style={{
              position: 'absolute',
              top: '-4px',
              left: '-6px',
              background: '#ffffff',
              color: '#F59E0B',
              padding: '6px 10px',
              borderRadius: '9999px',
              fontSize: '0.9rem',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            }}
          >
            ⭐
          </div>
          <div
            style={{
              position: 'absolute',
              top: '10px',
              right: '-8px',
              background: '#ffffff',
              color: '#EC4899',
              padding: '6px 10px',
              borderRadius: '9999px',
              fontSize: '0.85rem',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            }}
          >
            ✨
          </div>
        </div>

        {/* Text Content */}
        <div style={{ marginBottom: '28px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: 'rgba(237, 233, 254, 0.85)',
              padding: '6px 16px',
              borderRadius: '9999px',
              color: '#7C3AED',
              fontSize: '0.86rem',
              fontWeight: 700,
              marginBottom: '12px',
              border: '1px solid rgba(196, 181, 253, 0.6)',
            }}
          >
            <Heart size={14} fill="#EC4899" color="#EC4899" />
            <span>CSE Student & Creative Developer</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.1rem, 4.8vw, 2.85rem)',
              color: '#2E1065',
              lineHeight: 1.2,
              marginBottom: '10px',
              letterSpacing: '-0.02em',
            }}
          >
            Hey there, I'm Vyshu!
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2.4vw, 1.22rem)',
              color: '#6B5B95',
              fontWeight: 500,
            }}
          >
            Welcome to my creative world ✨
          </p>
        </div>

        {/* Interactive Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Primary Button: Enter My World */}
          <button
            onClick={handleEnter}
            className="btn-primary"
            style={{
              width: '100%',
              maxWidth: '350px',
              padding: '16px 32px',
              fontSize: '1.12rem',
              gap: '12px',
            }}
          >
            <Sparkles size={20} />
            <span>Enter My World ✨</span>
            <ArrowRight size={20} />
          </button>

          {/* Secondary Action: Skip Intro */}
          <button
            onClick={handleEnter}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              color: '#7E7097',
              fontSize: '0.9rem',
              fontWeight: 600,
              padding: '8px 14px',
              borderRadius: '9999px',
              transition: 'color 0.2s',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#7C3AED')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#7E7097')}
          >
            <FastForward size={15} />
            <span>Skip Intro</span>
          </button>
        </div>
      </div>
    </div>
  );
}
