"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const sections = [
  {
    id: 1,
    title: "Introduction",
    content: (
      <>
        <p>CADI67 may disclose Personal Data and other information as follows:</p>
        <ul>
          <li>
            <strong>Third Parties that Help Provide the Messaging Service:</strong> We
            will not share your opt-in to an SMS short code campaign with a third party
            for purposes unrelated to supporting you in connection with that campaign. We
            may share your Personal Data with third parties that help us provide the
            messaging service, including platform providers, phone companies, and other
            vendors who assist in the delivery of text messages.
          </li>
          <li>
            <strong>Additional Disclosures – Affiliates:</strong> We may disclose
            Personal Data to our affiliates or subsidiaries; their use and disclosure will
            be subject to this Policy.
          </li>
          <li>
            <strong>
              Text messaging originator opt-in data and consent will not be shared with
              any third parties.
            </strong>
          </li>
        </ul>
      </>
    ),
    defaultOpen: true,
  },
  {
    id: 2,
    title: "Purpose of SMS Notifications",
    content: (
      <p>
        Our SMS notifications are used to communicate with our clients and field crews
        regarding property services including renovations, construction, painting,
        flooring, tree removal, and maintenance. Crews may send photos showing work
        status or estimates for repair work, and we verify and instruct accordingly.
      </p>
    ),
  },
  {
    id: 3,
    title: "Opt-In and Consent",
    content: (
      <p>
        By providing your phone number and opting into our SMS notifications, you
        confirm you are the owner or authorized user of the number provided. You consent
        to receive recurring automated text messages (SMS, MMS) regarding scheduled
        visits, service updates, offers, and other important notifications. Consent is
        not required to make any purchase. Message frequency may vary. Generally expect
        1–5 messages per week.
      </p>
    ),
  },
  {
    id: 4,
    title: "Opt-Out Instructions",
    content: (
      <>
        <p>Your consent is entirely voluntary. You may opt-out at any time:</p>
        <ul>
          <li>
            Reply <strong>STOP</strong>, <strong>END</strong>, <strong>CANCEL</strong>,{" "}
            <strong>UNSUBSCRIBE</strong>, or <strong>QUIT</strong> to any SMS from us.
          </li>
          <li>
            Email us at{" "}
            <a href="mailto:support@cadi67.com" className="text-primary hover:underline">
              support@cadi67.com
            </a>{" "}
            with your opt-out request.
          </li>
          <li>
            You will receive a final confirmation message; no further messages will be
            sent unless you re-enroll.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    title: "Help & Support",
    content: (
      <>
        <p>If you need assistance with SMS notifications:</p>
        <ul>
          <li>
            Reply <strong>HELP</strong> to any message.
          </li>
          <li>
            Email us at{" "}
            <a href="mailto:support@cadi67.com" className="text-primary hover:underline">
              support@cadi67.com
            </a>
            .
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    title: "Message and Data Rates",
    content: (
      <p>
        Standard message and data rates may apply. Please consult your mobile service
        provider for details regarding your text plan or data rates.
      </p>
    ),
  },
  {
    id: 7,
    title: "Privacy and Data Security",
    content: (
      <p>
        We value your privacy and are committed to protecting your personal information.
        Your data will be used solely for managing service appointments, processing
        payments, and ensuring proper communication. We do not sell, rent, or share your
        personal information with third parties for marketing purposes.
      </p>
    ),
  },
  {
    id: 8,
    title: "Data Retention",
    content: (
      <p>
        We retain your personal information only as long as necessary to fulfill the
        purposes for which it was collected, including legal, accounting, or reporting
        requirements. After this period, your data will be securely deleted or anonymized.
      </p>
    ),
  },
  {
    id: 9,
    title: "Compliance with Regulations",
    content: (
      <p>
        We comply with all relevant laws and regulations, including the Telephone Consumer
        Protection Act (TCPA) and CTIA guidelines.
      </p>
    ),
  },
  {
    id: 10,
    title: "Indemnification",
    content: (
      <p>
        You agree to indemnify, defend, and hold us harmless from any privacy, tort, or
        other claims, including claims under the TCPA or state law equivalents, arising
        from your provision of a telephone number not owned by you and/or failure to
        notify us of changes to your mobile number.
      </p>
    ),
  },
  {
    id: 11,
    title: "Participation Requirements",
    content: (
      <ul>
        <li>Be 18 years of age or older.</li>
        <li>Own a wireless device capable of two-way messaging.</li>
        <li>Be a subscriber to a wireless service with text messaging capabilities.</li>
      </ul>
    ),
  },
  {
    id: 12,
    title: "Dispute Resolution and Arbitration",
    content: (
      <p>
        By using our SMS service, you agree to resolve any disputes on an individual
        basis, not as part of any class or representative action. You waive your right to
        a trial by jury and agree claims will be resolved through final and binding
        arbitration.
      </p>
    ),
  },
  {
    id: 13,
    title: "Miscellaneous",
    content: (
      <p>
        We reserve the right to modify these Terms and Conditions at any time. Any updates
        will be communicated via SMS or email, and your continued participation constitutes
        acceptance of the modified terms.
      </p>
    ),
  },
  {
    id: 14,
    title: "Contact Information",
    content: (
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:support@cadi67.com" className="text-primary hover:underline">
            support@cadi67.com
          </a>
        </li>
        <li>
          Mailing Address: 5409 108th St, Apt 1A, Corona, NY 11368
        </li>
      </ul>
    ),
  },
];

export default function SMSTerms() {
  return (
    <section id="sms-terms" className="py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12"
        >
          <span className="inline-block text-cta text-sm font-semibold tracking-widest uppercase mb-3">
            Legal
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 font-[family-name:var(--font-heading)] text-foreground">
            SMS Terms &amp; Conditions
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-3"
        >
          {sections.map((section) => (
            <details
              key={section.id}
              className="group bg-white border border-border rounded-xl overflow-hidden hover:border-primary/20 transition-colors"
              open={section.defaultOpen}
            >
              <summary className="flex items-center gap-3 px-6 py-4 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
                {/* Chevron */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted group-open:rotate-90 transition-transform duration-200 flex-shrink-0"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
                <span className="font-bold text-foreground font-[family-name:var(--font-heading)]">
                  {section.id}. {section.title}
                </span>
              </summary>
              <div className="px-6 pb-5 pt-1 text-muted text-sm leading-relaxed sms-content">
                {section.content}
              </div>
            </details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
