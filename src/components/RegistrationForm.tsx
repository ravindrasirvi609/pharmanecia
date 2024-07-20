import { useFirebaseStorage } from "@/app/hooks/useFirebaseStorage";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export interface RegistrationFormData {
  email: string;
  whatsappNumber: string;
  Salutations: "Mr." | "Ms." | "Mrs." | "Dr." | "Prof.";
  name: string;
  affiliation: string;
  designation: string;
  gender: "Male" | "Female" | "Other";
  imageUrl: string;
  dob: string;
  AadharNumber: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  institute: string;
  registrationType: "Student" | "Professional" | "Academician";
  abstractSubmitted: boolean;
  needAccommodation: boolean;
  dietaryRequirements: string;
  specialAssistance: string;
}

interface RegistrationFormProps {
  formData: RegistrationFormData;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  formData,
  onInputChange,
  onSubmit,
}) => {
  const {
    uploadFile,
    uploadProgress,
    isUploading,
    error: uploadError,
  } = useFirebaseStorage();
  const [imageFile, setImageFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles[0]) {
      setImageFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    maxFiles: 1,
    multiple: false,
  });

  return (
    <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
      <h3 className="text-2xl font-semibold mb-4">Registration Form</h3>

      {/* Image Uploader */}
      <div className="mb-6">
        <label className="block mb-2">Profile Picture</label>
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
            isDragActive
              ? "border-accent bg-accent bg-opacity-10"
              : "border-gray-300 hover:border-accent"
          }`}
        >
          <input {...getInputProps()} />
          {imageFile ? (
            <div className="flex flex-col items-center">
              <Image
                src={URL.createObjectURL(imageFile)}
                alt="Profile preview"
                className="w-32 h-32 object-cover rounded-full mb-4"
                width={128}
                height={128}
              />
              <p className="text-sm text-gray-600">{imageFile.name}</p>
            </div>
          ) : (
            <div>
              <p className="text-gray-600">
                Drag & drop an image here, or click to select one
              </p>
              <p className="text-sm text-gray-500 mt-2">
                (JPEG, JPG, or PNG, max 5MB)
              </p>
            </div>
          )}
        </div>
        {uploadError && (
          <p className="text-red-500 text-sm mt-2">{uploadError}</p>
        )}
        {isUploading && (
          <div className="mt-2">
            <div className="bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-accent h-2.5 rounded-full"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Uploading: {uploadProgress}%
            </p>
          </div>
        )}
      </div>

      {/* Personal Information */}
      <div className="mb-4">
        <label className="block mb-2">Salutation</label>
        <select
          name="Salutations"
          value={formData.Salutations}
          onChange={onInputChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="Mr.">Mr.</option>
          <option value="Ms.">Ms.</option>
          <option value="Mrs.">Mrs.</option>
          <option value="Dr.">Dr.</option>
          <option value="Prof.">Prof.</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onInputChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onInputChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">WhatsApp Number</label>
        <input
          type="tel"
          name="whatsappNumber"
          value={formData.whatsappNumber}
          onChange={onInputChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={onInputChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={onInputChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Aadhar Number</label>
        <input
          type="text"
          name="AadharNumber"
          value={formData.AadharNumber}
          onChange={onInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Affiliation</label>
        <input
          type="text"
          name="affiliation"
          value={formData.affiliation}
          onChange={onInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Designation</label>
        <input
          type="text"
          name="designation"
          value={formData.designation}
          onChange={onInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Institute</label>
        <input
          type="text"
          name="institute"
          value={formData.institute}
          onChange={onInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Address Information */}
      <div className="mb-4">
        <label className="block mb-2">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={onInputChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={onInputChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">State</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={onInputChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Pincode</label>
        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={onInputChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Country</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={onInputChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Conference-specific Information */}
      <div className="mb-4">
        <label className="block mb-2">Registration Type</label>
        <select
          name="registrationType"
          value={formData.registrationType}
          onChange={onInputChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="Student">Student</option>
          <option value="Professional">Professional</option>
          <option value="Academician">Academician</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="abstractSubmitted"
            checked={formData.abstractSubmitted}
            onChange={onInputChange}
            className="mr-2"
          />
          Abstract Submitted
        </label>
      </div>

      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="needAccommodation"
            checked={formData.needAccommodation}
            onChange={onInputChange}
            className="mr-2"
          />
          Need Accommodation
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Dietary Requirements</label>
        <input
          type="text"
          name="dietaryRequirements"
          value={formData.dietaryRequirements}
          onChange={onInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Special Assistance</label>
        <input
          type="text"
          name="specialAssistance"
          value={formData.specialAssistance}
          onChange={onInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-accent text-light px-6 py-2 rounded-md hover:bg-secondary transition duration-300"
      >
        Register and Pay
      </button>
    </form>
  );
};

export default RegistrationForm;
