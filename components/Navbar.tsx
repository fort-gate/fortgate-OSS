"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import logoWordmark from "@/public/brand/logo-wordmark.png";

interface MenuLink {
  label: string;
  description: string;
  href: string;
}

interface MenuColumn {
  heading: string;
  links: MenuLink[];
}

interface NavItem {
  label: string;
  columns: MenuColumn[];
}

// Products is the only mega-menu; the rest are simple links (spec IA order).
const NAV_ITEMS: NavItem[] = [
  {
    label: "Products",
    columns: [
      {
        heading: "Products",
        links: [
          {
            label: "Fortgate ID",
            description: "Reusable, privacy-preserving identity verification.",
            href: "#fortgate-id",
          },
          {
            label: "Fortgate AML",
            description: "Continuous screening and monitoring after onboarding.",
            href: "#fortgate-aml",
          },
        ],
      },
    ],
  },
];

const SIMPLE_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Developers", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Resources", href: "#" },
];

function Logo() {
  return (
    <a href="#" className="flex items-center" aria-label="Fortgate — home">
      <Image
        src={logoWordmark}
        alt="Fortgate"
        priority
        className="h-7 w-auto md:h-8"
      />
    </a>
  );
}

function MegaMenu({ columns }: { columns: MenuColumn[] }) {
  return (
    <div
      className={`grid gap-8 ${columns.length > 1 ? "sm:grid-cols-2" : ""}`}
      style={{ minWidth: columns.length > 1 ? 420 : 280 }}
    >
      {columns.map((col) => (
        <div key={col.heading}>
          <p className="mb-3 text-label font-medium uppercase tracking-wider text-text-muted">
            {col.heading}
          </p>
          <ul className="space-y-3">
            {col.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block rounded-lg p-2 transition-colors duration-200 ease-smooth hover:bg-card-surface"
                >
                  <span className="block text-label font-medium text-text-primary">
                    {link.label}
                  </span>
                  <span className="block text-label text-text-muted">
                    {link.description}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between gap-4">
          <Logo />

          {/* Desktop center nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDesktop(item.label)}
                onMouseLeave={() => setOpenDesktop(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-label text-text-muted transition-colors duration-200 ease-smooth hover:text-text-primary"
                  aria-expanded={openDesktop === item.label}
                >
                  {item.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden className="opacity-60">
                    <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openDesktop === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                    >
                      <div className="rounded-card border border-border bg-card-surface p-6 shadow-2xl backdrop-blur-xl">
                        <MegaMenu columns={item.columns} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
            {SIMPLE_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-label text-text-muted transition-colors duration-200 ease-smooth hover:text-text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button href="#" variant="outline" size="md">
              Log in
            </Button>
            <Button href="#" variant="filled" size="md">
              Get started
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-border lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-text-primary transition-transform duration-300 ease-smooth ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-text-primary transition-opacity duration-300 ease-smooth ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-text-primary transition-transform duration-300 ease-smooth ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </nav>
      </Container>

      {/* Mobile panel with accordion */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border lg:hidden"
          >
            <Container>
              <div className="space-y-1 py-4">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label} className="border-b border-border">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-3 text-body-lg-mobile font-medium text-text-primary"
                      onClick={() =>
                        setOpenAccordion((v) => (v === item.label ? null : item.label))
                      }
                      aria-expanded={openAccordion === item.label}
                    >
                      {item.label}
                      <svg
                        width="16" height="16" viewBox="0 0 12 12" aria-hidden
                        className={`transition-transform duration-300 ease-smooth ${openAccordion === item.label ? "rotate-180" : ""}`}
                      >
                        <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {openAccordion === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <ul className="space-y-1 pb-3 pl-2">
                            {item.columns.flatMap((c) => c.links).map((link, i) => (
                              <li key={`${link.label}-${i}`}>
                                <a
                                  href={link.href}
                                  className="block py-2 text-label text-text-muted transition-colors hover:text-text-primary"
                                >
                                  {link.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                {SIMPLE_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block border-b border-border py-3 text-body-lg-mobile font-medium text-text-primary"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex flex-col gap-3 pt-4">
                  <Button href="#" variant="outline" size="lg" className="w-full">
                    Log in
                  </Button>
                  <Button href="#" variant="filled" size="lg" className="w-full">
                    Get started
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
