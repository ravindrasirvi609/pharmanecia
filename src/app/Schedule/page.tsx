"use client";
import React, { useState, useRef } from "react";
import { schedule } from "@/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Schedule = () => {
  const [activeDay, setActiveDay] = useState("day1");
  const timelineRef = useRef(null);

  useGSAP(() => {
    if (timelineRef.current) {
      gsap.from(timelineRef.current as HTMLElement, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, [activeDay]);

  const renderSchedule = (day: keyof typeof schedule) => {
    return schedule[day].map(
      (
        item: {
          time: string;
          event: string;
          venue: string;
          speakers: string[];
          subEvents?: {
            track: string;
            sessions: {
              time: string;
              event: string;
              venue: string;
              speakers: string[];
            }[];
          }[];
        },
        index: number
      ) => (
        <div key={index} className="mb-8 md:mb-12 relative">
          <div className="absolute left-0 top-0 w-3 h-3 md:w-4 md:h-4 bg-danger rounded-full -ml-1.5 md:-ml-2"></div>
          <div className="border-l-2 md:border-l-4 border-danger pl-4 md:pl-6 pb-4 md:pb-6">
            <div className="bg-white shadow-md md:shadow-lg rounded-lg p-4 md:p-6 transition-all duration-300 hover:shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2 md:mb-0">
                  {item.time}
                </h3>
                {item.venue && (
                  <span className="text-sm md:text-base text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {item.venue}
                  </span>
                )}
              </div>

              <p className="text-base md:text-lg mb-4 text-secondary font-medium">
                {item.event}
              </p>

              {item.speakers && item.speakers.length > 0 && (
                <ul className="space-y-2">
                  {item.speakers.map((speaker: string, idx: number) => (
                    <li
                      key={idx}
                      className="flex items-start md:items-center text-sm md:text-base"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-accent flex-shrink-0 mt-1 md:mt-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-accent">{speaker}</span>
                    </li>
                  ))}
                </ul>
              )}

              {item.subEvents && (
                <div className="mt-4 border-t pt-4">
                  {item.subEvents.map(
                    (
                      subEvent: { track: string; sessions: any[] },
                      subIdx: number
                    ) => (
                      <div key={subIdx} className="mb-4">
                        <h4 className="text-base md:text-lg font-semibold text-primary mb-2">
                          {subEvent.track}
                        </h4>
                        <ul className="space-y-3">
                          {subEvent.sessions.map(
                            (
                              session: {
                                time: string;
                                event: string;
                                speakers?: string[];
                              },
                              sessionIdx: number
                            ) => (
                              <li
                                key={sessionIdx}
                                className="text-sm md:text-base"
                              >
                                <div className="flex flex-col md:flex-row md:items-center">
                                  <span className="font-medium text-danger mb-1 md:mb-0 md:mr-3">
                                    {session.time}
                                  </span>
                                  <span className="text-secondary">
                                    {session.event}
                                  </span>
                                </div>
                                {session.speakers &&
                                  session.speakers.length > 0 && (
                                    <div className="mt-2 ml-4 text-accent">
                                      {session.speakers.join(", ")}
                                    </div>
                                  )}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )
    );
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 min-h-screen py-8 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8 text-primary">
          Pharmanecia 4.E International Research Conference
        </h1>
        <p className="text-lg md:text-xl mb-3 md:mb-4 text-secondary">
          On &quot;Recent Advances in Artificial Intelligence and Machine
          Learning Driven Drug Discovery&quot;
        </p>
        <p className="text-base md:text-lg mb-3 md:mb-4 text-secondary">
          Organized by: Department of Pharmaceutical Chemistry, JSS College of
          Pharmacy, Ooty
        </p>
        <p className="text-base md:text-lg mb-8 md:mb-12 text-secondary">
          Hosted by: Operant Pharmacy Federation
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center text-primary">
          Conference Schedule
        </h2>

        <div className="flex flex-col md:flex-row justify-center mb-8 md:mb-12 space-y-4 md:space-y-0 md:space-x-4">
          <button
            className={`px-6 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg font-semibold transition-all duration-300 border-2 w-full md:w-auto ${
              activeDay === "day1"
                ? "bg-danger text-white border-danger"
                : "bg-white text-primary border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => setActiveDay("day1")}
          >
            Day 1: March 7, 2025
          </button>
          <button
            className={`px-6 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg font-semibold transition-all duration-300 border-2 w-full md:w-auto ${
              activeDay === "day2"
                ? "bg-danger text-white border-danger"
                : "bg-white text-primary border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => setActiveDay("day2")}
          >
            Day 2: March 8, 2025
          </button>
        </div>

        <div ref={timelineRef} className="relative">
          <div className="absolute left-0 top-0 h-full w-0.5 md:w-1 bg-danger"></div>
          {renderSchedule(activeDay as "day1" | "day2")}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
