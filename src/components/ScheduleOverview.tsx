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
                Day 1: Opening Ceremony & Keynote Speeches
              </h3>
              <ul className="list-disc list-inside text-lg text-justify">
                <li>9:00 AM - 10:00 AM: Registration</li>
                <li>
                  10:00 AM - 12:00 PM: Opening Ceremony and Keynote Speeches
                </li>
                <li>12:00 PM - 1:00 PM: Networking Lunch</li>
                <li>1:00 PM - 3:00 PM: Workshop on Pharmaceutical Research</li>
                <li>3:00 PM - 5:00 PM: Panel Discussion on Drug Discovery</li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-primary mb-2">
                Day 2: Technical Sessions & Workshops
              </h3>
              <ul className="list-disc list-inside text-lg text-justify">
                <li>9:00 AM - 10:30 AM: Technical Session 1</li>
                <li>10:30 AM - 11:00 AM: Coffee Break</li>
                <li>11:00 AM - 12:30 PM: Technical Session 2</li>
                <li>12:30 PM - 1:30 PM: Networking Lunch</li>
                <li>1:30 PM - 3:00 PM: Workshop on Clinical Pharmacy</li>
                <li>3:00 PM - 5:00 PM: Technical Session 3</li>
              </ul>
            </div>

            {/* Day 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-primary mb-2">
                Day 3: Closing Ceremony & Farewell
              </h3>
              <ul className="list-disc list-inside text-lg text-justify">
                <li>9:00 AM - 10:30 AM: Technical Session 4</li>
                <li>10:30 AM - 11:00 AM: Coffee Break</li>
                <li>11:00 AM - 12:30 PM: Technical Session 5</li>
                <li>12:30 PM - 1:30 PM: Networking Lunch</li>
                <li>
                  1:30 PM - 3:00 PM: Workshop on Pharmaceutical Innovations
                </li>
                <li>3:00 PM - 4:00 PM: Closing Ceremony</li>
                <li>4:00 PM - 5:00 PM: Farewell Reception</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="text-lg text-accent underline hover:text-secondary"
          >
            View Detailed Program
          </a>
        </div>
      </div>
    </div>
  );
};

export default ScheduleOverview;
