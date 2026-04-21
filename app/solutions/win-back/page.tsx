"use client";
import { SolutionPageLayout } from "@/components/SolutionPageLayout";
import { Users, MessageSquare, Sparkles } from "lucide-react";

export default function WinBackPage() {
  return (
    <SolutionPageLayout
      eyebrow="Win-Back Campaigns"
      title={<>Re-engage dormant customers <span className="text-accent">with precision</span></>}
      subtitle="Identify lapsed customers by their last conversation signal, purchase pattern, and LTV. Send hyper-personalized win-back campaigns across WhatsApp, email, and SMS."
      metric="22%"
      metricLabel="win-back&#10;reactivation rate"
      benefits={[
        { icon: <Users className="w-6 h-6" />, title: "Lapsed Detection", desc: "AI identifies customers who've gone silent — and classifies them by lapse reason and reactivation likelihood." },
        { icon: <MessageSquare className="w-6 h-6" />, title: "Personalized Outreach", desc: "Win-back messages reference the customer's last interaction, preferred product, and specific reason for lapsing." },
        { icon: <Sparkles className="w-6 h-6" />, title: "Smart Incentives", desc: "AI recommends the minimum effective offer — discount, free trial extension, or exclusive access — to maximize ROI." },
      ]}
      steps={[
        { num: "1", title: "Identify Lapsed", desc: "AI flags customers who've gone inactive based on engagement, purchase, and conversation history." },
        { num: "2", title: "Classify & Score", desc: "Each lapsed customer is scored by reactivation likelihood and classified by lapse reason." },
        { num: "3", title: "Launch Win-Back", desc: "Personalized campaigns fire across WhatsApp, email, and SMS with tailored offers and messaging." },
      ]}
      features={[
        "Lapse detection engine",
        "Reactivation scoring",
        "Lapse reason classification",
        "Personalized win-back campaigns",
        "Multi-channel orchestration",
        "Minimum effective offer AI",
        "Re-engagement tracking",
        "Win-back ROI analytics",
      ]}
    />
  );
}
