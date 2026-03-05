"use client";

import { forwardRef, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      icon: Icon,
      iconPosition = "left",
      children,
      type = "button",
      disabled,
      onClick,
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary:
        "bg-[#9b6dff] text-white hover:bg-[#6236b2] shadow-[0_0_20px_rgba(155,109,255,0.3)] hover:shadow-[0_0_25px_rgba(155,109,255,0.5)]",
      secondary:
        "bg-[#ff6da2] text-white hover:bg-[#b23668] shadow-[0_0_20px_rgba(255,109,162,0.3)]",
      outline: "border border-[#9b6dff] text-[#9b6dff] hover:bg-[rgba(155,109,255,0.1)]",
      ghost: "text-white hover:bg-[rgba(255,255,255,0.05)] hover:text-[#9b6dff]",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-8 text-base",
      lg: "h-14 px-10 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onClick}
        whileHover={disabled ? {} : { scale: 1.05 }}
        whileTap={disabled ? {} : { scale: 0.95 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
      >
        {Icon && iconPosition === "left" && <Icon className="mr-2 h-5 w-5" />}
        {children}
        {Icon && iconPosition === "right" && <Icon className="ml-2 h-5 w-5" />}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
