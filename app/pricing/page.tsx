"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { EyebrowTag } from "@/components/EyebrowTag";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/Button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹24,999",
    period: "/month",
    description: "For small teams getting started with conversation intelligence.",
    features: [
      "Up to 5,000 call minutes/month",
      "Conversation intelligence engine",
      "Basic customer profiles",
      "WhatsApp integration",
      "Email support",
      "5 team members",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth",
    price: "₹74,999",
    period: "/month",
    description: "For growing teams that need full CDP capabilities and automation.",
    features: [
      "Up to 25,000 call minutes/month",
      "Full CDP with segmentation",
      "Journey builder & automation",
      "A/B testing & funnel analysis",
      "WhatsApp + SMS + Email",
      "AI-powered next best action",
      "25 team members",
      "Priority support",
    ],
    cta: "Book a Demo",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom requirements and SLAs.",
    features: [
      "Unlimited call minutes",
      "Full platform access",
      "Agentic AI & Co-Marketer",
      "Custom integrations & APIs",
      "Dedicated success manager",
      "SLA guarantees",
      "Unlimited team members",
      "On-premise deployment option",
      "SOC 2 compliance",
    ],
    cta: "Contact Sales",
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
            Simple, transparent
            <br />
            <span className="text-accent">pricing.</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Start with a free trial. Scale as you grow. No hidden fees.
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
                  <h3 className="text-xl font-heading font-semibold text-navy mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-neutral-mid mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-heading font-bold text-navy">
                      {plan.price}
                    </span>
                    <span className="text-neutral-mid text-sm">{plan.period}</span>
                  </div>
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
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full justify-center"
                >
                  {plan.cta}
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* FAQ teaser */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-heading font-semibold text-navy mb-3">
              Questions? We&apos;ve got answers.
            </h2>
            <p className="text-neutral-mid mb-6 max-w-lg mx-auto">
              Talk to our team for a custom quote or to understand which plan
              fits your needs.
            </p>
            <Button href="/demo" variant="outline" size="md">
              Talk to Sales
            </Button>
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </>
  );
}
