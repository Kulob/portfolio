import type { IconType } from 'react-icons';
import { useTranslation } from 'react-i18next';
import { AiOutlineHome, AiOutlineMessage } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { BsBriefcase } from 'react-icons/bs';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { TbLayoutGrid } from 'react-icons/tb';

import { useActiveSection } from '../../hooks/useActiveSection';
import type { SectionId } from '../../types';
import './Nav.scss';

interface NavItem {
  readonly id: SectionId;
  readonly Icon: IconType;
  readonly labelKey: `nav.${'home' | 'about' | 'skills' | 'experience' | 'portfolio' | 'contact'}`;
}

const NAV_ITEMS: readonly NavItem[] = [
  { id: 'home', Icon: AiOutlineHome, labelKey: 'nav.home' },
  { id: 'about', Icon: BiUser, labelKey: 'nav.about' },
  { id: 'skills', Icon: RiCodeSSlashLine, labelKey: 'nav.skills' },
  { id: 'experience', Icon: BsBriefcase, labelKey: 'nav.experience' },
  { id: 'portfolio', Icon: TbLayoutGrid, labelKey: 'nav.portfolio' },
  { id: 'contact', Icon: AiOutlineMessage, labelKey: 'nav.contact' },
];

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export const Nav = () => {
  const { t } = useTranslation();
  const active = useActiveSection(SECTION_IDS, 'home');

  return (
    <nav className="nav" aria-label={t('nav.home')}>
      {NAV_ITEMS.map(({ id, Icon, labelKey }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`nav__link${active === id ? ' nav__link--active' : ''}`}
          aria-label={t(labelKey)}
          aria-current={active === id ? 'true' : undefined}
        >
          <Icon />
          <span className="nav__tooltip">{t(labelKey)}</span>
        </a>
      ))}
    </nav>
  );
};
