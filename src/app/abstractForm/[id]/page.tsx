"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface StudentPageProps {
  params: {
    id: string;
  };
}

const AbstractForm: React.FC<StudentPageProps> = ({ params }) => {
  const { id } = params;

  const [registrationInfo, setRegistrationInfo] = useState<{
    url: string;
    qrCodeUrl: string;
    temporyAbstractCode: string;
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
  } | null>(null);

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
      console.log("data", data.props.student);

      setRegistrationInfo(data.props.student);
    };

    fetchData();
  }, [id]);

  if (!registrationInfo) {
    return <div className="text-center font-black text-2xl">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-danger">
      <div className="bg-purple-800 p-6 m-3 rounded-lg shadow-lg text-white w-11/12 max-w-4xl flex">
        <div className="flex-1 mr-6">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Registration Details
          </h2>
          <p className="mb-4">
            <span className="font-bold">Temporary Abstract Code: </span>
            {registrationInfo.temporyAbstractCode}
          </p>
          <p className="mb-4">
            <span className="font-bold">Status: </span>
            {registrationInfo.Status}
          </p>
          <p className="mb-4">
            <span className="font-bold">Title: </span>
            {registrationInfo.title}
          </p>
          <p className="mb-4">
            <span className="font-bold">Name: </span>
            {registrationInfo.name}
          </p>
          <p className="mb-4">
            <span className="font-bold">Email: </span>
            {registrationInfo.email}
          </p>
          <p className="mb-4">
            <span className="font-bold">Affiliation: </span>
            {registrationInfo.affiliation}
          </p>
          <p className="mb-4">
            <span className="font-bold">Co-Author: </span>
            {registrationInfo.coAuthor}
          </p>
          <p className="mb-4">
            <span className="font-bold">Address: </span>
            {registrationInfo.address}
          </p>
          <p className="mb-4">
            <span className="font-bold">City: </span>
            {registrationInfo.city}
          </p>
          <p className="mb-4">
            <span className="font-bold">State: </span>
            {registrationInfo.state}
          </p>
          <p className="mb-4">
            <span className="font-bold">Pincode: </span>
            {registrationInfo.pincode}
          </p>
          <p className="mb-4">
            <span className="font-bold">WhatsApp Number: </span>
            {registrationInfo.whatsappNumber}
          </p>
          <p className="mb-4">
            <span className="font-bold">Abstract File URL: </span>
            <a
              href={registrationInfo.abstractFileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 underline"
            >
              Download Abstract
            </a>
          </p>
          <p className="mb-4">
            <span className="font-bold">Created At: </span>
            {new Date(registrationInfo.createdAt).toLocaleString()}
          </p>
          <p className="mb-4">
            <span className="font-bold">Updated At: </span>
            {new Date(registrationInfo.updatedAt).toLocaleString()}
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={registrationInfo.qrCodeUrl}
            alt="QR Code"
            width={300}
            height={300}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AbstractForm;
