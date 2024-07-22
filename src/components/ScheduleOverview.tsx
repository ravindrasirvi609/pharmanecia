import Link from "next/link";
import React from "react";

const ScheduleOverview = () => {
  return (
    <div className="bg-light text-primary px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Schedule Overview
        </h1>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-secondary text-center">
            Conference Agenda
          </h2>
          <div className="space-y-8">
            {/* Day 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-primary mb-2">
                Day 1: Inauguration Ceremony & Keynote Speeches
              </h3>
              <ul className="list-disc list-inside text-lg text-justify">
                <li>9:00 AM - 10:00 AM: Registration</li>
                <li>
                  10:00 AM - 12:00 PM: Inauguration Ceremony and Keynote Address
                </li>
                <li>12:00 PM - 1:00 PM: Panel Discussion</li>
                <li>1:00 PM - 2:00 PM: Networking Lunch</li>
                <li>2:00 PM - 3:00 PM: Panel Discussion</li>
                <li>3:00 PM - 5:00 PM: Plenary Session</li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-primary mb-2">
                Day 2: Technical Sessions & Workshops
              </h3>
              <ul className="list-disc list-inside text-lg text-justify">
                <li>9:00 AM - 11:00 AM: Panel Discussion</li>
                <li>11:00 AM - 1:00 PM: Plenary Session</li>
                <li>1:00 PM - 2:00 PM: Networking Lunch</li>
                <li>2:00 PM - 4:00 PM: Workshop on AI and ML</li>
                <li>
                  4:00 PM - 5:00 PM: Valedictory function and Award Ceremony
                </li>{" "}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/Schedule"
            className="text-lg text-accent underline hover:text-secondary"
          >
            View Detailed Program
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScheduleOverview;
