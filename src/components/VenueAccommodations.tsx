import React from "react";

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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.490983208213!2d76.69538641531514!3d11.411236891851387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a9468ea909%3A0x2d67c252db4ea5df!2sJSS%20College%20of%20Pharmacy!5e0!3m2!1sen!2sin!4v1623278749595!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen={true}
              loading="lazy"
              className="w-full h-96 border-0"
            ></iframe>
          </div>
        </div>

        {/* Accommodation Information */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-secondary text-center">
            Accommodation Information
          </h2>
          <p className="text-lg leading-relaxed text-justify mb-4">
            We recommend the following hotels for your stay during the
            conference. These hotels offer comfortable accommodations and are
            conveniently located near the conference venue.
          </p>
          <ul className="list-disc list-inside mb-4 text-lg text-justify">
            <li>
              <strong>Hotel A:</strong> Located 1 km from the venue, Hotel A
              offers luxurious rooms and amenities.
              <a href="#" className="text-accent ml-2">
                Visit Website
              </a>
            </li>
            <li className="mt-2">
              <strong>Hotel B:</strong> Situated 2 km from the venue, Hotel B
              provides affordable accommodations with excellent service.
              <a href="#" className="text-accent ml-2">
                Visit Website
              </a>
            </li>
            <li className="mt-2">
              <strong>Hotel C:</strong> 3 km from the venue, Hotel C offers a
              range of facilities including a gym and a restaurant.
              <a href="#" className="text-accent ml-2">
                Visit Website
              </a>
            </li>
          </ul>
          <p className="text-lg leading-relaxed text-justify mb-4">
            For travel information, Ooty is well connected by road and rail. The
            nearest airport is Coimbatore International Airport, which is
            approximately 90 km from the conference venue. Regular taxi and bus
            services are available from the airport to Ooty.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VenueAccommodations;
