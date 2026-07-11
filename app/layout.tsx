import type { Metadata } from "next";
import { satoshi } from "./fonts";
import LenisProvider from "@/components/LenisProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fortgate — Placeholder Title",
  description: "Placeholder description. Replace with final copy.",
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
