import ScrollReveal from './ScrollReveal';

const problems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    problem: "Scattered across 10+ tools",
    solution: "Everything in one dashboard",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    problem: "Hours lost on manual processes",
    solution: "Intelligent automation",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    problem: "No visibility into operations",
    solution: "Real-time insights & forecasting",
  },
];

export default function ProblemSolution() {
  const variants = ['scale-up', 'fade-right', 'fade-up'] as const;

  return (
    <section id="features" className="section-padding relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid opacity-30 -z-10" />

      <div className="container-custom">
        {/* Section header - left aligned */}
        <ScrollReveal variant="fade-left">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-sm text-accent-400 tracking-widest uppercase">{'// Features'}</span>
            <h2 className="heading-2 text-gray-100 mt-2">
              Less Tools. <span className="text-accent-400">More Control.</span>
            </h2>
            <p className="text-body mt-4">
              Modern businesses need modern infrastructure.
              We built the control center your operations deserve.
            </p>
          </div>
        </ScrollReveal>

        {/* Problem -> Solution cards - asymmetric Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {problems.map((item, index) => (
            <div key={index} className={index === 0 ? 'md:col-span-2' : index === 2 ? 'md:col-span-3' : ''}>
            <ScrollReveal delay={index * 150} variant={variants[index]}>
              {/* Card 0: large featured, spans 2 cols */}
              {index === 0 && (
                <div className="gradient-border rounded-2xl glass-card p-8 hover:border-accent-500/30 hover:-translate-y-1 transition-all duration-500 group h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-accent-500/10 text-accent-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-500/20 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all">
                    {item.icon}
                  </div>

                  {/* Problem */}
                  <div className="mb-4">
                    <span className="text-red-400/60 font-mono text-xs uppercase tracking-wider">
                      The Problem
                    </span>
                    <p className="text-gray-500 line-through decoration-red-500/50 mt-1">
                      {item.problem}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center my-4">
                    <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>

                  {/* Solution */}
                  <div>
                    <span className="text-accent-400 font-mono text-xs uppercase tracking-wider">
                      Our Solution
                    </span>
                    <p className="text-gray-100 font-medium mt-1">
                      {item.solution}
                    </p>
                  </div>
                </div>
              )}

              {/* Card 1: normal single col */}
              {index === 1 && (
                <div className="glass-card p-8 hover:border-accent-500/30 hover:-translate-y-1 transition-all duration-500 group h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-accent-500/10 text-accent-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-500/20 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all">
                    {item.icon}
                  </div>

                  {/* Problem */}
                  <div className="mb-4">
                    <span className="text-red-400/60 font-mono text-xs uppercase tracking-wider">
                      The Problem
                    </span>
                    <p className="text-gray-500 line-through decoration-red-500/50 mt-1">
                      {item.problem}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center my-4">
                    <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>

                  {/* Solution */}
                  <div>
                    <span className="text-accent-400 font-mono text-xs uppercase tracking-wider">
                      Our Solution
                    </span>
                    <p className="text-gray-100 font-medium mt-1">
                      {item.solution}
                    </p>
                  </div>
                </div>
              )}

              {/* Card 2: full width, horizontal layout */}
              {index === 2 && (
                <div className="glass-card p-8 hover:border-accent-500/30 hover:-translate-y-1 transition-all duration-500 group h-full flex flex-col md:flex-row items-center gap-8">
                  {/* Icon on left */}
                  <div className="w-12 h-12 bg-accent-500/10 text-accent-400 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent-500/20 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all">
                    {item.icon}
                  </div>

                  {/* Problem -> Arrow -> Solution horizontally */}
                  <div className="flex flex-col md:flex-row items-center gap-6 flex-1">
                    {/* Problem */}
                    <div>
                      <span className="text-red-400/60 font-mono text-xs uppercase tracking-wider">
                        The Problem
                      </span>
                      <p className="text-gray-500 line-through decoration-red-500/50 mt-1">
                        {item.problem}
                      </p>
                    </div>

                    {/* Arrow - horizontal on desktop */}
                    <div className="shrink-0">
                      <svg className="w-5 h-5 text-accent-500 rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>

                    {/* Solution */}
                    <div>
                      <span className="text-accent-400 font-mono text-xs uppercase tracking-wider">
                        Our Solution
                      </span>
                      <p className="text-gray-100 font-medium mt-1">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
