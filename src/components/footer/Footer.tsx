import { useTranslation } from 'react-i18next';
import { BsGithub, BsLinkedin, BsTelegram } from 'react-icons/bs';

import { CONTACTS } from '../../data/contacts';
import type { SectionId } from '../../types';
import './Footer.scss';

const LINKS: readonly SectionId[] = [
  'home',
  'about',
  'skills',
  'experience',
  'portfolio',
  'contact',
];

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <a href="#home" className="footer__logo">
        {t('hero.name')}
      </a>

      <ul className="footer__links">
        {LINKS.map((id) => (
          <li key={id}>
            <a href={`#${id}`}>{t(`nav.${id}`)}</a>
          </li>
        ))}
      </ul>

      <div className="footer__socials">
        <a
          href={CONTACTS.telegramUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={t('social.telegram')}
        >
          <BsTelegram />
        </a>
        <a
          href={CONTACTS.github}
          target="_blank"
          rel="noreferrer"
          aria-label={t('social.github')}
        >
          <BsGithub />
        </a>
        <a
          href={CONTACTS.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label={t('social.linkedin')}
        >
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; {year} {t('hero.name')}. {t('footer.rights')}
        </small>
        <small className="footer__built">{t('footer.builtWith')}</small>
      </div>
    </footer>
  );
};
