import { useEffect, useState } from 'react';

import type { SectionId } from '../types';

/**
 * Tracks which section is currently in view so the nav can highlight it.
 *
 * The winner is the section covering the most of the *viewport*, not the one
 * showing the largest fraction of itself: sections differ hugely in height, and
 * ranking by self-visibility lets a short section outrank a tall one that fills
 * the screen. That also rules out IntersectionObserver thresholds — a section
 * taller than the viewport can never reach a high ratio, so its crossings are
 * too sparse to drive the highlight.
 */
export const useActiveSection = (
  ids: readonly SectionId[],
  fallback: SectionId,
): SectionId => {
  const [active, setActive] = useState<SectionId>(fallback);

  useEffect(() => {
    let frame = 0;

    const measure = (): void => {
      frame = 0;
      const viewportHeight = window.innerHeight;

      let best = fallback;
      let bestVisible = 0;

      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) continue;

        const { top, bottom } = element.getBoundingClientRect();
        const visible = Math.min(bottom, viewportHeight) - Math.max(top, 0);
        if (visible > bestVisible) {
          bestVisible = visible;
          best = id;
        }
      }

      // At the very bottom the footer takes over the viewport, which would
      // otherwise drop the highlight off the last section.
      const atBottom =
        window.scrollY + viewportHeight >= document.documentElement.scrollHeight - 2;
      const last = ids.at(-1);
      if (atBottom && last !== undefined) best = last;

      setActive(best);
    };

    const schedule = (): void => {
      if (frame === 0) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      if (frame !== 0) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [ids, fallback]);

  return active;
};
