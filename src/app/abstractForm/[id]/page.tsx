"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useFirebaseStorage } from "@/app/hooks/useFirebaseStorage";
import { useDropzone } from "react-dropzone";
import { formatDate } from "@/lib/utils";
import { RegistrationInfo } from "@/lib/interface";
import IdCard from "@/components/idCard";

interface StudentPageProps {
  params: {
    id: string;
  };
}

const AbstractForm: React.FC<StudentPageProps> = ({ params }) => {
  const { id } = params;
  const [registrationInfo, setRegistrationInfo] =
    useState<RegistrationInfo | null>(null);
  const [abstractFile, setAbstractFile] = useState<File | null>(null);
  const [presentationFile, setPresentationFile] = useState<File | null>(null);

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      setRegistrationInfo(data.props);
    };

    fetchData();
  }, [id]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log("Accepted files:", acceptedFiles);
    if (acceptedFiles.length > 0) {
      console.log("Accepted file:", acceptedFiles[0]);

      setAbstractFile(acceptedFiles[0]);
    }
  }, []);

  const {
    getRootProps: getRootPropsAbstract,
    getInputProps: getInputPropsAbstract,
    isDragActive: isDragActiveAbstract,
  } = useDropzone({
    onDrop,
    accept: {
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
    maxSize: 5 * 1024 * 1024,
  });

  const {
    getRootProps: getRootPropsPpt,
    getInputProps: getInputPropsPpt,
    isDragActive: isDragActivePpt,
  } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      setPresentationFile(acceptedFiles[0]);
    },
    accept: {
      "application/vnd.ms-powerpoint": [".ppt"],
      "application/vnd.openxmlformats-officedocument.presentationml.presentation":
        [".pptx"],
    },
    maxSize: 5 * 1024 * 1024,
  });

  const handleFileUpload = async () => {
    if (!abstractFile || !registrationInfo) return;

    try {
      const downloadURL = await uploadFile(abstractFile);
      const updateRes = await fetch("/api/updateAbstract", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id: id, abstractFileUrl: downloadURL }),
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

  const handlePresentationUpload = async () => {
    if (!presentationFile || !registrationInfo) return;

    try {
      const downloadURL = await uploadFile(presentationFile);
      const updateRes = await fetch("/api/updatePresentation", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id: id, presentationFileUrl: downloadURL }),
      });

      if (updateRes.ok) {
        const updatedData = await updateRes.json();
        setRegistrationInfo((prevState) => ({
          ...prevState!,
          abstract: updatedData.abstract,
        }));

        alert("Your file has been uploaded successfully!");
      } else {
        throw new Error("Failed to update presentation");
      }
    } catch (error) {
      console.error("Failed to upload file or update presentation:", error);
    }
  };

  if (!registrationInfo) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-indigo-200">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-danger"></div>
      </div>
    );
  }

  const { abstract, registration } = registrationInfo;

  const InfoItem = ({
    label,
    value,
  }: {
    label: string;
    value: React.ReactNode;
  }) => (
    <div className="mb-4">
      <span className="font-semibold text-danger">{label}</span>
      <p className="mt-1 text-gray-800">{value || "N/A"}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-indigo-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 bg-danger text-white">
            <h1 className="text-4xl font-bold text-center">
              Participant Information
            </h1>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 p-4 md:p-8 bg-gray-50">
              {registration?.imageUrl && (
                <div className="mb-8 flex justify-center">
                  <Image
                    src={registration?.imageUrl}
                    alt="Participant"
                    width={200}
                    height={200}
                    className="rounded-full shadow-lg border-4 border-white"
                    unoptimized
                  />
                </div>
              )}

              <InfoItem
                label="Name"
                value={registration?.name || abstract?.name}
              />
              <InfoItem
                label="Email"
                value={registration?.email || abstract?.email}
              />
              <InfoItem
                label="Registration Code"
                value={registration?.registrationCode}
              />
              <InfoItem
                label="Registration Type"
                value={registration?.registrationType}
              />

              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-danger">
                  Participant QR Code
                </h2>
                {(abstract?.qrCodeUrl || registration?.qrCodeUrl) && (
                  <div className="flex justify-center">
                    <Image
                      src={abstract?.qrCodeUrl || registration?.qrCodeUrl || ""}
                      alt="QR Code"
                      width={150}
                      height={150}
                      className="rounded-lg shadow-md"
                      unoptimized
                    />
                  </div>
                )}
                <p className="mt-4 text-center font-semibold">
                  {abstract?.AbstractCode ||
                    abstract?.temporyAbstractCode ||
                    "N/A"}
                </p>
                <p className="mt-2 text-sm text-center text-gray-600">
                  Scan to check abstract updates
                </p>
              </div>

              <div className="mt-8">
                {registration && (
                  <IdCard
                    name={registration.name ?? ""}
                    imageUrl={registration?.imageUrl ?? ""}
                    affiliation={registration.affiliation}
                  />
                )}
              </div>
            </div>

            <div className="md:w-2/3 p-4 md:p-8">
              {abstract && (
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-danger">
                    Scientific Abstract
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InfoItem
                      label="Status"
                      value={
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            abstract.Status === "Pending"
                              ? "bg-yellow-200 text-yellow-800"
                              : "bg-green-200 text-green-800"
                          }`}
                        >
                          {abstract.Status}
                        </span>
                      }
                    />
                    <InfoItem label="Title" value={abstract.title} />
                    <InfoItem label="Co-Author" value={abstract.coAuthor} />
                    <InfoItem
                      label="Submitted On"
                      value={
                        abstract.createdAt && formatDate(abstract.createdAt)
                      }
                    />
                    <InfoItem
                      label="Presentation Type"
                      value={abstract?.presentationType}
                    />
                    <InfoItem
                      label="Affiliation"
                      value={abstract.affiliation}
                    />
                    <InfoItem
                      label="Article Type"
                      value={abstract.articleType}
                    />
                    <InfoItem
                      label="Submitted At"
                      value={
                        abstract.createdAt && formatDate(abstract.createdAt)
                      }
                    />
                    <div className="col-span-2">
                      <InfoItem
                        label="Abstract File"
                        value={
                          abstract.abstractFileUrl ? (
                            <a
                              href={abstract.abstractFileUrl}
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
                  </div>

                  {(abstract.Status === "Revision" ||
                    abstract.Status === "Rejected") && (
                    <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-4">
                      <h3 className="text-xl font-bold mb-2 text-danger">
                        Rejection Comment
                      </h3>
                      <p className="text-gray-800">
                        {abstract.rejectionComment || "No comment provided"}
                      </p>

                      <div className="mt-6">
                        <h3 className="text-xl font-bold mb-4 text-danger">
                          Upload Abstract File
                        </h3>
                        <div
                          {...getRootPropsAbstract()}
                          className={`w-full p-6 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors duration-200 ease-in-out ${
                            isDragActiveAbstract
                              ? "border-danger bg-red-50"
                              : "border-gray-300 hover:border-danger hover:bg-gray-50"
                          }`}
                        >
                          <input {...getInputPropsAbstract()} />
                          <p className="text-gray-700">
                            {isDragActiveAbstract
                              ? "Drop the file here..."
                              : "Drag & drop your abstract file here, or click to select"}
                          </p>
                          <p className="text-sm text-gray-500 mt-2">
                            Supported formats: .doc, .docx (Max size: 5MB)
                          </p>
                        </div>
                        {abstractFile && (
                          <div className="mt-2 text-gray-700">
                            <span>Selected File: {abstractFile.name}</span>
                          </div>
                        )}
                        <button
                          onClick={handleFileUpload}
                          disabled={!abstractFile || isUploading}
                          className="mt-4 w-full bg-danger text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isUploading ? "Uploading..." : "Upload Abstract"}
                        </button>
                      </div>
                    </div>
                  )}

                  {abstract.Status === "Accepted" &&
                    registration?.paymentStatus === "Completed" && (
                      <div>
                        <div className="mb-4">
                          <span className="font-semibold text-danger">
                            Presentation Status
                          </span>
                          <p className="mt-1">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                !abstract.presentationFileStatus
                                  ? "bg-yellow-200 text-yellow-800"
                                  : abstract.presentationFileStatus ===
                                    "InReview"
                                  ? "bg-blue-200 text-blue-800"
                                  : abstract.presentationFileStatus ===
                                    "Approved"
                                  ? "bg-green-200 text-green"
                                  : "bg-red-200 text-red"
                              }`}
                            >
                              {abstract.presentationFileStatus ||
                                "Not Uploaded"}
                            </span>
                          </p>
                        </div>

                        {abstract.presentationFileUrl && (
                          <div className="mb-4">
                            <span className="font-semibold text-danger">
                              Presentation File
                            </span>
                            <p className="mt-1">
                              <a
                                href={abstract.presentationFileUrl}
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
                                Download Presentation
                              </a>
                            </p>
                          </div>
                        )}
                        {abstract.presentationFileStatus !== "InReview" &&
                          abstract.presentationFileStatus !== "Approved" && (
                            <div>
                              <h3 className="text-xl font-bold mb-4 text-danger">
                                Upload Presentation File
                              </h3>
                              <div
                                {...getRootPropsPpt()}
                                className={`w-full p-6 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors duration-200 ease-in-out ${
                                  isDragActivePpt
                                    ? "border-danger bg-red-50"
                                    : "border-gray-300 hover:border-danger hover:bg-gray-50"
                                }`}
                              >
                                <input {...getInputPropsPpt()} />
                                <p className="text-gray-700">
                                  {isDragActivePpt
                                    ? "Drop the file here..."
                                    : "Drag & drop your presentation file here, or click to select"}
                                </p>
                                <p className="text-sm text-gray-500 mt-2">
                                  Supported formats: .ppt, .pptx (Max size: 5MB)
                                </p>
                              </div>

                              {presentationFile && (
                                <div className="flex items-center space-x-2 text-sm text-gray-700 mt-2">
                                  <span>{presentationFile.name}</span>
                                </div>
                              )}

                              <button
                                onClick={handlePresentationUpload}
                                disabled={!presentationFile || isUploading}
                                className="mt-4 w-full bg-danger text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                {isUploading
                                  ? "Uploading..."
                                  : "Upload Presentation"}
                              </button>
                            </div>
                          )}
                      </div>
                    )}
                </div>
              )}

              {registration && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-danger">
                    Registration Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InfoItem
                      label="Salutation"
                      value={registration.Salutations}
                    />
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
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p>
            For any queries, please contact our support team at{" "}
            <a
              href="mailto:psc@pharmanecia.org"
              className="text-danger hover:underline"
            >
              psc@pharmanecia.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AbstractForm;
