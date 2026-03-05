"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  delay?: number;
}

export function Section({ id, className, children, delay = 0 }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn("py-20 md:py-32 w-full", className)}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {children}
      </div>
    </motion.section>
  );
}
