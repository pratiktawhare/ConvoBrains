"use client";

import { InlineWidget } from "react-calendly";
import { Check, Clock, Video, CalendarCheck } from "lucide-react";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL!;

const bulletPoints = [
  "Live walkthrough tailored to your industry",
  "See the customer journey explorer in action",
  "Real examples from your vertical — not a generic pitch",
  "No commitment, no sales pressure",
];

const trustPoints = [
  { icon: <CalendarCheck className="w-4 h-4" />, text: "Typically confirmed within a few minutes" },
  { icon: <Video className="w-4 h-4" />, text: "Google Meet link sent automatically" },
  { icon: <Clock className="w-4 h-4" />, text: "30 minutes, no prep needed on your side" },
];

export default function DemoClient() {
  return (
    <section className="bg-white pt-28 pb-20 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="py-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#1D9E75]/10 text-[#1D9E75] mb-5">
              Book a Demo
            </span>

            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-navy leading-tight mb-4">
              See ConvoBrains in 30&nbsp;minutes
            </h1>

            <p className="text-neutral-mid leading-relaxed mb-8">
              Book a live demo and we&apos;ll walk you through how ConvoBrains
              would work for your industry — with real examples from your use
              case.
            </p>

            {/* Bullet points */}
            <ul className="space-y-3 mb-8">
              {bulletPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#1D9E75] shrink-0 mt-0.5" />
                  <span className="text-sm text-navy">{point}</span>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="border-t border-border mb-6" />

            {/* Trust section */}
            <ul className="space-y-2.5">
              {trustPoints.map((tp) => (
                <li key={tp.text} className="flex items-center gap-2.5">
                  <span className="text-[#1D9E75]">{tp.icon}</span>
                  <span className="text-xs text-neutral-mid">{tp.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — Calendly */}
          <div
            className="rounded-2xl overflow-hidden border border-border"
            style={{ minHeight: 700 }}
          >
            <InlineWidget
              url={CALENDLY_URL}
              styles={{ height: "700px", width: "100%" }}
              pageSettings={{
                backgroundColor: "ffffff",
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: "1D9E75",
                textColor: "1a1a1a",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
