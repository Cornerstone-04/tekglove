# 003 — Reduce ambient animation to one signature moment

- **Status**: DONE
- **Commit**: 3d6dc67
- **Severity**: HIGH
- **Category**: Purpose & frequency
- **Estimated scope**: 4 files, small

## Problem

The same slow vertical float repeats in `components/home/hero.tsx:106-108`, `components/home/sticky-function.tsx:34-40`, and `app/product/page.tsx:56-59`. The scroll hint also loops at `components/home/hero.tsx:142-144`. Combined with the marquee, too many unrelated objects move continuously.

## Target

- Keep the homepage hero glove as the single signature floating object.
- Remove the infinite vertical animation wrapper from the sticky feature image and product-page image while retaining their entrance animations.
- Replace the hero scroll-hint bounce with a static orange-to-transparent line.
- Keep the marquee because its directional movement communicates breadth, but make reduced-motion behavior static under plan 002.

## Repo conventions to follow

Keep existing markup, imagery, and scroll-linked hero transforms. Delete only the redundant loop props/wrappers.

## Steps

1. In `components/home/sticky-function.tsx`, replace the looping `motion.div` around the image with a plain `div`.
2. In `app/product/page.tsx`, replace the looping product-image wrapper with a plain `div`.
3. In `components/home/hero.tsx`, replace the bouncing scroll-line `motion.div` with a plain `div`.
4. Do not change the hero glove float or marquee timing.

## Boundaries

- Do NOT change imagery, layout, copy, or the hero glove loop.
- Do NOT remove entrance reveals.

## Verification

- **Mechanical**: `npm run build` succeeds.
- **Feel check**: observe the homepage for 15 seconds; only the hero glove and marquee should move continuously.
- **Done when**: product and sticky imagery remain still and the scroll indicator no longer bounces.
