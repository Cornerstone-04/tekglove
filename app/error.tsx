"use client";

import { Button } from "@/shared/components/ui/button";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <section className="grid min-h-svh place-items-center bg-bg px-6 text-center">
      <div className="max-w-xl">
        <p className="section-kicker mb-5">Something went wrong</p>
        <h1 className="display-title text-[clamp(2.75rem,7vw,5rem)] text-white">
          Let&apos;s try that again.
        </h1>
        <p className="copy-secondary mx-auto mt-6 max-w-[48ch] leading-[1.8]">
          The page could not be displayed. Your place is safe, and you can retry
          without leaving TekGlove.
        </p>
        <Button type="button" onClick={reset} className="mt-9">
          Try again
        </Button>
      </div>
    </section>
  );
}
