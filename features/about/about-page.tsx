import { AboutHero } from "./components/about-hero";
import { MissionCta } from "./components/mission-cta";
import { OriginStory } from "./components/origin-story";
import { PlatformModel } from "./components/platform-model";
import { WhyHand } from "./components/why-hand";

export default function AboutPage() {
  return (
    <div className="bg-bg pt-16">
      <AboutHero />
      <OriginStory />
      <WhyHand />
      <PlatformModel />
      <MissionCta />
    </div>
  );
}
