import type { Metadata } from "next";
import { satoshi } from "./fonts";
import LenisProvider from "@/components/LenisProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fortgate — The integrated identity and compliance layer",
  description:
    "Verify a user once, then let that verified identity travel securely across every product — reusable, privacy-preserving, and audit-ready. Fortgate ID for reusable verification, Fortgate AML for continuous screening.",
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
