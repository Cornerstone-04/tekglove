"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "motion/react";

const NeuroNoise = dynamic(
  () =>
    import("@paper-design/shaders-react").then((module) => module.NeuroNoise),
  { ssr: false },
);
const DotOrbit = dynamic(
  () => import("@paper-design/shaders-react").then((module) => module.DotOrbit),
  { ssr: false },
);
const GrainGradient = dynamic(
  () =>
    import("@paper-design/shaders-react").then(
      (module) => module.GrainGradient,
    ),
  { ssr: false },
);
const MeshGradient = dynamic(
  () =>
    import("@paper-design/shaders-react").then((module) => module.MeshGradient),
  { ssr: false },
);

type ShaderVariant = "intelligence" | "ecosystem" | "sensor" | "waitlist";

type ShaderBackdropProps = {
  variant: ShaderVariant;
  className?: string;
};

const staticBackgrounds: Record<ShaderVariant, string> = {
  intelligence:
    "radial-gradient(circle at 65% 45%, rgba(249,115,22,0.2), transparent 48%)",
  ecosystem:
    "radial-gradient(circle at 24% 32%, rgba(249,115,22,0.14), transparent 40%)",
  sensor:
    "radial-gradient(circle at 50% 52%, rgba(249,115,22,0.24), transparent 46%)",
  waitlist:
    "radial-gradient(circle at 50% 50%, rgba(249,115,22,0.18), transparent 42%)",
};

const shaderStyle = { width: "100%", height: "100%" };
const shaderQuality = { minPixelRatio: 1, maxPixelCount: 900_000 };

export function ShaderBackdrop({
  variant,
  className = "",
}: ShaderBackdropProps) {
  const reduceMotion = useReducedMotion();
  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const updateAnimationState = () => {
      setCanAnimate(desktopQuery.matches && !reduceMotion);
    };

    updateAnimationState();
    desktopQuery.addEventListener("change", updateAnimationState);
    return () =>
      desktopQuery.removeEventListener("change", updateAnimationState);
  }, [reduceMotion]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ background: staticBackgrounds[variant] }}
    >
      {canAnimate && variant === "intelligence" && (
        <NeuroNoise
          {...shaderQuality}
          style={shaderStyle}
          colorFront="#f97316"
          colorMid="#4a1d0a"
          colorBack="#050505"
          brightness={0.12}
          contrast={0.72}
          scale={1.1}
          speed={0.08}
        />
      )}

      {canAnimate && variant === "ecosystem" && (
        <DotOrbit
          {...shaderQuality}
          style={shaderStyle}
          colors={["#f97316", "#7c2d12", "#f8fafc"]}
          colorBack="#000000"
          size={0.11}
          sizeRange={0.55}
          spreading={0.68}
          scale={0.7}
          speed={0.06}
        />
      )}

      {canAnimate && variant === "sensor" && (
        <GrainGradient
          {...shaderQuality}
          style={shaderStyle}
          colors={["#f97316", "#431407", "#090909"]}
          colorBack="#000000"
          softness={0.78}
          intensity={0.32}
          noise={0.22}
          shape="ripple"
          scale={0.9}
          speed={0.08}
        />
      )}

      {canAnimate && variant === "waitlist" && (
        <MeshGradient
          {...shaderQuality}
          style={shaderStyle}
          colors={["#000000", "#f97316", "#351307", "#080808"]}
          distortion={0.42}
          swirl={0.18}
          grainMixer={0.1}
          grainOverlay={0.12}
          speed={0.05}
        />
      )}
    </div>
  );
}
