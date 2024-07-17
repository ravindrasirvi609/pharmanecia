import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AboutConference: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const themesRef = useRef<HTMLDivElement>(null);
  const goalRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      });
    }

    if (introRef.current) {
      gsap.from(introRef.current.children, {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 80%",
        },
      });
    }

    if (themesRef.current) {
      gsap.from(themesRef.current.children, {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: themesRef.current,
          start: "top 80%",
        },
      });
    }

    if (goalRef.current) {
      gsap.from(goalRef.current, {
        duration: 1,
        scale: 0.9,
        opacity: 0,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: goalRef.current,
          start: "top 90%",
        },
      });
    }
  }, []);

  return (
    <div className="bg-gradient-to-b from-light to-white text-primary px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 ref={titleRef} className="text-5xl font-bold mb-12 text-center">
          About the Conference
        </h1>

        <div ref={introRef} className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-secondary">
            Brief Introduction
          </h2>
          <p className="text-lg leading-relaxed">
            Pharmanecia 4.E is an esteemed conference organized by the
            Department of Pharmaceutical Chemistry at JSS College of Pharmacy,
            Ooty. This event aims to explore the latest trends and advancements
            in pharmaceutical research, bringing together a diverse group of
            professionals, academics, and students to engage in meaningful
            discussions and collaborations.
          </p>
        </div>

        <div ref={themesRef} className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-secondary">
            Themes and Objectives
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            The conference will cover a wide range of topics related to
            pharmaceutical research, including but not limited to:
          </p>
          <ul className="list-disc list-inside mb-6 text-lg space-y-2 pl-4">
            <li>Emerging trends in drug discovery and development</li>
            <li>Innovations in pharmaceutical technology</li>
            <li>Advancements in clinical pharmacy and therapeutics</li>
            <li>
              Regulatory challenges and solutions in the pharmaceutical industry
            </li>
          </ul>
          <p className="text-lg leading-relaxed">
            The main objective of this event is to foster a collaborative
            environment where scientists, industry experts, and students can
            share their insights and engage in fruitful discussions about the
            new era of pharmaceutical research.
          </p>
        </div>

        <div
          ref={goalRef}
          className="bg-accent text-white p-6 rounded-lg shadow-lg"
        >
          <p className="text-xl font-bold text-center">
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
