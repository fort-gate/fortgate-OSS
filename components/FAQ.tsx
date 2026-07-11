"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";

interface QA {
  q: string;
  a: string;
}

const FAQS: QA[] = [
  {
    q: "Is any personal data stored on-chain?",
    a: "No. Documents, biometrics, and personal fields are held off-chain under your control. Only a zero-knowledge proof and its status (issued, expiry, revocation) are anchored on-chain — never the underlying data.",
  },
  {
    q: "How does the right to be forgotten work with an immutable ledger?",
    a: "Because no personal data is written on-chain, erasure requests act on the off-chain record, which is deletable. The on-chain proof carries no PII and can be revoked, so nothing identifiable persists.",
  },
  {
    q: "Where is data processed and stored?",
    a: "Verification material is processed in isolated, access-controlled environments, with data residency configurable by region so you can meet local requirements.",
  },
  {
    q: "Who is the data controller?",
    a: "You remain the controller of your users' data. Fortgate acts as a processor operating on proofs and the material you authorize, under a data processing agreement.",
  },
  {
    q: "What happens when a watchlist or sanctions list changes?",
    a: "Screening is continuous. When a list changes, affected identities are re-evaluated and your team receives a prioritized alert — risk is not frozen at onboarding.",
  },
  {
    q: "Can we validate proofs independently?",
    a: "Yes. Any connected platform can verify a proof on its own, without calling back to a single party, which is what lets institutions rely on each other's verifications.",
  },
];

function Item({ item }: { item: QA }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-none"
      >
        <span className="text-body-lg font-medium text-text-primary">
          {item.q}
        </span>
        <span className="shrink-0 text-text-muted">
          <Icon name={open ? "minus" : "plus"} size={20} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-5 text-body-lg-mobile text-text-muted md:text-body-lg">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <Section id="faq" className="bg-surface-1">
      <Container>
        <Reveal>
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-label uppercase tracking-wider text-accent-violet">
              FAQ
            </p>
            <h2 className="text-h2-mobile font-bold tracking-tight text-text-primary md:text-h2">
              The questions your auditors will ask
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="border-t border-border">
            {FAQS.map((item) => (
              <Item key={item.q} item={item} />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
