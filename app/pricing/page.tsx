"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { EyebrowTag } from "@/components/EyebrowTag";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/Button";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    tagline: "For small teams getting started",
    description:
      "Begin with core conversation intelligence and basic customer profiles. Ideal for teams exploring data-driven engagement.",
    features: [
      "Conversation intelligence engine",
      "Unified customer profiles",
      "Basic segmentation",
      "WhatsApp integration",
      "Email support",
      "Up to 5 team members",
    ],
    cta: "Talk to Sales",
    popular: false,
  },
  {
    name: "Growth",
    tagline: "For scaling teams",
    description:
      "Full CDP capabilities with journey orchestration, AI-powered decisioning, and cross-channel automation.",
    features: [
      "Full CDP with advanced segmentation",
      "Journey builder & automation",
      "A/B testing & funnel analysis",
      "WhatsApp + SMS + Email campaigns",
      "AI-powered next best action",
      "Predictive scoring & RFM",
      "Up to 25 team members",
      "Priority support",
    ],
    cta: "Talk to Sales",
    popular: true,
  },
  {
    name: "Enterprise",
    tagline: "For large organizations",
    description:
      "Unlimited scale with custom integrations, dedicated support, SLAs, and on-premise deployment options.",
    features: [
      "Everything in Growth",
      "Agentic AI & Co-Marketer",
      "Custom integrations & APIs",
      "Dedicated success manager",
      "SLA guarantees",
      "Unlimited team members",
      "On-premise deployment option",
      "SOC 2 compliance",
    ],
    cta: "Talk to Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <>
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <EyebrowTag label="Pricing" dark />
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-bold text-white leading-[1.1] mb-6">
            Plans that scale
            <br />
            <span className="text-accent">with your business</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Every business is different. Choose a tier and we&apos;ll build a
            custom quote based on your volume, channels, and integrations.
          </p>
        </div>
      </section>

      <SectionWrapper bg="white">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 -mt-32 relative z-20">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.1}>
              <div
                className={`rounded-2xl border p-6 md:p-8 h-full flex flex-col ${
                  plan.popular
                    ? "bg-white border-brand shadow-xl glow-border-strong relative"
                    : "bg-white border-border shadow-sm"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-brand text-white text-xs font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-heading font-semibold text-navy mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs font-medium text-brand uppercase tracking-wider mb-3">
                    {plan.tagline}
                  </p>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-3xl font-heading font-bold text-navy">
                      Custom
                    </span>
                    <span className="text-neutral-mid text-sm">pricing</span>
                  </div>
                  <p className="text-sm text-neutral-mid leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-brand" />
                      </div>
                      <span className="text-sm text-neutral-mid">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="/demo"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom note */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 bg-neutral-light border border-border rounded-2xl p-8 md:p-10 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-heading font-semibold text-navy mb-3">
              How does custom pricing work?
            </h2>
            <p className="text-neutral-mid mb-4 max-w-lg mx-auto leading-relaxed">
              We tailor every plan to your specific needs — based on your data
              volume, number of channels, integrations, and team size. No
              surprises, no hidden fees.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {[
                "Volume-based",
                "Channel mix",
                "Integration count",
                "Support tier",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium bg-white border border-border text-navy py-1.5 px-3 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Button href="/demo" variant="outline" size="md">
              Get a Custom Quote
            </Button>
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </>
  );
}
