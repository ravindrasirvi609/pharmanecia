import React from "react";
import AccommodationPlans from "./AccommodationPlans";

const VenueAccommodations = () => {
  return (
    <div className="bg-light text-primary px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Venue and Accommodations
        </h1>

        {/* Venue Details */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-secondary text-center">
            Venue Details
          </h2>
          <p className="text-lg leading-relaxed text-justify mb-4">
            The conference will be held at the JSS College of Pharmacy, Ooty, a
            premier institution known for its excellent facilities and beautiful
            surroundings. The venue is easily accessible and offers a conducive
            environment for learning and networking.
          </p>
          <div className="flex justify-center mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.0883078143543!2d76.70452457581243!3d11.401132147358766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8bd9f179dd8ed%3A0xe380d17adde20a10!2sJSS%20College%20Of%20Pharmacy%20Ooty!5e0!3m2!1sen!2sin!4v1721646776209!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen={true}
              loading="lazy"
              className="w-full h-96 border-0"
            ></iframe>
          </div>
        </div>

        {/* Accommodation Information */}
        <AccommodationPlans />
      </div>
    </div>
  );
};

export default VenueAccommodations;
