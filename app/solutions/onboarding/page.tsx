"use client";
import { SolutionPageLayout } from "@/components/SolutionPageLayout";
import { UserCheck, Clock, Lightbulb } from "lucide-react";

export default function OnboardingPage() {
  return (
    <SolutionPageLayout
      eyebrow="Onboarding Acceleration"
      title={<>Get customers to value <span className="text-accent">in days, not weeks</span></>}
      subtitle="Onboarding call signals identify hesitation points and knowledge gaps — triggering targeted nudges, walkthroughs, and check-in sequences to accelerate activation."
      metric="56%"
      metricLabel="faster time&#10;to activation"
      benefits={[
        { icon: <UserCheck className="w-6 h-6" />, title: "Activation Tracking", desc: "Monitor which onboarding milestones each customer has hit — and which they're stuck on — in real time." },
        { icon: <Clock className="w-6 h-6" />, title: "Early Intervention", desc: "AI detects confusion or hesitation in onboarding calls and triggers help content or a specialist callback." },
        { icon: <Lightbulb className="w-6 h-6" />, title: "Guided Journeys", desc: "Automated onboarding sequences adapt based on customer behavior — skipping steps they've completed and reinforcing gaps." },
      ]}
      steps={[
        { num: "1", title: "Track Milestones", desc: "Define activation milestones and track progress for every new customer automatically." },
        { num: "2", title: "Detect Friction", desc: "AI analyzes onboarding calls and product usage to identify where customers get stuck." },
        { num: "3", title: "Nudge to Value", desc: "Targeted nudges — tutorials, check-in calls, or tips — fire automatically to move customers forward." },
      ]}
      features={[
        "Milestone-based tracking",
        "Onboarding call analysis",
        "Hesitation point detection",
        "Automated check-in sequences",
        "Adaptive onboarding flows",
        "Time-to-value analytics",
        "Customer health scoring",
        "Onboarding success dashboard",
      ]}
    />
  );
}
