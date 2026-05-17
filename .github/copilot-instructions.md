# Copilot instructions for personal-site

## Big picture
- This is a small Vite + React 19 + TypeScript single-page portfolio app with no router or global store. `src/App.tsx` switches among `home`, `experience`, and `toolbox` with local state only.
- `src/App.tsx` is the integration point: it imports `sections` and `resources` from `src/app/siteContent.ts`, renders `PrimaryNav`, and selects the active feature component via `renderSection()`.
- Navigation behavior is split intentionally: `src/hooks/useSectionPanels.ts` controls active/previous section state and enter/exit direction, while `src/hooks/useNavIndicator.ts` measures nav buttons and animates the sliding pill.
- Shared types live in `src/app/types.ts`. If you add a section, update `SectionId`, `sections`, `sectionOrder`, and the `buttonRefs` record in `useNavIndicator` together.

## Edit patterns
- `src/app/siteContent.ts` is the source of truth for nav labels, section ordering, and shared external links.
- Feature components are mostly presentational and still own much of their copy inline: `src/features/Experience/Experience.tsx` defines timeline entries in JSX, and `src/features/Toolbox/Toolbox.tsx` defines `toolboxGroups` locally.
- `src/components/ExpandableSection/ExpandableSection.tsx` is the reusable disclosure primitive for the timeline. It supports manual toggle plus `autoExpandOnView` with `IntersectionObserver`.
- Keep derived animation math in pure helpers like `getPanelDirection()`, `buildIndicatorAnimation()`, and `src/components/PrimaryNav/buildIndicatorInlineStyle.ts`.
- Tailwind CSS v4 is enabled through `@import "tailwindcss";` in `src/index.css`; prefer utility classes there, and keep bespoke animation/layout CSS in `src/App.css`.
- Preserve both light and dark mode behavior; the app uses dark variants in JSX plus root color-scheme setup in `src/index.css`.

## React rules to preserve
- Follow the official Rules of React: keep components and hooks pure, keep side effects out of render, and treat props/state/hook arguments as immutable snapshots.
- Only call hooks at the top level of React components or custom hooks. Do not put hooks inside conditions, loops, nested functions, or after early returns.
- Do not call component functions directly; let React render them through JSX. In this repo, `App.tsx` should keep returning `<Home />`, `<Experience />`, and `<Toolbox />` rather than invoking feature components as plain functions.
- If you need DOM measurement, timers, resize listeners, or `IntersectionObserver`, isolate them in effects or event handlers the way `useNavIndicator` and `ExpandableSection` already do.

## Testing and validation
- Main commands: `npm run dev`, `npm run build`, `npm run test`, and `npm run lint`.
- Tests use Vitest with `jsdom` (`vitest.config.ts`) and Testing Library. Setup lives in `src/test/setup.ts`, which mocks `IntersectionObserver` and stubs `requestAnimationFrame` for animation-heavy components.
- Follow the existing split: pure logic gets focused unit tests beside the source (`src/hooks/useSectionPanels.test.ts`, `src/hooks/useNavIndicator.test.ts`), while rendered behavior is covered with Testing Library (`src/App.test.tsx`, `src/components/PrimaryNav/PrimaryNav.test.tsx`).
- When changing nav or section behavior, update both the helper-level test and the rendered interaction path when applicable.

## Commit policy
- Include GitHub Copilot as a co-author when it materially contributes to a commit.

## Repo-specific conventions
- Keep components as default exports and colocate tests with the component/hook/helper they cover.
- Prefer deriving UI direction from `sectionOrder` rather than hardcoding transitions; `getPanelDirection()` is the canonical rule.