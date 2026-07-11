import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Icon, { type IconName } from "@/components/ui/Icon";

interface Step {
  step: string;
  icon: IconName;
  title: string;
  body: string;
}

// The Fortgate ID flow, four steps.
const STEPS: Step[] = [
  {
    step: "01",
    icon: "scan",
    title: "Capture",
    body: "The user completes onboarding once — biometrics, signature, document, and data captured in a single flow.",
  },
  {
    step: "02",
    icon: "shield-check",
    title: "Verify",
    body: "The Fortgate ID Engine runs authorization checks, screens against watchlists, and binds a hardware trust signature.",
  },
  {
    step: "03",
    icon: "key",
    title: "Prove",
    body: "The engine generates a zero-knowledge proof and anchors it on-chain — verified, private, and reusable.",
  },
  {
    step: "04",
    icon: "refresh",
    title: "Reuse",
    body: "Any connected platform validates the proof instantly, with no repeated checks and no exposed data.",
  },
];

export default function CaseStudies() {
  return (
    <Section id="how-it-works" className="bg-surface-1">
      <Container>
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-label uppercase tracking-wider text-accent-violet">
              How it works
            </p>
            <h2 className="text-h2-mobile font-bold tracking-tight text-text-primary md:text-h2">
              From onboarding to reusable proof, in four steps
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-grid sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.1}>
              <article className="relative h-full rounded-card border border-border bg-surface-2 p-6">
                {/* Flow connector into the next step (desktop) */}
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute -right-[19px] top-9 z-10 hidden text-text-muted lg:block"
                  >
                    <Icon name="arrow-right" size={18} />
                  </span>
                )}
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-[12px] border border-hairline bg-accent-violet/10 text-accent-violet">
                    <Icon name={step.icon} size={22} />
                  </span>
                  <span className="font-mono text-label text-text-muted">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-5 text-body-lg font-bold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-label text-text-secondary">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
