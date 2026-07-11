import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

interface Feature {
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    title: "Screen in real time",
    description:
      "Continuously match identities against sanctions, PEP, and watchlists — updated as the lists change, not once a year.",
  },
  {
    title: "Monitor after onboarding",
    description:
      "Risk does not end at sign-up. Fortgate AML watches for changes in status and behavior across the full lifecycle.",
  },
  { title: "Placeholder feature", description: "Short description of this developer-facing feature." },
  { title: "Placeholder feature", description: "Short description of this developer-facing feature." },
];

function FeatureBlock({ feature, index }: { feature: Feature; index: number }) {
  return (
    <div className="flex gap-4 border-t border-border pt-6">
      <span className="text-label font-bold text-accent-violet">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h3 className="text-body-lg font-bold text-text-primary">
          {feature.title}
        </h3>
        <p className="mt-1 text-body-lg-mobile text-text-muted md:text-body-lg">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export default function DevSection() {
  return (
    <Section id="fortgate-aml">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: feature list */}
          <Reveal>
            <div>
              <p className="mb-3 text-label uppercase tracking-wider text-accent-violet">
                Fortgate AML
              </p>
              <h2 className="mb-5 text-h2-mobile font-bold tracking-tight text-text-primary md:text-h2">
                Compliance that never stops watching
              </h2>
              <p className="mb-8 text-body-lg-mobile text-text-muted md:text-body-lg">
                Fortgate AML extends the same engine from onboarding into
                ongoing protection. It catches risk continuously — not just at
                sign-up — and works on the identity you already verified, so
                screening and monitoring share one source of truth.
              </p>
              <div className="space-y-6">
                {FEATURES.map((feature, i) => (
                  <FeatureBlock key={i} feature={feature} index={i} />
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: product visual */}
          <Reveal delay={0.1}>
            <div className="rounded-card border border-border bg-card-surface p-2">
              <div className="aspect-[4/3] w-full rounded-[14px] bg-gradient-to-br from-accent-violet/20 to-accent-blue/10">
                <div className="grid h-full place-items-center">
                  <span className="text-label text-text-muted">
                    Product visual placeholder
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
