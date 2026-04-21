"use client";
import { SolutionPageLayout } from "@/components/SolutionPageLayout";
import { RefreshCw, Heart, Gift } from "lucide-react";

export default function RepeatPurchasePage() {
  return (
    <SolutionPageLayout
      eyebrow="Repeat Purchase"
      title={<>Turn one-time buyers into <span className="text-accent">loyal customers</span></>}
      subtitle="AI identifies the optimal moment and channel for the second purchase nudge — using purchase history, post-purchase call signals, and predictive LTV."
      metric="2.1x"
      metricLabel="repeat purchase&#10;rate increase"
      benefits={[
        { icon: <RefreshCw className="w-6 h-6" />, title: "Repurchase Prediction", desc: "AI predicts when each customer is most likely to reorder based on past behavior and conversation signals." },
        { icon: <Heart className="w-6 h-6" />, title: "Loyalty Triggers", desc: "High-LTV customers get automated VIP treatment — early access, personalized offers, and priority callbacks." },
        { icon: <Gift className="w-6 h-6" />, title: "Smart Nudges", desc: "The right product recommendation hits the right channel at the exact moment the customer is ready to buy again." },
      ]}
      steps={[
        { num: "1", title: "Analyze Patterns", desc: "AI studies purchase cycles, post-purchase call sentiment, and browsing behavior to predict reorder timing." },
        { num: "2", title: "Score & Segment", desc: "Customers are scored by repeat-purchase likelihood and segmented for targeted campaigns." },
        { num: "3", title: "Trigger Nudges", desc: "Personalized product recommendations and offers are sent via WhatsApp, email, or SMS at the optimal moment." },
      ]}
      features={[
        "Repurchase propensity scoring",
        "Purchase cycle analysis",
        "Product affinity mapping",
        "Automated reorder reminders",
        "Cross-sell recommendations",
        "LTV-based segmentation",
        "Multi-channel nudge campaigns",
        "Repeat purchase analytics",
      ]}
    />
  );
}
