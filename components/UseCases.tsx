import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

interface UseCase {
  title: string;
  description: string;
}

// Placeholder use cases — replace copy and swap the visual for real assets.
const USE_CASES: UseCase[] = [
  { title: "Placeholder use case", description: "One line describing this use case." },
  { title: "Placeholder use case", description: "One line describing this use case." },
  { title: "Placeholder use case", description: "One line describing this use case." },
  { title: "Placeholder use case", description: "One line describing this use case." },
  { title: "Placeholder use case", description: "One line describing this use case." },
  { title: "Placeholder use case", description: "One line describing this use case." },
];

function CardVisual() {
  return (
    <div className="mb-5 aspect-[16/10] w-full rounded-[14px] border border-border bg-gradient-to-br from-accent-violet/20 to-accent-blue/10">
      <div className="grid h-full place-items-center">
        <span className="text-label text-text-muted">Visual placeholder</span>
      </div>
    </div>
  );
}

export default function UseCases() {
  return (
    <Section id="use-cases">
      <Container>
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-label uppercase tracking-wider text-accent-violet">
              Placeholder eyebrow
            </p>
            <h2 className="text-h2-mobile font-bold tracking-tight text-text-primary md:text-h2">
              Placeholder section heading for use cases
            </h2>
          </div>
        </Reveal>

        {/* Bento: 1 col mobile / 2 tablet / 3 desktop, 24px gap */}
        <div className="grid grid-cols-1 gap-grid sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className="h-full rounded-card border border-border bg-card-surface p-card transition-transform duration-[0.6s] ease-smooth hover:-translate-y-1">
                <CardVisual />
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
