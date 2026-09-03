import { useTranslation } from 'react-i18next';
import { BsBuilding } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';

import { COMPANIES } from '../../data/experience';
import { Section } from '../section/Section';
import './Timeline.scss';

export const Timeline = () => {
  const { t } = useTranslation();

  return (
    <Section
      id="experience"
      eyebrow={t('experience.eyebrow')}
      title={t('experience.title')}
    >
      <div className="container timeline">
        {COMPANIES.map((company) => (
          <article key={company.id} className="timeline__company">
            <header className="timeline__company-head">
              <div className="timeline__company-title">
                <BsBuilding className="timeline__company-icon" aria-hidden />
                <h3>{t(`companies.${company.id}.name`)}</h3>
              </div>
              <span className="timeline__period">
                {t(`companies.${company.id}.period`)}
              </span>
            </header>

            <p className="timeline__role">{t(`companies.${company.id}.role`)}</p>
            <p className="timeline__location">
              <FiMapPin aria-hidden /> {t(`companies.${company.id}.location`)}
            </p>
            <p className="timeline__summary">{t(`companies.${company.id}.summary`)}</p>

            <div className="timeline__projects">
              {company.projects.map((project) => {
                const bullets = t(`projects.${project.id}.bullets`, {
                  returnObjects: true,
                }) as readonly string[];

                return (
                  <section key={project.id} className="timeline__project">
                    <h4 className="timeline__project-name">
                      {t(`projects.${project.id}.name`)}
                      <span className="timeline__project-tagline">
                        {t(`projects.${project.id}.tagline`)}
                      </span>
                    </h4>

                    <ul className="timeline__bullets">
                      {bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>

                    <p className="timeline__stack">
                      <span className="timeline__stack-label">
                        {t('experience.stackLabel')}:
                      </span>{' '}
                      {project.stack.join(' · ')}
                    </p>
                  </section>
                );
              })}
            </div>
          </article>
        ))}

        <div className="timeline__extras">
          <article className="timeline__extra">
            <h3>{t('experience.education.title')}</h3>
            <p className="timeline__extra-primary">{t('experience.education.school')}</p>
            <p className="timeline__extra-secondary">
              {t('experience.education.major')} · {t('experience.education.period')}
            </p>
          </article>

          <article className="timeline__extra">
            <h3>{t('experience.languages.title')}</h3>
            <p className="timeline__extra-secondary">{t('experience.languages.list')}</p>
          </article>
        </div>
      </div>
    </Section>
  );
};
