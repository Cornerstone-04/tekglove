"use client";

import { motion } from "motion/react";
import Link from "next/link";
import SecurityArchitectureSVG from "@/components/ui/security-architecture-svg";
import { principles } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="bg-bg pt-16">
      {/* ── HEADER ── */}
      <div className="border-b border-white/10 px-6 pt-20 pb-16 md:px-10">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-orange"
          >
            Our Story
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-[clamp(3rem,9vw,7rem)] leading-[0.9] font-black uppercase text-white"
          >
            Built at the
            <br />
            <span className="text-orange">Intersection.</span>
          </motion.h1>
        </div>
      </div>

      {/* ── ORIGIN STORY ── */}
      <section className="border-b border-white/10 px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 px-4 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-8 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-white/25"
            >
              The Problem
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-6 font-sans text-base leading-[1.9] text-white/55"
            >
              People recovering from hand injuries, arthritis, and neurological
              conditions had no single wearable that addressed their needs
              comprehensively. Existing products offered one modality — heat, or
              vibration, or electrical stimulation — never all three.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-sans text-base leading-[1.9] text-white/55"
            >
              Athletes and sports professionals needed something they could rely
              on in the gym, in the field, and in the clinic — without carrying
              three separate devices.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-8 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-white/25"
            >
              The Solution
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-6 font-sans text-base leading-[1.9] text-white/55"
            >
              Designed by Keniye Koroye, Tek Glove started with a simple idea —
              bring everything to the hand. The V2 combined EMS, TENS,
              vibration, and heat into a single wearable that syncs with Apple
              Watch via Bluetooth for real-time therapy monitoring.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-sans text-base leading-[1.9] text-white/55"
            >
              Now in development, the V4 pushes further into sports, healthcare,
              and military applications — with advanced motion sensing,
              somatosensory input, and gesture-based control for robotics and
              silent communication in covert environments.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── PRINCIPLES ── */}
      <section className="border-b border-white/10 bg-surface px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-orange"
          >
            How We Build
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 font-heading text-[clamp(2rem,5vw,4rem)] font-black uppercase text-white"
          >
            Design Focus
          </motion.h2>

          <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface px-8 py-10"
              >
                <div className="mb-4 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-orange">
                  0{i + 1}
                </div>
                <h3 className="mb-3 font-heading text-[1.4rem] font-bold uppercase text-white">
                  {p.title}
                </h3>
                <p className="font-sans text-[0.8rem] leading-[1.75] text-white/40">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION ── */}
      {/* <section className="border-b border-white/10 px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-4 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-orange"
            >
              Where We're Headed
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-6 font-heading text-[clamp(2rem,5vw,4rem)] font-black uppercase text-white"
            >
              Beyond Recovery
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 font-sans text-[0.9rem] leading-[1.85] text-white/50"
            >
              The V4 is not just a therapy glove. It is a human-machine
              interface — built for neuroadaptive training in XR, gesture
              recognition for proprietary Morse code, and assistive control for
              robotics. Designed for silent communication in covert environments
              and inclusive accessibility in creative applications.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mb-8 font-sans text-[0.9rem] leading-[1.85] text-white/50"
            >
              A world where a glove can heal in the morning, train a surgeon in
              the afternoon, and guide a drone with gesture in the evening. Tek
              Glove is building toward that future — one version at a time.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <Link
                href="/product"
                className="border-b border-orange/40 pb-0.5 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-orange no-underline hover:border-orange transition-colors duration-200"
              >
                View All Products →
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="border border-white/5 bg-[#050505] p-10"
          >
            <div className="mb-6 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-orange">
              In Development
            </div>
            <h3 className="mb-6 font-heading text-[2.5rem] font-black uppercase text-white leading-none">
              Tek Glove V4
            </h3>
            <ul className="space-y-4">
              {[
                "Advanced motion sensing",
                "Instantaneous somatosensory input",
                "Refined haptic feedback",
                "Gesture-based Morse code recognition",
                "Neuroadaptive XR training",
                "Assistive robotics control",
                "Silent covert communication",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                  <span className="font-mono text-[0.72rem] leading-relaxed text-white/50">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section> */}

      {/* ── ARCHITECTURE ── */}
      <section className="border-b border-white/10 px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-white/5 bg-[#050505] p-6"
          >
            <SecurityArchitectureSVG />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-4 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-orange"
            >
              The Ecosystem
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-6 font-heading text-[clamp(2rem,5vw,4rem)] font-black uppercase text-white"
            >
              Beyond the Glove
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 font-sans text-[0.9rem] leading-[1.85] text-white/50"
            >
              Tek Glove is the foundation of a personal security and interaction
              architecture. Your glove connects to AR smart glasses for heads-up
              drone telemetry, a voice-activated companion glove, and a phone
              hub that centralises control and alerts.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.37 }}
              className="mb-8 font-sans text-[0.9rem] leading-[1.85] text-white/50"
            >
              With the V4, that ecosystem expands further — gesture-based
              robotics control, neuroadaptive XR training, and silent
              communication in covert environments. Wearable technology with a
              purpose beyond tracking your steps.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.44 }}
            >
              <Link
                href="/waitlist"
                className="border-b border-orange/40 pb-0.5 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-orange no-underline hover:border-orange transition-colors duration-200"
              >
                Get early access →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="mb-6 font-heading text-[clamp(2rem,6vw,4.5rem)] font-black uppercase text-white">
              Ready to Wear
              <br />
              <span className="text-orange">the Future?</span>
            </h2>
            <Link
              href="/waitlist"
              className="inline-block bg-orange px-10 py-4 font-sans text-[0.85rem] font-semibold uppercase tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-85"
            >
              Get Early Access →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
