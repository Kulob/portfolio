import type { en } from './locales/en';

/**
 * Makes `t()` key-checked at compile time: a typo in a key is a build error
 * rather than a blank string in production.
 */
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: { translation: typeof en };
    returnNull: false;
  }
}
