import headshot from '../../assets/headshot.jpg';
import type { ResourceLink } from '../../app/types';

interface HomeProps {
  resources: ResourceLink[];
}

export default function Home({ resources }: HomeProps) {
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
        <h1 className="sr-only">Home</h1>
        <h2 className="text-3xl font-semibold sm:text-4xl">
          Hi, I&apos;m Kamille Norris
        </h2>
        <h3 className="text-xl text-gray-700 dark:text-gray-200 sm:text-2xl">
          Staff Software Engineer /{' '}
          <span className="dark:text-rose-300">Angular Expert</span>
        </h3>

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
                className="resource-link resource-link--home"
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                <img src={icon} alt="" className="resource-link__icon" />
                <span className="text-sm font-medium">{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
