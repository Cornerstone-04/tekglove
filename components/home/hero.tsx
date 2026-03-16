import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { site } from "@/lib/data";
import Link from "next/link";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const gloveY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const gloveScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  return (
    <section
      ref={heroRef}
      className="relative min-h-svh flex items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute top-1/2 right-[-10%] -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.08)_0%,transparent_65%)] z-0" />

      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-10 w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-24 pb-16"
      >
        {/* Left */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-xxs tracking-[0.3em] uppercase text-orange mb-6"
          >
            Introducing Tek Glove
          </motion.p>

          <h1 className="font-heading font-black text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] tracking-[-0.02em] text-white mb-6">
            {["Your", "Apple", "Watch,"].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block mr-[0.2em]"
              >
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block text-orange"
            >
              Reinvented.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="font-sans text-base leading-relaxed text-white/50 max-w-[42ch] mb-10"
          >
            {site.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/waitlist"
              className="font-sans font-semibold text-[0.8rem] tracking-[0.08em] uppercase bg-orange text-black px-8 py-[0.9rem] transition-opacity duration-200 hover:opacity-85"
            >
              Get Early Access
            </Link>
            <Link
              href="/product"
              className="font-sans font-medium text-[0.8rem] tracking-[0.08em] uppercase text-white/60 border border-white/15 px-8 py-[0.9rem] transition-all duration-200 hover:text-white hover:border-white/40"
            >
              View Product
            </Link>
          </motion.div>
        </div>

        {/* Right — floating glove */}
        <motion.div
          style={{ y: gloveY, scale: gloveScale }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative"
            >
              <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-orange/20 blur-3xl rounded-full pointer-events-none" />
              <Image
                src="/images/tekglove_front_cutout.png"
                alt="Tek Glove with Apple Watch Ultra"
                width={520}
                height={520}
                className="object-contain max-w-full relative z-10"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        style={{ opacity: scrollHintOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-mono text-xxs tracking-[0.25em] uppercase text-white/25">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-linear-to-b from-orange/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
