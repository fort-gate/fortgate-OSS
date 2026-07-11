import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Icon, { type IconName } from "@/components/ui/Icon";

interface UseCase {
  icon: IconName;
  title: string;
  description: string;
}

const USE_CASES: UseCase[] = [
  {
    icon: "refresh",
    title: "Verify once, reuse forever",
    description:
      "A completed verification becomes a portable proof. Users skip the process on every new platform that trusts Fortgate.",
  },
  {
    icon: "eye-off",
    title: "Prove without exposing",
    description:
      "A zero-knowledge proof confirms a user is verified and cleared — without revealing the underlying documents or personal data.",
  },
  {
    icon: "fingerprint",
    title: "Identity you can trust",
    description:
      "Biometrics, digital signature, and document capture bind the proof to a real, present person — not a stolen file.",
  },
  {
    icon: "list-check",
    title: "Cleared at the source",
    description:
      "Every identity is screened against sanctions, PEP, and watchlists before a proof is ever issued.",
  },
  {
    icon: "network",
    title: "Trust that travels",
    description:
      "Any connected platform can validate a proof independently, enabling institutions to rely on each other's verifications.",
  },
  {
    icon: "file-check",
    title: "Provable on demand",
    description:
      "Each proof is anchored on-chain, giving compliance teams a tamper-evident, verifiable record for any audit.",
  },
];

function IconChip({ name }: { name: IconName }) {
  return (
    <span className="mb-5 grid h-11 w-11 place-items-center rounded-[12px] border border-hairline bg-accent-violet/10 text-accent-violet">
      <Icon name={name} size={22} />
    </span>
  );
}

export default function UseCases() {
  return (
    <Section id="fortgate-id">
      <Container>
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-label uppercase tracking-wider text-accent-violet">
              Fortgate ID
            </p>
            <h2 className="text-h2-mobile font-bold tracking-tight text-text-primary md:text-h2">
              One verification, reusable across every platform
            </h2>
            <p className="mt-5 text-body-lg-mobile text-text-muted md:text-body-lg">
              Fortgate ID turns a completed identity check into a reusable,
              privacy-preserving proof. It ends repeated verification and lets
              platforms trust each other — here is what it does and how.
            </p>
          </div>
        </Reveal>

        {/* Bento: 1 col mobile / 2 tablet / 3 desktop, 24px gap */}
        <div className="grid grid-cols-1 gap-grid sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className="h-full rounded-card border border-border bg-surface-1 p-card transition-colors duration-300 ease-smooth hover:border-hairline">
                <IconChip name={item.icon} />
                <h3 className="text-body-lg font-bold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-body-lg-mobile text-text-muted md:text-body-lg">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
