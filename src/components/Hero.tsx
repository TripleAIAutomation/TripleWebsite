import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-50 -z-10" />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-electric-500/10 rounded-full blur-[100px] -z-10" />

      {/* Flow animation to dashboard */}
      <div className="hero-flow pointer-events-none">
        <div className="hero-dashboard">
          <div className="hero-dashboard-header">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-dashboard-body">
            <div className="hero-dashboard-line" />
            <div className="hero-dashboard-line short" />
            <div className="hero-dashboard-line" />
          </div>
        </div>

        <div className="hero-flow-item flow-1">
          <div className="hero-flow-card">
            <div className="hero-flow-dot" />
            <div className="hero-flow-stack">
              <div className="hero-flow-bar" />
              <div className="hero-flow-bar alt" />
            </div>
            <div className="hero-flow-chip">CRM</div>
          </div>
        </div>
        <div className="hero-flow-item flow-2">
          <div className="hero-flow-card">
            <div className="hero-flow-dot" />
            <div className="hero-flow-stack">
              <div className="hero-flow-bar" />
              <div className="hero-flow-bar alt" />
            </div>
            <div className="hero-flow-chip">Analytics</div>
          </div>
        </div>
        <div className="hero-flow-item flow-3">
          <div className="hero-flow-card">
            <div className="hero-flow-dot" />
            <div className="hero-flow-stack">
              <div className="hero-flow-bar" />
              <div className="hero-flow-bar alt" />
            </div>
            <div className="hero-flow-chip">Ops</div>
          </div>
        </div>
        <div className="hero-flow-item flow-4">
          <div className="hero-flow-card">
            <div className="hero-flow-dot" />
            <div className="hero-flow-stack">
              <div className="hero-flow-bar" />
              <div className="hero-flow-bar alt" />
            </div>
            <div className="hero-flow-chip">Finance</div>
          </div>
        </div>
        <div className="hero-flow-item flow-5">
          <div className="hero-flow-card">
            <div className="hero-flow-dot" />
            <div className="hero-flow-stack">
              <div className="hero-flow-bar" />
              <div className="hero-flow-bar alt" />
            </div>
            <div className="hero-flow-chip">Support</div>
          </div>
        </div>
        <div className="hero-flow-item flow-6">
          <div className="hero-flow-card">
            <div className="hero-flow-dot" />
            <div className="hero-flow-stack">
              <div className="hero-flow-bar" />
              <div className="hero-flow-bar alt" />
            </div>
            <div className="hero-flow-chip">Sales</div>
          </div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="hero-animate hero-animate-delay-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800/80 border border-gray-700/50 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span className="text-sm text-gray-300 font-medium">
              Next-gen business automation
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-animate hero-animate-delay-1 heading-1 text-gray-100 mb-6">
            Your Business.{' '}
            <span className="text-accent-400 text-glow">Automated.</span>
          </h1>

          {/* Subline */}
          <p className="hero-animate hero-animate-delay-2 text-body max-w-2xl mx-auto mb-10">
            We build custom dashboards and automations that replace your scattered tools
            with one clean platform — designed for how you actually work.
          </p>

          {/* CTAs */}
          <div className="hero-animate hero-animate-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="btn-primary text-base">
              Book a Free Call
            </Link>
            <Link href="#services" className="btn-secondary text-base">
              See What We Build
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
