import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, X, ChevronUp, MessageCircleHeart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ChibiCompanion({ activeSection }) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isHappy, setIsHappy] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Dynamic dialogue reacting to the user's current scroll section
  const getDialogue = () => {
    switch (activeSection) {
      case 'hero':
        return 'Welcome to my magical world! Scroll down to explore~ ♡';
      case 'about':
        return 'Learn all about my journey & passions in CSE! 🌸';
      case 'skills':
        return 'I love coding in Java, Python, Web & Three.js! 💻✨';
      case 'projects':
        return 'Click any project card to see all the details! 🚀';
      case 'education':
        return 'Proud of my 9.10 CGPA at Narasaraopeta Eng. College! 🎓';
      case 'contact':
        return 'Feel free to send a message or connect on LinkedIn! ✉️';
      case 'thanks':
        return 'Thank you for visiting my little world! (´｡• ᵕ •｡`) ♡';
      default:
        return 'Enjoying your stay in Lavender Dream? ✨';
    }
  };

  const handlePetClick = (e) => {
    e.stopPropagation();
    setIsHappy(true);
    setClickCount((prev) => prev + 1);

    // Heart explosion confetti
    try {
      confetti({
        particleCount: 25,
        spread: 60,
        origin: { x: 0.9, y: 0.8 },
        colors: ['#F472B6', '#EC4899', '#C084FC', '#FDE047'],
        shapes: ['circle'],
        scalar: 0.9,
      });
    } catch {
      // ignore
    }

    setTimeout(() => {
      setIsHappy(false);
    }, 1200);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '88px',
        right: '28px',
        zIndex: 895,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        pointerEvents: 'auto',
      }}
    >
      {isMinimized ? (
        /* Minimized Star Badge */
        <button
          onClick={() => setIsMinimized(false)}
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(10px)',
            border: '2px solid #C4B5FD',
            color: '#7C3AED',
            boxShadow: '0 4px 16px rgba(139, 92, 246, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1) rotate(12deg)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1) rotate(0deg)')}
          title="Open Mini Vyshu Companion"
          aria-label="Open Companion"
        >
          <Sparkles size={20} color="#8B5CF6" />
        </button>
      ) : (
        /* Full Chibi Companion Box */
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            maxWidth: '260px',
            position: 'relative',
          }}
        >
          {/* Reactive Speech Bubble */}
          <div
            className="glass-panel"
            style={{
              padding: '10px 14px',
              borderRadius: '18px 18px 4px 18px',
              background: 'rgba(255, 255, 255, 0.95)',
              boxShadow: '0 8px 24px rgba(139, 92, 246, 0.22)',
              border: '1.5px solid rgba(216, 180, 254, 0.8)',
              marginBottom: '10px',
              fontSize: '0.84rem',
              color: '#2E1065',
              fontWeight: 600,
              lineHeight: 1.4,
              position: 'relative',
              animation: 'fadeInUp 0.3s ease',
              cursor: 'pointer',
            }}
            onClick={handlePetClick}
            title="Click me for love!"
          >
            {isHappy ? (
              <span style={{ color: '#DB2777', fontWeight: 700 }}>
                💖 Yay! Love you! Click count: {clickCount} ♡
              </span>
            ) : (
              getDialogue()
            )}

            {/* Bubble Tail */}
            <div
              style={{
                position: 'absolute',
                bottom: '-6px',
                right: '24px',
                width: '10px',
                height: '10px',
                background: '#ffffff',
                borderRight: '1.5px solid rgba(216, 180, 254, 0.8)',
                borderBottom: '1.5px solid rgba(216, 180, 254, 0.8)',
                transform: 'rotate(45deg)',
              }}
            />
          </div>

          {/* Mini Character Container & Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => setIsMinimized(true)}
              style={{
                background: 'rgba(255, 255, 255, 0.85)',
                border: '1px solid #E9D5FF',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#7E7097',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#7C3AED')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#7E7097')}
              title="Minimize Companion"
            >
              <X size={13} />
            </button>

            {/* Chibi Character Avatar */}
            <div
              onClick={handlePetClick}
              style={{
                position: 'relative',
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2.5px solid #ffffff',
                boxShadow: isHappy
                  ? '0 0 20px rgba(244, 114, 182, 0.8)'
                  : '0 6px 18px rgba(139, 92, 246, 0.35)',
                cursor: 'pointer',
                transform: isHappy ? 'scale(1.18) rotate(-6deg)' : 'scale(1)',
                transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease',
                backgroundColor: '#EDE9FE',
              }}
              title="Tap me to send love! ♡"
            >
              <video
                src="/assets/chibi_waving.mp4"
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: 'scale(1.15)',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
