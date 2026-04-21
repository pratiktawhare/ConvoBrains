"use client";
import { SolutionPageLayout } from "@/components/SolutionPageLayout";
import { ShoppingCart, BarChart3, RefreshCw } from "lucide-react";

export default function ShopifyPage() {
  return (
    <SolutionPageLayout
      eyebrow="Shopify Integration"
      title={<>Unify your Shopify store with <span className="text-accent">conversation intelligence</span></>}
      subtitle="Connect Shopify order data with voice calls, WhatsApp, and web sessions — then auto-trigger win-back, upsell, and loyalty campaigns."
      metric="2.4x"
      metricLabel="increase in repeat&#10;purchase rate"
      benefits={[
        { icon: <ShoppingCart className="w-6 h-6" />, title: "Cart Recovery", desc: "Detect abandoned carts and trigger personalized WhatsApp or call follow-ups with the right offer at the right time." },
        { icon: <BarChart3 className="w-6 h-6" />, title: "Customer 360°", desc: "Merge Shopify order history with call transcripts, chat logs, and web behavior into one unified profile." },
        { icon: <RefreshCw className="w-6 h-6" />, title: "Loyalty Automation", desc: "Identify high-LTV customers and trigger automated loyalty flows — discounts, early access, or VIP callbacks." },
      ]}
      steps={[
        { num: "1", title: "Connect Shopify", desc: "One-click integration syncs orders, customers, and events in real time." },
        { num: "2", title: "Enrich Profiles", desc: "Every call, chat, and web visit is merged into unified customer profiles with intent scores." },
        { num: "3", title: "Automate Actions", desc: "AI triggers the right campaign — cart recovery, upsell, or win-back — on the right channel." },
      ]}
      features={[
        "Real-time order sync",
        "Abandoned cart detection",
        "Post-purchase call analysis",
        "WhatsApp campaign triggers",
        "Customer LTV scoring",
        "Repeat purchase prediction",
        "Unified customer timeline",
        "Pre-built Shopify dashboards",
      ]}
    />
  );
}
