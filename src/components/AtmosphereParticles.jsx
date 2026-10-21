import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Flower2, CircleDot, X } from 'lucide-react';

export default function AtmosphereParticles({ theme }) {
  const [effect, setEffect] = useState(() => {
    return localStorage.getItem('vyshu_atmosphere_effect') || 'sakura';
  });
  const [isOpen, setIsOpen] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('vyshu_atmosphere_effect', effect);
  }, [effect]);

  useEffect(() => {
    if (effect === 'none') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle Classes based on effect
    const particles = [];
    const count = effect === 'sakura' ? 24 : effect === 'stardust' ? 36 : 20;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 6,
        speedX: effect === 'bubbles' ? (Math.random() - 0.5) * 0.8 : Math.random() * 1.5 - 0.5,
        speedY: effect === 'bubbles' ? -(Math.random() * 1.2 + 0.6) : Math.random() * 1.2 + 0.8,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
        opacity: Math.random() * 0.6 + 0.3,
        color:
          effect === 'sakura'
            ? ['#FBCFE8', '#F472B6', '#E9D5FF', '#FCE7F3'][Math.floor(Math.random() * 4)]
            : effect === 'stardust'
            ? ['#FDE047', '#C084FC', '#38BDF8', '#FFFFFF'][Math.floor(Math.random() * 4)]
            : ['rgba(216, 180, 254, 0.45)', 'rgba(244, 114, 182, 0.4)', 'rgba(56, 189, 248, 0.35)'][Math.floor(Math.random() * 3)],
      });
    }

    const drawSakuraPetal = (x, y, size, rotation, color, opacity) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.globalAlpha = opacity;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(size / 2, -size / 2, size, -size / 4, size, size / 2);
      ctx.bezierCurveTo(size, size, size / 2, size * 1.2, 0, size);
      ctx.bezierCurveTo(-size / 2, size * 1.2, -size, size, -size, size / 2);
      ctx.bezierCurveTo(-size, -size / 4, -size / 2, -size / 2, 0, 0);
      ctx.fill();
      ctx.restore();
    };

    const drawStar = (x, y, size, opacity, color) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.globalAlpha = opacity;
      ctx.fillStyle = color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = color;
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        ctx.lineTo(Math.cos(((18 + i * 72) * Math.PI) / 180) * size, -Math.sin(((18 + i * 72) * Math.PI) / 180) * size);
        ctx.lineTo(Math.cos(((54 + i * 72) * Math.PI) / 180) * (size / 2), -Math.sin(((54 + i * 72) * Math.PI) / 180) * (size / 2));
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const drawBubble = (x, y, size, opacity, color) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.strokeStyle = color;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Bubble shine highlight
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.beginPath();
      ctx.arc(x - size * 0.35, y - size * 0.35, size * 0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        if (effect === 'bubbles') {
          // Bubbles float upward
          if (p.y + p.size < 0) {
            p.y = height + p.size;
            p.x = Math.random() * width;
          }
        } else {
          // Petals & stars drift down
          if (p.y - p.size > height) {
            p.y = -p.size;
            p.x = Math.random() * width;
          }
        }

        if (p.x - p.size > width) p.x = -p.size;
        if (p.x + p.size < 0) p.x = width + p.size;

        if (effect === 'sakura') {
          drawSakuraPetal(p.x, p.y, p.size, p.rotation, p.color, p.opacity);
        } else if (effect === 'stardust') {
          drawStar(p.x, p.y, p.size * 0.75, p.opacity, p.color);
        } else if (effect === 'bubbles') {
          drawBubble(p.x, p.y, p.size, p.opacity, p.color);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [effect]);

  return (
    <>
      {/* Atmosphere Particle Canvas Overlay */}
      {effect !== 'none' && (
        <canvas
          ref={canvasRef}
          style={{
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 4,
          }}
        />
      )}

      {/* Floating Atmosphere Controller Pill */}
      <div
        style={{
          position: 'fixed',
          bottom: '28px',
          left: '28px',
          zIndex: 890,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        {isOpen ? (
          <div
            className="glass-panel"
            style={{
              padding: '6px 12px',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 8px 24px rgba(139, 92, 246, 0.25)',
              border: '1.5px solid rgba(255, 255, 255, 0.9)',
              background: 'rgba(255, 255, 255, 0.92)',
              animation: 'fadeInUp 0.25s ease',
            }}
          >
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#7C3AED', paddingLeft: '4px' }}>
              Atmosphere:
            </span>

            <button
              onClick={() => setEffect('sakura')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                padding: '5px 10px',
                borderRadius: '9999px',
                border: 'none',
                background: effect === 'sakura' ? 'linear-gradient(135deg, #F472B6, #EC4899)' : 'transparent',
                color: effect === 'sakura' ? '#ffffff' : '#5B487A',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              title="Sakura Breeze"
            >
              <Flower2 size={13} />
              <span>Sakura</span>
            </button>

            <button
              onClick={() => setEffect('stardust')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                padding: '5px 10px',
                borderRadius: '9999px',
                border: 'none',
                background: effect === 'stardust' ? 'linear-gradient(135deg, #8B5CF6, #A855F7)' : 'transparent',
                color: effect === 'stardust' ? '#ffffff' : '#5B487A',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              title="Stardust"
            >
              <Sparkles size={13} />
              <span>Stardust</span>
            </button>

            <button
              onClick={() => setEffect('bubbles')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                padding: '5px 10px',
                borderRadius: '9999px',
                border: 'none',
                background: effect === 'bubbles' ? 'linear-gradient(135deg, #38BDF8, #818CF8)' : 'transparent',
                color: effect === 'bubbles' ? '#ffffff' : '#5B487A',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              title="Pastel Bubbles"
            >
              <CircleDot size={13} />
              <span>Bubbles</span>
            </button>

            <button
              onClick={() => setEffect('none')}
              style={{
                padding: '5px 8px',
                borderRadius: '9999px',
                border: 'none',
                background: effect === 'none' ? '#E2E8F0' : 'transparent',
                color: effect === 'none' ? '#475569' : '#94A3B8',
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
              title="Turn Off Atmosphere"
            >
              Off
            </button>

            <button
              onClick={() => setIsOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                border: 'none',
                color: '#94A3B8',
                cursor: 'pointer',
                padding: '4px',
              }}
              title="Close"
            >
              <X size={15} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(10px)',
              border: '1.5px solid rgba(216, 180, 254, 0.7)',
              boxShadow: '0 4px 16px rgba(139, 92, 246, 0.2)',
              color: '#7C3AED',
              fontSize: '0.84rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0px)')}
            title="Change Dream Atmosphere"
          >
            {effect === 'sakura' ? (
              <Flower2 size={16} color="#EC4899" />
            ) : effect === 'stardust' ? (
              <Sparkles size={16} color="#8B5CF6" />
            ) : effect === 'bubbles' ? (
              <CircleDot size={16} color="#38BDF8" />
            ) : (
              <Sparkles size={16} color="#94A3B8" />
            )}
            <span>
              {effect === 'sakura'
                ? '🌸 Sakura Sky'
                : effect === 'stardust'
                ? '✨ Stardust'
                : effect === 'bubbles'
                ? '🫧 Bubbles'
                : 'Sky Effect'}
            </span>
          </button>
        )}
      </div>
    </>
  );
}
