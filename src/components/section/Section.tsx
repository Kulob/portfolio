import type { ReactNode } from 'react';

import { useScrollReveal } from '../../hooks/useScrollReveal';
import type { SectionId } from '../../types';
import './Section.scss';

interface SectionProps {
  id: SectionId;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

/**
 * The shared shell for every content section: heading pair plus reveal-on-scroll.
 * Keeping it in one place is what stops the heading markup from drifting
 * between sections the way it had.
 */
export const Section = ({ id, eyebrow, title, children }: SectionProps) => {
  const { ref, revealed } = useScrollReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={`section reveal${revealed ? ' reveal--visible' : ''}`}
    >
      <h5 className="section__eyebrow">{eyebrow}</h5>
      <h2 className="section__title">{title}</h2>
      {children}
    </section>
  );
};
