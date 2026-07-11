const CAPABILITIES = [
  "Built on zero-knowledge proofs",
  "Portable identity",
  "Audit-ready by design",
];

function MarqueeTrack() {
  return (
    <div className="flex shrink-0 items-center gap-x-10 pr-10">
      {CAPABILITIES.map((item, i) => (
        <span key={item} className="inline-flex items-center gap-x-10">
          {i > 0 && (
            <span aria-hidden className="neon-marquee-dot text-label">
              ·
            </span>
          )}
          <span className="neon-marquee-text text-label uppercase tracking-[0.18em]">
            {item}
          </span>
        </span>
      ))}
      <span aria-hidden className="neon-marquee-dot text-label">
        ·
      </span>
    </div>
  );
}

/**
 * Capability strip — infinite horizontal marquee with neon typography.
 */
export default function LogoMarquee() {
  return (
    <section
      aria-label="Fortgate capabilities"
      className="overflow-hidden border-y border-border py-8"
    >
      <div className="flex w-max marquee-track">
        <MarqueeTrack />
        <div aria-hidden>
          <MarqueeTrack />
        </div>
      </div>
    </section>
  );
}
