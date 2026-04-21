"use client";
import { SolutionPageLayout } from "@/components/SolutionPageLayout";
import { Settings, Users, Target } from "lucide-react";

export default function MagentoPage() {
  return (
    <SolutionPageLayout
      eyebrow="Magento Integration"
      title={<>Enterprise e-commerce meets <span className="text-accent">AI decisioning</span></>}
      subtitle="Connect Magento's enterprise commerce data with conversation signals for large-scale personalization, loyalty, and churn prevention."
      metric="3x"
      metricLabel="faster campaign&#10;deployment"
      benefits={[
        { icon: <Settings className="w-6 h-6" />, title: "Enterprise Scale", desc: "Handle millions of SKUs and customer records with real-time sync and zero performance impact." },
        { icon: <Users className="w-6 h-6" />, title: "Advanced Segmentation", desc: "Combine Magento purchase data with call transcripts and chat logs for hyper-granular audience segments." },
        { icon: <Target className="w-6 h-6" />, title: "Personalization Engine", desc: "AI picks the right product, offer, and channel for each customer based on conversation and purchase signals." },
      ]}
      steps={[
        { num: "1", title: "Connect Magento", desc: "API integration syncs catalog, orders, and customer data bidirectionally." },
        { num: "2", title: "Unify Data", desc: "Magento records merge with voice, chat, and web data into 360° customer profiles." },
        { num: "3", title: "Personalize at Scale", desc: "AI-driven campaigns run across email, WhatsApp, SMS, and callbacks — tailored to each customer." },
      ]}
      features={[
        "Bidirectional API sync",
        "Multi-store support",
        "Catalog-aware recommendations",
        "B2B & B2C workflows",
        "Advanced RFM scoring",
        "Bulk campaign orchestration",
        "Custom attribute mapping",
        "Enterprise SLA & support",
      ]}
    />
  );
}
