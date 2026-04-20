"use client";

import { motion } from "framer-motion";

export function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      className="relative w-full max-w-md mx-auto"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Main profile card */}
        <div className="bg-navy-light/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl glow-border">
          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand to-accent flex items-center justify-center text-white font-bold text-sm">
              PM
            </div>
            <div>
              <div className="text-white font-semibold text-sm">
                Priya Mehta
              </div>
              <div className="text-slate-400 text-xs">
                Session #284 · 6m 12s · Today, 5:10 PM
              </div>
            </div>
            <div className="ml-auto">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            </div>
          </div>

          {/* Call summary */}
          <div className="bg-white/5 rounded-xl p-4 mb-4 border border-white/5">
            <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-2 font-medium">
              Interaction Summary
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Browsed premium skincare (Vitamin C serum + sunscreen). Added serum to cart but didn't checkout. Checked reviews twice and return policy once. Price sensitivity observed.
            </p>
          </div>

          {/* Intent tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2.5 py-1 bg-brand/15 text-accent text-xs rounded-lg border border-brand/20 font-medium">
              Value: ₹1,899
            </span>
            <span className="px-2.5 py-1 bg-violet-500/15 text-violet-300 text-xs rounded-lg border border-violet-500/20 font-medium">
              Stage: Cart Abandonment
            </span>
            <span className="px-2.5 py-1 bg-amber-500/15 text-amber-300 text-xs rounded-lg border border-amber-500/20 font-medium">
              Objection: Price + Trust
            </span>
            <span className="px-2.5 py-1 bg-blue-500/15 text-blue-300 text-xs rounded-lg border border-blue-500/20 font-medium">
              Intent: High
            </span>
          </div>

          {/* Next best action */}
          <div className="bg-gradient-to-r from-brand/20 to-accent/10 rounded-xl p-3.5 border border-brand/20">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-brand/30 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-accent/80 font-medium">
                  Next Best Action
                </div>
                <div className="text-sm text-white font-medium">
                  Send WhatsApp message with 10% first-time discount + highlight &quot;easy returns&quot; and top reviews
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating mini-cards */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute -left-4 md:-left-16 top-8 bg-navy-light/90 backdrop-blur rounded-xl border border-white/10 p-3 shadow-lg"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand/20 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </div>
            <div>
              <div className="text-[10px] text-slate-400">Calls Analyzed</div>
              <div className="text-sm text-white font-semibold">2,847</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="absolute -right-4 md:-right-12 bottom-24 bg-navy-light/90 backdrop-blur rounded-xl border border-white/10 p-3 shadow-lg"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <div>
              <div className="text-[10px] text-slate-400">Conversion</div>
              <div className="text-sm text-accent font-semibold">+34%</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
