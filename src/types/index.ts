import type { en } from '../i18n/locales/en';

export type PortfolioItemId = keyof typeof en.portfolio.items;
export type WorkProjectId = keyof typeof en.projects;
export type CompanyId = keyof typeof en.companies;
export type SkillGroupId = keyof typeof en.skills.groups;
export type SectionId = 'home' | 'about' | 'skills' | 'experience' | 'portfolio' | 'contact';

export interface PortfolioItem {
  readonly id: PortfolioItemId;
  readonly image: string;
  readonly stack: readonly string[];
  readonly demo?: string;
  readonly source?: string;
}

export interface WorkProject {
  readonly id: WorkProjectId;
  readonly stack: readonly string[];
}

export interface Company {
  readonly id: CompanyId;
  readonly projects: readonly WorkProject[];
}

export interface SkillGroup {
  readonly id: SkillGroupId;
  readonly items: readonly string[];
}
