import { ButtonLink } from "@/shared/components/ui/button";
import { ShaderBackdrop } from "@/shared/components/ui/shader-backdrop";

export default function NotFound() {
  return (
    <section className="hero-texture relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-6 py-28 md:px-12">
      <ShaderBackdrop
        variant="sensor"
        className="mask-[radial-gradient(circle_at_72%_48%,black,transparent_58%)] opacity-25"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-2 h-40 bg-linear-to-b from-transparent to-bg" />

      <div className="relative z-10 grid w-full items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="section-kicker mb-6">404 · Page Not Found</p>
          <h1 className="display-title mb-7 max-w-[8ch] text-[clamp(4rem,9vw,8rem)] tracking-[-0.055em] text-white">
            Signal
            <br />
            <span className="text-orange">Lost.</span>
          </h1>
          <p className="copy-secondary mb-10 max-w-[48ch] text-[clamp(1rem,1.4vw,1.15rem)] leading-[1.8]">
            The page you are looking for is no longer here, or the address may
            have changed. Return home or continue exploring the TekGlove
            platform.
          </p>

          <div className="flex flex-wrap gap-4">
            <ButtonLink href="/" arrow="left">
              Back to Home
            </ButtonLink>
            <ButtonLink href="/product" variant="secondary">
              Explore Products
            </ButtonLink>
          </div>
        </div>

        <div className="relative flex min-h-80 items-center justify-center sm:min-h-112 lg:min-h-152">
          <div className="absolute h-[70%] w-[70%] rounded-full bg-orange/10 blur-[100px]" />
          <div className="surface-panel relative flex aspect-square w-full max-w-136 items-center justify-center overflow-hidden rounded-4xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12),transparent_62%)]" />
            <span
              aria-hidden="true"
              className="relative font-heading text-[clamp(8rem,22vw,18rem)] leading-none font-semibold tracking-[-0.08em] text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.18)" }}
            >
              404
            </span>
            <div className="absolute right-6 bottom-6 left-6 flex items-center justify-between border-t border-white/10 pt-5 font-mono text-xs tracking-[0.08em] text-white/55 sm:right-8 sm:bottom-8 sm:left-8">
              <span>Connection Status</span>
              <span className="flex items-center gap-2 text-orange">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Offline
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
