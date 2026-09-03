import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = (): boolean =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Reveals an element the first time it scrolls into view. Returns `true`
 * immediately when the visitor has asked for reduced motion, so the content is
 * never gated behind an animation they opted out of.
 */
export const useScrollReveal = <T extends HTMLElement>(): {
  ref: React.RefObject<T>;
  revealed: boolean;
} => {
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (prefersReducedMotion()) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref, revealed };
};
