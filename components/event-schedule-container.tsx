import { useState } from "react";
import type { NextPage } from "next";

const EventScheduleContainer: NextPage = () => {
  const scheduleData: { [key: string]: any[] } = {
    day1: [
      {
        time: "9:00",
        image: "/bitmap-9@2x.png",
        title: "Expressive Design Systems",
        speaker: "Amacheah Chukwudi",
        location: "Big Hall",
      },
      {
        time: "11:00",
        image: "/bitmap-10@2x.png",
        title: "How to Make a Clipping Mask in InDesign",
        speaker: "Kevin Noboa",
        location: "Small Room",
      },
    ],
    day2: [
      {
        time: "12:30",
        image: "/bitmap-11@2x.png",
        title: "Best Photoshop Collage Templates",
        speaker: "Leanne Simpson",
        location: "Room #4",
      },
      {
        time: "14:00",
        image: "/bitmap-12@2x.png",
        title: "Lens Flare Trends! What Is Lens Flare?",
        speaker: "Leo Knight",
        location: "Medium Room",
      },
      {
        time: "16:00",
        image: "/bitmap-13@2x.png",
        title: "Best Creative InDesign Brochure Templates",
        speaker: "Sung Jin-Shil",
        location: "Big Arena",
      },
    ],
    day3: [
      {
        time: "10:00",
        image: "/bitmap-14@2x.png",
        title: "Creating Engaging UX",
        speaker: "Jessica Wong",
        location: "Conference Room A",
      },
      {
        time: "12:00",
        image: "/bitmap-15@2x.png",
        title: "Advanced CSS Techniques",
        speaker: "Daniel Johnson",
        location: "Room B",
      },
      {
        time: "14:00",
        image: "/bitmap-16@2x.png",
        title: "JavaScript Best Practices",
        speaker: "Maria Garcia",
        location: "Room C",
      },
      {
        time: "16:00",
        image: "/bitmap-17@2x.png",
        title: "Building Scalable Web Apps",
        speaker: "John Doe",
        location: "Main Hall",
      },
    ],
  };

  const [currentDay, setCurrentDay] = useState("day1");
  const events = scheduleData[currentDay];

  return (
    <div className="w-full p-4">
      <div className="flex justify-center mb-4 space-x-2">
        <button
          onClick={() => setCurrentDay("day1")}
          className={`px-4 py-2 rounded ${
            currentDay === "day1" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Day 1
        </button>
        <button
          onClick={() => setCurrentDay("day2")}
          className={`px-4 py-2 rounded ${
            currentDay === "day2" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Day 2
        </button>
        <button
          onClick={() => setCurrentDay("day3")}
          className={`px-4 py-2 rounded ${
            currentDay === "day3" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Day 3
        </button>
      </div>
      <section className="flex flex-col items-center justify-start gap-8 text-lg text-darksalmon-100 font-spartan">
        {events.map((event, index) => (
          <div
            key={index}
            className="w-full max-w-8xl shadow-lg rounded bg-white p-6 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="flex flex-row items-center justify-between w-full gap-4">
              <div className="text-lg tracking-wide uppercase font-bold min-w-[60px] text-center">
                {event.time}
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="h-16 w-16 object-cover rounded-full"
                  alt=""
                  src={event.image}
                />
                <div className="text-base text-darkslategray-200 mt-2">
                  {event.speaker}
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-darkslategray-100">
                  {event.title}
                </h3>
              </div>
              <div className="text-right pr-7 text-base text-darkslategray-100 min-w-[100px]">
                {event.location}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default EventScheduleContainer;
