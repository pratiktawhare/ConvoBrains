export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-navy mb-3">
            Privacy Policy
          </h1>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-neutral-light border border-border text-neutral-mid">
            Last updated: January 9, 2026
          </span>
        </div>

        <div className="bg-white rounded-2xl border border-border p-6 sm:p-10 shadow-sm prose-sm">
          <div className="space-y-6 text-sm text-neutral-mid leading-relaxed">
            <p>
              At ConvoBrains, we take your privacy seriously. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <div>
              <h2 className="text-base font-semibold text-navy mb-2">1. Information We Collect</h2>
              <p className="mb-3">
                We collect information that you strictly provide to us when you register for an account, express
                interest in obtaining information about us or our products and services, or otherwise when you
                contact us.
              </p>
              <p className="font-semibold text-navy mb-1">Personal Data</p>
              <p className="mb-2">Personally identifiable information may include, but is not limited to:</p>
              <ul className="list-none space-y-1 pl-0">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Cookies and Usage Data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-semibold text-navy mb-2">2. How We Use Your Information</h2>
              <p className="mb-2">We use the information we collect or receive:</p>
              <ul className="list-none space-y-1 pl-0">
                <li>To facilitate account creation and logon process.</li>
                <li>To send you marketing and promotional communications.</li>
                <li>To send administrative information to you.</li>
                <li>To fulfill and manage your orders.</li>
                <li>To post testimonials (with your consent).</li>
                <li>To request feedback.</li>
                <li>To protect our Services.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-semibold text-navy mb-2">3. Data Retention</h2>
              <p>
                We will retain your Personal Data only for as long as is necessary for the purposes set out in
                this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply
                with our legal obligations (for example, if we are required to retain your data to comply with
                applicable laws), resolve disputes, and enforce our legal agreements and policies.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-navy mb-2">4. Data Security</h2>
              <p>
                The security of your data is important to us, but remember that no method of transmission over
                the Internet, or method of electronic storage is 100% secure. While we strive to use commercially
                acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-navy mb-2">5. Service Providers</h2>
              <p>
                We may employ third party companies and individuals to facilitate our Service (&quot;Service
                Providers&quot;), to provide the Service on our behalf, to perform Service-related services or to
                assist us in analyzing how our Service is used. These third parties have access to your Personal
                Data only to perform these tasks on our behalf and are obligated not to disclose or use it for
                any other purpose.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-navy mb-2">6. Children&apos;s Privacy</h2>
              <p>
                Our Service does not address anyone under the age of 18 (&quot;Children&quot;). We do not knowingly
                collect personally identifiable information from anyone under the age of 18. If you are a parent
                or guardian and you are aware that your Children has provided us with Personal Data, please
                contact us.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-navy mb-2">7. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting
                the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on
                our Service, prior to the change becoming effective and update the &quot;effective date&quot; at
                the top of this Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-navy mb-2">8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@convobrains.com" className="text-brand hover:underline">
                  privacy@convobrains.com
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
