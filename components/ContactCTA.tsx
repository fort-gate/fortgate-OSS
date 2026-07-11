import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Icon, { type IconName } from "@/components/ui/Icon";

const EXPECT: { icon: IconName; text: string }[] = [
  { icon: "activity", text: "A 30-minute technical walkthrough" },
  { icon: "shield-check", text: "Security & compliance Q&A with our team" },
  { icon: "plug", text: "Sandbox access and test identities" },
];

export default function ContactCTA() {
  return (
    <Section id="contact">
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 items-center gap-10 rounded-card border border-border bg-surface-1 p-8 lg:grid-cols-2 lg:p-12">
            <div>
              <p className="mb-3 text-label uppercase tracking-wider text-accent-violet">
                Talk to us
              </p>
              <h2 className="text-h2-mobile font-bold tracking-tight text-text-primary md:text-h2">
                Bring your hardest compliance questions
              </h2>
              <p className="mt-4 max-w-md text-body-lg-mobile text-text-secondary md:text-body-lg">
                We work with regulated platforms, not a self-serve funnel. Book a
                call and we&apos;ll walk through architecture, data handling, and
                how Fortgate fits your obligations.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#" variant="filled" size="lg" className="w-full sm:w-auto">
                  Book a call
                </Button>
                <Button href="#" variant="outline" size="lg" className="w-full sm:w-auto">
                  Request access
                </Button>
              </div>
            </div>

            <div className="rounded-card border border-border bg-surface-2 p-6">
              <p className="text-label uppercase tracking-wider text-text-muted">
                What to expect
              </p>
              <ul className="mt-5 space-y-4">
                {EXPECT.map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] border border-hairline bg-accent-violet/10 text-accent-violet">
                      <Icon name={item.icon} size={18} />
                    </span>
                    <span className="text-body-lg-mobile text-text-secondary md:text-body-lg">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
