"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { EyebrowTag } from "@/components/EyebrowTag";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/Button";
import { getAllIndustries, badgeColors } from "@/lib/explorerData";
import Link from "next/link";
import {
  Building2,
  Radio,
  Shield,
  ShoppingBag,
  Laptop,
  HeartPulse,
  Landmark,
  Store,
  Wallet,
  Car,
  Package,
  Sparkles,
  UtensilsCrossed,
  GraduationCap,
  Plane,
  Dumbbell,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "real-estate": Building2,
  telecom: Radio,
  insurance: Shield,
  ecommerce: ShoppingBag,
  saas: Laptop,
  banking: Landmark,
  healthcare: HeartPulse,
  retail: Store,
  bfsi: Wallet,
  auto: Car,
  subbox: Package,
  beauty: Sparkles,
  food: UtensilsCrossed,
  edtech: GraduationCap,
  omnichannel: ShoppingCart,
  travel: Plane,
  fitness: Dumbbell,
  highered: GraduationCap,
};

const featured = ["real-estate", "banking", "ecommerce", "insurance", "saas", "telecom", "retail", "healthcare", "bfsi", "auto", "subbox", "beauty", "food", "edtech", "omnichannel", "travel", "fitness", "highered"];

export default function Industries() {
  const all = getAllIndustries();
  const featuredList = all.filter((i) => featured.includes(i.slug));
  const rest = all.filter((i) => !featured.includes(i.slug));

  return (
    <>
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <EyebrowTag label="Industries" dark />
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-bold text-white leading-[1.1] mb-6">
            Built for
            <br />
            <span className="text-accent">your industry.</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            ConvoBrains is pre-configured for the exact touchpoints, failure
            modes, and signals that matter in your vertical.
          </p>
        </div>
      </section>

      {/* Featured industries */}
      <SectionWrapper bg="white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredList.map((ind, i) => {
            const Icon = iconMap[ind.slug] || Building2;

            return (
              <ScrollReveal key={ind.slug} delay={i * 0.1}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group block bg-white rounded-2xl border border-border p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:border-brand/30 hover:-translate-y-1"
                >
                  <div className="mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-brand/15">
                      <Icon className="w-6 h-6 text-brand" />
                    </div>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-navy mb-2">
                    {ind.name}
                  </h3>
                  <p className="text-sm text-neutral-mid mb-4 leading-relaxed line-clamp-2">
                    {ind.tagline}
                  </p>
                  <span className="text-sm font-medium text-brand inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                    Explore journey
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </SectionWrapper>

      {/* More industries */}
      {rest.length > 0 && (
        <SectionWrapper bg="gray">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-navy leading-tight">
                Explore more industries
              </h2>
              <p className="text-sm text-neutral-mid mt-2">
                Grouped by channel type
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((ind, i) => {
              const badge = badgeColors[ind.badgeVariant];
              return (
                <ScrollReveal key={ind.slug} delay={i * 0.08}>
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="group flex items-center gap-4 bg-white rounded-xl border border-border p-4 transition-all duration-200 hover:shadow-md hover:border-brand/20"
                  >
                    <div className="shrink-0">
                      <span
                        className="inline-block w-2 h-8 rounded-full"
                        style={{ background: badge.border }}
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-heading font-semibold text-navy truncate">
                        {ind.name}
                      </h4>
                      <span className="text-[10px] font-medium" style={{ color: badge.text }}>
                        {ind.badgeText}
                      </span>
                    </div>
                    <svg
                      className="w-4 h-4 ml-auto shrink-0 text-neutral-mid opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </SectionWrapper>
      )}

      <section className="bg-gradient-to-br from-brand to-brand-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-semibold text-white mb-4">
              Don&apos;t see your industry?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              ConvoBrains adapts to any industry where customer conversations
              drive revenue. Talk to us about your use case.
            </p>
            <Button
              href="/demo"
              variant="primary"
              size="lg"
              className="!bg-white !text-brand-dark hover:!bg-white/90"
            >
              Book a Demo
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
