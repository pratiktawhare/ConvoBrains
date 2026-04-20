"use client";

import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  children,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand/50 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-brand text-white hover:bg-brand-dark shadow-sm hover:shadow-lg hover:shadow-brand/25 active:scale-[0.98]",
    ghost:
      "bg-transparent text-black border border-black/30 hover:bg-black/5 hover:border-black/50 active:scale-[0.98]",
    outline:
      "bg-transparent text-brand border border-brand/30 hover:bg-brand/5 hover:border-brand active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-2.5 text-sm gap-2",
    lg: "px-8 py-3.5 text-base gap-2.5",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
