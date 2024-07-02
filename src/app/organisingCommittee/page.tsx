import Image from "next/image";
import React from "react";

type CommitteeMember = {
  name: string;
  role: string;
  imageUrl: string;
};

const committeeMembers: CommitteeMember[] = [
  {
    name: "Dr. John Smith",
    role: "Chairperson",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Jane Doe",
    role: "Co-Chairperson",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Alice Brown",
    role: "Secretary",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Bob Johnson",
    role: "Treasurer",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Emily White",
    role: "Member",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const OrganisingCommittee: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-center text-blue-600">
        PharmaNecia 4.E Conference
      </h1>

      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Organising Committee
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {committeeMembers.map((member, index) => (
          <li
            key={index}
            className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={member.imageUrl}
              alt={member.name}
              className="w-24 h-24 rounded-full mb-4"
              width={96}
              height={96}
            />
            <div className="text-center">
              <p className="text-xl font-medium text-gray-900">{member.name}</p>
              <p className="text-gray-600">{member.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrganisingCommittee;
