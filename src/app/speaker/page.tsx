import React from "react";
import { Users } from "lucide-react";
import Image from "next/image";

type SpeakerType = {
  name: string;
  designation: string;
  institution: string;
  role: string;
  isConfirmed: boolean;
  imageUrl: string;
};

const Speakers: React.FC = () => {
  const speakers: SpeakerType[] = [
    {
      name: "Dr. Praveen Kumar Soni",
      designation: "Principal",
      institution: "School of Pharmacy, Sangam University, Bhilwada",
      role: "Chairperson",
      isConfirmed: true,
      imageUrl: "/speakers/dr-praveen-kumar.jpg",
    },
    {
      name: "Dr. MD Salahhuddin",
      designation: "Principal",
      institution: "Al Ameen College of Pharmacy, Bangalore",
      role: "Chairperson",
      isConfirmed: true,
      imageUrl: "/speakers/dr-md-salahhuddin.jpg",
    },
    {
      name: "Dr. Navin Dhingra",
      designation: "Registrar",
      institution: "Sage University, Bhopal",
      role: "Chairperson",
      isConfirmed: true,
      imageUrl: "/speakers/dr-navin-dhingra.jpg",
    },
    {
      name: "Dr. Jitendra Banweer",
      designation: "Dean",
      institution: "Faculty of Pharmacy, Sage University, Bhopal",
      role: "Chairperson",
      isConfirmed: false,
      imageUrl: "/speakers/dr-jitendra-banweer.jpg",
    },
    {
      name: "Dr. K. L Senthilkumar",
      designation: "Principal",
      institution: "Sri Vijaya Vidyalaya College of Pharmacy, Dharamapuri",
      role: "Chairperson",
      isConfirmed: false,
      imageUrl: "/speakers/dr-kl-senthilkumar.jpg",
    },
    {
      name: "Dr. Vivek Puri",
      designation: "Asst Prof",
      institution: "Chitkara University",
      role: "Chairperson",
      isConfirmed: false,
      imageUrl: "/speakers/dr-vivek-puri.jpg",
    },
    {
      name: "Dr. Raghvendra Singh Bhadauria",
      designation: "Principal",
      institution: "Sunrise College of Pharmacy, Udaipur",
      role: "Chairperson",
      isConfirmed: true,
      imageUrl: "/speakers/dr-raghvendra-singh.jpg",
    },
    {
      name: "Dr. B. Jaykar",
      designation: "Director - Clinical Trials",
      institution: "Vinayaka Mission's Research Foundation",
      role: "Chairperson",
      isConfirmed: false,
      imageUrl: "/speakers/dr-b-jaykar.jpg",
    },
    {
      name: "Dr. Radha Chafle",
      designation: "Group Registration - 20",
      institution: "Singhad IPS, Lonawala",
      role: "Evaluator",
      isConfirmed: false,
      imageUrl: "/speakers/dr-radha-chafle.jpg",
    },
    {
      name: "Dr. Tushar",
      designation: "Group Registration - 50",
      institution: "Yashwantrao Bhosale COP, Sawantwadi",
      role: "Evaluator",
      isConfirmed: false,
      imageUrl: "/speakers/dr-tushar.jpg",
    },
    {
      name: "Prof. Chetna Modi",
      designation: "Professor",
      institution: "Anand Pharmacy College",
      role: "Evaluator",
      isConfirmed: false,
      imageUrl: "/speakers/prof-chetna-modi.jpg",
    },
    {
      name: "Dr Rokeya Sultana",
      designation: "",
      institution: "",
      role: "Evaluator",
      isConfirmed: true,
      imageUrl: "/speakers/dr-rokeya-sultana.jpg",
    },
    {
      name: "Dr. Sneha Ambwani",
      designation: "Professor",
      institution: "AIIMS Jodhpur",
      role: "Keynote Speaker",
      isConfirmed: true,
      imageUrl: "/speakers/dr-sneha-ambwani.jpg",
    },
    {
      name: "Dr. B. Suresh",
      designation: "Pro Vice Chancellor",
      institution: "JSS AHER",
      role: "Keynote Speaker",
      isConfirmed: true,
      imageUrl: "/speakers/dr-b-suresh.jpg",
    },
    {
      name: "Dr. Sameer Agarwal",
      designation: "Executive Vice President",
      institution: "Molecule AI",
      role: "Speaker",
      isConfirmed: true,
      imageUrl: "/speakers/dr-sameer-agarwal.jpg",
    },
    {
      name: "Dr. Sunil Bothara",
      designation: "Professor",
      institution: "Govt. Pharmacy College, Ch Sambhajinagar",
      role: "Speaker",
      isConfirmed: true,
      imageUrl: "/speakers/dr-sunil-bothara.jpg",
    },
    {
      name: "Dr. Rakesh K Mishra",
      designation: "Director",
      institution: "Tata Institute for Genetics & Society",
      role: "Speaker",
      isConfirmed: true,
      imageUrl: "/speakers/dr-rakesh-mishra.jpg",
    },
    {
      name: "Dr. Rajesh Ramasamy",
      designation: "Associate Professor",
      institution: "Universiti Putra Malaysia",
      role: "Speaker",
      isConfirmed: true,
      imageUrl: "/speakers/dr-rajesh-ramasamy.jpg",
    },
    {
      name: "Dr. Keerti Jain",
      designation: "Assistant Professor",
      institution: "NIPER - R",
      role: "Speaker",
      isConfirmed: true,
      imageUrl: "/speakers/dr-keerti-jain.jpg",
    },
    {
      name: "Dr. Ravinder Kumar Kaundal",
      designation: "Head, Regulatory Toxicology",
      institution: "NIPER - R",
      role: "Speaker",
      isConfirmed: true,
      imageUrl: "/speakers/dr-ravinder-kaundal.jpg",
    },
    {
      name: "Dr. Rahul Shukla",
      designation: "Assistant Professor",
      institution: "NIPER - R",
      role: "Speaker",
      isConfirmed: true,
      imageUrl: "/speakers/dr-rahul-shukla.jpg",
    },
    {
      name: "Mr. S. Rajalingam",
      designation: "Data Scientist",
      institution: "HCL",
      role: "Speaker",
      isConfirmed: true,
      imageUrl: "/speakers/mr-s-rajalingam.jpg",
    },
    {
      name: "Dr. Nirmal Robinson",
      designation: "Head",
      institution:
        "Cellular Stress and Immune Response Laboratory, Centre for Cancer Biology, University of South Australia Adelaide, Australia",
      role: "Speaker",
      isConfirmed: true,
      imageUrl: "/speakers/dr-nirmal-robinson.jpg",
    },
    {
      name: "Dr. Rajpal Singh Kashyap",
      designation: "Director, Research",
      institution: "Central India Institute of Medical Sciences (CIIMS)",
      role: "Speaker",
      isConfirmed: true,
      imageUrl: "/speakers/dr-rajpal-kashyap.jpg",
    },
    {
      name: "Dr. Shital Panchal",
      designation: "Associate Professor",
      institution: "Institute of Pharmacy, Nirma University, Ahmedabad",
      role: "Speaker",
      isConfirmed: true,
      imageUrl: "/speakers/dr-shital-panchal.jpg",
    },
    {
      name: "Dr. Shital Butani",
      designation: "Associate Professor",
      institution: "Institute of Pharmacy, Nirma University, Ahmedabad",
      role: "Speaker",
      isConfirmed: true,
      imageUrl: "/speakers/dr-shital-butani.jpg",
    },
    {
      name: "Dr. R. Raghu",
      designation: "CEO",
      institution: "Molecular Solutions Software Pvt. Ltd.",
      role: "Speaker",
      isConfirmed: true,
      imageUrl: "/speakers/dr-r-raghu.jpg",
    },
    {
      name: "Dr. Suresh Mohankumar",
      designation: "Associate Professor",
      institution: "Swansea University, UK",
      role: "Speaker",
      isConfirmed: false,
      imageUrl: "/speakers/dr-suresh-mohankumar.jpg",
    },
    {
      name: "Dr. Amarjot Kaur Grewal",
      designation: "Associate Professor",
      institution: "Chitkara University",
      role: "Speaker",
      isConfirmed: false,
      imageUrl: "/speakers/dr-amarjot-grewal.jpg",
    },
    {
      name: "Dr. Thakur Gurjeet Singh",
      designation: "Dean & Professor",
      institution: "Chitkara University",
      role: "Speaker",
      isConfirmed: false,
      imageUrl: "/speakers/dr-gurjeet-singh.jpg",
    },
    {
      name: "Dr. Wu Yuan Seng",
      designation: "",
      institution: "Sunway University, Malaysia",
      role: "Speaker",
      isConfirmed: true,
      imageUrl: "/speakers/dr-wu-yuan-seng.jpg",
    },
    {
      name: "Dr. A K GNANACHANDRAN",
      designation: "Professor & Principal",
      institution:
        "Pranav Institute of Pharmaceutical Sciences and Research, Gwalior",
      role: "Speaker",
      isConfirmed: false,
      imageUrl: "/speakers/dr-gnanachandran.jpg",
    },
    {
      name: "Dr. Shoban",
      designation: "",
      institution: "",
      role: "Speaker",
      isConfirmed: true,
      imageUrl: "/speakers/dr-shoban.jpg",
    },
    {
      name: "Dr. Deepa Arora",
      designation: "CEO",
      institution: "Clinexel Lifescince Pvt. Ltd.",
      role: "Speaker",
      isConfirmed: true,
      imageUrl: "/speakers/dr-deepa-arora.jpg",
    },
    {
      name: "Dr. Prabhakar Reddy Veerareddy",
      designation: "",
      institution: "",
      role: "Speaker",
      isConfirmed: true,
      imageUrl: "/speakers/dr-prabhakar-reddy.jpg",
    },
    {
      name: "Mr. C. S. Mujeebuddin",
      designation: "",
      institution: "",
      role: "Speaker",
      isConfirmed: false,
      imageUrl: "/speakers/mr-cs-mujeebuddin.jpg",
    },
  ];

  const roleColors: { [key: string]: string } = {
    Chairperson: "bg-blue-100 text-blue-800",
    Evaluator: "bg-green-100 text-green-800",
    "Keynote Speaker": "bg-purple-100 text-purple-800",
    Speaker: "bg-orange-100 text-orange-800",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Conference Speakers
          </h1>
          <p className="text-lg text-gray-600">
            Distinguished speakers from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      roleColors[speaker.role] || "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {speaker.role}
                  </span>
                  {speaker.isConfirmed && (
                    <span className="text-green-600 text-sm font-medium">
                      Confirmed
                    </span>
                  )}
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={speaker.imageUrl}
                      alt={speaker.name}
                      className="w-12 h-12 rounded-full object-cover"
                      width={48}
                      height={48}
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {speaker.name}
                    </h3>
                    <p className="text-sm font-medium text-gray-700 mt-1">
                      {speaker.designation}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {speaker.institution}
                    </p>
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
