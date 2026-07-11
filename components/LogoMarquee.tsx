import Container from "@/components/ui/Container";

// Placeholder wordmarks — replace with real (non-brand) partner logos/SVGs.
const LOGOS = [
  "Placeholder",
  "Logoipsum",
  "Acme Co",
  "Northwind",
  "Globex",
  "Initech",
  "Umbrella",
  "Hooli",
];

function LogoItem({ label }: { label: string }) {
  return (
    <span className="mx-8 shrink-0 text-body-lg font-medium text-text-muted opacity-60">
      {label}
    </span>
  );
}

/**
 * Infinite horizontal logo strip. The track is duplicated and translated -50%
 * so the loop is seamless. Logos rendered in muted gray.
 */
export default function LogoMarquee() {
  return (
    <section className="border-y border-border py-10">
      <Container>
        <p className="mb-8 text-center text-label uppercase tracking-wider text-text-muted">
          Placeholder — trusted by teams everywhere
        </p>
      </Container>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center">
          {/* Two identical tracks for a seamless -50% loop */}
          {[0, 1].map((track) => (
            <div key={track} className="flex items-center" aria-hidden={track === 1}>
              {LOGOS.map((label, i) => (
                <LogoItem key={`${track}-${i}`} label={label} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
