import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { en } from './locales/en';
import { ru } from './locales/ru';

export const LOCALES = ['en', 'ru'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';
const STORAGE_KEY = 'portfolio.lang';

export const isLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
    fallbackLng: DEFAULT_LOCALE,
    supportedLngs: LOCALES,
    // `ru-RU` and `ru` should resolve to the same bundle.
    load: 'languageOnly',
    detection: {
      // `?lng=ru` makes a localized link shareable; after that the visitor's
      // own choice wins, and only then the browser's preference.
      order: ['querystring', 'localStorage', 'navigator'],
      lookupQuerystring: 'lng',
      lookupLocalStorage: STORAGE_KEY,
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
    returnObjects: true,
  });

/**
 * Keeps `<html lang>` in step with the active language, including the initial
 * detection, so screen readers and search engines see the language the page is
 * actually rendered in.
 */
const syncDocumentLanguage = (language: string): void => {
  document.documentElement.lang = isLocale(language) ? language : DEFAULT_LOCALE;
};

i18n.on('languageChanged', syncDocumentLanguage);
syncDocumentLanguage(i18n.resolvedLanguage ?? DEFAULT_LOCALE);

export default i18n;
