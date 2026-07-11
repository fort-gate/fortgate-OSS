import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

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
          <div className="relative z-10 max-w-xl">
            <h1
              className="text-h1-mobile font-bold tracking-tight text-text-primary md:text-h1 animate-fade-rise"
              style={{ animationDelay: "0s" }}
            >
              Verify once. Prove compliance everywhere.
            </h1>

            <p
              className="mt-6 max-w-lg text-body-lg-mobile text-text-muted md:text-body-lg animate-fade-rise"
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
                Start building
              </Button>
              <Button href="#" variant="outline" size="md" className="w-full sm:w-auto">
                Explore the platform
              </Button>
            </div>
          </div>

          {/* Right: glass panel with glowing orb */}
          <div
            className="relative flex items-center justify-center animate-fade-rise"
            style={{ animationDelay: "0.24s" }}
          >
            {/* Ambient glow behind the panel — soft, even, violet-tinted */}
            <div
              aria-hidden
              className="pointer-events-none absolute h-[112%] w-[112%] rounded-full bg-accent-violet/[0.09] blur-[100px]"
            />

            <div className="relative aspect-square w-full max-w-[440px]">
              {/* Frosted glass panel — uniformly lighter than background */}
              <div className="absolute inset-0 overflow-hidden rounded-[32px] border border-text-primary/10 bg-gradient-to-br from-text-primary/[0.22] via-text-primary/[0.15] to-text-primary/[0.11] shadow-[0_20px_70px_-30px] shadow-accent-violet/20 backdrop-blur-xl">
                {/* Inner top-left highlight */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-br from-text-primary/[0.06] to-transparent"
                />

                {/* Glowing orb — stacked blurred accent layers, white core */}
                <div className="absolute inset-0 grid place-items-center">
                  <span className="absolute h-4/5 w-4/5 rounded-full bg-accent-violet/25 blur-[70px]" />
                  <span className="absolute h-44 w-44 rounded-full bg-accent-violet/45 blur-[50px]" />
                  <span className="absolute h-24 w-24 rounded-full bg-accent-violet/70 blur-[28px]" />
                  <span className="absolute h-10 w-10 rounded-full bg-accent-violet blur-[12px]" />
                  <span className="relative h-4 w-4 rounded-full bg-text-primary shadow-[0_0_20px] shadow-text-primary/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
