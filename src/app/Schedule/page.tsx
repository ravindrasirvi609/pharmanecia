import React, { useState, useEffect } from "react";
import { schedule } from "@/data";

const Schedule = () => {
  return (
    <div className="bg-light text-primary px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Conference Schedule
        </h1>

        {/* Day 1 Schedule */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-secondary">Day 1</h2>
          {schedule.day1.map((item, index) => (
            <div
              key={index}
              className="mb-6 flex flex-center bg-danger p-4 rounded-md"
            >
              <h3 className="text-xl font-bold mb-2">{item.time}</h3>
              <p className="text-lg mx-auto">{item.event}</p>
              {item.speakers.length > 0 && (
                <ul className="list-disc list-inside mt-2 text-lg">
                  {item.speakers.map((speaker, idx) => (
                    <li key={idx} className="ml-4">
                      {speaker}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Day 2 Schedule */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-secondary">Day 2</h2>
          {schedule.day2.map((item, index) => (
            <div
              key={index}
              className="mb-6 flex flex-center bg-danger p-4 rounded-md"
            >
              <h3 className="text-xl font-bold mb-2">{item.time}</h3>
              <p className="text-lg mx-auto">{item.event}</p>
              {item.speakers.length > 0 && (
                <ul className="list-disc list-inside mt-2 text-lg">
                  {item.speakers.map((speaker, idx) => (
                    <li key={idx} className="ml-4">
                      {speaker}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
