"use client";

import { whyHandReasons } from "@/content/about";
import {
  alternatingCardReveal,
  revealViewport,
  staggeredCardGroup,
} from "@/shared/motion/card-reveal";
import { motion, useReducedMotion } from "motion/react";

export function WhyHand() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="border-b border-white/10 bg-surface px-6 py-24 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={revealViewport}
        transition={{
          duration: reduceMotion ? 0.2 : 0.5,
          ease: [0.23, 1, 0.32, 1],
        }}
        className="mb-16 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end"
      >
        <div>
          <p className="section-kicker mb-5">Why the Hand?</p>
          <h2 className="display-title text-[clamp(3rem,7vw,6rem)] text-white">
            The Hand Holds
            <br />
            <span className="text-orange">More Than Tools.</span>
          </h2>
        </div>
        <p className="copy-secondary max-w-[54ch] text-[0.95rem] leading-[1.85]">
          It holds data. TekGlove captures the signals produced by the hand and
          interprets them for performance, health, recovery, communication,
          safety, and productivity.
        </p>
      </motion.div>
      <motion.div
        custom={reduceMotion}
        variants={staggeredCardGroup}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {whyHandReasons.map((reason, index) => (
          <motion.article
            key={reason.id}
            custom={{ index, reduceMotion }}
            variants={alternatingCardReveal}
            className="surface-panel p-8 md:p-10"
          >
            <h3 className="mb-3 font-heading text-2xl font-semibold tracking-[-0.035em] text-white">
              {reason.title}
            </h3>
            <p className="copy-secondary max-w-[46ch] text-sm leading-[1.8]">
              {reason.desc}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
