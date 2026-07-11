import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Icon, { type IconName } from "@/components/ui/Icon";

interface Point {
  icon: IconName;
  title: string;
  body: string;
}

const POINTS: Point[] = [
  {
    icon: "code",
    title: "REST API + typed SDKs",
    body: "Verify a proof in a single call. First-class SDKs, predictable errors, and versioned endpoints.",
  },
  {
    icon: "bell",
    title: "Webhooks for status changes",
    body: "Subscribe to verification, screening, and revocation events — react the moment risk changes.",
  },
  {
    icon: "plug",
    title: "Sandbox & test identities",
    body: "A full sandbox with synthetic identities and proofs, so you integrate before you ever touch real data.",
  },
];

function CodeCard() {
  return (
    <div className="overflow-hidden rounded-card border border-border bg-surface-2 font-mono text-[13px] leading-relaxed">
      <div className="flex items-center gap-2 border-b border-border bg-surface-3 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-text-muted/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-text-muted/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-text-muted/40" />
        <span className="ml-2 text-label text-text-muted">verify-proof.sh</span>
      </div>
      <pre className="overflow-x-auto p-5 text-text-secondary">
        <code>
          <span className="text-accent-violet">POST</span> /v1/proofs/verify{"\n"}
          <span className="text-text-muted">Authorization:</span> Bearer sk_live_…{"\n"}
          {"\n"}
          {"{"} <span className="text-accent-blue">&quot;proof&quot;</span>:{" "}
          <span className="text-text-primary">&quot;zk:0x7f3a…c21e&quot;</span> {"}"}
          {"\n\n"}
          <span className="text-text-muted"># → 200 OK</span>
          {"\n"}
          {"{"}{"\n"}
          {"  "}
          <span className="text-accent-blue">&quot;verified&quot;</span>:{" "}
          <span className="text-accent-violet">true</span>,{"\n"}
          {"  "}
          <span className="text-accent-blue">&quot;cleared&quot;</span>:{" "}
          <span className="text-accent-violet">true</span>,{"\n"}
          {"  "}
          <span className="text-accent-blue">&quot;expires&quot;</span>:{" "}
          <span className="text-text-primary">&quot;2027-01-01&quot;</span>,{"\n"}
          {"  "}
          <span className="text-accent-blue">&quot;pii&quot;</span>:{" "}
          <span className="text-text-primary">null</span>{"\n"}
          {"}"}
        </code>
      </pre>
    </div>
  );
}

export default function Developers() {
  return (
    <Section id="developers">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <p className="mb-3 text-label uppercase tracking-wider text-accent-violet">
                Developers
              </p>
              <h2 className="mb-5 text-h2-mobile font-bold tracking-tight text-text-primary md:text-h2">
                Integrate in an afternoon, not a quarter
              </h2>
              <p className="mb-8 text-body-lg-mobile text-text-secondary md:text-body-lg">
                One endpoint to verify a proof, no PII to store, and a sandbox to
                build against. The heavy lifting stays on our side of the API.
              </p>
              <div className="space-y-6">
                {POINTS.map((p) => (
                  <div key={p.title} className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] border border-hairline bg-accent-violet/10 text-accent-violet">
                      <Icon name={p.icon} size={20} />
                    </span>
                    <div>
                      <h3 className="text-body-lg font-bold text-text-primary">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-body-lg-mobile text-text-muted md:text-body-lg">
                        {p.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <CodeCard />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
