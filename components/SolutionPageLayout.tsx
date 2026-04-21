import { SectionWrapper } from "@/components/SectionWrapper";
import { EyebrowTag } from "@/components/EyebrowTag";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/Button";
import { Check } from "lucide-react";
import type { ReactNode } from "react";

interface Benefit {
  icon: ReactNode;
  title: string;
  desc: string;
}

interface Step {
  num: string;
  title: string;
  desc: string;
}

interface SolutionPageProps {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  metric: string;
  metricLabel: string;
  benefits: Benefit[];
  steps: Step[];
  features: string[];
}

export function SolutionPageLayout({
  eyebrow,
  title,
  subtitle,
  metric,
  metricLabel,
  benefits,
  steps,
  features,
}: SolutionPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <EyebrowTag label={eyebrow} dark />
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-[1.1] mb-6 max-w-3xl mx-auto">
            {title}
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button href="/demo" variant="primary" size="lg">Book a Demo</Button>
            <Button href="/solutions" variant="ghost" size="lg" className="!border-white/30 !text-white hover:!bg-white/10">
              All Solutions
            </Button>
          </div>
          {/* Metric highlight */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-6 py-4">
            <span className="text-3xl font-heading font-bold text-accent">{metric}</span>
            <span className="text-sm text-slate-400 text-left">{metricLabel}</span>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <SectionWrapper bg="white">
        <ScrollReveal>
          <div className="text-center mb-12">
            <EyebrowTag label="Key Benefits" />
            <h2 className="text-3xl font-heading font-semibold text-navy">
              Why it works
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.1}>
              <div className="bg-neutral-light rounded-2xl border border-border p-6 h-full text-center">
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mx-auto mb-4">
                  {b.icon}
                </div>
                <h3 className="text-lg font-heading font-semibold text-navy mb-2">{b.title}</h3>
                <p className="text-sm text-neutral-mid leading-relaxed">{b.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* How it works */}
      <SectionWrapper bg="gray">
        <ScrollReveal>
          <div className="text-center mb-12">
            <EyebrowTag label="How It Works" />
            <h2 className="text-3xl font-heading font-semibold text-navy">
              Three simple steps
            </h2>
          </div>
        </ScrollReveal>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 0.1}>
                <div className="relative text-center">
                  <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center mx-auto mb-4 text-lg font-heading font-bold">
                    {s.num}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-navy mb-2">{s.title}</h3>
                  <p className="text-sm text-neutral-mid leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Features checklist */}
      <SectionWrapper bg="white">
        <ScrollReveal>
          <div className="text-center mb-10">
            <EyebrowTag label="Features Included" />
            <h2 className="text-3xl font-heading font-semibold text-navy">
              Everything you get
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3">
                <Check className="w-4 h-4 text-brand shrink-0" />
                <span className="text-sm text-navy">{f}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-gradient-to-br from-brand to-brand-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-semibold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Book a personalized demo and see how ConvoBrains drives results for your business.
            </p>
            <Button href="/demo" variant="primary" size="lg" className="!bg-white !text-brand-dark hover:!bg-white/90">
              Book a Demo
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
