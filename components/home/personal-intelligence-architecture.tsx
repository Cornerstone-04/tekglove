"use client";

import { motion } from "motion/react";
import { PersonalIntelligenceDiagram } from "@/components/ui/personal-intelligence-diagram";

export function PersonalIntelligenceArchitecture() {
  return (
    <section
      id="personal-intelligence"
      className="scroll-mt-16 border-b border-border bg-surface py-28 md:py-36"
    >
      <div className="w-full px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end"
        >
          <div>
            <p className="mb-4 font-mono text-xxs tracking-[0.3em] text-orange">
              Personal Intelligence Architecture
            </p>
            <h2 className="font-heading text-[clamp(3rem,7vw,6rem)] font-black leading-[0.9] uppercase text-white">
              Connected Hand
              <br />
              <span className="text-orange">Intelligence.</span>
            </h2>
          </div>
          <p className="max-w-[58ch] text-sm leading-[1.9] text-white/50 md:pb-1">
            From hand signals to useful insight, every TekGlove product runs on
            the same connected architecture. The platform captures data,
            interprets it close to the wearer, and turns it into feedback,
            alerts, and actions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="border border-white/10 bg-[#050505] p-5 md:p-8"
        >
          <PersonalIntelligenceDiagram />
        </motion.div>
      </div>
    </section>
  );
}
