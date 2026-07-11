import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import HeroVisual from "@/components/HeroVisual";

/**
 * Hero — left-aligned copy column with a filled + outline CTA, paired with a
 * frosted glass panel containing a glowing orb. Ambient glow is a soft blurred
 * accent wash behind the visual (no hard edges). Entrance uses fade-rise.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-12 py-24 lg:grid-cols-2 lg:gap-8 lg:py-40">
          {/* Left: copy */}
          <div className="relative z-10 min-w-0 max-w-xl">
            <h1
              className="text-h1-mobile font-bold leading-[1.05] tracking-tight text-text-primary md:text-h1 animate-fade-rise"
              style={{ animationDelay: "0s" }}
            >
              Verify once. Prove compliance everywhere.
            </h1>

            <p
              className="mt-6 max-w-lg text-body-lg-mobile text-text-secondary md:text-body-lg animate-fade-rise"
              style={{ animationDelay: "0.08s" }}
            >
              Fortgate is the integrated identity and compliance layer for
              regulated platforms. Verify a user a single time, then let that
              verified identity travel securely across every product — without
              repeating the process or exposing the underlying data.
            </p>

            <div
              className="mt-9 flex flex-col gap-3 sm:flex-row animate-fade-rise"
              style={{ animationDelay: "0.16s" }}
            >
              <Button href="#" variant="filled" size="md" className="w-full sm:w-auto">
                Request access
              </Button>
              <Button href="#how-it-works" variant="outline" size="md" className="w-full sm:w-auto">
                See how it works
              </Button>
            </div>
          </div>

          {/* Right: product diagram — verify once, reuse everywhere */}
          <div
            className="relative flex min-w-0 items-center justify-center animate-fade-rise"
            style={{ animationDelay: "0.24s" }}
          >
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
