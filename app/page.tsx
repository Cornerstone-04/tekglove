"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { features, products, site } from "@/lib/data";

const mono: React.CSSProperties = { fontFamily: "'DM Mono', monospace" };
const inter: React.CSSProperties = { fontFamily: "'Inter', sans-serif" };
const heading: React.CSSProperties = {
  fontFamily: "'Barlow Condensed', sans-serif",
  textTransform: "uppercase",
};

export default function HomePage() {
  return (
    <div style={{ background: "var(--bg)" }}>
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          minHeight: "100svh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Bg glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "-10%",
            transform: "translateY(-50%)",
            width: "70vw",
            height: "70vw",
            borderRadius: "50%",
            pointerEvents: "none",
            background:
              "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 65%)",
            zIndex: 0,
          }}
        />

        <div
          className="w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          style={{
            paddingTop: "6rem",
            paddingBottom: "4rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                ...mono,
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--orange)",
                marginBottom: "1.5rem",
              }}
            >
              Introducing TekGlove
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                ...heading,
                fontWeight: 900,
                fontSize: "clamp(3.5rem, 10vw, 8rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
                color: "white",
                marginBottom: "1.5rem",
              }}
            >
              Your Apple
              <br />
              Watch,
              <br />
              <span style={{ color: "var(--orange)" }}>Reinvented.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{
                ...inter,
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.5)",
                maxWidth: "42ch",
                marginBottom: "2.5rem",
              }}
            >
              {site.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
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
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Get Early Access
              </Link>
              <Link
                href="/product"
                style={{
                  ...inter,
                  fontWeight: 500,
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: "rgba(255,255,255,0.6)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  padding: "0.9rem 2rem",
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
                View Product
              </Link>
            </motion.div>
          </div>

          {/* Right — product image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <Image
              src="/images/tekglove_front_cutout.png"
              alt="TekGlove with Apple Watch Ultra"
              width={520}
              height={520}
              style={{ objectFit: "contain", maxWidth: "100%" }}
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* ── TAGLINE BAND ── */}
      <div
        style={{
          borderTop: "1px solid var(--border-col)",
          borderBottom: "1px solid var(--border-col)",
          padding: "1.25rem 3rem",
          overflow: "hidden",
          background: "var(--surface)",
        }}
      >
        <div style={{ display: "flex", gap: "4rem", whiteSpace: "nowrap" }}>
          {[
            "Apple Watch Integrated",
            "Performance Grip",
            "Winter & Standard",
            "Personal Security Ecosystem",
            "Made for Athletes",
          ].map((t, i) => (
            <span
              key={i}
              style={{
                ...mono,
                fontSize: "0.62rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                flexShrink: 0,
              }}
            >
              <span style={{ color: "var(--orange)", marginRight: "1rem" }}>
                ✦
              </span>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section
        style={{
          padding: "8rem 1.5rem",
          borderBottom: "1px solid var(--border-col)",
        }}
      >
        <div className="px-4 md:px-10 max-w-7xl mx-auto">
          <div style={{ marginBottom: "4rem" }}>
            <div
              style={{
                ...mono,
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--orange)",
                marginBottom: "1rem",
              }}
            >
              Why TekGlove
            </div>
            <h2
              style={{
                ...heading,
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                color: "white",
              }}
            >
              Built Different.
            </h2>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
            style={{ background: "var(--border-col)" }}
          >
            {features.map((f, i) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ background: "var(--bg)", padding: "2.5rem 2rem" }}
              >
                <div style={{ fontSize: "1.4rem", marginBottom: "1.25rem" }}>
                  {f.icon}
                </div>
                <div
                  style={{
                    ...mono,
                    fontSize: "0.58rem",
                    letterSpacing: "0.2em",
                    color: "var(--orange)",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                  }}
                >
                  {f.id}
                </div>
                <h3
                  style={{
                    ...heading,
                    fontWeight: 700,
                    fontSize: "1.4rem",
                    color: "white",
                    marginBottom: "0.75rem",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    ...inter,
                    fontSize: "0.82rem",
                    lineHeight: 1.75,
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT SHOWCASE ── */}
      <section
        style={{
          padding: "8rem 1.5rem",
          borderBottom: "1px solid var(--border-col)",
        }}
      >
        <div className="px-4 md:px-10 max-w-7xl mx-auto">
          <div
            style={{
              marginBottom: "4rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div>
              <div
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
              </div>
              <h2
                style={{
                  ...heading,
                  fontWeight: 900,
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  color: "white",
                }}
              >
                Our Products
              </h2>
            </div>
            <Link
              href="/product"
              style={{
                ...mono,
                fontSize: "0.62rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "rgba(255,255,255,0.4)",
                borderBottom: "1px solid rgba(255,255,255,0.2)",
                paddingBottom: "2px",
              }}
            >
              View All →
            </Link>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-px"
            style={{ background: "var(--border-col)" }}
          >
            {products.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ background: "var(--surface)", overflow: "hidden" }}
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "1",
                    background: "#0a0a0a",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    style={{ objectFit: "cover", filter: "brightness(0.9)" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      ...mono,
                      fontSize: "0.58rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "black",
                      background: "var(--orange)",
                      padding: "0.25rem 0.6rem",
                    }}
                  >
                    {p.tag}
                  </div>
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <h3
                    style={{
                      ...heading,
                      fontWeight: 700,
                      fontSize: "1.4rem",
                      color: "white",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {p.name}
                  </h3>
                  <p
                    style={{
                      ...inter,
                      fontSize: "0.78rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                      marginBottom: "1rem",
                    }}
                  >
                    {p.desc}
                  </p>
                  <span
                    style={{
                      ...mono,
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      color: "var(--orange)",
                    }}
                  >
                    {p.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECURITY ARCHITECTURE ── */}
      <section
        style={{
          padding: "8rem 1.5rem",
          borderBottom: "1px solid var(--border-col)",
          background: "var(--surface)",
        }}
      >
        <div className="px-4 md:px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div
              style={{
                ...mono,
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--orange)",
                marginBottom: "1rem",
              }}
            >
              Ecosystem
            </div>
            <h2
              style={{
                ...heading,
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                color: "white",
                marginBottom: "1.5rem",
              }}
            >
              Personal Security
              <br />
              Architecture
            </h2>
            <p
              style={{
                ...inter,
                fontSize: "0.9rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.5)",
                marginBottom: "2rem",
              }}
            >
              TekGlove is more than a product — it's the centrepiece of a
              connected security ecosystem. Your glove communicates with AR
              smart glasses, drone feeds, and a phone hub to give you complete
              situational awareness in real time.
            </p>
            <Link
              href="/about"
              style={{
                ...inter,
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "var(--orange)",
                borderBottom: "1px solid rgba(249,115,22,0.4)",
                paddingBottom: "2px",
              }}
            >
              Learn More →
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              background: "#f5f0e8",
              padding: "2rem",
              borderRadius: "4px",
            }}
          >
            <Image
              src="/images/security-architecture.jpg"
              alt="Personal Security Architecture"
              width={600}
              height={600}
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "8rem 1.5rem", textAlign: "center" }}>
        <div className="px-4 md:px-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              style={{
                ...mono,
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--orange)",
                marginBottom: "1.5rem",
              }}
            >
              Limited Beta
            </div>
            <h2
              style={{
                ...heading,
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 8vw, 6rem)",
                color: "white",
                marginBottom: "1.5rem",
              }}
            >
              Be First to
              <br />
              Wear It.
            </h2>
            <p
              style={{
                ...inter,
                fontSize: "0.9rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.4)",
                marginBottom: "2.5rem",
              }}
            >
              Sign up for beta testing or early access. Limited spots available.
            </p>
            <Link
              href="/signup"
              style={{
                ...inter,
                fontWeight: 600,
                fontSize: "0.85rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                background: "var(--orange)",
                color: "black",
                padding: "1rem 2.5rem",
                display: "inline-block",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Get Early Access →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
