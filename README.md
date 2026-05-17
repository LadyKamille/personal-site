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
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint across the project

## Project structure

```text
src/
  components/
    ExpandableSection/
  features/
    Experience/
    Toolbox/
  App.tsx
  App.css
  index.css
  main.tsx
```

## Notes

- Content for the site currently lives directly in the React components.
- Static assets such as icons and images live under `src/assets` and `public`.

## Deployment

This project builds to a static site, so it can be deployed anywhere that can serve the output from `dist/`.
