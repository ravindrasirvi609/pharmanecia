import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScheduleOverview = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const day1Ref = useRef(null);
  const day2Ref = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const day1 = day1Ref.current;
    const day2 = day2Ref.current;
    const link = linkRef.current;

    gsap.fromTo(
      section,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      title,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      day1,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: day1,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      day2,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: day2,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      link,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: link,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative bg-cover bg-center bg-fixed text-white px-6 py-24"
      style={{
        backgroundImage:
          "url('https://www.tourmyindia.com/hill_stations/assets/ooty-img/ooty-banner.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative max-w-7xl mx-auto z-10">
        <h1
          ref={titleRef}
          className="text-5xl font-bold mb-12 text-center text-yellow-300"
        >
          Schedule Overview
        </h1>

        <div className="mb-12">
          <h2 className="text-4xl font-semibold mb-8 text-center text-yellow-100">
            Conference Highlights
          </h2>
          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
            {/* Day 1 */}
            <div
              ref={day1Ref}
              className="bg-white bg-opacity-10 backdrop-blur-md shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-yellow-300 mb-4">
                Day 1: March 7, 2025
              </h3>
              <ul className="space-y-2 text-lg">
                <li>09:00 AM: Opening Remarks</li>
                <li>09:30 AM - 10:00 AM: Keynote Addresses</li>
                <li>
                  10:45 AM: Panel Discussion on AI-driven Target Identification
                </li>
                <li>
                  11:45 AM: Plenary Session on Inclusive Pharmaceutical
                  Education & Research
                </li>
                <li>13:30 PM - 15:45 PM: Concurrent Parallel Sessions</li>
                <li>19:00 PM: Networking Cum Gala Dinner</li>
              </ul>
            </div>

            {/* Day 2 */}
            <div
              ref={day2Ref}
              className="bg-white bg-opacity-10 backdrop-blur-md shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-yellow-300 mb-4">
                Day 2: March 8, 2025
              </h3>
              <ul className="space-y-2 text-lg">
                <li>09:00 AM - 10:00 AM: Keynote Addresses</li>
                <li>
                  10:45 AM: Panel Discussion on AI Applications in Drug
                  Discovery
                </li>
                <li>
                  11:45 AM: Panel Discussion on Ethical Considerations in
                  AI-driven Drug Discovery
                </li>
                <li>13:30 PM - 15:45 PM: Concurrent Parallel Sessions</li>
                <li>16:00 PM: Closing Ceremony & Awards Distribution</li>
                <li>17:00 PM: Certificate Distribution</li>
              </ul>
            </div>
          </div>
        </div>

        <div ref={linkRef} className="text-center">
          <Link
            href="/Schedule"
            className="inline-block bg-yellow-300 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-colors duration-300"
          >
            View Detailed Program
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScheduleOverview;
