"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeInSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function FadeInSection({
  children,
  className,
  delay = 0
}: FadeInSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
