"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 20);
    if (latest > prev && latest > 80) setHidden(true);
    else setHidden(false);
  });

  return (
    <motion.nav
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: hidden ? "-100%" : 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16"
      style={{
        background: scrolled ? "rgba(0,0,0,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ textDecoration: "none" }}>
        <span style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "1.1rem", fontWeight: 800,
          letterSpacing: "0.15em", textTransform: "uppercase",
          color: "white",
        }}>
          Tek<span style={{ color: "var(--orange)" }}>Glove</span>
        </span>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8" style={{ listStyle: "none" }}>
        {navLinks.slice(0, -1).map(({ href, label }) => {
          const active = pathname === href;
          return (
            <li key={href}>
              <Link href={href} style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.78rem", letterSpacing: "0.05em",
                textDecoration: "none",
                color: active ? "white" : "rgba(255,255,255,0.5)",
                transition: "color 0.2s ease",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "white")}
                onMouseLeave={e => (e.currentTarget.style.color = active ? "white" : "rgba(255,255,255,0.5)")}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* CTA */}
      <Link href="/signup"
        className="hidden md:inline-flex items-center gap-2"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.72rem", fontWeight: 600,
          letterSpacing: "0.08em", textTransform: "uppercase",
          textDecoration: "none",
          background: "var(--orange)", color: "black",
          padding: "0.55rem 1.25rem",
          transition: "opacity 0.2s ease",
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
      >
        Get Early Access
      </Link>

      {/* Mobile CTA */}
      <Link href="/signup" className="md:hidden" style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.65rem", fontWeight: 600,
        letterSpacing: "0.08em", textTransform: "uppercase",
        textDecoration: "none",
        background: "var(--orange)", color: "black",
        padding: "0.45rem 0.9rem",
      }}>
        Join
      </Link>
    </motion.nav>
  );
}
