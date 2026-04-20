import { ReactNode } from "react";

interface SectionWrapperProps {
  bg?: "white" | "gray" | "dark" | "surface";
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({
  bg = "white",
  children,
  className = "",
  id,
}: SectionWrapperProps) {
  const backgrounds = {
    white: "bg-surface text-neutral-mid",
    gray: "bg-neutral-light text-neutral-mid",
    dark: "bg-navy text-white",
    surface: "bg-surface text-neutral-mid",
  };

  return (
    <section id={id} className={`${backgrounds[bg]} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {children}
      </div>
    </section>
  );
}
