import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-light text-primary px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <section className="mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-secondary">
              1. Introduction
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              Welcome to our conference website. We are committed to protecting
              your personal information and your right to privacy. This privacy
              policy describes how we collect, use, and share your personal
              information.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-secondary">
              2. Information We Collect
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              We collect personal information that you voluntarily provide to us
              when you register for the conference, express an interest in
              obtaining information about us or our products and services, or
              otherwise contact us.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-secondary">
              3. How We Use Your Information
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              We use the information we collect or receive to communicate
              directly with you, manage our relationship with you, and to
              provide, improve, and develop our services.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-secondary">
              4. Sharing Your Information
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              We may share your information with third parties that perform
              services for us or on our behalf, such as payment processing, data
              analysis, email delivery, hosting services, and customer service.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-secondary">
              5. Data Security
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              We use administrative, technical, and physical security measures
              to protect your personal information. However, no electronic
              transmission over the internet or information storage technology
              can be guaranteed to be 100% secure.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-secondary">
              6. Your Privacy Rights
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              Depending on your location, you may have certain rights regarding
              your personal information, including the right to access, correct,
              update, or delete your personal information.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-secondary">
              7. Changes to This Privacy Policy
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              We may update this privacy policy from time to time in order to
              reflect changes to our practices or for other operational, legal,
              or regulatory reasons.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-secondary">
              8. Contact Us
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              If you have any questions or concerns about this privacy policy,
              please contact us at{" "}
              <a href="mailto:pharmanecia@gmail.com" className="text-accent">
                pharmanecia@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
