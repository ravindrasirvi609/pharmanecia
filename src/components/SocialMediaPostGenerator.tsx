"use client";

import React, { useState } from "react";
import Html2Canvas from "html2canvas";
import Image from "next/image";
import SocialMediaPost from "./SocialMediaPost";

interface SocialMediaPostGeneratorProps {}

const SocialMediaPostGenerator: React.FC<
  SocialMediaPostGeneratorProps
> = () => {
  const [formData, setFormData] = useState({
    name: "",
    affiliation: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Please select a valid image file");
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size should be less than 5MB");
        return;
      }

      setImageFile(file);

      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview("");
  };

  const handleDownload = async () => {
    if (!formData.name.trim()) {
      alert("Please enter your name");
      return;
    }

    setIsLoading(true);
    try {
      // Create a temporary div to render the SocialMediaPost
      const tempDiv = document.createElement("div");
      tempDiv.style.position = "absolute";
      tempDiv.style.left = "-9999px";
      document.body.appendChild(tempDiv);

      // Render the SocialMediaPost component into the temporary div
      const socialMediaPost = (
        <SocialMediaPost
          name={formData.name}
          affiliation={formData.affiliation}
          imageUrl={imagePreview}
        />
      );
      await new Promise((resolve) => {
        require("react-dom").render(socialMediaPost, tempDiv, resolve);
      });

      // Use html2canvas to capture the rendered component
      const canvas = await Html2Canvas(tempDiv, {
        scale: 2, // Increase scale for better quality
        useCORS: true, // Enable CORS for image loading
        width: 1080,
        height: 1080,
      });

      // Create and trigger download
      const link = document.createElement("a");
      link.download = `ipc2025-post-${formData.name
        .replace(/\s+/g, "-")
        .toLowerCase()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();

      // Clean up
      document.body.removeChild(tempDiv);
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Error generating image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Create Your Social Media Post
        </h1>
        <p className="text-gray-600">
          Fill in your details to generate a custom 74th Indian Pharmaceutical
          Congress 2025 social media post
        </p>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Enter Your Information</h2>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="affiliation"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              College/Company Name
            </label>
            <input
              type="text"
              id="affiliation"
              name="affiliation"
              value={formData.affiliation}
              onChange={handleInputChange}
              placeholder="Enter your college or company name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Profile Image (Optional)
            </label>
            <div className="space-y-2">
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              />
              {imagePreview && (
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full object-cover border-2 border-indigo-200"
                    />
                    <button
                      onClick={handleRemoveImage}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                      title="Remove image"
                    >
                      ×
                    </button>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>Image uploaded successfully</p>
                    <p className="text-xs text-gray-500">
                      {imageFile?.name} (
                      {(imageFile?.size || 0) / 1024 / 1024 < 1
                        ? `${Math.round((imageFile?.size || 0) / 1024)} KB`
                        : `${((imageFile?.size || 0) / 1024 / 1024).toFixed(
                            1
                          )} MB`}
                      )
                    </p>
                  </div>
                </div>
              )}
              <p className="text-xs text-gray-500">
                Upload a profile image (max 5MB). Supported formats: JPG, PNG,
                GIF, WebP
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Preview</h2>
        <div className="flex justify-center">
          <div
            className="border-2 border-gray-200 rounded-lg overflow-hidden"
            style={{ width: "300px", height: "300px" }}
          >
            <SocialMediaPost
              name={formData.name || "Your Name"}
              affiliation={formData.affiliation || "Your College/Company"}
              imageUrl={imagePreview}
            />
          </div>
        </div>
        <p className="text-sm text-gray-500 text-center mt-2">
          This is a scaled preview. The downloaded image will be high-resolution
          (1080x1080).
        </p>
      </div>

      {/* Action Section */}
      <div className="text-center space-y-4">
        <button
          onClick={handleDownload}
          disabled={isLoading || !formData.name.trim()}
          className={`px-8 py-4 bg-gradient-to-r from-[#021373] to-[#D94814] text-white font-semibold rounded-full hover:from-[#D94814] hover:to-[#021373] transition-all duration-300 flex items-center space-x-2 shadow-lg mx-auto ${
            isLoading || !formData.name.trim()
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          {isLoading ? (
            <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
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
          <span>
            {isLoading ? "Generating..." : "Download Social Media Post"}
          </span>
        </button>

        <div className="text-center text-lg text-gray-600 max-w-md mx-auto">
          <p>
            Download and share this image on LinkedIn to showcase your
            participation in 74th Indian Pharmaceutical Congress 2025!
          </p>
          <p className="mt-2">
            Don&apos;t forget to tag{" "}
            <span className="font-bold">
              Association of Pharmaceutical Teachers of India
            </span>{" "}
            and use the hashtag{" "}
            <span className="font-semibold text-blue-600">#IPC2025</span>.
          </p>
          <p className="mt-2 text-indigo-600 font-bold">
            Lucky participants who share will be eligible for exciting prizes on
            the day of the conference!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPostGenerator;
