"use client";
import React, { useState, useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { useFirebaseStorage } from "../hooks/useFirebaseStorage";

type NominationFormData = {
  fullName: string;
  dateOfBirth: string;
  aadharNumber: string;
  organization: string;
  position: string;
  email: string;
  whatsappNumber: string;
  category: string;
  nominatorName: string;
  nominatorContact: string;
  professionalAchievements: string;
  challenges: string;
  impact: string;
  innovations: string;
  contribution: string;
  transformation: string;
  leadership: string;
  mentorship: string;
  awards: string;
  recognitionExcellence: string;
  socialResponsibility: string;
  diversityEfforts: string;
  additionalMaterials: string;
  nominationStatement: string;
  uniqueQualities: string;
  additionalInfo: string;
};

const NominationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NominationFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const {
    uploadFile,
    uploadProgress,
    isUploading,
    error: uploadError,
  } = useFirebaseStorage();

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const uploadPromises = acceptedFiles.map((file) => uploadFile(file));
      try {
        const urls = await Promise.all(uploadPromises);
        setUploadedFiles((prevFiles) => [...prevFiles, ...urls]);
      } catch (error) {
        console.error("Error uploading files:", error);
      }
    },
    [uploadFile]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const onSubmit: SubmitHandler<NominationFormData> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const submissionData = {
        ...data,
        supportingDocuments: uploadedFiles,
      };

      const response = await axios.post("/api/nomination", submissionData);

      if (response.status === 201) {
        setSubmitStatus("success");
        reset();
        setUploadedFiles([]);
      } else {
        throw new Error(response.data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const InputField: React.FC<{
    label: string;
    name: keyof NominationFormData;
    type?: string;
    required?: boolean;
    textarea?: boolean;
  }> = ({ label, name, type = "text", required = false, textarea = false }) => (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          {...register(name, {
            required: required ? `${label} is required` : false,
          })}
          id={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          rows={4}
        />
      ) : (
        <input
          {...register(name, {
            required: required ? `${label} is required` : false,
          })}
          type={type}
          id={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      )}
      {errors[name] && (
        <p className="mt-2 text-sm text-red-600">{errors[name]?.message}</p>
      )}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Nomination Form
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Full Name of Nominee" name="fullName" required />
          <InputField
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            required
          />
          <InputField label="Aadhar Number" name="aadharNumber" required />
          <InputField
            label="Organization/Institution"
            name="organization"
            required
          />
          <InputField label="Position/Title" name="position" required />
          <InputField label="Email ID" name="email" type="email" required />
          <InputField label="WhatsApp Number" name="whatsappNumber" required />
          <InputField label="Category of Nomination" name="category" required />
          <InputField label="Nominator's Name" name="nominatorName" />
          <InputField
            label="Nominator's Contact Information"
            name="nominatorContact"
          />
        </div>

        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">
          Professional Achievements
        </h3>
        <InputField
          label="Significant professional accomplishments"
          name="professionalAchievements"
          textarea
          required
        />
        <InputField label="Challenges overcome" name="challenges" textarea />
        <InputField
          label="Impact on industry/field or community"
          name="impact"
          textarea
        />

        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">
          Innovation and Contribution
        </h3>
        <InputField
          label="Innovations or breakthroughs"
          name="innovations"
          textarea
          required
        />
        <InputField
          label="Contribution to advancing the chosen category"
          name="contribution"
          textarea
        />
        <InputField
          label="Examples of transforming processes, products, or practices"
          name="transformation"
          textarea
        />

        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">
          Leadership and Influence
        </h3>
        <InputField
          label="Demonstration of leadership"
          name="leadership"
          textarea
        />
        <InputField
          label="Mentorship and influence on others"
          name="mentorship"
          textarea
        />

        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">
          Awards and Recognitions
        </h3>
        <InputField
          label="Previous awards, honors, or recognitions"
          name="awards"
          textarea
        />
        <InputField
          label="How recognitions highlight excellence"
          name="recognitionExcellence"
          textarea
        />

        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">
          Social Responsibility and Impact
        </h3>
        <InputField
          label="Contributions to social responsibility, sustainability, or community service"
          name="socialResponsibility"
          textarea
        />
        <InputField
          label="Efforts in promoting diversity, inclusion, or accessibility"
          name="diversityEfforts"
          textarea
        />

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Supporting Documents
          </label>
          <div
            {...getRootProps()}
            className={`p-6 mt-1 border-2 border-dashed rounded-lg ${
              isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
            }`}
          >
            <input {...getInputProps()} />
            <p className="text-center text-gray-600">
              {isDragActive
                ? "Drop the files here ..."
                : "Drag 'n' drop some files here, or click to select files"}
            </p>
          </div>
          {isUploading && (
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>
          )}
          {uploadError && (
            <p className="mt-2 text-sm text-red-600">{uploadError}</p>
          )}
          {uploadedFiles.length > 0 && (
            <ul className="mt-4 space-y-2">
              {uploadedFiles.map((file, index) => (
                <li key={index} className="text-sm text-blue-600">
                  File {index + 1} uploaded successfully
                </li>
              ))}
            </ul>
          )}
        </div>

        <InputField
          label="Additional materials or links"
          name="additionalMaterials"
        />

        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">
          Nomination Statement
        </h3>
        <InputField
          label="Why does this nominee deserve to win?"
          name="nominationStatement"
          textarea
          required
        />
        <InputField
          label="What sets the nominee apart from others?"
          name="uniqueQualities"
          textarea
        />

        <InputField
          label="Additional Information"
          name="additionalInfo"
          textarea
        />

        <div className="flex justify-center mt-8">
          <button
            type="submit"
            disabled={isSubmitting || isUploading}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit Nomination"}
          </button>
        </div>
      </form>

      {submitStatus === "success" && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
          Nomination submitted successfully!
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
          An error occurred while submitting the nomination. Please try again.
        </div>
      )}
    </div>
  );
};

export default NominationForm;
