"use client";

import CountUp from "react-countup";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}

// Pre-launch: capability-framed metrics, not traction numbers (none exist yet).
const STATS: Stat[] = [
  { value: 1, suffix: "×", label: "Verify once, reuse across every connected platform" },
  { value: 5, prefix: "<", suffix: "s", label: "Proof generation, not days of manual review" },
  { value: 0, label: "Personal data exposed when a proof is validated" },
  { value: 100, suffix: "%", label: "Verifiable audit trail, anchored on-chain" },
];

function StatItem({ stat }: { stat: Stat }) {
  return (
    <div className="text-center">
      <div className="text-h2-mobile font-bold tracking-tight text-text-primary md:text-h2">
        {stat.prefix}
        <CountUp
          end={stat.value}
          decimals={stat.decimals ?? 0}
          duration={2}
          enableScrollSpy
          scrollSpyOnce
        />
        {stat.suffix}
      </div>
      <p className="mt-2 text-label text-text-muted">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <Section id="stats">
      <Container>
        {/* 2 col mobile / 4 col desktop, 24px gap */}
        <div className="grid grid-cols-2 gap-grid lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <StatItem stat={stat} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
