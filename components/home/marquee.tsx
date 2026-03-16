"use client";

import { motion } from "motion/react";

const TAGLINE_ITEMS = [
  "Apple Watch Integrated",
  "Performance Grip",
  "Winter & Standard",
  "Personal Security Ecosystem",
  "Made for Athletes",
  "Apple Watch Integrated",
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
      className="border-t border-b border-border bg-surface overflow-hidden py-5"
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="flex gap-16 whitespace-nowrap w-max"
      >
        {TAGLINE_ITEMS.map((t, i) => (
          <span
            key={i}
            className="font-mono text-xxs tracking-[0.25em] uppercase text-white/30 shrink-0"
          >
            <span className="text-orange mr-4">✦</span>
            {t}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}