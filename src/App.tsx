import diceLogo from './assets/dice-d20.svg';
import headshot from './assets/headshot.jpg';
import githubLogo from './assets/github.svg';
import linkedInLogo from './assets/linkedin.svg';
import './App.css';
import Experience from './features/Experience/Experience';

function App() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory md:snap-none">
      <section className="h-screen snap-start flex flex-col sm:flex-row items-center justify-center gap-16">
        <div className="p-4">
          <img
            src={headshot}
            alt="Kamille Norris"
            className="block w-75 rounded-full"
          />
        </div>
        <div className="space-y-6 px-4 text-center sm:text-left lg:max-w-150">
          <h1 className="text-3xl">Hi, I'm Kamille Norris</h1>
          <h2 className="text-xl">
            Staff Software Engineer /{' '}
            <span className="dark:text-rose-300">Angular Expert</span>
          </h2>

          <p>
            <span className="italic">Technically</span> fullstack but primarily
            frontend focused engineer with over 10 years of experience.
          </p>

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
      </section>

      <section className="h-screen snap-start flex flex-col sm:flex-row items-center">
        <Experience />
      </section>
    </main>
  );
}

const resources = [
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
