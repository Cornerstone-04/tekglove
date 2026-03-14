"use client";

"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const mono: React.CSSProperties = { fontFamily: "'DM Mono', monospace" };
const inter: React.CSSProperties = { fontFamily: "'Inter', sans-serif" };
const heading: React.CSSProperties = { fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase" };

const values = [
  { title: "Function First", desc: "Every design decision starts with the question — does this make the wearer more capable?" },
  { title: "Built to Last", desc: "Premium materials, precision engineering. TekGlove is built for real conditions, not showrooms." },
  { title: "Connected", desc: "We believe your gear should work together. TekGlove is the anchor of a wider personal tech ecosystem." },
  { title: "Accessible", desc: "Wearable tech shouldn't require a manual. TekGlove works intuitively from the moment you put it on." },
];

export default function AboutPage() {
  return (
    <div style={{ background: "var(--bg)", paddingTop: "4rem" }}>

      {/* Header */}
      <div style={{ padding: "5rem 1.5rem 4rem", borderBottom: "1px solid var(--border-col)" }}>
        <div className="px-4 md:px-10 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ ...mono, fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "1rem" }}>
            Our Story
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            style={{ ...heading, fontWeight: 900, fontSize: "clamp(3rem, 9vw, 7rem)", color: "white", lineHeight: 0.9 }}>
            Built for the<br />
            <span style={{ color: "var(--orange)" }}>Bold.</span>
          </motion.h1>
        </div>
      </div>

      {/* Origin story */}
      <section style={{ padding: "6rem 1.5rem", borderBottom: "1px solid var(--border-col)" }}>
        <div className="px-4 md:px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <div style={{ ...mono, fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "2rem" }}>
              The Problem
            </div>
            <p style={{ ...inter, fontSize: "1rem", lineHeight: 1.9, color: "rgba(255,255,255,0.55)", marginBottom: "1.5rem" }}>
              Apple Watch is the most capable wearable ever made. But wearing it on your wrist — especially during high-performance activities — means constantly pulling back a sleeve, fumbling with controls, or risking damage to your device.
            </p>
            <p style={{ ...inter, fontSize: "1rem", lineHeight: 1.9, color: "rgba(255,255,255,0.55)" }}>
              TekGlove was born from a simple insight: your hand is already doing the work. The watch should be there with it.
            </p>
          </div>
          <div>
            <div style={{ ...mono, fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "2rem" }}>
              The Solution
            </div>
            <p style={{ ...inter, fontSize: "1rem", lineHeight: 1.9, color: "rgba(255,255,255,0.55)", marginBottom: "1.5rem" }}>
              We engineered a precision-fit mount directly into a performance glove. Your Apple Watch Ultra sits securely on the back of your hand — protected, visible, fully functional, and always ready.
            </p>
            <p style={{ ...inter, fontSize: "1rem", lineHeight: 1.9, color: "rgba(255,255,255,0.55)" }}>
              It sounds simple. Getting it right took everything.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "6rem 1.5rem", borderBottom: "1px solid var(--border-col)", background: "var(--surface)" }}>
        <div className="px-4 md:px-10 max-w-7xl mx-auto">
          <div style={{ ...mono, fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "1rem" }}>
            What We Believe
          </div>
          <h2 style={{ ...heading, fontWeight: 900, fontSize: "clamp(2rem, 5vw, 4rem)", color: "white", marginBottom: "4rem" }}>
            Our Principles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "var(--border-col)" }}>
            {values.map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ background: "var(--surface)", padding: "2.5rem 2rem" }}
              >
                <div style={{ ...mono, fontSize: "0.58rem", letterSpacing: "0.2em", color: "var(--orange)", textTransform: "uppercase", marginBottom: "1rem" }}>
                  0{i + 1}
                </div>
                <h3 style={{ ...heading, fontWeight: 700, fontSize: "1.4rem", color: "white", marginBottom: "0.75rem" }}>{v.title}</h3>
                <p style={{ ...inter, fontSize: "0.8rem", lineHeight: 1.75, color: "rgba(255,255,255,0.4)" }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section style={{ padding: "6rem 1.5rem", borderBottom: "1px solid var(--border-col)" }}>
        <div className="px-4 md:px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ background: "#f5f0e8", padding: "2rem" }}
          >
            <Image src="/images/security-architecture.jpg" alt="Security Architecture" width={600} height={600}
              style={{ width: "100%", height: "auto" }} />
          </motion.div>
          <div>
            <div style={{ ...mono, fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "1rem" }}>
              The Ecosystem
            </div>
            <h2 style={{ ...heading, fontWeight: 900, fontSize: "clamp(2rem, 5vw, 4rem)", color: "white", marginBottom: "1.5rem" }}>
              Beyond the Glove
            </h2>
            <p style={{ ...inter, fontSize: "0.9rem", lineHeight: 1.85, color: "rgba(255,255,255,0.5)", marginBottom: "1.5rem" }}>
              TekGlove is the foundation of a personal security architecture. Your glove connects to AR smart glasses for heads-up drone telemetry, a voice-activated companion glove, and a phone hub that centralises control and alerts.
            </p>
            <p style={{ ...inter, fontSize: "0.9rem", lineHeight: 1.85, color: "rgba(255,255,255,0.5)", marginBottom: "2rem" }}>
              This is wearable technology with a purpose — not just to track your steps, but to extend your capabilities in the field.
            </p>
            <Link href="/signup" style={{
              ...inter, fontWeight: 600, fontSize: "0.78rem",
              letterSpacing: "0.08em", textTransform: "uppercase",
              textDecoration: "none", color: "var(--orange)",
              borderBottom: "1px solid rgba(249,115,22,0.4)", paddingBottom: "2px",
            }}>
              Join the Beta →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "6rem 1.5rem", textAlign: "center" }}>
        <div className="max-w-2xl mx-auto">
          <h2 style={{ ...heading, fontWeight: 900, fontSize: "clamp(2rem, 6vw, 4.5rem)", color: "white", marginBottom: "1.5rem" }}>
            Ready to Wear<br />
            <span style={{ color: "var(--orange)" }}>the Future?</span>
          </h2>
          <Link href="/signup" style={{
            ...inter, fontWeight: 600, fontSize: "0.85rem",
            letterSpacing: "0.08em", textTransform: "uppercase",
            textDecoration: "none", background: "var(--orange)", color: "black",
            padding: "1rem 2.5rem", display: "inline-block",
          }}>
            Get Early Access →
          </Link>
        </div>
      </section>

    </div>
  );
}
