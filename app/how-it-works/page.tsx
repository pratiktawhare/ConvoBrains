"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { EyebrowTag } from "@/components/EyebrowTag";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/Button";
import {
  Mic,
  User,
  Zap,
  Globe,
  Brain,
  Target,
  Send,
  BarChart3,
  Smartphone,
  Mail,
  MessageSquare,
  ShoppingCart,
  Database,
} from "lucide-react";

const steps = [
  {
    phase: "Capture",
    icon: <Globe className="w-7 h-7" />,
    title: "Ingest every customer signal",
    oneLiner:
      "Voice calls, web sessions, mobile app events, WhatsApp chats, emails, SMS, CRM updates, and store transactions — all captured in real time through native connectors.",
    sources: ["Voice", "Web", "App", "WhatsApp", "Email", "CRM"],
    color: "bg-blue-500",
  },
  {
    phase: "Unify",
    icon: <User className="w-7 h-7" />,
    title: "Resolve identity across channels",
    oneLiner:
      "Stitch anonymous clicks, named CRM records, call transcripts, and chat threads into one persistent customer profile — no manual mapping required.",
    sources: ["Identity Resolution", "Cross-device"],
    color: "bg-indigo-500",
  },
  {
    phase: "Understand",
    icon: <Brain className="w-7 h-7" />,
    title: "Extract intent, sentiment & context",
    oneLiner:
      "AI analyzes call transcripts, browsing patterns, purchase history, and chat conversations to surface intent signals, objections, churn risk, and upsell opportunities.",
    sources: ["NLP", "Behavioral AI", "Scoring"],
    color: "bg-violet-500",
  },
  {
    phase: "Segment",
    icon: <Database className="w-7 h-7" />,
    title: "Build live, dynamic audiences",
    oneLiner:
      "Combine behavioral, transactional, and conversational attributes into segments that update in real time — RFM scoring, lifecycle stage, predicted LTV, and more.",
    sources: ["RFM", "Predictive", "Lifecycle"],
    color: "bg-amber-500",
  },
  {
    phase: "Orchestrate",
    icon: <Target className="w-7 h-7" />,
    title: "Decide the next best action",
    oneLiner:
      "AI evaluates every profile in context and picks the optimal action — a WhatsApp nudge, an email sequence, an agent callback, a personalized offer, or an ad retarget.",
    sources: ["AI Decisioning", "Journey Builder"],
    color: "bg-emerald-500",
  },
  {
    phase: "Execute",
    icon: <Send className="w-7 h-7" />,
    title: "Trigger across every channel",
    oneLiner:
      "Actions fire automatically — WhatsApp flows, email campaigns, SMS alerts, push notifications, ad audiences, or CRM task creation — zero manual work.",
    sources: ["WhatsApp", "Email", "SMS", "Push", "Ads"],
    color: "bg-teal-500",
  },
  {
    phase: "Measure",
    icon: <BarChart3 className="w-7 h-7" />,
    title: "Learn and improve continuously",
    oneLiner:
      "Every outcome — opens, replies, conversions, renewals, churn events — feeds back into the intelligence engine, making every future decision smarter.",
    sources: ["Closed-loop", "Auto-optimize"],
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
            Every signal, one loop,
            <br />
            <span className="text-accent">zero guesswork</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            ConvoBrains connects voice calls, web sessions, app events, chats,
            emails, and CRM data into a single AI-powered loop that understands,
            decides, and acts — automatically.
          </p>
        </div>
      </section>

      {/* Channel bar */}
      <SectionWrapper bg="surface">
        <ScrollReveal>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-neutral-mid mb-6">
            Signals we process
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              { icon: <Mic className="w-4 h-4" />, label: "Voice Calls" },
              { icon: <Globe className="w-4 h-4" />, label: "Web Sessions" },
              { icon: <Smartphone className="w-4 h-4" />, label: "Mobile App" },
              { icon: <MessageSquare className="w-4 h-4" />, label: "WhatsApp & Chat" },
              { icon: <Mail className="w-4 h-4" />, label: "Email" },
              { icon: <ShoppingCart className="w-4 h-4" />, label: "Store & Orders" },
              { icon: <Database className="w-4 h-4" />, label: "CRM Records" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-white text-sm font-medium text-navy"
              >
                <span className="text-brand">{s.icon}</span>
                {s.label}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* Visual step flow */}
      <SectionWrapper bg="white">
        <ScrollReveal>
          <div className="text-center mb-14">
            <EyebrowTag label="The Loop" />
            <h2 className="text-3xl md:text-[40px] font-heading font-semibold text-navy leading-tight mb-3">
              7 steps from raw signal to revenue
            </h2>
            <p className="text-neutral-mid max-w-xl mx-auto">
              Not a linear funnel — a continuous feedback loop that gets smarter
              with every customer interaction across every channel.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <ScrollReveal key={step.phase} delay={i * 0.06}>
              <div className="flex items-start gap-5 md:gap-8">
                {/* Icon circle */}
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${step.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="py-2">
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
                  <p className="text-sm text-neutral-mid mt-1 leading-relaxed max-w-2xl">
                    {step.oneLiner}
                  </p>
                  {/* Tag pills */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {step.sources.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-medium bg-neutral-light border border-border text-black py-1 px-2.5 rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connector */}
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
              Every channel feeds the same intelligence engine — the more
              signals flow in, the smarter every action becomes.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: <Globe className="w-6 h-6" />,
                label: "Capture",
                stat: "Omnichannel",
                desc: "Calls, web, app, chat, email & CRM",
              },
              {
                icon: <Brain className="w-6 h-6" />,
                label: "Understand",
                stat: "AI-Powered",
                desc: "Intent, sentiment & prediction",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                label: "Act",
                stat: "Automated",
                desc: "Right channel, right time, zero manual work",
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
