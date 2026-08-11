"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { about, principles, whyHandReasons } from "@/content/site";
import {
  alternatingCardReveal,
  motionEaseOut,
  staggeredCardGroup,
} from "@/shared/motion/card-reveal";

export default function AboutPage() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const heroTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["translateY(0px)", "translateY(-48px)"],
  );

  return (
    <div className="bg-bg pt-16">
      <div
        ref={heroRef}
        className="border-b border-white/10 px-6 pt-20 pb-16 md:px-12"
      >
        <motion.div
          style={
            reduceMotion
              ? { opacity: heroOpacity }
              : { opacity: heroOpacity, transform: heroTransform }
          }
          className="w-full"
        >
          <motion.p
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.5,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="section-kicker mb-5"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.5,
              delay: reduceMotion ? 0 : 0.05,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="display-title text-[clamp(3rem,9vw,7rem)] text-white"
          >
            From an Idea
            <br />
            <span className="text-orange">to the Hand.</span>
          </motion.h1>
        </motion.div>
      </div>

      <section className="border-b border-white/10 px-6 py-24 md:px-12">
        <div className="grid gap-16 md:grid-cols-2">
          <motion.div
            initial={{
              opacity: 0,
              transform: reduceMotion
                ? "translateX(0px)"
                : "translateX(-32px)",
            }}
            whileInView={{ opacity: 1, transform: "translateX(0px)" }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.5,
              ease: motionEaseOut,
            }}
          >
            <p className="section-kicker mb-5">
              The First Idea
            </p>
            <h2 className="mb-6 font-heading text-[clamp(2.4rem,5vw,4rem)] font-semibold tracking-[-0.04em] text-white">
              Box. Run. Bike.
            </h2>
            <p className="copy-secondary max-w-[62ch] text-base leading-[1.9]">
              TekGlove began with BRB, a compact sensor concept for capturing
              sports data across boxing, running, and cycling. The early
              question was simple: where on the body could one small sensor
              produce the most useful data?
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              transform: reduceMotion
                ? "translateX(0px)"
                : "translateX(32px)",
            }}
            whileInView={{ opacity: 1, transform: "translateX(0px)" }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.5,
              delay: reduceMotion ? 0 : 0.1,
              ease: motionEaseOut,
            }}
          >
            <p className="section-kicker mb-5">
              The Breakthrough
            </p>
            <h2 className="mb-6 font-heading text-[clamp(2.4rem,5vw,4rem)] font-semibold tracking-[-0.04em] text-white">
              Look to the Hand.
            </h2>
            <p className="copy-secondary max-w-[62ch] text-base leading-[1.9]">
              The foot can provide precise positioning for certain sports, but
              the hand holds a broader range of actionable data. Movement, grip,
              gesture, control, and physical response converge in one natural
              interface. That insight became TekGlove and the Smart Dorsal
              Sensor.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-surface px-6 py-24 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0.2 : 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="mb-16 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end"
        >
          <div>
            <p className="section-kicker mb-5">
              Why the Hand?
            </p>
            <h2 className="display-title text-[clamp(3rem,7vw,6rem)] text-white">
              The Hand Holds
              <br />
              <span className="text-orange">More Than Tools.</span>
            </h2>
          </div>
          <p className="copy-secondary max-w-[54ch] text-[0.95rem] leading-[1.85]">
            It holds data. TekGlove captures the signals produced by the hand
            and interprets them for performance, health, recovery,
            communication, safety, and productivity.
          </p>
        </motion.div>

        <motion.div
          custom={reduceMotion}
          variants={staggeredCardGroup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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

      <section className="border-b border-white/10 px-6 py-24 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0.2 : 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="mb-14"
        >
          <p className="section-kicker mb-5">
            The Platform Model
          </p>
          <h2 className="display-title text-[clamp(2.5rem,5vw,4.5rem)] text-white">
            From Signal to Impact.
          </h2>
        </motion.div>
        <motion.div
          custom={reduceMotion}
          variants={staggeredCardGroup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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

      <section className="px-6 py-24 text-center md:px-12">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0.2 : 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="mx-auto max-w-3xl"
        >
          <p className="section-kicker mb-5">
            Our Mission
          </p>
          <p className="copy-secondary mx-auto mb-8 max-w-[62ch] text-[0.95rem] leading-[1.85]">
            {about.mission}
          </p>
          <h2 className="display-title mb-8 text-[clamp(2.5rem,6vw,5rem)] text-white">
            Six Gloves.
            <br />
            <span className="text-orange">One Connected Vision.</span>
          </h2>
          <Link
            href="/#ecosystem"
            className="pressable inline-block bg-orange px-10 py-4 text-[0.85rem] font-semibold tracking-[0.08em] text-black transition-[opacity,transform] duration-200 hover:opacity-85"
          >
            Explore the Ecosystem →
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
