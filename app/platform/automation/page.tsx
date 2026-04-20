"use client";

import { PlatformFeaturePage } from "@/components/PlatformFeaturePage";
import { GitBranch, MessageSquare, Mail, Award, RefreshCcw, Webhook } from "lucide-react";

export default function AutomationPage() {
  return (
    <PlatformFeaturePage
      eyebrow="Marketing Automation"
      title="Journeys triggered"
      titleAccent="by intent."
      subtitle="Cross-channel campaign orchestration across WhatsApp, SMS, email, and push — where any journey can be triggered by a conversation signal, not just a click."
      pills={["Journey Builder", "WhatsApp Campaigns", "Email Automation", "Loyalty Programs", "Win-back Flows", "Webhooks"]}
      features={[
        {
          icon: <GitBranch className="w-5 h-5" />,
          title: "Visual Journey Builder",
          description: "Drag-and-drop campaign builder with branching logic, wait steps, and conditional triggers based on conversation signals.",
        },
        {
          icon: <MessageSquare className="w-5 h-5" />,
          title: "WhatsApp Campaigns",
          description: "Send personalized WhatsApp messages at scale. Use templates, rich media, and conversation context for higher engagement.",
        },
        {
          icon: <Mail className="w-5 h-5" />,
          title: "Email Automation",
          description: "Build and automate email sequences with dynamic content personalized by conversation history and customer profile data.",
        },
        {
          icon: <Award className="w-5 h-5" />,
          title: "Loyalty Programs",
          description: "Create point-based loyalty programs that reward engagement across channels — including call interactions.",
        },
        {
          icon: <RefreshCcw className="w-5 h-5" />,
          title: "Win-back Flows",
          description: "Automatically re-engage dormant customers with tailored campaigns triggered by inactivity or churn signals.",
        },
        {
          icon: <Webhook className="w-5 h-5" />,
          title: "Webhook & API Actions",
          description: "Trigger any external action via webhooks — update CRM records, fire Slack notifications, or call custom APIs.",
        },
      ]}
      visualContent={
        <div className="bg-navy-light/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl glow-border">
          <div className="text-xs text-slate-400 mb-3 font-medium">Journey Flow</div>
          <div className="flex flex-col items-center gap-1">
            {[
              { label: "Call Received", color: "bg-brand" },
              { label: "Intent: High Budget", color: "bg-accent" },
              { label: "Wait 2 Hours", color: "bg-slate-400" },
              { label: "Send WhatsApp", color: "bg-brand" },
              { label: "If Opened → Schedule Call", color: "bg-accent" },
            ].map((node, i) => (
              <div key={node.label} className="flex flex-col items-center">
                <div className="flex items-center gap-2 bg-white/5 rounded-lg px-4 py-2.5 border border-white/10">
                  <div className={`w-2 h-2 rounded-full ${node.color}`} />
                  <span className="text-xs text-white">{node.label}</span>
                </div>
                {i < 4 && <div className="w-px h-4 bg-white/10" />}
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
}
