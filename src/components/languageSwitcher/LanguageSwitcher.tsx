import { useTranslation } from 'react-i18next';

import { useLocale } from '../../hooks/useLocale';
import { LOCALES, type Locale } from '../../i18n';
import './LanguageSwitcher.scss';

const SWITCH_LABEL: Record<Locale, 'switchToEn' | 'switchToRu'> = {
  en: 'switchToEn',
  ru: 'switchToRu',
};

export const LanguageSwitcher = () => {
  const { t } = useTranslation();
  const { locale, setLocale } = useLocale();

  return (
    <div className="language-switcher" role="group" aria-label={t('language.label')}>
      {LOCALES.map((option) => (
        <button
          key={option}
          type="button"
          className={`language-switcher__option${
            option === locale ? ' language-switcher__option--active' : ''
          }`}
          aria-pressed={option === locale}
          aria-label={t(`language.${SWITCH_LABEL[option]}`)}
          onClick={() => {
            setLocale(option);
          }}
        >
          {t(`language.${option}`)}
        </button>
      ))}
    </div>
  );
};
