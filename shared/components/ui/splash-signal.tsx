"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Crosshair, HeartPulse, MousePointer2 } from "lucide-react";
import { WatchSVG } from "./watch-svg";

const signals = [
  { name: "KRADLE", detail: "MATERNAL SIGNAL", Icon: HeartPulse },
  { name: "KINETIX", detail: "MOTION LOCK", Icon: Crosshair },
  { name: "KURSOR", detail: "GESTURE READY", Icon: MousePointer2 },
] as const;

const signalDuration = 1100;

export function SplashSignal() {
  const [activeSignal, setActiveSignal] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const interval = window.setInterval(() => {
      setActiveSignal((current) => (current + 1) % signals.length);
    }, signalDuration);

    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  const signal = signals[activeSignal];
  const Icon = signal.Icon;

  return (
    <WatchSVG progress={100} reduceMotion={Boolean(reduceMotion)}>
      <div className="relative flex size-full flex-col items-center justify-center select-none">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12)_0%,transparent_70%)]" />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={signal.name}
            initial={{
              opacity: 0,
              transform: reduceMotion
                ? "scale(1) translateZ(0)"
                : "scale(0.92) translateZ(0)",
              filter: reduceMotion ? "blur(0px)" : "blur(4px)",
            }}
            animate={{
              opacity: 1,
              transform: "scale(1) translateZ(0)",
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              transform: reduceMotion
                ? "scale(1) translateZ(0)"
                : "scale(1.06) translateZ(0)",
              filter: reduceMotion ? "blur(0px)" : "blur(4px)",
            }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.28,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-2 grid size-11 place-items-center rounded-full border border-orange/35 bg-linear-to-b from-orange/15 to-orange/5 text-orange shadow-[0_0_20px_rgba(249,115,22,0.22)]">
              <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
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
    </WatchSVG>
  );
}
