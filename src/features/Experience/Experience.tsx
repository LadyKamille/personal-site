import ExpandableSection from '../../components/ExpandableSection/ExpandableSection';

export default function Experience() {
  const liBeforeClasses =
    "before:-ml-5.75 before:mr-2.5 before:mt-2.25 before:content-[''] before:relative before:align-top before:inline-block before:size-3 before:rounded-full before:bg-rose-500 before:leading-2";
  const liClasses = `block border-l-2 border-rose-500 pl-4 mb-0 ${liBeforeClasses}`;

  return (
    <section
      id="experience"
      className="w-full space-y-6 px-1 sm:px-4 lg:mx-auto lg:max-w-5xl"
    >
      <div className="space-y-2">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-rose-500">
          Experience
        </p>
        <h1 className="sr-only">Experience</h1>
      </div>

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
                      Architectural Direction:&nbsp;
                    </span>
                    Steered the technical strategy for large-scale Angular
                    applications, ensuring the codebase evolved alongside rapid
                    ecosystem changes; defined the core standards and patterns
                    that supported a micro-frontend setup via Module Federation,
                    enabling the product to scale across both enterprise and
                    consumer markets.
                  </li>

                  <li>
                    <span className="font-bold">
                      AI-Augmented Engineering:&nbsp;
                    </span>{' '}
                    Accelerated team velocity by optimizing codebase
                    discoverability and context window management to ensure AI
                    agents accurately navigate complex logic. Developed custom
                    skills to automate specialized technical tasks and scaled
                    team output by training engineers on AI-optimized workflows,
                    including git worktrees, for concurrent development.
                  </li>

                  <li>
                    <span className="font-bold">
                      Responsible AI Integration:&nbsp;
                    </span>{' '}
                    Co-designed and implemented AI-powered features with strict
                    academic guardrails; developed responsive chat and real-time
                    feedback interfaces that encourage student inquiry over
                    direct answers.
                  </li>

                  <li>
                    <span className="font-bold">
                      Cross-Functional Strategy:&nbsp;
                    </span>
                    Led high-stakes initiatives by brokering consensus between
                    Engineering, Product, and UX; protected delivery timelines
                    by proactively mitigating scope creep and aligning design
                    requirements with architectural constraints.
                  </li>

                  <li>
                    <span className="font-bold">
                      Mentorship & Technical Leadership:&nbsp;
                    </span>
                    Elevated engineering standards by serving as a technical
                    role model; provided formal mentorships and continuous
                    guidance for peers across all levels, fostering professional
                    growth through architecturally focused code reviews,
                    collaborative pair programming, and building a team culture
                    of shared technical ownership.
                  </li>

                  <li>
                    <span className="font-bold">
                      Infrastructure & Cost Optimization:&nbsp;
                    </span>
                    Directed technical initiatives, including a $30,000+ annual
                    cost reduction via proprietary tool replacement and driving
                    platform stability through Sentry and LaunchDarkly
                    integrations.
                  </li>

                  <li>
                    <span className="font-bold">
                      Universal Design & User Equity:&nbsp;
                    </span>
                    Advanced the team’s core commitment to accessibility by
                    implementing automated accessibility testing within the
                    CI/CD pipeline; ensured inclusive patterns are caught and
                    corrected programmatically rather than reactively to
                    maintain a consistent experience for all users.
                  </li>
                </ul>
              </ExpandableSection>
            </li>
          </ol>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Buoy Software</h3>
          <p className="text-sm italic">August 2021 - July 2022</p>
          <ol className="list-none space-y-2 mt-2 pl-4">
            <li className={liClasses}>
              <ExpandableSection
                title="Senior Software Engineer"
                className="inline-block"
              >
                <ul className="list-disc space-y-2">
                  <li>
                    Worked on a small, early stage team to develop a healthcare
                    platform for blood product collection companies utilizing
                    Ruby on Rails and React.
                  </li>

                  <li>
                    Collaborated with the automation team to set up the E2E test
                    suite with Cypress.
                  </li>
                </ul>
              </ExpandableSection>
            </li>
          </ol>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Packback</h3>
          <p className="text-sm italic">January 2021 - August 2021</p>
          <ol className="list-none space-y-2 mt-2 pl-4">
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
          <ol className="list-none space-y-2 mt-2 pl-4">
            <li className={liClasses}>
              <ExpandableSection
                title="Senior Software Engineer"
                className="inline-block"
              >
                <ul className="list-disc space-y-2">
                  <li>
                    Contributed to the development and maintenance of
                    educational technology applications using React, React
                    Native, and Django.
                  </li>
                  <li>
                    Mentor for junior developers through pair programming and
                    creating video and live course training material.
                  </li>
                  <li>
                    Collaborated with DevOps to setup application monitoring,
                    feature flagging, and unit tests in CI/CD pipeline.
                  </li>
                </ul>
              </ExpandableSection>
            </li>
          </ol>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Interfolio</h3>
          <p className="text-sm italic">June 2014 - August 2020</p>
          <ol className="list-none space-y-2 mt-2 pl-4">
            <li className={liClasses}>
              <ExpandableSection
                title="Senior Software Engineer"
                className="inline-block"
              >
                <ul className="list-disc space-y-2">
                  <li>
                    Contributed to the development and maintenance of
                    educational technology applications using AngularJS,
                    Angular, and PHP.
                  </li>
                  <li>Migrated multiple AngularJS applications to Angular.</li>
                  <li>
                    Built REST APIs using PHP for direct customer use and our
                    Angular SPAs.
                  </li>
                  <li>
                    Supported a push for user equity by updating our core
                    products to meet WCAG standards.
                  </li>
                </ul>
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
    </section>
  );
}
