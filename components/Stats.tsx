import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Icon, { type IconName } from "@/components/ui/Icon";

interface Principle {
  icon: IconName;
  value: string;
  label: string;
}

// Pre-launch: framed as operating principles, not traction. Static values —
// animating "0" or "1x" would read as a gimmick to a compliance buyer.
const PRINCIPLES: Principle[] = [
  { icon: "refresh", value: "1×", label: "Verify once, reuse across every connected platform" },
  { icon: "activity", value: "<5s", label: "Proof generation, not days of manual review" },
  { icon: "eye-off", value: "0", label: "Personal data exposed when a proof is validated" },
  { icon: "file-check", value: "100%", label: "Verifiable audit trail, anchored on-chain" },
];

export default function Stats() {
  return (
    <Section id="principles">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-card border border-border bg-surface-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {PRINCIPLES.map((p) => (
                <div
                  key={p.label}
                  className="border-b border-border p-6 last:border-b-0 sm:[&:nth-child(-n+2)]:border-b sm:[&:nth-last-child(-n+2)]:border-b-0 sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
                >
                  <Icon name={p.icon} size={22} className="text-accent-violet" />
                  <div className="mt-4 text-h2-mobile font-bold tracking-tight text-text-primary">
                    {p.value}
                  </div>
                  <p className="mt-2 text-label text-text-muted">{p.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
