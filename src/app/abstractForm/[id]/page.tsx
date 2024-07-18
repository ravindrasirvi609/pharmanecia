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
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
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
      <span className="ml-2">{value}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0 bg-purple-700 text-white p-8 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold mb-4">QR Code</h2>
            <Image
              src={registrationInfo.qrCodeUrl}
              alt="QR Code"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <p className="mt-4 text-lg font-semibold">
              {registrationInfo.abstractCode ||
                registrationInfo.temporyAbstractCode}
            </p>
          </div>
          <div className="p-8 flex-grow">
            <h2 className="text-3xl font-bold mb-6 text-purple-800">
              Registration Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <InfoItem label="Status" value={registrationInfo.Status} />
              <InfoItem label="Title" value={registrationInfo.title} />
              <InfoItem label="Name" value={registrationInfo.name} />
              <InfoItem label="Email" value={registrationInfo.email} />
              <InfoItem
                label="Affiliation"
                value={registrationInfo.affiliation}
              />
              <InfoItem label="Co-Author" value={registrationInfo.coAuthor} />
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
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      Download Abstract
                    </a>
                  }
                />
              </div>
              <InfoItem
                label="Created At"
                value={new Date(registrationInfo.createdAt).toLocaleString()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbstractForm;
