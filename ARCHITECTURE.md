# TekGlove frontend architecture

TekGlove uses the Next.js App Router with a small feature-oriented structure.
The goal is clear ownership and dependency direction without adding layers that
a static product site does not need.

## Directory ownership

```text
app/       Next.js routes, metadata, global styles, and application composition
content/   Static product, navigation, and company content
features/  Route-level product capabilities and their private components
shared/    Reusable layout, UI, and motion infrastructure
public/    Static images and icons
plans/     Completed animation implementation records
```

Route files in `app/` re-export feature entry points. They should remain thin.
Feature-specific components stay inside their owning feature. Shared modules
must be usable without importing a feature or route.

## Dependency direction

```text
content + shared  ->  features  ->  app
```

- `shared/` and `content/` must not import from `features/` or `app/`.
- A feature must not import another feature. Compose cross-feature behavior in
  `app/` instead.
- Files within one feature use relative imports.
- Avoid barrel files. Direct imports keep ownership and bundle paths visible.

These constraints are enforced in `eslint.config.mjs`.

## Deliberate scope

The site has no remote API, persisted application state, forms, or authenticated
routes. It therefore does not include an API client, runtime response schemas,
global state library, or server-cache library. Add those only when a real
boundary exists.

Local UI state stays inside the component that consumes it. Motion recipes are
shared because the same behavior is used across multiple features.

## Validation

```bash
bun run format:check
bun run lint
bun run typecheck
bun run build
```

Run `bun run check` to execute linting, type checking, and the production build
together.
