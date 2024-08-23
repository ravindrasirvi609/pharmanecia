import { CommitteeMember } from "./app/organisingCommittee/page";
import { Plan } from "./lib/interface";

export const schedule = {
  day1: [
    {
      time: "09:00",
      event: "Opening Remarks",
      speakers: [],
    },
    {
      time: "09:30",
      event:
        "Keynote Address 1: Artificial Intelligence and Machine learning driven drug discovery",
      speakers: ["To be announced"],
    },
    {
      time: "10:00",
      event:
        "Keynote Address 2: Breaking the barriers in Pharmaceutical Research",
      speakers: ["To be announced"],
    },
    {
      time: "10:30",
      event: "Coffee / Tea Break",
      speakers: [],
    },
    {
      time: "10:45",
      event:
        "Panel Discussion 1: AI-driven target identification and Validation / Machine learning models for predicting drug-target interactions",
      speakers: ["To be announced"],
    },
    {
      time: "11:45",
      event:
        "Plenary Session 1: Inclusive Pharmaceutical Education & Research: Bridging Educational & Research Gaps Worldwide",
      speakers: ["To be announced"],
    },
    {
      time: "12:30",
      event: "Lunch Cum Networking Break",
      speakers: [],
    },
    {
      time: "13:30 - 15:45",
      event: "Concurrent Parallel Sessions",
      speakers: [],
      subEvents: [
        {
          track: "Track A",
          title:
            "Future of Pharmacy Education & Research: Breaking the International barriers in Education",
          sessions: [
            { time: "13:30", event: "Plenary Session 2" },
            { time: "14:15", event: "Plenary Session 4" },
            { time: "15:00", event: "Plenary Session 6" },
          ],
        },
        {
          track: "Track B",
          title:
            "Regulatory intelligence: The impact of artificial intelligence in regulatory operations",
          sessions: [
            { time: "13:30", event: "Plenary Session 3" },
            { time: "14:15", event: "Plenary Session 5" },
            { time: "15:00", event: "Plenary Session 7" },
          ],
        },
      ],
    },
    {
      time: "15:45",
      event: "High Tea",
      speakers: [],
    },
    {
      time: "16:00",
      event: "Concurrent Parallel Oral Presentations",
      speakers: [],
    },
    {
      time: "16:00",
      event: "Concurrent Parallel E-Poster Presentations",
      speakers: [],
    },
    {
      time: "19:00",
      event: "Networking Cum Gala Dinner",
      speakers: [],
    },
  ],
  day2: [
    {
      time: "09:00",
      event:
        "Keynote Address 3: Standardisation of Phytopharmaceuticals in Modern Era: Need for sophisticated analytical Techniques",
      speakers: ["To be announced"],
    },
    {
      time: "09:30",
      event:
        "Keynote Address 4: Exploring Natural Products for Drug Discovery : Global Perspectives",
      speakers: ["To be announced"],
    },
    {
      time: "10:00",
      event:
        "Keynote Address 5: Targeted drug delivery system, QbD in formulation",
      speakers: ["To be announced"],
    },
    {
      time: "10:30",
      event: "Coffee / Tea Break",
      speakers: [],
    },
    {
      time: "10:45",
      event:
        "Panel Discussion 2: AI applications in high-throughput Screening, Lead optimization and Deep learning approaches in de novo Drug Design",
      speakers: ["To be announced"],
    },
    {
      time: "11:45",
      event:
        "Panel Discussion 3: Ethical considerations and regulatory challenges in AI-driven Drug Discovery",
      speakers: ["To be announced"],
    },
    {
      time: "12:30",
      event: "Lunch Cum Networking Break",
      speakers: [],
    },
    {
      time: "13:30 - 15:45",
      event: "Concurrent Parallel Sessions",
      speakers: [],
      subEvents: [
        {
          track: "Track C",
          title:
            "Natural Products and Traditional Medicines in Modern Healthcare",
          sessions: [
            { time: "13:30", event: "Plenary Session - 8" },
            { time: "14:15", event: "Plenary Session - 10" },
            { time: "15:00", event: "Plenary Session - 12" },
          ],
        },
        {
          track: "Track D",
          title:
            "Next-Generation Therapeutics: Gene and Cell Therapy based Approaches",
          sessions: [
            { time: "13:30", event: "Plenary Session 9" },
            { time: "14:15", event: "Plenary Session 11" },
            { time: "15:00", event: "Plenary Session 13" },
          ],
        },
      ],
    },
    {
      time: "15:45",
      event: "High Tea",
      speakers: [],
    },
    {
      time: "16:00",
      event: "Closing Ceremony & Awards Distribution",
      speakers: [],
    },
    {
      time: "17:00",
      event: "Certificate Distribution",
      speakers: [],
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
    name: "Dr. Gopal Natesan",
    designation: "LOC Chairman",
    affiliation: "Pharmanecia 4.E",
    image: "/profile/gopal.jpeg",
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
    name: "Dr. T. Durai Ananda Kumar",
    designation: "Chairman, Scientific Committee (Plenary sessions)",
    contact: "Cell: 9866852707",
    image: "/profile/Durai.png",
  },
  {
    name: "Dr. Gomathi Swaminathan",
    designation:
      "Chairman, Stage Committee (Inauguration & Valedictory Function)",
    contact: "Cell: 9790095279",
    image:
      "https://jssaherstoragenew.blob.core.windows.net/jssuudstorage/EmployeeData/E1309/EMP_1309_P_7697DDDE02.jpg",
  },
  {
    name: "Dr. Srikanth Jupudi",
    designation: "Chairman, Accommodation / Transport Committee",
    contact: "Cell: 9393011114",
    image:
      "https://jssaherstoragenew.blob.core.windows.net/jssuudstorage/EmployeeData/E1308/EMP_1308_P_768BF89FAA.jpg",
  },
  {
    name: "Dr. Gomathy Shanish",
    designation: "Chairman, Hospitality / Catering Committee",
    contact: "Cell: 9486433876",
    image: "/profile/Gomathy.png",
  },
  {
    name: "Dr. Vijay A. Jagtap",
    designation: "Principal, Yashwantrao Bhonsale College of Pharmacy",
    image: "/profile/Vijay.jpeg",
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
