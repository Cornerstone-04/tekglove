# 006 — Simplify repetitive scroll reveals

- **Status**: DONE
- **Commit**: 3d6dc67
- **Severity**: MEDIUM
- **Category**: Cohesion & staging
- **Estimated scope**: 5 files, medium

## Problem

Product details in `app/product/page.tsx:74-159` animate nearly every label, heading, paragraph, specification, and CTA independently, with delays reaching 700ms. Card grids in product, about, features, and ecosystem repeat the same positional reveal for every child.

## Target

- Essential labels, body copy, specifications, and CTAs must not wait behind delayed entrances.
- Keep one reveal for each major section heading and one group-level reveal for each card grid.
- Remove child-level Motion wrappers from specification rows and static card grids where the parent already reveals.
- Where a stagger remains, use 50ms per item and never delay interaction.
- Standard section reveal: `opacity: 0` and `transform: translateY(16px)` to rest over 500ms with `[0.23, 1, 0.32, 1]`.

## Repo conventions to follow

Use existing `whileInView`, `viewport={{ once: true }}`, and Motion components. Keep section motion declarative.

## Steps

1. In `app/product/page.tsx`, collapse the nested detail animations into the existing containing `motion.div`; turn specifications and CTA wrappers into plain elements.
2. In `app/about/page.tsx`, keep section-header reveals and remove per-card positional motion from repeated grids.
3. In `components/home/features.tsx` and `components/home/ecosystem.tsx`, use a single grid-level reveal; render cards as plain articles/divs.
4. Use 500ms and `[0.23, 1, 0.32, 1]` for retained section reveals.

## Boundaries

- Do NOT change content, ordering, visual styling, or responsive layout.
- Do NOT remove the homepage hero entrance.
- Do NOT add dependencies.

## Verification

- **Mechanical**: `npm run build` succeeds.
- **Feel check**: scroll at normal reading speed; important copy and CTAs should already be available when they enter the viewport, and grids should feel like one composition rather than a sequence of tiles.
- **Done when**: no essential product detail is delayed more than 100ms and repeated grids no longer animate every child independently.
