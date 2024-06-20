import { speakers } from "@/data";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Speakers = () => {
  return (
    <div className="bg-light text-primary px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Speakers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
            >
              <Image
                src={speaker.image}
                alt={speaker.name}
                className="w-32 h-32 mx-auto rounded-full mb-4"
                width={150}
                height={150}
              />
              <h3 className="text-2xl font-bold mb-2">{speaker.name}</h3>
              <p className="text-lg font-semibold mb-2">
                {speaker.designation}
              </p>
              <p className="text-lg leading-relaxed text-justify">
                {speaker.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
