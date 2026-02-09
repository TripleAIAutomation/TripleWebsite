'use client';

import { useEffect, useRef, ReactNode } from 'react';

type RevealVariant = 'fade-up' | 'fade-left' | 'fade-right' | 'scale-up' | 'blur-in';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
}

export default function ScrollReveal({ children, className = '', delay = 0, variant = 'fade-up' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => el.classList.add('visible'), delay);
            } else {
              el.classList.add('visible');
            }
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal variant-${variant} ${className}`}>
      {children}
    </div>
  );
}
