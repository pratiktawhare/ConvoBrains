"use client";

import { PlatformFeaturePage } from "@/components/PlatformFeaturePage";
import { MousePointer, FlaskConical, Eye, BarChart3, MessageCircle, Gamepad2 } from "lucide-react";

export default function CROPage() {
  return (
    <PlatformFeaturePage
      eyebrow="Conversion Rate Optimization"
      title="Optimize"
      titleAccent="every touchpoint."
      subtitle="Heatmaps, A/B experiments, session replays, funnel analysis, NPS surveys, and gamification — all connected to your customer profiles for deeper conversion insights."
      pills={["Heatmaps", "A/B Testing", "Session Replay", "Funnel Analysis", "NPS", "Gamification"]}
      features={[
        {
          icon: <MousePointer className="w-5 h-5" />,
          title: "Heatmaps & Click Tracking",
          description: "Visualize where users click, scroll, and hover. Identify dead zones and optimize layouts for maximum engagement.",
        },
        {
          icon: <FlaskConical className="w-5 h-5" />,
          title: "A/B & Multivariate Testing",
          description: "Run experiments on any page element — headlines, CTAs, layouts — with statistical significance tracking built in.",
        },
        {
          icon: <Eye className="w-5 h-5" />,
          title: "Session Replay",
          description: "Watch real user sessions to understand friction points. Filter replays by segment, outcome, or conversation signals.",
        },
        {
          icon: <BarChart3 className="w-5 h-5" />,
          title: "Funnel Analysis",
          description: "Build and monitor conversion funnels across any touchpoint. See where users drop off and why.",
        },
        {
          icon: <MessageCircle className="w-5 h-5" />,
          title: "NPS & Surveys",
          description: "Deploy targeted surveys at key moments. Correlate NPS scores with conversation sentiment for the full picture.",
        },
        {
          icon: <Gamepad2 className="w-5 h-5" />,
          title: "Gamification",
          description: "Drive engagement with points, badges, and reward mechanics tied to your conversion goals.",
        },
      ]}
      visualContent={
        <div className="bg-navy-light/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl glow-border">
          <div className="text-xs text-slate-400 mb-3 font-medium">Funnel Conversion</div>
          <div className="space-y-3">
            {[
              { label: "Visitors", pct: 100, count: "12,400" },
              { label: "Engaged", pct: 68, count: "8,432" },
              { label: "Intent", pct: 42, count: "5,208" },
              { label: "Converted", pct: 24, count: "2,976" },
            ].map((step) => (
              <div key={step.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400">{step.label}</span>
                  <span className="text-white font-medium">{step.count}</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-brand to-accent rounded-full transition-all"
                    style={{ width: `${step.pct}%` }}
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
