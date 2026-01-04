import ExpandableSection from '../../components/ExpandableSection/ExpandableSection';

export default function Experience() {
  const liBeforeClasses =
    "before:-ml-5.75 before:mr-2.5 before:mt-2.25 before:content-[''] before:relative before:align-top before:inline-block before:size-3 before:rounded-full before:bg-rose-500 before:leading-2";
  const liClasses = `block border-l-2 border-rose-500 pl-4 mb-0 ${liBeforeClasses}`;

  return (
    <div
      id="experience"
      className="my-12 space-y-6 px-4 lg:max-w-250 lg:mx-auto h-full"
    >
      <h2 className="text-2xl font-semibold">Experience</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Packback</h3>
          <p className="text-sm italic">July 2022 - Present</p>
          <ol className="list-none space-y-2 mt-2 pl-4">
            <li
              className={`${liClasses} before:border-rose-200 before:border-2`}
            >
              <ExpandableSection
                title="Staff Software Engineer"
                defaultExpanded={true}
                className="inline-block"
              >
                <ul className="list-disc space-y-2">
                  <li>
                    <span className="font-bold">
                      Frontend Architecture & Angular Modernization:&nbsp;
                    </span>
                    Served as the lead Angular expert, governing the entire
                    application lifecycle by defining and enforcing best
                    practices to ensure high performance, maintainability, and
                    developer experience across the frontend suite.
                  </li>

                  <li>
                    <span className="font-bold">
                      AI Feature Development & Acceleration:&nbsp;
                    </span>{' '}
                    Led the frontend architecture and implementation for core
                    AI-powered educational features, including building the AI
                    Chat functionality with custom educational prompting,
                    architecting the real-time writing feedback system, and
                    implementing dynamic highlights for plagiarism and AI
                    content flagging. Accelerated team velocity by creating
                    custom slash commands and targeted prompts for AI coding
                    assistants to streamline application-specific feature
                    building and refactoring.
                  </li>

                  <li>
                    <span className="font-bold">
                      Project Leadership & Cross-Functional Alignment:&nbsp;
                    </span>{' '}
                    Directed cross-functional projects, establishing consensus
                    between Engineering, Product, and UX. Ensured accessibility
                    compliance across the frontend by validating the design
                    system/component library met all WCAG requirements and
                    integrating Storybook accessibility testing into the CI
                    pipeline. Actively reduced project scope creep by aligning
                    proposed designs with existing architecture and company
                    values.
                  </li>

                  <li>
                    <span className="font-bold">
                      Mentorship & Technical Coaching:&nbsp;
                    </span>
                    Elevated team capability by serving as a technical role
                    model and providing both formal mentorships and continuous
                    guidance, fostering the professional growth of all
                    engineering peers through constructive code reviews, pair
                    programming, and the development of internal best practices.
                  </li>

                  <li>
                    <span className="font-bold">
                      Technical Strategy & Infrastructure Leadership:&nbsp;
                    </span>
                    Championed and executed high-leverage architectural
                    projects, delivering a $30,000+ annual cost reduction (via
                    proprietary testing tool replacement). Drove platform
                    stability through Sentry integration for observability and
                    executing critical migrations (PayPal to Stripe; CloudBees
                    to LaunchDarkly).
                  </li>
                </ul>
              </ExpandableSection>
            </li>
            <li className={`text-lg font-semibold ${liClasses}`}>
              Senior Software Engineer
            </li>
          </ol>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Buoy Software</h3>
          <p className="text-sm italic">August 2021 - July 2022</p>
          <ol className="list-none space-y-2 mt-2">
            <li className={liClasses}>
              <ExpandableSection
                title="Senior Software Engineer"
                className="inline-block"
              >
                Contributed to the development and maintenance of a healthcare
                platform utilizing Ruby on Rails and React.
              </ExpandableSection>
            </li>
          </ol>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Packback</h3>
          <p className="text-sm italic">January 2021 - August 2021</p>
          <ol className="list-none space-y-2 mt-2">
            <li className={liClasses}>
              <ExpandableSection
                title="Senior Software Engineer"
                className="inline-block"
              >
                Contributed to the development and maintenance of educational
                technology applications using Angular and Laravel.
              </ExpandableSection>
            </li>
          </ol>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Genius Plaza</h3>
          <p className="text-sm italic">August 2020 - January 2021</p>
          <ol className="list-none space-y-2 mt-2">
            <li className={liClasses}>
              <ExpandableSection
                title="Senior Software Engineer"
                className="inline-block"
              >
                Contributed to the development and maintenance of educational
                technology applications using React, React Native, and Django.
              </ExpandableSection>
            </li>
          </ol>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Interfolio</h3>
          <p className="text-sm italic">June 2014 - August 2020</p>
          <ol className="list-none space-y-2 mt-2">
            <li className={liClasses}>
              <ExpandableSection
                title="Senior Software Engineer"
                className="inline-block"
              >
                Contributed to the development and maintenance of educational
                technology applications using AngularJS, Angular, and PHP.
              </ExpandableSection>
            </li>
            <li className={`text-lg font-semibold ${liClasses}`}>
              Software Engineer
            </li>
            <li className={`text-lg font-semibold ${liClasses}`}>
              Intern Software Engineer
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
