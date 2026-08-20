"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { BsChevronDown } from "react-icons/bs";
import { productNavLinks } from "@/content/navigation";

type ProductMenuProps = {
  pathname: string;
  onNavigate?: () => void;
  reduceMotion: boolean;
};

export function DesktopProductMenu({
  pathname,
  onNavigate,
  reduceMotion,
}: ProductMenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);
  const active = pathname.startsWith("/product");

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const close = () => {
    setOpen(false);
    onNavigate?.();
  };

  return (
    <li ref={menuRef} className="relative flex items-center">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={`flex items-center gap-2 border-0 bg-transparent p-0 font-sans text-[0.82rem] leading-normal font-medium tracking-[-0.01em] transition-colors duration-200 ${
          active ? "text-orange" : "text-white/70 hover:text-white"
        }`}
      >
        Products
        <BsChevronDown
          aria-hidden="true"
          className={`text-xs transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -6 }}
            transition={{
              duration: reduceMotion ? 0.12 : 0.2,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="absolute top-[calc(100%+1rem)] left-1/2 w-56 -translate-x-1/2 rounded-2xl border border-white/10 bg-black/92 p-2 shadow-2xl backdrop-blur-2xl"
            role="menu"
          >
            {productNavLinks.map((link) => {
              const linkActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  role="menuitem"
                  className={`block rounded-xl px-4 py-3 font-sans text-sm font-medium transition-colors duration-200 ${
                    linkActive
                      ? "bg-orange/10 text-orange"
                      : "text-white/72 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export function MobileProductMenu({
  pathname,
  onNavigate,
  reduceMotion,
}: ProductMenuProps) {
  const [open, setOpen] = useState(pathname.startsWith("/product"));
  const active = pathname.startsWith("/product");

  return (
    <div className="border-b border-white/5">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span
          className={`font-heading text-[clamp(2rem,8vw,3rem)] leading-none font-semibold tracking-[-0.04em] transition-colors duration-200 ${
            active ? "text-orange" : "text-white/85"
          }`}
        >
          Products
        </span>
        <BsChevronDown
          aria-hidden="true"
          className={`text-lg text-white/60 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.12 : 0.24 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 pb-5 pl-4">
              {productNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onNavigate}
                  className={`rounded-xl px-4 py-3 font-sans text-base font-medium transition-colors duration-200 ${
                    pathname === link.href
                      ? "bg-orange/10 text-orange"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
