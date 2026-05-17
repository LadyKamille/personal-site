import type { ResourceLink } from '../../app/types';

interface ToolboxProps {
  resources: ResourceLink[];
}

const toolboxGroups = [
  {
    title: 'Frontend systems',
    items: [
      'Angular',
      'React',
      'TypeScript',
      'Design systems',
      'Module Federation',
    ],
  },
  {
    title: 'Quality & delivery',
    items: [
      'Accessibility',
      'CI/CD',
      'Cypress',
      'Observability',
      'LaunchDarkly',
    ],
  },
  {
    title: 'Ways of working',
    items: [
      'Technical strategy',
      'Mentorship',
      'AI-assisted workflows',
      'Cross-functional leadership',
    ],
  },
];

export default function Toolbox({ resources }: ToolboxProps) {
  const toolboxResources = resources.filter(
    ({ text, href }) => text !== 'FoundryVTT' && !href.includes('foundry.'),
  );

  return (
    <section
      id="toolbox"
      aria-labelledby="toolbox-heading"
      className="w-full space-y-10"
    >
      <div className="space-y-3">
        <h1
          id="toolbox-heading"
          className="text-sm font-medium uppercase tracking-[0.3em] text-rose-500"
        >
          Toolbox
        </h1>
        <h2 className="text-3xl font-semibold">How I build and lead</h2>
        <p className="max-w-3xl text-base leading-8 text-gray-700 dark:text-gray-300 sm:text-lg">
          I care about durable frontend architecture, accessible interfaces, and
          team practices that keep shipping predictable even as products and
          platforms evolve.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {toolboxGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="text-lg font-semibold">{group.title}</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-300">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    className="size-2 rounded-full bg-rose-500"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="rounded-3xl border border-black/10 bg-black px-6 py-8 text-white dark:border-white/10 dark:bg-gray-900">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Elsewhere on the web</h3>
            <p className="max-w-2xl text-sm leading-7 text-white/80">
              These are the places I share work, experiments, and ways to get in
              touch.
            </p>
          </div>

          <ul className="flex flex-wrap gap-3">
            {toolboxResources.map(({ href, text, icon }) => (
              <li key={href}>
                <a
                  className="resource-link"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${text} (opens in a new tab)`}
                >
                  <img src={icon} alt="" className="resource-link__icon" />
                  <span className="text-sm font-medium">{text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
