import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[100svh] items-center justify-center bg-bg p-8 text-center">
      <div>
        <div className="mb-6 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-orange">
          404
        </div>

        <h1
          className="mb-8 font-heading text-[clamp(5rem,20vw,14rem)] leading-[0.9] font-black uppercase text-transparent"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}
        >
          Lost.
        </h1>

        <p className="mb-10 font-sans text-[0.85rem] text-white/35">
          This page doesn't exist.
        </p>

        <Link
          href="/"
          className="bg-orange px-7 py-[0.8rem] font-sans text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-black no-underline"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
