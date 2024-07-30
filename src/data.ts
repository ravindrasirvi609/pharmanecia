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
    image:
      "https://lh3.googleusercontent.com/UHNpNj4I44jvIkcHBdf-M_gAwO0ERXekPbLwgAeGaJXnozY136jX4bPTL4KoDOfhXL2XuzqdS1fRRXF7ykfcVKqBwv5mP2AWjnqvRrRan5mgLcndO5wGMczituZ-vqdorg=w1280",
  },
  {
    name: "Dr. R. Kalirajan",
    designation: "Organizing Secretary",
    affiliation:
      "HoD, Dept. of Pharmaceutical Chemistry, JSS College of Pharmacy, Ooty",
    contact: "Email: rkalirajan@jssuni.edu.in   Cell: 9994098087",
    image:
      "https://lh6.googleusercontent.com/89fC_3WK-jeTHxbSBmxAUNhwChcyBD2CAiPrvgjNwDpP_rlfA41ezS7jf0_0jA_HWrJyP0sJ4Y3P7vQqMD3vuCavayEvIAC4kh2TjCH8kuL3Ur7dDC2z1KMiKyR46GLvVA=w1280",
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
    image:
      "https://lh6.googleusercontent.com/1ux1a4UkLJ4JFsruu6jDVErKgVHRF05IXoiYzc9cbq3mX-C-l0K2q_pT-7lOMN4MF29BCEoe8R3MH9u7-HfD8d4pntFQNNboiR-3IQGc6AtESrgAGzwc_AQWj3HF1Xqa_w=w1280",
  },
  {
    name: "Dr. B. Gowramma",
    designation: "Chairman, Scientific Committee (Presentations)",
    contact: "Cell: 9442111172",
    image:
      "https://lh4.googleusercontent.com/quM4rVuAXxggkQDOWZ1w99djzME6ZeNDu0a-lrjfezN8UvSIvxym3VyODa4k_kD-8_1sD4aBzI8vfGXlIadnNkXaCkFidg57ddWxsee4oBreKvCfrB3XbjWmGjog8LyTPw=w1280",
  },
  {
    name: "Dr. Durai Anandha Kumar",
    designation: "Chairman, Scientific Committee (Plenary sessions)",
    contact: "Cell: 9866852707",
    image:
      "https://lh5.googleusercontent.com/x5UxfXSvVUJlZC2N9LAhuliwO6iV5tNEeARkEy8cEW1emV-ZOKvBFD1vaI71uJryCQk9cZtn_afRWP3SqD6bbtb4L4PzpGzWKN_5SQRh6n9iZL5aW8XBKLGZSLOOxL1SYQ=w1280",
  },
  {
    name: "Dr. Gomathi Swaminathan",
    designation:
      "Chairman, Stage Committee (Inauguration & Valedictory Function)",
    contact: "Cell: 9790095279",
    image:
      "https://lh6.googleusercontent.com/8XwaLZdfR36-gtYZqNgFBpAANU1XIgxaQQO1trIHraYBF6QNFw_SK_SnijIj0jCDPWuq1es479bcoqKpICHuQ6PU1UTU-_5VLeMnjpHixWEM-Sqd1k0sTlqWxD5NSX4sew=w1280",
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
    image:
      "https://lh4.googleusercontent.com/hzT7g0w9BgRkjQV2JGsGxu7ard6ZIC7qQ9VYVKVdp-woS5-WK0CmJ51uYpjm4E_4fI9jXmHf6WsS3SmI-_2RA1vRPVWKJaKRn_o3CxmMLN7k3PbLTdREZJgo6DzQ9zHDbg=w1280",
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
    earlyBird: 1,
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
