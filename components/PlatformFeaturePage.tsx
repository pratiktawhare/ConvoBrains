"use client";

import { ReactNode } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { EyebrowTag } from "@/components/EyebrowTag";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/Button";
import { FeaturePill } from "@/components/FeaturePill";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface PlatformFeaturePageProps {
  eyebrow: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  features: Feature[];
  pills: string[];
  visualContent: ReactNode;
}

export function PlatformFeaturePage({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  features,
  pills,
  visualContent,
}: PlatformFeaturePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <EyebrowTag label={eyebrow} dark />
              <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-[1.1] mb-6">
                {title}
                <br />
                <span className="text-accent">{titleAccent}</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-lg">
                {subtitle}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {pills.map((pill) => (
                  <span
                    key={pill}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-brand/15 text-accent border border-brand/20"
                  >
                    {pill}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Button href="/demo" variant="primary" size="lg">
                  Book a Demo
                </Button>
                <Button href="/platform" variant="ghost" size="lg">
                  All Features
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">{visualContent}</div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <SectionWrapper bg="white">
        <ScrollReveal>
          <div className="text-center mb-14">
            <EyebrowTag label="Key Capabilities" />
            <h2 className="text-3xl md:text-[40px] font-heading font-semibold text-navy leading-tight">
              What&apos;s included
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl border border-border p-6 hover:shadow-md hover:border-brand/20 transition-all h-full">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4 text-brand">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-heading font-semibold text-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-mid leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-gradient-to-br from-brand to-brand-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-semibold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              See how this module integrates with the full ConvoBrains platform.
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
