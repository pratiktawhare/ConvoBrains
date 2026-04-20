"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { EyebrowTag } from "@/components/EyebrowTag";
import { ScrollReveal } from "@/components/ScrollReveal";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/Button";
import { Check, X } from "lucide-react";

interface IndustryData {
  name: string;
  tagline: string;
  hero: string;
  description: string;
  challenges: { title: string; description: string }[];
  solutions: { title: string; description: string }[];
  stats: { number: string; label: string }[];
}

export default function IndustryPageClient({ data }: { data: IndustryData }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <EyebrowTag label={data.name} dark />
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-[1.1] mb-6 max-w-3xl mx-auto">
            {data.hero}
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            {data.description}
          </p>
          <div className="flex gap-4 justify-center">
            <Button href="/demo" variant="primary" size="lg">
              Book a Demo
            </Button>
            <Button href="/industries" variant="ghost" size="lg">
              All Industries
            </Button>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <SectionWrapper bg="white">
        <ScrollReveal>
          <div className="text-center mb-14">
            <EyebrowTag label="The Challenge" />
            <h2 className="text-3xl md:text-[40px] font-heading font-semibold text-navy leading-tight">
              What {data.name.toLowerCase()} teams struggle with
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {data.challenges.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.1}>
              <div className="bg-red-50/50 rounded-2xl border border-red-100 p-6 h-full">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                  <X className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-navy mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-neutral-mid leading-relaxed">
                  {c.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Solutions */}
      <SectionWrapper bg="gray">
        <ScrollReveal>
          <div className="text-center mb-14">
            <EyebrowTag label="The Solution" />
            <h2 className="text-3xl md:text-[40px] font-heading font-semibold text-navy leading-tight">
              How ConvoBrains solves it
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {data.solutions.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl border border-brand/15 p-6 h-full shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-brand" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-navy mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-neutral-mid leading-relaxed">
                  {s.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Stats */}
      <SectionWrapper bg="dark">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-[40px] font-heading font-semibold text-white leading-tight">
              Results in {data.name.toLowerCase()}
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-3 gap-8">
          {data.stats.map((stat) => (
            <StatCard key={stat.label} number={stat.number} label={stat.label} />
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-gradient-to-br from-brand to-brand-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-semibold text-white mb-4">
              See ConvoBrains for {data.name}
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Get a personalized demo tailored to {data.name.toLowerCase()}{" "}
              workflows and use cases.
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
