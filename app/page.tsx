"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { features, products, site } from "@/lib/data";

const TAGLINE_ITEMS = [
  "Apple Watch Integrated",
  "Performance Grip",
  "Winter & Standard",
  "Personal Security Ecosystem",
  "Made for Athletes",
  "Apple Watch Integrated",
  "Performance Grip",
  "Winter & Standard",
  "Personal Security Ecosystem",
  "Made for Athletes",
];

const COUNTERS = [
  { value: 3, suffix: "", label: "Variants" },
  { value: 120, suffix: "°", label: "Grip Coverage" },
  { value: 1, suffix: "", label: "Ecosystem" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 1200;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const gloveY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const gloveScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <div className="bg-bg">
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-svh flex items-center overflow-hidden"
      >
        <div className="pointer-events-none absolute top-1/2 right-[-10%] -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.08)_0%,transparent_65%)] z-0" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-24 pb-16"
        >
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono text-xxs tracking-[0.3em] uppercase text-orange mb-6"
            >
              Introducing TekGlove
            </motion.p>

            <h1 className="font-heading font-black text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] tracking-[-0.02em] text-white mb-6">
              {["Your", "Apple", "Watch,"].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block mr-[0.2em]"
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block text-orange"
              >
                Reinvented.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="font-sans text-base leading-relaxed text-white/50 max-w-[42ch] mb-10"
            >
              {site.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/signup"
                className="font-sans font-semibold text-[0.8rem] tracking-[0.08em] uppercase bg-orange text-black px-8 py-[0.9rem] transition-opacity duration-200 hover:opacity-85"
              >
                Get Early Access
              </Link>
              <Link
                href="/product"
                className="font-sans font-medium text-[0.8rem] tracking-[0.08em] uppercase text-white/60 border border-white/15 px-8 py-[0.9rem] transition-all duration-200 hover:text-white hover:border-white/40"
              >
                View Product
              </Link>
            </motion.div>
          </div>

          {/* Right — floating glove */}
          <motion.div
            style={{ y: gloveY, scale: gloveScale }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative"
              >
                <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-orange/20 blur-3xl rounded-full pointer-events-none" />
                <Image
                  src="/images/tekglove_front_cutout.png"
                  alt="TekGlove with Apple Watch Ultra"
                  width={520}
                  height={520}
                  className="object-contain max-w-full relative z-10"
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          style={{ opacity: scrollHintOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="font-mono text-xxs tracking-[0.25em] uppercase text-white/25">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-orange/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── MARQUEE BAND ── */}
      <div className="border-t border-border border-b border-border bg-surface overflow-hidden py-5">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap w-max"
        >
          {TAGLINE_ITEMS.map((t, i) => (
            <span
              key={i}
              className="font-mono text-xxs tracking-[0.25em] uppercase text-white/30 shrink-0"
            >
              <span className="text-orange mr-4">✦</span>
              {t}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── COUNTER STRIP ── */}
      <div className="border-b border-border grid grid-cols-3">
        {COUNTERS.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`flex flex-col items-center justify-center py-10 gap-2 ${i < 2 ? "border-r border-border" : ""}`}
          >
            <span className="font-heading font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-white">
              <AnimatedCounter value={c.value} suffix={c.suffix} />
            </span>
            <span className="font-mono text-xxs tracking-[0.2em] uppercase text-muted">
              {c.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* ── FEATURES ── */}
      <section className="py-32 border-b border-border">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="font-mono text-xxs tracking-[0.3em] uppercase text-orange mb-4">
              Why TekGlove
            </p>
            <h2 className="font-heading font-black text-[clamp(2.5rem,6vw,5rem)] text-white">
              Built Different.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {features.map((f, i) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-bg p-10 overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="text-[1.4rem] mb-5">{f.icon}</div>
                <p className="font-mono text-xxs tracking-[0.2em] uppercase text-orange mb-3">
                  {f.id}
                </p>
                <h3 className="font-heading font-bold text-[1.4rem] text-white mb-3">
                  {f.title}
                </h3>
                <p className="font-sans text-[0.82rem] leading-[1.75] text-white/45">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT SHOWCASE ── */}
      <section className="py-32 border-b border-border">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="font-mono text-xxs tracking-[0.3em] uppercase text-orange mb-4">
                The Collection
              </p>
              <h2 className="font-heading font-black text-[clamp(2.5rem,6vw,5rem)] text-white">
                Our Products
              </h2>
            </div>
            <Link
              href="/product"
              className="font-mono text-xxs tracking-[0.15em] uppercase text-white/40 border-b border-white/20 pb-0.5 hover:text-white hover:border-white/50 transition-all duration-200"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {products.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-surface overflow-hidden"
              >
                <div className="relative aspect-square bg-[#0a0a0a] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover brightness-90 transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 font-mono text-xxs tracking-[0.15em] uppercase text-black bg-orange px-2.5 py-1 transition-all duration-300 group-hover:bg-white">
                    {p.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-[1.4rem] text-white mb-2">
                    {p.name}
                  </h3>
                  <p className="font-sans text-[0.78rem] text-white/45 leading-[1.7] mb-4">
                    {p.desc}
                  </p>
                  <span className="font-mono text-[0.65rem] tracking-[0.1em] text-orange">
                    {p.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECURITY ARCHITECTURE ── */}
      <section className="py-32 border-b border-border bg-surface">
        <div className="px-6 md:px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-xxs tracking-[0.3em] uppercase text-orange mb-4">
              Ecosystem
            </p>
            <h2 className="font-heading font-black text-[clamp(2.5rem,6vw,4.5rem)] text-white mb-6">
              Personal Security
              <br />
              Architecture
            </h2>
            <p className="font-sans text-[0.9rem] leading-[1.8] text-white/50 mb-8">
              TekGlove is more than a product — it's the centrepiece of a
              connected security ecosystem. Your glove communicates with AR
              smart glasses, drone feeds, and a phone hub to give you complete
              situational awareness in real time.
            </p>
            <Link
              href="/about"
              className="font-sans font-semibold text-[0.75rem] tracking-[0.08em] uppercase text-orange border-b border-orange/40 pb-0.5 hover:border-orange transition-colors duration-200"
            >
              Learn More →
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#f5f0e8] p-8 rounded-sm"
          >
            <Image
              src="/images/security-architecture.jpg"
              alt="Personal Security Architecture"
              width={600}
              height={600}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 text-center">
        <div className="px-6 md:px-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-xxs tracking-[0.3em] uppercase text-orange mb-6">
              Limited Beta
            </p>
            <h2 className="font-heading font-black text-[clamp(2.5rem,8vw,6rem)] text-white mb-6">
              Be First to
              <br />
              Wear It.
            </h2>
            <p className="font-sans text-[0.9rem] leading-[1.8] text-white/40 mb-10">
              Sign up for beta testing or early access. Limited spots available.
            </p>
            <Link
              href="/signup"
              className="font-sans font-semibold text-[0.85rem] tracking-[0.08em] uppercase bg-orange text-black px-10 py-4 inline-block transition-opacity duration-200 hover:opacity-85"
            >
              Get Early Access →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
