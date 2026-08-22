"use client";

import { principles } from "@/content/about";
import {
  alternatingCardReveal,
  revealViewport,
  staggeredCardGroup,
} from "@/shared/motion/card-reveal";
import { motion, useReducedMotion } from "motion/react";

export function PlatformModel() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="border-b border-white/10 px-6 py-24 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={revealViewport}
        transition={{
          duration: reduceMotion ? 0.2 : 0.5,
          ease: [0.23, 1, 0.32, 1],
        }}
        className="mb-14"
      >
        <p className="section-kicker mb-5">The Platform Model</p>
        <h2 className="display-title text-[clamp(2.5rem,5vw,4.5rem)] text-white">
          From Signal to Impact.
        </h2>
      </motion.div>
      <motion.div
        custom={reduceMotion}
        variants={staggeredCardGroup}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {principles.map((principle, index) => (
          <motion.article
            key={principle.title}
            custom={{ index, reduceMotion }}
            variants={alternatingCardReveal}
            className="surface-panel p-8 md:p-10"
          >
            <h3 className="mb-3 font-heading text-2xl font-semibold tracking-[-0.035em] text-white">
              {principle.title}
            </h3>
            <p className="copy-secondary text-sm leading-[1.8]">
              {principle.desc}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
