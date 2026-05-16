import diceLogo from './assets/dice-d20.svg';
import headshot from './assets/headshot.jpg';
import githubLogo from './assets/github.svg';
import linkedInLogo from './assets/linkedin.svg';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import Experience from './features/Experience/Experience';
import Toolbox from './features/Toolbox/Toolbox';

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [previousSection, setPreviousSection] = useState<SectionId | null>(
    null,
  );
  const [panelDirection, setPanelDirection] = useState<'forward' | 'backward'>(
    'forward',
  );
  const [exitDirection, setExitDirection] = useState<'forward' | 'backward'>(
    'forward',
  );
  const [panelAnimationKey, setPanelAnimationKey] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const navListRef = useRef<HTMLUListElement>(null);
  const buttonRefs = useRef<Record<SectionId, HTMLButtonElement | null>>({
    home: null,
    experience: null,
    toolbox: null,
  });
  const exitTimeoutRef = useRef<number | null>(null);

  const renderSection = (sectionId: SectionId) => {
    switch (sectionId) {
      case 'experience':
        return <Experience />;
      case 'toolbox':
        return <Toolbox resources={resources} />;
      case 'home':
      default:
        return <Home resources={resources} />;
    }
  };

  const activeContent = useMemo(
    () => renderSection(activeSection),
    [activeSection],
  );
  const previousContent = useMemo(() => {
    if (!previousSection) {
      return null;
    }

    return renderSection(previousSection);
  }, [previousSection]);

  const updateIndicator = () => {
    const activeButton = buttonRefs.current[activeSection];

    if (!activeButton) {
      return;
    }

    setIndicatorStyle({
      left: activeButton.offsetLeft,
      width: activeButton.offsetWidth,
      opacity: 1,
    });
  };

  useLayoutEffect(() => {
    updateIndicator();
  }, [activeSection]);

  useEffect(() => {
    window.addEventListener('resize', updateIndicator);

    return () => {
      window.removeEventListener('resize', updateIndicator);
    };
  }, [activeSection]);

  useEffect(() => {
    return () => {
      if (exitTimeoutRef.current) {
        window.clearTimeout(exitTimeoutRef.current);
      }
    };
  }, []);

  const queueOutgoingPanelCleanup = () => {
    if (exitTimeoutRef.current) {
      window.clearTimeout(exitTimeoutRef.current);
    }

    exitTimeoutRef.current = window.setTimeout(() => {
      setPreviousSection(null);
      exitTimeoutRef.current = null;
    }, 280);
  };

  const navigateToSection = (sectionId: SectionId) => {
    if (sectionId === activeSection) {
      return;
    }

    const nextDirection =
      sectionOrder[sectionId] > sectionOrder[activeSection]
        ? 'forward'
        : 'backward';

    const currentSection = activeSection;

    const applySectionChange = () => {
      setPreviousSection(currentSection);
      setExitDirection(nextDirection);
      setPanelDirection(nextDirection);
      setActiveSection(sectionId);
      setPanelAnimationKey((current) => current + 1);
      queueOutgoingPanelCleanup();
    };

    applySectionChange();
  };

  return (
    <main className="app-shell box-border flex min-h-dvh flex-col overflow-hidden px-6 py-6 sm:px-10 sm:py-8 lg:px-16">
      <header className="flex justify-end">
        <nav
          aria-label="Primary"
          className="rounded-full border border-black/10 bg-white/75 px-2 py-2 shadow-sm backdrop-blur dark:border-white/10 dark:bg-gray-950/75"
        >
          <ul
            ref={navListRef}
            className="nav-list flex items-center gap-1 text-sm font-medium uppercase tracking-[0.2em] text-gray-600 dark:text-gray-300"
          >
            <span
              aria-hidden="true"
              className="nav-indicator"
              style={{
                width: `${indicatorStyle.width}px`,
                transform: `translateX(${indicatorStyle.left}px)`,
                opacity: indicatorStyle.opacity,
              }}
            />
            {sections.map(({ id, label }) => {
              const isActive = activeSection === id;

              return (
                <li key={id}>
                  <button
                    ref={(element) => {
                      buttonRefs.current[id] = element;
                    }}
                    type="button"
                    className={`nav-button rounded-full px-4 py-2 ${
                      isActive
                        ? 'nav-button--active text-white'
                        : 'hover:bg-black/5 dark:hover:bg-white/10'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => navigateToSection(id)}
                  >
                    <span className="nav-button__label">{label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      <section className="mx-auto flex w-full max-w-6xl flex-1 min-h-0 items-center py-8 sm:py-12">
        <div className="app-panel-stage relative h-full w-full">
          {previousContent ? (
            <div
              className={`app-panel app-panel--exit app-panel--exit-${exitDirection} absolute inset-0 max-h-full w-full overflow-hidden pointer-events-none`}
            >
              {previousContent}
            </div>
          ) : null}

          <div
            key={`${activeSection}-${panelAnimationKey}`}
            className={`app-panel app-panel--${panelDirection} relative z-1 max-h-full w-full overflow-y-auto`}
          >
            {activeContent}
          </div>
        </div>
      </section>
    </main>
  );
}

function Home({ resources }: HomeProps) {
  return (
    <section
      id="home"
      className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16"
    >
      <div className="p-4">
        <img
          src={headshot}
          alt="Kamille Norris"
          className="block w-64 rounded-full shadow-lg shadow-rose-500/10 sm:w-75"
        />
      </div>
      <div className="space-y-6 text-center lg:max-w-3xl lg:text-left">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-rose-500">
          Home
        </p>
        <h1 className="text-4xl font-semibold sm:text-5xl">
          Hi, I&apos;m Kamille Norris
        </h1>
        <h2 className="text-xl text-gray-700 dark:text-gray-200 sm:text-2xl">
          Staff Software Engineer /{' '}
          <span className="dark:text-rose-300">Angular Expert</span>
        </h2>

        <p className="max-w-2xl text-base leading-8 text-gray-700 dark:text-gray-300 sm:text-lg">
          I am a Staff Software Engineer with 12 years of experience
          architecting, developing, and leading large-scale, full-stack web
          applications. Proven ability to drive significant engineering
          initiatives, resulting in measurable cost savings, improved
          performance, and enhanced code quality. Recognized as a technical
          leader and role model with a strong focus on technical strategy,
          maintainability, and mentorship across multiple teams.
        </p>

        <ul className="flex flex-wrap justify-center gap-3 lg:justify-start">
          {resources.map(({ href, text, icon }) => (
            <li key={href}>
              <a
                className="group flex items-center gap-3 rounded-full border border-black/10 px-4 py-3 transition duration-300 ease-in-out hover:-translate-y-0.5 hover:border-rose-500/40 hover:shadow-md dark:border-white/10"
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={icon}
                  alt=""
                  className="w-6 dark:invert group-hover:invert-55 group-hover:sepia-95"
                />
                <span className="text-sm font-medium">{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

type SectionId = 'home' | 'experience' | 'toolbox';

interface ResourceLink {
  href: string;
  text: string;
  icon: string;
}

interface HomeProps {
  resources: ResourceLink[];
}

const sections: Array<{ id: SectionId; label: string }> = [
  { id: 'home', label: 'home' },
  { id: 'experience', label: 'experience' },
  { id: 'toolbox', label: 'toolbox' },
];

const sectionOrder: Record<SectionId, number> = {
  home: 0,
  experience: 1,
  toolbox: 2,
};

const resources: ResourceLink[] = [
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

export default App;
