import React, { useState, useEffect } from 'react';
import { Sparkles, Info, CheckCircle2, Clock, X, Ticket, BookMarked, Keyboard, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const categoryFilters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-dev', label: 'Web Development' },
    { id: 'ai-learning', label: 'AI & Learning' },
    { id: 'interactive', label: 'Interactive Websites' },
  ];

  const projects = [
    {
      id: 'event-tickets',
      title: 'Event Ticket Booking Platform',
      tagline: 'Interactive seat selection & event discovery platform',
      status: 'Implemented',
      statusColor: '#10B981',
      categories: ['web-dev', 'interactive'],
      icon: <Ticket size={28} color="#7C3AED" />,
      color: '#7C3AED',
      gradient: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
      repoUrl: 'https://github.com/vyshnavireddy-ctrl/Event_ticket_booking_platform1',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Git'],
      summary:
        'A responsive event discovery and ticket reservation web application where users can search events, browse listings with dates and venues, interactively pick seats, and view dynamic booking summaries.',
      features: [
        'Event search and real-time category filtering',
        'Detailed event listings with date, location, pricing, and category',
        'Interactive visual seat map with real-time selection and availability highlights',
        'Dynamic booking summary calculation and confirmation interface',
        'Mobile-friendly responsive UI crafted with clean CSS',
        'Version control and code history tracked on GitHub',
      ],
      plannedFeatures: [
        'Payment gateway integration mock',
        'Downloadable printable PDF ticket receipt',
        'User profile order history and saved tickets',
      ],
      architecture:
        'Built with vanilla JavaScript DOM manipulation, event delegation for seat grid selection, and CSS Grid/Flexbox for a responsive card layout.',
    },
    {
      id: 'smart-vocab',
      title: 'Smart Vocabulary Trainer (LexiSphere AI)',
      tagline: 'AI-assisted English vocabulary exploration & spaced repetition',
      status: 'In Development / Concept',
      statusColor: '#F59E0B',
      categories: ['ai-learning', 'web-dev'],
      icon: <BookMarked size={28} color="#DB2777" />,
      color: '#DB2777',
      gradient: 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)',
      repoUrl: 'https://github.com/vyshnavireddy-ctrl/lexisphere-AI',
      tech: ['JavaScript', 'Python (Planned)', 'Streamlit (Planned)', 'Min-Heap', 'OpenAI API'],
      summary:
        'An engaging vocabulary learning project designed to make learning new English words intuitive. Features smart word exploration, AI mnemonics concept, spaced repetition review algorithms, and interactive learning analytics.',
      features: [
        'Curated vocabulary search and comprehensive definitions',
        'Example sentence exploration and part-of-speech categorization',
        'Concept design for AI-generated memory hooks & mnemonics',
        'Interactive vocabulary quiz and practice modes',
        'Modular repository structure with active development updates',
      ],
      plannedFeatures: [
        'Python & Streamlit interactive dashboard integration',
        'Min-Heap priority queue for optimized spaced-repetition review scheduling',
        'OpenAI API integration for personalized contextual sentence generation',
        'Matplotlib progress charts and mastery level rewards',
      ],
      architecture:
        'Combines frontend UI prototyping with planned Python data structures (Min-Heap spaced repetition) and AI API hooks for mnemonic generation.',
    },
    {
      id: 'type-blitz',
      title: 'Type Blitz',
      tagline: 'Interactive typing speed test & keyboard practice platform',
      status: 'Implemented',
      statusColor: '#10B981',
      categories: ['interactive', 'web-dev'],
      icon: <Keyboard size={28} color="#0284C7" />,
      color: '#0284C7',
      gradient: 'linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)',
      repoUrl: 'https://github.com/vyshnavireddy-ctrl/Type-Blitz',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'DOM Events'],
      summary:
        'An interactive typing test website designed to help users measure and improve their typing speed, accuracy, and keyboard fluency through timed practice challenges and instant feedback.',
      features: [
        'Live typing test engine with real-time character-by-character validation',
        'Dynamic WPM (Words Per Minute) calculation and accuracy rate scoring',
        'Engaging visual feedback with correct/incorrect highlighting',
        'Restart and try-again functionality with fresh passage prompts',
        'Clean, distraction-free lavender-tinted user interface',
      ],
      plannedFeatures: [
        'Custom user passage input for specialized practice',
        'Difficulty modes: Easy, Medium, and Code snippets',
        'Local storage high score leaderboard',
      ],
      architecture:
        'Utilizes JavaScript input and keydown event listeners to calculate elapsed time, correct character keystrokes, and dynamic accuracy percentage in real-time.',
    },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.categories.includes(activeCategory));

  return (
    <section
      id="projects"
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
            <span>Interactive Portfolio</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Hands-on projects I have built and conceptualized during my Computer Science journey, exploring frontend interfaces, interactive algorithms, and AI concepts.
          </p>
        </div>

        {/* Project Category Filters */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '40px',
          }}
        >
          {categoryFilters.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                style={{
                  padding: '9px 20px',
                  borderRadius: '9999px',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  background: isActive
                    ? 'linear-gradient(135deg, #7C3AED, #A855F7)'
                    : 'var(--glass-bg)',
                  border: isActive ? '1px solid #7C3AED' : '1px solid var(--glass-border)',
                  boxShadow: isActive
                    ? '0 6px 18px rgba(124, 58, 237, 0.3)'
                    : '0 2px 8px rgba(139, 92, 246, 0.06)',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '30px',
          }}
        >
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="glass-panel"
              style={{
                borderRadius: '28px',
                padding: '28px',
                background: 'var(--glass-bg)',
                border: '1.5px solid var(--glass-border)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = proj.color;
                e.currentTarget.style.boxShadow = `0 20px 40px -10px ${proj.color}35`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
              }}
            >
              {/* Card Banner / Header Preview */}
              <div
                style={{
                  height: '140px',
                  borderRadius: '20px',
                  background: proj.gradient,
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                  position: 'relative',
                  overflow: 'hidden',
                  color: '#ffffff',
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedProject(proj)}
                title="Click to view full architecture & details"
              >
                {/* Decorative background circles */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.15)',
                    pointerEvents: 'none',
                  }}
                />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1 }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '14px',
                      background: 'rgba(255, 255, 255, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    }}
                  >
                    {proj.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      background: 'rgba(255, 255, 255, 0.25)',
                      backdropFilter: 'blur(8px)',
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      border: '1px solid rgba(255, 255, 255, 0.4)',
                    }}
                  >
                    {proj.status}
                  </span>
                </div>

                <div style={{ zIndex: 1 }}>
                  <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 700 }}>
                    {proj.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.9)', marginTop: '2px' }}>
                    {proj.tagline}
                  </p>
                </div>
              </div>

              {/* Summary Description */}
              <p
                style={{
                  fontSize: '0.94rem',
                  lineHeight: 1.65,
                  color: 'var(--text-secondary)',
                  marginBottom: '20px',
                  flexGrow: 1,
                }}
              >
                {proj.summary}
              </p>

              {/* Technologies */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  marginBottom: '24px',
                }}
              >
                {proj.tech.map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: proj.color,
                      background: 'var(--primary-subtle)',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      border: '1px solid var(--glass-border)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginTop: 'auto',
                }}
              >
                <a
                  href={proj.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    flex: 1,
                    padding: '11px 18px',
                    fontSize: '0.92rem',
                    background: proj.gradient,
                  }}
                >
                  <GithubIcon size={16} />
                  <span>View on GitHub</span>
                </a>

                <button
                  onClick={() => setSelectedProject(proj)}
                  className="btn-secondary"
                  style={{
                    padding: '11px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  title="View Project Architecture & Details"
                  aria-label="View Project Architecture & Details"
                >
                  <Info size={17} color="var(--primary)" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal with Escape Key & Accessible Overlay */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            background: 'rgba(15, 7, 33, 0.65)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-panel"
            style={{
              maxWidth: '650px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              borderRadius: '28px',
              background: 'var(--modal-bg)',
              padding: '34px 28px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)',
              position: 'relative',
              border: '2px solid var(--glass-border)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--primary-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                transition: 'all 0.2s',
              }}
              title="Close modal (Esc)"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '16px',
                  background: 'var(--primary-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {selectedProject.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', lineHeight: 1.2 }}>
                  {selectedProject.title}
                </h3>
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: selectedProject.statusColor,
                  }}
                >
                  ● {selectedProject.status}
                </span>
              </div>
            </div>

            {/* Description */}
            <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
              {selectedProject.summary}
            </p>

            {/* Tech Stack */}
            <div style={{ marginBottom: '22px' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>
                Technologies Used
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedProject.tech.map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: selectedProject.color,
                      background: 'var(--primary-subtle)',
                      padding: '5px 12px',
                      borderRadius: '8px',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div style={{ marginBottom: '22px' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>
                Key Implemented Features
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {selectedProject.features.map((f, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Planned Features (Roadmap) */}
            {selectedProject.plannedFeatures && selectedProject.plannedFeatures.length > 0 && (
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>
                  Planned Concept / Next Milestones
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {selectedProject.plannedFeatures.map((pf, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                      <Clock size={16} color="#F59E0B" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{pf}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Note */}
            <div
              style={{
                padding: '14px 18px',
                borderRadius: '14px',
                background: 'var(--primary-subtle)',
                border: '1px solid var(--glass-border)',
                fontSize: '0.88rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '24px',
              }}
            >
              <strong style={{ color: 'var(--text-primary)' }}>Technical Notes: </strong>
              {selectedProject.architecture}
            </div>

            {/* Modal Bottom Action */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href={selectedProject.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  width: '100%',
                  background: selectedProject.gradient,
                  padding: '12px 24px',
                }}
              >
                <GithubIcon size={18} />
                <span>Open Repository on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
