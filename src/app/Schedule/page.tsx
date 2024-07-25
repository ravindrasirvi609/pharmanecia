"use client";
import React, { useState, useRef } from "react";
import { schedule } from "@/data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Schedule = () => {
  const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1");
  const timelineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (timelineRef.current) {
      gsap.from(timelineRef.current.children, {
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

  const renderSchedule = (day: "day1" | "day2") => {
    return schedule[day].map((item, index) => (
      <div key={index} className="mb-12 relative">
        <div className="absolute left-0 top-0 w-4 h-4 bg-accent rounded-full -ml-2"></div>
        <div className="border-l-4 border-accent pl-6 pb-6">
          <div className="bg-white shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-xl">
            <h3 className="text-xl font-bold mb-2 text-primary">{item.time}</h3>
            <p className="text-lg mb-4 text-secondary">{item.event}</p>
            {item.speakers.length > 0 && (
              <ul className="space-y-2">
                {item.speakers.map((speaker, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-accent"
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
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="bg-light min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-center text-primary">
          Conference Schedule
        </h1>

        <div className="flex justify-center mb-12 space-x-4">
          <button
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${
              activeDay === "day1"
                ? "bg-accent text-white"
                : "bg-white text-primary hover:bg-gray-100"
            }`}
            onClick={() => setActiveDay("day1")}
          >
            Day 1
          </button>
          <button
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${
              activeDay === "day2"
                ? "bg-accent text-white"
                : "bg-white text-primary hover:bg-gray-100"
            }`}
            onClick={() => setActiveDay("day2")}
          >
            Day 2
          </button>
        </div>

        <div ref={timelineRef} className="relative">
          <div className="absolute left-0 top-0 h-full w-1 bg-accent"></div>
          {renderSchedule(activeDay)}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
