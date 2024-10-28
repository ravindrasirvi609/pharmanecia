"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaComment,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mobile, setMobile] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationInfo, setRegistrationInfo] = useState<{
    url: string | undefined;
    qrCodeUrl: string | StaticImport;
    registrationId: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, mobile, message }),
      });

      const data = await res.json();
      setRegistrationInfo(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      title: "Organizing Secretary",
      name: "Dr. R. Kalirajan",
      phone: "+91 99940 98087",
    },
    {
      title: "Registration Committee",
      name: "Dr. S. Jubie",
      phone: "+91 98946 18588",
    },
    {
      title: "Accommodation / Transport Committee",
      name: "Dr. Srikanth Jupudi",
      phone: "+91 93930 11114",
    },
    {
      title: "Enquiry & Registration Committee",
      name: "Operant Pharmacy Federation",
      phone: "+91 94609-71652",
    },
  ];

  return (
    <div className="bg-light text-primary px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Contact Us
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white shadow-lg rounded-lg p-6"
          >
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              Contact Details
            </h2>
            {contactDetails.map((detail, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold text-accent">
                  {detail.title}
                </h3>
                <p className="flex items-center mt-2">
                  <FaUser className="mr-2 text-secondary" />
                  {detail.name}
                </p>
                <p className="flex items-center mt-1">
                  <FaPhone className="mr-2 text-secondary" />
                  {detail.phone}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white shadow-lg rounded-lg p-6"
          >
            <h2 className="text-3xl font-semibold mb-6 text-secondary">
              Contact Form
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-primary mb-2"
                >
                  Name
                </label>
                <div className="relative">
                  <FaUser className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full p-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="mobile"
                  className="block text-lg font-medium text-primary mb-2"
                >
                  Mobile Number
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="number"
                    id="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                    className="w-full p-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-primary mb-2"
                >
                  Email
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-primary mb-2"
                >
                  Message
                </label>
                <div className="relative">
                  <FaComment className="absolute top-3 left-3 text-gray-400" />
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full p-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                    rows={5}
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-accent text-light p-3 rounded-md hover:bg-secondary transition duration-300 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Registration Info */}
        {registrationInfo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 bg-green-500 p-6 rounded-lg shadow-lg text-white"
          >
            <h1 className="text-xl font-semibold mb-2">
              Thank you for your submission!
            </h1>
            <p className="mb-4">
              We appreciate your message and will get back to you shortly. If
              your inquiry is urgent, please contact us directly:
            </p>
            <Link
              href="https://wa.me/918107199052"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-accent hover:underline font-bold"
            >
              <FaPhone className="mr-2" />
              8107199052
            </Link>
          </motion.div>
        )}

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-semibold mb-6 text-secondary text-center">
            Our Location
          </h2>
          <div className="flex justify-center mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.490983208213!2d76.69538641531514!3d11.411236891851387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a9468ea909%3A0x2d67c252db4ea5df!2sJSS%20College%20of%20Pharmacy!5e0!3m2!1sen!2sin!4v1623278749595!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen={true}
              loading="lazy"
              className="w-full h-96 border-0 rounded-lg shadow-lg"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
