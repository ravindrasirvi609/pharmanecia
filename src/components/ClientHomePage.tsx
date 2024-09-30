"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AboutConference from "@/components/About";
import LatestNews from "@/components/LatestNews";
import ScheduleOverview from "@/components/ScheduleOverview";
import SpeakersHighlights from "@/components/SpeakersHighlights";
import SponsorsPartners from "@/components/SponsorsPartners";
import Testimonials from "@/components/Testimonials";
import VenueAccommodations from "@/components/VenueAccommodations";
import OpfModel from "@/components/opfModel";
import PharmaneciaScroll from "@/components/pharmanecia";
import AnimatedIcons from "./AnimatedIcons";
import FloatingElements from "./FloatingElements";

gsap.registerPlugin(useGSAP);

const ClientHomePage = () => {
  const boxRef = useRef<HTMLHeadingElement>(null);
  useGSAP(() => {
    gsap.from(boxRef.current, {
      opacity: 0,
      duration: 2,
    });
  });

  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("/ooty/walpaper-1.jpg")',
        }}
      >
        <div
          className="bg-white bg-opacity-75 p-6 rounded-lg max-w-3xl text-center"
          id="home"
          ref={boxRef}
        >
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Pharmanecia 4.E
          </h1>
          <h2 className="text-2xl font-semibold mb-4 text-secondary">
            International Research Conference on
          </h2>
          <h3 className="text-xl font-medium mb-4 text-primary">
            &quot;Recent Advances in Artificial Intelligence and Machine
            learning driven drug discovery&quot;
          </h3>
          <p className="text-lg mb-4 text-accent font-bold">
            7<sup>th</sup> and 8<sup>th</sup> March, 2025
          </p>
          <p className="text-lg mb-8 text-primary">
            Organized by Department of Pharmaceutical Chemistry, JSS College of
            Pharmacy, Ooty Hosted by, Operant Pharmacy Federation
          </p>
          <p className="text-lg mb-8 text-danger font-bold">
            Selected Research articles will be get published in Scopus Indexed
            Journal
          </p>
          <div className="space-x-4">
            <Link href="/Registration">
              <button className="bg-primary text-light px-6 py-3 rounded-md hover:bg-secondary transition duration-300">
                Register Now
              </button>
            </Link>

            <Link href="/abstractForm">
              <button className="bg-accent text-light px-6 py-3 rounded-md hover:bg-secondary transition duration-300">
                Submit Abstract
              </button>
            </Link>
          </div>
        </div>
      </div>
      <AboutConference />
      <PharmaneciaScroll />

      <SpeakersHighlights />
      <ScheduleOverview />
      <SponsorsPartners />
      <VenueAccommodations />
      <Testimonials />
      <LatestNews />
      {/* <AnimatedIcons /> */}

      <OpfModel />
    </>
  );
};

export default ClientHomePage;
