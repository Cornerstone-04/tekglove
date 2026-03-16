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
      className={`fixed top-0 right-0 left-0 z-50 flex h-16 items-center justify-between px-6 md:px-12 ${
        scrolled
          ? "border-b border-white/6 bg-black/90 backdrop-blur-md"
          : "border-b-0 bg-transparent"
      }`}
      style={{ WebkitBackdropFilter: scrolled ? "blur(12px)" : "none" }}
    >
      {/* Logo */}
      <Link href="/" className="no-underline">
        <span className="font-heading text-[1.1rem] font-extrabold uppercase tracking-[0.15em] text-white">
          Tek<span className="text-orange">Glove</span>
        </span>
      </Link>

      {/* Desktop links */}
      <ul className="hidden list-none items-center gap-8 md:flex">
        {navLinks.slice(0, -1).map(({ href, label }) => {
          const active = pathname === href;

          return (
            <li key={href}>
              <Link
                href={href}
                className={`font-sans text-[0.78rem] tracking-[0.05em] no-underline transition-colors duration-200 ${
                  active ? "text-white" : "text-white/50 hover:text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* CTA */}
      <Link
        href="/signup"
        className="hidden items-center gap-2 bg-orange px-5 py-[0.55rem] font-sans text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-85 md:inline-flex"
      >
        Get Early Access
      </Link>

      {/* Mobile CTA */}
      <Link
        href="/signup"
        className="bg-orange px-[0.9rem] py-[0.45rem] font-sans text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-black no-underline md:hidden"
      >
        Join
      </Link>
    </motion.nav>
  );
}
