"use client";
import AboutConference from "@/components/About";
import LatestNews from "@/components/LatestNews";
import ScheduleOverview from "@/components/ScheduleOverview";
import SpeakersHighlights from "@/components/SpeakersHighlights";
import SponsorsPartners from "@/components/SponsorsPartners";
import Testimonials from "@/components/Testimonials";
import VenueAccommodations from "@/components/VenueAccommodations";
import OpfModel from "@/components/opfModel";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import PharmaneciaScroll from "@/components/pharmanecia";
gsap.registerPlugin(useGSAP);

const HomePage = () => {
  const boxRef = useRef<HTMLHeadingElement>(null);
  useGSAP(() => {
    gsap.from(boxRef.current, {
      opacity: 0,
      duration: 2,
    });
  });
  return (
    <>
      <Head>
        <title>Pharmanecia 4.E</title>
        <meta name="description" content="Pharmanecia 4.E" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Pharmanecia 4.E" />
        <meta property="og:description" content="Pharmanecia 4.E" />
        <meta
          property="og:image"
          content="https://www.adobe.com/content/dam/cc/en/ax-gnav-images/0_AEx.svg"
        />
        <meta property="og:url" content="https://www.pharmanecia.org/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pharmanecia 4.E" />
        <meta name="twitter:description" content="Pharmanecia 4.E" />
        <meta
          name="twitter:image"
          content="https://www.adobe.com/content/dam/cc/en/ax-gnav-images/0_AEx.svg"
        />
      </Head>

      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1579723798913-390e4be1d6ae?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
            Pharmacy, Ooty in Hosted with Operant Pharmacy Federation
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
      <PharmaneciaScroll />
      <AboutConference />
      <SpeakersHighlights />
      <ScheduleOverview />
      <SponsorsPartners />
      <VenueAccommodations />
      <Testimonials />
      <LatestNews />
      <OpfModel />
    </>
  );
};

export default HomePage;
