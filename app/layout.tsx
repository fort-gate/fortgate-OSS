import type { Metadata, Viewport } from "next";
import { satoshi } from "./fonts";
import LenisProvider from "@/components/LenisProvider";
import "./globals.css";

const description =
  "Verify a user once, then let that verified identity travel securely across every product — reusable, privacy-preserving, and audit-ready. Fortgate ID for reusable verification, Fortgate AML for continuous screening.";

export const metadata: Metadata = {
  title: {
    default: "Fortgate — The integrated identity and compliance layer",
    template: "%s · Fortgate",
  },
  description,
  applicationName: "Fortgate",
  keywords: [
    "identity verification",
    "reusable identity",
    "AML",
    "compliance",
    "zero-knowledge proofs",
    "KYC",
    "watchlist screening",
  ],
  openGraph: {
    type: "website",
    siteName: "Fortgate",
    title: "Fortgate — The integrated identity and compliance layer",
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortgate — The integrated identity and compliance layer",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body className="bg-background text-text-primary antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:border focus:border-hairline focus:bg-surface-2 focus:px-4 focus:py-2 focus:text-label focus:text-text-primary"
        >
          Skip to content
        </a>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
