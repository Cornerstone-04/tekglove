"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Crosshair, HeartPulse, MousePointer2 } from "lucide-react";
import { WatchFrame } from "./watch-frame";

const signals = [
  { name: "KRADLE", detail: "MATERNAL SIGNAL", Icon: HeartPulse },
  { name: "KINETIX", detail: "MOTION LOCK", Icon: Crosshair },
  { name: "KURSOR", detail: "GESTURE READY", Icon: MousePointer2 },
] as const;

// 2500ms total loop / 3 items = ~833.33ms per step
const STEP_DURATION = 3000 / signals.length;

export function SignalCycle() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const interval = window.setInterval(
      () => setActive((current) => (current + 1) % signals.length),
      STEP_DURATION,
    );
    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  const signal = signals[active];
  const Icon = signal.Icon;

  return (
    <WatchFrame>
      <div className="relative flex h-full w-full flex-col items-center justify-between px-3 py-3 select-none">
        {/* Subtle Ambient Radial Glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12)_0%,transparent_70%)]" />

        {/* Animated Central Node */}
        <div className="relative my-auto flex flex-col items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={signal.name}
              initial={{
                opacity: 0,
                scale: reduceMotion ? 1 : 0.88,
                filter: "blur(4px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                scale: reduceMotion ? 1 : 1.08,
                filter: "blur(4px)",
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.28,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col items-center"
            >
              <div className="relative mb-2 grid size-11 place-items-center rounded-full border border-orange/35 bg-gradient-to-b from-orange/15 to-orange/5 text-orange shadow-[0_0_20px_rgba(249,115,22,0.22)]">
                <Icon size={20} strokeWidth={1.5} />
              </div>

              <span className="font-brand text-xs font-black tracking-[0.18em] text-white">
                {signal.name}
              </span>
              <span className="mt-0.5 font-mono text-[0.38rem] font-medium tracking-[0.14em] text-white/45">
                {signal.detail}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </WatchFrame>
  );
}
