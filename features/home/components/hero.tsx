import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { site } from "@/content/site";
import { ButtonLink } from "@/shared/components/ui/button";
import { FloatingGlove } from "@/shared/components/ui/floating-glove";

export function Hero() {
  const reduceMotion = useReducedMotion();
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
      className="hero-texture relative flex min-h-svh items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute top-1/2 right-[-10%] -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.12)_0%,rgba(249,115,22,0.035)_38%,transparent_68%)] z-0" />

      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-10 w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-24 pb-16"
      >
        {/* Left */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.6,
              delay: reduceMotion ? 0 : 0.2,
            }}
            className="section-kicker mb-6"
          >
            Introducing Tek Glove
          </motion.p>

          <h1 className="display-title mb-7 max-w-[11ch] text-[clamp(3.5rem,7vw,6.75rem)] text-white">
            {["Your", "Smart", "Glove,"].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0.2 : 0.7,
                  delay: reduceMotion ? 0 : 0.3 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mr-[0.16em] inline-block"
              >
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: reduceMotion ? 0 : 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0.2 : 0.7,
                delay: reduceMotion ? 0 : 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block text-orange"
            >
              Reinvented.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.7,
              delay: reduceMotion ? 0 : 0.7,
            }}
            className="copy-secondary mb-10 max-w-[46ch] font-sans text-[clamp(1rem,1.4vw,1.18rem)] leading-[1.7]"
          >
            {site.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.6,
              delay: reduceMotion ? 0 : 0.85,
            }}
            className="flex flex-wrap gap-4"
          >
            <ButtonLink href="/waitlist" icon={false}>
              Get Early Access
            </ButtonLink>
            <ButtonLink href="/product" variant="secondary" icon={false}>
              View Product
            </ButtonLink>
          </motion.div>
        </div>

        {/* Right: floating glove */}
        <motion.div
          style={reduceMotion ? undefined : { y: gloveY, scale: gloveScale }}
          className="flex justify-center md:-ml-8 lg:-ml-16"
        >
          <FloatingGlove>
            <motion.div
              initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: reduceMotion ? 0.2 : 1,
                delay: reduceMotion ? 0 : 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative"
            >
              <div className="pointer-events-none absolute inset-[10%] rounded-full bg-orange/10 blur-[80px]" />
              <div className="pointer-events-none absolute bottom-[-10%] left-1/2 h-[34%] w-[68%] -translate-x-1/2 rounded-full bg-orange/28 blur-3xl" />
              <Image
                src="/images/tekglove-platform-front.webp"
                alt=""
                width={610}
                height={610}
                className="relative z-10 max-w-full object-contain"
                priority
              />
              <div className="absolute right-0 top-[12%] z-20 hidden max-w-52 rounded-2xl border border-white/15 bg-black/55 p-4 shadow-2xl backdrop-blur-2xl sm:block lg:-right-4">
                <p className="mb-1.5 font-mono text-xs tracking-[0.07em] text-orange">
                  Smart Dorsal Sensor
                </p>
                <p className="text-xs leading-relaxed text-white/65">
                  The intelligence behind every TekGlove.
                </p>
              </div>
            </motion.div>
          </FloatingGlove>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        style={{ opacity: scrollHintOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-mono text-xs tracking-[0.12em] text-white/60">
          Scroll
        </span>
        <div className="w-px h-8 bg-linear-to-b from-orange/60 to-transparent" />
      </motion.div>
    </section>
  );
}
