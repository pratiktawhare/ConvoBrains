import Link from "next/link";
import {
  Building2,
  Radio,
  Shield,
  ShoppingBag,
  Laptop,
  HeartPulse,
  type LucideIcon,
} from "lucide-react";

interface IndustryCardProps {
  industry: string;
  tagline: string;
  href: string;
  slug: string;
}

const iconMap: Record<string, LucideIcon> = {
  "real-estate": Building2,
  telecom: Radio,
  insurance: Shield,
  retail: ShoppingBag,
  saas: Laptop,
  healthcare: HeartPulse,
};

export function IndustryCard({
  industry,
  tagline,
  href,
  slug,
}: IndustryCardProps) {
  const Icon = iconMap[slug] || Building2;

  return (
    <Link
      href={href}
      className="group block bg-white rounded-2xl border border-border p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:border-brand/30 hover:-translate-y-1"
    >
      <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-brand/15">
        <Icon className="w-6 h-6 text-brand" />
      </div>
      <h3 className="text-lg font-heading font-semibold text-navy mb-2">
        {industry}
      </h3>
      <p className="text-sm text-neutral-mid mb-4 leading-relaxed">{tagline}</p>
      <span className="text-sm font-medium text-brand inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
        Explore
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>
    </Link>
  );
}
