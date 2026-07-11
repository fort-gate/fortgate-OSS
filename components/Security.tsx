import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Icon, { type IconName } from "@/components/ui/Icon";

interface Posture {
  icon: IconName;
  title: string;
  body: string;
}

const POSTURE: Posture[] = [
  {
    icon: "lock",
    title: "Encrypted end to end",
    body: "Data is encrypted in transit and at rest. Verification material is processed in isolated, access-controlled environments.",
  },
  {
    icon: "eye-off",
    title: "You keep the data",
    body: "Personal data stays under your control. Only zero-knowledge proofs are shared — never the underlying documents.",
  },
  {
    icon: "key",
    title: "Granular access & keys",
    body: "Scoped credentials, per-platform keys, and full revocation. Every access is logged and attributable.",
  },
  {
    icon: "file-check",
    title: "Tamper-evident by design",
    body: "Each check and decision is anchored to an immutable trail, so integrity is provable — not just asserted.",
  },
];

interface Standard {
  label: string;
  status: string;
  tone: "aligned" | "progress" | "planned";
}

// Honest pre-launch posture — status, not certificates we don't hold yet.
const STANDARDS: Standard[] = [
  { label: "SOC 2 Type II", status: "In progress", tone: "progress" },
  { label: "ISO 27001", status: "Planned", tone: "planned" },
  { label: "GDPR", status: "Aligned by design", tone: "aligned" },
  { label: "eIDAS 2.0", status: "Aligned", tone: "aligned" },
  { label: "W3C Verifiable Credentials", status: "Supported", tone: "aligned" },
];

const TONE_DOT: Record<Standard["tone"], string> = {
  aligned: "bg-accent-blue",
  progress: "bg-accent-violet",
  planned: "bg-text-muted",
};

export default function Security() {
  return (
    <Section id="security">
      <Container>
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-label uppercase tracking-wider text-accent-violet">
              Security &amp; compliance
            </p>
            <h2 className="text-h2-mobile font-bold tracking-tight text-text-primary md:text-h2">
              Built to satisfy your risk team
            </h2>
            <p className="mt-5 text-body-lg-mobile text-text-secondary md:text-body-lg">
              Security is the product, not a feature. Here is how Fortgate
              handles data, access, and integrity — and where we stand on the
              standards your auditors will ask about.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-grid sm:grid-cols-2">
          {POSTURE.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className="flex h-full gap-4 rounded-card border border-border bg-surface-1 p-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] border border-hairline bg-accent-violet/10 text-accent-violet">
                  <Icon name={item.icon} size={20} />
                </span>
                <div>
                  <h3 className="text-body-lg font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-body-lg-mobile text-text-secondary md:text-body-lg">
                    {item.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Compliance posture */}
        <Reveal delay={0.1}>
          <div className="mt-grid rounded-card border border-border bg-surface-1 p-6">
            <p className="mb-4 text-label uppercase tracking-wider text-text-muted">
              Compliance posture
            </p>
            <ul className="flex flex-wrap gap-3">
              {STANDARDS.map((s) => (
                <li
                  key={s.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3.5 py-2"
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${TONE_DOT[s.tone]}`} />
                  <span className="text-label font-medium text-text-primary">
                    {s.label}
                  </span>
                  <span className="text-label text-text-muted">· {s.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
