import Image from "next/image";
import React from "react";

const SponsorsPartners = () => {
  return (
    <div className="bg-light text-primary px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Sponsors and Partners
        </h1>

        {/* Sponsor Logos */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-secondary text-center">
            Our Sponsors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            {/* Sponsor 1 */}
            <div className="flex justify-center">
              <Image
                src="https://via.placeholder.com/150"
                alt="Sponsor 1"
                className="h-24"
                height={150}
                width={150}
              />
            </div>
            {/* Sponsor 2 */}
            <div className="flex justify-center">
              <Image
                src="https://via.placeholder.com/150"
                alt="Sponsor 2"
                className="h-24"
                height={150}
                width={150}
              />
            </div>
            {/* Sponsor 3 */}
            <div className="flex justify-center">
              <Image
                src="https://via.placeholder.com/150"
                alt="Sponsor 3"
                className="h-24"
                height={150}
                width={150}
              />
            </div>
            {/* Sponsor 4 */}
            <div className="flex justify-center">
              <Image
                src="https://via.placeholder.com/150"
                alt="Sponsor 4"
                className="h-24"
                height={150}
                width={150}
              />
            </div>
          </div>
        </div>

        {/* Sponsor Opportunities */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-secondary text-center">
            Sponsor Opportunities
          </h2>
          <p className="text-lg leading-relaxed text-justify mb-4">
            Becoming a sponsor for our conference provides a unique opportunity
            to showcase your brand and connect with industry leaders,
            researchers, and professionals in the field of pharmaceutical
            research. Sponsorship can help you increase brand awareness,
            generate leads, and build valuable relationships.
          </p>
          <p className="text-lg leading-relaxed text-justify mb-4">
            We offer various sponsorship packages to suit your needs, including
            platinum, gold, silver, and bronze levels. Each level offers
            different benefits such as booth space, speaking opportunities, logo
            placement, and more.
          </p>
          <p className="text-lg leading-relaxed text-justify mb-4">
            If you are interested in becoming a sponsor, please contact us at{" "}
            <a href="mailto:sponsor@conference.com" className="text-accent">
              sponsor@conference.com
            </a>{" "}
            for more information and to receive a detailed sponsorship
            prospectus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPartners;
