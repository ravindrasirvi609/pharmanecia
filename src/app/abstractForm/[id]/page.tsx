"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ReactNode } from "react";

interface StudentPageProps {
  params: {
    id: string;
  };
}

interface RegistrationInfo {
  url: string;
  qrCodeUrl: string;
  temporyAbstractCode: string;
  abstractCode: string;
  Status: string;
  title: string;
  name: string;
  email: string;
  affiliation: string;
  coAuthor: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  whatsappNumber: string;
  abstractFileUrl: string;
  createdAt: string;
  updatedAt: string;
}

const AbstractForm: React.FC<StudentPageProps> = ({ params }) => {
  const { id } = params;
  const [registrationInfo, setRegistrationInfo] =
    useState<RegistrationInfo | null>(null);

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
      setRegistrationInfo(data.props.student);
    };

    fetchData();
  }, [id]);

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
    value: string | ReactNode;
  }) => (
    <div className="mb-4">
      <span className="font-semibold text-purple-700">{label}:</span>
      <span className="ml-2 text-gray-800">{value}</span>
    </div>
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="md:flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-purple-700 text-white p-8 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Abstract QR Code
              </h2>
              <Image
                src={registrationInfo.qrCodeUrl}
                alt="QR Code"
                width={200}
                height={200}
                className="rounded-lg shadow-lg"
              />
              <p className="mt-4 text-lg font-semibold text-center">
                {registrationInfo.abstractCode ||
                  registrationInfo.temporyAbstractCode}
              </p>
              <div className="mt-6 text-center">
                <p className="text-lg font-semibold mb-2">
                  Successfully submitted Abstract!
                </p>
                <p className="text-sm">
                  You can access and update your abstract using this QR code.
                </p>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <h2 className="text-3xl font-bold mb-6 text-purple-800">
                Registration Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <InfoItem
                  label="Status"
                  value={
                    <span
                      className={`px-2 py-1 rounded ${
                        registrationInfo.Status === "Pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : "bg-green-200 text-green-800"
                      }`}
                    >
                      {registrationInfo.Status}
                    </span>
                  }
                />
                <InfoItem label="Title" value={registrationInfo.title} />
                <InfoItem label="Name" value={registrationInfo.name} />
                <InfoItem label="Email" value={registrationInfo.email} />
                <InfoItem
                  label="Affiliation"
                  value={registrationInfo.affiliation}
                />
                <InfoItem
                  label="Co-Author"
                  value={registrationInfo.coAuthor || "N/A"}
                />
                <InfoItem label="Address" value={registrationInfo.address} />
                <InfoItem label="City" value={registrationInfo.city} />
                <InfoItem label="State" value={registrationInfo.state} />
                <InfoItem label="Pincode" value={registrationInfo.pincode} />
                <InfoItem
                  label="WhatsApp Number"
                  value={registrationInfo.whatsappNumber}
                />
                <div className="col-span-2">
                  <InfoItem
                    label="Abstract File"
                    value={
                      <a
                        href={registrationInfo.abstractFileUrl}
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
                    }
                  />
                </div>
                <InfoItem
                  label="Submitted On"
                  value={formatDate(registrationInfo.createdAt)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">
          <p>
            For any queries, please contact our support team at
            support@example.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default AbstractForm;
