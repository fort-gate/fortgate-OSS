import Image from "next/image";
import Container from "@/components/ui/Container";
import logoWordmark from "@/public/brand/logo-wordmark.png";

interface FooterColumn {
  heading: string;
  links: string[];
}

const COLUMNS: FooterColumn[] = [
  { heading: "Products", links: ["Fortgate ID", "Fortgate AML", "How it works", "Pricing"] },
  { heading: "Solutions", links: ["Reusable identity", "Continuous AML", "Audit readiness"] },
  { heading: "Developers", links: ["Documentation", "API reference", "Status"] },
  { heading: "Resources", links: ["About", "Contact", "Privacy", "Terms"] },
];

type SocialName = "x" | "github" | "linkedin";

const SOCIALS: { name: SocialName; label: string; path: string }[] = [
  { name: "x", label: "X", path: "M13.3 10.7 20.5 3h-2L12.4 9.4 7.7 3H2l7.6 10.9L2 21h2l6.5-6.9 5 6.9H21l-7.7-10.3Zm-2.3 2.5-.8-1.1L4.7 4.5h2.3l4.8 6.8.8 1.1 6.1 8.6h-2.3l-5.2-7.8Z" },
  { name: "github", label: "GitHub", path: "M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.3-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .3.3.6.9.6 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" },
  { name: "linkedin", label: "LinkedIn", path: "M6.9 8H4V20h2.9V8Zm.2-3.3a1.7 1.7 0 1 0-3.4 0 1.7 1.7 0 0 0 3.4 0ZM20 20v-6.6c0-3.2-1.7-4.7-4-4.7-1.8 0-2.6 1-3.1 1.7V8H10v12h2.9v-6.3c0-.3 0-.7.1-1 .3-.7.9-1.4 1.9-1.4 1.3 0 1.9 1 1.9 2.5V20H20Z" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <Container>
        <div className="py-16">
          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <p className="mb-4 text-label font-medium text-text-primary">
                  {col.heading}
                </p>
                <ul className="space-y-3">
                  {col.links.map((link, i) => (
                    <li key={`${col.heading}-${i}`}>
                      <a
                        href="#"
                        className="text-label text-text-muted transition-colors duration-200 ease-smooth hover:text-text-primary"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tagline row */}
          <div className="mt-14 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#" aria-label="Fortgate — home" className="w-fit">
                <Image src={logoWordmark} alt="Fortgate" className="h-7 w-auto" />
              </a>
              <span className="text-body-lg-mobile text-text-muted md:text-body-lg">
                The integrated identity and compliance layer.
              </span>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-text-muted transition-colors duration-200 ease-smooth hover:text-text-primary"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 flex flex-col gap-3 text-label text-text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Fortgate. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="transition-colors hover:text-text-primary">Privacy</a>
              <a href="#" className="transition-colors hover:text-text-primary">Terms</a>
              <a href="#" className="transition-colors hover:text-text-primary">Cookies</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
