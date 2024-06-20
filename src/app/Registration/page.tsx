import React from "react";

const Registration = () => {
  return (
    <div className="bg-light text-primary px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Registration</h1>

        <div className="mb-12">
          <p className="text-lg leading-relaxed text-justify mb-4">
            Registrations For Pharmanecia 4.E will start from 1st July 2024.
          </p>
          <h2 className="text-3xl font-semibold mb-4 text-secondary">
            Registration Option
          </h2>
          <p className="text-lg leading-relaxed text-justify mb-4">
            Online Registration starts from 1st July 2024. Registration is
            compulsory to participate in Pharmanecia 4.E. Online: Candidates
            have to register online by filling the form at our website.
          </p>
          <h3 className="text-2xl font-semibold mb-4 text-secondary">
            Cancellation and Refund Policy
          </h3>
          <p className="text-lg leading-relaxed text-justify mb-4">
            Amount paid for registration is non-refundable and non-transferable.
          </p>
          <h3 className="text-2xl font-semibold mb-4 text-secondary">
            Important Instructions
          </h3>
          <p className="text-lg leading-relaxed text-justify mb-4">
            Registration fee includes entry to all scientific sessions,
            conference kit, lunch, and refreshment.
          </p>
          <p className="text-lg leading-relaxed text-justify mb-4">
            Special Offer for Group Registration: 15+1. For more information,
            contact us.
          </p>
          <h3 className="text-2xl font-semibold mb-4 text-secondary">
            Mode of Payment
          </h3>
          <p className="text-lg leading-relaxed text-justify mb-4">
            Participants and paper presentation aspirants are required to make
            all online payments through the website payment gateway only.
          </p>
          <h3 className="text-2xl font-semibold mb-4 text-secondary">
            Accommodation
          </h3>
          <p className="text-lg leading-relaxed text-justify mb-4">
            Accommodation will be arranged on request in dormitories, hotels on
            additional charges. For more details, write to us at:
            <a href="mailto:pharmanecia@gmail.com" className="text-accent ml-2">
              pharmanecia@gmail.com
            </a>
          </p>
        </div>

        {/* Registration Plans */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-secondary text-center">
            Registration Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Plan 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Basic Plan
              </h3>
              <p className="text-lg mb-4">
                Includes entry to all sessions and conference kit.
              </p>
              <p className="text-lg font-semibold mb-6">$100</p>
              <button className="bg-accent text-light px-6 py-2 rounded-md hover:bg-secondary transition duration-300">
                Pay Now
              </button>
            </div>

            {/* Plan 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Standard Plan
              </h3>
              <p className="text-lg mb-4">
                Includes entry to all sessions, conference kit, and lunch.
              </p>
              <p className="text-lg font-semibold mb-6">$150</p>
              <button className="bg-accent text-light px-6 py-2 rounded-md hover:bg-secondary transition duration-300">
                Pay Now
              </button>
            </div>

            {/* Plan 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Premium Plan
              </h3>
              <p className="text-lg mb-4">
                Includes entry to all sessions, conference kit, lunch, and
                accommodation.
              </p>
              <p className="text-lg font-semibold mb-6">$200</p>
              <button className="bg-accent text-light px-6 py-2 rounded-md hover:bg-secondary transition duration-300">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
