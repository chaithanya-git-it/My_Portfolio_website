"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  variant?: "glass" | "glass-card" | "glass-panel";
  hoverEffect?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "glass-card", hoverEffect = true, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hoverEffect ? { y: -5, scale: 1.01 } : undefined}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={cn(variant, className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export { Card };
