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
  includeGalaDinner: boolean;
}

export interface RegistrationInfo {
  abstract: {
    url?: string;
    qrCodeUrl?: string;
    temporyAbstractCode?: string;
    AbstractCode?: string;
    Status?: string;
    title?: string;
    name?: string;
    email?: string;
    affiliation?: string;
    coAuthor?: string;
    address?: string;
    city?: string;
    state?: string;
    pincode?: string;
    whatsappNumber?: string;
    abstractFileUrl?: string;
    rejectionComment?: string;
    createdAt?: string;
    updatedAt?: string;
  };

  registration: {
    _id?: string;
    email?: string;
    whatsappNumber?: string;
    Salutations?: string;
    name?: string;
    affiliation?: string;
    designation?: string;
    imageUrl?: string;
    gender?: string;
    dob?: string;
    AadharNumber?: number;
    address?: string;
    city?: string;
    state?: string;
    pincode?: string;
    country?: string;
    institute?: string;
    registrationType?: string;
    abstractSubmitted?: boolean;
    abstractId?: string;
    paymentStatus?: string;
    needAccommodation?: boolean;
    dietaryRequirements?: string;
    specialAssistance?: string;
    registrationStatus?: string;
    createdAt?: string;
    updatedAt?: string;
    paymentAmount?: number;
    paymentDate?: string;
    registrationCode?: string;
    transactionId?: string;
    qrCodeUrl?: string;
  };
}

export interface Plan {
  name: string;
  description: string;
  price: number;
}
