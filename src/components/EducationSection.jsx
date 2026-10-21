import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, Sparkles, School, BookCheck } from 'lucide-react';

export default function EducationSection() {
  const educationHistory = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Narasaraopeta Engineering College',
      location: 'Narasaraopet, Andhra Pradesh',
      duration: '2024 – Present',
      status: 'In Progress (First Year)',
      scoreLabel: 'First-Semester CGPA',
      score: '9.10 / 10.0',
      scoreColor: '#7C3AED',
      badgeBg: '#EDE9FE',
      highlights: [
        'Strong foundational coursework in C Programming, Mathematics, and Computing Essentials.',
        'Actively learning web technologies and participating in hands-on coding practice.',
        'Demonstrated early academic excellence with a 9.10 CGPA in the first semester.',
      ],
      icon: <GraduationCap size={24} color="#7C3AED" />,
    },
    {
      degree: 'Intermediate (Class XII)',
      institution: 'VIT College',
      location: 'Andhra Pradesh, India',
      duration: '2022 – 2024',
      status: 'Completed with Distinction',
      scoreLabel: 'Final Score',
      score: '98%',
      scoreColor: '#DB2777',
      badgeBg: '#FCE7F3',
      highlights: [
        'Major focus in Mathematics, Physics, and Chemistry (MPC).',
        'Achieved outstanding 98% overall aggregate score.',
        'Built analytical problem-solving foundation and discipline.',
      ],
      icon: <Award size={24} color="#DB2777" />,
    },
    {
      degree: 'Secondary School Certificate (Class X)',
      institution: 'Oxford School',
      location: 'Andhra Pradesh, India',
      duration: '2021 – 2022',
      status: 'Completed with Honors',
      scoreLabel: 'Board Score',
      score: '96%',
      scoreColor: '#0284C7',
      badgeBg: '#E0F2FE',
      highlights: [
        'Comprehensive school education with 96% board examination result.',
        'Consistently top academic rank and active participant in co-curriculars.',
      ],
      icon: <School size={24} color="#0284C7" />,
    },
  ];

  return (
    <section
      id="education"
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
            <BookCheck size={14} />
            <span>Academic Excellence</span>
          </div>
          <h2 className="section-title">Education & Milestones</h2>
          <p className="section-subtitle">
            A consistent record of dedication, discipline, and academic performance throughout school and undergraduate studies.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Vertical Connecting Line */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              bottom: '40px',
              left: '30px',
              width: '4px',
              background: 'linear-gradient(180deg, #7C3AED 0%, #EC4899 50%, #38BDF8 100%)',
              borderRadius: '9999px',
              opacity: 0.5,
            }}
            className="timeline-line"
          />

          {/* Timeline Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '38px' }}>
            {educationHistory.map((edu, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '24px',
                  position: 'relative',
                }}
              >
                {/* Node Marker */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    border: `3px solid ${edu.scoreColor}`,
                    boxShadow: `0 6px 20px ${edu.scoreColor}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    zIndex: 2,
                  }}
                  className="timeline-node"
                >
                  {edu.icon}
                </div>

                {/* Card */}
                <div
                  className="glass-panel"
                  style={{
                    flexGrow: 1,
                    padding: '30px 28px',
                    borderRadius: '26px',
                    background: 'rgba(255, 255, 255, 0.86)',
                    border: '1.5px solid rgba(255, 255, 255, 0.95)',
                    boxShadow: 'var(--glass-shadow)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = edu.scoreColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0px)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.95)';
                  }}
                >
                  {/* Top Bar with Duration & Score Pill */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      marginBottom: '14px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.86rem',
                        fontWeight: 600,
                        color: '#6B5B95',
                      }}
                    >
                      <Calendar size={15} color="#7C3AED" />
                      <span>{edu.duration}</span>
                      <span style={{ margin: '0 4px', color: '#CBD5E1' }}>•</span>
                      <span style={{ color: '#10B981', fontWeight: 700 }}>{edu.status}</span>
                    </div>

                    <div
                      style={{
                        padding: '6px 14px',
                        borderRadius: '9999px',
                        background: edu.badgeBg,
                        color: edu.scoreColor,
                        fontWeight: 800,
                        fontSize: '0.92rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        border: `1px solid ${edu.scoreColor}30`,
                      }}
                    >
                      <Sparkles size={14} />
                      <span>{edu.scoreLabel}: {edu.score}</span>
                    </div>
                  </div>

                  {/* Degree Name */}
                  <h3
                    style={{
                      fontSize: '1.35rem',
                      color: '#2E1065',
                      marginBottom: '6px',
                    }}
                  >
                    {edu.degree}
                  </h3>

                  {/* Institution & Location */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.94rem',
                      color: '#5B487A',
                      fontWeight: 600,
                      marginBottom: '18px',
                    }}
                  >
                    <span>{edu.institution}</span>
                    <span style={{ color: '#CBD5E1' }}>|</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#7E7097', fontSize: '0.88rem' }}>
                      <MapPin size={14} /> {edu.location}
                    </span>
                  </div>

                  {/* Highlights Bullet points */}
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}
                  >
                    {edu.highlights.map((h, hIdx) => (
                      <li
                        key={hIdx}
                        style={{
                          fontSize: '0.92rem',
                          lineHeight: 1.6,
                          color: '#5B487A',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '8px',
                        }}
                      >
                        <span style={{ color: edu.scoreColor, fontWeight: 700, marginTop: '-1px' }}>✦</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-line {
            left: 20px !important;
          }
          .timeline-node {
            width: 44px !important;
            height: 44px !important;
          }
        }
      `}</style>
    </section>
  );
}
