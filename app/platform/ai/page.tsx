"use client";

import { PlatformFeaturePage } from "@/components/PlatformFeaturePage";
import { Sparkles, Bot, Target, TrendingDown, Brain, Wand2 } from "lucide-react";

export default function AIPage() {
  return (
    <PlatformFeaturePage
      eyebrow="Agentic AI"
      title="AI that"
      titleAccent="decides and acts."
      subtitle="AI Co-Marketer generates campaigns from natural language. AI Agents execute autonomously. AI Decisioning predicts churn, propensity to buy, and best next action — all powered by conversation signals."
      pills={["AI Co-Marketer", "AI Agents", "Propensity Scoring", "Churn Prediction", "AI Decisioning", "Natural Language"]}
      features={[
        {
          icon: <Wand2 className="w-5 h-5" />,
          title: "AI Co-Marketer",
          description: "Describe what you want in plain English. The AI generates full campaigns — copy, audience, channels, and scheduling.",
        },
        {
          icon: <Bot className="w-5 h-5" />,
          title: "Autonomous AI Agents",
          description: "AI agents that monitor customer signals and take action independently — escalate, nurture, or convert without human intervention.",
        },
        {
          icon: <Target className="w-5 h-5" />,
          title: "Propensity Scoring",
          description: "Predict which customers are most likely to buy, upgrade, or churn — using conversation signals as the primary predictor.",
        },
        {
          icon: <TrendingDown className="w-5 h-5" />,
          title: "Churn Prediction",
          description: "Identify at-risk customers before they leave. Sentiment shifts, complaint patterns, and silence signals are all tracked.",
        },
        {
          icon: <Brain className="w-5 h-5" />,
          title: "AI Decisioning Engine",
          description: "The engine evaluates every customer profile in real time and picks the optimal next action across all available channels.",
        },
        {
          icon: <Sparkles className="w-5 h-5" />,
          title: "Conversation Insights",
          description: "AI-generated summaries of customer conversations with key themes, trending objections, and competitive mentions surfaced automatically.",
        },
      ]}
      visualContent={
        <div className="bg-navy-light/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl glow-border">
          <div className="text-xs text-slate-400 mb-3 font-medium">AI Co-Marketer</div>
          <div className="space-y-3">
            <div className="bg-white/5 rounded-lg p-3 border border-white/5">
              <div className="text-[10px] text-slate-500 mb-1">You</div>
              <div className="text-xs text-slate-300">&quot;Create a win-back campaign for customers who haven&apos;t called in 30 days&quot;</div>
            </div>
            <div className="bg-brand/10 rounded-lg p-3 border border-brand/20">
              <div className="text-[10px] text-accent mb-1 font-medium">AI Co-Marketer</div>
              <div className="text-xs text-white leading-relaxed">
                Campaign: &quot;We Miss You&quot; — 3-step WhatsApp + Email sequence. 847 dormant customers targeted. Expected reactivation: 12-18%.
              </div>
              <div className="flex gap-2 mt-2">
                <span className="px-2 py-0.5 bg-brand/15 text-accent text-[10px] rounded-md">847 recipients</span>
                <span className="px-2 py-0.5 bg-accent/15 text-accent text-[10px] rounded-md">3 steps</span>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
