"use client";

import { motion } from "motion/react";

export function WatchSVG({
  progress,
  reduceMotion,
}: {
  progress: number;
  reduceMotion: boolean;
}) {
  const secondAngle = (progress / 100) * 360;
  const minuteAngle = (progress / 100) * 30;
  const screenOpacity = Math.min(progress / 60, 1);

  return (
    <motion.div
      initial={{
        opacity: 0,
        transform: reduceMotion ? "scale(1)" : "scale(0.85)",
      }}
      animate={{ opacity: 1, transform: "scale(1)" }}
      transition={{
        duration: reduceMotion ? 0.2 : 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <svg
        width="150"
        height="185"
        viewBox="0 0 120 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="38"
          width="44"
          height="22"
          rx="6"
          fill="#1a1a1a"
          stroke="#333"
        />
        {[8, 12, 16].map((y) => (
          <line key={y} x1="46" y1={y} x2="74" y2={y} stroke="#2a2a2a" />
        ))}

        <rect
          x="38"
          y="126"
          width="44"
          height="22"
          rx="6"
          fill="#1a1a1a"
          stroke="#333"
        />
        {[132, 136, 140].map((y) => (
          <line key={y} x1="46" y1={y} x2="74" y2={y} stroke="#2a2a2a" />
        ))}

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
        <rect
          x="112"
          y="50"
          width="6"
          height="18"
          rx="3"
          fill="#222"
          stroke="#333"
        />
        <rect
          x="112"
          y="72"
          width="6"
          height="10"
          rx="3"
          fill="#222"
          stroke="#333"
        />
        <rect x="16" y="28" width="88" height="92" rx="20" fill="#0a0a0a" />
        <rect
          x="16"
          y="28"
          width="88"
          height="92"
          rx="20"
          fill="rgba(249,115,22,0.06)"
          opacity={screenOpacity}
        />

        <g opacity={screenOpacity}>
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
            (angle, index) => {
              const radians = (angle - 90) * (Math.PI / 180);
              const major = index % 3 === 0;
              const innerRadius = major ? 32 : 34;
              const outerRadius = major ? 37 : 36;

              return (
                <line
                  key={angle}
                  x1={60 + innerRadius * Math.cos(radians)}
                  y1={74 + innerRadius * Math.sin(radians)}
                  x2={60 + outerRadius * Math.cos(radians)}
                  y2={74 + outerRadius * Math.sin(radians)}
                  stroke={
                    major ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)"
                  }
                  strokeWidth={major ? 1.5 : 0.8}
                  strokeLinecap="round"
                />
              );
            },
          )}

          <line
            x1="60"
            y1="74"
            x2={60 + 18 * Math.cos((minuteAngle * 12 - 90) * (Math.PI / 180))}
            y2={74 + 18 * Math.sin((minuteAngle * 12 - 90) * (Math.PI / 180))}
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="60"
            y1="74"
            x2={60 + 26 * Math.cos((minuteAngle - 90) * (Math.PI / 180))}
            y2={74 + 26 * Math.sin((minuteAngle - 90) * (Math.PI / 180))}
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1={60 - 8 * Math.cos((secondAngle - 90) * (Math.PI / 180))}
            y1={74 - 8 * Math.sin((secondAngle - 90) * (Math.PI / 180))}
            x2={60 + 30 * Math.cos((secondAngle - 90) * (Math.PI / 180))}
            y2={74 + 30 * Math.sin((secondAngle - 90) * (Math.PI / 180))}
            stroke="var(--orange)"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <circle cx="60" cy="74" r="2.5" fill="var(--orange)" />
          <text
            x="60"
            y="56"
            textAnchor="middle"
            fontFamily="Barlow Condensed, sans-serif"
            fontSize="7"
            fontWeight="700"
            letterSpacing="1.5"
            fill="rgba(255,255,255,0.5)"
          >
            Tek Glove
          </text>
          <circle cx="60" cy="100" r="2" fill="var(--orange)" />
        </g>
      </svg>
    </motion.div>
  );
}
