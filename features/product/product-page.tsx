"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { athleticUseCases, features, specs } from "@/content/site";
import {
  alternatingCardReveal,
  revealViewport,
  staggeredCardGroup,
} from "@/shared/motion/card-reveal";
import { ShaderBackdrop } from "@/shared/components/ui/shader-backdrop";
import { ButtonLink } from "@/shared/components/ui/button";
import { FloatingGlove } from "@/shared/components/ui/floating-glove";

export default function ProductPage() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const productTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["translateY(0px) scale(1)", "translateY(-28px) scale(0.94)"],
  );

  return (
    <div className="bg-bg pt-16">
      <section
        ref={heroRef}
        className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-6 py-16 md:px-12 md:py-20"
      >
        <ShaderBackdrop
          variant="sensor"
          className="opacity-35 mask-[radial-gradient(circle_at_72%_50%,black,transparent_55%)]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-40 bg-linear-to-b from-transparent to-bg" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 grid w-full gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center"
        >
          <div className="relative z-20">
            <motion.p
              initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0.2 : 0.5,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="section-kicker mb-5"
            >
              Flagship · KINETIX™
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0.2 : 0.6,
                delay: reduceMotion ? 0 : 0.05,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="display-title mb-7 max-w-[8ch] text-[clamp(4rem,9vw,9rem)] tracking-[-0.06em] text-white"
            >
              TekGlove <span className="text-orange">V1</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0.2 : 0.5,
                delay: reduceMotion ? 0 : 0.12,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="mb-5 text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-[-0.035em] text-white"
            >
              Hand Data for Athletes
            </motion.h2>
            <p className="copy-secondary mb-9 max-w-[48ch] text-[0.98rem] leading-[1.8]">
              The athletic expression of the TekGlove platform, capturing
              movement, grip, gestures, and hand position without restricting
              how an athlete moves.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/waitlist" icon={false}>
                Get Early Access
              </ButtonLink>
              <ButtonLink
                href="#specifications"
                variant="secondary"
                icon={false}
              >
                View Specifications
              </ButtonLink>
            </div>
          </div>

          <motion.div
            style={reduceMotion ? undefined : { transform: productTransform }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.7,
              delay: reduceMotion ? 0 : 0.08,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="relative flex min-h-104 items-center justify-center lg:min-h-168"
          >
            <div className="absolute inset-[8%] rounded-full bg-orange/10 blur-3xl" />
            <FloatingGlove className="relative z-10 w-full">
              <Image
                src="/images/kinetix-hero.webp"
                alt="KINETIX athletic glove with a live biometric display"
                width={760}
                height={760}
                className="h-auto w-full max-w-184 object-contain"
                priority
              />
            </FloatingGlove>
            <div className="absolute right-0 top-[16%] z-20 max-w-56 rounded-2xl border border-white/15 bg-black/55 p-4 shadow-2xl backdrop-blur-2xl md:p-5">
              <p className="mb-2 font-mono text-xs tracking-[0.08em] text-orange">
                Smart Dorsal Sensor
              </p>
              <p className="text-sm leading-relaxed text-white/75">
                Motion · Grip · Gesture · Position
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section
        id="specifications"
        className="scroll-mt-20 border-b border-white/10 px-6 py-12 md:px-12"
      >
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {specs.map((spec) => (
            <div key={spec.label} className="bg-[#080809] px-5 py-6">
              <p className="mb-2 font-mono text-xs tracking-[0.06em] text-orange">
                {spec.label}
              </p>
              <p className="text-sm leading-relaxed text-white/78">
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-20 md:px-12 md:py-28">
        <motion.div
          custom={reduceMotion}
          variants={staggeredCardGroup}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid gap-5 lg:grid-cols-2"
        >
          <motion.article
            custom={{ index: 0, reduceMotion }}
            variants={alternatingCardReveal}
            className="surface-panel overflow-hidden"
          >
            <div className="relative flex min-h-88 items-center justify-center bg-white/2 p-8 sm:min-h-120">
              <div className="absolute inset-[18%] rounded-full bg-orange/10 blur-3xl" />
              <FloatingGlove className="relative w-full">
                <Image
                  src="/images/kinetix-sensor-front.webp"
                  alt="Front view of the KINETIX integrated dorsal sensor"
                  width={720}
                  height={720}
                  className="h-auto w-full max-w-136 object-contain"
                />
              </FloatingGlove>
            </div>
            <div className="border-t border-white/10 p-7 sm:p-9">
              <p className="section-kicker mb-4">Integrated Sensor System</p>
              <h2 className="mb-4 font-heading text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Built Into the Glove.
              </h2>
              <p className="copy-secondary max-w-[48ch] text-sm leading-[1.8]">
                The Smart Dorsal Sensor sits on the back of the hand, keeping
                the palm and fingers free for natural grip and movement.
              </p>
            </div>
          </motion.article>

          <motion.article
            custom={{ index: 1, reduceMotion }}
            variants={alternatingCardReveal}
            className="surface-panel overflow-hidden"
          >
            <div className="relative flex min-h-88 items-center justify-center bg-white/2 p-8 sm:min-h-120">
              <div className="absolute inset-[18%] rounded-full bg-orange/10 blur-3xl" />
              <FloatingGlove delay={0.6} className="relative w-full">
                <Image
                  src="/images/kinetix-biometric-front.webp"
                  alt="Front view of KINETIX showing live biometric data"
                  width={720}
                  height={720}
                  className="h-auto w-full max-w-136 object-contain"
                />
              </FloatingGlove>
            </div>
            <div className="border-t border-white/10 p-7 sm:p-9">
              <p className="section-kicker mb-4">Live Performance Signals</p>
              <h2 className="mb-4 font-heading text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Feedback at a Glance.
              </h2>
              <p className="copy-secondary max-w-[48ch] text-sm leading-[1.8]">
                KINETIX brings key training signals into view, helping athletes
                connect movement and effort with useful performance context.
              </p>
            </div>
          </motion.article>
        </motion.div>
      </section>

      {/* Hand-first performance */}
      <section className="border-b border-white/10 bg-surface px-6 py-24 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{
            duration: reduceMotion ? 0.2 : 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="mb-14 grid gap-8 md:grid-cols-2 md:items-end"
        >
          <div>
            <p className="section-kicker mb-5">Hand-First Performance</p>
            <h2 className="display-title text-[clamp(2.8rem,6vw,5rem)] text-white">
              The Hand Holds
              <br />
              <span className="text-orange">Actionable Data.</span>
            </h2>
          </div>
          <p className="copy-secondary max-w-[58ch] text-[0.95rem] leading-[1.85] md:pb-1">
            Every movement, grip, gesture, and physical response contains
            information. TekGlove captures that information at the hand and
            transforms it into insight athletes can use.
          </p>
        </motion.div>

        <motion.div
          custom={reduceMotion}
          variants={staggeredCardGroup}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.article
              key={feature.id}
              custom={{ index, reduceMotion }}
              variants={alternatingCardReveal}
              className="surface-panel p-8"
            >
              <h3 className="mb-3 font-heading text-xl font-semibold tracking-[-0.03em] text-white">
                {feature.title}
              </h3>
              <p className="copy-secondary text-sm leading-[1.8]">
                {feature.desc}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Use cases */}
      <section className="border-b border-white/10 px-6 py-24 md:px-12">
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:items-start">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{
              duration: reduceMotion ? 0.2 : 0.5,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            <p className="section-kicker mb-5">Athletic Use Cases</p>
            <h2 className="display-title text-[clamp(2.5rem,5vw,4.5rem)] text-white">
              Built to Measure
              <br />
              <span className="text-orange">How You Perform.</span>
            </h2>
          </motion.div>
          <motion.div
            custom={reduceMotion}
            variants={staggeredCardGroup}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="grid grid-cols-2 gap-3 lg:grid-cols-3"
          >
            {athleticUseCases.map((useCase, index) => (
              <motion.div
                key={useCase}
                custom={{ index, reduceMotion }}
                variants={alternatingCardReveal}
                className="surface-panel flex min-h-28 items-end p-6"
              >
                <div>
                  <span className="font-heading text-xl font-semibold tracking-[-0.03em] text-white">
                    {useCase}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32">
        <div className="pointer-events-none absolute right-[8%] top-1/2 h-136 w-136 -translate-y-1/2 rounded-full bg-orange/10 blur-[110px]" />
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{
            duration: reduceMotion ? 0.2 : 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="relative grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
        >
          <div>
            <p className="section-kicker mb-6">KINETIX Early Access</p>
            <h2 className="display-title mb-6 text-[clamp(2.75rem,6vw,6rem)] text-white">
              Be First to
              <br />
              <span className="text-orange">Train Smarter.</span>
            </h2>
            <p className="copy-secondary mb-10 max-w-[54ch] text-base leading-[1.8]">
              Join the TekGlove early access list for KINETIX development
              updates, beta opportunities, and product availability.
            </p>
            <ButtonLink href="/waitlist" size="lg">
              Join the Waitlist
            </ButtonLink>
          </div>
          <div className="relative flex min-h-80 items-center justify-center sm:min-h-112">
            <div className="absolute inset-[16%] rounded-full bg-orange/10 blur-3xl" />
            <FloatingGlove className="relative w-full">
              <Image
                src="/images/kinetix-angle.webp"
                alt="Angled view of the KINETIX athletic performance glove"
                width={760}
                height={760}
                className="h-auto w-full max-w-152 object-contain"
              />
            </FloatingGlove>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
