"use client";
import { SolutionPageLayout } from "@/components/SolutionPageLayout";
import { TrendingDown, Bell, Shield } from "lucide-react";

export default function ChurnReductionPage() {
  return (
    <SolutionPageLayout
      eyebrow="Churn Reduction"
      title={<>Predict and prevent churn <span className="text-accent">30+ days early</span></>}
      subtitle="Conversation signals, sentiment trajectories, and engagement patterns combine to flag at-risk customers before they cancel — then trigger personalized retention plays automatically."
      metric="38%"
      metricLabel="reduction in&#10;customer churn"
      benefits={[
        { icon: <TrendingDown className="w-6 h-6" />, title: "Early Warning Signals", desc: "AI detects frustration, disengagement, and competitor mentions in calls and chats — weeks before cancellation." },
        { icon: <Bell className="w-6 h-6" />, title: "Automated Alerts", desc: "At-risk customers trigger instant alerts to account managers with context and recommended actions." },
        { icon: <Shield className="w-6 h-6" />, title: "Retention Playbooks", desc: "Pre-built retention campaigns fire across WhatsApp, email, and callbacks — personalized to the churn reason." },
      ]}
      steps={[
        { num: "1", title: "Detect Risk", desc: "AI monitors conversation sentiment, engagement drops, and behavioral signals to flag churn risk." },
        { num: "2", title: "Alert & Recommend", desc: "Account managers get real-time alerts with churn reason and the recommended retention action." },
        { num: "3", title: "Retain Automatically", desc: "Personalized retention campaigns trigger on the best channel — offer, callback, or escalation." },
      ]}
      features={[
        "Churn propensity scoring",
        "Sentiment trajectory tracking",
        "Competitor mention detection",
        "Automated retention campaigns",
        "Account manager alerts",
        "Churn reason classification",
        "Win-back journey triggers",
        "Retention analytics dashboard",
      ]}
    />
  );
}
