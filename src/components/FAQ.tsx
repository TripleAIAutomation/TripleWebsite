'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const faqs = [
  {
    question: "What does a project with you look like?",
    answer: "Every project starts with a free discovery call. We understand your processes, identify automation potential, and create a clear roadmap. After approval, we build iteratively with regular check-ins until launch.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Individual automations: up to 1 week. Custom dashboards: 2–4 weeks depending on complexity. We'll give you a realistic timeline after the initial consultation.",
  },
  {
    question: "What do you need from me to get started?",
    answer: "Just a conversation about your current workflows and pain points. We'll guide you through everything else – no technical preparation needed on your end.",
  },
  {
    question: "What if I don't have any existing systems yet?",
    answer: "That's actually ideal. We can design your infrastructure from scratch without legacy constraints. We'll recommend the right tools and build everything to scale.",
  },
  {
    question: "How much does it cost?",
    answer: "Every project is different. After our discovery call, we provide a fixed-price quote with no surprises. Investment depends on scope, integrations, and complexity.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes. After launch, we offer maintenance packages to keep your systems running smoothly, handle updates, and add new features as your business grows.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding relative">
      <div className="container-custom">
        {/* Section header */}
        <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-2 text-gray-100 mb-4">
            Frequently Asked <span className="text-accent-400">Questions</span>
          </h2>
          <p className="text-body">
            Everything you need to know before working with us.
          </p>
        </div>
        </ScrollReveal>

        {/* FAQ items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 100}>
            <div
              className="glass-card overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-medium text-gray-100 pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-accent-400 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-gray-400">{faq.answer}</p>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="text-accent-400 hover:text-accent-300 font-medium transition-colors"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
}
