"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Image from "next/image";

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const reduceMotion = useReducedMotion();
  const startedRef = useRef(false);

  useEffect(() => {
    const shouldShow =
      startedRef.current || !sessionStorage.getItem("tekglove-splash-seen");
    if (!shouldShow) return;

    if (!startedRef.current) {
      sessionStorage.setItem("tekglove-splash-seen", "true");
      startedRef.current = true;
    }
    setVisible(true);
    document.body.style.overflow = "hidden";

    const start = performance.now();
    const duration = reduceMotion ? 200 : 900;
    let rafId = 0;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(elapsed / duration, 1);
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);

      setProgress(Math.round(eased * 100));

      if (p < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        timeoutId = setTimeout(() => {
          setVisible(false);
          document.body.style.overflow = "";
        }, 100);
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      if (timeoutId) clearTimeout(timeoutId);
      document.body.style.overflow = "";
    };
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: reduceMotion ? 0.2 : 0.25,
              ease: [0.23, 1, 0.32, 1],
            },
          }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center gap-8 bg-black"
        >
          <div className="relative grid h-48 w-48 place-items-center overflow-hidden rounded-4xl border border-white/10 bg-[radial-gradient(circle_at_50%_65%,rgba(249,115,22,0.2),transparent_60%)]">
            <div
              aria-hidden="true"
              className={`absolute inset-0 grid place-items-center transition-opacity duration-200 ${
                imageLoaded ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="absolute h-28 w-28 rounded-full border border-orange/15" />
              <div className="absolute h-20 w-20 rounded-full border border-orange/25" />
              <span className="relative font-brand text-5xl font-black tracking-[-0.06em] text-white/90">
                T<span className="text-orange">G</span>
              </span>
            </div>
            <Image
              src="/images/tekglove-platform-front.webp"
              alt=""
              width={170}
              height={170}
              priority
              onLoad={() => setImageLoaded(true)}
              className={`relative h-auto w-[82%] object-contain transition-opacity ${
                reduceMotion ? "duration-200" : "duration-300"
              } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: reduceMotion ? 0 : 0.3,
              duration: reduceMotion ? 0.2 : 0.6,
            }}
            className="text-center"
          >
            <div className="font-brand text-[1.4rem] font-extrabold uppercase tracking-[0.2em] text-white">
              Tek<span className="text-orange">Glove</span>
            </div>
            <p className="mt-2 font-sans text-xs text-white/65">
              Smart Dorsal Sensor platform
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: reduceMotion ? 0 : 0.5,
              duration: reduceMotion ? 0.2 : undefined,
            }}
            className="flex w-30 flex-col items-center gap-2"
          >
            <div className="relative h-px w-full overflow-hidden bg-white/10">
              <motion.div
                className="absolute top-0 left-0 h-full bg-orange"
                style={{
                  width: "100%",
                  transform: `scaleX(${progress / 100})`,
                  transformOrigin: "left",
                }}
              />
            </div>

            <span className="font-mono text-xs tracking-[0.08em] text-white/65">
              {String(progress).padStart(3, "0")}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
