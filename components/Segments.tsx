import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Icon, { type IconName } from "@/components/ui/Icon";

interface Segment {
  icon: IconName;
  title: string;
  body: string;
}

// Described by function, never by institution type (per positioning rules).
const SEGMENTS: Segment[] = [
  {
    icon: "users",
    title: "Platforms that verify at signup",
    body: "Any regulated platform onboarding users can drop repeated verification and clear people in seconds.",
  },
  {
    icon: "activity",
    title: "Teams with ongoing obligations",
    body: "Compliance teams that must keep watching after onboarding get continuous screening on one source of truth.",
  },
  {
    icon: "network",
    title: "Ecosystems that share users",
    body: "Connected platforms can rely on each other's verifications, turning trust into a shared network effect.",
  },
  {
    icon: "list-check",
    title: "Anyone replacing manual review",
    body: "Swap days of document handling and spreadsheets for an instant, provable, privacy-preserving check.",
  },
];

export default function Segments() {
  return (
    <Section id="segments">
      <Container>
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-label uppercase tracking-wider text-accent-violet">
              Who it&apos;s for
            </p>
            <h2 className="text-h2-mobile font-bold tracking-tight text-text-primary md:text-h2">
              For any platform that onboards users
            </h2>
            <p className="mt-5 text-body-lg-mobile text-text-secondary md:text-body-lg">
              Fortgate fits wherever identity is checked and compliance has to
              hold — defined by what you do, not by a category.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-grid sm:grid-cols-2">
          {SEGMENTS.map((seg, i) => (
            <Reveal key={seg.title} delay={i * 0.08}>
              <article className="flex h-full gap-4 rounded-card border border-border bg-surface-1 p-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] border border-hairline bg-accent-violet/10 text-accent-violet">
                  <Icon name={seg.icon} size={20} />
                </span>
                <div>
                  <h3 className="text-body-lg font-bold text-text-primary">
                    {seg.title}
                  </h3>
                  <p className="mt-1 text-body-lg-mobile text-text-secondary md:text-body-lg">
                    {seg.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
