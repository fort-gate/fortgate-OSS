import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Centered content container capped at --max-width (1200px) with responsive
 * horizontal gutters. Single source of truth for page width.
 */
export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-container px-6 md:px-8 ${className}`}>
      {children}
    </div>
  );
}
