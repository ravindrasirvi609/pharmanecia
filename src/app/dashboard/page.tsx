import React from "react";
import RegistrationModel from "@/Model/RegistrationModel";
import AbstractModel from "@/Model/AbstractModel";
import DashboardCharts from "@/components/DashboardCharts";

// Utility components
const StatCard = ({ title, value }: { title: string; value: number }) => (
  <div className="bg-white overflow-hidden shadow rounded-lg">
    <div className="px-4 py-5 sm:p-6">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
    </div>
  </div>
);

// Server Component
async function Dashboard() {
  // Fetch data from your database
  const registrations = await RegistrationModel.find()
    .sort({ createdAt: -1 })
    .limit(100);
  const abstracts = await AbstractModel.find()
    .sort({ createdAt: -1 })
    .limit(100);

  // Calculate statistics
  const totalRegistrations = registrations.length;
  const totalAbstracts = abstracts.length;
  const completedPayments = registrations.filter(
    (r) => r.paymentStatus === "Completed"
  ).length;
  const pendingPayments = registrations.filter(
    (r) => r.paymentStatus === "Pending"
  ).length;

  // Prepare data for charts
  const chartData = {
    paymentStatus: {
      completed: completedPayments,
      pending: pendingPayments,
      failed: registrations.filter((r) => r.paymentStatus === "Failed").length,
    },
    abstractStatus: {
      Pending: abstracts.filter((a) => a.Status === "Pending").length,
      InReview: abstracts.filter((a) => a.Status === "InReview").length,
      Rejected: abstracts.filter((a) => a.Status === "Rejected").length,
      Accepted: abstracts.filter((a) => a.Status === "Accepted").length,
    },
    registrationTypes: registrations.reduce((acc, reg) => {
      acc[reg.registrationType] = (acc[reg.registrationType] || 0) + 1;
      return acc;
    }, {}),
    monthlyRegistrations: registrations.reduce((acc, reg) => {
      const month = new Date(reg.createdAt).toLocaleString("default", {
        month: "short",
      });
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    }, {}),
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Statistics */}
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard
                title="Total Registrations"
                value={totalRegistrations}
              />
              <StatCard title="Total Abstracts" value={totalAbstracts} />
              <StatCard title="Completed Payments" value={completedPayments} />
              <StatCard title="Pending Payments" value={pendingPayments} />
            </div>
          </div>

          {/* Charts */}
          <DashboardCharts data={chartData} />

          {/* Recent Registrations */}
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-900">
              Recent Registrations
            </h2>
            <div className="mt-4 flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Email
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Registration Type
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {registrations.slice(0, 5).map((registration) => (
                          <tr key={registration._id}>
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
                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                  registration.registrationStatus ===
                                  "Confirmed"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {registration.registrationStatus}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
