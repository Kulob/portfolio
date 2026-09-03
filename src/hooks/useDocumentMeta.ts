import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const setMeta = (selector: string, content: string): void => {
  const element = document.head.querySelector<HTMLMetaElement>(selector);
  if (element) element.content = content;
};

/**
 * Keeps the document title and description aligned with the active language.
 * Without this the tab and every social preview stay in whichever language the
 * HTML shipped with.
 */
export const useDocumentMeta = (): void => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const title = t('meta.title');
    const description = t('meta.description');

    document.title = title;
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
  }, [t, i18n.resolvedLanguage]);
};
