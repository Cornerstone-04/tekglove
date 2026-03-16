"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { navLinks, site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="grid grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-3 block font-heading text-[1.1rem] font-extrabold uppercase tracking-[0.15em] text-white">
            Tek<span className="text-orange">Glove</span>
          </span>
          <p className="max-w-[28ch] font-sans text-[0.78rem] leading-[1.7] text-muted">
            Recovery, reinvented. Built in the UK.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="mb-4 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-white/25">
            Navigation
          </div>
          <ul className="flex list-none flex-col gap-2">
            {navLinks.map(({ href, label }, i) => (
              <motion.li
                key={href}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
              >
                <Link
                  href={href}
                  className="font-sans text-[0.78rem] text-white/45 no-underline transition-colors duration-200 hover:text-white"
                >
                  {label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-4 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-white/25">
            Contact
          </div>
          <a
            href={`mailto:${site.email}`}
            className="mb-2 block font-sans text-[0.78rem] text-white/45 no-underline transition-colors duration-200 hover:text-orange"
          >
            {site.email}
          </a>
          <Link
            href="/signup"
            className="mt-4 inline-block bg-orange px-4 py-2 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-85"
          >
            Get Early Access →
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center justify-between border-t border-border px-6 py-4 md:px-12"
      >
        <p className="font-mono text-[0.6rem] tracking-widest text-white/20">
          © {new Date().getFullYear()} Tek Glove. All rights reserved.
        </p>
        <p className="font-mono text-[0.6rem] tracking-widest text-white/20">
          United Kingdom
        </p>
      </motion.div>
    </footer>
  );
}
