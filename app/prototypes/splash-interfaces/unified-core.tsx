"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Crosshair, HeartPulse, MousePointer2 } from "lucide-react";
import { WatchFrame } from "./watch-frame";

const nodes = [
  {
    name: "KRADLE",
    label: "MATERNAL",
    Icon: HeartPulse,
    position: "top-1.5 left-1/2 -translate-x-1/2",
  },
  {
    name: "KINETIX",
    label: "MOTION",
    Icon: Crosshair,
    position: "right-2 bottom-4",
  },
  {
    name: "KURSOR",
    label: "GESTURE",
    Icon: MousePointer2,
    position: "bottom-4 left-2",
  },
] as const;

// 2000ms total loop / 3 items = ~666.67ms per step
const STEP_DURATION = 2500 / nodes.length;

export function UnifiedCore() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const interval = window.setInterval(
      () => setActive((current) => (current + 1) % nodes.length),
      STEP_DURATION,
    );
    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  return (
    <WatchFrame>
      <div className="relative flex h-full w-full flex-col items-center justify-between p-2 select-none">
        {/* Orbital Track Rings */}
        <div className="pointer-events-none absolute inset-2.5 rounded-full border border-white/[0.07]" />
        <div className="pointer-events-none absolute inset-5 rounded-full border border-dashed border-white/[0.05]" />

        {/* Orbiting Satellite Nodes */}
        {nodes.map(({ name, Icon, position }, index) => {
          const isActive = index === active;
          return (
            <motion.div
              key={name}
              animate={{
                opacity: isActive ? 1 : 0.3,
                scale: isActive && !reduceMotion ? 1.12 : 1,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.28,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`absolute ${position} z-20 flex size-7 items-center justify-center rounded-full border transition-colors duration-300 ${
                isActive
                  ? "border-orange/60 bg-orange/15 text-orange shadow-[0_0_12px_rgba(249,115,22,0.35)]"
                  : "border-white/10 bg-black/80 text-white/50"
              }`}
            >
              <Icon size={12} strokeWidth={1.75} />
            </motion.div>
          );
        })}

        {/* Center Hub */}
        <div className="absolute top-1/2 left-1/2 z-10 flex size-9 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/15 bg-[#141417]/90 shadow-[0_0_16px_rgba(0,0,0,0.8)] backdrop-blur-md">
          <span className="font-brand text-[0.62rem] font-black tracking-[0.05em] text-white">
            TG
          </span>
          <span className="font-mono text-[0.26rem] font-bold tracking-[0.1em] text-orange">
            CORE
          </span>
        </div>

        {/* Top Breadcrumb */}
        <div className="z-10 w-full text-center font-mono text-[0.38rem] tracking-[0.16em] text-white/30">
          NODE NETWORK
        </div>

        {/* Bottom Active Label Status */}
        <motion.div
          key={nodes[active].name}
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -2 }}
          transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
          className="z-10 flex items-center gap-1 font-mono text-[0.4rem] tracking-[0.14em]"
        >
          <span className="size-1 animate-pulse rounded-full bg-orange" />
          <span className="font-bold text-white/80">{nodes[active].name}</span>
          <span className="text-white/35">ACTIVE</span>
        </motion.div>
      </div>
    </WatchFrame>
  );
}
