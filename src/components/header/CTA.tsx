import { useTranslation } from 'react-i18next';
import { FiDownload } from 'react-icons/fi';

import { RESUMES } from '../../data/resumes';
import { useLocale } from '../../hooks/useLocale';

export const CTA = () => {
  const { t } = useTranslation();
  const { locale } = useLocale();
  const resume = RESUMES[locale];

  return (
    <div className="cta">
      <a href={resume.url} download={resume.filename} className="btn">
        <FiDownload aria-hidden />
        {t('hero.downloadCv')}
      </a>
      <a href="#contact" className="btn btn-primary">
        {t('hero.talk')}
      </a>
    </div>
  );
};
