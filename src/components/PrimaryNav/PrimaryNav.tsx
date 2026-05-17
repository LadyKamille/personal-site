import type {
  IndicatorAnimation,
  IndicatorMetrics,
  SectionDefinition,
  SectionId,
} from '../../app/types';
import buildIndicatorInlineStyle from './buildIndicatorInlineStyle';

interface PrimaryNavProps {
  sections: SectionDefinition[];
  activeSection: SectionId;
  indicatorStyle: IndicatorMetrics;
  indicatorAnimation: IndicatorAnimation | null;
  onNavigate: (sectionId: SectionId) => void;
  registerButton: (
    sectionId: SectionId,
    element: HTMLButtonElement | null,
  ) => void;
}

const getTabId = (sectionId: SectionId) => `section-tab-${sectionId}`;
const getPanelId = (sectionId: SectionId) => `section-panel-${sectionId}`;

export default function PrimaryNav({
  sections,
  activeSection,
  indicatorStyle,
  indicatorAnimation,
  onNavigate,
  registerButton,
}: PrimaryNavProps) {
  const indicatorInlineStyle = buildIndicatorInlineStyle(
    indicatorStyle,
    indicatorAnimation,
  );

  const handleTabKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    sectionId: SectionId,
  ) => {
    const currentIndex = sections.findIndex(({ id }) => id === sectionId);

    if (currentIndex === -1) {
      return;
    }

    let nextIndex = currentIndex;

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        nextIndex = (currentIndex + 1) % sections.length;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        nextIndex = (currentIndex - 1 + sections.length) % sections.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = sections.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    onNavigate(sections[nextIndex].id);
  };

  return (
    <nav
      aria-label="Primary"
      className="rounded-full border border-black/10 bg-white/75 px-2 py-2 shadow-sm backdrop-blur dark:border-white/10 dark:bg-gray-950/75"
    >
      <div className="nav-list">
        <span
          key={indicatorAnimation?.key ?? 0}
          aria-hidden="true"
          className={`nav-indicator ${indicatorAnimation ? 'nav-indicator--stretching' : ''}`}
          style={indicatorInlineStyle}
        />

        <ul
          role="tablist"
          aria-label="Primary sections"
          className="relative flex items-center gap-1 text-sm font-medium uppercase tracking-[0.2em] text-gray-600 dark:text-gray-300"
        >
          {sections.map(({ id, label }) => {
            const isActive = activeSection === id;

            return (
              <li key={id}>
                <button
                  id={getTabId(id)}
                  ref={(element) => {
                    registerButton(id, element);
                  }}
                  type="button"
                  role="tab"
                  className={`nav-button rounded-full px-4 py-2 ${
                    isActive
                      ? 'nav-button--active text-white'
                      : 'hover:bg-black/5 dark:hover:bg-white/10'
                  }`}
                  aria-controls={getPanelId(id)}
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => onNavigate(id)}
                  onKeyDown={(event) => handleTabKeyDown(event, id)}
                >
                  <span className="nav-button__label">{label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
