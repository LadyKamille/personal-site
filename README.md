# Personal Site

A React + TypeScript portfolio site built with Vite. The app is structured as a small single-page experience with dedicated sections for a landing page, professional experience, and a toolbox overview.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- ESLint

## Features

- Section-based personal site with animated navigation between views
- Expandable experience timeline for work history and highlights
- Toolbox section covering technical strengths, delivery practices, and leadership focus
- Responsive layout with light/dark theme styling

## Getting started

### Prerequisites

- Node.js 20+
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The Vite dev server will start locally and print the URL in the terminal.

## Available scripts

- `npm run dev` — start the local development server
- `npm run build` — run TypeScript project builds and create a production bundle
- `npm run test` — run the Vitest suite in `jsdom`
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint across the project

## Project structure

```text
src/
  app/
    siteContent.ts
    types.ts
  components/
    ExpandableSection/
    PrimaryNav/
  features/
    Home/
    Experience/
    Toolbox/
  hooks/
    useNavIndicator.ts
    useSectionPanels.ts
  App.tsx
  App.css
  index.css
  main.tsx
```

## Notes

- `src/app/siteContent.ts` is the source of truth for section metadata and shared external resource links.
- Most feature copy still lives close to the UI: `Home`, `Experience`, and `Toolbox` remain mostly presentational components with inline content.
- Section transitions and nav indicator behavior are handled by `src/hooks/useSectionPanels.ts` and `src/hooks/useNavIndicator.ts`.
- Tests use Vitest + Testing Library, with browser-only APIs stubbed in `src/test/setup.ts`.
- Static assets such as icons and images live under `src/assets` and `public`.

## Deployment

This project builds to a static site, so it can be deployed anywhere that can serve the output from `dist/`.
