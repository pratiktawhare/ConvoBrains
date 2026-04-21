"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight, Calendar } from "lucide-react";
import { Button } from "./Button";

interface NavLink {
  label: string;
  href: string;
  highlight?: boolean;
}

interface PlatformColumn {
  label: string;
  color: string;
  teal?: boolean;
  links: NavLink[];
}

const platformColumns: PlatformColumn[] = [
  {
    label: "Intelligence",
    color: "text-brand",
    links: [
      { label: "Customer Data Platform", href: "/platform/cdp" },
      { label: "One Customer View", href: "/platform/one-customer-view" },
      { label: "Segmentation", href: "/platform/segmentation" },
      { label: "Behavioral Analytics", href: "/platform/behavioral-analytics" },
      {
        label: "Conversation Intelligence ★",
        href: "/platform/conversation-intelligence",
        highlight: true,
      },
      { label: "Composable CDP", href: "/platform/composable-cdp" },
      { label: "RFM & Predictive Scoring", href: "/platform/predictive-scoring" },
    ],
  },
  {
    label: "Optimization",
    color: "text-blue-600",
    links: [
      { label: "Web & App Insights", href: "/platform/web-app-insights" },
      { label: "A/B Experiments", href: "/platform/experiments" },
      { label: "Heatmaps & Session Replay", href: "/platform/heatmaps" },
      { label: "Nudges & Walkthroughs", href: "/platform/nudges" },
      { label: "NPS & Surveys", href: "/platform/nps-surveys" },
      { label: "Funnels & Cohorts", href: "/platform/funnels" },
      { label: "Gamification", href: "/platform/gamification" },
    ],
  },
  {
    label: "Engagement",
    color: "text-violet-600",
    links: [
      { label: "Journey Orchestration", href: "/platform/journey-orchestration" },
      { label: "Cross-Channel Campaigns", href: "/platform/campaigns" },
      { label: "WhatsApp Marketing", href: "/platform/whatsapp" },
      { label: "Campaign Personalisation", href: "/platform/personalisation" },
      { label: "Referral & Loyalty", href: "/platform/loyalty" },
    ],
  },
  {
    label: "Agentic AI",
    color: "text-accent",
    teal: true,
    links: [
      { label: "AI Co-Marketer", href: "/platform/ai-co-marketer" },
      { label: "AI Agents", href: "/platform/ai-agents" },
      { label: "AI Decisioning", href: "/platform/ai-decisioning" },
    ],
  },
];

const solutionsColumns = [
  {
    label: "By Platform",
    links: [
      { label: "Shopify", href: "/solutions/shopify" },
      { label: "WooCommerce", href: "/solutions/woocommerce" },
      { label: "Magento", href: "/solutions/magento" },
      { label: "Salesforce", href: "/solutions/salesforce" },
    ],
  },
  {
    label: "By Use Case",
    links: [
      { label: "Reduce Churn", href: "/solutions/churn-reduction" },
      { label: "Increase Repeat Purchase", href: "/solutions/repeat-purchase" },
      { label: "Improve Lead Conversion", href: "/solutions/lead-conversion" },
      { label: "Onboard Faster", href: "/solutions/onboarding" },
      { label: "Win Back Lapsed Users", href: "/solutions/win-back" },
    ],
  },
];

const industryLinks = [
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Banking", href: "/industries/banking" },
  { label: "Telecom", href: "/industries/telecom" },
  { label: "Insurance", href: "/industries/insurance" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Automotive", href: "/industries/auto" },
  { label: "eCommerce & D2C", href: "/industries/ecommerce" },
  { label: "Subscription Boxes", href: "/industries/subbox" },
  { label: "Beauty & Care", href: "/industries/beauty" },
  { label: "Food Delivery", href: "/industries/food" },
  { label: "EdTech", href: "/industries/edtech" },
  { label: "Retail", href: "/industries/retail" },
  { label: "SaaS", href: "/industries/saas" },
  { label: "Mutual Funds / BFSI", href: "/industries/bfsi" },
  { label: "Omnichannel Retail", href: "/industries/omnichannel" },
  { label: "Travel & Hospitality", href: "/industries/travel" },
  { label: "Fitness & Wellness", href: "/industries/fitness" },
  { label: "Higher Education", href: "/industries/highered" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 glass-navbar transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-sm border-b border-border/50"
          : "bg-white/75"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img src="/convobrains-logo.webp" alt="ConvoBrains Logo" className="h-8 w-auto object-contain" />
            <span className="text-xl font-heading font-bold text-brand">ConvoBrains</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">

            {/* Platform mega-menu */}
            <div
              className="relative"
              onMouseEnter={() => setPlatformOpen(true)}
              onMouseLeave={() => setPlatformOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-mid hover:text-navy transition-colors rounded-lg hover:bg-neutral-light cursor-pointer">
                Platform
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${platformOpen ? "rotate-180" : ""}`} />
              </button>

              {platformOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[780px]">
                  <div className="bg-white rounded-2xl border border-border shadow-2xl shadow-navy/10 p-6">
                    <div className="grid grid-cols-4 gap-6">
                      {platformColumns.map((col) => (
                        <div key={col.label}>
                          <div
                            className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${col.color}`}
                          >
                            {col.label}
                          </div>
                          <div
                            className={`space-y-1 ${
                              col.teal
                                ? "bg-gradient-to-br from-brand/8 to-accent/5 rounded-xl p-3 border border-brand/15"
                                : ""
                            }`}
                          >
                            {col.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                className={`block px-2 py-1.5 text-xs rounded-lg transition-colors ${
                                  link.highlight
                                    ? "text-brand font-semibold hover:bg-brand/8"
                                    : "text-neutral-mid hover:bg-neutral-light hover:text-navy"
                                }`}
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Demo CTA card */}
                    <div className="mt-5 pt-5 border-t border-border">
                      <Link
                        href="/demo"
                        className="flex items-center justify-between bg-gradient-to-r from-brand to-accent rounded-xl px-5 py-3.5 group"
                      >
                        <div>
                          <div className="text-white font-semibold text-sm">Schedule a Demo</div>
                          <div className="text-white/80 text-xs">See the full platform in 20 minutes</div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions mega-menu */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-mid hover:text-navy transition-colors rounded-lg hover:bg-neutral-light cursor-pointer">
                Solutions
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`} />
              </button>

              {solutionsOpen && (
                <div className="absolute top-full left-0 pt-2 w-[440px]">
                  <div className="bg-white rounded-2xl border border-border shadow-2xl shadow-navy/10 p-5">
                    <div className="grid grid-cols-2 gap-6">
                      {solutionsColumns.map((col) => (
                        <div key={col.label}>
                          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                            {col.label}
                          </div>
                          <div className="space-y-1">
                            {col.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                className="block px-2 py-1.5 text-xs text-neutral-mid rounded-lg hover:bg-neutral-light hover:text-navy transition-colors"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <Link
                        href="/solutions"
                        className="flex items-center gap-2 text-xs font-medium text-brand hover:text-brand-dark transition-colors"
                      >
                        View all solutions <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustryOpen(true)}
              onMouseLeave={() => setIndustryOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-mid hover:text-navy transition-colors rounded-lg hover:bg-neutral-light cursor-pointer">
                Industries
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${industryOpen ? "rotate-180" : ""}`} />
              </button>
              {industryOpen && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-white rounded-xl border border-border shadow-lg p-2">
                    <Link
                      href="/industries"
                      className="block px-3 py-2.5 text-sm font-semibold text-navy rounded-lg hover:bg-neutral-light transition-colors"
                    >
                      All Industries
                    </Link>
                    <div className="h-px bg-border my-1" />
                    {industryLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-3 py-2 text-sm text-neutral-mid rounded-lg hover:bg-neutral-light hover:text-navy transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/how-it-works" className="px-4 py-2 text-sm font-medium text-neutral-mid hover:text-navy transition-colors rounded-lg hover:bg-neutral-light">
              How it Works
            </Link>
            <Link href="/pricing" className="px-4 py-2 text-sm font-medium text-neutral-mid hover:text-navy transition-colors rounded-lg hover:bg-neutral-light">
              Pricing
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/login" className="text-sm font-medium text-neutral-mid hover:text-navy transition-colors px-3 py-2">
              Login
            </Link>
            <Button href="/demo" variant="primary" size="sm">
              <Calendar className="w-3.5 h-3.5 mr-1.5" />
              Book a Demo
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-light transition-colors cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5 text-navy" /> : <Menu className="w-5 h-5 text-navy" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40">
          <div className="px-4 py-6 space-y-1 overflow-y-auto max-h-[calc(100vh-4rem)]">

            {/* Platform */}
            <div className="space-y-1">
              <button
                onClick={() => setMobilePlatformOpen(!mobilePlatformOpen)}
                className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-navy rounded-lg hover:bg-neutral-light cursor-pointer"
              >
                Platform
                <ChevronDown className={`w-4 h-4 transition-transform ${mobilePlatformOpen ? "rotate-180" : ""}`} />
              </button>
              {mobilePlatformOpen && (
                <div className="pl-4 space-y-3 pb-2">
                  <Link href="/platform" className="block px-3 py-2 text-sm font-semibold text-navy rounded-lg hover:bg-neutral-light" onClick={() => setMobileOpen(false)}>
                    Platform Overview
                  </Link>
                  {platformColumns.map((col) => (
                    <div key={col.label}>
                      <div className={`text-[10px] font-bold uppercase tracking-widest px-3 mb-1 ${col.color}`}>{col.label}</div>
                      {col.links.map((link) => (
                        <Link key={link.href} href={link.href} className="block px-3 py-1.5 text-sm text-neutral-mid rounded-lg hover:bg-neutral-light" onClick={() => setMobileOpen(false)}>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions */}
            <div className="space-y-1">
              <button
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-navy rounded-lg hover:bg-neutral-light cursor-pointer"
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileSolutionsOpen && (
                <div className="pl-4 space-y-1 pb-2">
                  <Link href="/solutions" className="block px-3 py-2 text-sm font-semibold text-navy rounded-lg hover:bg-neutral-light" onClick={() => setMobileOpen(false)}>
                    All Solutions
                  </Link>
                  {solutionsColumns.flatMap((col) => col.links).map((link) => (
                    <Link key={link.href} href={link.href} className="block px-3 py-1.5 text-sm text-neutral-mid rounded-lg hover:bg-neutral-light" onClick={() => setMobileOpen(false)}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries */}
            <div className="space-y-1">
              <button
                onClick={() => setMobileIndustryOpen(!mobileIndustryOpen)}
                className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-navy rounded-lg hover:bg-neutral-light cursor-pointer"
              >
                Industries
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileIndustryOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileIndustryOpen && (
                <div className="pl-4 space-y-1 pb-2">
                  <Link href="/industries" className="block px-3 py-2 text-sm font-semibold text-navy rounded-lg hover:bg-neutral-light" onClick={() => setMobileOpen(false)}>
                    All Industries
                  </Link>
                  {industryLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="block px-3 py-1.5 text-sm text-neutral-mid rounded-lg hover:bg-neutral-light" onClick={() => setMobileOpen(false)}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/how-it-works" className="block px-3 py-3 text-sm font-medium text-navy rounded-lg hover:bg-neutral-light" onClick={() => setMobileOpen(false)}>
              How it Works
            </Link>
            <Link href="/pricing" className="block px-3 py-3 text-sm font-medium text-navy rounded-lg hover:bg-neutral-light" onClick={() => setMobileOpen(false)}>
              Pricing
            </Link>

            <div className="pt-4 border-t border-border space-y-2">
              <Link href="/login" className="block w-full text-center px-4 py-2.5 text-sm font-medium text-neutral-mid border border-border rounded-full hover:bg-neutral-light" onClick={() => setMobileOpen(false)}>
                Login
              </Link>
              <Button href="/demo" variant="primary" size="md" className="w-full justify-center">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
