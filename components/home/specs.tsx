"use client";

import { specs } from "@/lib/data";
import { motion } from "motion/react";

export function Specs() {
  return (
    <section className="border-b border-border px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xxs tracking-[0.3em] uppercase text-orange mb-3"
            >
              Technical
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-black text-[clamp(2rem,5vw,4rem)] text-white uppercase"
            >
              Specifications
            </motion.h2>
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-xxs tracking-[0.2em] text-white/20 uppercase hidden md:block"
          >
            Tek Glove V2
          </motion.span>
        </div>

        {/* Spec rows */}
        <div className="border-t border-border">
          {specs.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group grid grid-cols-1 md:grid-cols-[280px_1fr] border-b border-border py-5 transition-colors duration-200 hover:bg-surface"
            >
              <span className="font-mono text-xxs tracking-[0.2em] uppercase text-white/30 md:py-1 mb-1 md:mb-0">
                {s.label}
              </span>
              <span className="font-sans text-[0.95rem] font-medium text-white/80 group-hover:text-white transition-colors duration-200">
                {s.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
