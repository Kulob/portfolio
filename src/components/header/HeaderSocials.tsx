import { useTranslation } from 'react-i18next';
import { BsGithub, BsLinkedin, BsTelegram } from 'react-icons/bs';

import { CONTACTS } from '../../data/contacts';

export const HeaderSocials = () => {
  const { t } = useTranslation();

  return (
    <div className="header__socials">
      <a
        href={CONTACTS.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label={t('social.linkedin')}
      >
        <BsLinkedin />
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
        href={CONTACTS.telegramUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={t('social.telegram')}
      >
        <BsTelegram />
      </a>
    </div>
  );
};
