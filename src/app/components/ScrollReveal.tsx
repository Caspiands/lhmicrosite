import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function ScrollReveal({ children, className, delay = 0, y = 40 }: Props) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? undefined : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
