import React, { useRef, useState } from 'react';
import { Sparkles, ArrowRight, Mail, User, Code, Heart, Play, Pause, Volume2, VolumeX, Award, BookOpen } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function HeroSection({ isMuted, setIsMuted, onNavigate }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSparkleClick = () => {
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#A855F7', '#EC4899', '#38BDF8', '#FDE047'],
      });
    } catch {
      // ignore
    }
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '130px',
        paddingBottom: '80px',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Introduction & CTA */}
          <div style={{ maxWidth: '620px' }}>
            {/* Cute Status Pill */}
            <div
              className="glass-pill"
              style={{
                marginBottom: '20px',
                padding: '8px 18px',
                cursor: 'pointer',
              }}
              onClick={handleSparkleClick}
            >
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#10B981',
                  boxShadow: '0 0 10px #10B981',
                  display: 'inline-block',
                }}
              />
              <span>Open to learning & creative building</span>
              <Sparkles size={16} color="#EC4899" />
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
                lineHeight: 1.15,
                marginBottom: '20px',
                fontWeight: 700,
                color: '#2E1065',
              }}
            >
              Hi, I'm <span style={{
                background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 50%, #38BDF8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Vyshu</span> — a developer with a creative spark.
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                lineHeight: 1.7,
                color: '#5B487A',
                marginBottom: '32px',
                fontWeight: 400,
              }}
            >
              I'm a CSE student who loves learning, building interactive websites, and turning creative ideas into digital experiences.
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                alignItems: 'center',
                marginBottom: '38px',
              }}
            >
              <button
                onClick={() => onNavigate('projects')}
                className="btn-primary"
              >
                <span>Explore My Projects</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="btn-secondary"
              >
                <User size={18} />
                <span>About Me</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="btn-secondary"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </button>

              <a
                href="https://github.com/vyshnavireddy-ctrl"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '13px 18px' }}
                title="GitHub Profile"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/vyshnavi-reddy-7ba6703b0?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '13px 18px', color: '#0284C7' }}
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={18} color="#0284C7" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://www.instagram.com/vyshu_491?mdxt=NHpkbHVzd2V0Ym9r"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '13px 18px', color: '#E11D48' }}
                title="Instagram Profile"
              >
                <InstagramIcon size={18} color="#E11D48" />
                <span>Instagram</span>
              </a>
            </div>

            {/* Quick Academic Highlights Bar */}
            <div
              className="glass-panel"
              style={{
                padding: '16px 22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.7)',
                border: '1px solid rgba(221, 214, 254, 0.6)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    padding: '8px',
                    borderRadius: '12px',
                    background: '#EDE9FE',
                    color: '#7C3AED',
                    display: 'flex',
                  }}
                >
                  <BookOpen size={18} />
                </span>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#7E7097', fontWeight: 600, textTransform: 'uppercase' }}>College</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#2E1065' }}>Narasaraopeta Eng. College</div>
                </div>
              </div>

              <div style={{ width: '1px', height: '28px', background: '#E9D5FF' }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    padding: '8px',
                    borderRadius: '12px',
                    background: '#FCE7F3',
                    color: '#DB2777',
                    display: 'flex',
                  }}
                >
                  <Award size={18} />
                </span>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#7E7097', fontWeight: 600, textTransform: 'uppercase' }}>1st Sem CGPA</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#DB2777' }}>9.10 / 10.0</div>
                </div>
              </div>

              <div style={{ width: '1px', height: '28px', background: '#E9D5FF' }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    padding: '8px',
                    borderRadius: '12px',
                    background: '#E0F2FE',
                    color: '#0284C7',
                    display: 'flex',
                  }}
                >
                  <Code size={18} />
                </span>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#7E7097', fontWeight: 600, textTransform: 'uppercase' }}>Major</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0369A1' }}>B.Tech CSE (2024–Pres.)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Chibi Character in 3D-Like Showcase */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Ambient Background Blur Aura */}
            <div
              style={{
                position: 'absolute',
                width: '380px',
                height: '380px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(244, 114, 182, 0.25) 50%, transparent 70%)',
                filter: 'blur(40px)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 0,
              }}
            />

            {/* Main Character Frame */}
            <div
              className="glass-panel"
              style={{
                position: 'relative',
                zIndex: 2,
                borderRadius: '36px',
                padding: '16px',
                maxWidth: '430px',
                width: '100%',
                boxShadow: '0 25px 60px -10px rgba(139, 92, 246, 0.28), 0 0 30px rgba(244, 114, 182, 0.2)',
                background: 'rgba(255, 255, 255, 0.82)',
                border: '2px solid rgba(255, 255, 255, 0.95)',
              }}
            >
              {/* Video / Character Visual */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1 / 1.05',
                  borderRadius: '26px',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #F3E8FF, #FCE7F3)',
                  boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.05)',
                }}
              >
                <video
                  ref={videoRef}
                  src="/assets/chibi_waving.mp4"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="auto"
                  disablePictureInPicture
                  controlsList="nodownload noplaybackrate nofullscreen"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                />

                {/* Video Controls Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(8px)',
                    padding: '6px 12px',
                    borderRadius: '9999px',
                    border: '1px solid rgba(255, 255, 255, 0.9)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <button
                    onClick={togglePlay}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#4C1D95',
                    }}
                    title={isPlaying ? 'Pause Video' : 'Play Video'}
                  >
                    {isPlaying ? <Pause size={15} /> : <Play size={15} />}
                  </button>
                  <div style={{ width: '1px', height: '14px', background: '#D8B4FE' }} />
                  <button
                    onClick={() => {
                      if (videoRef.current) {
                        videoRef.current.muted = !isMuted;
                      }
                      setIsMuted(!isMuted);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#4C1D95',
                    }}
                    title={isMuted ? 'Unmute Video' : 'Mute Video'}
                  >
                    {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                  </button>
                </div>
              </div>

              {/* Character Card Footer */}
              <div
                style={{
                  padding: '16px 12px 6px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: '#2E1065', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    Vyshu's Mascot <Sparkles size={16} color="#EC4899" />
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#7E7097' }}>
                    Waving & spreading positivity ✨
                  </p>
                </div>
                <button
                  onClick={handleSparkleClick}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '9999px',
                    background: '#EDE9FE',
                    color: '#7C3AED',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    border: '1px solid #DDD6FE',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <Heart size={14} fill="#7C3AED" /> Cheer!
                </button>
              </div>

              {/* Floating Skill Badges Around Character (Desktop Parallax Vibe) */}
              <div
                className="animate-float"
                style={{
                  position: 'absolute',
                  top: '-18px',
                  left: '-22px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  boxShadow: '0 8px 24px rgba(139, 92, 246, 0.2)',
                  border: '1.5px solid #DDD6FE',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  color: '#7C3AED',
                  zIndex: 3,
                }}
              >
                <span>🎓 CSE @ NEC</span>
              </div>

              <div
                className="animate-float-delayed"
                style={{
                  position: 'absolute',
                  bottom: '70px',
                  left: '-26px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  boxShadow: '0 8px 24px rgba(236, 72, 153, 0.2)',
                  border: '1.5px solid #FBCFE8',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  color: '#DB2777',
                  zIndex: 3,
                }}
              >
                <span>⭐ CGPA: 9.10</span>
              </div>

              <div
                className="animate-float"
                style={{
                  position: 'absolute',
                  top: '40px',
                  right: '-24px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  boxShadow: '0 8px 24px rgba(56, 189, 248, 0.2)',
                  border: '1.5px solid #BAE6FD',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  color: '#0284C7',
                  zIndex: 3,
                }}
              >
                <span>💻 Frontend Lover</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
