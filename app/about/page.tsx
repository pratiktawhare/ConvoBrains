import { Check } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-bold text-navy leading-[1.15] mb-6">
            Turning Every Conversation into
            <br />
            <span className="text-brand">Customer Intelligence</span>
          </h1>
          <p className="text-lg text-neutral-mid max-w-2xl mx-auto">
            ConvoBrains is an AI-powered customer data platform that captures voice calls,
            chats, and digital interactions — then turns them into unified profiles,
            smart segments, and automated next-best actions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-surface border-t border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* Mission */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 mb-5">
                Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-5 leading-tight">
                One Platform for Every Customer Touchpoint
              </h2>
              <p className="text-neutral-mid leading-relaxed">
                Most businesses have customer data scattered across CRMs, call logs,
                chat tools, and spreadsheets — with no way to connect the dots.
                ConvoBrains brings it all together into one intelligent platform so
                you can understand, segment, and act on every customer interaction
                in real time.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl border border-border p-8">
              <h2 className="text-2xl font-heading font-bold text-navy mb-4">
                Our Vision
              </h2>
              <p className="text-neutral-mid leading-relaxed mb-6">
                To build a world where no business loses a customer because of a
                missed signal. We envision a future where AI listens to every
                conversation, understands intent, and triggers the right action —
                before the customer drops off.
              </p>
              <ul className="space-y-3">
                {[
                  "Unified customer profiles from every channel",
                  "AI-driven next-best actions in real time",
                  "Automated journeys from conversation to conversion",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span className="text-sm text-navy">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-3">
              Our Core Values
            </h2>
            <p className="text-neutral-mid">
              The principles that guide every decision we make.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Privacy First",
                desc: "We treat your data with the highest level of security and confidentiality. Your conversations belong to you.",
              },
              {
                title: "Customer Obsession",
                desc: "We build what solves real problems, not just what looks cool. Your success is our primary metric.",
              },
              {
                title: "Continuous Evolution",
                desc: "The AI landscape changes daily. We ship fast and iterate faster to keep you ahead of the curve.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-neutral-light p-6"
              >
                <h3 className="text-lg font-heading font-bold text-navy mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-neutral-mid leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-surface border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-6">
            Our Story
          </h2>
          <p className="text-neutral-mid leading-relaxed mb-6">
            Founded in 2025, ConvoBrains started with a simple observation: businesses
            were losing millions in revenue because their customer data lived in silos.
            CRMs tracked tickets, not people. Call recordings sat unanalyzed. Chat logs
            disappeared after sessions ended.
          </p>
          <p className="text-neutral-mid leading-relaxed">
            We set out to build an AI-native customer data platform that captures every
            voice call, chat, and digital interaction — then turns it into unified
            profiles and automated actions from Day 1. Today, we help sales and support
            teams across industries stop guessing and start predicting.
          </p>
        </div>
      </section>
    </>
  );
}
