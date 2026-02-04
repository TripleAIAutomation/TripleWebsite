import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900/50 -z-10" />

      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-accent-400 uppercase tracking-wider">
              About
            </span>
            <h2 className="heading-2 text-gray-100 mt-2">
              The Person Behind TripleSystems
            </h2>
          </div>
          </ScrollReveal>

          {/* Founder section */}
          <ScrollReveal>
          <div className="glass-card p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Avatar */}
              <div className="shrink-0">
                <div className="w-28 h-28 bg-gradient-to-br from-accent-500/20 to-accent-500/5 rounded-2xl flex items-center justify-center border border-accent-500/20">
                  <span className="text-4xl font-bold text-accent-400">D</span>
                </div>
              </div>

              {/* Bio */}
              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-1">Deniz</h3>
                <p className="text-accent-400 text-sm mb-4">Founder, 20</p>
                <div className="space-y-3 text-gray-400">
                  <p>
                    Self-taught builder focused on real-world results.
                  </p>
                  <p>
                    I started TripleSystems because I wanted to build something real. Not just
                    freelance gigs, but a company that solves actual problems for businesses
                    that are tired of duct-taped solutions.
                  </p>
                  <p className="text-gray-300">
                    When I take on a project, I go all in: clear scope, fast execution,
                    measurable results.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>

          {/* Values / Approach */}
          <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-accent-500/10 text-accent-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-100 mb-2">Straight Talk</h3>
              <p className="text-sm text-gray-500">
                No corporate jargon, no runaround. You&apos;ll always know exactly where we stand.
              </p>
            </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-accent-500/10 text-accent-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-100 mb-2">Hungry</h3>
              <p className="text-sm text-gray-500">
                High ownership and full focus. I treat every project like it&apos;s my own.
              </p>
            </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-accent-500/10 text-accent-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-100 mb-2">Built to Last</h3>
              <p className="text-sm text-gray-500">
                Modern stack, clean code, proper architecture. Systems that scale with you.
              </p>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
