// components/RegistrationForm.tsx
import React from "react";

interface RegistrationFormData {
  email: string;
  whatsappNumber: string;
  name: string;
  affiliation: string;
  designation: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  registrationType: "Student" | "Professional" | "Academician";
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
  return (
    <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
      <h3 className="text-2xl font-semibold mb-4">Registration Form</h3>

      <div className="mb-4">
        <label className="block mb-2">Name</label>
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
