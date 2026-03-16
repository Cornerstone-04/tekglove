"use client";

import Link from "next/link";
import { navLinks, site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border-col bg-surface">
      <div className="grid grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3 md:px-12">
        <div>
          <span className="mb-3 block font-heading text-[1.1rem] font-extrabold uppercase tracking-[0.15em] text-white">
            Tek<span className="text-orange">Glove</span>
          </span>

          <p className="max-w-[28ch] font-sans text-[0.78rem] leading-[1.7] text-muted">
            Your Apple Watch, reinvented. Built in the UK.
          </p>
        </div>

        <div>
          <div className="mb-4 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-white/25">
            Navigation
          </div>

          <ul className="flex list-none flex-col gap-2">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-sans text-[0.78rem] text-white/45 no-underline transition-colors duration-200 hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
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
            className="mt-4 inline-block bg-orange px-4 py-2 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-black no-underline"
          >
            Get Early Access →
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-border-col px-6 py-4 md:px-12">
        <p className="font-mono text-[0.6rem] tracking-[0.1em] text-white/20">
          © {new Date().getFullYear()} TekGlove. All rights reserved.
        </p>

        <p className="font-mono text-[0.6rem] tracking-[0.1em] text-white/20">
          United Kingdom
        </p>
      </div>
    </footer>
  );
}
