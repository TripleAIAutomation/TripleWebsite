'use client';

import { useRef, useCallback } from 'react';
import Link from 'next/link';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !dashboardRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 16;
    const rotateX = (0.5 - y) * 10;

    dashboardRef.current.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!dashboardRef.current) return;
    dashboardRef.current.style.transform = '';
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-50 -z-10" />

      {/* Gradient orbs */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-violet-500/[0.08] rounded-full blur-[100px] -z-10" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* LEFT: Text content */}
          <div className="max-w-xl">
            {/* Monospace badge */}
            <div className="hero-animate hero-animate-delay-1 mb-8">
              <span className="font-mono text-sm text-accent-400 tracking-widest uppercase">
                {'// BUSINESS AUTOMATION'}
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-animate hero-animate-delay-1 mb-6">
              <span className="block text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[1.05] text-gray-100">
                Your Business.
              </span>
              <span className="block text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[1.05] text-accent-400 text-glow hero-text-reveal">
                Automated.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-animate hero-animate-delay-2 text-body max-w-lg mb-10">
              We build custom dashboards and automations that replace your scattered tools
              with one clean platform — designed for how you actually work.
            </p>

            {/* CTAs */}
            <div className="hero-animate hero-animate-delay-3 flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn-primary text-base">
                Book a Free Call
              </Link>
              <Link href="#services" className="btn-secondary text-base">
                See What We Build
              </Link>
            </div>
          </div>

          {/* RIGHT: 3D Dashboard Mockup */}
          <div
            className="relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={containerRef}
          >
            <div className="hero-dashboard-perspective">
              <div className="hero-dashboard-3d" ref={dashboardRef}>
                {/* Glass card with browser chrome */}
                <div className="glass-card p-3 sm:p-4 shadow-2xl shadow-accent-500/10 gradient-border">
                  {/* Browser chrome bar */}
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-800/50">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 h-5 bg-dark-700 rounded-md mx-3 flex items-center px-2">
                      <span className="text-[10px] text-gray-500 font-mono">app.triple-dev.de</span>
                    </div>
                  </div>

                  {/* Dashboard mockup content */}
                  <div className="bg-dark-900 rounded-lg p-3 sm:p-4 space-y-3">
                    {/* Top row: KPI cards */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      <div className="bg-dark-800 rounded-lg p-2 sm:p-3 border border-gray-800/50">
                        <p className="text-[9px] sm:text-[10px] text-gray-500 font-mono uppercase">Revenue</p>
                        <p className="text-sm sm:text-lg font-bold text-accent-400 mt-0.5">$48.2k</p>
                        <p className="text-[9px] sm:text-[10px] text-green-400 mt-0.5">+12.5%</p>
                      </div>
                      <div className="bg-dark-800 rounded-lg p-2 sm:p-3 border border-gray-800/50">
                        <p className="text-[9px] sm:text-[10px] text-gray-500 font-mono uppercase">Leads</p>
                        <p className="text-sm sm:text-lg font-bold text-gray-100 mt-0.5">284</p>
                        <p className="text-[9px] sm:text-[10px] text-green-400 mt-0.5">+8.3%</p>
                      </div>
                      <div className="bg-dark-800 rounded-lg p-2 sm:p-3 border border-gray-800/50">
                        <p className="text-[9px] sm:text-[10px] text-gray-500 font-mono uppercase">Tasks</p>
                        <p className="text-sm sm:text-lg font-bold text-gray-100 mt-0.5">12/15</p>
                        <p className="text-[9px] sm:text-[10px] text-accent-400 mt-0.5">80%</p>
                      </div>
                    </div>

                    {/* Middle row: Chart + CRM */}
                    <div className="grid grid-cols-5 gap-2 sm:gap-3">
                      {/* Mini bar chart */}
                      <div className="col-span-3 bg-dark-800 rounded-lg p-2 sm:p-3 border border-gray-800/50">
                        <p className="text-[9px] sm:text-[10px] text-gray-500 font-mono uppercase mb-2">Monthly Revenue</p>
                        <div className="flex items-end gap-1 h-12 sm:h-16">
                          {[35, 50, 40, 65, 55, 75, 60, 85, 70, 90, 80, 95].map((h, i) => (
                            <div
                              key={i}
                              className="flex-1 rounded-sm transition-all"
                              style={{
                                height: `${h}%`,
                                background: i >= 10
                                  ? 'linear-gradient(to top, #f59e0b, #fbbf24)'
                                  : i >= 8
                                  ? 'rgba(245, 158, 11, 0.4)'
                                  : 'rgba(245, 158, 11, 0.15)',
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* CRM mini list */}
                      <div className="col-span-2 bg-dark-800 rounded-lg p-2 sm:p-3 border border-gray-800/50">
                        <p className="text-[9px] sm:text-[10px] text-gray-500 font-mono uppercase mb-2">CRM</p>
                        <div className="space-y-1.5">
                          {[
                            { name: 'Sarah M.', status: 'Hot', color: 'bg-accent-500' },
                            { name: 'Tom K.', status: 'Warm', color: 'bg-violet-500' },
                            { name: 'Lisa R.', status: 'New', color: 'bg-gray-500' },
                          ].map((lead, i) => (
                            <div key={i} className="flex items-center justify-between">
                              <span className="text-[9px] sm:text-[10px] text-gray-300 truncate">{lead.name}</span>
                              <span className={`text-[8px] sm:text-[9px] ${lead.color} text-dark-950 px-1.5 py-0.5 rounded-full font-medium`}>
                                {lead.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom row: Automation + Email */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      {/* Automations */}
                      <div className="bg-dark-800 rounded-lg p-2 sm:p-3 border border-gray-800/50">
                        <p className="text-[9px] sm:text-[10px] text-gray-500 font-mono uppercase mb-2">Automations</p>
                        <div className="space-y-1.5">
                          {[
                            { label: 'Invoice Sync', active: true },
                            { label: 'Lead Scoring', active: true },
                            { label: 'Email Follow-up', active: true },
                          ].map((auto, i) => (
                            <div key={i} className="flex items-center gap-1.5">
                              <div className={`w-1.5 h-1.5 rounded-full ${auto.active ? 'bg-green-400' : 'bg-gray-600'}`} />
                              <span className="text-[9px] sm:text-[10px] text-gray-400">{auto.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Email stats */}
                      <div className="bg-dark-800 rounded-lg p-2 sm:p-3 border border-gray-800/50">
                        <p className="text-[9px] sm:text-[10px] text-gray-500 font-mono uppercase mb-2">Email</p>
                        <div className="space-y-1.5">
                          <div className="flex justify-between">
                            <span className="text-[9px] sm:text-[10px] text-gray-400">Sent</span>
                            <span className="text-[9px] sm:text-[10px] text-gray-200 font-mono">1,247</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[9px] sm:text-[10px] text-gray-400">Open Rate</span>
                            <span className="text-[9px] sm:text-[10px] text-accent-400 font-mono">34.2%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[9px] sm:text-[10px] text-gray-400">Replies</span>
                            <span className="text-[9px] sm:text-[10px] text-gray-200 font-mono">89</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating card 1: Revenue - top right */}
                <div className="hero-float-card hero-float-delay-1 absolute -top-3 -right-3 sm:-top-4 sm:-right-4 lg:-top-6 lg:-right-6">
                  <div className="glass-card px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3 shadow-lg shadow-accent-500/10">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-[11px] text-gray-400">Revenue</p>
                      <p className="text-xs sm:text-sm font-bold text-gray-100">+27.4%</p>
                    </div>
                  </div>
                </div>

                {/* Floating card 2: New lead - bottom left */}
                <div className="hero-float-card hero-float-delay-2 absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6">
                  <div className="glass-card px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3 shadow-lg shadow-violet-500/10">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-violet-500/20 flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-[11px] text-gray-400">New Lead</p>
                      <p className="text-xs sm:text-sm font-bold text-gray-100">Sarah M.</p>
                    </div>
                  </div>
                </div>

                {/* Floating card 3: Status pill - top left */}
                <div className="hero-float-card hero-float-delay-3 absolute -top-2 left-6 sm:-top-3 sm:left-8 lg:-top-5 lg:left-12">
                  <div className="glass-card px-2.5 py-1.5 sm:px-3 sm:py-1.5 flex items-center gap-2 shadow-lg">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] sm:text-xs font-medium text-gray-300">3 automations running</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow underlay */}
            <div className="hero-dashboard-glow absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-accent-500/30 via-violet-500/20 to-accent-500/30 rounded-full blur-[60px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
