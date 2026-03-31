"use client";

import { motion } from "motion/react";

const TAGLINE_ITEMS = [
  "Smart Watch Integrated",
  "Performance Grip",
  "Winter & Standard",
  "Personal Security Ecosystem",
  "Made for Athletes",
  "Smart Watch Integrated",
  "Performance Grip",
  "Winter & Standard",
  "Personal Security Ecosystem",
  "Made for Athletes",
];

export function Marquee() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="overflow-hidden border-t border-b border-border bg-surface py-5"
    >
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 gap-16 whitespace-nowrap pr-16"
          >
            {TAGLINE_ITEMS.map((t, i) => (
              <span
                key={`${group}-${i}`}
                className="shrink-0 font-mono text-xxs uppercase tracking-[0.25em] text-white/30"
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
