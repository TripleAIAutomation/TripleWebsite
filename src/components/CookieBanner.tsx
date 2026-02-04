'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="container-custom">
        <div className="glass-card p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-accent-500/20">
          <div className="flex-1">
            <p className="text-gray-300 text-sm">
              This website uses only technically necessary storage (localStorage) to remember your preference.
              For more information, please see our{' '}
              <Link
                href="/datenschutz"
                className="text-accent-400 hover:text-accent-300 transition-colors underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <button
            onClick={acceptCookies}
            className="btn-primary text-sm whitespace-nowrap"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
