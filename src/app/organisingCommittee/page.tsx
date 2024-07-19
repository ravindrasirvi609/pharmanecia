import { committee } from "@/data";
import Image from "next/image";
import React from "react";

export interface CommitteeMember {
  name: string;
  designation: string;
  affiliation?: string;
  contact?: string;
  image: string;
}

const OrganisingCommittee: React.FC = () => {
  return (
    <div className="bg-light text-primary px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Organizing Committee
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
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                width={128}
                height={128}
              />
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-lg font-semibold mb-2">{member.designation}</p>
              {member.affiliation && (
                <p className="text-md mb-2">{member.affiliation}</p>
              )}
              {member.contact && <p className="text-sm">{member.contact}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganisingCommittee;
