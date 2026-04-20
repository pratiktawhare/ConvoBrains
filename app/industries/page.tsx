"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { EyebrowTag } from "@/components/EyebrowTag";
import { ScrollReveal } from "@/components/ScrollReveal";
import { IndustryCard } from "@/components/IndustryCard";
import { Button } from "@/components/Button";

const industries = [
  {
    industry: "Real Estate",
    tagline: "From first call to site visit to booking",
    href: "/industries/real-estate",
    slug: "real-estate",
  },
  {
    industry: "Telecom",
    tagline: "From complaint call to upsell to loyalty",
    href: "/industries/telecom",
    slug: "telecom",
  },
  {
    industry: "Insurance",
    tagline: "From query to policy to renewal",
    href: "/industries/insurance",
    slug: "insurance",
  },
  {
    industry: "Retail",
    tagline: "From browse to cart recovery to win-back",
    href: "/industries/retail",
    slug: "retail",
  },
  {
    industry: "SaaS",
    tagline: "From trial to activation to expansion",
    href: "/industries/saas",
    slug: "saas",
  },
  {
    industry: "Healthcare",
    tagline: "From appointment to follow-up to adherence",
    href: "/industries/healthcare",
    slug: "healthcare",
  },
];

export default function Industries() {
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

      <SectionWrapper bg="white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.slug} delay={i * 0.1}>
              <IndustryCard {...ind} />
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

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
