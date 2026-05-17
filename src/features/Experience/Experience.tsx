import type { ReactNode } from 'react';
import ExpandableSection from '../../components/ExpandableSection/ExpandableSection';

const timelineEntryClasses = 'relative pl-10';
const timelineCardClasses =
  'rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.22)] backdrop-blur-sm';
const entryHeaderClasses = 'space-y-3';
const jobTitleClasses = 'text-lg font-semibold text-white';

interface ExperienceEntryProps {
  company: string;
  dates: string;
  title: ReactNode;
  children: ReactNode;
  defaultExpanded?: boolean;
  headerExtras?: ReactNode;
}

function ExperienceEntry({
  company,
  dates,
  title,
  children,
  defaultExpanded = false,
  headerExtras,
}: ExperienceEntryProps) {
  return (
    <article className={timelineEntryClasses}>
      <span
        aria-hidden="true"
        className="absolute left-0 top-2.5 flex size-6 items-center justify-center rounded-full border border-rose-300/40 bg-slate-950 shadow-[0_0_0_6px_rgba(2,6,23,0.9)]"
      >
        <span
          aria-hidden="true"
          className="size-2.5 rounded-full bg-rose-500"
        />
      </span>

      <ExpandableSection
        className={timelineCardClasses}
        defaultExpanded={defaultExpanded}
        autoExpandOnView={true}
        header={
          <div className={entryHeaderClasses}>
            <div className="space-y-1">
              <h2 className="text-xl font-semibold text-white">{company}</h2>
              <p className="text-sm italic text-slate-300">{dates}</p>
            </div>
            <h3 className={jobTitleClasses}>{title}</h3>
            {headerExtras}
          </div>
        }
      >
        {children}
      </ExpandableSection>
    </article>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="w-full space-y-6 px-1 sm:px-4 lg:mx-auto lg:max-w-5xl"
    >
      <div className="space-y-2">
        <h1
          id="experience-heading"
          className="text-sm font-medium uppercase tracking-[0.3em] text-rose-500"
        >
          Experience
        </h1>
      </div>

      <div className="relative space-y-8 before:absolute before:left-[0.6875rem] before:top-4 before:bottom-4 before:w-px before:bg-gradient-to-b before:from-rose-300 before:via-rose-500/50 before:to-transparent">
        <ExperienceEntry
          company="Packback"
          dates="July 2022 - Present"
          title="Staff Software Engineer"
          defaultExpanded={true}
        >
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="font-bold">Architectural Direction:&nbsp;</span>
              Steered the technical strategy for large-scale Angular
              applications, ensuring the codebase evolved alongside rapid
              ecosystem changes; defined the core standards and patterns that
              supported a micro-frontend setup via Module Federation, enabling
              the product to scale across both enterprise and consumer markets.
            </li>
            <li>
              <span className="font-bold">AI-Augmented Engineering:&nbsp;</span>{' '}
              Accelerated team velocity by optimizing codebase discoverability
              and context window management to ensure AI agents accurately
              navigate complex logic. Developed custom skills to automate
              specialized technical tasks and scaled team output by training
              engineers on AI-optimized workflows, including git worktrees, for
              concurrent development.
            </li>
            <li>
              <span className="font-bold">
                Responsible AI Integration:&nbsp;
              </span>{' '}
              Co-designed and implemented AI-powered features with strict
              academic guardrails; developed responsive chat and real-time
              feedback interfaces that encourage student inquiry over direct
              answers.
            </li>
            <li>
              <span className="font-bold">
                Cross-Functional Strategy:&nbsp;
              </span>
              Led high-stakes initiatives by brokering consensus between
              Engineering, Product, and UX; protected delivery timelines by
              proactively mitigating scope creep and aligning design
              requirements with architectural constraints.
            </li>
            <li>
              <span className="font-bold">
                Mentorship & Technical Leadership:&nbsp;
              </span>
              Elevated engineering standards by serving as a technical role
              model; provided formal mentorships and continuous guidance for
              peers across all levels, fostering professional growth through
              architecturally focused code reviews, collaborative pair
              programming, and building a team culture of shared technical
              ownership.
            </li>
            <li>
              <span className="font-bold">
                Infrastructure & Cost Optimization:&nbsp;
              </span>
              Directed technical initiatives, including a $30,000+ annual cost
              reduction via proprietary tool replacement and driving platform
              stability through Sentry and LaunchDarkly integrations.
            </li>
            <li>
              <span className="font-bold">
                Universal Design & User Equity:&nbsp;
              </span>
              Advanced the team’s core commitment to accessibility by
              implementing automated accessibility testing within the CI/CD
              pipeline; ensured inclusive patterns are caught and corrected
              programmatically rather than reactively to maintain a consistent
              experience for all users.
            </li>
          </ul>
        </ExperienceEntry>

        <ExperienceEntry
          company="Buoy Software"
          dates="August 2021 - July 2022"
          title="Senior Software Engineer"
        >
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Worked on a small, early stage team to develop a healthcare
              platform for blood product collection companies utilizing Ruby on
              Rails and React.
            </li>
            <li>
              Collaborated with the automation team to set up the E2E test suite
              with Cypress.
            </li>
          </ul>
        </ExperienceEntry>

        <ExperienceEntry
          company="Packback"
          dates="January 2021 - August 2021"
          title="Senior Software Engineer"
        >
          <p>
            Contributed to the development and maintenance of educational
            technology applications using Angular and Laravel.
          </p>
        </ExperienceEntry>

        <ExperienceEntry
          company="Genius Plaza"
          dates="August 2020 - January 2021"
          title="Senior Software Engineer"
        >
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Contributed to the development and maintenance of educational
              technology applications using React, React Native, and Django.
            </li>
            <li>
              Mentor for junior developers through pair programming and creating
              video and live course training material.
            </li>
            <li>
              Collaborated with DevOps to setup application monitoring, feature
              flagging, and unit tests in CI/CD pipeline.
            </li>
          </ul>
        </ExperienceEntry>

        <ExperienceEntry
          company="Interfolio"
          dates="June 2014 - August 2020"
          title={
            <div className="flex flex-wrap items-center gap-2 text-base font-semibold text-white sm:text-lg">
              <span>Intern</span>
              <span className="text-rose-300/70">→</span>
              <span>Software Engineer</span>
              <span className="text-rose-300/70">→</span>
              <span>Senior Software Engineer</span>
            </div>
          }
        >
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Contributed to the development and maintenance of educational
              technology applications using AngularJS, Angular, and PHP.
            </li>
            <li>Migrated multiple AngularJS applications to Angular.</li>
            <li>
              Built REST APIs using PHP for direct customer use and our Angular
              SPAs.
            </li>
            <li>
              Supported a push for user equity by updating our core products to
              meet WCAG standards.
            </li>
          </ul>
        </ExperienceEntry>
      </div>
    </section>
  );
}
