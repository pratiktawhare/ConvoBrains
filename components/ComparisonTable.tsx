"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const traditionalItems = [
  "Tracks web clicks and page views",
  "Builds profiles from form fills",
  "Triggers based on behavior rules",
  "Every call starts from scratch",
  "Generic follow-up messages",
];

const convobrainsItems = [
  "Extracts intent from call transcripts",
  "Builds profiles from what customers say",
  "Triggers based on conversation signals",
  "Every agent sees the full call history",
  "Hyper-personalized next best action",
];

export function ComparisonTable() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Traditional CDP */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 rounded-2xl border border-white/10 p-6 md:p-8"
      >
        <div className="text-xs uppercase tracking-widest text-slate-500 mb-3 font-medium">
          Traditional CDP
        </div>
        <div className="space-y-4">
          {traditionalItems.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center shrink-0 mt-0.5">
                <X className="w-3 h-3 text-red-400" />
              </div>
              <span className="text-sm text-slate-400">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ConvoBrains */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-brand/10 rounded-2xl border border-brand/20 p-6 md:p-8 glow-border-strong"
      >
        <div className="text-xs uppercase tracking-widest text-accent mb-3 font-medium">
          ConvoBrains
        </div>
        <div className="space-y-4">
          {convobrainsItems.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-accent" />
              </div>
              <span className="text-sm text-white">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
