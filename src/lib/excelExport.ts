import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export interface Registration {
  _id: string;
  email: string;
  whatsappNumber: string;
  Salutations: string;
  name: string;
  affiliation: string;
  designation: string;
  imageUrl: string;
  gender: string;
  dob: string;
  AadharNumber: number;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  institute: string;
  registrationType: string;
  abstractSubmitted: boolean;
  abstractId: string;
  paymentStatus: string;
  needAccommodation: boolean;
  dietaryRequirements: string;
  specialAssistance: string;
  registrationStatus: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  paymentAmount: number;
  paymentDate: string;
  registrationCode: string;
  transactionId: string;
  fullAddress: string;
  id: string;
}

export const exportToExcel = (
  registrationData: Registration[],
  fileName: string
) => {
  // Prepare the data for export
  const exportData = registrationData.map((item) => ({
    "Registration ID": item.registrationCode,
    Email: item.email,
    "WhatsApp Number": item.whatsappNumber,
    Salutation: item.Salutations,
    Name: item.name,
    Affiliation: item.affiliation,
    Designation: item.designation,
    "Image URL": item.imageUrl,
    Gender: item.gender,
    "Date of Birth": new Date(item.dob).toLocaleDateString(),
    "Aadhar Number": item.AadharNumber,
    Address: item.address,
    City: item.city,
    State: item.state,
    Pincode: item.pincode,
    Country: item.country,
    Institute: item.institute,
    "Registration Type": item.registrationType,
    "Abstract Submitted": item.abstractSubmitted ? "Yes" : "No",
    "Abstract ID": item.abstractId,
    "Payment Status": item.paymentStatus,
    "Need Accommodation": item.needAccommodation ? "Yes" : "No",
    "Dietary Requirements": item.dietaryRequirements,
    "Special Assistance": item.specialAssistance,
    "Registration Status": item.registrationStatus,
    "Created At": new Date(item.createdAt).toLocaleString(),
    "Updated At": new Date(item.updatedAt).toLocaleString(),
    "Payment Amount": item.paymentAmount,
    "Payment Date": new Date(item.paymentDate).toLocaleString(),
    "Transaction ID": item.transactionId,
    "Full Address": item.fullAddress,
  }));

  // Create a new workbook and add the data
  const ws = XLSX.utils.json_to_sheet(exportData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Registrations");

  // Generate the Excel file
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const data = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  // Save the file
  saveAs(data, `${fileName}.xlsx`);
};
