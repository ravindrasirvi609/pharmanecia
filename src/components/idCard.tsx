// SocialShareCard.tsx
"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Html2Canvas from "html2canvas";

interface SocialShareCardProps {
  name: string;
  affiliation?: string;
  designation?: string;
  imageUrl: string;
  registrationType?: string;
  registrationCode?: string;
}

const SocialShareCard: React.FC<SocialShareCardProps> = ({
  name,
  affiliation,
  designation,
  imageUrl,
  registrationType,
  registrationCode,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    setIsLoading(true);

    try {
      if (cardRef.current && typeof window !== "undefined") {
        const canvas = await new Promise<HTMLCanvasElement>((resolve) => {
          if (cardRef.current) {
            Html2Canvas(cardRef.current, {
              scale: 2,
              useCORS: true,
              logging: false,
              allowTaint: true,
            }).then((canvas: HTMLCanvasElement) => resolve(canvas));
          }
        });

        const dataUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = `${name.replace(/\s+/g, "_")}_Pharmanecia_Share.png`;
        link.href = dataUrl;
        link.click();
      }
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Failed to generate image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Card Content for Image Generation (positioned off-screen) */}
      <div
        ref={cardRef}
        className="absolute -left-[9999px] w-[1080px] h-[1080px] flex flex-col items-center justify-between bg-gradient-to-br from-[#021373] to-[#D94814] text-white font-sans p-10 box-border"
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Pharmanecia 4.E</h1>
          <h2 className="text-2xl font-semibold mb-2">
            International Research Conference on
          </h2>
          <h3 className="text-3xl font-bold mb-4 px-10">
            &quot;Recent Advances in Artificial Intelligence and Machine
            learning driven drug discovery&quot;
          </h3>
          <p className="text-2xl font-semibold">7th and 8th March, 2025</p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg text-center">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#D94814] mx-auto mb-4">
            <Image
              src={imageUrl}
              alt={name}
              width={192}
              height={192}
              className="object-fill"
            />
          </div>
          <h2 className="text-3xl font-bold text-[#021373] mb-2">{name}</h2>
          {designation && (
            <p className="text-xl text-[#D94814] font-semibold mb-1">
              {designation}
            </p>
          )}
          {affiliation && (
            <p className="text-lg text-gray-600 mb-2">{affiliation}</p>
          )}
        </div>

        <p className="text-2xl font-bold mb-6">
          Hey! I&apos;m attending Pharmanecia 4.E
        </p>

        <div className="text-lg text-center">
          <p>Organized by Department of Pharmaceutical Chemistry,</p>
          <p>JSS College of Pharmacy, Ooty</p>
          <p className="mb-4">Hosted by Operant Pharmacy Federation</p>
          <p className="text-sm">
            #Pharmanecia4E #AIinDrugDiscovery #MachineLearning
            #PharmaceuticalSciences
          </p>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        disabled={isLoading}
        className={`mt-6 px-6 py-3 bg-gradient-to-r from-[#021373] to-[#D94814] text-white font-semibold rounded-full hover:from-[#D94814] hover:to-[#021373] transition-all duration-300 flex items-center space-x-2 shadow-lg ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? (
          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        )}
        <span>{isLoading ? "Generating..." : "Download Image"}</span>
      </button>
    </div>
  );
};

export default SocialShareCard;
