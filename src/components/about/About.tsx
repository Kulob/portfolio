import { useTranslation } from 'react-i18next';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import { BsPatchCheck } from 'react-icons/bs';
import { FaAward } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import type { IconType } from 'react-icons';

import AboutImage from '../../assets/meAbout.jpg';
import { Section } from '../section/Section';
import './About.scss';

const CARDS: readonly { key: 'experience' | 'projects' | 'testing'; Icon: IconType }[] = [
  { key: 'experience', Icon: FaAward },
  { key: 'projects', Icon: AiOutlineFolderOpen },
  { key: 'testing', Icon: BsPatchCheck },
];

export const About = () => {
  const { t } = useTranslation();

  return (
    <Section id="about" eyebrow={t('about.eyebrow')} title={t('about.title')}>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutImage} alt={t('about.photoAlt')} />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            {CARDS.map(({ key, Icon }) => (
              <article key={key} className="about__card">
                <Icon className="about__icon" aria-hidden />
                <h5>{t(`about.cards.${key}.title`)}</h5>
                <small>{t(`about.cards.${key}.value`)}</small>
              </article>
            ))}
          </div>

          <p className="about__lead">{t('about.lead')}</p>
          <p className="about__body">{t('about.body')}</p>

          <p className="about__meta">
            <FiMapPin aria-hidden /> {t('about.location')}
          </p>
          <p className="about__availability">{t('about.availability')}</p>

          <a href="#contact" className="btn btn-primary">
            {t('hero.talk')}
          </a>
        </div>
      </div>
    </Section>
  );
};
