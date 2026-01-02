import headshot from './headshot.jpg';
import dice from './dice-d20.svg';
import github from './github.svg';
import linkedIn from './linkedin.svg';

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex flex-col sm:flex-row items-center gap-16 min-h-0">
        <div className="max-w-[100vw] p-4">
          <img
            src={headshot}
            alt="Kamille Norris"
            className="block w-75 rounded-full"
          />
        </div>
        <div className="space-y-6 px-4 text-center sm:text-left">
          <h1 className="text-3xl">Hi, I'm Kamille Norris</h1>
          <h2 className="text-xl">
            Staff Software Engineer /{' '}
            <span className="dark:text-rose-300">Angular Expert</span>
          </h2>
          <ul className="flex justify-center sm:justify-start">
            {resources.map(({ href, text, icon }) => (
              <li key={href} className="p-3 first-of-type:pl-0">
                <a
                  className="group flex items-center gap-3"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={icon}
                    className="w-10 dark:invert hover:invert-55 hover:sepia-95 hover:scale-125 transition duration-300 ease-in-out"
                  />
                  <span className="sr-only">{text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

const resources = [
  {
    href: 'https://foundry.kamillenorris.com',
    text: 'FoundryVTT',
    icon: dice,
  },
  {
    href: 'https://www.linkedin.com/in/kamille-norris-a37971a4',
    text: 'LinkedIn',
    icon: linkedIn,
  },
  {
    href: 'https://github.com/LadyKamille',
    text: 'Github',
    icon: github,
  },
];
