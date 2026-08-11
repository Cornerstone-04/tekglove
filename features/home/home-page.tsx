"use client";

import { StickyFeatures } from "./components/sticky-features";
import { Hero } from "./components/hero";
import { Marquee } from "./components/marquee";
import { Features } from "./components/features";
import { HeroCTA } from "./components/hero-cta";
import { Ecosystem } from "./components/ecosystem";
import { PersonalIntelligenceArchitecture } from "./components/personal-intelligence-architecture";

export default function HomePage() {
  return (
    <div className="bg-bg">
      <Hero />
      <Marquee />
      <StickyFeatures />
      <Features />
      <PersonalIntelligenceArchitecture />
      <Ecosystem />
      <HeroCTA />
    </div>
  );
}
