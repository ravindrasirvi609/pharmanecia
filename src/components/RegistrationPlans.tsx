"use client";
import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import { Plan, RegistrationFormData } from "@/lib/interface";
import { useFirebaseStorage } from "@/app/hooks/useFirebaseStorage";
import { plans } from "@/data";

const RegistrationPlans: React.FC = () => {
  const { uploadFile } = useFirebaseStorage();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const [formData, setFormData] = useState<RegistrationFormData>({
    email: "",
    whatsappNumber: "",
    name: "",
    affiliation: "",
    designation: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    registrationType: "Professional",
    needAccommodation: false,
    dietaryRequirements: "",
    specialAssistance: "",
    Salutations: "Mr.",
    imageUrl: "",
    dob: "",
    AadharNumber: "",
    institute: "",
    gender: "Male",
    abstractSubmitted: false,
    abstractId: null,
  });

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleImageUpload = async (file: File) => {
    try {
      const imageUrl = await uploadFile(file);
      setFormData((prevState) => ({
        ...prevState,
        imageUrl: imageUrl,
      }));
    } catch (error) {
      console.error("Failed to upload image:", error);
      alert("Failed to upload image. Please try again.");
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!formData.imageUrl) {
      errors.imageUrl = "Image is required";
    }

    if (!formData.dob) {
      errors.dob = "Date of birth is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.whatsappNumber) {
      errors.whatsappNumber = "WhatsApp number is required";
    } else if (!/^\d{10}$/.test(formData.whatsappNumber)) {
      errors.whatsappNumber = "WhatsApp number must be 10 digits";
    }

    if (!formData.name) {
      errors.name = "Name is required";
    }

    if (!formData.affiliation) {
      errors.affiliation = "Affiliation is required";
    }

    if (!formData.designation) {
      errors.designation = "Designation is required";
    }

    if (!formData.address) {
      errors.address = "Address is required";
    }

    if (!formData.city) {
      errors.city = "City is required";
    }

    if (!formData.state) {
      errors.state = "State is required";
    }

    if (!formData.pincode) {
      errors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      errors.pincode = "Pincode must be 6 digits";
    }

    // Add more validations as needed

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlan) {
      alert("Please select a plan before submitting.");
      return;
    }

    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Save registration data
      const registrationResponse = await fetch("/api/save-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (registrationResponse.ok) {
        const registration = await registrationResponse.json();
        await makePayment(selectedPlan, registration.registration);
      } else {
        throw new Error("Failed to save registration");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      setSubmitError(
        "An error occurred while submitting the form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const makePayment = async (plan: Plan, registration: any) => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    try {
      // Create Razorpay order
      const orderResponse = await fetch("/api/razorpay-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: plan.price }),
      });

      if (!orderResponse.ok) {
        throw new Error("Failed to create Razorpay order");
      }

      const orderData = await orderResponse.json();

      const options = {
        name: "Operant Pharmacy Federation",
        currency: orderData.currency,
        amount: orderData.amount,
        order_id: orderData.id,
        description: `Payment for ${plan.name}`,
        handler: async function (response: any) {
          try {
            const transactionResponse = await fetch("/api/save-transaction", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                amount: orderData.amount / 100,
                currency: orderData.currency,
                planName: plan.name,
                customerName: registration.name,
                customerEmail: registration.email,
                customerPhone: registration.whatsappNumber,
              }),
            });

            if (transactionResponse.ok) {
              alert("Payment Successful");
              closeModal();
            } else {
              throw new Error("Failed to save transaction");
            }
          } catch (error) {
            console.error("Failed to save transaction:", error);
            alert(
              "Payment successful, but failed to save transaction details."
            );
          } finally {
            window.location.href = `/abstractForm/${registration.registration._id}`;
          }
        },
        prefill: {
          name: registration.name,
          email: registration.email,
          contact: registration.whatsappNumber,
        },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Payment failed:", error);
      alert("Failed to initiate payment. Please try again.");
    }
  };

  const openModal = (plan: Plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-secondary text-center">
          Registration Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">
                {plan.name}
              </h3>
              <p className="text-lg mb-4">{plan.description}</p>
              <p className="text-lg font-semibold mb-6">{plan.price}₹</p>
              <button
                onClick={() => openModal(plan)}
                className="bg-accent text-light px-6 py-2 rounded-md hover:bg-secondary transition duration-300"
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold mb-4">
                Register for {selectedPlan?.name}
              </h2>
              <RegistrationForm
                formData={formData}
                onInputChange={handleInputChange}
                onImageUpload={handleImageUpload}
                errors={formErrors}
              />
              {submitError && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  {submitError}
                </div>
              )}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full font-bold py-3 px-6 rounded-md transition duration-300 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-accent text-light hover:bg-secondary"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Submitting...
                  </div>
                ) : (
                  "Register and Pay"
                )}
              </button>
              <button
                onClick={closeModal}
                className="mt-4 bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationPlans;
