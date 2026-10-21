import React, { useState } from 'react';
import { Sparkles, Code2, Layout, Terminal, GitBranch, Cpu, Wrench, Layers } from 'lucide-react';

export default function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const skills = [
    {
      id: 'c',
      name: 'C Language',
      category: 'programming',
      categoryLabel: 'Programming',
      icon: <Terminal size={28} color="#2563EB" />,
      color: '#2563EB',
      bgColor: '#DBEAFE',
      summary: 'Procedural programming, memory fundamentals, logic building, and problem-solving in college CSE coursework.',
      tags: ['Data Types', 'Pointers', 'Control Structures', 'Problem Solving'],
    },
    {
      id: 'java',
      name: 'Java',
      category: 'programming',
      categoryLabel: 'Programming',
      icon: <Code2 size={28} color="#EA580C" />,
      color: '#EA580C',
      bgColor: '#FFEDD5',
      summary: 'Object-Oriented Programming (OOP), class hierarchies, exception handling, and structured software development.',
      tags: ['OOP Concepts', 'Classes & Objects', 'Collections', 'Core Logic'],
    },
    {
      id: 'python',
      name: 'Python',
      category: 'programming',
      categoryLabel: 'Programming',
      icon: <Terminal size={28} color="#10B981" />,
      color: '#059669',
      bgColor: '#D1FAE5',
      summary: 'High-level scripting, rapid prototyping, data structures, and exploratory development for interactive projects.',
      tags: ['Scripting', 'Data Handling', 'Clean Syntax', 'Algorithms'],
    },
    {
      id: 'html',
      name: 'HTML5',
      category: 'frontend',
      categoryLabel: 'Frontend',
      icon: <Layout size={28} color="#EA580C" />,
      color: '#EA580C',
      bgColor: '#FFEDD5',
      summary: 'Semantic markup, accessible structure, modern forms, media embedding, and responsive document foundations.',
      tags: ['Semantic Elements', 'Web Accessibility', 'Forms & Inputs', 'SEO Basics'],
    },
    {
      id: 'css',
      name: 'CSS3',
      category: 'frontend',
      categoryLabel: 'Frontend',
      icon: <PaletteIcon size={28} color="#0284C7" />,
      color: '#0284C7',
      bgColor: '#E0F2FE',
      summary: 'Custom responsive styling, Flexbox, Grid, keyframe animations, glassmorphism, and modern UI tokens.',
      tags: ['Flexbox & Grid', 'Keyframe Animations', 'Glassmorphism', 'Responsive Media Queries'],
    },
    {
      id: 'javascript',
      name: 'JavaScript (ES6+)',
      category: 'frontend',
      categoryLabel: 'Frontend',
      icon: <Code2 size={28} color="#D97706" />,
      color: '#D97706',
      bgColor: '#FEF3C7',
      summary: 'Dynamic DOM manipulation, event-driven interactions, asynchronous operations, array methods, and game logic.',
      tags: ['DOM Manipulation', 'Event Handling', 'ES6+ Syntax', 'Interactive Logic'],
    },
    {
      id: 'vscode',
      name: 'VS Code',
      category: 'tools',
      categoryLabel: 'Tools & Platforms',
      icon: <Wrench size={28} color="#0284C7" />,
      color: '#0284C7',
      bgColor: '#E0F2FE',
      summary: 'Primary code editor configured with modern extensions, live debugging, syntax highlighting, and integrated terminal.',
      tags: ['Code Editing', 'Extensions', 'Debugging', 'Integrated Terminal'],
    },
    {
      id: 'antigravity',
      name: 'Antigravity IDE',
      category: 'tools',
      categoryLabel: 'Tools & Platforms',
      icon: <Cpu size={28} color="#7C3AED" />,
      color: '#7C3AED',
      bgColor: '#EDE9FE',
      summary: 'Next-generation AI-assisted developer environment used for rapid iterative building and engineering workflows.',
      tags: ['Agentic Workflows', 'Pair Programming', 'Rapid Prototyping', 'Modern IDE'],
    },
    {
      id: 'github',
      name: 'GitHub & Git',
      category: 'tools',
      categoryLabel: 'Tools & Platforms',
      icon: <GitBranch size={28} color="#4C1D95" />,
      color: '#4C1D95',
      bgColor: '#F3E8FF',
      summary: 'Version control, repository management, tracking code commits, and sharing open-source projects online.',
      tags: ['Version Control', 'Repositories', 'Branching', 'Open Source'],
    },
  ];

  const filteredSkills = activeFilter === 'all'
    ? skills
    : skills.filter((s) => s.category === activeFilter);

  return (
    <section
      id="skills"
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
            <Layers size={14} />
            <span>Technical Foundation</span>
          </div>
          <h2 className="section-title">My Technical Skills</h2>
          <p className="section-subtitle">
            Core technologies and development tools I use to study computer science, write programs, and craft interactive websites.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '40px',
          }}
        >
          {[
            { id: 'all', label: 'All Technologies' },
            { id: 'programming', label: 'Programming' },
            { id: 'frontend', label: 'Frontend Development' },
            { id: 'tools', label: 'Tools & Platforms' },
          ].map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                style={{
                  padding: '9px 20px',
                  borderRadius: '9999px',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: isActive ? '#ffffff' : '#5B487A',
                  background: isActive
                    ? 'linear-gradient(135deg, #7C3AED, #A855F7)'
                    : 'rgba(255, 255, 255, 0.8)',
                  border: isActive ? '1px solid #7C3AED' : '1px solid rgba(221, 214, 254, 0.7)',
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

        {/* Skills Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap: '24px',
          }}
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="glass-panel"
              style={{
                padding: '28px 24px',
                borderRadius: '24px',
                background: 'rgba(255, 255, 255, 0.82)',
                border: '1.5px solid rgba(255, 255, 255, 0.95)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = skill.color;
                e.currentTarget.style.boxShadow = `0 16px 36px -8px ${skill.color}35`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.95)';
                e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
              }}
            >
              {/* Top Row: Icon + Category Badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '18px',
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '16px',
                    background: skill.bgColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  {skill.icon}
                </div>
                <span
                  style={{
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: skill.color,
                    background: 'rgba(255, 255, 255, 0.9)',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    border: `1px solid ${skill.bgColor}`,
                  }}
                >
                  {skill.categoryLabel}
                </span>
              </div>

              {/* Skill Name */}
              <h3
                style={{
                  fontSize: '1.25rem',
                  color: '#2E1065',
                  marginBottom: '10px',
                }}
              >
                {skill.name}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.92rem',
                  lineHeight: 1.65,
                  color: '#5B487A',
                  marginBottom: '20px',
                  flexGrow: 1,
                }}
              >
                {skill.summary}
              </p>

              {/* Tags */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  marginTop: 'auto',
                }}
              >
                {skill.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: '#6B5B95',
                      background: '#F3E8FF',
                      padding: '4px 10px',
                      borderRadius: '8px',
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PaletteIcon({ size, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.5-.7 1.5-1.5 0-.4-.2-.8-.4-1.1-.3-.4-.4-.8-.4-1.4 0-1.1.9-2 2-2h2.4c3.3 0 6-2.7 6-6 0-5.5-5.1-10-11.1-10z"/>
    </svg>
  );
}
