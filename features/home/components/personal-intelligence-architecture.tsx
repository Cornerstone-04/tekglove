"use client";

import { motion, useReducedMotion } from "motion/react";
import { PersonalIntelligenceDiagram } from "@/shared/components/ui/personal-intelligence-diagram";

export function PersonalIntelligenceArchitecture() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="personal-intelligence"
      className="scroll-mt-16 border-b border-white/8 bg-surface py-28 md:py-36"
    >
      <div className="w-full px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0.2 : 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="mb-14 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end"
        >
          <div>
            <p className="section-kicker mb-5">
              Personal Intelligence Architecture
            </p>
            <h2 className="display-title text-[clamp(3rem,7vw,6rem)] text-white">
              Connected Hand
              <br />
              <span className="text-orange">Intelligence.</span>
            </h2>
          </div>
          <p className="copy-secondary max-w-[58ch] text-[0.95rem] leading-[1.85] md:pb-1">
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
          transition={{
            duration: reduceMotion ? 0.2 : 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="surface-panel bg-[#070708] p-5 md:p-8"
        >
          <PersonalIntelligenceDiagram />
        </motion.div>
      </div>
    </section>
  );
}
