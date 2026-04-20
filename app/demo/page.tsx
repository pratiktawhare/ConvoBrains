"use client";

import { useState, FormEvent } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { EyebrowTag } from "@/components/EyebrowTag";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/Button";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";

export default function Demo() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <EyebrowTag label="Book a Demo" dark />
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-[1.1] mb-6">
            See ConvoBrains
            <br />
            <span className="text-accent">in action.</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Get a personalized walkthrough of the platform, tailored to your
            industry and use case.
          </p>
        </div>
      </section>

      <SectionWrapper bg="white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 -mt-12">
          {/* Form */}
          <ScrollReveal>
            <div className="bg-white rounded-2xl border border-border p-6 md:p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-brand" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-navy mb-3">
                    Thank you!
                  </h3>
                  <p className="text-neutral-mid max-w-sm mx-auto">
                    We&apos;ve received your request and will get back to you
                    within 24 hours with available time slots.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-heading font-semibold text-navy mb-6">
                    Request your demo
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-navy mb-1.5"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors"
                          placeholder="Rahul"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-navy mb-1.5"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors"
                          placeholder="Patel"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-navy mb-1.5"
                      >
                        Work Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors"
                        placeholder="rahul@company.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-navy mb-1.5"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-navy mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="industry"
                        className="block text-sm font-medium text-navy mb-1.5"
                      >
                        Industry
                      </label>
                      <select
                        id="industry"
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors cursor-pointer"
                      >
                        <option value="">Select your industry</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="telecom">Telecom</option>
                        <option value="insurance">Insurance</option>
                        <option value="retail">Retail</option>
                        <option value="saas">SaaS</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-navy mb-1.5"
                      >
                        What are you looking to solve?
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors resize-none"
                        placeholder="Tell us about your use case..."
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full justify-center"
                    >
                      Request Demo
                    </Button>
                    <p className="text-xs text-slate-400 text-center">
                      By submitting, you agree to our Privacy Policy. We&apos;ll
                      never share your data.
                    </p>
                  </form>
                </>
              )}
            </div>
          </ScrollReveal>

          {/* Info side */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-semibold text-navy mb-3">
                  What to expect
                </h3>
                <ul className="space-y-4">
                  {[
                    "A 30-minute personalized walkthrough of the platform",
                    "Industry-specific use cases and workflow examples",
                    "Live demo of conversation intelligence in action",
                    "Custom pricing based on your team size and volume",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-brand" />
                      </div>
                      <span className="text-sm text-neutral-mid">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-neutral-light rounded-2xl border border-border p-6">
                <h4 className="text-lg font-heading font-semibold text-navy mb-4">
                  Get in touch
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-brand" />
                    <a
                      href="mailto:hello@convobrains.com"
                      className="text-sm text-neutral-mid hover:text-brand transition-colors"
                    >
                      hello@convobrains.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-brand" />
                    <span className="text-sm text-neutral-mid">
                      +91 98765 43210
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-brand" />
                    <span className="text-sm text-neutral-mid">
                      Bangalore, India
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-navy rounded-2xl p-6">
                <div className="text-xs uppercase tracking-widest text-accent/70 font-medium mb-2">
                  Trusted by
                </div>
                <div className="text-2xl font-heading font-bold text-white mb-1">
                  200+
                </div>
                <div className="text-sm text-slate-400">
                  businesses across 6 industries
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>
    </>
  );
}
