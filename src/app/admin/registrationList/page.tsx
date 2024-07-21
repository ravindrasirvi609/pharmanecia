"use client";
import RegistrationTable from "@/components/RegistrationTable";
import { exportToExcel } from "@/lib/excelExport";
import Link from "next/link";
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

  const handleExport = () => {
    exportToExcel(registrations, "Registrations");
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary">Registration List</h1>
        <button
          onClick={handleExport}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
        >
          Export to Excel
        </button>
        <Link href={"/admin/abstractList"}>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">
            Abstract List
          </button>
        </Link>
      </div>
      <RegistrationTable registrations={registrations} />
    </div>
  );
}
