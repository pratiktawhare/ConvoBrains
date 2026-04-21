"use client";
import { SolutionPageLayout } from "@/components/SolutionPageLayout";
import { TrendingUp, Phone, Target } from "lucide-react";

export default function LeadConversionPage() {
  return (
    <SolutionPageLayout
      eyebrow="Lead Conversion"
      title={<>Convert more leads with <span className="text-accent">conversation-aware follow-up</span></>}
      subtitle="Every call signal — budget mentioned, objection raised, competitor named — feeds the lead score and triggers the right next action at the right moment."
      metric="3.2x"
      metricLabel="lead conversion&#10;rate improvement"
      benefits={[
        { icon: <TrendingUp className="w-6 h-6" />, title: "Intent-Based Scoring", desc: "Lead scores update in real time based on what prospects actually say — not just form fills and page views." },
        { icon: <Phone className="w-6 h-6" />, title: "Smart Follow-Up", desc: "AI recommends the best follow-up action — call, WhatsApp, or email — based on the conversation context." },
        { icon: <Target className="w-6 h-6" />, title: "Objection Handling", desc: "Detect objections in real time and equip reps with the right response or trigger an automated nurture sequence." },
      ]}
      steps={[
        { num: "1", title: "Capture Signals", desc: "Every call and chat is analyzed for buying signals — budget, timeline, authority, and need." },
        { num: "2", title: "Score & Prioritize", desc: "Leads are scored by conversation intent and prioritized in your CRM for immediate action." },
        { num: "3", title: "Automate Follow-Up", desc: "AI triggers the right follow-up — personalized email, WhatsApp nudge, or scheduled callback." },
      ]}
      features={[
        "Conversation-based lead scoring",
        "BANT signal extraction",
        "Competitor mention alerts",
        "Automated follow-up sequences",
        "Objection detection & routing",
        "CRM lead enrichment",
        "Sales rep coaching insights",
        "Conversion funnel analytics",
      ]}
    />
  );
}
