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
  {
    title: "Score, flag, act",
    description:
      "Every profile carries a live risk score. Analysts get prioritized alerts instead of noise, so teams act on what matters.",
  },
  {
    title: "One record, ready for audit",
    description:
      "Identity and AML share a single, tamper-evident trail — every check, score, and decision provable on demand.",
  },
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

// Placeholder alert feed for the product mock — illustrative only.
const ALERTS: { level: "high" | "med" | "low"; title: string; meta: string }[] = [
  { level: "high", title: "Watchlist match — new sanctions entry", meta: "2m ago · score +38" },
  { level: "med", title: "Behavior change flagged for review", meta: "17m ago · score +12" },
  { level: "low", title: "PEP status refreshed — no change", meta: "1h ago · cleared" },
];

const LEVEL_DOT: Record<"high" | "med" | "low", string> = {
  high: "bg-accent-violet",
  med: "bg-accent-blue",
  low: "bg-text-muted",
};

/** Illustrative dashboard: a live risk score and a prioritized alert feed. */
function RiskDashboardMock() {
  return (
    <div className="rounded-card border border-border bg-card-surface p-2">
      <div className="rounded-[14px] bg-gradient-to-br from-accent-violet/10 to-accent-blue/5 p-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="text-label font-medium text-text-primary">
            Risk overview
          </span>
          <span className="inline-flex items-center gap-2 text-label text-text-muted">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-violet" />
            Live
          </span>
        </div>

        {/* Risk score */}
        <div className="mt-5 rounded-[12px] border border-border bg-background/40 p-4">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-h2-mobile font-bold leading-none text-text-primary">
                72<span className="text-body-lg text-text-muted">/100</span>
              </div>
              <p className="mt-1 text-label text-text-muted">Elevated risk</p>
            </div>
            <span className="rounded-full border border-border px-3 py-1 text-label text-accent-violet">
              Review
            </span>
          </div>
          <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-text-primary/10">
            <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-accent-blue to-accent-violet" />
          </div>
        </div>

        {/* Alert feed */}
        <div className="mt-4 space-y-2">
          {ALERTS.map((alert) => (
            <div
              key={alert.title}
              className="flex items-start gap-3 rounded-[12px] border border-border bg-background/30 p-3"
            >
              <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${LEVEL_DOT[alert.level]}`} />
              <div className="min-w-0">
                <p className="truncate text-label font-medium text-text-primary">
                  {alert.title}
                </p>
                <p className="text-label text-text-muted">{alert.meta}</p>
              </div>
            </div>
          ))}
        </div>
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

          {/* Right: product visual — risk score + alert feed mock */}
          <Reveal delay={0.1}>
            <RiskDashboardMock />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
