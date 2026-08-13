"use client";

import { motion, useReducedMotion } from "motion/react";
import { PersonalIntelligenceDiagram } from "@/shared/components/ui/personal-intelligence-diagram";
import { ShaderBackdrop } from "@/shared/components/ui/shader-backdrop";
import { revealViewport } from "@/shared/motion/card-reveal";

export function PersonalIntelligenceArchitecture() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="personal-intelligence"
      className="relative scroll-mt-16 overflow-hidden border-b border-white/8 bg-surface py-28 md:py-36"
    >
      <ShaderBackdrop
        variant="intelligence"
        className="opacity-25 mask-[linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]"
      />

      <div className="relative z-10 w-full px-6 md:px-12">
        <motion.div
          initial={{
            opacity: 0,
            transform: reduceMotion
              ? "translate3d(0, 0, 0)"
              : "translate3d(0, 16px, 0)",
          }}
          whileInView={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
          viewport={revealViewport}
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
          viewport={revealViewport}
          transition={{
            duration: reduceMotion ? 0.2 : 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="relative border-y border-white/10 bg-[#070708]/45 py-6 md:py-8"
        >
          <PersonalIntelligenceDiagram />
        </motion.div>
      </div>
    </section>
  );
}
