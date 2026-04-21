"use client";
import { SolutionPageLayout } from "@/components/SolutionPageLayout";
import { Database, Brain, TrendingUp } from "lucide-react";

export default function SalesforcePage() {
  return (
    <SolutionPageLayout
      eyebrow="Salesforce Integration"
      title={<>Enrich Salesforce with <span className="text-accent">conversation intelligence</span></>}
      subtitle="Push intent scores, sentiment signals, and next-best actions directly into Salesforce — so your reps never miss a signal."
      metric="3.2x"
      metricLabel="improvement in lead&#10;conversion rate"
      benefits={[
        { icon: <Database className="w-6 h-6" />, title: "CRM Enrichment", desc: "Every call and chat signal — budget mentions, objections, competitor references — lands in the Salesforce contact record automatically." },
        { icon: <Brain className="w-6 h-6" />, title: "AI Lead Scoring", desc: "Conversation-aware lead scores update in real time so reps prioritize the hottest opportunities." },
        { icon: <TrendingUp className="w-6 h-6" />, title: "Pipeline Acceleration", desc: "Next-best-action recommendations appear as Salesforce tasks — call, email, or WhatsApp — at the right moment." },
      ]}
      steps={[
        { num: "1", title: "Connect Salesforce", desc: "OAuth-based integration syncs contacts, leads, and opportunities bidirectionally." },
        { num: "2", title: "Enrich Records", desc: "Call transcripts, sentiment scores, and intent signals push into custom Salesforce fields." },
        { num: "3", title: "Drive Action", desc: "AI-generated tasks and alerts appear in the rep's Salesforce workflow — no tab switching." },
      ]}
      features={[
        "Bidirectional Salesforce sync",
        "Custom field mapping",
        "Conversation-aware lead scoring",
        "Auto-created Salesforce tasks",
        "Opportunity influence tracking",
        "Pipeline analytics dashboard",
        "Multi-object support",
        "Salesforce Flow compatibility",
      ]}
    />
  );
}
