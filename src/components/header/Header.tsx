import { useTranslation } from 'react-i18next';

import Me from '../../assets/me.jpg';
import { CTA } from './CTA';
import './Header.scss';
import { HeaderSocials } from './HeaderSocials';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header id="home" className="header">
      <div className="container header__container">
        <h5 className="header__greeting">{t('hero.greeting')}</h5>
        <h1 className="header__name">{t('hero.name')}</h1>
        <h5 className="header__role text-light">{t('hero.role')}</h5>
        <p className="header__tagline">{t('hero.tagline')}</p>

        <CTA />
        <HeaderSocials />

        <div className="header__photo">
          <img src={Me} alt={t('hero.photoAlt')} />
        </div>

        <a href="#about" className="scroll__down">
          {t('hero.scrollDown')}
        </a>
      </div>
    </header>
  );
};
