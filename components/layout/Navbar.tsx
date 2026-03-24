"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { useState } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 20);
    if (latest > prev && latest > 80 && !open) setHidden(true);
    else setHidden(false);
  });

  const close = () => setOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: hidden ? "-100%" : 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 right-0 left-0 z-50 flex h-16 items-center justify-between px-6 md:px-12 ${
          scrolled || open
            ? "border-b border-white/6 bg-black/95 backdrop-blur-md"
            : "border-b-0 bg-transparent"
        }`}
        style={{
          WebkitBackdropFilter: scrolled || open ? "blur(12px)" : "none",
        }}
      >
        {/* Logo */}
        <Link href="/" onClick={close} className="no-underline">
          <span className="font-heading text-[1.1rem] font-black uppercase tracking-[0.15em] text-white">
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
                  className={`font-sans text-[0.78rem] tracking-[0.05em] uppercase no-underline transition-colors duration-200 ${
                    active ? "text-white" : "text-white/50 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/waitlist"
          className="hidden items-center gap-2 bg-orange px-5 py-2 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-90 md:inline-flex"
        >
          Get Early Access
        </Link>

        {/* Mobile — hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="-mr-2 flex flex-col justify-center gap-1.25 p-2 md:hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
            transition={{ duration: 0.25 }}
            className="block h-px w-6 origin-center bg-white"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="block h-px w-6 origin-center bg-white"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
            transition={{ duration: 0.25 }}
            className="block h-px w-6 origin-center bg-white"
          />
        </button>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-black/97 pt-16 backdrop-blur-[20px] md:hidden"
            style={{ WebkitBackdropFilter: "blur(20px)" }}
          >
            {/* Nav links */}
            <div className="flex flex-1 flex-col px-6 pt-8">
              {navLinks.slice(0, -1).map(({ href, label }, i) => {
                const active = pathname === href;

                return (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.05 + i * 0.07,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="border-b border-white/5"
                  >
                    <Link
                      href={href}
                      onClick={close}
                      className="group flex items-center justify-between py-5 no-underline"
                    >
                      <span
                        className={`font-heading text-[clamp(2rem,8vw,3rem)] font-black uppercase leading-none transition-colors duration-200 ${
                          active ? "text-orange" : "text-white/85"
                        }`}
                      >
                        {label}
                      </span>

                      <span className="font-mono text-xxs uppercase tracking-[0.2em] text-white/20 transition-colors duration-200 group-hover:text-orange">
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="flex flex-col gap-4 px-6 pt-8 pb-12"
            >
              <Link
                href="/waitlist"
                onClick={close}
                className="w-full bg-orange px-6 py-4 text-center font-sans text-[0.85rem] font-semibold uppercase tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-90"
              >
                Get Early Access →
              </Link>

              <p className="text-center font-mono text-xxs uppercase tracking-[0.2em] text-white/20">
                tekglove.co.uk
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
