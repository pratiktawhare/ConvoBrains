"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { EyebrowTag } from "@/components/EyebrowTag";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/Button";
import { X } from "lucide-react";
import {
  type Industry,
  type CdpType,
  type Stage,
  type StageTag,
  badgeColors,
  tagColors,
  getIndustriesForCdpType,
} from "@/lib/explorerData";
import { useRouter } from "next/navigation";

// ── Props ──

interface Props {
  industry: Industry;
  cdp: CdpType;
  cdpTypeKey: string;
  currentSlug: string;
}

// ── Tag label for nonvoice ──

function getTagLabel(tag: StageTag, variant: string, originalLabel: string) {
  if (tag === "tk" && variant === "nonvoice") return "Core activation";
  return originalLabel;
}

// ── Main component ──

export default function IndustryPageClient({
  industry,
  cdp,
  cdpTypeKey,
  currentSlug,
}: Props) {
  const router = useRouter();

  // Determine available views
  const hasSteps = !!industry.steps?.length;
  const hasLapsed = !!industry.lapsed?.length;

  type ViewType = "journey" | "returning" | "lapsed";
  const [activeView, setActiveView] = useState<ViewType>("journey");
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  // Get stages for current view
  function getStages(): Stage[] {
    if (activeView === "lapsed") return industry.lapsed || [];
    // Both "journey" and "returning" show the main steps
    return industry.steps || [];
  }

  const stages = getStages();

  // Reset active stage when switching views
  useEffect(() => {
    setActiveStage(null);
  }, [activeView]);

  // Scroll to detail panel on open
  useEffect(() => {
    if (activeStage !== null && detailRef.current) {
      setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 100);
    }
  }, [activeStage]);

  // Badge style
  const badge = badgeColors[cdp.badgeVariant];

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <EyebrowTag label={industry.name} dark />
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-[1.1] mb-6 max-w-3xl mx-auto">
            {industry.tagline}
          </h1>

          <div className="flex gap-4 justify-center">
            <Button href="/demo" variant="primary" size="lg">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* ─── Touchpoints ─── */}
      <div className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="mb-2">
            <span
              className="text-[10px] font-semibold uppercase tracking-widest"
              style={{ color: "#1E40AF" }}
            >
              Key touchpoints
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {industry.touchpoints.map((tp) => (
              <span
                key={tp}
                className="px-3 py-1.5 rounded-full text-xs font-medium"
                style={{
                  background: "#DBEAFE",
                  color: "#1E40AF",
                }}
              >
                {tp}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <ScrollReveal>
            {/* Problem callout */}
            <div
              className="rounded-xl p-6 md:p-8 mb-10"
              style={{
                background: "#FEF3C7",
                borderLeft: "4px solid #D97706",
              }}
            >
              <span
                className="text-[10px] font-bold uppercase tracking-widest block mb-3"
                style={{ color: "#D97706" }}
              >
                The business problem
              </span>
              <p
                className="text-sm md:text-[15px] font-semibold leading-relaxed mb-2"
                style={{ color: "#0F172A" }}
              >
                {industry.meta.problem}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#92400E" }}>
                {industry.meta.problemSub}
              </p>
            </div>

            {/* Stat grid */}
            <div className="mb-4">
              <span
                className="text-[10px] font-bold uppercase tracking-widest"
                style={{ color: "#64748B" }}
              >
                Where the revenue is leaking — right now
              </span>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {industry.meta.stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5"
                  style={{
                    background: "#fff",
                    border: "1px solid #E2E8F0",
                  }}
                >
                  <div
                    className="text-2xl md:text-3xl font-heading font-bold mb-2"
                    style={{ color: "#1E40AF" }}
                  >
                    {stat.num}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#1E40AF" }}>
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ─── Journey explorer ─── */}
      <SectionWrapper bg="white">
        <ScrollReveal>
          {/* Section header */}
          <div className="text-center mb-10">
            <EyebrowTag label="Customer journey" />
            <h2 className="text-3xl md:text-[40px] font-heading font-semibold leading-tight"
              style={{ color: "#0F172A" }}>
              Stage-by-stage breakdown
            </h2>
            <p className="text-sm mt-3 max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              Click any stage to see the problem, what ConvoBrains does differently, a real example, and the opening line you can use with clients.
            </p>
          </div>

          {/* View toggle */}
          {(hasSteps || hasLapsed) && (
            <div className="flex justify-center mb-10">
              <div
                className="inline-flex rounded-lg p-1 gap-1"
                style={{ background: "#E2E8F0" }}
              >
                <button
                  onClick={() => setActiveView("journey")}
                  className="px-4 py-2 rounded-md text-sm font-medium transition-all"
                  style={{
                    background: activeView === "journey" ? "#fff" : "transparent",
                    color: activeView === "journey" ? "#1a1a1a" : "#666",
                    boxShadow: activeView === "journey" ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
                  }}
                >
                  Customer journey
                </button>
                {hasLapsed && (
                  <button
                    onClick={() => setActiveView("lapsed")}
                    className="px-4 py-2 rounded-md text-sm font-medium transition-all"
                    style={{
                      background: activeView === "lapsed" ? "#0F172A" : "transparent",
                      color: activeView === "lapsed" ? "#fff" : "#64748B",
                      border: activeView === "lapsed" ? "1px solid #0F172A" : "1px solid transparent",
                    }}
                  >
                    Lapsed / reactivation
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Snake journey */}
          {stages.length === 0 ? (
            <div
              className="text-center py-12 rounded-xl"
              style={{ background: "#F8FAFC", color: "#666" }}
            >
              No stages defined for this view.
            </div>
          ) : (
            <div className="space-y-3">
              {(() => {
                const rows: Stage[][] = [];
                for (let i = 0; i < stages.length; i += 3) {
                  rows.push(stages.slice(i, i + 3));
                }

                return rows.map((row, rowIdx) => {
                  const isReversed = rowIdx % 2 === 1;

                  return (
                    <div key={rowIdx}>
                      {/* Connector arrow between rows */}
                      {rowIdx > 0 && (
                        <div
                          className="py-2"
                          style={{
                            display: "flex",
                            justifyContent: isReversed ? "flex-end" : "flex-start",
                            paddingLeft: isReversed ? 0 : 48,
                            paddingRight: isReversed ? 48 : 0,
                          }}
                        >
                          <div
                            className="w-px h-8"
                            style={{ background: "#E2E8F0" }}
                          />
                        </div>
                      )}

                      {/* Row of cards */}
                      <div
                        className="grid gap-4"
                        style={{
                          gridTemplateColumns: `repeat(${Math.min(row.length, 3)}, 1fr)`,
                          direction: isReversed ? "rtl" : "ltr",
                        }}
                      >
                        {row.map((stage, colIdx) => {
                          const globalIdx = rowIdx * 3 + colIdx;
                          const isActive = activeStage === globalIdx;
                          const tc = tagColors[stage.tag];

                          return (
                            <button
                              key={globalIdx}
                              onClick={() =>
                                setActiveStage(isActive ? null : globalIdx)
                              }
                              className="text-left rounded-xl p-5 transition-all duration-200 group"
                              style={{
                                direction: "ltr",
                                background: isActive ? "#F8FAFC" : "#fff",
                                border: `1.5px solid ${isActive ? "#0F7AE5" : "#E2E8F0"}`,
                                boxShadow: isActive
                                  ? "0 0 0 3px rgba(29,158,117,0.1)"
                                  : "none",
                                cursor: "pointer",
                              }}
                            >
                              {/* Step number */}
                              <div className="flex items-start justify-between mb-3">
                                <span
                                  className="text-[10px] font-semibold"
                                  style={{ color: "#94A3B8" }}
                                >
                                  {String(globalIdx + 1).padStart(2, "0")}
                                </span>
                                <span
                                  className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold"
                                  style={{ background: tc.bg, color: tc.text }}
                                >
                                  {getTagLabel(stage.tag, cdp.badgeVariant, stage.tl)}
                                </span>
                              </div>

                              {/* Title */}
                              <h4
                                className="text-sm font-heading font-semibold mb-1"
                                style={{ color: "#0F172A" }}
                              >
                                {stage.t}
                              </h4>

                              {/* Subtitle */}
                              <p className="text-xs leading-relaxed" style={{ color: "#64748B" }}>
                                {stage.s}
                              </p>

                              {/* Expand hint */}
                              <div
                                className="mt-3 text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{ color: "#0F7AE5" }}
                              >
                                {isActive ? "Click to close" : "Click to explore →"}
                              </div>
                            </button>
                          );
                        })}

                        {/* Fill empty grid cells for incomplete rows */}
                        {row.length < 3 &&
                          Array.from({ length: 3 - row.length }).map((_, i) => (
                            <div key={`empty-${i}`} style={{ direction: "ltr" }} />
                          ))}
                      </div>
                    </div>
                  );
                });
              })()}
            </div>
          )}

          {/* ─── Detail panel ─── */}
          <AnimatePresence>
            {activeStage !== null && stages[activeStage] && (
              <motion.div
                ref={detailRef}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="mt-8 rounded-xl overflow-hidden"
                style={{
                  background: "#fff",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
                }}
              >
                {(() => {
                  const stage = stages[activeStage];
                  return (
                    <>
                      {/* Header */}
                      <div
                        className="flex items-center justify-between px-6 py-4"
                        style={{ borderBottom: "1px solid #E2E8F0" }}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className="text-xs font-semibold px-2.5 py-1 rounded-md"
                            style={{
                              background: tagColors[stage.tag].bg,
                              color: tagColors[stage.tag].text,
                            }}
                          >
                            {getTagLabel(stage.tag, cdp.badgeVariant, stage.tl)}
                          </span>
                          <h3
                            className="font-heading font-semibold text-lg"
                            style={{ color: "#0F172A" }}
                          >
                            {stage.t}
                          </h3>
                        </div>
                        <button
                          onClick={() => setActiveStage(null)}
                          className="p-1.5 rounded-md hover:bg-neutral-100 transition-colors"
                        >
                          <X className="w-4 h-4" style={{ color: "#64748B" }} />
                        </button>
                      </div>

                      {/* Two-column: Problem vs Solution */}
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="p-6" style={{ borderRight: "1px solid #E2E8F0" }}>
                          <span
                            className="text-[10px] font-bold uppercase tracking-widest block mb-3"
                            style={{ color: "#92400E" }}
                          >
                            The problem today
                          </span>
                          <p className="text-sm leading-relaxed" style={{ color: "#0F172A" }}>
                            {stage.prob}
                          </p>
                        </div>
                        <div className="p-6">
                          <span
                            className="text-[10px] font-bold uppercase tracking-widest block mb-3"
                            style={{ color: "#1E40AF" }}
                          >
                            What we do
                          </span>
                          <p className="text-sm leading-relaxed" style={{ color: "#0F172A" }}>
                            {stage.does}
                          </p>
                        </div>
                      </div>

                      {/* Example strip */}
                      <div
                        className="px-6 py-4 flex items-start gap-3"
                        style={{ background: "#DBEAFE" }}
                      >
                        <span
                          className="shrink-0 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider"
                          style={{ background: "#0C4A6E", color: "#fff" }}
                        >
                          Example
                        </span>
                        <p className="text-sm leading-relaxed" style={{ color: "#1E40AF" }}>
                          {stage.ex}
                        </p>
                      </div>

                      {/* Opening line strip */}
                      <div
                        className="px-6 py-4"
                        style={{ borderLeft: "4px solid #0F7AE5", margin: "0 24px 24px 24px" }}
                      >
                        <span
                          className="text-[10px] font-bold uppercase tracking-widest block mb-2"
                          style={{ color: "#0F7AE5" }}
                        >
                          Opening line to client
                        </span>
                        <p
                          className="text-sm italic leading-relaxed"
                          style={{ color: "#0F172A" }}
                        >
                          {stage.sell}
                        </p>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollReveal>
      </SectionWrapper>

      {/* ─── CTA ─── */}
      <section className="bg-gradient-to-br from-brand to-brand-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-semibold text-white mb-4">
              See ConvoBrains for {industry.name}
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Get a personalised demo tailored to {industry.name.toLowerCase()} workflows and use cases.
            </p>
            <Button
              href="/demo"
              variant="primary"
              size="lg"
              className="!bg-white !text-brand-dark hover:!bg-white/90"
            >
              Book a Demo
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
