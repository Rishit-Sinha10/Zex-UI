# Zex-UI

Zex-UI is a web application built with Next.js, React, TypeScript, and Tailwind CSS, featuring reusable UI components.

## Features

- **Next.js App Router**: Configured layout using `next/font` for Geist font integration.
- **Tailwind CSS Styling**: Utility-first CSS setup via PostCSS and Tailwind v4.
- **Navigation Bar**: Reusable client-side header component with search and toggle functionality.
- **TypeScript Configuration**: Module resolution and path aliasing (`@/*`) set up in `tsconfig.json`.

## Project Structure

```
.
├── app/
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout with Geist font and Navbar
│   └── page.tsx          # Landing page component
├── component/
│   └── ui/
│       └── navbar.jsx    # Stateful navigation header component
├── public/
│   └── images/
│       └── logo.svg      # Navigation logo asset
├── next.config.ts        # Next.js configuration
├── package.json          # Dependencies and scripts
└── tsconfig.json         # TypeScript compiler configuration
```

## Installation

Install project dependencies using Bun:

```bash
bun install
```

## Usage

### Development Server

Start the Next.js development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Build and Production

Build the application for production deployment:

```bash
bun run build
```

Start the production server:

```bash
bun run start
```

### Code Quality

Run ESLint to check for formatting and syntax errors:

```bash
bun run lint
```

## Components

### `Navbar` (`component/ui/navbar.jsx`)

A interactive header navigation component that provides:
- Logo image branding and site title link (`/`)
- Accessible search input field with controlled state
- Stateful toggle button switching between `ON` and `OFF` states