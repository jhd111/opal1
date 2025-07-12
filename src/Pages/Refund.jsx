import React from "react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen text-[#2F3E73] mx-auto">
      {/* Header Section */}
      <div className="bg-[#F6F1FD] text-center p-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1D237E] mb-6">Refund Policy</h1>
        <p className="text-lg">
          Effective Date: <strong>July 07, 2025</strong>
        </p>
      </div>

      {/* Content Section */}
      <div className="text-left space-y-8 p-10 mx-auto">
        {/* Section 1 - Refund Eligibility */}
        <section>
          <h2 className="text-xl font-semibold text-[#1D237E]">1. Refund Eligibility</h2>
          <p className="mb-2">At Opal Institute, we strive to provide high-quality educational experiences. If you are not satisfied with your enrollment, our refund policy outlines the terms under which you may request a refund.</p>
          <p className="mb-2">You may be eligible for a refund if:</p>
          <ul className="list-disc ml-6 mb-2">
            <li>You have not received your purchased voucher or your order is not fulfilled in the given time.</li>
          </ul>
          <p>Refunds are not applicable for on-time delivered products or vouchers.</p>
        </section>

        {/* Section 2 - How to Request a Refund */}
        <section>
          <h2 className="text-xl font-semibold text-[#1D237E]">2. How to Request a Refund</h2>
          <p className="mb-2">To initiate a refund request:</p>
          <ol className="list-decimal ml-6 space-y-1">
            <li>Email us at <strong>info@opalinstitute.com</strong> with:
              <ul className="ml-6 mt-1 list-disc">
                <li>Your full name</li>
                <li>Order Details</li>
                <li>Date of purchase</li>
                <li>Reason for the refund request</li>
              </ul>
            </li>
            <li>Our team will review your request within <strong>3–5 business days</strong>.</li>
            <li>If approved, the refund will be issued via the original payment method.</li>
          </ol>
        </section>

        {/* Section 3 - Non-Refundable Situations */}
        <section>
          <h2 className="text-xl font-semibold text-[#1D237E]">3. Non-Refundable Situations</h2>
          <p>We do not offer refunds under the following circumstances:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Refund request made after <strong>7 days of purchase</strong>.</li>
          </ul>
        </section>

        {/* Contact Us Section */}
        <section>
          <h2 className="text-xl font-semibold text-[#1D237E]">📩 Need Help?</h2>
          <p>
            If you have any questions about this policy, please contact us at: <br />
            Email:{" "}
            <a href="mailto:info@opalinstitute.com" className="text-blue-600 underline">
            info@opalinstitute.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;