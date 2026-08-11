# 002 — Add a complete reduced-motion policy

- **Status**: DONE
- **Commit**: 3d6dc67
- **Severity**: HIGH
- **Category**: Accessibility
- **Estimated scope**: 11 files, medium

## Problem

Only `.pia-connector` in `app/globals.css:106-109` responds to `prefers-reduced-motion`. Movement remains active in the splash, hero parallax and entrances, marquee, floating product imagery, counters, page entrances, navigation, and waitlist pulse.

## Target

- Add `useReducedMotion()` to Motion client components with positional motion.
- Under reduced motion, use `opacity` only, set `x`, `y`, and `scale` to their resting values, stop infinite movement, and use durations no longer than 200ms.
- In CSS, set `scroll-behavior: auto`, stop nonessential animations, and retain colour/opacity feedback:

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .pia-connector { animation: none; }
}
```

- Counters render their final number immediately when reduced motion is active.

## Repo conventions to follow

`components/ui/scroll-to-top.tsx` already uses `useReducedMotion()` to choose smooth or immediate scrolling. Follow that pattern.

## Steps

1. Extend the existing reduced-motion media query in `app/globals.css` with `html { scroll-behavior: auto; }`.
2. Use `useReducedMotion()` in the splash, hero, marquee, sticky feature, product, about, waitlist, navbar, and counter implementation.
3. Replace positional initial states with resting values and short opacity crossfades when reduction is requested.
4. Disable all infinite translations and pulsing under reduced motion.

## Boundaries

- Do NOT remove ordinary colour or opacity feedback.
- Do NOT redesign components.
- Do NOT add dependencies.

## Verification

- **Mechanical**: `npm run build` succeeds.
- **Feel check**: enable reduced motion and verify there is no parallax, continuous translation, smooth scrolling, counting sequence, or sliding entrance; short fades remain.
- **Done when**: every continuous or positional animation has a reduced-motion branch.
