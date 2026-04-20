"use client";

import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  number: string;
  label: string;
}

export function StatCard({ number, label }: StatCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [displayNumber, setDisplayNumber] = useState("0");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const numericMatch = number.match(/[\d.]+/);
    if (!numericMatch) {
      setDisplayNumber(number);
      return;
    }

    const target = parseFloat(numericMatch[0]);
    const prefix = number.slice(0, number.indexOf(numericMatch[0]));
    const suffix = number.slice(
      number.indexOf(numericMatch[0]) + numericMatch[0].length
    );
    const isDecimal = numericMatch[0].includes(".");
    const duration = 1500;
    const steps = 40;
    const stepDuration = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      setDisplayNumber(
        `${prefix}${isDecimal ? current.toFixed(1) : Math.round(current)}${suffix}`
      );

      if (step >= steps) {
        setDisplayNumber(number);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, number]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
        {displayNumber}
      </div>
      <div className="text-sm text-slate-300">{label}</div>
    </div>
  );
}
