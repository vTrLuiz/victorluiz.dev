"use client";

import { motion, useInView, type Variants } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function InView({
  children,
  className,
  variants,
  transition,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  transition?: Record<string, unknown>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants || defaultVariants}
      transition={{ duration: 0.6, ease: "easeOut", ...transition }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
