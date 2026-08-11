"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import {
  alternatingCardReveal,
  revealViewport,
} from "@/shared/motion/card-reveal";
import { FloatingGlove } from "@/shared/components/ui/floating-glove";

const STICKY_FEATURES = [
  {
    id: "01",
    title: "Smart Dorsal Sensor",
    body: "A compact sensing system positioned on the back of the hand, leaving the palm and fingers free to grip, touch, move, and work naturally.",
    tag: "Flagship technology",
  },
  {
    id: "02",
    title: "Hand-Data Capture",
    body: "Track movement, grip, gesture, position, and physical response from one of the body's richest sources of actionable data.",
    tag: "Hand intelligence",
  },
  {
    id: "03",
    title: "Interpreted Insight",
    body: "AI and connected software turn raw hand data into performance feedback, health signals, alerts, commands, and operational intelligence.",
    tag: "Performance insight",
  },
];

export function StickyFeatures() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-b border-white/8 py-20 md:py-28">
      <div className="mb-14 grid gap-6 px-6 md:grid-cols-[1.2fr_0.8fr] md:items-end md:px-12">
        <div>
          <p className="section-kicker mb-5">KINETIX™ · TekGlove V1</p>
          <h2 className="display-title max-w-[12ch] text-[clamp(2.75rem,6vw,5.5rem)] text-white">
            The flagship, built around the hand.
          </h2>
        </div>
        <p className="copy-secondary max-w-[52ch] text-[0.95rem] leading-[1.85] md:pb-1">
          TekGlove V1 captures hand-related athletic data without interrupting
          natural movement, then turns every session into feedback athletes can
          understand and use.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 px-6 md:grid-cols-2 md:px-12">
        {/* Left: sticky image */}
        <div className="hidden md:flex items-start">
          <div className="surface-panel sticky top-24 flex h-[calc(100svh-8rem)] w-full items-center justify-center overflow-hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(249,115,22,0.1)_0%,transparent_65%)] pointer-events-none" />
              <FloatingGlove className="flex w-full justify-center">
                <Image
                  src="/images/tekglove-platform-angle.webp"
                  alt=""
                  width={560}
                  height={560}
                  className="relative z-10 h-auto w-[88%] max-w-140 object-contain"
                />
              </FloatingGlove>
            </div>
          </div>
        </div>

        {/* Right: scrolling feature blocks */}
        <div className="space-y-4">
          {STICKY_FEATURES.map((f, i) => (
            <motion.div
              key={f.id}
              custom={{ index: i, reduceMotion, delay: i * 0.06 }}
              variants={alternatingCardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              className="surface-panel flex min-h-72 flex-col justify-center gap-5 px-8 py-16 md:px-10"
            >
              <div className="flex items-center">
                <span className="font-mono text-xxs tracking-[0.15em] uppercase text-black bg-orange px-2 py-0.5">
                  {f.tag}
                </span>
              </div>
              <h3 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-white">
                {f.title}
              </h3>
              <p className="copy-secondary max-w-[48ch] font-sans text-[0.95rem] leading-[1.8]">
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
