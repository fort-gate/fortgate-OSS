import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

/**
 * Hero — two-line H1, Body Large subcopy, filled + outline CTAs, and a radial
 * glow visual behind. Entrance uses the fade-rise keyframe (staggered by delay).
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Radial glow background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-hero-glow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />

      <Container className="relative">
        <div className="flex flex-col items-center py-24 text-center md:py-40">
          <span
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card-surface px-4 py-1.5 text-label text-text-muted animate-fade-rise"
            style={{ animationDelay: "0s" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-violet" />
            Placeholder announcement badge
          </span>

          <h1
            className="max-w-3xl text-h1-mobile font-bold tracking-tight text-text-primary md:text-h1 animate-fade-rise"
            style={{ animationDelay: "0.08s" }}
          >
            Placeholder headline that
            <br />
            spans two clean lines
          </h1>

          <p
            className="mt-6 max-w-xl text-body-lg-mobile text-text-muted md:text-body-lg animate-fade-rise"
            style={{ animationDelay: "0.16s" }}
          >
            Placeholder subcopy goes here. One or two sentences describing the
            product value proposition. Replace with final copy.
          </p>

          <div
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row animate-fade-rise"
            style={{ animationDelay: "0.24s" }}
          >
            <Button href="#" variant="filled" size="lg" className="w-full sm:w-auto">
              Get started
            </Button>
            <Button href="#" variant="outline" size="lg" className="w-full sm:w-auto">
              Book a demo
            </Button>
          </div>

          {/* Product visual placeholder */}
          <div
            className="mt-16 w-full max-w-4xl animate-fade-rise"
            style={{ animationDelay: "0.32s" }}
          >
            <div className="aspect-[16/9] w-full rounded-card border border-border bg-card-surface backdrop-blur-sm">
              <div className="grid h-full place-items-center">
                <span className="text-label text-text-muted">
                  Product visual placeholder
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
