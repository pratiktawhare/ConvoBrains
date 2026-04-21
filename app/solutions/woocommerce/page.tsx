"use client";
import { SolutionPageLayout } from "@/components/SolutionPageLayout";
import { Globe, BarChart3, Zap } from "lucide-react";

export default function WooCommercePage() {
  return (
    <SolutionPageLayout
      eyebrow="WooCommerce Integration"
      title={<>Turn WooCommerce data into <span className="text-accent">automated growth</span></>}
      subtitle="Connect WooCommerce events to conversation intelligence — recover carts, drive repeat purchases, and reduce support friction."
      metric="34%"
      metricLabel="reduction in cart&#10;abandonment"
      benefits={[
        { icon: <Globe className="w-6 h-6" />, title: "Event Sync", desc: "Orders, refunds, and product views flow into ConvoBrains in real time — no manual exports." },
        { icon: <BarChart3 className="w-6 h-6" />, title: "Smart Segmentation", desc: "Segment customers by purchase behavior, call sentiment, and engagement score for targeted campaigns." },
        { icon: <Zap className="w-6 h-6" />, title: "Automated Journeys", desc: "Trigger email, WhatsApp, or callback sequences based on cart status, order value, or churn risk." },
      ]}
      steps={[
        { num: "1", title: "Install Plugin", desc: "Add the ConvoBrains WooCommerce plugin and sync your store data instantly." },
        { num: "2", title: "Build Profiles", desc: "Customer profiles are enriched with order history, support calls, and browsing behavior." },
        { num: "3", title: "Activate Campaigns", desc: "Pre-built journeys for cart recovery, post-purchase engagement, and win-back go live in minutes." },
      ]}
      features={[
        "WooCommerce plugin integration",
        "Order & refund sync",
        "Cart abandonment triggers",
        "Post-purchase NPS tracking",
        "Revenue attribution",
        "Customer health scores",
        "Multi-channel campaign triggers",
        "Custom WooCommerce reports",
      ]}
    />
  );
}
