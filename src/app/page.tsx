import AboutConference from "@/components/About";
import ScheduleOverview from "@/components/ScheduleOverview";
import SpeakersHighlights from "@/components/SpeakersHighlights";
import React from "react";

const HomePage = () => {
  return (
    <main>
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1579723798913-390e4be1d6ae?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="bg-white bg-opacity-75 p-6 rounded-lg max-w-3xl text-center">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Pharmanecia 4.E
          </h1>
          <h2 className="text-2xl font-semibold mb-4 text-secondary">
            Organised By
          </h2>
          <h3 className="text-xl font-medium mb-6 text-primary">
            Department of Pharmaceutical Chemistry, JSS College of Pharmacy,
            Ooty
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
    </main>
  );
};

export default HomePage;
