"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function ScreenLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent scroll while loading
    document.body.style.overflow = "hidden";

    const start = performance.now();
    const duration = 2200;

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(elapsed / duration, 1);
      // Ease out expo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setProgress(Math.round(eased * 100));
      if (p < 1) requestAnimationFrame(tick);
      else {
        setTimeout(() => {
          setVisible(false);
          document.body.style.overflow = "";
        }, 400);
      }
    };

    requestAnimationFrame(tick);

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#000",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.5rem",
          }}
        >
          {/* SVG Watch / Glove */}
          <WatchSVG progress={progress} />

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ textAlign: "center" }}
          >
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "1.4rem",
                fontWeight: 800,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "white",
              }}
            >
              Tek<span style={{ color: "var(--orange)" }}>Glove</span>
            </div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              width: "120px",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "1px",
                background: "rgba(255,255,255,0.1)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <motion.div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  height: "100%",
                  background: "var(--orange)",
                  width: `${progress}%`,
                  transition: "width 0.05s linear",
                }}
              />
            </div>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.55rem",
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.3)",
              }}
            >
              {String(progress).padStart(3, "0")}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function WatchSVG({ progress }: { progress: number }) {
  // Second hand angle: 0→360 as progress 0→100
  const secondAngle = (progress / 100) * 360;
  // Minute hand: slow tick
  const minuteAngle = (progress / 100) * 30;
  // Screen opacity builds up with progress
  const screenOpacity = Math.min(progress / 60, 1);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <svg
        width="120"
        height="148"
        viewBox="0 0 120 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Watch band top */}
        <rect
          x="38"
          y="0"
          width="44"
          height="22"
          rx="6"
          fill="#1a1a1a"
          stroke="#333"
          strokeWidth="1"
        />
        {/* Band buckle detail */}
        <line x1="46" y1="8" x2="74" y2="8" stroke="#2a2a2a" strokeWidth="1" />
        <line
          x1="46"
          y1="12"
          x2="74"
          y2="12"
          stroke="#2a2a2a"
          strokeWidth="1"
        />
        <line
          x1="46"
          y1="16"
          x2="74"
          y2="16"
          stroke="#2a2a2a"
          strokeWidth="1"
        />

        {/* Watch band bottom */}
        <rect
          x="38"
          y="126"
          width="44"
          height="22"
          rx="6"
          fill="#1a1a1a"
          stroke="#333"
          strokeWidth="1"
        />
        <line
          x1="46"
          y1="132"
          x2="74"
          y2="132"
          stroke="#2a2a2a"
          strokeWidth="1"
        />
        <line
          x1="46"
          y1="136"
          x2="74"
          y2="136"
          stroke="#2a2a2a"
          strokeWidth="1"
        />
        <line
          x1="46"
          y1="140"
          x2="74"
          y2="140"
          stroke="#2a2a2a"
          strokeWidth="1"
        />

        {/* Watch case */}
        <rect
          x="8"
          y="20"
          width="104"
          height="108"
          rx="26"
          fill="#111"
          stroke="#2a2a2a"
          strokeWidth="1.5"
        />

        {/* Crown / side button */}
        <rect
          x="112"
          y="50"
          width="6"
          height="18"
          rx="3"
          fill="#222"
          stroke="#333"
          strokeWidth="1"
        />
        <rect
          x="112"
          y="72"
          width="6"
          height="10"
          rx="3"
          fill="#222"
          stroke="#333"
          strokeWidth="1"
        />

        {/* Screen background */}
        <rect x="16" y="28" width="88" height="92" rx="20" fill="#0a0a0a" />

        {/* Screen glow — builds up as progress increases */}
        <rect
          x="16"
          y="28"
          width="88"
          height="92"
          rx="20"
          fill="rgba(249,115,22,0.06)"
          opacity={screenOpacity}
        />

        {/* Clock face */}
        <g opacity={screenOpacity}>
          {/* Hour markers */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
            (angle, i) => {
              const rad = (angle - 90) * (Math.PI / 180);
              const isMajor = i % 3 === 0;
              const r1 = isMajor ? 32 : 34;
              const r2 = isMajor ? 37 : 36;
              const x1 = 60 + r1 * Math.cos(rad);
              const y1 = 74 + r1 * Math.sin(rad);
              const x2 = 60 + r2 * Math.cos(rad);
              const y2 = 74 + r2 * Math.sin(rad);
              return (
                <line
                  key={angle}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={
                    isMajor ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)"
                  }
                  strokeWidth={isMajor ? 1.5 : 0.8}
                  strokeLinecap="round"
                />
              );
            },
          )}

          {/* Hour hand */}
          <motion.line
            x1="60"
            y1="74"
            x2={60 + 18 * Math.cos((minuteAngle * 12 - 90) * (Math.PI / 180))}
            y2={74 + 18 * Math.sin((minuteAngle * 12 - 90) * (Math.PI / 180))}
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Minute hand */}
          <motion.line
            x1="60"
            y1="74"
            x2={60 + 26 * Math.cos((minuteAngle - 90) * (Math.PI / 180))}
            y2={74 + 26 * Math.sin((minuteAngle - 90) * (Math.PI / 180))}
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Second hand */}
          <motion.line
            x1={60 - 8 * Math.cos((secondAngle - 90) * (Math.PI / 180))}
            y1={74 - 8 * Math.sin((secondAngle - 90) * (Math.PI / 180))}
            x2={60 + 30 * Math.cos((secondAngle - 90) * (Math.PI / 180))}
            y2={74 + 30 * Math.sin((secondAngle - 90) * (Math.PI / 180))}
            stroke="var(--orange)"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* Center dot */}
          <circle cx="60" cy="74" r="2.5" fill="var(--orange)" />

          {/* TekGlove wordmark on screen */}
          <text
            x="60"
            y="56"
            textAnchor="middle"
            fontFamily="'Barlow Condensed', sans-serif"
            fontSize="7"
            fontWeight="700"
            letterSpacing="1.5"
            fill="rgba(255,255,255,0.5)"
          >
            TEKGLOVE
          </text>

          {/* Status indicator */}
          <circle cx="60" cy="100" r="2" fill="var(--orange)" opacity="1" />
        </g>

        {/* Glove hex texture overlay on the band — subtle */}
        <g opacity="0.15">
          {[44, 52, 60, 68, 76].map((x, i) => (
            <polygon
              key={i}
              points={`${x},3 ${x + 4},5.3 ${x + 4},9.9 ${x},12.2 ${x - 4},9.9 ${x - 4},5.3`}
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          ))}
        </g>
      </svg>
    </motion.div>
  );
}
