"use client";
import React, { useState } from "react";
import { indianStates } from "@/data"; // Ensure you have this data or adjust accordingly
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { useFirebaseStorage } from "../hooks/useFirebaseStorage";

interface GroupRegistrationFormData {
  groupCode: string;
  salutation: string;
  name: string;
  email: string;
  whatsappNumber: string;
  gender: string;
  dob: string;
  aadharNumber: string;
  affiliation: string;
  designation: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  needAccommodation: boolean;
  imageUrl: string;
}

const GroupRegistrationForm: React.FC = () => {
  const { uploadFile } = useFirebaseStorage();

  const [formData, setFormData] = useState<GroupRegistrationFormData>({
    groupCode: "",
    salutation: "Mr.",
    name: "",
    email: "",
    whatsappNumber: "",
    gender: "Male",
    dob: "",
    aadharNumber: "",
    affiliation: "",
    designation: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
    needAccommodation: false,
    imageUrl: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles[0]) {
      setImageFile(acceptedFiles[0]);
      setFormData((prev) => ({
        ...prev,
        imageUrl: URL.createObjectURL(acceptedFiles[0]),
      }));
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    maxFiles: 1,
    multiple: false,
  });

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.groupCode) newErrors.groupCode = "Group Code is required";
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.whatsappNumber)
      newErrors.whatsappNumber = "WhatsApp number is required";
    if (!/^\d{10}$/.test(formData.whatsappNumber))
      newErrors.whatsappNumber = "Invalid WhatsApp number";
    if (!formData.dob) newErrors.dob = "Date of Birth is required";
    if (!formData.aadharNumber)
      newErrors.aadharNumber = "Aadhar Number is required";
    if (!/^\d{12}$/.test(formData.aadharNumber))
      newErrors.aadharNumber = "Invalid Aadhar Number";
    if (!formData.affiliation)
      newErrors.affiliation = "Affiliation is required";
    if (!formData.designation)
      newErrors.designation = "Designation is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.pincode) newErrors.pincode = "Pincode is required";
    if (!/^\d{6}$/.test(formData.pincode))
      newErrors.pincode = "Invalid pincode";
    if (!formData.country) newErrors.country = "Country is required";
    if (!imageFile) newErrors.imageUrl = "Profile picture is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      let imageUrl = formData.imageUrl;
      if (imageFile) {
        imageUrl = await uploadFile(imageFile);
      }

      const dataToSend = {
        ...formData,
        imageUrl,
      };

      const response = await axios.post("/api/group-submit", dataToSend, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setSubmitMessage("Registration successful!");
        // Reset form
        setFormData({
          groupCode: "",
          salutation: "Mr.",
          name: "",
          email: "",
          whatsappNumber: "",
          gender: "Male",
          dob: "",
          aadharNumber: "",
          affiliation: "",
          designation: "",
          address: "",
          city: "",
          state: "",
          pincode: "",
          country: "India",
          needAccommodation: false,
          imageUrl: "",
        });
        setImageFile(null);
      }
    } catch (error) {
      console.error("Registration failed:", error);
      setSubmitMessage("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Group Registration Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Group Code */}
            <div className="col-span-2">
              <label
                htmlFor="groupCode"
                className="block text-sm font-medium text-gray-700"
              >
                Group Code
              </label>
              <input
                type="text"
                id="groupCode"
                name="groupCode"
                value={formData.groupCode}
                onChange={onInputChange}
                placeholder="Enter your group code"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
              />
              {errors.groupCode && (
                <p className="mt-2 text-sm text-red-600">{errors.groupCode}</p>
              )}
            </div>
            {/* Image Uploader */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Profile Picture
              </label>
              <div
                {...getRootProps()}
                className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md transition-colors ${
                  isDragActive
                    ? "border-accent bg-accent bg-opacity-10"
                    : "border-gray-300 hover:border-accent"
                }`}
              >
                <div className="space-y-1 text-center">
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
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l2.828-2.828a4 4 0 015.656 0L40 32"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="mt-1 text-sm text-gray-600">
                        Drag & drop or click to upload
                      </p>
                    </div>
                  )}
                </div>
              </div>
              {errors.imageUrl && (
                <p className="mt-2 text-sm text-red-600">{errors.imageUrl}</p>
              )}
            </div>
            {/* Name */}
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={onInputChange}
                placeholder="Enter your full name"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600">{errors.name}</p>
              )}
            </div>
            {/* Salutation */}
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="salutation"
                className="block text-sm font-medium text-gray-700"
              >
                Salutation
              </label>
              <select
                id="salutation"
                name="salutation"
                value={formData.salutation}
                onChange={onInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
              >
                <option value="Mr.">Mr.</option>
                <option value="Ms.">Ms.</option>
                <option value="Dr.">Dr.</option>
                <option value="Prof.">Prof.</option>
              </select>
            </div>
            {/* Gender */}
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={onInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {/* DOB */}
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={onInputChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
              />
              {errors.dob && (
                <p className="mt-2 text-sm text-red-600">{errors.dob}</p>
              )}
            </div>
            {/* Aadhar Number */}
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="aadharNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Aadhar Number
              </label>
              <input
                type="text"
                id="aadharNumber"
                name="aadharNumber"
                value={formData.aadharNumber}
                onChange={onInputChange}
                placeholder="Enter your Aadhar number"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
              />
              {errors.aadharNumber && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.aadharNumber}
                </p>
              )}
            </div>
            {/* Affiliation */}
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="affiliation"
                className="block text-sm font-medium text-gray-700"
              >
                Affiliation
              </label>
              <input
                type="text"
                id="affiliation"
                name="affiliation"
                value={formData.affiliation}
                onChange={onInputChange}
                placeholder="Enter your affiliation"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
              />
              {errors.affiliation && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.affiliation}
                </p>
              )}
            </div>
            {/* Designation */}
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="designation"
                className="block text-sm font-medium text-gray-700"
              >
                Designation
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={onInputChange}
                placeholder="Enter your designation"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
              />
              {errors.designation && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.designation}
                </p>
              )}
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={onInputChange}
                placeholder="Enter your email address"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
            {/* Address */}
            <div className="col-span-2">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={onInputChange}
                placeholder="Enter your address"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
              />
              {errors.address && (
                <p className="mt-2 text-sm text-red-600">{errors.address}</p>
              )}
            </div>
            {/* City */}
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={onInputChange}
                placeholder="Enter your city"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
              />
              {errors.city && (
                <p className="mt-2 text-sm text-red-600">{errors.city}</p>
              )}
            </div>
            {/* State */}
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State
              </label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={onInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
                required
              >
                {indianStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {errors.state && (
                <p className="mt-2 text-sm text-red-600">{errors.state}</p>
              )}
            </div>
            {/* Pincode */}
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="pincode"
                className="block text-sm font-medium text-gray-700"
              >
                Pincode
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={onInputChange}
                placeholder="Enter your pincode"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
              />
              {errors.pincode && (
                <p className="mt-2 text-sm text-red-600">{errors.pincode}</p>
              )}
            </div>
            {/* Country */}
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={onInputChange}
                readOnly
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
              />
            </div>
            {/* Need Accommodation */}
            <div className="col-span-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="needAccommodation"
                  name="needAccommodation"
                  checked={formData.needAccommodation}
                  onChange={onInputChange}
                  className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
                />
                <label
                  htmlFor="needAccommodation"
                  className="ml-2 block text-sm font-medium text-gray-700"
                >
                  Need Accommodation
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>

        {submitMessage && (
          <p
            className={`mt-4 text-center text-sm ${
              submitMessage.includes("successful")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {submitMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default GroupRegistrationForm;
