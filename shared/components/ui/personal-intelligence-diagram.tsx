"use client";

import { Activity, BrainCircuit, CloudCog, Cpu, Network } from "lucide-react";
import { BsArrowRight } from "react-icons/bs";
import { motion, useReducedMotion } from "motion/react";
import {
  alternatingCardReveal,
  revealViewport,
} from "@/shared/motion/card-reveal";

export const personalIntelligenceStages = [
  {
    label: "Source",
    title: "Hand Signals",
    description: "Movement, grip, gesture, position, and biometrics.",
    icon: Activity,
  },
  {
    label: "Capture",
    title: "Smart Dorsal Sensor",
    description: "Captures signals and processes them on the hand.",
    icon: Cpu,
    core: true,
  },
  {
    label: "Interpret",
    title: "Edge Intelligence",
    description: "Recognises patterns and enables immediate decisions.",
    icon: BrainCircuit,
  },
  {
    label: "Connect",
    title: "TekGlove Platform",
    description: "Coordinates AI, apps, cloud services, and integrations.",
    icon: CloudCog,
  },
  {
    label: "Apply",
    title: "Actions & Feedback",
    description: "Delivers insights, alerts, haptics, and connected commands.",
    icon: Network,
  },
] as const;

function Connector({ index, reduceMotion }: { index: number; reduceMotion: boolean | null }) {
  return (
    <div
      className="flex items-center justify-center px-2 text-orange"
      aria-hidden="true"
    >
      <motion.span
        initial={{ opacity: 0, transform: "scaleX(0)" }}
        whileInView={{ opacity: 1, transform: "scaleX(1)" }}
        viewport={revealViewport}
        transition={{
          duration: reduceMotion ? 0.2 : 0.5,
          delay: reduceMotion ? 0 : 0.18 + index * 0.07,
          ease: [0.23, 1, 0.32, 1],
        }}
        className="h-px flex-1 origin-left bg-orange/60"
      />
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={revealViewport}
        transition={{
          duration: 0.2,
          delay: reduceMotion ? 0 : 0.48 + index * 0.07,
        }}
      >
        <BsArrowRight size={16} strokeWidth={0.5} />
      </motion.span>
    </div>
  );
}

export function PersonalIntelligenceDiagram() {
  const reduceMotion = useReducedMotion();

  return (
    <figure aria-labelledby="pia-title" aria-describedby="pia-description">
      <figcaption className="sr-only">
        <span id="pia-title">TekGlove personal intelligence data flow</span>
        <span id="pia-description">
          Hand signals are captured by the Smart Dorsal Sensor, interpreted by
          edge intelligence, connected to the TekGlove platform, and applied as
          insights, feedback, and commands across connected systems.
        </span>
      </figcaption>

      <LinearArchitectureDiagram reduceMotion={reduceMotion} />
      {/*
        Connected network concept retained for comparison:
        <NetworkArchitectureDiagram reduceMotion={reduceMotion} />
      */}

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-5 font-mono text-xs tracking-[0.05em] text-white/60">
        <span>Signals become actions</span>
        <span
          aria-hidden="true"
          className="h-3 w-px bg-white/20"
        />
        <span>One core architecture across six gloves</span>
      </div>
    </figure>
  );
}

export function LinearArchitectureDiagram({
  reduceMotion,
}: {
  reduceMotion: boolean | null;
}) {
  return (
    <>
      <div className="relative hidden pb-18 lg:block">
        <ol className="grid list-none items-stretch lg:grid-cols-[minmax(0,0.9fr)_48px_minmax(0,1.15fr)_48px_minmax(0,0.9fr)_48px_minmax(0,0.9fr)_48px_minmax(0,0.9fr)]">
        {personalIntelligenceStages.map((node, index) => {
          const Icon = node.icon;
          const isCore = "core" in node && node.core;

          return (
            <li key={node.title} className="contents">
              <motion.article
                custom={{ index, reduceMotion, delay: index * 0.06 }}
                variants={alternatingCardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={revealViewport}
                className={`relative flex min-h-60 flex-col rounded-2xl border p-6 ${
                  isCore
                    ? "pia-core -my-3 min-h-66 border-orange bg-orange p-7 text-black"
                    : "border-white/10 bg-black/55 text-white"
                }`}
              >
                <div className="mb-10 flex items-start justify-between gap-4">
                  <span
                    className={`font-mono text-xs tracking-[0.08em] ${
                      isCore ? "text-black/60" : "text-orange"
                    }`}
                  >
                    {node.label}
                  </span>
                  <Icon
                    size={22}
                    strokeWidth={1.4}
                    className={isCore ? "text-black" : "text-orange"}
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-auto">
                  <h3 className="mb-3 font-heading text-xl font-semibold leading-tight tracking-[-0.035em]">
                    {node.title}
                  </h3>
                  <p
                    className={`text-xs leading-[1.75] ${
                      isCore ? "text-black/75" : "text-white/70"
                    }`}
                  >
                    {node.description}
                  </p>
                </div>
              </motion.article>
              {index < personalIntelligenceStages.length - 1 && (
                <Connector index={index} reduceMotion={reduceMotion} />
              )}
            </li>
          );
        })}
        </ol>

        <motion.div
          initial={{ opacity: 0, transform: "scaleX(0)" }}
          whileInView={{ opacity: 1, transform: "scaleX(1)" }}
          viewport={revealViewport}
          transition={{
            duration: reduceMotion ? 0.2 : 0.65,
            delay: reduceMotion ? 0 : 0.62,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="absolute bottom-2 left-[27%] right-[7%] h-10 origin-right rounded-b-xl border-b border-l border-r border-orange/35"
          aria-hidden="true"
        >
          <BsArrowRight className="absolute -left-2 -top-2 -rotate-90 text-orange" size={16} />
        </motion.div>
        <span className="absolute bottom-0 left-[58%] -translate-x-1/2 bg-[#070708] px-4 font-mono text-[0.68rem] tracking-[0.06em] text-white/50">
          Feedback and commands return to the hand
        </span>
      </div>

      <div className="relative lg:hidden">
        <motion.div
          initial={{ opacity: 0, transform: "scaleY(0)" }}
          whileInView={{ opacity: 1, transform: "scaleY(1)" }}
          viewport={revealViewport}
          transition={{
            duration: reduceMotion ? 0.2 : 0.65,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="absolute bottom-20 left-2.5 top-6 w-px origin-top bg-orange/35"
          aria-hidden="true"
        />

        <ol className="space-y-5 pl-8">
          {personalIntelligenceStages.map((node, index) => {
            const Icon = node.icon;
            const isCore = "core" in node && node.core;

            return (
              <li key={node.title} className="relative">
                <span
                  className={`absolute -left-[1.65rem] top-7 h-2.5 w-2.5 rounded-full border ${
                    isCore
                      ? "border-orange bg-orange"
                      : "border-orange/70 bg-[#070708]"
                  }`}
                  aria-hidden="true"
                />
                <motion.article
                  initial={{
                    opacity: 0,
                    transform: reduceMotion
                      ? "translate3d(0, 0, 0)"
                      : "translate3d(0, 16px, 0)",
                  }}
                  whileInView={{
                    opacity: 1,
                    transform: "translate3d(0, 0, 0)",
                  }}
                  viewport={revealViewport}
                  transition={{
                    duration: reduceMotion ? 0.2 : 0.5,
                    delay: reduceMotion ? 0 : index * 0.05,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className={`flex min-h-48 flex-col rounded-2xl border p-6 ${
                    isCore
                      ? "pia-core border-orange bg-orange text-black"
                      : "border-white/10 bg-black/55 text-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`font-mono text-xs tracking-[0.08em] ${
                        isCore ? "text-black/60" : "text-orange"
                      }`}
                    >
                      {node.label}
                    </span>
                    <Icon
                      size={22}
                      strokeWidth={1.35}
                      className={isCore ? "text-black" : "text-orange"}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-auto pt-10">
                    <h3 className="mb-3 font-heading text-2xl font-semibold tracking-[-0.035em]">
                      {node.title}
                    </h3>
                    <p
                      className={`text-sm leading-[1.75] ${
                        isCore ? "text-black/70" : "text-white/65"
                      }`}
                    >
                      {node.description}
                    </p>
                  </div>
                </motion.article>
              </li>
            );
          })}
        </ol>

        <div className="ml-8 mt-5 rounded-xl border border-orange/20 bg-orange/5 px-5 py-4 font-mono text-xs leading-relaxed tracking-[0.05em] text-white/55">
          Feedback and commands return to the hand, completing the loop.
        </div>
      </div>
    </>
  );
}

export function PersonalIntelligenceStage({
  stage,
}: {
  stage: (typeof personalIntelligenceStages)[number];
}) {
  const Icon = stage.icon;

  return (
    <article
      className={`relative flex min-h-80 w-full max-w-3xl flex-col rounded-3xl border p-8 md:min-h-105 md:p-12 ${
        "core" in stage && stage.core
          ? "pia-core border-orange bg-orange text-black"
          : "border-white/10 bg-black/65 text-white"
      }`}
    >
      <div className="flex items-start justify-between gap-6">
        <span
          className={`font-mono text-xs tracking-[0.1em] ${
            "core" in stage && stage.core ? "text-black/60" : "text-orange"
          }`}
        >
          {stage.label}
        </span>
        <Icon
          size={28}
          strokeWidth={1.25}
          className={
            "core" in stage && stage.core ? "text-black" : "text-orange"
          }
          aria-hidden="true"
        />
      </div>

      <div className="mt-auto pt-20">
        <h3 className="mb-5 font-heading text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
          {stage.title}
        </h3>
        <p
          className={`max-w-[52ch] text-sm leading-[1.8] md:text-base ${
            "core" in stage && stage.core ? "text-black/70" : "text-white/65"
          }`}
        >
          {stage.description}
        </p>
      </div>
    </article>
  );
}

export function NetworkArchitectureDiagram({
  reduceMotion,
}: {
  reduceMotion: boolean | null;
}) {
  const lineClassName = reduceMotion ? "" : "pia-network-line";

  return (
    <div className="overflow-x-auto pb-2">
      <svg
        viewBox="0 0 900 610"
        className="mx-auto w-[88%] min-w-160 max-w-5xl lg:min-w-0"
        role="img"
        aria-label="Hand signals connect through the Smart Dorsal Sensor to edge intelligence, the TekGlove platform, and actions and feedback. Data and commands move in both directions across the system."
      >
        <defs>
          <marker
            id="pia-network-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path
              d="M2 1L8 5L2 9"
              fill="none"
              stroke="#f97316"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </marker>
          <filter id="pia-core-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g
          fill="none"
          stroke="#f97316"
          strokeWidth="1.5"
          strokeOpacity="0.72"
          markerEnd="url(#pia-network-arrow)"
          markerStart="url(#pia-network-arrow)"
          className={lineClassName}
          aria-hidden="true"
        >
          <path d="M220 305H350" />
          <path d="M450 235V155" />
          <path d="M550 305H680" />
          <path d="M450 375V455" />
          <path d="M195 250L345 145" strokeOpacity="0.42" />
          <path d="M555 145L705 250" strokeOpacity="0.42" />
          <path d="M705 360L555 465" strokeOpacity="0.42" />
          <path d="M345 465L195 360" strokeOpacity="0.42" />
        </g>

        <g
          fill="#a1a1aa"
          fontFamily="var(--font-dm-mono), monospace"
          fontSize="11"
          letterSpacing="0.06em"
          textAnchor="middle"
          aria-hidden="true"
        >
          <text x="285" y="291">CAPTURE</text>
          <text x="468" y="196">LOCAL PROCESSING</text>
          <text x="615" y="291">SYNC &amp; COORDINATE</text>
          <text x="468" y="421">ACT &amp; RESPOND</text>
          <text x="265" y="184">SIGNAL CONTEXT</text>
          <text x="635" y="184">MODELS &amp; RULES</text>
          <text x="642" y="434">INSIGHTS &amp; COMMANDS</text>
          <text x="258" y="434">HAPTIC FEEDBACK</text>
        </g>

        <NetworkNode
          x={25}
          y={250}
          width={195}
          eyebrow="SOURCE"
          title="HAND SIGNALS"
          lines={["Movement, grip, gesture,", "position and biometrics"]}
        />
        <NetworkNode
          x={345}
          y={45}
          width={210}
          eyebrow="INTERPRET"
          title="EDGE INTELLIGENCE"
          lines={["Immediate recognition,", "patterns and local decisions"]}
        />
        <NetworkNode
          x={350}
          y={235}
          width={200}
          eyebrow="CORE"
          title="SMART DORSAL SENSOR"
          lines={["Sensing, processing and", "wireless connectivity"]}
          core
        />
        <NetworkNode
          x={680}
          y={250}
          width={195}
          eyebrow="CONNECT"
          title="TEKGLOVE PLATFORM"
          lines={["Apps, cloud, digital twins", "and AI assistants"]}
        />
        <NetworkNode
          x={345}
          y={455}
          width={210}
          eyebrow="APPLY"
          title="ACTIONS & FEEDBACK"
          lines={["Insights, alerts, haptics,", "devices and people"]}
        />

        <circle cx="450" cy="305" r="116" fill="none" stroke="#f97316" strokeOpacity="0.08" />
        <circle cx="450" cy="305" r="145" fill="none" stroke="#ffffff" strokeOpacity="0.04" />
      </svg>
    </div>
  );
}

function NetworkNode({
  x,
  y,
  width,
  eyebrow,
  title,
  lines,
  core = false,
}: {
  x: number;
  y: number;
  width: number;
  eyebrow: string;
  title: string;
  lines: [string, string];
  core?: boolean;
}) {
  return (
    <g filter={core ? "url(#pia-core-glow)" : undefined}>
      <rect
        x={x}
        y={y}
        width={width}
        height="125"
        rx="16"
        fill={core ? "#f97316" : "#090909"}
        stroke={core ? "#f97316" : "#ffffff"}
        strokeOpacity={core ? "1" : "0.14"}
      />
      <text
        x={x + 20}
        y={y + 27}
        fill={core ? "#000000" : "#f97316"}
        fillOpacity={core ? "0.6" : "1"}
        fontFamily="var(--font-dm-mono), monospace"
        fontSize="10"
        fontWeight="600"
        letterSpacing="0.08em"
      >
        {eyebrow}
      </text>
      <text
        x={x + 20}
        y={y + 59}
        fill={core ? "#000000" : "#ffffff"}
        fontFamily="var(--font-barlow), sans-serif"
        fontSize="18"
        fontWeight="700"
        letterSpacing="0.02em"
      >
        {title}
      </text>
      <text
        x={x + 20}
        y={y + 88}
        fill={core ? "#000000" : "#ffffff"}
        fillOpacity={core ? "0.68" : "0.58"}
        fontFamily="var(--font-inter), sans-serif"
        fontSize="11"
      >
        <tspan x={x + 20}>{lines[0]}</tspan>
        <tspan x={x + 20} dy="17">{lines[1]}</tspan>
      </text>
    </g>
  );
}
