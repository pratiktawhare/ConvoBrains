import Link from "next/link";
import { Shield, Globe, Lock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src="/convobrains-logo.webp" alt="ConvoBrains Logo" className="h-8 w-auto object-contain" />
              <span className="text-lg font-heading font-bold text-white">
                ConvoBrains
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              The AI-powered conversation intelligence platform for modern sales
              and support teams. Turn 100% of your customer interactions into
              revenue-generating insights.
            </p>
            <a
              href="https://www.linkedin.com/company/convobrains/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>

          {/* Navigation */}
          <div className="flex gap-16">
            <div>
              <Link href="/about" className="text-sm text-slate-300 hover:text-white transition-colors">
                About Us
              </Link>
            </div>
            <div>
              <Link href="/contact" className="text-sm text-slate-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Security & Compliance */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
              Security &amp; Compliance
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                { icon: <Shield className="w-3.5 h-3.5" />, label: "SOC 2 Type I" },
                { icon: <Globe className="w-3.5 h-3.5" />, label: "GDPR Ready" },
                { icon: <Lock className="w-3.5 h-3.5" />, label: "End-to-End Encrypted" },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300"
                >
                  {badge.icon}
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 ConvoBrains. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/convobrains/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              LinkedIn
            </a>
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
