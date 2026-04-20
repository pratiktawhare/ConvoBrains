"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, TrendingUp, GitBranch, Sparkles } from "lucide-react";
import { FeaturePill } from "./FeaturePill";

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  headline: string;
  body: string;
  pills: string[];
}

const tabs: Tab[] = [
  {
    id: "intelligence",
    label: "Intelligence",
    icon: <Database className="w-4 h-4" />,
    headline: "Understand every customer, from every source",
    body: "ConvoBrains unifies data from voice calls, live chat, web sessions, mobile apps, email, and CRM records into a single persistent customer profile. Our Conversation Intelligence layer adds a dimension no other CDP has — the intent, emotion, and signals that live inside what customers actually say.",
    pills: [
      "One Customer View",
      "RFM Scoring",
      "Segmentation",
      "Identity Resolution",
      "Behavioral Analytics",
      "Predictive Scoring",
      "Composable CDP",
      "Conversation Intelligence ★",
    ],
  },
  {
    id: "optimization",
    label: "Optimization",
    icon: <TrendingUp className="w-4 h-4" />,
    headline: "Remove friction. Maximize every touchpoint.",
    body: "Continuously monitor where users drop off, run experiments to fix it, and deploy personalized nudges — all without engineering tickets. Every insight connects back to your customer profiles so you know not just what broke, but who it broke for.",
    pills: [
      "Heatmaps",
      "Session Replay",
      "A/B Experiments",
      "Funnel Analysis",
      "Cohort Analysis",
      "Attribution",
      "Nudges & Walkthroughs",
      "NPS & Surveys",
      "Gamification",
      "Personalization",
    ],
  },
  {
    id: "engagement",
    label: "Engagement",
    icon: <GitBranch className="w-4 h-4" />,
    headline: "Reach every customer, on every channel, at the right moment",
    body: "Orchestrate journeys across WhatsApp, email, SMS, push, in-app, and web — triggered by any signal: a web event, a campaign click, a CRM update, or a conversation signal from a call. Every message is personalized to the full profile, not just the last click.",
    pills: [
      "Journey Orchestration",
      "Cross-Channel Campaigns",
      "WhatsApp Marketing",
      "Email Automation",
      "SMS & Push",
      "In-App Messaging",
      "Campaign Personalisation",
      "Win-back Flows",
      "Referral Programs",
      "Loyalty & Rewards",
    ],
  },
  {
    id: "ai",
    label: "Agentic AI",
    icon: <Sparkles className="w-4 h-4" />,
    headline: "AI that understands, decides, and acts — autonomously",
    body: "Ask questions in plain language and get instant insights. Generate full campaigns from a sentence. Let AI agents monitor, segment, and execute while your team focuses on strategy. ConvoBrains AI is fed by every data source — including the conversations that other platforms miss.",
    pills: [
      "AI Co-Marketer",
      "Natural Language Insights",
      "AI Agents",
      "Autonomous Campaign Execution",
      "Propensity Scoring",
      "Churn Prediction",
      "Lead Scoring",
      "AI Decisioning",
      "Predictive Segments",
      "1:1 Lifecycle Optimization",
    ],
  },
];

function TabVisual({ tabId }: { tabId: string }) {
  if (tabId === "intelligence") {
    return (
      <div className="bg-neutral-light rounded-xl border border-border p-5 space-y-4">
        {/* Profile header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand to-accent flex items-center justify-center text-white font-bold text-xs">
            AK
          </div>
          <div>
            <div className="text-sm font-semibold text-navy">Anita Kumar</div>
            <div className="text-xs text-neutral-mid">Score: 87 · Segment: High-Value</div>
          </div>
          <div className="ml-auto px-2 py-0.5 bg-brand/10 text-brand text-[10px] rounded-full font-medium">
            Live
          </div>
        </div>

        {/* Data sources feeding in */}
        <div className="space-y-2">
          {[
            { src: "Voice Calls", pct: 78, color: "from-brand to-accent" },
            { src: "Web Sessions", pct: 85, color: "from-blue-400 to-blue-500" },
            { src: "Email", pct: 62, color: "from-rose-400 to-rose-500" },
            { src: "CRM", pct: 54, color: "from-slate-400 to-slate-500" },
            { src: "WhatsApp", pct: 91, color: "from-emerald-400 to-emerald-500" },
          ].map((d) => (
            <div key={d.src} className="flex items-center gap-2">
              <span className="text-[10px] text-slate-500 w-20 shrink-0">{d.src}</span>
              <div className="flex-1 h-2 bg-white rounded-full overflow-hidden border border-border">
                <div
                  className={`h-full bg-gradient-to-r ${d.color} rounded-full`}
                  style={{ width: `${d.pct}%` }}
                />
              </div>
              <span className="text-[10px] text-slate-400 w-7 text-right">{d.pct}%</span>
            </div>
          ))}
        </div>

        {/* Predicted action */}
        <div className="bg-gradient-to-r from-brand/8 to-accent/5 rounded-lg p-3 border border-brand/15">
          <div className="text-[10px] text-brand font-medium mb-1">AI Insight</div>
          <div className="text-xs text-navy">
            High propensity to purchase. Intent signal from last call: "ready to close this month."
          </div>
        </div>
      </div>
    );
  }

  if (tabId === "optimization") {
    return (
      <div className="bg-neutral-light rounded-xl border border-border p-5 space-y-3">
        <div className="text-xs font-medium text-navy">A/B Experiment — Checkout Flow</div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Variant A", conv: "3.2%", visitors: "4,821", winner: false },
            { label: "Variant B ★", conv: "5.8%", visitors: "4,756", winner: true },
          ].map((v) => (
            <div
              key={v.label}
              className={`rounded-lg p-3 border ${v.winner ? "border-brand/30 bg-brand/5" : "border-border bg-white"}`}
            >
              <div className={`text-[10px] font-semibold mb-2 ${v.winner ? "text-brand" : "text-slate-400"}`}>
                {v.label}
              </div>
              <div className={`text-xl font-bold font-heading ${v.winner ? "text-brand" : "text-navy"}`}>
                {v.conv}
              </div>
              <div className="text-[10px] text-slate-400">conversion</div>
              {v.winner && (
                <div className="mt-2 px-2 py-0.5 bg-brand/10 text-brand text-[10px] rounded font-medium inline-block">
                  +81% uplift
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-1.5">
          {[
            { label: "Visitors", pct: 100 },
            { label: "Add to Cart", pct: 68 },
            { label: "Checkout", pct: 42 },
            { label: "Converted", pct: 28 },
          ].map((step) => (
            <div key={step.label} className="flex items-center gap-2">
              <span className="text-[10px] text-slate-500 w-16">{step.label}</span>
              <div className="flex-1 h-5 bg-white rounded border border-border overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-brand to-accent rounded flex items-center justify-end pr-2"
                  style={{ width: `${step.pct}%` }}
                >
                  <span className="text-[10px] text-white font-medium">{step.pct}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (tabId === "engagement") {
    return (
      <div className="bg-neutral-light rounded-xl border border-border p-5">
        <div className="text-xs font-medium text-navy mb-3">Journey Builder — Win-back Flow</div>
        <div className="flex flex-col items-center gap-1">
          {[
            { label: "🔔 Call Signal: High Intent", color: "bg-brand", tag: "Trigger" },
            { label: "✓ Update Customer Profile", color: "bg-slate-400", tag: null },
            { label: "💬 Send WhatsApp offer", color: "bg-emerald-500", tag: null },
            { label: "⏱ Wait 24 hours", color: "bg-slate-300", tag: null },
            { label: "📧 If no reply → Email sequence", color: "bg-rose-400", tag: null },
            { label: "📞 If opened → Schedule callback", color: "bg-accent", tag: "Convert" },
          ].map((node, i) => (
            <div key={node.label} className="flex flex-col items-center w-full">
              <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 border border-border shadow-sm w-full">
                <div className={`w-2 h-2 rounded-full shrink-0 ${node.color}`} />
                <span className="text-xs text-navy flex-1">{node.label}</span>
                {node.tag && (
                  <span className="text-[10px] px-1.5 py-0.5 bg-brand/10 text-brand rounded font-medium">
                    {node.tag}
                  </span>
                )}
              </div>
              {i < 5 && <div className="w-px h-3 bg-border" />}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Agentic AI tab
  return (
    <div className="bg-neutral-light rounded-xl border border-border p-5">
      <div className="text-xs font-medium text-navy mb-3">AI Co-Marketer</div>
      <div className="space-y-3">
        <div className="bg-white rounded-lg p-3 border border-border">
          <div className="text-[10px] text-slate-400 mb-1">You</div>
          <div className="text-xs text-navy">
            &quot;Find all real estate leads who mentioned budget &gt; 50L and didn&apos;t convert last month&quot;
          </div>
        </div>
        <div className="bg-gradient-to-r from-brand/5 to-accent/5 rounded-lg p-3 border border-brand/15">
          <div className="text-[10px] text-brand mb-1 font-medium">AI Co-Marketer</div>
          <div className="text-xs text-navy leading-relaxed">
            Found 847 contacts matching criteria. Propensity score: High. Recommended action: personalized WhatsApp + callback sequence.
          </div>
          <div className="flex gap-2 mt-2 flex-wrap">
            <span className="px-2 py-0.5 bg-brand/10 text-brand text-[10px] rounded-md font-medium">847 contacts</span>
            <span className="px-2 py-0.5 bg-accent/10 text-brand-dark text-[10px] rounded-md font-medium">High propensity</span>
            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] rounded-md font-medium cursor-pointer hover:bg-emerald-200 transition-colors">Launch campaign →</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Churn Risk", val: "23 users", color: "text-red-500" },
            { label: "Upsell Ready", val: "156 users", color: "text-brand" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-lg p-2.5 border border-border text-center">
              <div className={`text-sm font-bold ${stat.color}`}>{stat.val}</div>
              <div className="text-[10px] text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PlatformTabs() {
  const [activeTab, setActiveTab] = useState("intelligence");
  const activeData = tabs.find((t) => t.id === activeTab)!;

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex overflow-x-auto gap-1 mb-10 border-b border-border pb-0 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-5 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-all cursor-pointer ${
              activeTab === tab.id
                ? "text-brand border-brand"
                : "text-neutral-mid border-transparent hover:text-navy hover:border-border"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-10 items-start"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-navy mb-4">
              {activeData.headline}
            </h3>
            <p className="text-neutral-mid leading-relaxed mb-6">
              {activeData.body}
            </p>
            <div className="flex flex-wrap gap-2">
              {activeData.pills.map((pill) => (
                <FeaturePill
                  key={pill}
                  label={pill}
                />
              ))}
            </div>
          </div>
          <div>
            <TabVisual tabId={activeTab} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
