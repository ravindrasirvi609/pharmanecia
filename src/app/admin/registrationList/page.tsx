"use client";
import RegistrationTable from "@/components/RegistrationTable";
import { useState, useEffect } from "react";

export default function RegistrationList() {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRegistrations() {
      try {
        const response = await fetch("/api/registrationsList");
        const data = await response.json();
        setRegistrations(data);
      } catch (error) {
        console.error("Failed to fetch registrations:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRegistrations();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">
        Registration List
      </h1>
      <RegistrationTable registrations={registrations} />
    </div>
  );
}
