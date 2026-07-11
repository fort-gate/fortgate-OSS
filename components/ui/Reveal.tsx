"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Delay in seconds — used for stagger (e.g. index * 0.1). */
  delay?: number;
  className?: string;
}

// Matches the `reveal` keyframe: opacity 0→1, y 8px→0, 0.6s smooth ease.
const variants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/**
 * Reveals its children on scroll-in. Fires once. Pass `delay` to stagger
 * siblings (bento cards use index * 0.1).
 */
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}
