"use client";

import { AnimatedCounter } from "@/lib/animatedCounter";
import { motion } from "motion/react";

const COUNTERS = [
  { value: 3, suffix: "", label: "Products" },
  { value: 3, suffix: "", label: "Therapy Modes" },
  { value: 2025, suffix: "", label: "Launch Year" },
];

export function CounterStrip() {
  return (
    <div className="border-b border-border grid grid-cols-3">
      {COUNTERS.map((c, i) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={`flex flex-col items-center justify-center py-10 gap-2 ${i < 2 ? "border-r border-border" : ""}`}
        >
          <span className="font-heading font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-white">
            <AnimatedCounter value={c.value} suffix={c.suffix} />
          </span>
          <span className="font-mono text-xxs tracking-[0.2em] uppercase text-muted">
            {c.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
