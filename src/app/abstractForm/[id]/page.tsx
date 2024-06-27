"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
interface StudentPageProps {
  params: {
    id: string;
  };
}
const AbstractForm: React.FC<StudentPageProps> = ({ params }) => {
  const { id } = params;

  const [registrationInfo, setRegistrationInfo] = useState<{
    url: string | undefined;
    qrCodeUrl: string | StaticImport;
    temporyAbstractCode: string;
    Status: string;
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
    <div className="flex flex-col items-center justify-center h-screen bg-primary">
      {" "}
      {registrationInfo && (
        <div className="bg-purple-400 p-6 rounded-lg shadow-lg text-white">
          <h2 className="text-2xl font-bold mb-4">Registration Details</h2>
          <p className="mb-4">
            Temporary Abstract Code:{" "}
            <span className="font-semibold">
              {registrationInfo.temporyAbstractCode}
            </span>
          </p>
          <p className="mb-4 bg-white p-2 text-black borderRadius-sm">
            <span className="font-bold text-2xl">Status: </span>
            <span className="font-semibold text-green">
              {registrationInfo.Status}
            </span>
          </p>

          <div className="flex justify-center">
            <Image
              src={registrationInfo.qrCodeUrl}
              alt="QR Code"
              width={300}
              height={300}
              className="rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AbstractForm;
