"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { EyebrowTag } from "@/components/EyebrowTag";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/Button";
import { Database, TrendingUp, GitBranch, Sparkles } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    id: "cdp",
    icon: <Database className="w-7 h-7" />,
    title: "Customer Data Platform",
    description:
      "Unified customer profiles from voice, chat, web, and CRM data. Segmentation, behavioral analytics, RFM scoring, and composable CDP architecture — with conversation intelligence as the core data source.",
    href: "/platform/cdp",
    features: [
      "One Customer View",
      "Segmentation",
      "Behavioral Analytics",
      "RFM Scoring",
      "Conversation Intelligence",
    ],
  },
  {
    id: "cro",
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Conversion Rate Optimization",
    description:
      "Heatmaps, A/B experiments, session replays, funnel analysis, NPS surveys, and gamification — all connected to your customer profiles for deeper insights.",
    href: "/platform/cro",
    features: [
      "Heatmaps",
      "A/B Testing",
      "Session Replay",
      "Funnel Analysis",
      "NPS Surveys",
    ],
  },
  {
    id: "automation",
    icon: <GitBranch className="w-7 h-7" />,
    title: "Marketing Automation",
    description:
      "Cross-channel campaign orchestration across WhatsApp, SMS, email, and push — where any journey can be triggered by a conversation signal, not just a click.",
    href: "/platform/automation",
    features: [
      "Journey Builder",
      "WhatsApp Campaigns",
      "Email Automation",
      "Loyalty Programs",
      "Win-back Flows",
    ],
  },
  {
    id: "ai",
    icon: <Sparkles className="w-7 h-7" />,
    title: "Agentic AI",
    description:
      "AI Co-Marketer generates campaigns from natural language. AI Agents execute autonomously. AI Decisioning predicts churn, propensity to buy, and best next action.",
    href: "/platform/ai",
    features: [
      "AI Co-Marketer",
      "AI Agents",
      "Propensity Scoring",
      "Churn Prediction",
      "AI Decisioning",
    ],
  },
];

export default function Platform() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <EyebrowTag label="The Platform" dark />
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-bold text-white leading-[1.1] mb-6">
            One platform.
            <br />
            <span className="text-accent">Four layers of intelligence.</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            ConvoBrains combines a Customer Data Platform, Conversion
            Optimization, Marketing Automation, and Agentic AI into a single
            unified platform — powered by conversation intelligence.
          </p>
        </div>
      </section>

      {/* Pillars grid */}
      <SectionWrapper bg="white">
        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.id} delay={i * 0.1}>
              <Link
                href={pillar.href}
                className="group block bg-white rounded-2xl border border-border p-8 hover:shadow-lg hover:border-brand/30 transition-all duration-300 h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center mb-6 text-brand group-hover:bg-brand/15 transition-colors">
                  {pillar.icon}
                </div>
                <h2 className="text-2xl font-heading font-semibold text-navy mb-3">
                  {pillar.title}
                </h2>
                <p className="text-neutral-mid leading-relaxed mb-6">
                  {pillar.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {pillar.features.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-brand/8 text-brand border border-brand/15"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-medium text-brand inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more
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
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-gradient-to-br from-brand to-brand-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-[40px] font-heading font-semibold text-white leading-tight mb-4">
              See the full platform in action
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Get a personalized walkthrough tailored to your industry and use
              case.
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
