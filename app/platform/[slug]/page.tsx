import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/Button";
import { EyebrowTag } from "@/components/EyebrowTag";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  ArrowRight, Check, Users, BarChart3, Zap, Brain,
  Globe, Smartphone, Mail, MessageSquare, GitBranch,
  TrendingUp, Target, Layers, Sparkles, Shield,
  RefreshCw, Star, PieChart, FlaskConical, Eye,
  Gift, Award, Workflow, Send, Heart, ShoppingCart,
  BotMessageSquare, Activity,
} from "lucide-react";

// ─── Feature page data ───────────────────────────────────────────────────────

interface Step {
  title: string;
  body: string;
}

interface Capability {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface RelatedLink {
  label: string;
  href: string;
}

interface FeaturePageData {
  eyebrow: string;
  category: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  steps: Step[];
  capabilities: Capability[];
  useCaseTitle: string;
  useCaseBody: string;
  related: RelatedLink[];
  isPremium?: boolean;
}

// Inline SVG icon components (must be defined before the data object uses them)
const Share2 = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
);
const Mic = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/>
  </svg>
);

const featureData: Record<string, FeaturePageData> = {
  "one-customer-view": {
    eyebrow: "Intelligence · CDP",
    category: "Intelligence",
    title: "Every interaction,",
    titleAccent: "one unified profile.",
    subtitle: "ConvoBrains merges data from calls, web, app, email, WhatsApp, and CRM into a single persistent customer record — updated in real time as customers interact across every channel.",
    steps: [
      { title: "Collect from all channels", body: "Native connectors ingest events from web sessions, mobile apps, call transcripts, email, CRM records, WhatsApp, and SMS — no data left behind." },
      { title: "Resolve identity across touchpoints", body: "Our identity graph stitches anonymous visitors, known contacts, and phone numbers into one unified profile using deterministic and probabilistic matching." },
      { title: "Enrich with AI-powered signals", body: "Conversation Intelligence adds intent scores, sentiment, objections, and predicted LTV — dimensions no other CDP provides." },
    ],
    capabilities: [
      { icon: <Users className="w-5 h-5" />, title: "Identity Resolution", desc: "Link anonymous sessions to known profiles across devices and channels automatically." },
      { icon: <Layers className="w-5 h-5" />, title: "360° Profile View", desc: "See every interaction, purchase, call, and campaign response in a single timeline." },
      { icon: <Activity className="w-5 h-5" />, title: "Real-time Updates", desc: "Profiles update within seconds of any new interaction — always fresh, always accurate." },
      { icon: <Brain className="w-5 h-5" />, title: "AI Enrichment", desc: "Conversation signals, intent scores, and churn risk overlaid automatically." },
      { icon: <Shield className="w-5 h-5" />, title: "Consent Management", desc: "GDPR and DPDP-compliant consent tracking baked into every profile." },
      { icon: <Globe className="w-5 h-5" />, title: "Omnichannel History", desc: "Web, app, email, calls, WhatsApp — the full journey in one place." },
    ],
    useCaseTitle: "A prospect calls asking about a property",
    useCaseBody: "The agent sees: 3 previous website visits, 2 WhatsApp enquiries, the budget mentioned in a prior call (₹80L), preferred location (Bandra West), and a predicted conversion probability of 74%. They close in one call instead of four.",
    related: [
      { label: "Segmentation", href: "/platform/segmentation" },
      { label: "Behavioral Analytics", href: "/platform/behavioral-analytics" },
      { label: "Conversation Intelligence", href: "/platform/conversation-intelligence" },
    ],
  },

  "segmentation": {
    eyebrow: "Intelligence · CDP",
    category: "Intelligence",
    title: "Reach exactly",
    titleAccent: "the right customers.",
    subtitle: "Build precise, dynamic segments from any combination of behavioral, transactional, profile, and conversation data — and keep them updated automatically as customers evolve.",
    steps: [
      { title: "Define criteria from any data source", body: "Combine web events, CRM fields, conversation signals, RFM scores, and custom properties using a visual drag-and-drop builder — no SQL needed." },
      { title: "Segments update in real time", body: "As customers match or unmatch your criteria their segment membership changes automatically — ensuring your campaigns always target the right people." },
      { title: "Activate across every channel", body: "Push segments directly to campaign channels, ad platforms, or your CRM at any time." },
    ],
    capabilities: [
      { icon: <Target className="w-5 h-5" />, title: "Visual Segment Builder", desc: "Point-and-click interface — no engineering required." },
      { icon: <RefreshCw className="w-5 h-5" />, title: "Dynamic Segments", desc: "Real-time membership updates as customer behaviour changes." },
      { icon: <Brain className="w-5 h-5" />, title: "AI Predictive Segments", desc: "AI suggests high-value segments you haven't thought to build." },
      { icon: <BarChart3 className="w-5 h-5" />, title: "RFM Segmentation", desc: "Recency, Frequency, Monetary scoring built in." },
      { icon: <MessageSquare className="w-5 h-5" />, title: "Conversation-based Filters", desc: "Segment by intent, sentiment, or topics mentioned on calls." },
      { icon: <Share2 className="w-5 h-5" />, title: "One-click Activation", desc: "Push to WhatsApp, email, ad audiences, or CRM instantly." },
    ],
    useCaseTitle: "Real estate team targets warm but unconverted leads",
    useCaseBody: "Segment: leads who mentioned 'budget above ₹50L' on a call AND visited the property page 3+ times AND haven't responded in 14 days. Launch a personalized WhatsApp sequence just for them. Conversion rate: 3.1x above baseline.",
    related: [
      { label: "One Customer View", href: "/platform/one-customer-view" },
      { label: "RFM & Predictive Scoring", href: "/platform/predictive-scoring" },
      { label: "Cross-Channel Campaigns", href: "/platform/campaigns" },
    ],
  },

  "behavioral-analytics": {
    eyebrow: "Intelligence · CDP",
    category: "Intelligence",
    title: "Understand what customers",
    titleAccent: "actually do.",
    subtitle: "Track every click, scroll, session, and conversion event across web and app — then connect behavioural patterns to your customer profiles for truly actionable insights.",
    steps: [
      { title: "Auto-capture events everywhere", body: "Install one snippet and ConvoBrains automatically tracks page views, clicks, form submissions, feature usage, and custom events — no manual tagging needed." },
      { title: "Connect behaviour to profiles", body: "Every event is attributed to a known or anonymous profile, building a behavioural history that feeds segmentation, scoring, and AI predictions." },
      { title: "Identify friction and opportunity", body: "Dashboards surface where users drop off, which paths lead to conversion, and which cohorts outperform — in real time." },
    ],
    capabilities: [
      { icon: <Activity className="w-5 h-5" />, title: "Event Auto-capture", desc: "No-code event tracking for web and mobile." },
      { icon: <PieChart className="w-5 h-5" />, title: "Funnel Analysis", desc: "Visualize every step from awareness to conversion." },
      { icon: <Users className="w-5 h-5" />, title: "Cohort Retention", desc: "Track how different cohorts retain over time." },
      { icon: <TrendingUp className="w-5 h-5" />, title: "Path Analysis", desc: "Discover which journeys lead to conversion vs drop-off." },
      { icon: <BarChart3 className="w-5 h-5" />, title: "Custom Dashboards", desc: "Build views tailored to your KPIs." },
      { icon: <Brain className="w-5 h-5" />, title: "AI Anomaly Detection", desc: "Automatically flagged drops and spikes in behaviour." },
    ],
    useCaseTitle: "SaaS team discovers onboarding drop-off",
    useCaseBody: "Analytics reveals 68% of trial users who don't complete the 'Connect CRM' step within 3 days churn. Automated nudge triggers for users who reach that step but don't complete it. Trial-to-paid rate improves 41%.",
    related: [
      { label: "Funnels & Cohorts", href: "/platform/funnels" },
      { label: "Heatmaps & Session Replay", href: "/platform/heatmaps" },
      { label: "A/B Experiments", href: "/platform/experiments" },
    ],
  },

  "composable-cdp": {
    eyebrow: "Intelligence · Architecture",
    category: "Intelligence",
    title: "A CDP that fits",
    titleAccent: "your stack, not the other way.",
    subtitle: "ConvoBrains' composable architecture lets you use our data layer alongside your existing warehouse, CRM, or data stack — ingest from anywhere, activate everywhere.",
    steps: [
      { title: "Connect any source via REST or native connectors", body: "Pre-built integrations for Salesforce, HubSpot, Shopify, Freshdesk, Twilio, and 100+ tools. Or send data via REST API, webhooks, or our SDK." },
      { title: "Unify in the ConvoBrains data layer", body: "All data flows through our identity resolution and enrichment layer before being made available for segmentation, activation, and AI." },
      { title: "Activate to any destination", body: "Send enriched profiles and segments to any downstream tool — your ad platform, CRM, warehouse, or marketing automation stack." },
    ],
    capabilities: [
      { icon: <Layers className="w-5 h-5" />, title: "100+ Native Connectors", desc: "Salesforce, HubSpot, Shopify, Zoho, Freshdesk, and more." },
      { icon: <Zap className="w-5 h-5" />, title: "REST API + Webhooks", desc: "Connect any custom source or destination programmatically." },
      { icon: <Shield className="w-5 h-5" />, title: "Data Governance", desc: "Field-level access control, consent tracking, audit logs." },
      { icon: <Globe className="w-5 h-5" />, title: "Bi-directional Sync", desc: "Push enriched data back to your CRM or warehouse." },
      { icon: <Activity className="w-5 h-5" />, title: "Real-time Streaming", desc: "Sub-second event streaming for live activation." },
      { icon: <Brain className="w-5 h-5" />, title: "AI-ready Data Format", desc: "Profiles formatted for AI models and predictive scoring out of the box." },
    ],
    useCaseTitle: "Enterprise team adds ConvoBrains alongside Salesforce",
    useCaseBody: "Salesforce remains the system of record. ConvoBrains ingests call transcripts, web events, and email opens — enriches each contact with conversation signals and intent scores — then writes those signals back to Salesforce custom fields. Sales team sees AI-enhanced profiles in the tool they already use.",
    related: [
      { label: "One Customer View", href: "/platform/one-customer-view" },
      { label: "Journey Orchestration", href: "/platform/journey-orchestration" },
      { label: "AI Decisioning", href: "/platform/ai-decisioning" },
    ],
  },

  "predictive-scoring": {
    eyebrow: "Intelligence · AI",
    category: "Intelligence",
    title: "Know who'll buy",
    titleAccent: "before they raise their hand.",
    subtitle: "ConvoBrains combines RFM scoring, behavioural patterns, and conversation signals to rank every customer by propensity to convert, churn, or expand — automatically.",
    steps: [
      { title: "Ingest signals from every source", body: "Purchase history, recency, frequency, call sentiment, web engagement, email opens — all feed the scoring model." },
      { title: "AI trains on your historical data", body: "Models learn from your past conversions and churns to predict future behaviour with accuracy that improves over time." },
      { title: "Scores activate across channels", body: "Sales teams see lead scores. Marketing campaigns prioritize high-propensity segments. Support escalates at-risk accounts." },
    ],
    capabilities: [
      { icon: <TrendingUp className="w-5 h-5" />, title: "RFM Scoring", desc: "Recency, Frequency, Monetary segmentation built in." },
      { icon: <Brain className="w-5 h-5" />, title: "Propensity Models", desc: "AI predicts purchase, churn, and upsell probability per contact." },
      { icon: <Target className="w-5 h-5" />, title: "Lead Scoring", desc: "Sales-ready lead scores shown in CRM and agent views." },
      { icon: <Activity className="w-5 h-5" />, title: "Real-time Score Updates", desc: "Scores recalculate after every interaction." },
      { icon: <BarChart3 className="w-5 h-5" />, title: "Score Explainability", desc: "See exactly which signals drove a contact's score." },
      { icon: <Zap className="w-5 h-5" />, title: "Score-triggered Actions", desc: "Automatically trigger journeys when scores cross thresholds." },
    ],
    useCaseTitle: "Insurance company prioritizes renewal outreach",
    useCaseBody: "60 days before renewal, ConvoBrains scores all policyholders by renewal propensity using payment history, claim sentiment, and engagement patterns. The bottom 20% by score get a personalized agent call. Renewal rate improves 41% in the first quarter.",
    related: [
      { label: "Segmentation", href: "/platform/segmentation" },
      { label: "AI Decisioning", href: "/platform/ai-decisioning" },
      { label: "Churn Prediction", href: "/platform/ai-decisioning" },
    ],
  },

  "web-app-insights": {
    eyebrow: "Optimization · Analytics",
    category: "Optimization",
    title: "See exactly where",
    titleAccent: "customers drop off.",
    subtitle: "Full-stack web and app analytics connected to your customer profiles — so every insight tells you not just what happened, but who it happened to.",
    steps: [
      { title: "Track everything automatically", body: "Auto-instrumentation captures page views, clicks, interactions, and custom events across web and mobile without manual code for every event." },
      { title: "Connect metrics to profiles", body: "Every metric is linked to a customer profile — so 'checkout drop-off' becomes 'high-value users from Mumbai who abandon at the payment step'." },
      { title: "Act on insights immediately", body: "From any insight, launch an experiment, deploy a nudge, or create a segment — without leaving the platform." },
    ],
    capabilities: [
      { icon: <Activity className="w-5 h-5" />, title: "Auto-capture Analytics", desc: "Zero-code event tracking for web and mobile apps." },
      { icon: <Users className="w-5 h-5" />, title: "User-level Attribution", desc: "Every metric tied to a real customer profile." },
      { icon: <Globe className="w-5 h-5" />, title: "Page Performance", desc: "Track load times, bounce rates, and engagement by segment." },
      { icon: <Smartphone className="w-5 h-5" />, title: "Mobile App Analytics", desc: "Screen flows, feature adoption, crash correlation." },
      { icon: <TrendingUp className="w-5 h-5" />, title: "Real-time Dashboard", desc: "Live view of sessions, conversions, and engagement." },
      { icon: <Brain className="w-5 h-5" />, title: "AI Anomaly Alerts", desc: "Instant notification when key metrics deviate unexpectedly." },
    ],
    useCaseTitle: "Retail app team spots mobile checkout issue",
    useCaseBody: "Analytics shows Android users in tier-2 cities have a 78% checkout drop rate vs 23% for iOS users. The insight is linked to profiles showing high purchase intent. They fix the Android payment UX and recover ₹40L in monthly GMV.",
    related: [
      { label: "Heatmaps & Session Replay", href: "/platform/heatmaps" },
      { label: "Funnels & Cohorts", href: "/platform/funnels" },
      { label: "A/B Experiments", href: "/platform/experiments" },
    ],
  },

  "experiments": {
    eyebrow: "Optimization · CRO",
    category: "Optimization",
    title: "Test. Learn. Win.",
    titleAccent: "Without the engineering queue.",
    subtitle: "Run statistically rigorous A/B and multivariate experiments on any page, flow, or message — without waiting for developers. Every experiment is connected to your full customer profiles.",
    steps: [
      { title: "Create experiments with a visual editor", body: "Change headlines, CTAs, layouts, and flows using a point-and-click editor. No code required for most experiments." },
      { title: "Target the right audience", body: "Experiments run on any segment — new visitors, high-LTV customers, specific device types, or any combination of profile attributes." },
      { title: "Let the data declare a winner", body: "Statistical significance monitoring automatically pauses losing variants and scales winning ones — maximizing revenue during the experiment." },
    ],
    capabilities: [
      { icon: <FlaskConical className="w-5 h-5" />, title: "A/B & Multivariate", desc: "Test multiple variants simultaneously with proper statistical controls." },
      { icon: <Target className="w-5 h-5" />, title: "Segment Targeting", desc: "Run experiments for specific audiences, not your whole user base." },
      { icon: <BarChart3 className="w-5 h-5" />, title: "Statistical Significance", desc: "Bayesian significance engine prevents false positives." },
      { icon: <Zap className="w-5 h-5" />, title: "Auto-winner", desc: "Automatically scale winning variants when significance is reached." },
      { icon: <Globe className="w-5 h-5" />, title: "Cross-page Experiments", desc: "Test multi-step flows, not just single pages." },
      { icon: <Activity className="w-5 h-5" />, title: "Revenue Impact Tracking", desc: "See the direct revenue delta from each experiment." },
    ],
    useCaseTitle: "SaaS company tests onboarding flow variants",
    useCaseBody: "Two onboarding variants tested: Variant A (guided checklist) vs Variant B (interactive product tour). Variant B reaches statistical significance in 8 days with 81% higher trial activation. Rolled out to 100% of new users immediately.",
    related: [
      { label: "Heatmaps & Session Replay", href: "/platform/heatmaps" },
      { label: "Nudges & Walkthroughs", href: "/platform/nudges" },
      { label: "Personalization", href: "/platform/personalisation" },
    ],
  },

  "heatmaps": {
    eyebrow: "Optimization · UX Intelligence",
    category: "Optimization",
    title: "See your product",
    titleAccent: "through your customer's eyes.",
    subtitle: "Heatmaps, click maps, and session replays that reveal exactly where users engage, struggle, and drop off — all connected to customer profiles so you know whose experience needs fixing.",
    steps: [
      { title: "Capture visual engagement data", body: "Every scroll, click, tap, and rage-click is recorded across all pages and mobile screens — automatically, with no tagging." },
      { title: "Filter by customer segment", body: "View heatmaps specifically for high-value users, users from a specific channel, or users who converted vs those who didn't." },
      { title: "Watch sessions and find patterns", body: "Session replay shows exactly what a confused user experienced — linked to their full profile so you have complete context." },
    ],
    capabilities: [
      { icon: <Eye className="w-5 h-5" />, title: "Click & Scroll Heatmaps", desc: "Visual overlay of where users engage on any page." },
      { icon: <Activity className="w-5 h-5" />, title: "Session Replay", desc: "Watch full user sessions with profile context attached." },
      { icon: <Target className="w-5 h-5" />, title: "Rage Click Detection", desc: "Automatically find elements causing user frustration." },
      { icon: <Users className="w-5 h-5" />, title: "Segment Filtering", desc: "View heatmaps filtered by any customer attribute." },
      { icon: <Smartphone className="w-5 h-5" />, title: "Mobile Heatmaps", desc: "Touch heatmaps for native and hybrid mobile apps." },
      { icon: <Brain className="w-5 h-5" />, title: "AI Insight Summary", desc: "AI summarizes key friction points from session recordings." },
    ],
    useCaseTitle: "E-commerce brand finds hidden mobile friction",
    useCaseBody: "Session replay filtered to users who abandoned checkout reveals 43% tapped the promo code field repeatedly on mobile — the keyboard was covering the Apply button. One CSS fix: checkout completion + 31%.",
    related: [
      { label: "A/B Experiments", href: "/platform/experiments" },
      { label: "Funnels & Cohorts", href: "/platform/funnels" },
      { label: "Nudges & Walkthroughs", href: "/platform/nudges" },
    ],
  },

  "nudges": {
    eyebrow: "Optimization · In-product",
    category: "Optimization",
    title: "Guide users to value.",
    titleAccent: "Without engineering.",
    subtitle: "Deploy personalized in-app nudges, tooltips, banners, and guided walkthroughs triggered by user behaviour — all without a developer or an app release.",
    steps: [
      { title: "Define trigger conditions", body: "Trigger a nudge when a user visits a feature for the first time, hasn't completed a step, or matches any segment condition — all in a visual builder." },
      { title: "Design with a no-code editor", body: "Tooltips, spotlights, banners, modals, and multi-step walkthroughs — customizable to match your brand without any code." },
      { title: "Measure engagement and optimize", body: "Track dismissal rates, click-through, and downstream conversion for every nudge. A/B test variations automatically." },
    ],
    capabilities: [
      { icon: <Target className="w-5 h-5" />, title: "Behaviour Triggers", desc: "Fire nudges based on any user action or profile condition." },
      { icon: <Layers className="w-5 h-5" />, title: "Multi-step Walkthroughs", desc: "Guide users through complex workflows step by step." },
      { icon: <Globe className="w-5 h-5" />, title: "No-code Editor", desc: "Design and deploy without a single line of code." },
      { icon: <Users className="w-5 h-5" />, title: "Audience Targeting", desc: "Show nudges only to users who need them." },
      { icon: <BarChart3 className="w-5 h-5" />, title: "Engagement Analytics", desc: "Track CTR, dismissals, and downstream impact." },
      { icon: <FlaskConical className="w-5 h-5" />, title: "A/B Test Nudges", desc: "Test copy, timing, and placement variations." },
    ],
    useCaseTitle: "SaaS onboarding completion improved by 56%",
    useCaseBody: "Users who skip a critical onboarding step ('Connect your CRM') get a triggered nudge 10 minutes after login. The nudge shows a 90-second walkthrough. Users who complete it have 4x higher 90-day retention.",
    related: [
      { label: "A/B Experiments", href: "/platform/experiments" },
      { label: "NPS & Surveys", href: "/platform/nps-surveys" },
      { label: "Gamification", href: "/platform/gamification" },
    ],
  },

  "nps-surveys": {
    eyebrow: "Optimization · Feedback",
    category: "Optimization",
    title: "Listen to every customer.",
    titleAccent: "Act on every signal.",
    subtitle: "Deploy NPS, CSAT, CES, and custom surveys at the right moment in the customer journey — triggered by behaviour, profile events, or campaign interactions.",
    steps: [
      { title: "Trigger surveys at the right moment", body: "Show an NPS survey 3 days after onboarding, a CSAT after support resolution, or a custom survey when a contract renews — all automated." },
      { title: "Collect and analyse responses", body: "Responses are stored against the customer profile. AI categorizes open-ended feedback into themes automatically." },
      { title: "Act on detractor signals", body: "Low NPS triggers are automatically routed to the right team — churn prevention campaign, customer success call, or leadership escalation." },
    ],
    capabilities: [
      { icon: <Star className="w-5 h-5" />, title: "NPS, CSAT & CES", desc: "Industry-standard survey types out of the box." },
      { icon: <Target className="w-5 h-5" />, title: "Triggered Delivery", desc: "Send surveys based on behaviour, milestones, or time." },
      { icon: <Brain className="w-5 h-5" />, title: "AI Sentiment Analysis", desc: "Categorize open-ended responses by theme automatically." },
      { icon: <Zap className="w-5 h-5" />, title: "Detractor Workflows", desc: "Automatically escalate low scores to save accounts." },
      { icon: <BarChart3 className="w-5 h-5" />, title: "Trend Dashboard", desc: "Track score trends by segment, channel, and time period." },
      { icon: <Globe className="w-5 h-5" />, title: "Multi-channel Delivery", desc: "WhatsApp, email, in-app, and SMS delivery options." },
    ],
    useCaseTitle: "Telecom detects churn risk from NPS drop",
    useCaseBody: "NPS survey sent 2 weeks after a service complaint. Detractors (score 0-6) automatically enter a 3-step win-back sequence with a personalized retention offer. Churn rate for this segment drops 34%.",
    related: [
      { label: "Journey Orchestration", href: "/platform/journey-orchestration" },
      { label: "Behavioral Analytics", href: "/platform/behavioral-analytics" },
      { label: "AI Decisioning", href: "/platform/ai-decisioning" },
    ],
  },

  "funnels": {
    eyebrow: "Optimization · Analytics",
    category: "Optimization",
    title: "Find every leak.",
    titleAccent: "Fix every funnel.",
    subtitle: "Build conversion funnels from any sequence of events, see exactly where customers drop off, and understand which cohorts convert best — with customer profile context throughout.",
    steps: [
      { title: "Define your funnel steps", body: "Select any events as funnel steps — page visits, CTA clicks, form submissions, call completions, or custom events — in any combination." },
      { title: "Identify drop-off with profile context", body: "See conversion rates at each step, broken down by segment, device, channel, or any profile attribute." },
      { title: "Diagnose and act", body: "From any drop-off point, launch an experiment, deploy a nudge, or create a targeted re-engagement campaign — in one click." },
    ],
    capabilities: [
      { icon: <TrendingUp className="w-5 h-5" />, title: "Multi-step Funnels", desc: "Define funnels from any combination of events." },
      { icon: <Users className="w-5 h-5" />, title: "Cohort Breakdown", desc: "Compare conversion rates across different user cohorts." },
      { icon: <Activity className="w-5 h-5" />, title: "Time-to-convert Analysis", desc: "See how long cohorts take to move through each step." },
      { icon: <Target className="w-5 h-5" />, title: "Segment Comparison", desc: "Filter funnels by any customer segment." },
      { icon: <Zap className="w-5 h-5" />, title: "Actionable Insights", desc: "Launch experiments or campaigns directly from funnel views." },
      { icon: <BarChart3 className="w-5 h-5" />, title: "Retention Cohorts", desc: "Track how well different cohorts retain over time." },
    ],
    useCaseTitle: "Insurance company fixes policy purchase funnel",
    useCaseBody: "Funnel analysis shows 61% of leads drop off between 'Policy Details View' and 'Premium Calculator'. Filtered by segment: users who called an agent within 24 hours convert at 4.2x the rate of those who didn't. Trigger: auto-schedule a call after policy detail page visit. Funnel conversion improves 2.8x.",
    related: [
      { label: "Behavioral Analytics", href: "/platform/behavioral-analytics" },
      { label: "A/B Experiments", href: "/platform/experiments" },
      { label: "Heatmaps & Session Replay", href: "/platform/heatmaps" },
    ],
  },

  "gamification": {
    eyebrow: "Optimization · Engagement",
    category: "Optimization",
    title: "Make engagement",
    titleAccent: "irresistible.",
    subtitle: "Add points, badges, streaks, leaderboards, and challenges to your product or loyalty program — driving habitual usage, referrals, and repeat purchase without discounting.",
    steps: [
      { title: "Define actions that earn rewards", body: "Any customer behaviour can earn points — purchases, referrals, app logins, survey completions, call check-ins, or custom events." },
      { title: "Configure rewards and milestones", body: "Set up badges, tier progressions, and redemption options using a visual editor — no engineering required for most configurations." },
      { title: "Publish across channels", body: "Show gamification elements in-app, on web, and in WhatsApp messages — keeping customers engaged wherever they are." },
    ],
    capabilities: [
      { icon: <Award className="w-5 h-5" />, title: "Points & Badges", desc: "Flexible reward structure for any action or milestone." },
      { icon: <TrendingUp className="w-5 h-5" />, title: "Leaderboards", desc: "Competitive rankings to drive peer motivation." },
      { icon: <RefreshCw className="w-5 h-5" />, title: "Streaks & Challenges", desc: "Daily habits and time-bound challenges." },
      { icon: <Star className="w-5 h-5" />, title: "Tier Progression", desc: "Bronze → Silver → Gold loyalty tiers." },
      { icon: <Gift className="w-5 h-5" />, title: "Reward Redemption", desc: "Coupons, cashback, or custom rewards." },
      { icon: <BarChart3 className="w-5 h-5" />, title: "Engagement Analytics", desc: "Track participation rates and downstream revenue impact." },
    ],
    useCaseTitle: "D2C brand drives 2.4x repeat purchase rate",
    useCaseBody: "Customers earn points for every purchase, referral, and review. A 'Gold tier' milestone at ₹25,000 annual spend triggers an exclusive reward + personalized WhatsApp. Repeat purchase rate among gamified users is 2.4x control group.",
    related: [
      { label: "Loyalty & Referral", href: "/platform/loyalty" },
      { label: "NPS & Surveys", href: "/platform/nps-surveys" },
      { label: "Cross-Channel Campaigns", href: "/platform/campaigns" },
    ],
  },

  "journey-orchestration": {
    eyebrow: "Engagement · Automation",
    category: "Engagement",
    title: "Orchestrate journeys",
    titleAccent: "across every channel.",
    subtitle: "Build customer journeys that span WhatsApp, email, SMS, push, in-app, and agent calls — triggered by any signal, personalized to every profile, and continuously optimized by AI.",
    steps: [
      { title: "Choose your trigger", body: "Any event can start a journey: a call ended, a form submitted, a segment matched, a purchase made, or a score crossed a threshold." },
      { title: "Build the flow visually", body: "Drag-and-drop journey canvas with branching conditions, wait steps, channel selectors, A/B splits, and AI decision nodes." },
      { title: "Optimize with AI", body: "AI selects the best send time, channel, and message variant for each individual — maximizing engagement without manual tuning." },
    ],
    capabilities: [
      { icon: <Workflow className="w-5 h-5" />, title: "Visual Journey Builder", desc: "Drag-and-drop canvas with unlimited branching logic." },
      { icon: <Zap className="w-5 h-5" />, title: "Multi-trigger Support", desc: "Any event, segment, or signal can start a journey." },
      { icon: <GitBranch className="w-5 h-5" />, title: "Conditional Branching", desc: "Yes/No branches based on any profile condition." },
      { icon: <Brain className="w-5 h-5" />, title: "AI Send-time Optimization", desc: "AI picks the best time and channel per user." },
      { icon: <FlaskConical className="w-5 h-5" />, title: "A/B Splits", desc: "Test different journey paths simultaneously." },
      { icon: <BarChart3 className="w-5 h-5" />, title: "Journey Analytics", desc: "Conversion rates, drop-offs, and revenue attribution per step." },
    ],
    useCaseTitle: "Healthcare provider automated follow-up journey",
    useCaseBody: "Trigger: post-consultation call ends. Journey: WhatsApp follow-up instructions sent immediately → 48-hour check-in SMS → 7-day adherence nudge → if no response: agent callback scheduled. Follow-up completion rate: 3.1x.",
    related: [
      { label: "Cross-Channel Campaigns", href: "/platform/campaigns" },
      { label: "WhatsApp Marketing", href: "/platform/whatsapp" },
      { label: "AI Decisioning", href: "/platform/ai-decisioning" },
    ],
  },

  "campaigns": {
    eyebrow: "Engagement · Multi-channel",
    category: "Engagement",
    title: "One campaign.",
    titleAccent: "Every channel.",
    subtitle: "Launch personalized campaigns across WhatsApp, email, SMS, push, and in-app — all from a single campaign builder, with every message tailored to the full customer profile.",
    steps: [
      { title: "Build your campaign audience", body: "Select any saved segment or build a new one on the fly — filtered by behaviour, profile, RFM score, or conversation signals." },
      { title: "Compose with AI assistance", body: "AI suggests copy variations based on your segment profile. Or describe your campaign in natural language and AI Co-Marketer writes the brief." },
      { title: "Deploy and measure", body: "Real-time delivery tracking, open rates, click rates, and revenue attribution across every channel in one dashboard." },
    ],
    capabilities: [
      { icon: <Send className="w-5 h-5" />, title: "Multi-channel Delivery", desc: "WhatsApp, email, SMS, push, and in-app from one place." },
      { icon: <Brain className="w-5 h-5" />, title: "AI Copy Generation", desc: "Generate campaign messages from a prompt." },
      { icon: <Target className="w-5 h-5" />, title: "Dynamic Personalization", desc: "Every message tailored to the recipient's profile." },
      { icon: <RefreshCw className="w-5 h-5" />, title: "Smart Send-time", desc: "AI selects the optimal send time per contact." },
      { icon: <BarChart3 className="w-5 h-5" />, title: "Revenue Attribution", desc: "See exactly how much revenue each campaign drove." },
      { icon: <FlaskConical className="w-5 h-5" />, title: "A/B Subject Lines", desc: "Test subject lines and CTAs automatically." },
    ],
    useCaseTitle: "Real estate team launches win-back campaign",
    useCaseBody: "Segment: leads who visited 3+ property pages, called once, but haven't engaged in 21 days. Campaign: personalized WhatsApp with the property they viewed longest + a limited-time site visit offer. Open rate: 78%. Site visits booked: 3.2x above baseline.",
    related: [
      { label: "Journey Orchestration", href: "/platform/journey-orchestration" },
      { label: "WhatsApp Marketing", href: "/platform/whatsapp" },
      { label: "Campaign Personalisation", href: "/platform/personalisation" },
    ],
  },

  "whatsapp": {
    eyebrow: "Engagement · WhatsApp",
    category: "Engagement",
    title: "Meet your customers",
    titleAccent: "where they already are.",
    subtitle: "ConvoBrains is a WhatsApp Business API partner. Send transactional alerts, marketing campaigns, and two-way conversational messages — all triggered by customer signals and personalized to each profile.",
    steps: [
      { title: "Connect WhatsApp Business API", body: "Get verified and connected in days, not months. ConvoBrains manages the BSP relationship and compliance so you can focus on messaging." },
      { title: "Build WhatsApp journeys", body: "Design multi-step WhatsApp sequences with AI-personalized messages, quick-reply buttons, media, and conditional branching." },
      { title: "Enable two-way conversations", body: "Customer replies are captured, routed to agents when needed, and always added to the customer profile for future context." },
    ],
    capabilities: [
      { icon: <MessageSquare className="w-5 h-5" />, title: "WhatsApp API Partner", desc: "Official BSP with fast onboarding and compliance support." },
      { icon: <Brain className="w-5 h-5" />, title: "AI-personalized Messages", desc: "Each message tailored to the recipient's profile and history." },
      { icon: <GitBranch className="w-5 h-5" />, title: "Interactive Sequences", desc: "Quick replies, carousels, and decision trees." },
      { icon: <Users className="w-5 h-5" />, title: "Two-way Conversations", desc: "Replies captured and routed to agents with full context." },
      { icon: <BarChart3 className="w-5 h-5" />, title: "Delivery Analytics", desc: "Delivered, read, replied, and converted — tracked per contact." },
      { icon: <Shield className="w-5 h-5" />, title: "Compliance Built-in", desc: "Opt-in management, DND compliance, and audit logs." },
    ],
    useCaseTitle: "Insurance renewal sequence via WhatsApp",
    useCaseBody: "30 days before renewal: 'Your policy expires soon — here's what's covered.' 14 days: premium amount + one-click renew button. 7 days: agent offer for a personalised call. Renewal rate: +41% vs email-only.",
    related: [
      { label: "Journey Orchestration", href: "/platform/journey-orchestration" },
      { label: "Cross-Channel Campaigns", href: "/platform/campaigns" },
      { label: "Conversation Intelligence", href: "/platform/conversation-intelligence" },
    ],
  },

  "personalisation": {
    eyebrow: "Engagement · Personalization",
    category: "Engagement",
    title: "Every message,",
    titleAccent: "made for one person.",
    subtitle: "Personalize every campaign, nudge, and communication using the full customer profile — intent from calls, behavioural data, purchase history, and AI predictions — not just name and email.",
    steps: [
      { title: "Access the full profile in every message", body: "Any campaign or journey can reference any profile attribute: past purchases, call intent, predicted LTV, segment, city, language preference, and more." },
      { title: "Let AI generate variants at scale", body: "AI creates personalized message variations for each segment — you get thousands of personalized messages from one campaign brief." },
      { title: "Measure personalization lift", body: "Compare personalized vs generic campaigns on open rate, click rate, revenue, and retention — side by side." },
    ],
    capabilities: [
      { icon: <Brain className="w-5 h-5" />, title: "AI Content Generation", desc: "Personalized copy for every recipient from one template." },
      { icon: <Users className="w-5 h-5" />, title: "Profile-based Tokens", desc: "Reference any profile attribute in any message." },
      { icon: <Target className="w-5 h-5" />, title: "Product Recommendations", desc: "AI recommends the right product per customer profile." },
      { icon: <Globe className="w-5 h-5" />, title: "Multi-language Support", desc: "Personalize in the customer's preferred language." },
      { icon: <BarChart3 className="w-5 h-5" />, title: "Personalization Analytics", desc: "Measure the lift from personalization vs generic messaging." },
      { icon: <Zap className="w-5 h-5" />, title: "Real-time Personalization", desc: "Web and app content personalized as customer browses." },
    ],
    useCaseTitle: "SaaS company personalizes trial outreach by use case",
    useCaseBody: "During onboarding call, the customer mentions 'we need this for our sales team.' Every subsequent email, nudge, and in-app message references sales use cases — not generic features. Trial-to-paid rate for this segment: 2.3x higher than generic group.",
    related: [
      { label: "AI Co-Marketer", href: "/platform/ai-co-marketer" },
      { label: "Journey Orchestration", href: "/platform/journey-orchestration" },
      { label: "One Customer View", href: "/platform/one-customer-view" },
    ],
  },

  "loyalty": {
    eyebrow: "Engagement · Retention",
    category: "Engagement",
    title: "Turn customers into",
    titleAccent: "advocates.",
    subtitle: "Build referral programs, loyalty tiers, and reward mechanics that convert one-time buyers into long-term advocates — all connected to your customer profiles and journey flows.",
    steps: [
      { title: "Design your loyalty structure", body: "Set up points earning rules, tier thresholds, redemption options, and referral rewards using a visual configuration tool." },
      { title: "Trigger loyalty moments automatically", body: "Reward milestones, tier upgrades, and referral successes trigger personalized WhatsApp messages and email communications automatically." },
      { title: "Measure loyalty ROI", body: "Track LTV by tier, referral attribution, and redemption rates — alongside all other customer metrics in one dashboard." },
    ],
    capabilities: [
      { icon: <Award className="w-5 h-5" />, title: "Loyalty Tiers", desc: "Bronze to Gold tier progression with automated rewards." },
      { icon: <Heart className="w-5 h-5" />, title: "Referral Programs", desc: "Referral tracking, attribution, and automated rewards." },
      { icon: <Gift className="w-5 h-5" />, title: "Flexible Rewards", desc: "Cashback, coupons, exclusive access, or custom rewards." },
      { icon: <Zap className="w-5 h-5" />, title: "Milestone Automation", desc: "Automatically trigger comms at tier milestones." },
      { icon: <BarChart3 className="w-5 h-5" />, title: "LTV by Tier", desc: "See revenue and retention impact by loyalty tier." },
      { icon: <Brain className="w-5 h-5" />, title: "AI Reward Optimization", desc: "AI suggests optimal reward values per segment." },
    ],
    useCaseTitle: "D2C brand builds ₹5Cr referral engine",
    useCaseBody: "Every post-purchase WhatsApp includes a personalized referral link. Referrers earn reward points. The top 10% of referrers get VIP tier status with exclusive early access. Referral-driven revenue: 22% of total GMV within 6 months.",
    related: [
      { label: "Gamification", href: "/platform/gamification" },
      { label: "Cross-Channel Campaigns", href: "/platform/campaigns" },
      { label: "Journey Orchestration", href: "/platform/journey-orchestration" },
    ],
  },

  "ai-co-marketer": {
    eyebrow: "Agentic AI · Productivity",
    category: "Agentic AI",
    title: "Your AI marketing partner.",
    titleAccent: "Always on.",
    subtitle: "Describe a campaign in plain language, ask a data question, or request a segment — and AI Co-Marketer turns it into a fully configured campaign, insight, or audience in seconds.",
    steps: [
      { title: "Describe what you want", body: "Type in natural language: 'Find all customers who haven't purchased in 60 days and had a positive call sentiment' — or 'Create a win-back campaign for dormant insurance leads.'" },
      { title: "AI builds it", body: "The system creates the segment, drafts the campaign messages across all channels, sets the targeting rules, and estimates expected reach and conversion — before you click a button." },
      { title: "You review, refine, and launch", body: "You stay in control: tweak any element, request alternatives, and launch when you're satisfied — in minutes, not hours." },
    ],
    capabilities: [
      { icon: <BotMessageSquare className="w-5 h-5" />, title: "Natural Language Campaigns", desc: "Describe a campaign and AI builds it for you." },
      { icon: <Brain className="w-5 h-5" />, title: "Instant Insights", desc: "Ask any data question in plain English." },
      { icon: <Target className="w-5 h-5" />, title: "AI Segment Builder", desc: "Describe your audience and AI creates the segment." },
      { icon: <Zap className="w-5 h-5" />, title: "Copy Generation", desc: "AI writes all channel variants from a brief." },
      { icon: <BarChart3 className="w-5 h-5" />, title: "Performance Forecasting", desc: "Estimated reach and conversion before you launch." },
      { icon: <RefreshCw className="w-5 h-5" />, title: "Continuous Optimization", desc: "AI monitors live campaigns and suggests adjustments." },
    ],
    useCaseTitle: "Marketing team launches campaign in 8 minutes",
    useCaseBody: "Old process: 3 team members, 2 days of briefing, copywriting, and Jira tickets. New process: one person types 'Create a WhatsApp win-back for telecom customers who complained about data speed in the last 30 days and haven't churned yet.' AI builds and pre-populates everything. Campaign launched in 8 minutes.",
    related: [
      { label: "AI Agents", href: "/platform/ai-agents" },
      { label: "Campaign Personalisation", href: "/platform/personalisation" },
      { label: "AI Decisioning", href: "/platform/ai-decisioning" },
    ],
  },

  "ai-agents": {
    eyebrow: "Agentic AI · Autonomous",
    category: "Agentic AI",
    title: "AI that works",
    titleAccent: "while you sleep.",
    subtitle: "ConvoBrains AI Agents autonomously monitor your data, identify opportunities and risks, create segments, launch campaigns, and escalate when human judgment is needed — continuously.",
    steps: [
      { title: "Configure agent goals and guardrails", body: "Define what the agent should optimize for (conversions, churn reduction, engagement rate) and set approval thresholds — what it can do autonomously vs what requires your sign-off." },
      { title: "Agents monitor and act", body: "Continuously scanning profiles, behavioural patterns, and funnel data — agents surface insights, build segments, draft campaigns, and execute approved actions 24/7." },
      { title: "Escalate with full context", body: "When an agent identifies something outside its guardrails, it creates an escalation with the full data, its recommendation, and a one-click approval." },
    ],
    capabilities: [
      { icon: <BotMessageSquare className="w-5 h-5" />, title: "Autonomous Execution", desc: "Agents execute pre-approved workflows without human input." },
      { icon: <Brain className="w-5 h-5" />, title: "Continuous Monitoring", desc: "24/7 scanning for opportunities, risks, and anomalies." },
      { icon: <Shield className="w-5 h-5" />, title: "Configurable Guardrails", desc: "You define what agents can and can't do autonomously." },
      { icon: <Zap className="w-5 h-5" />, title: "Real-time Triggering", desc: "Agents act within seconds of a qualifying event." },
      { icon: <BarChart3 className="w-5 h-5" />, title: "Agent Activity Log", desc: "Full audit trail of every agent action and decision." },
      { icon: <RefreshCw className="w-5 h-5" />, title: "Self-improving", desc: "Agents learn from results and improve recommendations over time." },
    ],
    useCaseTitle: "Churn prevention agent saves insurance accounts",
    useCaseBody: "Agent monitors all customer profiles for churn signals (negative call sentiment + no engagement in 14 days + renewal within 30 days). When a match is found: agent automatically creates a personalized retention offer and routes to the assigned relationship manager with a pre-drafted message. No manual scanning required.",
    related: [
      { label: "AI Co-Marketer", href: "/platform/ai-co-marketer" },
      { label: "AI Decisioning", href: "/platform/ai-decisioning" },
      { label: "Journey Orchestration", href: "/platform/journey-orchestration" },
    ],
  },

  "ai-decisioning": {
    eyebrow: "Agentic AI · Intelligence",
    category: "Agentic AI",
    title: "The right action for",
    titleAccent: "every customer, every time.",
    subtitle: "ConvoBrains AI Decisioning evaluates every customer at every moment and determines the optimal next action — channel, message, timing, and offer — in real time.",
    steps: [
      { title: "Define your action library", body: "Configure the possible actions: send WhatsApp, trigger email, schedule call, show nudge, apply discount, or flag for agent. Set constraints per customer per day." },
      { title: "AI scores and selects", body: "For each customer event, the decisioning engine scores all possible actions based on predicted conversion probability, customer fatigue risk, and business rules — then selects and triggers the optimal one." },
      { title: "Learn and improve continuously", body: "Every outcome is fed back into the model. The engine improves its predictions continuously — the longer it runs, the smarter it gets." },
    ],
    capabilities: [
      { icon: <Brain className="w-5 h-5" />, title: "Real-time Decisions", desc: "Sub-second next best action evaluation per customer event." },
      { icon: <Target className="w-5 h-5" />, title: "Multi-objective Optimization", desc: "Balance conversion, LTV, satisfaction, and fatigue simultaneously." },
      { icon: <Shield className="w-5 h-5" />, title: "Business Rule Controls", desc: "Hard rules that override AI when business policy requires it." },
      { icon: <BarChart3 className="w-5 h-5" />, title: "Explainable Decisions", desc: "See exactly why the AI chose each action for each customer." },
      { icon: <RefreshCw className="w-5 h-5" />, title: "Continuous Learning", desc: "Model improves from every interaction outcome automatically." },
      { icon: <Zap className="w-5 h-5" />, title: "Cross-channel Coordination", desc: "Prevents message duplication and fatigue across channels." },
    ],
    useCaseTitle: "Real estate CX team stops blasting, starts deciding",
    useCaseBody: "Instead of segment-blasting 10,000 leads with the same WhatsApp, AI Decisioning evaluates each lead's last call sentiment, web engagement, days since last contact, and predicted conversion probability — then selects whether to send a WhatsApp, schedule an agent call, or hold off for 48 hours. Conversion: +3.1x. Unsubscribes: -67%.",
    related: [
      { label: "AI Agents", href: "/platform/ai-agents" },
      { label: "AI Co-Marketer", href: "/platform/ai-co-marketer" },
      { label: "Predictive Scoring", href: "/platform/predictive-scoring" },
    ],
  },

  "conversation-intelligence": {
    eyebrow: "Intelligence · Differentiator",
    category: "Conversation Intelligence",
    title: "The data layer",
    titleAccent: "other CDPs can't touch.",
    subtitle: "ConvoBrains' Conversation Intelligence engine processes every call transcript and chat message to extract intent, emotion, objections, budget signals, and competitor mentions — transforming unstructured conversation into structured customer intelligence.",
    steps: [
      { title: "Call received & transcribed", body: "Every inbound and outbound call is transcribed in real time using speech-to-text optimized for Indian accents and industry terminology." },
      { title: "Signals extracted by AI", body: "NLP models identify intent level, budget mentioned, objections raised, competitor names, sentiment trajectory, and 50+ other signals per call." },
      { title: "Customer profile updated", body: "Extracted signals are merged into the customer's unified profile — available to every agent, campaign, and AI model within seconds of the call ending." },
      { title: "Next best action triggered", body: "Based on the signals, the platform decides: send a follow-up WhatsApp, schedule a callback, flag for escalation, or launch a nurture sequence — automatically." },
      { title: "Conversation feeds predictions", body: "Call signals train and refine the predictive models — improving churn prediction, propensity scoring, and segmentation for every future interaction." },
    ],
    capabilities: [
      { icon: <Mic className="w-5 h-5" />, title: "Real-time Transcription", desc: "Accurate transcription optimized for regional accents and industry vocabulary." },
      { icon: <Brain className="w-5 h-5" />, title: "50+ Signal Extraction", desc: "Intent, sentiment, budget, objections, competitors, urgency, and more." },
      { icon: <Target className="w-5 h-5" />, title: "Intent Classification", desc: "High / Medium / Low intent tagged per call, updated per interaction." },
      { icon: <Activity className="w-5 h-5" />, title: "Sentiment Tracking", desc: "Sentiment trajectory tracked across the full customer relationship." },
      { icon: <MessageSquare className="w-5 h-5" />, title: "Chat Intelligence", desc: "Same extraction applied to WhatsApp, live chat, and email threads." },
      { icon: <Zap className="w-5 h-5" />, title: "Instant Profile Update", desc: "Signals written to customer profile within seconds of call."  },
    ],
    useCaseTitle: "This is the page to share when a prospect asks: what makes you different from CleverTap or MoEngage?",
    useCaseBody: "CleverTap and MoEngage know what your customers click. ConvoBrains knows what they say — and there's no more reliable signal of intent than the words a customer speaks on a call. A buyer who mentions 'I'm ready to sign by end of month' is fundamentally different from a buyer who just visited the pricing page. We capture the former. Every other CDP only sees the latter.",
    related: [
      { label: "One Customer View", href: "/platform/one-customer-view" },
      { label: "AI Decisioning", href: "/platform/ai-decisioning" },
      { label: "Journey Orchestration", href: "/platform/journey-orchestration" },
    ],
    isPremium: true,
  },
};

// ─── Page component ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return Object.keys(featureData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return {
    title: "Platform Feature | ConvoBrains",
    description: "Explore ConvoBrains platform features — AI-powered CDP, CRO, and Marketing Automation.",
  };
}

export default async function PlatformFeatureSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = featureData[slug];
  if (!data) notFound();

  const isPremium = data.isPremium ?? false;
  const stepCount = data.steps.length;

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <EyebrowTag label={data.eyebrow} dark />
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-[1.1] mb-6 mt-2 text-shadow-hero">
              {data.title}
              <br />
              <span className="text-accent">{data.titleAccent}</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl text-shadow-sm">
              {data.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/demo" variant="primary" size="lg">
                Book a Demo
              </Button>
              <Button href="/platform" variant="outline" size="lg" className="!border-white/30 !text-white hover:!bg-white/10 hover:!border-white/50">
                All Features
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <SectionWrapper bg="white">
        <ScrollReveal>
          <div className="text-center mb-14">
            <EyebrowTag label="How It Works" />
            <h2 className="text-3xl md:text-[40px] font-heading font-semibold text-navy leading-tight">
              {stepCount === 5 ? "Five steps from signal to action" : "Three steps to impact"}
            </h2>
          </div>
        </ScrollReveal>

        <div className={`grid md:grid-cols-${Math.min(stepCount, 3)} gap-6 relative`}>
          {data.steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.1}>
              <div className="relative bg-white rounded-2xl border border-border p-6 md:p-8 shadow-sm hover:shadow-md hover:border-brand/20 transition-all h-full">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-4 text-brand font-bold text-sm font-heading">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-heading font-semibold text-navy mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-mid leading-relaxed">{step.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Capabilities */}
      <SectionWrapper bg="gray">
        <ScrollReveal>
          <div className="text-center mb-14">
            <EyebrowTag label="Key Capabilities" />
            <h2 className="text-3xl md:text-[40px] font-heading font-semibold text-navy leading-tight">
              What&apos;s included
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.capabilities.map((cap, i) => (
            <ScrollReveal key={cap.title} delay={i * 0.08}>
              <div className={`bg-white rounded-2xl border p-6 hover:shadow-md transition-all h-full ${isPremium ? "border-brand/20 hover:border-brand/40" : "border-border hover:border-brand/20"}`}>
                <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center mb-4 text-brand">
                  {cap.icon}
                </div>
                <h3 className="text-base font-heading font-semibold text-navy mb-2">{cap.title}</h3>
                <p className="text-sm text-neutral-mid leading-relaxed">{cap.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Real-world use case */}
      <SectionWrapper bg="white">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <EyebrowTag label="Real-world Use Case" />
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-navy mb-4 mt-2">
              {data.useCaseTitle}
            </h2>
            <div className="bg-gradient-to-br from-brand/5 to-accent/5 rounded-2xl border border-brand/15 p-8">
              <p className="text-neutral-mid leading-relaxed text-base">
                {data.useCaseBody}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* Related features */}
      <SectionWrapper bg="gray">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-semibold text-navy">Related features</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {data.related.map((rel) => (
              <Link
                key={rel.label}
                href={rel.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-white text-sm font-medium text-neutral-mid hover:border-brand hover:text-brand transition-colors"
              >
                {rel.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-brand/20 bg-brand/5 text-sm font-medium text-brand hover:bg-brand/10 transition-colors"
            >
              View all features <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-gradient-to-br from-brand to-brand-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-semibold text-white mb-4">
              See this in action
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Get a live walkthrough of this feature and how it fits into your specific workflow.
            </p>
            <Button
              href="/demo"
              variant="primary"
              size="lg"
              className="!bg-white !text-brand-dark hover:!bg-white/90"
            >
              Book a Demo <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
