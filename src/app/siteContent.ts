import diceLogo from '../assets/dice-d20.svg';
import githubLogo from '../assets/github.svg';
import linkedInLogo from '../assets/linkedin.svg';
import type { ResourceLink, SectionDefinition, SectionId } from './types';

export const sections: SectionDefinition[] = [
  { id: 'home', label: 'home' },
  { id: 'experience', label: 'experience' },
  { id: 'toolbox', label: 'toolbox' },
];

export const sectionOrder: Record<SectionId, number> = {
  home: 0,
  experience: 1,
  toolbox: 2,
};

export const resources: ResourceLink[] = [
  {
    href: 'https://foundry.kamillenorris.com',
    text: 'FoundryVTT',
    icon: diceLogo,
  },
  {
    href: 'https://www.linkedin.com/in/kamille-norris-a37971a4',
    text: 'LinkedIn',
    icon: linkedInLogo,
  },
  {
    href: 'https://github.com/LadyKamille',
    text: 'Github',
    icon: githubLogo,
  },
];
