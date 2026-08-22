"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

const originSports = ["Box", "Run", "Bike"];
const handSignals = ["Movement", "Grip", "Gesture", "Control"];

export function AboutHero() {
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
                {originSports.map((sport) => (
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
                  One small device searching for the body position with the most
                  useful signal.
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
              {handSignals.map((signal) => (
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
  );
}
