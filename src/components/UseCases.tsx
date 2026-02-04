import ScrollReveal from './ScrollReveal';

const useCases = [
  {
    industry: "Car Dealership",
    problem: "Inventory scattered across spreadsheets, manual lead follow-ups, no visibility into sales pipeline.",
    solution: "Unified dashboard connecting inventory, leads, and follow-up automation. Every inquiry gets instant response.",
    results: ["Inventory synced in real-time", "Automated lead nurturing", "Full pipeline visibility"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    industry: "E-Commerce",
    problem: "Orders from multiple channels, manual inventory updates, customer support drowning in repetitive questions.",
    solution: "Central order management with automated stock sync. AI chatbot handles most routine support queries.",
    results: ["Multi-channel order sync", "Automated inventory updates", "AI-powered support"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    industry: "Agency / Consulting",
    problem: "Client data in 10 different tools, invoices created manually, no clear overview of project profitability.",
    solution: "Unified client portal with automated time tracking, invoicing, and profitability dashboards.",
    results: ["Single source of truth", "Automated invoicing", "Real-time profitability"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function UseCases() {
  return (
    <section className="section-padding relative">
      <div className="container-custom">
        {/* Section header */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-2 text-gray-100 mb-4">
              What We <span className="text-accent-400">Build</span>
            </h2>
            <p className="text-body">
              Example solutions for common business challenges.
            </p>
          </div>
        </ScrollReveal>

        {/* Use cases */}
        <div className="grid lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <ScrollReveal key={index} delay={index * 150}>
            <div
              className="glass-card p-6 hover:border-accent-500/30 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent-500/10 text-accent-400 rounded-lg flex items-center justify-center group-hover:bg-accent-500/20 transition-all">
                  {useCase.icon}
                </div>
                <span className="text-sm font-semibold text-accent-400 uppercase tracking-wider">
                  {useCase.industry}
                </span>
              </div>

              {/* Problem */}
              <div className="mb-4">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Challenge</span>
                <p className="text-gray-400 text-sm mt-1">{useCase.problem}</p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <span className="text-xs font-medium text-accent-500 uppercase tracking-wider">Solution</span>
                <p className="text-gray-300 text-sm mt-1">{useCase.solution}</p>
              </div>

              {/* Results */}
              <div className="mt-auto pt-4 border-t border-gray-800/50">
                <ul className="space-y-2">
                  {useCase.results.map((result, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4 text-accent-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-400">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-gray-600 mt-8">
          These are just examples — we build solutions for any industry.
        </p>
      </div>
    </section>
  );
}
