export default function TermsOfServicePage() {
  return (
    <section className="bg-white pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-navy mb-3">
            Terms of Service
          </h1>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-neutral-light border border-border text-neutral-mid">
            Last updated: January 9, 2026
          </span>
        </div>

        <div className="bg-white rounded-2xl border border-border p-6 sm:p-10 shadow-sm prose-sm">
          <div className="space-y-6 text-sm text-neutral-mid leading-relaxed">
            <p>
              Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;) carefully before using the
              ConvoBrains website and service (the &quot;Service&quot;) operated by ConvoBrains (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
            </p>

            <div>
              <h2 className="text-base font-semibold text-navy mb-2">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Service you agree to be bound by these Terms. If you disagree with
                any part of the terms then you may not access the Service. These Terms apply to all visitors,
                users, and others who access or use the Service.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-navy mb-2">2. Accounts</h2>
              <p className="mb-3">
                When you create an account with us, you must provide us information that is accurate, complete,
                and current at all times. Failure to do so constitutes a breach of the Terms, which may result
                in immediate termination of your account on our Service.
              </p>
              <p>
                You are responsible for safeguarding the password that you use to access the Service and for any
                activities or actions under your password, whether your password is with our Service or a
                third-party service.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-navy mb-2">3. Intellectual Property</h2>
              <p>
                The Service and its original content (excluding Content provided by users), features, and
                functionality are and will remain the exclusive property of ConvoBrains and its licensors. The
                Service is protected by copyright, trademark, and other laws of both the United States and
                foreign countries.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-navy mb-2">4. Acceptable Use</h2>
              <p className="mb-2">You agree not to use the Service:</p>
              <ul className="list-none space-y-1 pl-0">
                <li>In any way that violates any applicable national or international law or regulation.</li>
                <li>
                  To transmit, or procure the sending of, any advertising or promotional material, including any
                  &quot;junk mail&quot;, &quot;chain letter&quot;, &quot;spam&quot;, or any other similar solicitation.
                </li>
                <li>
                  To impersonate or attempt to impersonate the Company, a Company employee, another user, or any
                  other person or entity.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-semibold text-navy mb-2">5. Termination</h2>
              <p>
                We may terminate or suspend access to our Service immediately, without prior notice or liability,
                for any reason whatsoever, including without limitation if you breach the Terms. All provisions of
                the Terms which by their nature should survive termination shall survive termination, including,
                without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of
                liability.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-navy mb-2">6. Limitation of Liability</h2>
              <p>
                In no event shall ConvoBrains, nor its directors, employees, partners, agents, suppliers, or
                affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages,
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                resulting from your access to or use of or inability to access or use the Service.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-navy mb-2">7. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material we will try to provide at least 30 days notice prior to any new terms taking
                effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-navy mb-2">8. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at{" "}
                <a href="mailto:legal@convobrains.com" className="text-brand hover:underline">
                  legal@convobrains.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
