"use client";
import React, { useState } from "react";
import axios from "axios";
import RegistrationForm from "./RegistrationForm";

interface Plan {
  name: string;
  description: string;
  price: number;
}

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

const plans: Plan[] = [
  {
    name: "Basic Plan",
    description: "Includes entry to all sessions and conference kit.",
    price: 100,
  },
  {
    name: "Standard Plan",
    description: "Includes entry to all sessions, conference kit, and lunch.",
    price: 150,
  },
  {
    name: "Premium Plan",
    description:
      "Includes entry to all sessions, conference kit, lunch, and accommodation.",
    price: 200,
  },
];

const RegistrationPlans: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlan) {
      alert("Please select a plan before submitting.");
      return;
    }

    try {
      // Save registration data
      const registrationResponse = await axios.post(
        "/api/save-registration",
        formData
      );

      // If registration is successful, proceed to payment
      if (registrationResponse.data.registration) {
        await makePayment(selectedPlan, registrationResponse.data.registration);
      }
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Failed to register. Please try again.");
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
      const orderData = await axios.post("/api/razorpay-order", {
        amount: plan.price,
      });
      console.log(orderData, orderData.data.currency);

      const options = {
        name: "Operant Pharmacy Federation",
        currency: orderData.data.currency,
        amount: orderData.data.amount,
        order_id: orderData.data.id,
        description: `Payment for ${plan.name}`,
        handler: async function (response: any) {
          try {
            const transactionData = await axios.post("/api/save-transaction", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              amount: orderData.data.amount / 100,
              currency: orderData.data.currency,
              planName: plan.name,
              customerName: registration.name,
              customerEmail: registration.email,
              customerPhone: registration.contact,
            });

            alert("Payment Successful");
          } catch (error) {
            console.error("Failed to save transaction:", error);
            alert(
              "Payment successful, but failed to save transaction details."
            );
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
              className={`bg-white shadow-lg rounded-lg p-6 text-center ${
                selectedPlan === plan ? "border-4 border-accent" : ""
              }`}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">
                {plan.name}
              </h3>
              <p className="text-lg mb-4">{plan.description}</p>
              <p className="text-lg font-semibold mb-6">{plan.price}₹</p>
              <button
                onClick={() => setSelectedPlan(plan)}
                className="bg-accent text-light px-6 py-2 rounded-md hover:bg-secondary transition duration-300"
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>

        {selectedPlan && (
          <RegistrationForm
            formData={formData}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default RegistrationPlans;
