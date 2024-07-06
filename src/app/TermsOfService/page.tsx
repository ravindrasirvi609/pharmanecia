import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-light text-primary px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Terms of Service
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <section className="mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-secondary">
              1. Introduction
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              Welcome to our conference website. These terms and conditions
              outline the rules and regulations for the use of our website and
              services.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-secondary">
              2. Acceptance of Terms
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              By accessing and using our website, you accept and agree to be
              bound by the terms and provision of this agreement. If you do not
              agree to abide by these terms, please do not use this service.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-secondary">
              3. Changes to Terms
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              We reserve the right to update or modify these terms at any time
              without prior notice. Your continued use of the site following the
              posting of any changes to the terms of service constitutes
              acceptance of those changes.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-secondary">
              4. Use of the Site
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              You agree to use the site only for lawful purposes and in a way
              that does not infringe the rights of, restrict or inhibit anyone
              else&apos;s use and enjoyment of the site.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-secondary">
              5. Intellectual Property
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              All content included on this site, such as text, graphics, logos,
              images, and software, is the property of the conference or its
              content suppliers and protected by international copyright laws.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-secondary">
              6. Limitation of Liability
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              In no event shall the conference or its suppliers be liable for
              any damages (including, without limitation, damages for loss of
              data or profit, or due to business interruption) arising out of
              the use or inability to use the materials on the site.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-secondary">
              7. Governing Law
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              These terms and conditions are governed by and construed in
              accordance with the laws of the jurisdiction in which the
              conference is held, and you irrevocably submit to the exclusive
              jurisdiction of the courts in that location.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-secondary">
              8. Contact Us
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              If you have any questions about these Terms, please contact us at{" "}
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

export default TermsOfService;
