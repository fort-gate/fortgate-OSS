import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Icon, { type IconName } from "@/components/ui/Icon";

interface Row {
  icon: IconName;
  text: string;
}

const OFF_CHAIN: Row[] = [
  { icon: "scan", text: "Identity documents" },
  { icon: "fingerprint", text: "Biometrics & signature" },
  { icon: "eye-off", text: "Personal data fields" },
];

const ON_CHAIN: Row[] = [
  { icon: "file-check", text: "Zero-knowledge proof" },
  { icon: "check", text: "Issued & expiry status" },
  { icon: "refresh", text: "Revocation status" },
];

function Panel({
  kicker,
  title,
  rows,
  tone,
}: {
  kicker: string;
  title: string;
  rows: Row[];
  tone: "off" | "on";
}) {
  return (
    <div className="w-full rounded-card border border-border bg-surface-1 p-6">
      <p className="text-label uppercase tracking-wider text-text-muted">{kicker}</p>
      <h3 className="mt-1 text-body-lg font-bold text-text-primary">{title}</h3>
      <ul className="mt-5 space-y-3">
        {rows.map((row) => (
          <li key={row.text} className="flex items-center gap-3">
            <span
              className={`grid h-8 w-8 shrink-0 place-items-center rounded-[9px] border border-hairline ${
                tone === "on"
                  ? "bg-accent-blue/10 text-accent-blue"
                  : "bg-card-surface text-text-muted"
              }`}
            >
              <Icon name={row.icon} size={16} />
            </span>
            <span className="text-body-lg-mobile text-text-secondary md:text-body-lg">
              {row.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PrivacyModel() {
  return (
    <Section id="privacy" className="bg-surface-1">
      <Container>
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-label uppercase tracking-wider text-accent-violet">
              Privacy model
            </p>
            <h2 className="text-h2-mobile font-bold tracking-tight text-text-primary md:text-h2">
              Private by construction — even on-chain
            </h2>
            <p className="mt-5 text-body-lg-mobile text-text-secondary md:text-body-lg">
              A fair question: if proofs are anchored on-chain, what about
              privacy? Only a cryptographic proof is ever written on-chain. The
              documents, biometrics, and personal data never are.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
            <Panel
              kicker="Off-chain — stays with you"
              title="Never leaves your control"
              rows={OFF_CHAIN}
              tone="off"
            />

            {/* Connector: only the proof crosses */}
            <div className="flex flex-col items-center gap-2 py-2 lg:px-2">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-hairline bg-surface-2 text-accent-violet">
                <Icon name="lock" size={20} />
              </span>
              <span className="text-center text-label text-text-muted">
                Only the proof
                <br className="hidden lg:block" /> crosses
              </span>
              <Icon
                name="arrow-right"
                size={18}
                className="rotate-90 text-text-muted/60 lg:rotate-0"
              />
            </div>

            <Panel
              kicker="On-chain — public & verifiable"
              title="Anyone can check, no one can read"
              rows={ON_CHAIN}
              tone="on"
            />
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-8 text-center text-label text-text-muted">
            No document, image, or personal field is ever written on-chain.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
