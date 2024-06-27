import AboutConference from "@/components/About";
import LatestNews from "@/components/LatestNews";
import ScheduleOverview from "@/components/ScheduleOverview";
import SpeakersHighlights from "@/components/SpeakersHighlights";
import SponsorsPartners from "@/components/SponsorsPartners";
import Testimonials from "@/components/Testimonials";
import VenueAccommodations from "@/components/VenueAccommodations";
import OpfModel from "@/components/opfModel";
import Head from "next/head";
import React from "react";

const HomePage = () => {
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
        <meta property="og:url" content="https://yourwebsite.com" />
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
        >
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Pharmanecia 4.E
          </h1>
          <h2 className="text-2xl font-semibold mb-4 text-secondary">
            Jointly Organised By{" "}
          </h2>
          <h3 className="text-xl font-medium mb-6 text-primary">
            Department of Pharmaceutical Chemistry, JSS College of Pharmacy,
            Ooty and Operant Pharmacy Federation
          </h3>
          <p className="text-lg mb-8 text-accent">
            THEME : EMERGING TRENDS IN PHARMACEUTICAL RESEARCH
          </p>
          <p className="text-lg mb-12 text-danger">
            SUBMISSION OF ABSTRACTS IS OPEN SOON
          </p>
          <div className="space-x-4">
            <button className="bg-primary text-light px-6 py-3 rounded-md hover:bg-secondary transition duration-300">
              Register Now
            </button>
            <button className="bg-accent text-light px-6 py-3 rounded-md hover:bg-secondary transition duration-300">
              Submit Abstract
            </button>
          </div>
        </div>
      </div>
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
