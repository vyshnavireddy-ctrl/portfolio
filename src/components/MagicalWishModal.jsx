import React, { useState, useEffect } from 'react';
import { Star, Sparkles, X, Heart, RotateCcw, Wand2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const WISHES = [
  "✨ May your code compile cleanly on the first try!",
  "🌸 Every expert was once a beginner dreaming under the stars.",
  "💫 A creative idea you have today will turn into something wonderful!",
  "☕ May your coffee be sweet and your bugs vanish like magic!",
  "🌟 Keep building with curiosity — the world needs your unique perspective!",
  "💖 Believe in your magic — great things take time, persistence, and passion.",
  "🚀 You are capable of solving whatever challenges come your way!",
  "🎀 Code with love, design with empathy, and dream in pastel lavender.",
];

export default function MagicalWishModal({ isOpen, onClose }) {
  const [wishCount, setWishCount] = useState(() => {
    return parseInt(localStorage.getItem('vyshu_wishes_count') || '1', 10);
  });
  const [currentWish, setCurrentWish] = useState('');
  const [isWishing, setIsWishing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Pick random wish
      const random = WISHES[Math.floor(Math.random() * WISHES.length)];
      setCurrentWish(random);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleMakeWish = () => {
    setIsWishing(true);
    const newCount = wishCount + 1;
    setWishCount(newCount);
    localStorage.setItem('vyshu_wishes_count', newCount.toString());

    // Star Confetti
    try {
      confetti({
        particleCount: 45,
        spread: 80,
        origin: { y: 0.55 },
        colors: ['#FDE047', '#A855F7', '#EC4899', '#38BDF8'],
      });
    } catch {
      // ignore
    }

    // Pick new wish
    setTimeout(() => {
      const remaining = WISHES.filter((w) => w !== currentWish);
      const random = remaining[Math.floor(Math.random() * remaining.length)];
      setCurrentWish(random);
      setIsWishing(false);
    }, 400);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: 'rgba(30, 10, 60, 0.45)',
        backdropFilter: 'blur(8px)',
        animation: 'fadeIn 0.25s ease',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          maxWidth: '460px',
          width: '100%',
          padding: '36px 28px',
          borderRadius: '32px',
          textAlign: 'center',
          position: 'relative',
          background: 'rgba(255, 255, 255, 0.95)',
          boxShadow: '0 25px 60px rgba(139, 92, 246, 0.35)',
          border: '2px solid rgba(255, 255, 255, 0.95)',
          animation: 'scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'rgba(237, 233, 254, 0.8)',
            border: 'none',
            color: '#7C3AED',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(90deg)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotate(0deg)')}
          title="Close Wish Modal"
        >
          <X size={18} />
        </button>

        {/* Floating Wishing Star Avatar */}
        <div
          onClick={handleMakeWish}
          style={{
            width: '90px',
            height: '90px',
            margin: '0 auto 16px auto',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FDE047, #F59E0B)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 30px rgba(245, 158, 11, 0.45)',
            border: '4px solid #ffffff',
            cursor: 'pointer',
            transform: isWishing ? 'scale(1.2) rotate(35deg)' : 'scale(1) rotate(0deg)',
            transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
          title="Tap to make a wish!"
        >
          <Star size={48} fill="#ffffff" color="#ffffff" />
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: '1.5rem',
            color: '#2E1065',
            fontWeight: 700,
            marginBottom: '6px',
          }}
        >
          Make a Magical Wish ✨
        </h3>
        <p style={{ color: '#7E7097', fontSize: '0.9rem', marginBottom: '22px' }}>
          Tap the golden star to receive a positive affirmation!
        </p>

        {/* Wish Fortune Box */}
        <div
          style={{
            background: 'linear-gradient(135deg, #FAF5FF, #FCE7F3)',
            borderRadius: '20px',
            padding: '20px 18px',
            border: '1.5px solid #E9D5FF',
            marginBottom: '22px',
            boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.03)',
            minHeight: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p
            style={{
              fontSize: '1.02rem',
              fontWeight: 700,
              color: '#5B21B6',
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            {currentWish}
          </p>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button
            onClick={handleMakeWish}
            className="btn-primary"
            style={{
              padding: '12px 24px',
              fontSize: '0.95rem',
              gap: '8px',
            }}
          >
            <Wand2 size={18} />
            <span>Cast Another Wish ⭐</span>
          </button>
        </div>

        {/* Wish Counter Badge */}
        <div style={{ marginTop: '16px', fontSize: '0.8rem', color: '#8B5CF6', fontWeight: 600 }}>
          Wishes granted in this world: <strong>{wishCount}</strong> 💫
        </div>
      </div>
    </div>
  );
}
