import './App.css';
import { sections, resources } from './app/siteContent';
import type { SectionId } from './app/types';
import PrimaryNav from './components/PrimaryNav/PrimaryNav';
import Experience from './features/Experience/Experience';
import Home from './features/Home/Home';
import Toolbox from './features/Toolbox/Toolbox';
import useNavIndicator from './hooks/useNavIndicator';
import useSectionPanels from './hooks/useSectionPanels';

const getTabId = (sectionId: SectionId) => `section-tab-${sectionId}`;
const getPanelId = (sectionId: SectionId) => `section-panel-${sectionId}`;

function renderSection(sectionId: SectionId) {
  switch (sectionId) {
    case 'experience':
      return <Experience />;
    case 'toolbox':
      return <Toolbox resources={resources} />;
    case 'home':
    default:
      return <Home resources={resources} />;
  }
}

function App() {
  const {
    activeSection,
    previousSection,
    panelDirection,
    exitDirection,
    panelAnimationKey,
    navigateToSection,
  } = useSectionPanels();
  const { indicatorStyle, indicatorAnimation, registerButton } =
    useNavIndicator(activeSection);

  const activeContent = renderSection(activeSection);
  const previousContent = previousSection
    ? renderSection(previousSection)
    : null;

  return (
    <div className="app-shell box-border flex min-h-dvh flex-col overflow-hidden px-6 py-6 sm:px-10 sm:py-8 lg:px-16">
      <header className="relative mx-auto flex w-full max-w-6xl justify-end">
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>

        <PrimaryNav
          sections={sections}
          activeSection={activeSection}
          indicatorStyle={indicatorStyle}
          indicatorAnimation={indicatorAnimation}
          onNavigate={navigateToSection}
          registerButton={registerButton}
        />
      </header>

      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto flex w-full max-w-6xl flex-1 min-h-0 items-center py-8 sm:py-12"
      >
        <div className="app-panel-stage relative h-full w-full">
          {previousContent ? (
            <div
              aria-hidden="true"
              className={`app-panel app-panel--exit app-panel--exit-${exitDirection} absolute inset-0 max-h-full w-full overflow-hidden pointer-events-none`}
            >
              {previousContent}
            </div>
          ) : null}

          <div
            id={getPanelId(activeSection)}
            key={`${activeSection}-${panelAnimationKey}`}
            role="tabpanel"
            aria-labelledby={getTabId(activeSection)}
            className={`app-panel app-panel--${panelDirection} relative z-1 max-h-full w-full overflow-y-auto`}
          >
            {activeContent}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
