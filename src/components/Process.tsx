import ScrollReveal from './ScrollReveal';

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Free consultation to understand your workflows, pain points, and goals. We identify what to automate and what to build.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Proposal",
    description: "Clear scope, fixed price, realistic timeline. No surprises. You know exactly what you're getting before we start.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Build",
    description: "We build iteratively with regular updates. You see progress, give feedback, and stay in control throughout.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We deploy, test, and hand over. Then we stick around for support, updates, and future iterations.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20 -z-10" />

      <div className="container-custom">
        {/* Section header - LEFT aligned */}
        <ScrollReveal variant="fade-left">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-sm text-accent-400 tracking-widest uppercase">{'// Process'}</span>
            <h2 className="heading-2 text-gray-100 mt-2">
              How We <span className="text-accent-400">Work</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 150} variant={index % 2 === 0 ? 'fade-left' : 'fade-right'}>
              <div className="relative flex gap-6 sm:gap-8">
                {/* Timeline connector */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-400 font-mono font-bold text-sm shrink-0 group-hover:bg-accent-500/20 transition-all">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px flex-1 min-h-[60px] bg-gradient-to-b from-accent-500/20 to-transparent" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-12">
                  <h3 className="heading-3 text-gray-100 mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            Start with a Free Call
          </a>
        </div>
      </div>
    </section>
  );
}
