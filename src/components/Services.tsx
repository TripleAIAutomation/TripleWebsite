import ScrollReveal from './ScrollReveal';

const services = [
  {
    title: "Custom Dashboards",
    subtitle: "Your Business, One Platform",
    description:
      "We build custom dashboards that unite all your tools and data. CRM, analytics, automation – everything in one place.",
    stats: [
      { value: "Multiple Tools", label: "→ 1 Dashboard" },
      { value: "Hours", label: "→ Minutes" },
      { value: "Near", label: "Real-time" },
    ],
    features: [
      "All tools in one dashboard",
      "Real-time analytics & KPIs",
      "AI-powered insights",
      "CRM & finance integration",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {/* Bar chart icon */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 21h18M6 21V10M12 21V3M18 21V14"
        />
      </svg>
    ),
  },
  {
    title: "Individual Automations",
    subtitle: "Powered by N8N",
    description:
      "You don't need a full app? No problem. We also build individual automations that optimize specific processes – fast and straightforward.",
    stats: [
      { value: "10+ hrs", label: "saved / week" },
      { value: "Hundreds", label: "Integrations" },
      { value: "Zero", label: "Manual Work" },
    ],
    features: [
      "Quick implementation",
      "500+ app integrations",
      "Custom workflows",
      "Scalable on demand",
    ],
    icon: (
      <img
        src="/n8n-logo.svg"
        alt="n8n logo"
        className="w-8 h-8 rounded"
      />
    ),
  },
];

export default function Services() {
  const variants = ['fade-left', 'fade-right'] as const;

  return (
    <section id="services" className="section-padding relative">
      <div className="container-custom">
        {/* Section header - left aligned */}
        <ScrollReveal variant="fade-left">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-sm text-accent-400 tracking-widest uppercase">{'// Services'}</span>
            <h2 className="heading-2 text-gray-100 mt-2">
              What we <span className="text-accent-400">build.</span>
            </h2>
            <p className="text-body mt-4">
              Custom solutions for your business – from complete platforms to
              individual automations.
            </p>
          </div>
        </ScrollReveal>

        {/* Services cards - asymmetric 5-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div key={index} className={index === 0 ? 'lg:col-span-3' : 'lg:col-span-2'}>
            <ScrollReveal delay={index * 200} variant={variants[index]}>
            <div
              className="glass-card p-8 hover:border-accent-500/30 transition-all duration-300 group relative overflow-hidden h-full"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-accent-500/10 text-accent-400 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent-500/20 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] transition-all">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="heading-3 text-gray-100">{service.title}</h3>
                    <span className="text-sm text-accent-400 font-medium">
                      {service.subtitle}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6">{service.description}</p>

                {/* Stats */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {service.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="bg-accent-500/10 border border-accent-500/20 rounded-lg px-3 py-2 text-center"
                    >
                      <span className="text-accent-400 font-bold font-mono text-sm">{stat.value}</span>
                      <span className="text-gray-400 text-sm ml-1">{stat.label}</span>
                    </div>
                  ))}
                </div>

                {/* Features list */}
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-accent-500 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </ScrollReveal>
            </div>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <p className="text-center text-gray-500 mt-12">
          Not sure what you need?{" "}
          <a
            href="#contact"
            className="text-accent-400 hover:text-accent-300 transition-colors"
          >
            Let&apos;s talk
          </a>{" "}
          – we&apos;ll find the right solution.
        </p>
      </div>
    </section>
  );
}
