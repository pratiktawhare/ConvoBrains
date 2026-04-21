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
  Brain,
  Target,
  Send,
  BarChart3,
  ArrowDown,
} from "lucide-react";

const steps = [
  {
    phase: "Capture",
    icon: <PhoneIncoming className="w-7 h-7" />,
    title: "Customer reaches out",
    oneLiner: "Call, chat, or web form — captured in real time.",
    color: "bg-blue-500",
  },
  {
    phase: "Process",
    icon: <Mic className="w-7 h-7" />,
    title: "Conversation is analyzed",
    oneLiner: "Intent, sentiment & key signals extracted instantly by AI.",
    color: "bg-indigo-500",
  },
  {
    phase: "Enrich",
    icon: <Brain className="w-7 h-7" />,
    title: "Profile gets smarter",
    oneLiner: "Every interaction deepens the customer's unified profile.",
    color: "bg-violet-500",
  },
  {
    phase: "Decide",
    icon: <Target className="w-7 h-7" />,
    title: "AI picks the next best action",
    oneLiner: "Right message, right channel, right time — automatically.",
    color: "bg-amber-500",
  },
  {
    phase: "Act",
    icon: <Send className="w-7 h-7" />,
    title: "Action is triggered",
    oneLiner: "WhatsApp, email, callback, or escalation — zero manual work.",
    color: "bg-emerald-500",
  },
  {
    phase: "Measure",
    icon: <BarChart3 className="w-7 h-7" />,
    title: "Outcomes feed back in",
    oneLiner: "Every result improves the next decision. The loop never stops.",
    color: "bg-rose-500",
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
            From conversation
            <br />
            <span className="text-accent">to conversion — in 6 steps</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            Every customer interaction flows through one intelligent loop.
          </p>
        </div>
      </section>

      {/* Visual step flow */}
      <SectionWrapper bg="white">
        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <ScrollReveal key={step.phase} delay={i * 0.06}>
              <div className="flex items-center gap-5 md:gap-8">
                {/* Icon circle */}
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${step.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="py-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand">
                      {step.phase}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-heading font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-mid mt-0.5">
                    {step.oneLiner}
                  </p>
                </div>
              </div>

              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <div className="flex items-center pl-6 md:pl-7 py-1">
                  <div className="w-px h-8 bg-border" />
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Visual summary — 3 pillars */}
      <SectionWrapper bg="gray">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-[40px] font-heading font-semibold text-navy leading-tight mb-3">
              One continuous loop
            </h2>
            <p className="text-neutral-mid max-w-lg mx-auto">
              Not a linear funnel — a feedback loop that gets smarter with every interaction.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: <Mic className="w-6 h-6" />,
                label: "Capture",
                stat: "Real-time",
                desc: "Voice, chat & web",
              },
              {
                icon: <User className="w-6 h-6" />,
                label: "Profile",
                stat: "Persistent",
                desc: "Unified & always fresh",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                label: "Act",
                stat: "Automated",
                desc: "Zero manual steps",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl border border-border p-6 text-center shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center mx-auto mb-3 text-brand">
                  {item.icon}
                </div>
                <div className="text-lg font-heading font-semibold text-navy">
                  {item.label}
                </div>
                <div className="text-sm text-brand font-medium mb-1">
                  {item.stat}
                </div>
                <div className="text-xs text-neutral-mid">{item.desc}</div>
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
