import React, { useState, useEffect } from 'react';
import ThreeDreamScene from './components/ThreeDreamScene';
import CursorSparkles from './components/CursorSparkles';
import IntroScreen from './components/IntroScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import ThankYouSection from './components/ThankYouSection';
import Footer from './components/Footer';
import AtmosphereParticles from './components/AtmosphereParticles';
import ChibiCompanion from './components/ChibiCompanion';
import MagicalWishModal from './components/MagicalWishModal';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isWishModalOpen, setIsWishModalOpen] = useState(false);

  // Theme Management (Lavender Dream vs Midnight Lavender)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('vyshu_portfolio_theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('vyshu_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Scroll Spy & Scroll Progress Indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(scrollPercent);

      setShowBackToTop(totalScroll > 350);

      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact', 'thanks'];
      const scrollPos = totalScroll + 250;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Scroll Progress Bar at very top */}
      <div className="scroll-progress-container" aria-hidden="true">
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 3D Three.js Interactive Dream Canvas */}
      <ThreeDreamScene theme={theme} />

      {/* Dream Atmosphere Particles (Sakura, Stardust, Pastel Bubbles) */}
      <AtmosphereParticles theme={theme} />

      {/* Magical Desktop Cursor Sparkle Trail */}
      <CursorSparkles />

      {/* Cinematic Welcome Intro Screen */}
      {showIntro && (
        <IntroScreen
          onEnter={() => setShowIntro(false)}
        />
      )}

      {/* Main Website Structure */}
      <Navbar
        isMuted={isMuted}
        setIsMuted={setIsMuted}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenWishModal={() => setIsWishModalOpen(true)}
      />

      <main>
        <HeroSection
          isMuted={isMuted}
          setIsMuted={setIsMuted}
          onNavigate={handleNavigate}
        />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
        <ThankYouSection onNavigate={handleNavigate} />
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Reactive Mini Chibi Companion Widget */}
      <ChibiCompanion activeSection={activeSection} />

      {/* Magical Star Wish & Positive Affirmation Modal */}
      <MagicalWishModal
        isOpen={isWishModalOpen}
        onClose={() => setIsWishModalOpen(false)}
      />

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(139, 92, 246, 0.45)',
            border: '2px solid rgba(255, 255, 255, 0.85)',
            zIndex: 900,
            cursor: 'pointer',
            transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
          title="Back to Top"
          aria-label="Back to Top"
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px) scale(1.08)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0px) scale(1)')}
        >
          <ArrowUp size={22} />
        </button>
      )}
    </div>
  );
}
