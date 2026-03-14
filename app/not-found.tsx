import Link from "next/link";

const mono: React.CSSProperties = { fontFamily: "'DM Mono', monospace" };
const inter: React.CSSProperties = { fontFamily: "'Inter', sans-serif" };
const heading: React.CSSProperties = { fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase" };

export default function NotFound() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100svh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem" }}>
      <div>
        <div style={{ ...mono, fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "1.5rem" }}>
          404
        </div>
        <h1 style={{ ...heading, fontWeight: 900, fontSize: "clamp(5rem, 20vw, 14rem)", color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.1)", lineHeight: 0.9, marginBottom: "2rem" }}>
          Lost.
        </h1>
        <p style={{ ...inter, fontSize: "0.85rem", color: "rgba(255,255,255,0.35)", marginBottom: "2.5rem" }}>
          This page doesn't exist.
        </p>
        <Link href="/" style={{
          ...inter, fontWeight: 600, fontSize: "0.78rem",
          letterSpacing: "0.08em", textTransform: "uppercase",
          textDecoration: "none", background: "var(--orange)", color: "black",
          padding: "0.8rem 1.75rem",
        }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
