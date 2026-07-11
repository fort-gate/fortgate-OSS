import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Icon, { type IconName } from "@/components/ui/Icon";

const STANDARDS: { icon: IconName; label: string }[] = [
  { icon: "key", label: "OpenID Connect" },
  { icon: "file-check", label: "W3C Verifiable Credentials" },
  { icon: "network", label: "Decentralized Identifiers" },
  { icon: "scan", label: "ISO/IEC 18013 mDL" },
  { icon: "shield-check", label: "NIST SP 800-63" },
];

/** Interoperability band — open protocols, not a proprietary black box. */
export default function Standards() {
  return (
    <Section id="standards" className="bg-surface-1">
      <Container>
        <Reveal>
          <div className="mx-auto mb-8 max-w-xl text-center">
            <p className="mb-3 text-label uppercase tracking-wider text-accent-violet">
              Open by design
            </p>
            <h2 className="text-h2-mobile font-bold tracking-tight text-text-primary md:text-h2">
              Built on open standards, not a black box
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <ul className="flex flex-wrap items-center justify-center gap-3">
            {STANDARDS.map((s) => (
              <li
                key={s.label}
                className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface-2 px-4 py-2.5"
              >
                <Icon name={s.icon} size={17} className="text-text-muted" />
                <span className="text-label font-medium text-text-primary">
                  {s.label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
