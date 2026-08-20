"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Crosshair, HeartPulse, MousePointer2 } from "lucide-react";
import { WatchFrame } from "./watch-frame";

const interfaces = [
  { name: "KRADLE", metric: "72 BPM", detail: "SYNCED", Icon: HeartPulse },
  { name: "KINETIX", metric: "99.4%", detail: "LOCKED", Icon: Crosshair },
  { name: "KURSOR", metric: "READY", detail: "ACTIVE", Icon: MousePointer2 },
] as const;

// 2000ms total loop / 3 items = ~666.67ms per step
const STEP_DURATION = 3000 / interfaces.length;

export function InterfaceDeck() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const interval = window.setInterval(
      () => setActive((current) => (current + 1) % interfaces.length),
      STEP_DURATION,
    );
    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  return (
    <WatchFrame>
      <div className="relative flex h-full w-full flex-col justify-between overflow-hidden p-2.5 select-none">
        {/* Top Header */}
        <div className="flex items-center justify-between font-mono text-[0.4rem] tracking-[0.16em] text-white/35">
          <span>TEKGLOVE</span>
          <span className="font-semibold text-white/60">0{active + 1}/03</span>
        </div>

        {/* Sliding Card Carousel */}
        <div className="relative my-auto w-full overflow-hidden">
          <motion.div
            animate={{
              x: reduceMotion ? 0 : `${active * -(100 / interfaces.length)}%`,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.38,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex w-[300%]"
          >
            {interfaces.map(({ name, metric, detail, Icon }, index) => {
              const isActive = index === active;
              return (
                <div key={name} className="w-1/3 shrink-0 pr-1.5">
                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0.3,
                      scale: isActive || reduceMotion ? 1 : 0.94,
                    }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col rounded-xl border border-white/10 bg-white/[0.04] p-2.5 backdrop-blur-sm"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <Icon
                        className="text-orange"
                        size={16}
                        strokeWidth={1.6}
                      />
                      <span className="rounded-full bg-orange/15 px-1 py-[1px] font-mono text-[0.32rem] font-semibold text-orange">
                        {detail}
                      </span>
                    </div>

                    <p className="font-brand text-[0.7rem] font-black tracking-[0.12em] text-white">
                      {name}
                    </p>
                    <p className="mt-0.5 font-mono text-[0.44rem] font-bold tracking-[0.08em] text-white/60">
                      {metric}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Minimal Bottom Ticker */}
        <div className="flex items-center justify-between font-mono text-[0.36rem] tracking-[0.12em] text-white/25">
          <span>CORE STABLE</span>
          <div className="flex gap-1">
            {interfaces.map(({ name }, i) => (
              <span
                key={name}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === active ? "w-3 bg-orange" : "w-1 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </WatchFrame>
  );
}
