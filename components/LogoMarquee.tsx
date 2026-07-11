import Container from "@/components/ui/Container";

// Pre-launch: no partner logos yet. This strip states capabilities instead of
// showing fake traction. Swap back to a logo marquee once partners are public.
const CAPABILITIES = [
  "Built on zero-knowledge proofs",
  "Portable identity",
  "Audit-ready by design",
];

/**
 * Capability strip — a single centered line in small caps, replacing the
 * former "trusted by" logo marquee until real logos exist.
 */
export default function LogoMarquee() {
  return (
    <section className="border-y border-border py-8">
      <Container>
        <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-label uppercase tracking-[0.18em] text-text-muted">
          {CAPABILITIES.map((item, i) => (
            <span key={item} className="inline-flex items-center gap-x-3">
              {i > 0 && <span aria-hidden className="text-text-muted/50">·</span>}
              {item}
            </span>
          ))}
        </p>
      </Container>
    </section>
  );
}
