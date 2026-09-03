import { useTranslation } from 'react-i18next';

import { SKILL_GROUPS } from '../../data/skills';
import { Section } from '../section/Section';
import './Skills.scss';

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <Section id="skills" eyebrow={t('skills.eyebrow')} title={t('skills.title')}>
      <div className="container skills__container">
        {SKILL_GROUPS.map((group) => (
          <article key={group.id} className="skills__group">
            <h3 className="skills__group-title">{t(`skills.groups.${group.id}`)}</h3>
            <ul className="skills__list">
              {group.items.map((item) => (
                <li key={item} className="skills__item">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
};
