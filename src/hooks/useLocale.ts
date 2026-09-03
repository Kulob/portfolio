import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { DEFAULT_LOCALE, isLocale, type Locale } from '../i18n';

/**
 * Reads and writes the active locale as a narrowed `Locale` rather than the
 * loose `string` i18next exposes.
 */
export const useLocale = (): {
  locale: Locale;
  setLocale: (next: Locale) => void;
} => {
  const { i18n } = useTranslation();

  const resolved = i18n.resolvedLanguage ?? i18n.language;
  const locale = isLocale(resolved) ? resolved : DEFAULT_LOCALE;

  const setLocale = useCallback(
    (next: Locale) => {
      void i18n.changeLanguage(next);
    },
    [i18n],
  );

  return { locale, setLocale };
};
