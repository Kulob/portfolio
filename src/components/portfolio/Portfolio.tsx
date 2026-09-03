import { useTranslation } from 'react-i18next';
import { BsGithub, BsLock } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';

import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import { Section } from '../section/Section';
import './Portfolio.scss';

export const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <Section id="portfolio" eyebrow={t('portfolio.eyebrow')} title={t('portfolio.title')}>
      <div className="container portfolio__container">
        {PORTFOLIO_ITEMS.map((item) => (
          <article key={item.id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img
                src={item.image}
                alt={t(`portfolio.items.${item.id}.title`)}
                loading="lazy"
              />
            </div>

            <h3 className="portfolio__item-title">
              {t(`portfolio.items.${item.id}.title`)}
            </h3>
            <p className="portfolio__item-description">
              {t(`portfolio.items.${item.id}.description`)}
            </p>

            <ul className="portfolio__stack">
              {item.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            <div className="portfolio__item-cta">
              {item.source !== undefined && (
                <a href={item.source} className="btn" target="_blank" rel="noreferrer">
                  <BsGithub aria-hidden />
                  {t('portfolio.github')}
                </a>
              )}

              {item.demo !== undefined && (
                <a
                  href={item.demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink aria-hidden />
                  {t('portfolio.demo')}
                </a>
              )}

              {/* Commercial work under NDA gets an honest badge rather than a
                  "Github" button pointing at an unrelated profile. */}
              {item.source === undefined && (
                <span className="portfolio__closed">
                  <BsLock aria-hidden />
                  {t('portfolio.closedSource')}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};
