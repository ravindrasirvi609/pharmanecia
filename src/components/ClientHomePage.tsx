"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
import FloatingElements from "./FloatingElements";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ClientHomePage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(contentRef.current?.children || [], {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
      },
    });
  });

  return (
    <>
      <div
        ref={heroRef}
        className="min-h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: 'url("/ooty/walpaper-1.jpg")',
        }}
      >
        <FloatingElements />
        <div className="absolute inset-0 bg-primary bg-opacity-50"></div>
        <div
          className="relative z-10 text-light text-center max-w-4xl px-4 py-8 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg"
          ref={contentRef}
        >
          <h1 className="text-5xl md:text-7xl text-yellow-400 font-extrabold mb-4 bg-clip-text bg-gradient-to-r from-accent to-secondary">
            Pharmanecia 4.E
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            International Research Conference
          </h2>
          <h3 className="text-xl md:text-2xl font-medium mb-6 italic">
            &quot;Recent Advances in AI and ML Driven Drug Discovery&quot;
          </h3>
          <p className="text-lg md:text-xl mb-4 font-bold text-danger">
            7<sup>th</sup> and 8<sup>th</sup> March, 2025
          </p>
          <p className="text-md md:text-lg mb-8">
            Organized by Department of Pharmaceutical Chemistry, JSS College of
            Pharmacy, Ooty | Hosted by Operant Pharmacy Federation
          </p>
          <p className="text-lg mb-8 font-bold text-danger">
            Selected Research articles will be published in Scopus Indexed
            Journal
          </p>
          <div className="space-x-4 ">
            <Link href="/Registration">
              <button className="bg-secondary text-light px-8 py-3 rounded-full text-lg font-semibold hover:bg-accent transition duration-300 transform hover:scale-105 ">
                Register Now
              </button>
            </Link>
            <Link href="/abstractForm">
              <button className="bg-primary text-light px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary transition duration-300 transform hover:scale-105 ">
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
      <OpfModel />
    </>
  );
};

export default ClientHomePage;
