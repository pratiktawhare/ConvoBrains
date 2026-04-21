"use client";

import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-white pt-32 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left — Info */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-navy mb-4">
              Get in Touch
            </h1>
            <p className="text-neutral-mid text-lg mb-10">
              We&apos;d love to hear from you. Our team is always here to chat.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <div className="font-semibold text-navy">Email</div>
                  <a
                    href="mailto:support@convobrains.com"
                    className="text-neutral-mid hover:text-brand transition-colors"
                  >
                    support@convobrains.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <div className="font-semibold text-navy">Phone</div>
                  <a
                    href="tel:+919650609560"
                    className="text-neutral-mid hover:text-brand transition-colors"
                  >
                    +91 9650609560
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white rounded-2xl border border-border p-6 sm:p-8 shadow-sm">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="space-y-5"
            >
              {/* Name row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full rounded-lg border border-border bg-neutral-light px-4 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full rounded-lg border border-border bg-neutral-light px-4 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full rounded-lg border border-border bg-neutral-light px-4 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full rounded-lg border border-border bg-neutral-light px-4 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition resize-y"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg bg-navy text-white font-semibold py-3 text-sm hover:bg-navy/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
