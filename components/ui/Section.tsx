import type { ElementType, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  as?: ElementType;
  className?: string;
}

/**
 * Section wrapper applying the validated vertical rhythm:
 * 72px padding on mobile, 120px on desktop.
 */
export default function Section({
  children,
  id,
  as: Tag = "section",
  className = "",
}: SectionProps) {
  return (
    <Tag id={id} className={`py-section-mobile md:py-section ${className}`}>
      {children}
    </Tag>
  );
}
