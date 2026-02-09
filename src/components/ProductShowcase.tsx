'use client';

import { useState, useEffect, useRef } from 'react';
import ScrollReveal from './ScrollReveal';
import Image from 'next/image';

const navItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    image: '/dashboard.png',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: 'control',
    label: 'Control',
    image: '/control.png',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    id: 'crm',
    label: 'CRM',
    image: '/crm.png',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 'email',
    label: 'Email',
    image: '/email.png',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const features = [
  {
    title: "Financial Intelligence",
    description: "Track revenue and expenses with predictive forecasting. Complete financial visibility.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "AI-Powered CRM",
    description: "Smart lead scoring identifies high-value opportunities. AI generates personalized outreach.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Email Integration",
    description: "Automatic sync with your inbox. Every conversation tracked and searchable.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "AI Assistant",
    description: "Query your data in natural language. Get instant insights and recommendations.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    title: "Workflow Automation",
    description: "Connect and automate across your entire stack. Eliminate repetitive tasks.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Real-time Analytics",
    description: "Live dashboards and KPIs. Make data-driven decisions in real-time.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function ProductShowcase() {
  const [activeView, setActiveView] = useState('dashboard');
  const [showHint, setShowHint] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const demoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasInteracted) {
          setTimeout(() => setShowHint(true), 500);
        }
      },
      { threshold: 0.5 }
    );

    if (demoRef.current) {
      observer.observe(demoRef.current);
    }

    return () => observer.disconnect();
  }, [hasInteracted]);

  const handleNavClick = (id: string) => {
    setActiveView(id);
    setHasInteracted(true);
    setShowHint(false);
  };

  return (
    <section id="product" className="section-padding relative">
      <div className="container-custom">
        {/* Section header */}
        <ScrollReveal variant="fade-left">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-sm text-accent-400 tracking-widest uppercase">{'// Portfolio'}</span>
            <h2 className="heading-2 text-gray-100 mt-2">
              See What We&apos;ve <span className="text-accent-400">Built</span>
            </h2>
            <p className="text-body mt-4">
              An internal project we developed to showcase what&apos;s possible —
              a fully functional business platform with CRM, analytics, and automation.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Demo */}
        <ScrollReveal>
        <div className="relative mb-20" ref={demoRef}>
          <div className="glass-card p-4 sm:p-6 shadow-2xl shadow-accent-500/5">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-800/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 h-6 bg-dark-700 rounded-md mx-4 flex items-center px-3">
                <span className="text-xs text-gray-500 font-mono">app.triple-dev.de</span>
              </div>
            </div>

            {/* App content with sidebar */}
            <div className="relative flex bg-dark-900 rounded-lg overflow-hidden" style={{ aspectRatio: '16/10' }}>
              {/* Interactive hint - appears on scroll */}
              <div
                className={`absolute left-14 sm:left-16 top-24 z-20 transition-all duration-500 pointer-events-none ${
                  showHint
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-4'
                }`}
              >
                <div className="relative bg-accent-500 text-dark-900 px-4 py-2 rounded-lg shadow-lg shadow-accent-500/30">
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-accent-500" />
                  <p className="text-sm font-semibold whitespace-nowrap">Click here to navigate</p>
                  <p className="text-xs opacity-80">This demo is interactive!</p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="w-14 sm:w-16 bg-dark-950 border-r border-gray-800/50 flex flex-col items-center py-4 gap-1 shrink-0">
                {/* Logo placeholder */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent-500/20 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-accent-400 font-bold text-sm">T</span>
                </div>

                {/* Nav items */}
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex flex-col items-center justify-center gap-0.5 transition-all cursor-pointer ${
                      activeView === item.id
                        ? 'bg-accent-500/20 text-accent-400'
                        : 'text-gray-500 hover:text-gray-300 hover:bg-dark-800'
                    }`}
                  >
                    {item.icon}
                    <span className="text-[9px] sm:text-[10px] font-medium">{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Main content area with image */}
              <div className="flex-1 relative overflow-hidden">
                {navItems.map((item) => (
                  <div
                    key={item.id}
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      activeView === item.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={`${item.label} view`}
                      fill
                      className="object-contain object-left-top"
                      sizes="(max-width: 768px) 100vw, 80vw"
                      priority={item.id === 'dashboard'}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-accent-500/20 to-violet-500/20 rounded-3xl -z-10 blur-3xl opacity-30" />
        </div>
        </ScrollReveal>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => {
            const isWide = index === 0 || index === 5;
            return (
              <div key={index} className={isWide ? 'sm:col-span-2' : ''}>
                <ScrollReveal delay={index * 100} variant={index === 0 ? 'scale-up' : 'fade-up'}>
                  <div className="group p-6 rounded-xl border border-gray-800/30 hover:border-accent-500/20 bg-dark-800/20 hover:bg-dark-800/40 transition-all duration-500 h-full">
                    <div className="w-12 h-12 bg-accent-500/10 text-accent-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-500/20 group-hover:scale-110 transition-all duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="heading-3 text-gray-100 mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
