"use client";

import { useRef } from "react";
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
  revealViewport,
  staggeredCardGroup,
} from "@/shared/motion/card-reveal";
import { ButtonLink } from "@/shared/components/ui/button";

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
      <section
        ref={heroRef}
        className="relative flex min-h-[calc(90svh-4rem)] items-center overflow-hidden px-6 py-16 md:px-12 md:py-20"
      >
        <div className="pointer-events-none absolute top-[8%] right-[-12%] h-192 w-3xl rounded-full bg-orange/8 blur-[120px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-linear-to-b from-transparent to-bg" />
        <motion.div
          style={
            reduceMotion
              ? { opacity: heroOpacity }
              : { opacity: heroOpacity, transform: heroTransform }
          }
          className="relative z-10 grid w-full gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
        >
          <div>
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
                duration: reduceMotion ? 0.2 : 0.6,
                delay: reduceMotion ? 0 : 0.05,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="display-title mb-8 max-w-[10ch] text-[clamp(3.75rem,8vw,8rem)] tracking-[-0.06em] text-white"
            >
              From an Idea
              <br />
              <span className="text-orange">to the Hand.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0.2 : 0.5,
                delay: reduceMotion ? 0 : 0.12,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="copy-secondary max-w-[48ch] text-[1rem] leading-[1.8]"
            >
              A compact sports sensor began the question. The hand revealed the
              larger opportunity: richer data, natural control, and one platform
              with applications across industries.
            </motion.p>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              transform: reduceMotion ? "scale(1)" : "scale(0.96)",
            }}
            animate={{ opacity: 1, transform: "scale(1)" }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.7,
              delay: reduceMotion ? 0 : 0.1,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="relative overflow-hidden rounded-4xl border border-white/12 bg-white/4.5 p-6 shadow-2xl backdrop-blur-2xl md:p-9"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(249,115,22,0.16),transparent_48%)]" />
            <div className="relative">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <p className="font-mono text-xs tracking-[0.08em] text-white/55">
                  Origin signal
                </p>
                <div className="flex gap-2">
                  {["Box", "Run", "Bike"].map((sport) => (
                    <span
                      key={sport}
                      className="rounded-full border border-white/12 bg-black/25 px-3 py-1.5 font-mono text-xs text-white/70"
                    >
                      {sport}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-[auto_1fr] gap-x-5 py-8">
                <div className="flex flex-col items-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-orange shadow-[0_0_24px_rgba(249,115,22,0.8)]" />
                  <span className="h-full w-px bg-linear-to-b from-orange/70 to-orange/10" />
                  <span className="h-2.5 w-2.5 rounded-full border border-orange bg-bg" />
                </div>
                <div>
                  <p className="mb-2 font-mono text-xs tracking-[0.08em] text-orange">
                    Compact sensor
                  </p>
                  <p className="max-w-[34ch] text-sm leading-[1.75] text-white/68">
                    One small device searching for the body position with the
                    most useful signal.
                  </p>
                  <div className="my-9 h-px bg-white/10" />
                  <p className="mb-2 font-mono text-xs tracking-[0.08em] text-orange">
                    The breakthrough
                  </p>
                  <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-none font-semibold tracking-[-0.055em] text-white">
                    The Hand
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 border-t border-white/10 pt-5 sm:grid-cols-4">
                {["Movement", "Grip", "Gesture", "Control"].map((signal) => (
                  <div
                    key={signal}
                    className="rounded-xl bg-black/35 px-3 py-4 text-center font-mono text-xs tracking-[0.04em] text-white/68"
                  >
                    {signal}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="border-b border-white/10 px-6 py-24 md:px-12">
        <div className="grid gap-16 md:grid-cols-2">
          <motion.div
            initial={{
              opacity: 0,
              transform: reduceMotion ? "translateX(0px)" : "translateX(-32px)",
            }}
            whileInView={{ opacity: 1, transform: "translateX(0px)" }}
            viewport={revealViewport}
            transition={{
              duration: reduceMotion ? 0.2 : 0.5,
              ease: motionEaseOut,
            }}
          >
            <p className="section-kicker mb-5">The First Idea</p>
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
              transform: reduceMotion ? "translateX(0px)" : "translateX(32px)",
            }}
            whileInView={{ opacity: 1, transform: "translateX(0px)" }}
            viewport={revealViewport}
            transition={{
              duration: reduceMotion ? 0.2 : 0.5,
              delay: reduceMotion ? 0 : 0.1,
              ease: motionEaseOut,
            }}
          >
            <p className="section-kicker mb-5">The Breakthrough</p>
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

      <section className="px-6 py-24 text-center md:px-12">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{
            duration: reduceMotion ? 0.2 : 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="mx-auto max-w-3xl"
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
    </div>
  );
}
