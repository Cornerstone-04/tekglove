# 001 — Make the splash brief and session-aware

- **Status**: DONE
- **Commit**: 3d6dc67
- **Severity**: HIGH
- **Category**: Purpose & frequency
- **Estimated scope**: 1 file, small

## Problem

`components/ui/screen-loader.tsx:11-32` locks body scrolling and runs a simulated 2200ms progress sequence plus a 400ms hold and 700ms exit on every mount:

```tsx
document.body.style.overflow = "hidden";
const duration = 2200;
timeoutId = setTimeout(() => {
  setVisible(false);
  document.body.style.overflow = "";
}, 400);
```

This is now a branded splash, not a representation of loading. Repeating it within the same browser session wastes attention and makes a ready page feel slow.

## Target

- Show the splash once per browser tab session using `sessionStorage` key `tekglove-splash-seen`.
- If the key exists, initialize `visible` to `false` and never lock scrolling.
- If shown, set the key immediately and run for 900ms, hold at completion for 100ms, then use the existing exit.
- Reduce exit duration from 700ms to 250ms with `cubic-bezier(0.23, 1, 0.32, 1)`.
- Do not change splash artwork, copy, or layout.

## Repo conventions to follow

This is a client component and already keeps timers and body overflow cleanup inside `useEffect`.

## Steps

1. In `components/ui/screen-loader.tsx`, initialize visibility after checking `sessionStorage` safely on the client.
2. Store `tekglove-splash-seen` before starting the sequence.
3. Change the sequence to 900ms plus a 100ms hold and a 250ms exit using `[0.23, 1, 0.32, 1]`.
4. Ensure cleanup always restores `document.body.style.overflow`.

## Boundaries

- Do NOT change visual styling or artwork.
- Do NOT add dependencies.
- Do NOT treat progress as actual network status.

## Verification

- **Mechanical**: `npm run build` succeeds.
- **Feel check**: open a fresh tab and confirm one brief splash; navigate between routes and confirm it does not return; refresh the same tab and confirm it stays hidden.
- **Done when**: ready content is never blocked more than roughly 1.25 seconds and the splash appears only once per tab session.
