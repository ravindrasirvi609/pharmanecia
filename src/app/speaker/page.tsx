import React from "react";
import Image from "next/image";
import { confSpeakers } from "@/data";

export type SpeakerType = {
  name: string;
  designation: string;
  institution: string;
  role: string;
  isConfirmed: boolean;
  imageUrl: string;
};

const Speakers: React.FC = () => {
  const roleColors: { [key: string]: string } = {
    Chairperson: "text-blue-400",
    Evaluator: "text-green-400",
    "Keynote Speaker": "text-purple-400",
    Speaker: "text-orange-400",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Conference Speakers
          </h1>
          <p className="text-lg text-white/80 font-light">
            Distinguished Innovators & Visionary Thought Leaders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {confSpeakers.map((speaker, index) => (
            <div
              key={index}
              className="relative group bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/10 border border-white/10 hover:border-white/20"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full -z-10" />
                  <Image
                    src={speaker.imageUrl}
                    alt={speaker.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white/20 hover:border-cyan-400/30 transition-all duration-300 transform group-hover:scale-110"
                    width={128}
                    height={128}
                  />
                </div>

                <div className="mb-4">
                  <span
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                      roleColors[speaker.designation] || "text-gray-400"
                    } bg-white/5 backdrop-blur-sm border border-white/10`}
                  >
                    {speaker.designation}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {speaker.name}
                </h3>
                <p className="text-sm text-white/80 font-light mb-2">
                  {speaker.institution}
                </p>
                <div className="text-cyan-400/90 font-medium text-sm">
                  {speaker.role}
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 w-full">
                  <div className="flex justify-center space-x-2">
                    <button className="text-white/60 hover:text-cyan-400 hover:bg-white/5 px-4 py-1.5 rounded-full transition-all duration-300 text-sm">
                      View Profile
                    </button>
                    <button className="text-white/60 hover:text-purple-400 hover:bg-white/5 px-4 py-1.5 rounded-full transition-all duration-300 text-sm">
                      Abstract
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
