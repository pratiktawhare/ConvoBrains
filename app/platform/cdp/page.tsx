"use client";

import { PlatformFeaturePage } from "@/components/PlatformFeaturePage";
import {
  Users,
  Layers,
  BarChart3,
  Mic,
  Filter,
  Fingerprint,
} from "lucide-react";

export default function CDPPage() {
  return (
    <PlatformFeaturePage
      eyebrow="Customer Data Platform"
      title="One view of"
      titleAccent="every customer."
      subtitle="Unified profiles from voice, chat, web, and CRM data. Segmentation, behavioral analytics, RFM scoring, and composable CDP architecture — with conversation intelligence as the core data source."
      pills={[
        "One Customer View",
        "Segmentation",
        "Behavioral Analytics",
        "RFM Scoring",
        "Conversation Intelligence",
        "Identity Resolution",
      ]}
      features={[
        {
          icon: <Users className="w-5 h-5" />,
          title: "Unified Customer Profiles",
          description:
            "Aggregate data from calls, chats, web sessions, CRM, and transactions into a single golden record for every customer.",
        },
        {
          icon: <Mic className="w-5 h-5" />,
          title: "Conversation Intelligence",
          description:
            "Extract budget, intent, objections, and sentiment from every call transcript and chat log automatically.",
        },
        {
          icon: <Filter className="w-5 h-5" />,
          title: "Advanced Segmentation",
          description:
            "Build dynamic segments based on behavioral signals, conversation attributes, purchase history, and engagement scores.",
        },
        {
          icon: <BarChart3 className="w-5 h-5" />,
          title: "RFM Scoring",
          description:
            "Automatically score customers on Recency, Frequency, and Monetary value to identify your most valuable segments.",
        },
        {
          icon: <Fingerprint className="w-5 h-5" />,
          title: "Identity Resolution",
          description:
            "Match and merge customer records across channels using phone numbers, emails, device IDs, and behavioral fingerprints.",
        },
        {
          icon: <Layers className="w-5 h-5" />,
          title: "Composable Architecture",
          description:
            "Connect to any data warehouse, CRM, or messaging platform. ConvoBrains fits into your existing stack.",
        },
      ]}
      visualContent={
        <div className="bg-navy-light/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl glow-border">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand to-accent flex items-center justify-center text-white font-bold text-sm">
              AK
            </div>
            <div>
              <div className="text-white font-semibold text-sm">Anita Kumar</div>
              <div className="text-slate-400 text-xs">Score: 87 · High-Value Segment</div>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { src: "Voice", pct: 72 },
              { src: "Chat", pct: 58 },
              { src: "Web", pct: 85 },
              { src: "CRM", pct: 45 },
            ].map((d) => (
              <div key={d.src} className="flex items-center gap-2">
                <span className="text-[10px] text-slate-400 w-10">{d.src}</span>
                <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-brand to-accent rounded-full"
                    style={{ width: `${d.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
}
