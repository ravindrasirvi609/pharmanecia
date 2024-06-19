import React from "react";

const AboutConference = () => {
  return (
    <div className="bg-light text-primary px-6 py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">About the Conference</h1>

        <div className="mb-12 text-left">
          <h2 className="text-3xl font-semibold mb-4 text-secondary">
            Brief Introduction
          </h2>
          <p className="text-lg leading-relaxed text-justify">
            Pharmanecia 4.E is an esteemed conference organized by the
            Department of Pharmaceutical Chemistry at JSS College of Pharmacy,
            Ooty. This event aims to explore the latest trends and advancements
            in pharmaceutical research, bringing together a diverse group of
            professionals, academics, and students to engage in meaningful
            discussions and collaborations.
          </p>
        </div>

        <div className="text-left">
          <h2 className="text-3xl font-semibold mb-4 text-secondary">
            Themes and Objectives
          </h2>
          <p className="text-lg leading-relaxed text-justify">
            The conference will cover a wide range of topics related to
            pharmaceutical research, including but not limited to:
          </p>
          <ul className="list-disc list-inside mb-4 text-lg text-justify">
            <li>Emerging trends in drug discovery and development</li>
            <li>Innovations in pharmaceutical technology</li>
            <li>Advancements in clinical pharmacy and therapeutics</li>
            <li>
              Regulatory challenges and solutions in the pharmaceutical industry
            </li>
          </ul>
          <p className="text-lg leading-relaxed text-justify">
            The main objective of this event is to foster a collaborative
            environment where scientists, industry experts, and students can
            share their insights and engage in fruitful discussions about the
            new era of pharmaceutical research.
          </p>
        </div>

        <div className="mt-8 text-left">
          <p className="text-xl font-bold text-accent">
            THE GOAL OF THIS EVENT IS TO BRING SCIENTISTS, INDUSTRY EXPERTS, AND
            STUDENTS ON THE SAME PLATFORM FOR FRUITFUL DISCUSSIONS ON THE NEW
            ERA.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutConference;
