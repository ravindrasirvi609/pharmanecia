"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const SpeakersHighlights = () => {
  const boxRef = useRef<HTMLHeadingElement>(null);
  useGSAP(() => {
    gsap.from(boxRef.current, {
      y: 50,
      opacity: 0,
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 70%",
        end: "top 10%",
        scrub: true,
        markers: true,
      },
    });
  });
  return (
    <div className="bg-danger text-primary px-6 py-12" ref={boxRef}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Speakers Highlights
        </h1>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-secondary text-center">
            Keynote Speakers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Speaker 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <Image
                src="https://via.placeholder.com/150"
                alt="Speaker 1"
                className="w-32 h-32 mx-auto rounded-full mb-4"
                height={150}
                width={150}
              />
              <h3 className="text-xl font-semibold text-primary">
                Dr. John Doe
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                Dr. John Doe is a renowned expert in pharmaceutical research
                with over 20 years of experience in the field.
              </p>
            </div>

            {/* Speaker 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <Image
                src="https://via.placeholder.com/150"
                alt="Speaker 2"
                className="w-32 h-32 mx-auto rounded-full mb-4"
                height={150}
                width={150}
              />
              <h3 className="text-xl font-semibold text-primary">
                Dr. Jane Smith
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                Dr. Jane Smith is an industry leader in clinical pharmacy and
                therapeutics, with numerous publications to her name.
              </p>
            </div>

            {/* Speaker 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <Image
                src="https://via.placeholder.com/150"
                alt="Speaker 3"
                className="w-32 h-32 mx-auto rounded-full mb-4"
                height={150}
                width={150}
              />
              <h3 className="text-xl font-semibold text-primary">
                Dr. Emily Johnson
              </h3>
              <p className="text-sm text-gray-700 mt-2">
                Dr. Emily Johnson is a leading researcher in pharmaceutical
                technology and innovation, with a focus on regulatory
                challenges.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-6 text-secondary text-center">
            Notable Sessions
          </h2>
          <div className="space-y-8">
            {/* Session 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-primary mb-2">
                Emerging Trends in Drug Discovery
              </h3>
              <p className="text-lg text-gray-700">
                This session will cover the latest advancements in drug
                discovery, featuring presentations from leading researchers in
                the field.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Speakers: Dr. John Doe, Dr. Sarah Williams
              </p>
            </div>

            {/* Session 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-primary mb-2">
                Innovations in Pharmaceutical Technology
              </h3>
              <p className="text-lg text-gray-700">
                Explore the cutting-edge technologies that are shaping the
                future of pharmaceuticals in this insightful session.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Speakers: Dr. Jane Smith, Dr. Michael Brown
              </p>
            </div>

            {/* Session 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-primary mb-2">
                Regulatory Challenges and Solutions
              </h3>
              <p className="text-lg text-gray-700">
                Join us for a deep dive into the regulatory landscape,
                addressing challenges and proposing innovative solutions.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Speakers: Dr. Emily Johnson, Dr. Robert Davis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakersHighlights;
