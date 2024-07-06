import { committee } from "@/data";
import Image from "next/image";
import React from "react";

export interface CommitteeMember {
  name: string;
  designation: string;
  bio: string;
  image: string;
}

const OrganisingCommittee: React.FC = () => {
  return (
    <div className="bg-light text-primary px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Organising Committee
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {committee.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4"
                width={32}
                height={32}
              />
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-lg font-semibold mb-2">{member.designation}</p>
              <p className="text-lg leading-relaxed text-justify">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganisingCommittee;
