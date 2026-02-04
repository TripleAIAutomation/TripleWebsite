'use client';

import { useState, FormEvent } from 'react';
import ScrollReveal from './ScrollReveal';

interface FormData {
  name: string;
  email: string;
  company: string;
  role: string;
  need: string;
  notes: string;
  privacy: boolean;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    role: '',
    need: '',
    notes: '',
    privacy: false,
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          need: formData.need,
          notes: formData.notes,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus({
        type: 'success',
        message: 'Message received. We will get back to you shortly.',
      });
      setFormData({ name: '', email: '', company: '', role: '', need: '', notes: '', privacy: false });
    } catch {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-20 -z-10" />

      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="heading-2 text-gray-100 mb-4">
              Let&apos;s <span className="text-accent-400">talk</span>
            </h2>
            <p className="text-body">
              Ready to automate your business? Reach out – we&apos;ll get back to you.
            </p>
          </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={150}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all"
                  placeholder="Company name"
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
                  Role / Position
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all"
                  placeholder="e.g. CEO, Head of Operations"
                />
              </div>
            </div>

            <div>
              <label htmlFor="need" className="block text-sm font-medium text-gray-300 mb-2">
                What do you need?
              </label>
              <select
                id="need"
                name="need"
                required
                value={formData.need}
                onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-gray-700 text-gray-100 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all appearance-none"
              >
                <option value="" disabled className="text-gray-500">Select an option</option>
                <option value="dashboards">Custom Dashboard</option>
                <option value="automations">Custom Automation</option>
                <option value="both">Both</option>
                <option value="not_sure">Not sure</option>
              </select>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-300 mb-2">
                Short Description
              </label>
              <textarea
                id="notes"
                name="notes"
                required
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all resize-none"
                placeholder="Briefly describe what you're looking for..."
              />
            </div>

            {/* Status message */}
            {status.type !== 'idle' && (
              <div
                className={`p-4 rounded-lg border ${
                  status.type === 'success'
                    ? 'bg-green-500/10 text-green-400 border-green-500/20'
                    : status.type === 'error'
                    ? 'bg-red-500/10 text-red-400 border-red-500/20'
                    : 'bg-dark-800 text-gray-400 border-gray-700'
                }`}
              >
                {status.type === 'loading' ? 'Sending...' : status.message}
              </div>
            )}

            {/* Privacy consent checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                required
                checked={formData.privacy}
                onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                className="mt-1 h-4 w-4 rounded border-gray-700 bg-dark-800 text-accent-500 focus:ring-accent-500 focus:ring-2 cursor-pointer"
              />
              <label htmlFor="privacy" className="text-xs text-gray-500 cursor-pointer">
                I agree to the processing of my data in accordance with the{' '}
                <a href="/datenschutz" className="text-accent-400 hover:text-accent-300 transition-colors">
                  Privacy Policy
                </a>
                . *
              </label>
            </div>

            <button
              type="submit"
              disabled={status.type === 'loading'}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status.type === 'loading' ? 'Sending...' : 'Send message'}
            </button>
          </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
