"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { about, principles, whyHandReasons } from "@/lib/data";

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <div className="bg-bg pt-16">
      <div
        ref={heroRef}
        className="border-b border-white/10 px-6 pt-20 pb-16 md:px-12"
      >
        <motion.div style={{ opacity: heroOpacity }} className="w-full">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 font-mono text-xxs tracking-[0.3em] text-orange"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-[clamp(3rem,9vw,7rem)] font-black leading-[0.9] uppercase text-white"
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
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-6 font-mono text-xxs tracking-[0.3em] text-orange">
              The First Idea
            </p>
            <h2 className="mb-6 font-heading text-[clamp(2.4rem,5vw,4rem)] font-black uppercase text-white">
              Box. Run. Bike.
            </h2>
            <p className="max-w-[62ch] text-base leading-[1.9] text-white/55">
              TekGlove began with BRB, a compact sensor concept for capturing
              sports data across boxing, running, and cycling. The early
              question was simple: where on the body could one small sensor
              produce the most useful data?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-6 font-mono text-xxs tracking-[0.3em] text-orange">
              The Breakthrough
            </p>
            <h2 className="mb-6 font-heading text-[clamp(2.4rem,5vw,4rem)] font-black uppercase text-white">
              Look to the Hand.
            </h2>
            <p className="max-w-[62ch] text-base leading-[1.9] text-white/55">
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
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end"
        >
          <div>
            <p className="mb-4 font-mono text-xxs tracking-[0.3em] text-orange">
              Why the Hand?
            </p>
            <h2 className="font-heading text-[clamp(3rem,7vw,6rem)] font-black leading-[0.9] uppercase text-white">
              The Hand Holds
              <br />
              <span className="text-orange">More Than Tools.</span>
            </h2>
          </div>
          <p className="max-w-[54ch] text-sm leading-[1.9] text-white/50">
            It holds data. TekGlove captures the signals produced by the hand
            and interprets them for performance, health, recovery,
            communication, safety, and productivity.
          </p>
        </motion.div>

        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {whyHandReasons.map((reason, index) => (
            <motion.article
              key={reason.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="bg-surface p-8 md:p-10"
            >
              <h3 className="mb-3 font-heading text-3xl font-bold uppercase text-white">
                {reason.title}
              </h3>
              <p className="max-w-[46ch] text-sm leading-[1.8] text-white/45">
                {reason.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-24 md:px-12">
        <div className="mb-14">
          <p className="mb-4 font-mono text-xxs tracking-[0.3em] text-orange">
            The Platform Model
          </p>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase text-white">
            From Signal to Impact.
          </h2>
        </div>
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-bg p-8 md:p-10"
            >
              <h3 className="mb-3 font-heading text-3xl font-bold uppercase text-white">
                {principle.title}
              </h3>
              <p className="text-sm leading-[1.8] text-white/45">
                {principle.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 text-center md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <p className="mb-5 font-mono text-xxs tracking-[0.3em] text-orange">
            Our Mission
          </p>
          <p className="mx-auto mb-8 max-w-[62ch] text-sm leading-[1.9] text-white/50">
            {about.mission}
          </p>
          <h2 className="mb-8 font-heading text-[clamp(2.5rem,6vw,5rem)] font-black uppercase text-white">
            Six Gloves.
            <br />
            <span className="text-orange">One Connected Vision.</span>
          </h2>
          <Link
            href="/#ecosystem"
            className="inline-block bg-orange px-10 py-4 text-[0.85rem] font-semibold tracking-[0.08em] text-black transition-opacity hover:opacity-85"
          >
            Explore the Ecosystem →
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
