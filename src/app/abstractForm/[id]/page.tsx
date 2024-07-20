"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ReactNode } from "react";
import { useFirebaseStorage } from "@/app/hooks/useFirebaseStorage";
import { useDropzone } from "react-dropzone";
import { formatDate } from "@/lib/utils";

interface StudentPageProps {
  params: {
    id: string;
  };
}

interface RegistrationInfo {
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

const AbstractForm: React.FC<StudentPageProps> = ({ params }) => {
  const { id } = params;
  const [registrationInfo, setRegistrationInfo] =
    useState<RegistrationInfo | null>(null);
  const [abstractFile, setAbstractFile] = useState<File | null>(null);

  const {
    uploadFile,
    uploadProgress,
    isUploading,
    error: uploadError,
  } = useFirebaseStorage();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/qrcode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      setRegistrationInfo(data.props);
    };

    fetchData();
  }, [id]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setAbstractFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
    maxSize: 5 * 1024 * 1024, // 5MB
  });

  const handleFileUpload = async () => {
    if (!abstractFile || !registrationInfo) return;

    try {
      const downloadURL = await uploadFile(abstractFile);

      // Update the abstract file URL in the database
      const updateRes = await fetch("/api/updateAbstract", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: id,
          abstractFileUrl: downloadURL,
        }),
      });

      if (updateRes.ok) {
        const updatedData = await updateRes.json();
        setRegistrationInfo((prevState) => ({
          ...prevState!,
          abstract: updatedData.abstract,
        }));
      } else {
        throw new Error("Failed to update abstract");
      }
    } catch (error) {
      console.error("Failed to upload file or update abstract:", error);
    }
  };

  if (!registrationInfo) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>
      </div>
    );
  }

  const InfoItem = ({
    label,
    value,
  }: {
    label: string;
    value: string | ReactNode | undefined;
  }) => (
    <div className="mb-4">
      <span className="font-semibold text-danger">{label}:</span>
      <span className="ml-2 text-gray-800">{value || "N/A"}</span>
    </div>
  );

  const { abstract, registration } = registrationInfo;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-indigo-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-danger text-center">
              Participant Information
            </h2>
            {registration.imageUrl && (
              <div className="flex justify-center mb-8">
                <Image
                  src={registration.imageUrl}
                  alt="Participant"
                  width={200}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <InfoItem label="Name" value={registration.name} />
              <InfoItem label="Email" value={registration.email} />
              <InfoItem
                label="Registration Code"
                value={registration.registrationCode}
              />
              <InfoItem
                label="Registration Type"
                value={registration.registrationType}
              />
            </div>
          </div>
          <div className="md:flex">
            <div className="md:w-1/3 bg-danger text-white p-8 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Abstract QR Code
              </h2>
              {(abstract?.qrCodeUrl || registration?.qrCodeUrl) && (
                <Image
                  src={abstract.qrCodeUrl ?? registration.qrCodeUrl ?? ""}
                  alt="QR Code"
                  width={200}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              )}
              <p className="mt-4 text-lg font-semibold text-center">
                {abstract?.AbstractCode ||
                  abstract?.temporyAbstractCode ||
                  "N/A"}
              </p>
              <div className="mt-6 text-center">
                <p className="text-lg font-semibold mb-2">
                  {abstract?.Status === "Pending"
                    ? "Abstract Submitted Successfully!"
                    : "Abstract Status"}
                </p>
                <p className="text-sm">
                  You can check updates regarding your abstract using this QR
                  code.
                </p>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              {abstract && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-danger">
                    Scientific Abstract Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    <InfoItem
                      label="Status"
                      value={
                        abstract?.Status && (
                          <span
                            className={`px-2 py-1 rounded ${
                              abstract?.Status === "Pending"
                                ? "bg-yellow-200 text-yellow-800"
                                : "bg-green-200 text-green-800"
                            }`}
                          >
                            {abstract?.Status}
                          </span>
                        )
                      }
                    />
                    <InfoItem label="Title" value={abstract?.title} />
                    <InfoItem label="Co-Author" value={abstract?.coAuthor} />
                    <div className="col-span-2">
                      <InfoItem
                        label="Abstract File"
                        value={
                          abstract?.abstractFileUrl ? (
                            <a
                              href={abstract?.abstractFileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 underline flex items-center"
                            >
                              <svg
                                className="w-4 h-4 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Download Abstract
                            </a>
                          ) : (
                            "Not uploaded"
                          )
                        }
                      />
                    </div>
                    <InfoItem
                      label="Submitted On"
                      value={
                        abstract?.createdAt && formatDate(abstract.createdAt)
                      }
                    />
                  </div>
                  {abstract?.Status === "Rejected" && (
                    <div className="mt-8">
                      <h3 className="text-xl font-bold mb-4 text-danger">
                        Rejection Comment
                      </h3>
                      <p className="text-gray-800">
                        {abstract?.rejectionComment || "No comment provided"}
                      </p>
                      <h3 className="text-xl font-bold mb-4 text-danger mt-8">
                        Update Abstract File
                      </h3>
                      <div className="space-y-4">
                        <div
                          {...getRootProps()}
                          className={`w-full p-6 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors duration-200 ease-in-out ${
                            isDragActive
                              ? "border-[#034C8C] bg-[#F0F7FF]"
                              : "border-[#CACACA] hover:border-[#034C8C] hover:bg-[#F7FAFC]"
                          }`}
                        >
                          <input {...getInputProps()} id="abstractFile" />
                          <p className="text-[#022873]">
                            {isDragActive
                              ? "Drop the file here..."
                              : "Drag & drop your abstract file here, or click to select"}
                          </p>
                          <p className="text-sm text-[#6B7280] mt-2">
                            Supported formats: .doc, .docx (Max size: 5MB)
                          </p>
                        </div>
                        {abstractFile && (
                          <div className="flex items-center space-x-2 text-sm text-[#022873]">
                            <svg
                              className="w-5 h-5 text-[#034C8C]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span>{abstractFile.name}</span>
                          </div>
                        )}
                        {isUploading && (
                          <div className="mt-4">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium text-[#022873]">
                                Uploading
                              </span>
                              <span className="text-sm font-medium text-[#022873]">
                                {uploadProgress}%
                              </span>
                            </div>
                            <div className="w-full bg-[#F2F2F2] rounded-full h-2.5">
                              <div
                                className="bg-[#034C8C] h-2.5 rounded-full transition-all duration-300 ease-in-out"
                                style={{ width: `${uploadProgress}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                        {uploadError && (
                          <div className="flex items-center space-x-2 text-[#D94814] mt-2">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span>{uploadError}</span>
                          </div>
                        )}
                        <button
                          onClick={handleFileUpload}
                          disabled={!abstractFile || isUploading}
                          className="w-full bg-[#034C8C] text-white py-2 px-4 rounded-md hover:bg-[#022873] transition-colors duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isUploading ? "Uploading..." : "Upload New Abstract"}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <h2 className="text-3xl font-bold mt-8 mb-6 text-danger">
                Registration Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <InfoItem label="Salutation" value={registration.Salutations} />
                <InfoItem
                  label="Affiliation"
                  value={registration.affiliation}
                />
                <InfoItem
                  label="Designation"
                  value={registration.designation}
                />
                <InfoItem label="Gender" value={registration.gender} />
                <InfoItem
                  label="Date of Birth"
                  value={registration.dob && formatDate(registration.dob)}
                />
                <InfoItem label="Institute" value={registration.institute} />
                <InfoItem
                  label="Payment Status"
                  value={registration.paymentStatus}
                />
                <InfoItem
                  label="Payment Amount"
                  value={
                    registration.paymentAmount !== undefined
                      ? `₹${registration.paymentAmount}`
                      : undefined
                  }
                />
                <InfoItem
                  label="Payment Date"
                  value={
                    registration.paymentDate &&
                    formatDate(registration.paymentDate)
                  }
                />
                <InfoItem
                  label="Need Accommodation"
                  value={registration.needAccommodation ? "Yes" : "No"}
                />
                <InfoItem
                  label="Dietary Requirements"
                  value={registration.dietaryRequirements}
                />
                <InfoItem
                  label="Special Assistance"
                  value={registration.specialAssistance}
                />
                <InfoItem label="Address" value={registration.address} />
                <InfoItem label="City" value={registration.city} />
                <InfoItem label="State" value={registration.state} />
                <InfoItem label="Pincode" value={registration.pincode} />
                <InfoItem label="Country" value={registration.country} />
                <InfoItem
                  label="WhatsApp Number"
                  value={registration.whatsappNumber}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">
          <p>
            For any queries, please contact our support team at
            ssc@pharmanecia.org
          </p>
        </div>
      </div>
    </div>
  );
};

export default AbstractForm;
