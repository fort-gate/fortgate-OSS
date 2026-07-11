import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

interface Step {
  step: string;
  title: string;
  body: string;
}

// Repurposed from the case-studies grid: the Fortgate ID flow, four steps.
const STEPS: Step[] = [
  {
    step: "01",
    title: "Capture",
    body: "The user completes onboarding once — biometrics, signature, document, and data captured in a single flow.",
  },
  {
    step: "02",
    title: "Verify",
    body: "The Fortgate ID Engine runs authorization checks, screens against watchlists, and binds a hardware trust signature.",
  },
  {
    step: "03",
    title: "Prove",
    body: "The engine generates a zero-knowledge proof and anchors it on-chain — verified, private, and reusable.",
  },
  {
    step: "04",
    title: "Reuse",
    body: "Any connected platform validates the proof instantly, with no repeated checks and no exposed data.",
  },
];

export default function CaseStudies() {
  return (
    <Section id="how-it-works">
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

        {/* 1 col mobile / 2 tablet / 4 desktop, 24px gap */}
        <div className="grid grid-cols-1 gap-grid sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.1}>
              <article className="relative flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-card border border-border bg-card-surface p-6">
                {/* Tinted gradient wash */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-violet/20 to-accent-blue/5"
                />
                <span className="relative text-h2-mobile font-bold leading-none text-accent-violet/70">
                  {step.step}
                </span>
                <div className="relative">
                  <h3 className="text-body-lg font-bold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-label text-text-muted">{step.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
