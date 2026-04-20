import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { EyebrowTag } from "@/components/EyebrowTag";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight, ShoppingCart, Globe, Settings, Database, TrendingDown, RefreshCw, UserCheck, Clock, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions",
  description: "ConvoBrains solutions by platform integration and use case — from Shopify to Salesforce, churn reduction to onboarding acceleration.",
};

const platformSolutions = [
  {
    name: "Shopify",
    icon: <ShoppingCart className="w-5 h-5" />,
    href: "/solutions/shopify",
    desc: "Unify Shopify order data with calls, WhatsApp, and web — auto-trigger win-back and loyalty campaigns.",
    color: "bg-green-50 text-green-600 border-green-200",
  },
  {
    name: "WooCommerce",
    icon: <Globe className="w-5 h-5" />,
    href: "/solutions/woocommerce",
    desc: "Connect WooCommerce events to conversation intelligence — recover carts, drive repeats.",
    color: "bg-violet-50 text-violet-600 border-violet-200",
  },
  {
    name: "Magento",
    icon: <Settings className="w-5 h-5" />,
    href: "/solutions/magento",
    desc: "Enterprise e-commerce data + AI decisioning for large-scale personalization and loyalty.",
    color: "bg-orange-50 text-orange-600 border-orange-200",
  },
  {
    name: "Salesforce",
    icon: <Database className="w-5 h-5" />,
    href: "/solutions/salesforce",
    desc: "Enrich Salesforce contacts with conversation signals, intent scores, and predictive data — without leaving CRM.",
    color: "bg-blue-50 text-blue-600 border-blue-200",
  },
];

const useCaseSolutions = [
  {
    name: "Reduce Churn",
    icon: <TrendingDown className="w-5 h-5" />,
    href: "/solutions/churn-reduction",
    headline: "Predict and prevent churn 30+ days early",
    desc: "Conversation signals, sentiment trajectories, and engagement patterns combine to flag at-risk customers before they cancel. Trigger personalized retention plays automatically.",
    metric: "38% reduction in churn",
    color: "from-red-500/10 to-rose-500/5 border-red-200/60",
    iconColor: "bg-red-50 text-red-600",
  },
  {
    name: "Increase Repeat Purchase",
    icon: <RefreshCw className="w-5 h-5" />,
    href: "/solutions/repeat-purchase",
    headline: "Turn one-time buyers into loyal customers",
    desc: "AI identifies the optimal moment and channel for the second purchase nudge — using purchase history, post-purchase call signals, and predictive LTV.",
    metric: "2.1x repeat purchase rate",
    color: "from-brand/10 to-accent/5 border-brand/20",
    iconColor: "bg-brand/10 text-brand",
  },
  {
    name: "Improve Lead Conversion",
    icon: <TrendingDown className="w-5 h-5" style={{ transform: "rotate(180deg)" }} />,
    href: "/solutions/lead-conversion",
    headline: "Convert more leads with conversation-aware follow-up",
    desc: "Every call signal — budget mentioned, objection raised, competitor named — feeds the lead score and triggers the right next action at the right moment.",
    metric: "3.2x lead conversion rate",
    color: "from-blue-500/10 to-blue-400/5 border-blue-200/60",
    iconColor: "bg-blue-50 text-blue-600",
  },
  {
    name: "Onboard Faster",
    icon: <UserCheck className="w-5 h-5" />,
    href: "/solutions/onboarding",
    headline: "Get customers to value in days, not weeks",
    desc: "Onboarding call signals identify hesitation points and knowledge gaps — triggering targeted nudges, walkthroughs, and check-in sequences to accelerate activation.",
    metric: "56% faster onboarding",
    color: "from-violet-500/10 to-violet-400/5 border-violet-200/60",
    iconColor: "bg-violet-50 text-violet-600",
  },
  {
    name: "Win Back Lapsed Users",
    icon: <Users className="w-5 h-5" />,
    href: "/solutions/win-back",
    headline: "Re-engage dormant customers with precision",
    desc: "Identify lapsed customers by their last conversation signal, purchase pattern, and LTV. Send hyper-personalized win-back campaigns across WhatsApp, email, and SMS.",
    metric: "22% win-back reactivation",
    color: "from-amber-500/10 to-amber-400/5 border-amber-200/60",
    iconColor: "bg-amber-50 text-amber-600",
  },
];

const industries = [
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Telecom", href: "/industries/telecom" },
  { label: "Insurance", href: "/industries/insurance" },
  { label: "Retail", href: "/industries/retail" },
  { label: "SaaS", href: "/industries/saas" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "eCommerce & D2C", href: "/industries/ecommerce" },
  { label: "Mutual Funds / BFSI", href: "/industries/bfsi" },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <EyebrowTag label="Solutions" dark />
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-[1.1] mb-6 mt-2 text-shadow-hero max-w-3xl mx-auto">
            The outcome you need.
            <br />
            <span className="text-accent">The platform that gets you there.</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 text-shadow-sm">
            ConvoBrains is configured for your platform and your use case —
            whether you&apos;re running on Shopify or Salesforce, and whether your
            goal is to reduce churn, accelerate onboarding, or drive repeat purchase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/demo" variant="primary" size="lg">Book a Demo</Button>
            <Button href="/platform" variant="ghost" size="lg">Explore Platform</Button>
          </div>
        </div>
      </section>

      {/* Platform integrations */}
      <SectionWrapper bg="white">
        <ScrollReveal>
          <div className="text-center mb-14">
            <EyebrowTag label="By Platform Integration" />
            <h2 className="text-3xl md:text-[40px] font-heading font-semibold text-navy leading-tight mb-4">
              Works with your existing stack
            </h2>
            <p className="text-neutral-mid max-w-2xl mx-auto">
              ConvoBrains connects to your commerce platform and enriches every
              customer record with conversation intelligence — no rip-and-replace required.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platformSolutions.map((sol, i) => (
            <ScrollReveal key={sol.name} delay={i * 0.1}>
              <Link href={sol.href} className="block group">
                <div className="bg-white rounded-2xl border border-border p-6 h-full hover:shadow-md hover:border-brand/30 transition-all">
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${sol.color}`}>
                    {sol.icon}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-navy mb-2 group-hover:text-brand transition-colors">
                    {sol.name}
                  </h3>
                  <p className="text-sm text-neutral-mid leading-relaxed mb-4">{sol.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-brand group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Use case solutions */}
      <SectionWrapper bg="gray">
        <ScrollReveal>
          <div className="text-center mb-14">
            <EyebrowTag label="By Use Case" />
            <h2 className="text-3xl md:text-[40px] font-heading font-semibold text-navy leading-tight mb-4">
              Start with the outcome you need
            </h2>
            <p className="text-neutral-mid max-w-2xl mx-auto">
              Each use case solution is pre-configured with the right combination
              of features, journeys, and AI models to drive results from day one.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCaseSolutions.map((sol, i) => (
            <ScrollReveal key={sol.name} delay={i * 0.1}>
              <Link href={sol.href} className="block group h-full">
                <div className={`bg-gradient-to-br rounded-2xl border p-6 h-full hover:shadow-md transition-all ${sol.color}`}>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${sol.iconColor}`}>
                    {sol.icon}
                  </div>
                  <div className="text-xs font-semibold text-brand/70 uppercase tracking-widest mb-2">{sol.name}</div>
                  <h3 className="text-lg font-heading font-semibold text-navy mb-3 group-hover:text-brand transition-colors">
                    {sol.headline}
                  </h3>
                  <p className="text-sm text-neutral-mid leading-relaxed mb-4">{sol.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-brand">{sol.metric}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-neutral-mid group-hover:text-brand group-hover:gap-2 transition-all">
                      Explore <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Industries quick-nav */}
      <SectionWrapper bg="white">
        <ScrollReveal>
          <div className="text-center mb-10">
            <EyebrowTag label="By Industry" />
            <h2 className="text-3xl font-heading font-semibold text-navy mb-4">
              Built for your vertical
            </h2>
            <p className="text-neutral-mid max-w-xl mx-auto mb-8">
              ConvoBrains is pre-configured for the touchpoints, failure modes,
              and customer signals that matter most in each industry.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {industries.map((ind) => (
                <Link
                  key={ind.href}
                  href={ind.href}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-neutral-light text-sm font-medium text-neutral-mid hover:border-brand hover:text-brand hover:bg-white transition-colors"
                >
                  {ind.label} <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-gradient-to-br from-brand to-brand-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-[40px] font-heading font-semibold text-white leading-tight mb-4">
              Not sure which solution is right for you?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Talk to our team. We&apos;ll map ConvoBrains to your specific workflow,
              stack, and growth goals in 20 minutes.
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
