import React from "react";

const RefundPolicy: React.FC = () => {
  return (
    <div className="bg-light text-primary px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Refund Policy</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <section className="mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-secondary">
              1. No Refund Policy
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              For the Pharmanecia 4.E conference, we have a strict no-refund
              policy. Once you have completed your registration and payment, no
              refunds will be issued under any circumstances.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-secondary">
              2. Rationale
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              This policy is in place to ensure the financial stability and
              successful planning of the conference. The funds from
              registrations are immediately allocated to various aspects of
              conference organization, including venue booking, speaker
              arrangements, and material preparation.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-secondary">
              3. Transferability
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              While we do not offer refunds, we do allow for the transfer of
              registrations. If you are unable to attend, you may transfer your
              registration to another individual. Please contact us at least 14
              days prior to the event to process any transfer requests.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-secondary">
              4. Conference Changes
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              In the unlikely event that the conference is cancelled or
              rescheduled by the organizers, we will offer the option to
              transfer your registration to the rescheduled event or to a future
              Pharmanecia conference. However, we will not be able to refund any
              travel, accommodation, or other costs you may have incurred.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-secondary">
              5. Agreement
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              By registering for the Pharmanecia 4.E conference, you acknowledge
              that you have read, understood, and agree to this no-refund
              policy. We strongly recommend that you carefully consider your
              decision before completing your registration.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-secondary">
              6. Contact Us
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              If you have any questions about our refund policy, please contact
              us at{" "}
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

export default RefundPolicy;
