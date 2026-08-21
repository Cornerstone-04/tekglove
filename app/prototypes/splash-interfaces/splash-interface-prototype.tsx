"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ShaderBackdrop } from "@/shared/components/ui/shader-backdrop";
import { InterfaceDeck } from "./interface-deck";
import { SignalCycle } from "./signal-cycle";
import { UnifiedCore } from "./unified-core";

const variants = [
  { name: "Signal", Component: SignalCycle },
  { name: "Deck", Component: InterfaceDeck },
  { name: "Core", Component: UnifiedCore },
] as const;

export default function SplashInterfacePrototype() {
  const [current, setCurrent] = useState(0);
  const [replay, setReplay] = useState(0);
  const [ready, setReady] = useState(false);
  const pickerRef = useRef<HTMLElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const ActiveVariant = variants[current].Component;

  const moveHighlight = useCallback(() => {
    const item = itemRefs.current[current];
    const highlight = highlightRef.current;
    if (!item || !highlight) return;
    highlight.style.width = `${item.offsetWidth}px`;
    highlight.style.transform = `translateX(${item.offsetLeft}px)`;
  }, [current]);

  const setActive = useCallback((index: number) => {
    if (index < 0 || index >= variants.length) return;
    setCurrent(index);
    setReplay((value) => value + 1);
    const url = new URL(window.location.href);
    url.searchParams.set("v", String(index + 1));
    window.history.replaceState(null, "", url);
  }, []);

  useEffect(() => {
    const requested =
      Number(new URLSearchParams(window.location.search).get("v")) || 1;
    setCurrent(Math.min(Math.max(requested - 1, 0), variants.length - 1));
    requestAnimationFrame(() => requestAnimationFrame(() => setReady(true)));
  }, []);

  useLayoutEffect(() => {
    moveHighlight();
  }, [moveHighlight, ready]);

  useEffect(() => {
    const handleResize = () => moveHighlight();
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (
        /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName) ||
        target.isContentEditable ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey
      ) {
        return;
      }

      const number = Number.parseInt(event.key, 10);
      if (number >= 1 && number <= variants.length) setActive(number - 1);
      else if (event.key === "ArrowRight")
        setActive((current + 1) % variants.length);
      else if (event.key === "ArrowLeft")
        setActive((current - 1 + variants.length) % variants.length);
      else if (event.key === "r" || event.key === "R")
        setReplay((value) => value + 1);
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [current, moveHighlight, setActive]);

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-black">
      <ShaderBackdrop
        variant="sensor"
        className="mask-[radial-gradient(circle_at_center,black,transparent_68%)] opacity-30"
      />

      <div className="relative z-10 flex flex-col items-center gap-8 pb-12">
        <ActiveVariant key={`${current}-${replay}`} />
        <div className="text-center">
          <div className="font-brand text-[1.8rem] font-extrabold tracking-[0.2em] text-white uppercase">
            Tek<span className="text-orange">Glove</span>
          </div>
          <p className="mt-2 font-mono text-[0.55rem] font-medium tracking-[0.14em] text-white">
            ONE PLATFORM · MULTIPLE SIGNALS
          </p>
        </div>
      </div>

      <nav
        ref={pickerRef}
        className="proto-picker"
        aria-label="Prototype variants"
        data-ready={ready ? "" : undefined}
      >
        <span
          ref={highlightRef}
          className="proto-picker-highlight"
          aria-hidden="true"
        />
        {variants.map((variant, index) => (
          <button
            key={variant.name}
            ref={(element) => {
              itemRefs.current[index] = element;
            }}
            className="proto-picker-item"
            data-active={current === index ? "" : undefined}
            aria-current={current === index ? "true" : undefined}
            onClick={() => setActive(index)}
          >
            {variant.name}
          </button>
        ))}
        <span className="proto-picker-divider" aria-hidden="true" />
        <button
          className="proto-picker-item proto-picker-replay"
          aria-label="Replay animation (R)"
          onClick={() => setReplay((value) => value + 1)}
        >
          ↻
        </button>
      </nav>

      <style>{`
.proto-picker {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2147483647;
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 4px;
  border-radius: 999px;
  background: rgba(10, 10, 10, 0.82);
  -webkit-backdrop-filter: blur(12px) saturate(1.4);
  backdrop-filter: blur(12px) saturate(1.4);
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.08) inset,
    0 8px 24px rgba(0, 0, 0, 0.24),
    0 2px 6px rgba(0, 0, 0, 0.12);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 13px;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  user-select: none;
  -webkit-user-select: none;
}

.proto-picker-highlight {
  position: absolute;
  top: 4px;
  left: 0;
  height: 28px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  will-change: transform;
}

.proto-picker[data-ready] .proto-picker-highlight {
  transition:
    transform 250ms cubic-bezier(0.23, 1, 0.32, 1),
    width 250ms cubic-bezier(0.23, 1, 0.32, 1);
}

@media (prefers-reduced-motion: reduce) {
  .proto-picker[data-ready] .proto-picker-highlight { transition: none; }
}

.proto-picker-item {
  position: relative;
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 12px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: rgba(255, 255, 255, 0.55);
  font: inherit;
  cursor: pointer;
  transition: color 150ms ease-out;
}

.proto-picker-item:hover { color: rgba(255, 255, 255, 0.85); }
.proto-picker-item:active { transform: scale(0.97); }
.proto-picker-item:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.4);
  outline-offset: 2px;
}
.proto-picker-item[data-active] { color: #fff; }
.proto-picker-divider {
  width: 1px;
  height: 16px;
  margin: 0 4px;
  background: rgba(255, 255, 255, 0.12);
}
.proto-picker-replay { padding: 0 10px; font-size: 14px; }
.proto-picker[data-position="top"] { bottom: auto; top: 24px; }
      `}</style>
    </div>
  );
}
