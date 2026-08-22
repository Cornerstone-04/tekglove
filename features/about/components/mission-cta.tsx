"use client";

import { about } from "@/content/about";
import { ButtonLink } from "@/shared/components/ui/button";
import { ShaderBackdrop } from "@/shared/components/ui/shader-backdrop";
import { revealViewport } from "@/shared/motion/card-reveal";
import { motion, useReducedMotion } from "motion/react";

export function MissionCta() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative overflow-hidden px-6 py-24 text-center md:px-12">
      <ShaderBackdrop
        variant="cta-halftone"
        className="mask-[linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] opacity-80"
      />
      <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={revealViewport}
        transition={{
          duration: reduceMotion ? 0.2 : 0.5,
          ease: [0.23, 1, 0.32, 1],
        }}
        className="relative z-10 mx-auto max-w-3xl"
      >
        <p className="section-kicker mb-5">Our Mission</p>
        <p className="copy-secondary mx-auto mb-8 max-w-[62ch] text-[0.95rem] leading-[1.85]">
          {about.mission}
        </p>
        <h2 className="display-title mb-8 text-[clamp(2.5rem,6vw,5rem)] text-white">
          Six Gloves.
          <br />
          <span className="text-orange">One Connected Vision.</span>
        </h2>
        <ButtonLink href="/#ecosystem" size="lg">
          Explore the Ecosystem
        </ButtonLink>
      </motion.div>
    </section>
  );
}
