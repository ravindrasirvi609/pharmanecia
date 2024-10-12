"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DashboardCharts from "@/components/DashboardCharts";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaFileAlt,
  FaMoneyCheckAlt,
  FaHourglassHalf,
} from "react-icons/fa";

// Define types for the dashboard data
interface DashboardStats {
  totalRegistrations: number;
  totalAbstracts: number;
  completedPayments: number;
  pendingPayments: number;
}

interface DashboardChartsProps {
  data: {
    paymentStatus: { completed: number; pending: number; failed: number };
    abstractStatus: { [key: string]: number };
    registrationTypes: { [key: string]: number };
    monthlyRegistrations: { [key: string]: number };
  };
}

interface Registration {
  id: string;
  name: string;
  email: string;
  registrationType: string;
  registrationStatus: string;
}

interface DashboardData {
  stats: DashboardStats;
  chartData: DashboardChartsProps["data"];
  recentRegistrations: Registration[];
}

// Utility components
const StatCard: React.FC<{
  title: string;
  value: number;
  icon: React.ReactNode;
}> = ({ title, value, icon }) => (
  <motion.div
    className="bg-white overflow-hidden shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="px-4 py-5 sm:p-6 flex items-center justify-between">
      <div>
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-3xl font-semibold text-indigo-600">{value}</p>
      </div>
      <div className="text-4xl text-indigo-500">{icon}</div>
    </div>
  </motion.div>
);

function Dashboard() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.post<DashboardData>("/api/dashboard", {
          startDate: "2023-01-01", // Adjust these dates as needed
          endDate: "2024-12-31",
        });
        setDashboardData(response.data);
        setIsLoading(false);
      } catch (err: any) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!dashboardData) return null;

  const { stats, chartData, recentRegistrations } = dashboardData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-indigo-900">Dashboard</h1>
          <nav className="flex space-x-4">
            {["abstract List", "registration List", "nomination List"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/admin/${item.replace(" ", "")}`}
                  className="text-indigo-600 hover:bg-indigo-100 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  {item}
                </Link>
              )
            )}
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Statistics */}
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard
                title="Total Registrations"
                value={stats.totalRegistrations}
                icon={<FaUsers />}
              />
              <StatCard
                title="Total Abstracts"
                value={stats.totalAbstracts}
                icon={<FaFileAlt />}
              />
              <StatCard
                title="Completed Payments"
                value={stats.completedPayments}
                icon={<FaMoneyCheckAlt />}
              />
              <StatCard
                title="Pending Payments"
                value={stats.pendingPayments}
                icon={<FaHourglassHalf />}
              />
            </div>
          </div>

          {/* Charts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <DashboardCharts data={chartData} />
          </motion.div>

          {/* Recent Registrations */}
          <motion.div
            className="mt-8 bg-white shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg font-medium text-gray-900">
                Recent Registrations
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {["Name", "Email", "Registration Type", "Status"].map(
                      (header) => (
                        <th
                          key={header}
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentRegistrations.map((registration) => (
                    <motion.tr
                      key={registration.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ backgroundColor: "#f3f4f6" }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {registration.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {registration.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {registration.registrationType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            registration.registrationStatus === "Confirmed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {registration.registrationStatus}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

export default Dashboard;
