import localFont from "next/font/local";

/**
 * Satoshi (Fontshare) loaded locally from /public/fonts.
 * Weights: 400 (Regular), 500 (Medium), 700 (Bold).
 * Exposed as the CSS variable --font-satoshi, consumed by Tailwind's font-sans.
 */
export const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});
