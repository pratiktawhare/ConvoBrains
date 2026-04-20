import { notFound } from "next/navigation";
import IndustryPageClient from "./IndustryPageClient";

interface IndustryData {
  name: string;
  tagline: string;
  hero: string;
  description: string;
  challenges: { title: string; description: string }[];
  solutions: { title: string; description: string }[];
  stats: { number: string; label: string }[];
}

const industryData: Record<string, IndustryData> = {
  "real-estate": {
    name: "Real Estate",
    tagline: "From first call to site visit to booking",
    hero: "Turn property inquiries into site visits. Turn site visits into bookings.",
    description:
      "In real estate, every call is a potential deal. But brokers handle hundreds of calls a week, and most leads fall through the cracks. ConvoBrains captures every property inquiry, tracks buyer intent across calls, and triggers the right follow-up at the right time.",
    challenges: [
      { title: "Lost lead context", description: "Brokers forget what was discussed in previous calls, forcing buyers to repeat themselves." },
      { title: "No follow-up discipline", description: "Promising leads go cold because no one follows up within the critical window." },
      { title: "Generic communication", description: "All buyers get the same brochures regardless of their specific requirements." },
    ],
    solutions: [
      { title: "Call-to-profile pipeline", description: "Every property call is transcribed and key details — budget, preferred locations, BHK preference, timeline — are auto-extracted into a buyer profile." },
      { title: "Automated site visit scheduling", description: "When a buyer shows high intent, ConvoBrains automatically triggers a WhatsApp message with available time slots for a site visit." },
      { title: "Personalized property matching", description: "Buyer profiles are matched against your inventory. The next outreach includes only properties that match their stated preferences." },
    ],
    stats: [
      { number: "3.2x", label: "more site visits booked" },
      { number: "47%", label: "faster lead response time" },
      { number: "28%", label: "higher booking conversion" },
    ],
  },
  telecom: {
    name: "Telecom",
    tagline: "From complaint call to upsell to loyalty",
    hero: "Transform support calls into upsell opportunities and loyalty triggers.",
    description:
      "Telecom companies handle millions of calls. Most are complaints. But inside every complaint lies a retention opportunity and an upsell signal. ConvoBrains extracts those signals and acts on them.",
    challenges: [
      { title: "High call volumes, low insight", description: "Millions of calls happen but insights are locked in transcripts no one reads." },
      { title: "Reactive-only support", description: "Agents only respond to problems — they never proactively prevent churn." },
      { title: "Missed upsell signals", description: "Customers mention data usage, travel plans, or family needs — but no one acts on it." },
    ],
    solutions: [
      { title: "Complaint pattern detection", description: "ConvoBrains identifies recurring complaint themes and flags customers at risk of churning before they request disconnection." },
      { title: "Intent-based upselling", description: "When a customer mentions data limits, travel, or new devices, the platform triggers targeted plan upgrade offers." },
      { title: "Loyalty trigger automation", description: "Long-tenure customers with positive sentiment get automatic loyalty rewards and retention offers." },
    ],
    stats: [
      { number: "34%", label: "reduction in churn" },
      { number: "2.1x", label: "upsell conversion rate" },
      { number: "52%", label: "fewer repeat complaints" },
    ],
  },
  insurance: {
    name: "Insurance",
    tagline: "From query to policy to renewal",
    hero: "Convert policy inquiries into purchases. Automate renewal conversations.",
    description:
      "Insurance is sold through conversations. Every call about a policy query, a claim status, or a renewal is a revenue moment. ConvoBrains ensures no moment is wasted.",
    challenges: [
      { title: "Complex policy questions", description: "Agents struggle to explain plans clearly, leading to abandoned inquiries." },
      { title: "Renewal drop-off", description: "Customers don't renew because no one proactively engages them before expiry." },
      { title: "Claim frustration", description: "Claim status calls create frustration that drives churn if not handled properly." },
    ],
    solutions: [
      { title: "Policy intent extraction", description: "ConvoBrains detects which coverage the customer needs based on conversation signals and recommends the right plan." },
      { title: "Proactive renewal flows", description: "30/15/7 days before renewal, automated sequences engage customers with personalized renewal offers." },
      { title: "Claim sentiment monitoring", description: "Track sentiment across claim-related calls. Escalate negative trends before they become cancellations." },
    ],
    stats: [
      { number: "41%", label: "higher renewal rates" },
      { number: "2.8x", label: "policy conversion from calls" },
      { number: "60%", label: "fewer escalated complaints" },
    ],
  },
  retail: {
    name: "Retail",
    tagline: "From browse to cart recovery to win-back",
    hero: "Recover abandoned carts. Win back dormant shoppers. Drive repeat purchases.",
    description:
      "Retail customers interact across web, WhatsApp, and phone. ConvoBrains unifies these interactions into a single profile and triggers the right re-engagement at the right moment.",
    challenges: [
      { title: "Cart abandonment", description: "70% of carts are abandoned, and generic reminder emails don't work anymore." },
      { title: "Dormant customer base", description: "Once-loyal customers go silent, and there's no system to win them back." },
      { title: "Channel fragmentation", description: "Customer interactions are scattered across web, app, WhatsApp, and calls." },
    ],
    solutions: [
      { title: "Conversation-triggered recovery", description: "If a customer calls about a product and then abandons the cart, ConvoBrains triggers a personalized WhatsApp with the exact product." },
      { title: "Behavioral win-back", description: "Dormant customers receive tailored campaigns based on their past conversation history and purchase patterns." },
      { title: "Unified customer profiles", description: "Web, app, WhatsApp, and call data merge into one profile for consistent personalization across channels." },
    ],
    stats: [
      { number: "3.4x", label: "cart recovery rate" },
      { number: "22%", label: "dormant customer reactivation" },
      { number: "1.8x", label: "repeat purchase rate" },
    ],
  },
  saas: {
    name: "SaaS",
    tagline: "From trial to activation to expansion",
    hero: "Activate trial users. Prevent churn. Expand accounts through conversation signals.",
    description:
      "SaaS growth depends on activation, retention, and expansion. ConvoBrains captures signals from sales calls, support conversations, and onboarding check-ins to drive all three.",
    challenges: [
      { title: "Low trial activation", description: "Most trial users never reach the 'aha moment' and silently churn." },
      { title: "Churn blindness", description: "By the time a customer says they want to cancel, it's already too late." },
      { title: "Expansion guesswork", description: "Upsell and cross-sell outreach is based on gut feel, not data." },
    ],
    solutions: [
      { title: "Activation nudges", description: "ConvoBrains tracks onboarding call signals and triggers targeted guidance to help users reach value faster." },
      { title: "Churn prediction", description: "Conversation sentiment, support ticket patterns, and usage signals combine to predict churn 30+ days early." },
      { title: "Expansion signals", description: "When customers mention team growth, new use cases, or feature requests in calls, the platform triggers expansion plays." },
    ],
    stats: [
      { number: "56%", label: "improvement in trial activation" },
      { number: "38%", label: "reduction in churn rate" },
      { number: "2.3x", label: "expansion revenue growth" },
    ],
  },
  healthcare: {
    name: "Healthcare",
    tagline: "From appointment to follow-up to adherence",
    hero: "Improve patient engagement. Automate follow-ups. Drive treatment adherence.",
    description:
      "Healthcare providers deal with appointment no-shows, follow-up gaps, and treatment non-adherence. ConvoBrains helps close the loop between patient conversations and care outcomes.",
    challenges: [
      { title: "Appointment no-shows", description: "Patients forget or skip appointments, wasting provider time and resources." },
      { title: "Follow-up gaps", description: "Post-consultation follow-ups are inconsistent, leading to poor outcomes." },
      { title: "Adherence drop-off", description: "Patients stop following treatment plans without consistent engagement." },
    ],
    solutions: [
      { title: "Smart reminders", description: "Appointment reminders via WhatsApp and SMS are timed based on patient conversation history and no-show risk scores." },
      { title: "Automated follow-up paths", description: "Post-consultation, ConvoBrains triggers follow-up sequences based on treatment type and patient profile." },
      { title: "Adherence monitoring", description: "Track patient engagement signals and trigger re-engagement when adherence patterns drop." },
    ],
    stats: [
      { number: "45%", label: "reduction in no-shows" },
      { number: "3.1x", label: "follow-up completion rate" },
      { number: "33%", label: "better treatment adherence" },
    ],
  },
  ecommerce: {
    name: "eCommerce & D2C",
    tagline: "From cart abandonment to repeat purchase to loyalty",
    hero: "Turn one-time buyers into loyal customers. Recover every abandoned cart.",
    description:
      "D2C brands live and die by repeat purchase rate. ConvoBrains unifies web behaviour, WhatsApp conversations, support calls, and CRM data into a single profile — then automates personalized re-engagement at every stage of the customer lifecycle.",
    challenges: [
      { title: "Cart abandonment epidemic", description: "70%+ of carts are abandoned, and generic SMS reminders no longer convert." },
      { title: "One-time buyer problem", description: "Most customers buy once and vanish — with no system to drive the second purchase." },
      { title: "Fragmented channel data", description: "Web, app, WhatsApp, and support calls live in different silos with no unified view." },
    ],
    solutions: [
      { title: "Conversation-triggered cart recovery", description: "If a customer calls about a product and then abandons the cart, ConvoBrains triggers a personalized WhatsApp with the exact product and a time-limited offer." },
      { title: "AI-powered repeat purchase journeys", description: "Based on purchase cadence, browsing patterns, and support signals, AI predicts the optimal moment and channel to prompt the next purchase." },
      { title: "Loyalty & referral automation", description: "Reward high-LTV customers automatically and trigger referral campaigns when satisfaction scores peak — no manual intervention needed." },
    ],
    stats: [
      { number: "3.4x", label: "cart recovery rate" },
      { number: "2.1x", label: "repeat purchase rate" },
      { number: "44%", label: "increase in customer LTV" },
    ],
  },
  bfsi: {
    name: "Mutual Funds / BFSI",
    tagline: "From investor onboarding to SIP completion to portfolio growth",
    hero: "Activate investors faster. Retain SIPs longer. Grow portfolio value with AI.",
    description:
      "In BFSI, trust is built through conversations — onboarding calls, query resolution, and portfolio reviews. ConvoBrains captures every signal from these interactions to build investor profiles that drive activation, retention, and growth.",
    challenges: [
      { title: "Onboarding drop-off", description: "Investors start KYC or SIP setup but abandon mid-way — and no one follows up with the right context." },
      { title: "SIP discontinuation", description: "Investors pause or stop SIPs without warning, and advisors have no early signal to intervene." },
      { title: "Generic investor communication", description: "All investors get the same newsletters regardless of portfolio size, risk appetite, or last interaction." },
    ],
    solutions: [
      { title: "Onboarding signal extraction", description: "ConvoBrains captures intent, hesitation points, and questions from onboarding calls to trigger targeted follow-ups that get investors to activation." },
      { title: "SIP churn prediction", description: "Conversation sentiment combined with payment pattern signals predicts which investors are likely to stop SIPs 30+ days in advance." },
      { title: "Personalized portfolio conversations", description: "Each investor receives communications tailored to their risk profile, portfolio performance, and stated goals — extracted from every interaction." },
    ],
    stats: [
      { number: "52%", label: "improvement in SIP activation" },
      { number: "38%", label: "reduction in SIP discontinuation" },
      { number: "2.7x", label: "advisor productivity improvement" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(industryData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // We need to handle this synchronously for static export
  // The slug will be resolved by Next.js
  return {
    title: "Industry Solutions | ConvoBrains",
    description: "See how ConvoBrains is configured for your industry.",
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = industryData[slug];

  if (!data) {
    notFound();
  }

  return <IndustryPageClient data={data} />;
}
