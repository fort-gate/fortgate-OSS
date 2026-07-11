import Icon from "@/components/ui/Icon";

// Pre-launch: no partner logos. A quiet capability bar states the posture
// instead of showing fake traction. Muted, no glow — calm and credible.
const CAPABILITIES = [
  "Built on zero-knowledge proofs",
  "Portable identity",
  "Audit-ready by design",
  "Data never leaves your control",
];

function Track() {
  return (
    <div className="flex shrink-0 items-center">
      {CAPABILITIES.map((item) => (
        <span
          key={item}
          className="mx-6 inline-flex items-center gap-2 text-label uppercase tracking-[0.16em] text-text-muted"
        >
          <Icon name="check" size={14} className="text-accent-violet/70" />
          {item}
        </span>
      ))}
    </div>
  );
}

/**
 * Capability strip — a slow, glow-free marquee. Quiet by design; the seriousness
 * of a regulated product is communicated by restraint, not neon.
 */
export default function LogoMarquee() {
  return (
    <section
      aria-label="Fortgate capabilities"
      className="overflow-hidden border-y border-border bg-surface-1 py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      <div className="flex w-max marquee-track">
        <Track />
        <div aria-hidden>
          <Track />
        </div>
      </div>
    </section>
  );
}
