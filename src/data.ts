import { CommitteeMember } from "./app/organisingCommittee/page";
import { Plan } from "./lib/interface";

export const schedule = {
  day1: [
    {
      time: "9:00 AM - 10:00 AM",
      event: "Registration",
      speakers: [],
    },
    {
      time: "10:00 AM - 12:00 PM",
      event: "Opening Ceremony and Keynote Speeches",
      speakers: ["Announcing Soon"],
    },
    {
      time: "12:00 PM - 1:00 PM",
      event: "Networking Lunch",
      speakers: [],
    },
    {
      time: "1:00 PM - 3:00 PM",
      event: "Workshop on Pharmaceutical Research",
      speakers: ["Announcing Soon"],
    },
    {
      time: "3:00 PM - 5:00 PM",
      event: "Panel Discussion on Drug Discovery",
      speakers: ["Announcing Soon"],
    },
  ],
  day2: [
    {
      time: "9:00 AM - 10:30 AM",
      event: "Technical Session 1",
      speakers: ["Announcing Soon"],
    },
    {
      time: "10:30 AM - 11:00 AM",
      event: "Coffee Break",
      speakers: [],
    },
    {
      time: "11:00 AM - 12:30 PM",
      event: "Technical Session 2",
      speakers: ["Announcing Soon"],
    },
    {
      time: "12:30 PM - 1:30 PM",
      event: "Networking Lunch",
      speakers: [],
    },
    {
      time: "1:30 PM - 3:00 PM",
      event: "Workshop on Clinical Pharmacy",
      speakers: ["Announcing Soon"],
    },
    {
      time: "3:00 PM - 5:00 PM",
      event: "Technical Session 3",
      speakers: ["Announcing Soon"],
    },
  ],
};

export const speakers = [
  {
    name: "Dr. John Doe",
    designation: "Professor of Pharmaceutical Research",
    bio: "Dr. John Doe is a renowned expert in pharmaceutical research with over 20 years of experience in the field. He has published numerous papers and has been a keynote speaker at various international conferences.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Jane Smith",
    designation: "Clinical Pharmacist",
    bio: "Dr. Jane Smith is an industry leader in clinical pharmacy and therapeutics. She has been involved in groundbreaking research and has a passion for improving patient outcomes through innovative therapies.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Emily Johnson",
    designation: "Research Scientist",
    bio: "Dr. Emily Johnson is a leading researcher in pharmaceutical technology and innovation. Her work focuses on developing new drug delivery systems and regulatory challenges in the pharmaceutical industry.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Robert Brown",
    designation: "Chief Scientist",
    bio: "Dr. Robert Brown is the Chief Scientist at PharmaTech Inc. His research interests include drug discovery and development, and he has been instrumental in bringing several new drugs to market.",
    image: "https://via.placeholder.com/150",
  },
];

export const committee: CommitteeMember[] = [
  {
    name: "Mr. Vikram Choudhary",
    designation: "Chairman",
    affiliation: "Founder Operant Pharmacy Federation",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. S. P. Dhanabal",
    designation: "Convener",
    affiliation: "Principal, JSS College of Pharmacy, Ooty",
    image: "/profile/Dhanabal.png",
  },
  {
    name: "Dr. R. Kalirajan",
    designation: "Organizing Secretary",
    affiliation:
      "HoD, Dept. of Pharmaceutical Chemistry, JSS College of Pharmacy, Ooty",
    contact: "Email: rkalirajan@jssuni.edu.in   Cell: 9994098087",
    image: "/profile/Kalirajan.jpg",
  },
  {
    name: "Mr. Basavalingadevaru",
    designation: "Administrative officer",
    affiliation: "JSS College of Pharmacy, Ooty",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Mrs. Anjali Chouhan",
    designation: "Administrative Officer",
    affiliation: "Operant Pharmacy Federation",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. S. Jubie",
    designation: "Chairman, Registration Committee",
    contact: "Cell: 9894618588",
    image: "/profile/Jubie.png",
  },
  {
    name: "Dr. B. Gowramma",
    designation: "Chairman, Scientific Committee (Presentations)",
    contact: "Cell: 9442111172",
    image: "/profile/Gowramma.png",
  },
  {
    name: "Dr. Durai Anandha Kumar",
    designation: "Chairman, Scientific Committee (Plenary sessions)",
    contact: "Cell: 9866852707",
    image: "/profile/Durai.png",
  },
  {
    name: "Dr. Gomathi Swaminathan",
    designation:
      "Chairman, Stage Committee (Inauguration & Valedictory Function)",
    contact: "Cell: 9790095279",
    image: "/profile/Swaminathan.png",
  },
  {
    name: "Dr. Srikanth Jupudi",
    designation: "Chairman, Accommodation / Transport Committee",
    contact: "Cell: 9393011114",
    image:
      "https://lh3.googleusercontent.com/3IIz2tcH_2SiU09FxbuTvC4p76yqzoLr-baGHMxumR6V-F7tbHRyl0yYieWA0e0bNa1XuRqaDezsYR-Yk78ZlRU9PXA8DcWAzbp-RUH0HEKbKjbw7Zr779vxlA0QDpnv=w1280",
  },
  {
    name: "Dr. Gomathy Shanish",
    designation: "Chairman, Hospitality / Catering Committee",
    contact: "Cell: 9486433876",
    image: "/profile/Gomathy.png",
  },
];
export const subjectOptions = [
  { value: "pharmaceuticalTechnology", label: "Pharmaceutical Technology" },
  { value: "medChem", label: "Pharmaceutical / Medicinal Chemistry" },

  {
    value: "pharmacognosy",
    label:
      "Pharmacognosy, Indigenous Drugs, Herbal Formulations, and Phytochemistry",
  },
  {
    value: "pharmacologyToxicology",
    label: "Pharmacology and Toxicology, Clinical Research & Pharmacovigilance",
  },
  {
    value: "pharmaceuticalAnalysis",
    label: "Pharmaceutical Analysis and Quality Assurance",
  },
  {
    value: "biopharmaceutics",
    label: "Biopharmaceutics, Pharmacokinetics & Drug Metabolism",
  },
  { value: "biotechnology", label: "Biotechnology and Biotherapeutics" },
  {
    value: "clinicalPharmacy",
    label: "Hospital, Community, and Clinical Pharmacy",
  },
  {
    value: "pharmaceuticalEducation",
    label: "Pharmaceutical Education and Professional Pharmacy",
  },
  {
    value: "drugRegulatoryAffairs",
    label: "Drug Regulatory Affairs & Pharmaceutical Management",
  },
  {
    value: "pharmacoeconomics",
    label: "Pharmacoeconomics and Pharmacoepidemiology",
  },
  {
    value: "aiBioinformatics",
    label: "Artificial Intelligence / Bioinformatics / Data Analytics",
  },
];

export const designationOptions = [
  { value: "UG", label: "Undergraduate Student(UG)" },
  { value: "PG", label: "Postgraduate Student(PG)" },

  {
    value: "RC",
    label: "Research Scholer/PhD Scholar",
  },
  {
    value: "FD",
    label: "Faculty",
  },
];

export const plans: Plan[] = [
  {
    name: "OPF/OBRF Members",
    description: "Includes entry to all sessions and conference kit.",
    earlyBird: 1500,
    regular: 2000,
    spot: 2500,
  },
  {
    name: "Students (UG /PG)",
    description: "Includes entry to all sessions and conference kit.",
    earlyBird: 1800,
    regular: 2200,
    spot: 2600,
  },
  {
    name: "Research Scholars & Faculties",
    description: "Includes entry to all sessions, conference kit, and lunch.",
    earlyBird: 2360,
    regular: 2950,
    spot: 3550,
  },
  {
    name: "Industry Professionals",
    description: "Includes entry to all sessions, conference kit, and lunch.",
    earlyBird: 3550,
    regular: 4130,
    spot: 4720,
  },
  {
    name: "International Delegates",
    description: "Includes entry to all sessions, conference kit, and lunch.",
    earlyBird: 130 * 83, // Assuming 1 USD = 83 INR
    regular: 150 * 83,
    spot: 180 * 83,
  },
];

export const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];
