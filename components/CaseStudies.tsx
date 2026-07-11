import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

interface CaseStudy {
  title: string;
  category: string;
  href: string;
}

// Placeholder case studies — replace titles and imagery with real assets.
const CASE_STUDIES: CaseStudy[] = [
  { title: "Placeholder case study title", category: "Placeholder", href: "#" },
  { title: "Placeholder case study title", category: "Placeholder", href: "#" },
  { title: "Placeholder case study title", category: "Placeholder", href: "#" },
  { title: "Placeholder case study title", category: "Placeholder", href: "#" },
];

export default function CaseStudies() {
  return (
    <Section id="case-studies">
      <Container>
        <Reveal>
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-label uppercase tracking-wider text-accent-violet">
                Placeholder eyebrow
              </p>
              <h2 className="text-h2-mobile font-bold tracking-tight text-text-primary md:text-h2">
                Placeholder case studies heading
              </h2>
            </div>
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-label font-medium text-text-primary"
            >
              All case studies
              <svg
                width="14" height="14" viewBox="0 0 14 14" aria-hidden
                className="transition-transform duration-300 ease-smooth group-hover:translate-x-1"
              >
                <path d="M3 7h8M7 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Reveal>

        {/* 1 col mobile / 2 tablet / 4 desktop, 24px gap */}
        <div className="grid grid-cols-1 gap-grid sm:grid-cols-2 lg:grid-cols-4">
          {CASE_STUDIES.map((study, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <a
                href={study.href}
                className="group block overflow-hidden rounded-card border border-border bg-card-surface"
              >
                {/* Tall image with title overlaid */}
                <div className="relative aspect-[3/4] w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/25 to-accent-blue/10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-between p-5">
                    <span className="w-fit rounded-full border border-border bg-background/40 px-3 py-1 text-label text-text-muted backdrop-blur-sm">
                      {study.category}
                    </span>
                    <h3 className="text-body-lg font-bold leading-tight text-text-primary">
                      {study.title}
                    </h3>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
