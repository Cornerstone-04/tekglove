# 004 — Remove layout-driven animation work

- **Status**: DONE
- **Commit**: 3d6dc67
- **Severity**: MEDIUM
- **Category**: Performance
- **Estimated scope**: 2 files, small

## Problem

`components/ui/screen-loader.tsx:76-81` updates a `width` style from React state every frame. `lib/animatedCounter.tsx:33-40` also sets React state on every animation frame and lacks cancellation.

## Target

- Render splash progress with a fixed-width bar animated using `transform: scaleX()` and `transformOrigin: "left"`.
- Preserve the visible numeric progress value.
- Store and cancel the counter animation frame on cleanup.
- When reduced motion is enabled, render the counter’s final value without `requestAnimationFrame`.

## Repo conventions to follow

The repository uses Motion values for transforms and React effects for lifecycle cleanup. Animate compositor-friendly `transform` and `opacity` only.

## Steps

1. Replace splash progress `width` with `transform: scaleX(progress / 100)` and remove the width transition.
2. In `lib/animatedCounter.tsx`, add a frame identifier and cancel it during effect cleanup.
3. Integrate the reduced-motion final-value behavior specified by plan 002.

## Boundaries

- Do NOT alter counter values or splash copy.
- Do NOT add dependencies.

## Verification

- **Mechanical**: `npm run build` succeeds.
- **Feel check**: inspect the splash progress in slow motion; it grows from the left without resizing layout. Scroll away while a counter runs and verify no state update warning occurs.
- **Done when**: no animated `width` remains and every rAF loop has cleanup.
