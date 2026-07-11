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
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
