import type { SVGProps } from "react";

export type IconName =
  | "shield-check"
  | "fingerprint"
  | "eye-off"
  | "scan"
  | "list-check"
  | "network"
  | "file-check"
  | "refresh"
  | "radar"
  | "activity"
  | "gauge"
  | "bell"
  | "lock"
  | "key"
  | "code"
  | "layers"
  | "plug"
  | "building"
  | "users"
  | "globe"
  | "arrow-right"
  | "check"
  | "plus"
  | "minus";

// Stroke-based 24×24 glyphs drawn on a shared grid for a coherent custom set.
const PATHS: Record<IconName, string> = {
  "shield-check": "M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3zM9 12l2 2 4-4",
  fingerprint:
    "M12 11v3m-4-3a4 4 0 018 0v1m-8 3a12 12 0 01-.5-4 4.5 4.5 0 019 0v2c0 1 .1 2 .4 3M6.5 6.5a8 8 0 0111 0",
  "eye-off":
    "M3 3l18 18M10.6 10.7a2 2 0 002.7 2.7M9.4 5.2A9.5 9.5 0 0112 5c5 0 9 4.5 9 7-.4 1-1.3 2.3-2.6 3.4M6.1 6.6C4 8 2.8 9.9 3 12c.5 1.4 2 3.3 4 4.6a9 9 0 006 1.2",
  scan: "M4 8V6a2 2 0 012-2h2M16 4h2a2 2 0 012 2v2M20 16v2a2 2 0 01-2 2h-2M8 20H6a2 2 0 01-2-2v-2M7 12h10",
  "list-check": "M10 6h10M10 12h10M10 18h10M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2",
  network:
    "M12 8a2 2 0 100-4 2 2 0 000 4zM5 20a2 2 0 100-4 2 2 0 000 4zM19 20a2 2 0 100-4 2 2 0 000 4zM12 8v3m0 0l-5 5m5-5l5 5",
  "file-check":
    "M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5zM14 3v5h5M9 15l2 2 4-4",
  refresh: "M21 12a9 9 0 11-3-6.7L21 8M21 3v5h-5",
  radar: "M12 12l6-4M12 3a9 9 0 109 9M12 7a5 5 0 105 5M12 12a1 1 0 100-.01",
  activity: "M3 12h4l3 8 4-16 3 8h4",
  gauge: "M12 14l4-4M5.6 18a9 9 0 1112.8 0M12 14a2 2 0 100-.01",
  bell: "M18 9a6 6 0 10-12 0c0 6-2.5 8-2.5 8h17S18 15 18 9zM10.5 20a2 2 0 003 0",
  lock: "M6 11V8a6 6 0 0112 0v3M5 11h14a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1v-8a1 1 0 011-1zM12 15v3",
  key: "M15 8a4 4 0 10-4 4l-6 6v3h3l6-6a4 4 0 011-7zM16 8h.01",
  code: "M8 8l-5 4 5 4M16 8l5 4-5 4M13 5l-2 14",
  layers: "M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17l9 5 9-5",
  plug: "M9 3v5m6-5v5M6 8h12v2a6 6 0 01-12 0V8zM12 16v5",
  building:
    "M4 21V6a2 2 0 012-2h6a2 2 0 012 2v15M14 21V9h4a2 2 0 012 2v10M8 8h2M8 12h2M8 16h2M3 21h18",
  users:
    "M16 20v-1a4 4 0 00-4-4H7a4 4 0 00-4 4v1M9.5 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM21 20v-1a4 4 0 00-3-3.9M16.5 4.1a4 4 0 010 7.8",
  globe: "M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3c2.5 2.5 3.5 5.7 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.7-3.5-9s1-6.5 3.5-9z",
  "arrow-right": "M5 12h14M13 6l6 6-6 6",
  check: "M5 12l4 4L19 7",
  plus: "M12 5v14M5 12h14",
  minus: "M5 12h14",
};

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  size?: number;
}

/** Custom line-icon set — single stroke weight, currentColor, 24-grid. */
export default function Icon({ name, size = 24, className, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
      {...rest}
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
