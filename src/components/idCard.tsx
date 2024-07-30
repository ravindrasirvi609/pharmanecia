import React, { useState } from "react";

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

  const handleDownload = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/generate-share-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          affiliation,
          designation,
          imageUrl,
          registrationType,
          registrationCode,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate image");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = `${name.replace(/\s+/g, "_")}_Pharmanecia_Share.png`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading image:", error);
      alert("Failed to generate image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleDownload}
        disabled={isLoading}
        className={`px-6 py-3 bg-gradient-to-r from-[#021373] to-[#D94814] text-white font-semibold rounded-full hover:from-[#D94814] hover:to-[#021373] transition-all duration-300 flex items-center space-x-2 shadow-lg ${
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
        <span>{isLoading ? "Generating..." : "Post For Social Media "}</span>
      </button>
    </div>
  );
};

export default SocialShareCard;