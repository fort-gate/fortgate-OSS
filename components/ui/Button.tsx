import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "filled" | "outline";
type ButtonSize = "md" | "lg";

interface ButtonProps extends ComponentPropsWithoutRef<"a"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center rounded-full font-medium text-label whitespace-nowrap transition-all duration-[0.6s] ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const sizes: Record<ButtonSize, string> = {
  md: "h-10 px-5",
  lg: "h-12 px-7",
};

const variants: Record<ButtonVariant, string> = {
  filled:
    "bg-accent-violet text-text-primary hover:opacity-90 hover:-translate-y-0.5",
  outline:
    "border border-border bg-transparent text-text-primary hover:bg-card-surface hover:-translate-y-0.5",
};

/**
 * Anchor-based button. Rendered as <a> so it works as a link placeholder;
 * swap for next/link or a form submit when wiring real routes.
 */
export default function Button({
  variant = "filled",
  size = "md",
  className = "",
  children,
  href = "#",
  ...rest
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
