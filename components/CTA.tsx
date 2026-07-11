import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

/**
 * Full-width closing CTA over a subtle violet→blue gradient wash.
 */
export default function CTA() {
  return (
    <Section id="cta">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-card border border-border bg-surface-1 px-6 py-16 text-center md:px-12 md:py-24">
            {/* Restrained accent — a soft glow at the top edge, not a full wash */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(60%_100%_at_50%_0%,rgb(var(--color-accent-violet-rgb)/0.16),transparent)]"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-h2-mobile font-bold tracking-tight text-text-primary md:text-h2">
                One layer for identity and compliance. Built to be reused.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-body-lg-mobile text-text-muted md:text-body-lg">
                Verify users once, screen them continuously, and prove it all on
                demand.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="#" variant="filled" size="lg" className="w-full sm:w-auto">
                  Request access
                </Button>
                <Button href="#" variant="outline" size="lg" className="w-full sm:w-auto">
                  Talk to us
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
