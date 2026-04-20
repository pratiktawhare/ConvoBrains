"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { EyebrowTag } from "@/components/EyebrowTag";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/Button";
import {
  Mic,
  User,
  Zap,
  PhoneIncoming,
  MessageSquare,
  Brain,
  Target,
  Send,
  BarChart3,
} from "lucide-react";

const journeySteps = [
  {
    phase: "Inbound",
    icon: <PhoneIncoming className="w-6 h-6" />,
    title: "Customer reaches out",
    description:
      "A customer calls your support line, chats on WhatsApp, or fills out a web form. ConvoBrains captures the interaction in real time.",
    detail:
      "Our telephony integrations connect with Exotel, Ozonetel, Knowlarity, and any SIP-based system. Chat integrations cover WhatsApp Business API, website live chat, and Facebook Messenger.",
    color: "brand",
  },
  {
    phase: "Capture",
    icon: <Mic className="w-6 h-6" />,
    title: "Every word is processed",
    description:
      "The call transcript or chat log is processed by our NLP engine within seconds. Key signals are extracted automatically.",
    detail:
      "We extract: budget mentions, timeline indicators, product preferences, competitor references, objections, sentiment shifts, and purchase intent scores — all without manual tagging.",
    color: "brand",
  },
  {
    phase: "Enrich",
    icon: <Brain className="w-6 h-6" />,
    title: "Profile gets smarter",
    description:
      "Extracted signals are fused into the customer's persistent profile. Every new interaction adds depth, never starts from zero.",
    detail:
      "The profile aggregates data from voice, chat, web behavior, CRM fields, and transaction history. RFM scores, engagement scores, and propensity models update in real time.",
    color: "accent",
  },
  {
    phase: "Decide",
    icon: <Target className="w-6 h-6" />,
    title: "AI determines the next best action",
    description:
      "ConvoBrains' decisioning engine evaluates the profile and determines the optimal next action — send a message, schedule a callback, or escalate.",
    detail:
      "The decisioning engine uses propensity-to-buy scores, churn prediction models, and conversation momentum to pick the right action at the right time through the right channel.",
    color: "accent",
  },
  {
    phase: "Act",
    icon: <Send className="w-6 h-6" />,
    title: "Action is triggered automatically",
    description:
      "A WhatsApp message is sent, an email campaign is triggered, a callback is scheduled, or a senior agent is flagged — all without human intervention.",
    detail:
      "Actions execute across WhatsApp, SMS, email, push notifications, and CRM task creation. Every action is logged back into the profile for the next interaction.",
    color: "brand",
  },
  {
    phase: "Measure",
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Outcomes feed the loop",
    description:
      "Did the customer respond? Did they convert? Every outcome feeds back into the profile and improves future decisioning.",
    detail:
      "Closed-loop analytics connect conversation signals to revenue outcomes. Attribution models show which signals and actions drive the most conversions.",
    color: "brand",
  },
];

export default function HowItWorks() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <EyebrowTag label="How It Works" dark />
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-bold text-white leading-[1.1] mb-6">
            The journey from
            <br />
            <span className="text-accent">conversation to conversion</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Follow a single customer interaction through the ConvoBrains
            platform — from the first ring to the final conversion.
          </p>
        </div>
      </section>

      {/* Interactive journey */}
      <SectionWrapper bg="white">
        <div className="max-w-3xl mx-auto">
          {journeySteps.map((step, i) => (
            <ScrollReveal key={step.phase} delay={i * 0.08}>
              <div className="relative pl-12 md:pl-16 pb-12 last:pb-0">
                {/* Vertical line */}
                {i < journeySteps.length - 1 && (
                  <div className="absolute left-5 md:left-7 top-14 bottom-0 w-px bg-gradient-to-b from-brand/30 to-border" />
                )}

                {/* Step circle */}
                <div
                  className={`absolute left-0 md:left-2 top-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center ${
                    step.color === "accent"
                      ? "bg-accent/10 text-accent"
                      : "bg-brand/10 text-brand"
                  }`}
                >
                  {step.icon}
                </div>

                <div className="bg-neutral-light rounded-2xl border border-border p-6 md:p-8 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-brand bg-brand/10 px-2 py-0.5 rounded-md">
                      {step.phase}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Step {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-mid leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <div className="bg-white rounded-xl border border-border p-4">
                    <div className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-1.5">
                      Under the hood
                    </div>
                    <p className="text-sm text-neutral-mid leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Visual summary */}
      <SectionWrapper bg="gray">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-[40px] font-heading font-semibold text-navy leading-tight mb-4">
              A continuous intelligence loop
            </h2>
            <p className="text-neutral-mid max-w-2xl mx-auto">
              Unlike linear funnels, ConvoBrains runs a persistent feedback loop
              — every customer interaction makes the next one smarter.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: <Mic className="w-6 h-6" />,
                label: "Capture",
                stat: "Real-time",
              },
              {
                icon: <User className="w-6 h-6" />,
                label: "Profile",
                stat: "Persistent",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                label: "Act",
                stat: "Automated",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl border border-border p-6 text-center shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center mx-auto mb-4 text-brand">
                  {item.icon}
                </div>
                <div className="text-lg font-heading font-semibold text-navy mb-1">
                  {item.label}
                </div>
                <div className="text-sm text-brand font-medium">
                  {item.stat}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-gradient-to-br from-brand to-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 dot-grid" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-[40px] font-heading font-semibold text-white leading-tight mb-4">
              See it in action
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Book a personalized demo and watch the full loop run on your own
              data.
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
