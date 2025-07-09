import React from "react";

const PrivacyPolicy = () => {
  return (
      <div className="min-h-screen  text-[#2F3E73] mx-auto text-center">
    {/* <div className=" "> */}
        <div className="bg-[#F6F1FD] p-10">

       
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1D237E] mb-6">Privacy Policy</h1>
        <p className="text-lg mb-10">
          Effective Date: <strong>July 07, 2025</strong>
        </p>
        </div>
        <div className="text-left space-y-8 p-10">
          <section>
            <h2 className="text-xl font-semibold text-[#1D237E]">1. Information We Collect</h2>
            <ul className="list-disc ml-6">
              <li>Contact details: name, email, phone</li>
              <li>Payment details (for course purchases) processed securely</li>
              <li>Technical data: IP address, device type, browser, cookies, usage logs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1D237E]">2. How We Use Your Information</h2>
            <ul className="list-disc ml-6">
              <li>Process course registrations, orders, and payments</li>
              <li>Communicate important updates (course info, invoices, support)</li>
              <li>Improve and personalize your experience</li>
              <li>Prevent fraud and maintain account security</li>
              <li>Comply with legal and auditing requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1D237E]">3. Use of Cookies</h2>
            <p>We use cookies and similar technologies to:</p>
            <ul className="list-disc ml-6">
              <li>Analyze website usage and performance</li>
              <li>Deliver relevant content and features</li>
            </ul>
            <p className="mt-2">You can disable cookies in your browser, but this may limit certain site functionalities.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1D237E]">4. Sharing Your Information</h2>
            <ul className="list-disc ml-6">
              <li>Payment processors and IT service providers</li>
              <li>Professional partners (e.g., course platforms, analytics vendors)</li>
              <li>Legal authorities when required by law</li>
              <li>Acquirers or business partners in future business restructurings</li>
            </ul>
            <p className="mt-2">We do not sell personal data for marketing or advertising purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1D237E]">5. Data Retention</h2>
            <ul className="list-disc ml-6">
              <li>While your account is active</li>
              <li>As required for business, legal, or audit purposes</li>
            </ul>
            <p className="mt-2">When no longer needed, your data will be securely deleted or anonymized.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1D237E]">6. Security Measures</h2>
            <ul className="list-disc ml-6">
              <li>Encryption (SSL/TLS) for data transmission</li>
              <li>Secure password storage</li>
              <li>Regular vulnerability testing and internal access controls</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1D237E]">7. Your Privacy Rights</h2>
            <ul className="list-disc ml-6">
              <li>Restrict or object to certain data uses</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-2">To exercise any rights, please contact us using the details below.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1D237E]">8. Third-Party Links</h2>
            <p>
              Our site may contain links to third-party websites (e.g., payment gateways,
              resources). We are not responsible for their privacy practices—please review their
              respective policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1D237E]">9. Changes to This Policy</h2>
            <p>
              We may update this policy periodically. Significant changes will be highlighted on
              this page. Your continued use indicates your acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1D237E]">📞 Contact Us</h2>
            <p>
              For any queries or privacy concerns, reach out to: <br />
              Email:{" "}
              <a href="mailto:privacy@opalinstitute.pk" className="text-blue-600 underline">
                privacy@opalinstitute.pk
              </a>
            </p>
          </section>
        </div>
      </div>
    // </div>
  );
};

export default PrivacyPolicy;
