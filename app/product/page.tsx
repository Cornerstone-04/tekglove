"use client";

"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { products, specs } from "@/lib/data";

const mono: React.CSSProperties = { fontFamily: "'DM Mono', monospace" };
const inter: React.CSSProperties = { fontFamily: "'Inter', sans-serif" };
const heading: React.CSSProperties = {
  fontFamily: "'Barlow Condensed', sans-serif",
  textTransform: "uppercase",
};

export default function ProductPage() {
  return (
    <div style={{ background: "var(--bg)", paddingTop: "4rem" }}>
      {/* Header */}
      <div
        style={{
          padding: "5rem 1.5rem 4rem",
          borderBottom: "1px solid var(--border-col)",
        }}
      >
        <div className="px-4 md:px-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              ...mono,
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--orange)",
              marginBottom: "1rem",
            }}
          >
            The Collection
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              ...heading,
              fontWeight: 900,
              fontSize: "clamp(3rem, 9vw, 7rem)",
              color: "white",
            }}
          >
            TekGlove
          </motion.h1>
        </div>
      </div>

      {/* Main product — hero layout */}
      <section style={{ borderBottom: "1px solid var(--border-col)" }}>
        <div className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Image */}
          <div
            style={{
              borderRight: "1px solid var(--border-col)",
              padding: "4rem 2rem",
              background: "var(--surface)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/images/tekglove_front_cutout.png"
              alt="TekGlove Standard"
              width={480}
              height={480}
              style={{ objectFit: "contain", maxWidth: "100%" }}
            />
          </div>

          {/* Details */}
          <div style={{ padding: "4rem 3rem" }}>
            <div
              style={{
                ...mono,
                fontSize: "0.58rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--orange)",
                marginBottom: "1rem",
              }}
            >
              Flagship
            </div>
            <h2
              style={{
                ...heading,
                fontWeight: 900,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "white",
                marginBottom: "1rem",
              }}
            >
              TekGlove Standard
            </h2>
            <p
              style={{
                ...inter,
                fontSize: "0.9rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.5)",
                marginBottom: "2.5rem",
              }}
            >
              The original TekGlove. A lightweight, high-performance glove
              engineered with a precision-fit Apple Watch mount on the back of
              the hand. Built for athletes, adventurers, and professionals who
              need their data without reaching for their wrist.
            </p>

            {/* Specs */}
            <div style={{ marginBottom: "2.5rem" }}>
              <div
                style={{
                  ...mono,
                  fontSize: "0.58rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.25)",
                  marginBottom: "1rem",
                }}
              >
                Specifications
              </div>
              {specs.map((s) => (
                <div
                  key={s.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.65rem 0",
                    borderBottom: "1px solid var(--border-col)",
                  }}
                >
                  <span
                    style={{
                      ...mono,
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      color: "rgba(255,255,255,0.3)",
                      textTransform: "uppercase",
                    }}
                  >
                    {s.label}
                  </span>
                  <span
                    style={{
                      ...inter,
                      fontSize: "0.78rem",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {s.value}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/signup"
              style={{
                ...inter,
                fontWeight: 600,
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                background: "var(--orange)",
                color: "black",
                padding: "0.9rem 2rem",
                display: "inline-block",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Get Early Access
            </Link>
          </div>
        </div>
      </section>

      {/* Second product — angle view */}
      <section style={{ borderBottom: "1px solid var(--border-col)" }}>
        <div className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Details — reversed */}
          <div
            style={{
              padding: "4rem 3rem",
              borderRight: "1px solid var(--border-col)",
            }}
          >
            <div
              style={{
                ...mono,
                fontSize: "0.58rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--orange)",
                marginBottom: "1rem",
              }}
            >
              Winter Edition
            </div>
            <h2
              style={{
                ...heading,
                fontWeight: 900,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "white",
                marginBottom: "1rem",
              }}
            >
              TekGlove Winter
            </h2>
            <p
              style={{
                ...inter,
                fontSize: "0.9rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.5)",
                marginBottom: "2.5rem",
              }}
            >
              All the power of the Standard, built for cold weather. Thermal
              insulation keeps your hands warm in harsh conditions while every
              feature of your Apple Watch remains fully accessible.
            </p>
            <Link
              href="/signup"
              style={{
                ...inter,
                fontWeight: 600,
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "0.9rem 2rem",
                display: "inline-block",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "white";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              }}
            >
              Join Waitlist
            </Link>
          </div>

          {/* Image */}
          <div
            style={{
              padding: "4rem 2rem",
              background: "var(--surface)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/images/tekglove_angle_cutout.png"
              alt="TekGlove Winter"
              width={480}
              height={480}
              style={{ objectFit: "contain", maxWidth: "100%" }}
            />
          </div>
        </div>
      </section>

      {/* All products grid */}
      <section style={{ padding: "6rem 1.5rem" }}>
        <div className="px-4 md:px-10 max-w-7xl mx-auto">
          <div
            style={{
              ...mono,
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.25)",
              marginBottom: "3rem",
            }}
          >
            Full Catalogue
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-px"
            style={{ background: "var(--border-col)" }}
          >
            {products.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ background: "var(--surface)", padding: "2rem" }}
              >
                <div
                  style={{
                    aspectRatio: "1",
                    background: "#000",
                    marginBottom: "1.5rem",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "0.75rem",
                      left: "0.75rem",
                      ...mono,
                      fontSize: "0.55rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "black",
                      background: "var(--orange)",
                      padding: "0.2rem 0.5rem",
                    }}
                  >
                    {p.tag}
                  </div>
                </div>
                <h3
                  style={{
                    ...heading,
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    color: "white",
                    marginBottom: "0.5rem",
                  }}
                >
                  {p.name}
                </h3>
                <p
                  style={{
                    ...inter,
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.4)",
                    lineHeight: 1.7,
                  }}
                >
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
