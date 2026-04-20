"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { EyebrowTag } from "@/components/EyebrowTag";
import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";

const blogPosts = [
  {
    slug: "conversation-intelligence-future-cdp",
    title: "Why Conversation Intelligence is the Future of CDP",
    excerpt:
      "Traditional CDPs track clicks. The next generation will track what customers actually say. Here's why conversation signals are the missing layer in your customer data stack.",
    category: "Product",
    date: "April 15, 2025",
    readTime: "6 min read",
  },
  {
    slug: "real-estate-call-analytics",
    title: "How Real Estate Teams Are Using Call Analytics to 3x Site Visits",
    excerpt:
      "Property inquiries happen on the phone. We studied 500+ real estate teams and found that structured call data is the #1 predictor of site visit conversion.",
    category: "Industry",
    date: "April 8, 2025",
    readTime: "5 min read",
  },
  {
    slug: "whatsapp-campaign-personalization",
    title: "WhatsApp Campaign Personalization: Beyond First Name",
    excerpt:
      "Inserting {first_name} is not personalization. Real personalization means referencing the customer's last call, their objection, and their stated timeline.",
    category: "Strategy",
    date: "March 28, 2025",
    readTime: "4 min read",
  },
  {
    slug: "ai-next-best-action",
    title: "The Rise of AI-Driven Next Best Action in B2C Marketing",
    excerpt:
      "Propensity models and churn prediction are table stakes. The real game is autonomous AI that decides the action and executes it without human approval.",
    category: "AI",
    date: "March 20, 2025",
    readTime: "7 min read",
  },
  {
    slug: "telecom-churn-prevention",
    title: "Predicting Telecom Churn from Call Center Conversations",
    excerpt:
      "We analyzed 100,000 telecom support calls and built a churn prediction model powered by conversation sentiment. Here's what we learned.",
    category: "Case Study",
    date: "March 12, 2025",
    readTime: "8 min read",
  },
  {
    slug: "cdp-vs-crm",
    title: "CDP vs CRM: Why You Need Both (And How They Should Talk)",
    excerpt:
      "Your CRM stores records. Your CDP builds intelligence. Here's the architecture that lets them work together without data duplication.",
    category: "Product",
    date: "March 5, 2025",
    readTime: "5 min read",
  },
];

const categoryColors: Record<string, string> = {
  Product: "bg-brand/10 text-brand",
  Industry: "bg-blue-50 text-blue-600",
  Strategy: "bg-purple-50 text-purple-600",
  AI: "bg-accent/10 text-brand-dark",
  "Case Study": "bg-amber-50 text-amber-700",
};

export default function Blog() {
  return (
    <>
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <EyebrowTag label="Blog" dark />
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-bold text-white leading-[1.1] mb-6">
            Insights &
            <br />
            <span className="text-accent">intelligence.</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            The latest thinking on conversation intelligence, customer data
            platforms, and AI-powered marketing.
          </p>
        </div>
      </section>

      <SectionWrapper bg="white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.08}>
              <article className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-brand/20 transition-all duration-300 h-full flex flex-col">
                {/* Placeholder visual */}
                <div className="h-48 bg-gradient-to-br from-neutral-light to-border flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-accent/5 group-hover:from-brand/10 group-hover:to-accent/10 transition-colors" />
                  <div className="relative z-10 text-6xl font-heading font-bold text-brand/10">
                    {post.title.charAt(0)}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider ${
                        categoryColors[post.category] || "bg-neutral-light text-neutral-mid"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400">
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-heading font-semibold text-navy mb-2 group-hover:text-brand transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-neutral-mid leading-relaxed flex-1 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="text-xs text-slate-400">{post.date}</div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
