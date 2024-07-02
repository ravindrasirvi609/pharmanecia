"use client";
import React, { useState } from "react";

const SponsorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    category: "Platinum Sponsor",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    const response = await fetch("/api/SponsorForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      setStatusMessage("Sponsorship request submitted successfully.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        category: "Platinum Sponsor",
        message: "",
      });
    } else {
      setStatusMessage(`Error: ${data.message}`);
    }
  };

  return (
    <div className="bg-light text-primary px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Become a Sponsor
        </h1>
        {statusMessage && (
          <div
            className={`mb-4 p-2 rounded-md ${
              Response
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {statusMessage}
          </div>
        )}
        <form
          className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-primary"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-primary"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-lg font-medium text-primary"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="company"
              className="block text-lg font-medium text-primary"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-2 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-lg font-medium text-primary"
            >
              Sponsorship Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            >
              <option value="Platinum Sponsor">Platinum Sponsor</option>
              <option value="Gold Sponsor">Gold Sponsor</option>
              <option value="Silver Sponsor">Silver Sponsor</option>
              <option value="Bronze Sponsor">Bronze Sponsor</option>
              <option value="Supporter Sponsor">Supporter Sponsor</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-lg font-medium text-primary"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              rows={5}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-accent text-light p-2 rounded-md hover:bg-secondary transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SponsorForm;
