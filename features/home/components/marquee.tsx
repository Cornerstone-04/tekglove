"use client";

import { motion, useReducedMotion } from "motion/react";

const TAGLINE_ITEMS = [
  "Smart Dorsal Sensor",
  "Movement Data",
  "Grip Intelligence",
  "Gesture Recognition",
  "Built Around the Hand",
  "Smart Dorsal Sensor",
  "Movement Data",
  "Grip Intelligence",
  "Gesture Recognition",
  "Built Around the Hand",
];

export function Marquee() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: reduceMotion ? 0.2 : 0.8,
        delay: reduceMotion ? 0 : 0.3,
      }}
      className="overflow-hidden border-y border-white/8 bg-surface/80 py-5"
    >
      <motion.div
        className="flex w-max"
        animate={reduceMotion ? { x: "0%" } : { x: ["0%", "-50%"] }}
        transition={
          reduceMotion
            ? { duration: 0.2 }
            : { duration: 22, repeat: Infinity, ease: "linear" }
        }
      >
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 gap-16 whitespace-nowrap pr-16"
          >
            {TAGLINE_ITEMS.map((t, i) => (
              <span
                key={`${group}-${i}`}
                className="shrink-0 font-mono text-xs tracking-[0.08em] text-white/62"
              >
                <span className="mr-4 text-orange">✦</span>
                {t}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
