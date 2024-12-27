"use client";
import { committee } from "@/data";
import Image from "next/image";
import React, { useState } from "react";

export interface CommitteeMember {
  name: string;
  designation: string;
  affiliation?: string;
  contact?: string;
  image: string;
}

const OrganisingCommittee: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<CommitteeMember | null>(
    null
  );

  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 text-primary px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-center text-blue-800 animate-fade-in-down">
          Organizing Committee
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {committee.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-700">
                {member.name}
              </h3>
              <p className="text-lg font-semibold mb-2 text-purple-600">
                {member.designation}
              </p>
              {member.affiliation && (
                <p className="text-md mb-2 text-gray-600">
                  {member.affiliation}
                </p>
              )}
              {member.contact && (
                <p className="text-sm text-gray-500">{member.contact}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-3xl font-bold text-blue-800">
                {selectedMember.name}
              </h2>
              <button
                onClick={() => setSelectedMember(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  width={200}
                  height={200}
                  className="rounded-lg object-cover"
                  unoptimized
                />
              </div>
              <div className="w-full md:w-2/3 md:pl-6">
                <p className="text-xl font-semibold text-purple-600 mb-2">
                  {selectedMember.designation}
                </p>
                {selectedMember.affiliation && (
                  <p className="text-lg text-gray-600 mb-2">
                    {selectedMember.affiliation}
                  </p>
                )}
                {selectedMember.contact && (
                  <p className="text-md text-gray-500">
                    {selectedMember.contact}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrganisingCommittee;
