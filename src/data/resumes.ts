import cvEn from '../assets/Mirov_CV_EN.pdf';
import cvRu from '../assets/Mirov_CV_RU.pdf';
import type { Locale } from '../i18n';

interface Resume {
  readonly url: string;
  /** Vite content-hashes the built asset; `download` restores a readable name. */
  readonly filename: string;
}

export const RESUMES: Record<Locale, Resume> = {
  en: { url: cvEn, filename: 'Mirov_Khudobakhsh_CV_EN.pdf' },
  ru: { url: cvRu, filename: 'Mirov_Khudobakhsh_CV_RU.pdf' },
};
