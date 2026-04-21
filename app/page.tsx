"use client";

import {
  Mic, User, Zap, AlertTriangle, PhoneOff, Clock,
  Globe, Smartphone, Mail, MessageSquare, ShoppingCart,
  Database, ArrowRight, Brain, Target, Star
} from "lucide-react";
import { Button } from "@/components/Button";
import { SectionWrapper } from "@/components/SectionWrapper";
import { EyebrowTag } from "@/components/EyebrowTag";
import { IndustryCard } from "@/components/IndustryCard";
import { HeroVisual } from "@/components/HeroVisual";
import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";

const industries = [
  { industry: "Real Estate", tagline: "From start to site visit to booking", href: "/industries/real-estate", slug: "real-estate" },
  { industry: "Banking", tagline: "From service call to cross-sell to renewal", href: "/industries/banking", slug: "banking" },
  { industry: "Telecom", tagline: "From complaint to upsell to loyalty", href: "/industries/telecom", slug: "telecom" },
  { industry: "Insurance", tagline: "From query to policy to renewal", href: "/industries/insurance", slug: "insurance" },
  { industry: "Healthcare", tagline: "From appointment to follow-up to retention", href: "/industries/healthcare", slug: "healthcare" },
  { industry: "Automotive", tagline: "From showroom to service to upgrade", href: "/industries/auto", slug: "auto" },
  { industry: "eCommerce", tagline: "From abandonment to repeat purchase", href: "/industries/ecommerce", slug: "ecommerce" },
  { industry: "Subscription Boxes", tagline: "From skip signal to retention", href: "/industries/subbox", slug: "subbox" },
  { industry: "Beauty & Care", tagline: "From first purchase to replenishment", href: "/industries/beauty", slug: "beauty" },
  { industry: "Food Delivery", tagline: "From craving to reorder to win-back", href: "/industries/food", slug: "food" },
  { industry: "EdTech", tagline: "From enrolment to completion", href: "/industries/edtech", slug: "edtech" },
  { industry: "Retail", tagline: "From browse to recovery to winback", href: "/industries/retail", slug: "retail" },
  { industry: "SaaS", tagline: "From trial to activation to expansion", href: "/industries/saas", slug: "saas" },
  { industry: "Mutual Funds", tagline: "From onboarding to portfolio growth", href: "/industries/bfsi", slug: "bfsi" },
  { industry: "Omnichannel Retail", tagline: "From store visit to loyalty to win-back", href: "/industries/omnichannel", slug: "omnichannel" },
  { industry: "Travel", tagline: "From booking to stay to re-booking", href: "/industries/travel", slug: "travel" },
  { industry: "Fitness", tagline: "From onboarding to renewal", href: "/industries/fitness", slug: "fitness" },
  { industry: "Higher Education", tagline: "From enquiry to enrolment", href: "/industries/highered", slug: "highered" },
];

const dataSources = [
  { icon: <Mic className="w-5 h-5" />, label: "Voice Calls", color: "bg-brand/10 text-brand" },
  { icon: <MessageSquare className="w-5 h-5" />, label: "Live Chat", color: "bg-violet-100 text-violet-600" },
  { icon: <Globe className="w-5 h-5" />, label: "Web Sessions", color: "bg-blue-100 text-blue-600" },
  { icon: <Smartphone className="w-5 h-5" />, label: "Mobile App", color: "bg-orange-100 text-orange-600" },
  { icon: <Mail className="w-5 h-5" />, label: "Email", color: "bg-rose-100 text-rose-600" },
  { icon: <MessageSquare className="w-5 h-5" />, label: "SMS", color: "bg-green-100 text-green-600" },
  { icon: <Database className="w-5 h-5" />, label: "CRM", color: "bg-slate-100 text-slate-600" },
  { icon: <MessageSquare className="w-5 h-5" />, label: "WhatsApp", color: "bg-emerald-100 text-emerald-600" },
  { icon: <ShoppingCart className="w-5 h-5" />, label: "Store", color: "bg-amber-100 text-amber-600" },
];

const integrations = [
  "Salesforce", "HubSpot", "Zoho", "Shopify",
  "WooCommerce", "WhatsApp", "Google Analytics",
  "Twilio", "Intercom", "Meta Ads"
];

export default function Home() {
  return (
    <>
      {/* ===== SECTION 1: HERO ===== */}
      <section className="relative bg-surface min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-50" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-heading font-bold text-black leading-[1.1] mb-6">
                One platform to understand,
                <br />
                predict, and engage
                <br />
                every customer.
              </h1>
              <p className="text-lg sm:text-xl text-black max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                ConvoBrains unifies data from calls, web, app, and CRM into one
                AI-powered growth engine equipped with Conversation Intelligence.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
                <Button href="/demo" variant="primary" size="lg">
                  Book a Demo
                </Button>
                <Button href="/platform" variant="ghost" size="lg">
                  Explore Platform
                </Button>
              </div>

              <div className="text-sm font-semibold text-slate-400 mb-6 uppercase tracking-wider">
                Trusted by 100+ businesses
              </div>
            </div>

            <div className="hidden lg:block">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: FAST PROBLEM STATEMENT ===== */}
      <SectionWrapper bg="white">
        <div className="text-center mb-10">
          <EyebrowTag label="The Problem" />
          <h2 className="text-3xl font-heading font-semibold text-black">
            Your CRM has tickets, not customers.
          </h2>
          <p className="text-black mt-4 max-w-lg mx-auto">
            Traditional CRMs store static records. Insights from voice, chat, and clicks are lost immediately.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: <PhoneOff className="w-5 h-5" />, label: "Lost Context", desc: "Teams repeat questions on every channel." },
            { icon: <AlertTriangle className="w-5 h-5" />, label: "Fragmented Data", desc: "No unified profile linking web clicks to calls." },
            { icon: <Clock className="w-5 h-5" />, label: "Missed Timing", desc: "Slow, generic follow-ups instead of live triggers." }
          ].map((pain) => (
            <ScrollReveal key={pain.label}>
              <div className="bg-neutral-light border border-border p-6 rounded-xl text-center h-full">
                <div className="w-10 h-10 mx-auto rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-3">
                  {pain.icon}
                </div>
                <div className="font-semibold text-black mb-1">{pain.label}</div>
                <div className="text-sm text-neutral-mid">{pain.desc}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* ===== SECTION 3: PLATFORM & HOW IT WORKS (COMBINED) ===== */}
      <SectionWrapper bg="surface">
        <ScrollReveal>
          <div className="text-center mb-16">
            <EyebrowTag label="Platform Architecture" />
            <h2 className="text-3xl md:text-[40px] font-heading font-semibold text-black leading-tight mb-4">
              How ConvoBrains Works
            </h2>
            <p className="text-black max-w-xl mx-auto">
              A simplified pipeline combining ingestion, intelligence, and execution.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 relative max-w-6xl mx-auto">
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-brand opacity-20" />
          
          {[
            {
              step: "1. Unified Data Layer",
              icon: <Database className="w-6 h-6" />,
              title: "Ingest every signal",
              desc: "Native connectors pull real-time events from voice calls, WhatsApp, web sessions, apps, and CRM records into one pipeline.",
              tags: ["Identity Resolution", "Real-time Streaming"]
            },
            {
              step: "2. Intelligence Engine",
              icon: <Brain className="w-6 h-6" />,
              title: "Understand & predict",
              desc: "AI processes transcripts and behaviors to extract intent, objections, and sentiment. Customer profiles are instantly scored and segmented.",
              tags: ["Conversation Intelligence", "Predictive Scoring"]
            },
            {
              step: "3. Agentic Orchestration",
              icon: <Target className="w-6 h-6" />,
              title: "Trigger exact actions",
              desc: "Live signals autonomously trigger WhatsApp flows, agent callbacks, nudges, or ad campaigns based on the Next Best Action model.",
              tags: ["Journey Orchestration", "AI Agents"]
            }
          ].map((pillar, i) => (
            <ScrollReveal key={pillar.step} delay={i * 0.1}>
              <div className="relative bg-white border border-border p-8 rounded-2xl h-full shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-brand font-bold text-white flex items-center justify-center mx-auto mb-6 shadow-md border border-brand-dark">
                  {pillar.icon}
                </div>
                <div className="text-xs font-semibold text-brand tracking-wider uppercase mb-2 text-center">
                  {pillar.step}
                </div>
                <h3 className="text-xl font-heading font-semibold text-black text-center mb-4">{pillar.title}</h3>
                <p className="text-sm text-neutral-mid text-center mb-6">{pillar.desc}</p>
                <div className="space-y-2">
                  {pillar.tags.map(tag => (
                    <div key={tag} className="text-xs font-medium bg-neutral-light border border-border text-black py-1.5 px-3 rounded-full text-center">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* ===== SECTION 4: CAPTURE DATA FROM ANYWHERE ===== */}
      <SectionWrapper bg="white">
        <ScrollReveal>
          <div className="text-center mb-12">
            <EyebrowTag label="Integrations" />
            <h2 className="text-3xl font-heading font-semibold text-black mb-4">
              Connect every customer touchpoint in minutes
            </h2>
            <p className="text-neutral-mid max-w-2xl mx-auto">
              Capture every voice call, chat, email, and web session in one place — automatically. No manual imports, no data silos.
            </p>
          </div>
        </ScrollReveal>

        {/* Data source channels */}
        <ScrollReveal delay={0.1}>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-neutral-mid mb-4">Channels we capture from</p>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-4 max-w-5xl mx-auto mb-12">
            {dataSources.map((source) => (
              <div key={source.label} className="flex flex-col items-center justify-center gap-2">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${source.color} border border-border`}>
                  {source.icon}
                </div>
                <span className="text-[10px] font-medium text-black text-center">{source.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Platform integrations */}
        <ScrollReveal delay={0.2}>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-neutral-mid mb-4">Platforms we integrate with</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {integrations.map((name) => (
              <div key={name} className="px-4 py-1.5 rounded-md border border-border bg-neutral-light text-xs font-medium text-slate-500">
                {name}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* ===== SECTION 5: MINIMIZED PROVEN RESULTS ===== */}
      <SectionWrapper bg="surface">
        <div className="text-center mb-8">
          <EyebrowTag label="Proven Results" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { number: "98%", label: "Satisfaction" },
            { number: "2.4x", label: "Campaign ROI" },
            { number: "3x", label: "Faster Conversion" },
            { number: "67%", label: "Less Repeat Calls" }
          ].map((metric, i) => (
            <ScrollReveal key={metric.label} delay={i * 0.1}>
              <div className="bg-white border border-border rounded-xl p-5 text-center">
                <div className="text-3xl font-heading font-bold text-brand mb-1">{metric.number}</div>
                <div className="text-xs font-medium text-neutral-mid uppercase tracking-wide">{metric.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* ===== SECTION 6: INDUSTRIES ===== */}
      <SectionWrapper bg="white">
        <ScrollReveal>
          <div className="text-center mb-10">
            <EyebrowTag label="Verticals" />
            <h2 className="text-3xl font-heading font-semibold text-black mb-4">
              Tailored for your workflows
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.slug} delay={i * 0.05}>
              <IndustryCard {...ind} />
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* ===== SECTION 7: CTA BANNER WITH YC DARK RULES ===== */}
      <section className="bg-navy relative overflow-hidden p-12 md:py-24">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <ScrollReveal>
            {/* The user requested dark background headings to be primary orange */}
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#ffffff] leading-tight mb-6">
              Stop guessing. Start predicting.
            </h2>
            <p className="text-neutral-mid mb-10 text-lg">
              Join the businesses using ConvoBrains to turn raw customer signals into automated revenue growth.
            </p>
            <div className="flex gap-4 justify-center">
              <Button href="/demo" variant="primary" size="lg">
                Book Your Demo
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
