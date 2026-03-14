"use client";

import Link from "next/link";
import { navLinks, site } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border-col)", background: "var(--surface)" }}>
      <div className="px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "1.1rem", fontWeight: 800,
            letterSpacing: "0.15em", textTransform: "uppercase", color: "white",
            display: "block", marginBottom: "0.75rem",
          }}>
            Tek<span style={{ color: "var(--orange)" }}>Glove</span>
          </span>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "var(--muted)", lineHeight: 1.7, maxWidth: "28ch" }}>
            Your Apple Watch, reinvented. Built in the UK.
          </p>
        </div>

        <div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "1rem" }}>
            Navigation
          </div>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} style={{
                  fontFamily: "'Inter', sans-serif", fontSize: "0.78rem",
                  color: "rgba(255,255,255,0.45)", textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = "white")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "1rem" }}>
            Contact
          </div>
          <a href={`mailto:${site.email}`} style={{
            fontFamily: "'Inter', sans-serif", fontSize: "0.78rem",
            color: "rgba(255,255,255,0.45)", textDecoration: "none",
            transition: "color 0.2s ease",
            display: "block", marginBottom: "0.5rem",
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--orange)")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
          >
            {site.email}
          </a>
          <Link href="/signup" style={{
            display: "inline-block", marginTop: "1rem",
            fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 600,
            letterSpacing: "0.08em", textTransform: "uppercase",
            textDecoration: "none",
            background: "var(--orange)", color: "black",
            padding: "0.5rem 1rem",
          }}>
            Get Early Access →
          </Link>
        </div>
      </div>

      <div className="px-6 md:px-12 py-4 flex justify-between items-center" style={{ borderTop: "1px solid var(--border-col)" }}>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em" }}>
          © {new Date().getFullYear()} TekGlove. All rights reserved.
        </p>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em" }}>
          United Kingdom
        </p>
      </div>
    </footer>
  );
}
