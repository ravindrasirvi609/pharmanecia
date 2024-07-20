export interface RegistrationFormData {
  email: string;
  whatsappNumber: string;
  Salutations: "Mr." | "Ms." | "Mrs." | "Dr." | "Prof.";
  name: string;
  affiliation: string;
  designation: string;
  gender: "Male" | "Female" | "Other";
  imageUrl: string;
  dob: string;
  AadharNumber: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  institute: string;
  registrationType: "Student" | "Professional" | "Academician";
  abstractSubmitted: boolean;
  needAccommodation: boolean;
  dietaryRequirements: string;
  specialAssistance: string;
  abstractId: string | null;
}
