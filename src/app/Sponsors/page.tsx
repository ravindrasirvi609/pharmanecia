import Link from "next/link";
import React from "react";

const Sponsors = () => {
  return (
    <div className="bg-light text-primary px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Become a Sponsor
        </h1>

        {/* Key Points and Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-secondary text-center">
            Key Points and Benefits
          </h2>
          <ul className="list-disc list-inside text-lg leading-relaxed text-justify mb-4">
            <li>
              Increase brand visibility and awareness among industry
              professionals.
            </li>
            <li>
              Network with leading researchers, industry experts, and potential
              customers.
            </li>
            <li>Showcase your products and services to a targeted audience.</li>
            <li>
              Gain insights into the latest trends and developments in
              pharmaceutical research.
            </li>
            <li>
              Enhance your company’s reputation and credibility within the
              industry.
            </li>
          </ul>
        </div>

        {/* Sponsor Categories */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-secondary text-center">
            Sponsor Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Platinum Sponsor */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Platinum Sponsor
              </h3>
              <p className="text-lg mb-4">
                Includes premier booth space, keynote speaking opportunity, logo
                on all materials, and more.
              </p>
              <p className="text-lg font-semibold mb-6">$10,000</p>
              <Link href="/Sponsors/SponsorForm">
                <button className="bg-accent text-light px-6 py-2 rounded-md hover:bg-secondary transition duration-300">
                  Become a Platinum Sponsor
                </button>
              </Link>
            </div>

            {/* Gold Sponsor */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Gold Sponsor
              </h3>
              <p className="text-lg mb-4">
                Includes premium booth space, logo on materials, and more.
              </p>
              <p className="text-lg font-semibold mb-6">$7,500</p>
              <Link href="/Sponsors/SponsorForm">
                <button className="bg-accent text-light px-6 py-2 rounded-md hover:bg-secondary transition duration-300">
                  Become a Gold Sponsor
                </button>
              </Link>
            </div>

            {/* Silver Sponsor */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Silver Sponsor
              </h3>
              <p className="text-lg mb-4">
                Includes standard booth space, logo on materials, and more.
              </p>
              <p className="text-lg font-semibold mb-6">$5,000</p>
              <Link href="/Sponsors/SponsorForm">
                <button className="bg-accent text-light px-6 py-2 rounded-md hover:bg-secondary transition duration-300">
                  Become a Silver Sponsor
                </button>
              </Link>
            </div>

            {/* Bronze Sponsor */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Bronze Sponsor
              </h3>
              <p className="text-lg mb-4">
                Includes booth space, logo on materials, and more.
              </p>
              <p className="text-lg font-semibold mb-6">$2,500</p>
              <Link href="/Sponsors/SponsorForm">
                <button className="bg-accent text-light px-6 py-2 rounded-md hover:bg-secondary transition duration-300">
                  Become a Bronze Sponsor
                </button>
              </Link>
            </div>

            {/* Supporter Sponsor */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Supporter Sponsor
              </h3>
              <p className="text-lg mb-4">
                Includes logo on materials and website.
              </p>
              <p className="text-lg font-semibold mb-6">$1,000</p>
              <Link href="/Sponsors/SponsorForm">
                <button className="bg-accent text-light px-6 py-2 rounded-md hover:bg-secondary transition duration-300">
                  Become a Supporter Sponsor
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
