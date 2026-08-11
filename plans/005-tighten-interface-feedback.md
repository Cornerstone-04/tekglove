# 005 — Tighten navigation and press feedback

- **Status**: DONE
- **Commit**: 3d6dc67
- **Severity**: MEDIUM
- **Category**: Easing, duration & physicality
- **Estimated scope**: 3 files, medium

## Problem

`components/layout/Navbar.tsx:35` takes 350ms to hide or return. `components/ui/scroll-to-top.tsx:40-43` uses a 350ms entrance and `transition-all ease-linear duration-300`. Primary links provide hover feedback but no immediate press response.

## Target

Add tokens to `app/globals.css`:

```css
--ease-out: cubic-bezier(0.23, 1, 0.32, 1);
--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
```

- Navbar hide/show: 240ms using `[0.23, 1, 0.32, 1]`.
- Mobile overlay: 240ms using `[0.23, 1, 0.32, 1]`; child stagger 50ms, with no CTA delay beyond the links.
- Scroll-to-top entrance: 220ms using the same ease-out.
- Replace `transition-all` with targeted border-color, background-color, transform, and opacity transitions.
- Add a global `.pressable` utility with `transform: scale(0.97)` on `:active` and `transition: transform 160ms cubic-bezier(0.23, 1, 0.32, 1)`.
- Apply `.pressable` to primary CTAs, secondary CTA buttons, mobile menu button, and scroll-to-top button.

## Repo conventions to follow

Motion curves are currently passed as numeric arrays. CSS component utilities live in `app/globals.css`.

## Steps

1. Add the easing custom properties and `.pressable` component utility to `app/globals.css`.
2. Update navbar and mobile-menu durations and curves.
3. Update scroll-to-top timing and replace `transition-all`.
4. Apply `.pressable` to interactive CTA and utility controls across the named files without changing their visual design.

## Boundaries

- Do NOT change navigation behavior or layout.
- Do NOT add bounce.
- Do NOT add dependencies.

## Verification

- **Mechanical**: `npm run build` and `git diff --check` succeed.
- **Feel check**: rapidly scroll up/down and toggle the mobile menu; motion should retarget cleanly and feel immediate. Hold a CTA down and confirm subtle scale feedback occurs before release.
- **Done when**: interface motion stays below 300ms, no `transition-all` remains on scroll-to-top, and key controls respond on press.
