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

  return (
    <header className="flex justify-end">
      <nav
        aria-label="Primary"
        className="rounded-full border border-black/10 bg-white/75 px-2 py-2 shadow-sm backdrop-blur dark:border-white/10 dark:bg-gray-950/75"
      >
        <ul className="nav-list flex items-center gap-1 text-sm font-medium uppercase tracking-[0.2em] text-gray-600 dark:text-gray-300">
          <span
            key={indicatorAnimation?.key ?? 0}
            aria-hidden="true"
            className={`nav-indicator ${indicatorAnimation ? 'nav-indicator--stretching' : ''}`}
            style={indicatorInlineStyle}
          />
          {sections.map(({ id, label }) => {
            const isActive = activeSection === id;

            return (
              <li key={id}>
                <button
                  ref={(element) => {
                    registerButton(id, element);
                  }}
                  type="button"
                  className={`nav-button rounded-full px-4 py-2 ${
                    isActive
                      ? 'nav-button--active text-white'
                      : 'hover:bg-black/5 dark:hover:bg-white/10'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => onNavigate(id)}
                >
                  <span className="nav-button__label">{label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
