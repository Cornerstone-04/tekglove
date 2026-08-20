# TekGlove

TekGlove is a wearable hand-data platform built around the Smart Dorsal Sensor. The website introduces the core platform, the KINETIX flagship product, and six glove concepts spanning sport, healthcare, recovery, defence, computing, and industrial work.

## Technology

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Motion for interface animation
- Lucide and React Icons
- Bun for dependency management

## Getting started

Install dependencies and start the development server:

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available commands

```bash
bun run dev        # Start the local development server
bun run lint       # Run ESLint
bun run typecheck  # Check TypeScript
bun run format     # Format the project with Prettier
bun run format:check # Verify project formatting
bun run build      # Create a production build
bun run check      # Run lint, type checking, and the production build
bun run start      # Serve the production build
```

## Project structure

```text
app/       Next.js routes, metadata, global styles, and app composition
content/   Static product, navigation, and company content
features/  Page-level features and their private components
shared/    Reusable layout, UI, and motion utilities
public/    Images and icons served by Next.js
```

Route files remain thin and delegate page implementation to `features/`. Shared modules must not import from routes or features. See [ARCHITECTURE.md](./ARCHITECTURE.md) for the complete dependency rules.

## Routes

- `/` introduces the platform and product ecosystem
- `/about` explains the origin of TekGlove and why the hand matters
- `/product` presents the complete TekGlove product family
- `/product/kradle` introduces the maternal and health monitoring glove
- `/product/kursor` introduces the human-computer interaction glove
- `/waitlist` provides the early-access entry point

## Notes

- `global.d.ts` is intentionally retained to prevent CSS import type errors in the root layout.
- The splash screen is session-aware and respects reduced-motion preferences.
- Completed implementation plans are kept locally under `plans/` and ignored by Git.

## Production

Run `bun run check` before deploying. The application is configured as a statically rendered Next.js site and can be deployed to Vercel or another compatible host.
