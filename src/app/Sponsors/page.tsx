"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  FaAward,
  FaHandshake,
  FaChartLine,
  FaLightbulb,
  FaTrophy,
} from "react-icons/fa";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Sponsors = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const benefitsRef = useRef<HTMLUListElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate title
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }

    // Animate benefits
    if (benefitsRef.current) {
      gsap.from(benefitsRef.current.children, {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 80%",
        },
      });
    }

    // Animate sponsor categories
    if (categoriesRef.current) {
      gsap.from(categoriesRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: categoriesRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 text-primary px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 ref={titleRef} className="text-4xl font-bold mb-8 text-center">
          Become a Sponsor
        </h1>

        {/* Key Points and Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-secondary text-center">
            Key Points and Benefits
          </h2>
          <ul
            ref={benefitsRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <li className="flex items-center text-lg">
              <FaChartLine className="text-accent mr-3" />
              Increase brand visibility and awareness among industry
              professionals.
            </li>
            <li className="flex items-center text-lg">
              <FaHandshake className="text-accent mr-3" />
              Network with leading researchers, industry experts, and potential
              customers.
            </li>
            <li className="flex items-center text-lg">
              <FaAward className="text-accent mr-3" />
              Showcase your products and services to a targeted audience.
            </li>
            <li className="flex items-center text-lg">
              <FaLightbulb className="text-accent mr-3" />
              Gain insights into the latest trends and developments in
              pharmaceutical research.
            </li>
            <li className="flex items-center text-lg">
              <FaTrophy className="text-accent mr-3" />
              Enhance your company&apos;s reputation and credibility within the
              industry.
            </li>
          </ul>
        </div>

        {/* Sponsor Categories */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-secondary text-center">
            Sponsor Categories
          </h2>
          <div
            ref={categoriesRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Platinum Sponsor */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Platinum Sponsor
              </h3>
              <p className="text-lg mb-4">
                Includes premier booth space, keynote speaking opportunity, logo
                on all materials, and more.
              </p>
              <p className="text-lg font-semibold mb-6">5,00,000 ₹</p>
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
              <p className="text-lg font-semibold mb-6">4,00,000 ₹</p>
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
              <p className="text-lg font-semibold mb-6">3,00,000 ₹</p>
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
              <p className="text-lg font-semibold mb-6">2,50,000 ₹</p>
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
              <p className="text-lg font-semibold mb-6">1,00,000 ₹</p>
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
