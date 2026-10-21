import React from 'react';
import { GraduationCap, Palette, BrainCircuit, Users, MapPin, Mail, Sparkles, BookOpen, Heart, Code2 } from 'lucide-react';

export default function AboutSection() {
  const cards = [
    {
      icon: <GraduationCap size={28} color="#7C3AED" />,
      tag: 'Academic Roots',
      title: 'Educational Journey',
      description:
        'Currently pursuing my B.Tech in Computer Science and Engineering at Narasaraopeta Engineering College (2024–Present), achieving a 9.10 CGPA in my first semester. Built a rigorous foundation with 98% in Class XII (VIT College) and 96% in Class X (Oxford School).',
      accentColor: '#7C3AED',
      bgColor: '#EDE9FE',
    },
    {
      icon: <Palette size={28} color="#DB2777" />,
      tag: 'Creative Spark',
      title: 'Interest in Tech & Design',
      description:
        'I am deeply drawn to the intersection of clean code and cute, delightful user interfaces. I love building responsive web experiences where typography, smooth animations, and glassmorphic aesthetics turn ordinary screens into memorable digital spaces.',
      accentColor: '#DB2777',
      bgColor: '#FCE7F3',
    },
    {
      icon: <BrainCircuit size={28} color="#0284C7" />,
      tag: 'Continuous Growth',
      title: 'My Learning Mindset',
      description:
        'As an aspiring engineer, I view every challenge as a stepping stone. Whether mastering procedural programming logic in C, practicing frontend workflows with HTML, CSS, and modern JavaScript, or exploring AI-assisted concepts, I approach tech with curiosity and consistency.',
      accentColor: '#0284C7',
      bgColor: '#E0F2FE',
    },
    {
      icon: <Users size={28} color="#059669" />,
      tag: 'Collaboration',
      title: 'Teamwork & Building',
      description:
        'Building meaningful software is a team sport. I enjoy collaborating with fellow students, sharing feedback, brainstorming user-centric solutions, and using version control with Git and GitHub to keep projects organised and forward-moving.',
      accentColor: '#059669',
      bgColor: '#D1FAE5',
    },
  ];

  return (
    <section
      id="about"
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
            <span>Discover My Journey</span>
          </div>
          <h2 className="section-title">A Little About Me</h2>
          <p className="section-subtitle">
            I'm R. Vyshnavi (Vyshu), a CSE student at Narasaraopeta Engineering College passionate about programming, responsive frontend design, and building creative web applications.
          </p>
        </div>

        {/* Profile Snapshot Bar */}
        <div
          className="glass-panel"
          style={{
            padding: '24px 30px',
            marginBottom: '40px',
            background: 'rgba(255, 255, 255, 0.85)',
            borderRadius: '24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '16px',
                background: '#F3E8FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#7C3AED',
              }}
            >
              <Heart size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#7E7097', fontWeight: 600, textTransform: 'uppercase' }}>Full Name</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#2E1065' }}>R. Vyshnavi (Vyshu)</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '16px',
                background: '#FCE7F3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#DB2777',
              }}
            >
              <GraduationCap size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#7E7097', fontWeight: 600, textTransform: 'uppercase' }}>Current Degree</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#2E1065' }}>B.Tech CSE (1st Sem 9.10)</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '16px',
                background: '#E0F2FE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0284C7',
              }}
            >
              <MapPin size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#7E7097', fontWeight: 600, textTransform: 'uppercase' }}>Location</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#2E1065' }}>Narasaraopet, AP, India</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '16px',
                background: '#D1FAE5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#059669',
              }}
            >
              <Code2 size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#7E7097', fontWeight: 600, textTransform: 'uppercase' }}>Core Focus</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#2E1065' }}>Frontend & C Programming</div>
            </div>
          </div>
        </div>

        {/* 4 Thematic 3D-Styled Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '24px',
          }}
        >
          {cards.map((c, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '32px 26px',
                borderRadius: '26px',
                background: 'rgba(255, 255, 255, 0.8)',
                border: '1.5px solid rgba(255, 255, 255, 0.9)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = c.accentColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.9)';
              }}
            >
              {/* Header Icon + Tag */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '18px',
                    background: c.bgColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  {c.icon}
                </div>
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: c.accentColor,
                    background: 'rgba(255, 255, 255, 0.9)',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    border: `1px solid ${c.bgColor}`,
                  }}
                >
                  {c.tag}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '1.3rem',
                  color: '#2E1065',
                  marginBottom: '14px',
                }}
              >
                {c.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.96rem',
                  lineHeight: 1.7,
                  color: '#5B487A',
                  flexGrow: 1,
                }}
              >
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
