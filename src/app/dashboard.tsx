import React from "react";
import { GetServerSideProps } from "next";
import RegistrationModel from "@/Model/RegistrationModel";
import AbstractModel from "@/Model/AbstractModel";

interface DashboardProps {
  registrations: any[];
  abstracts: any[];
}

export default function Dashboard({
  registrations,
  abstracts,
}: DashboardProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Dashboard content */}
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Registration Statistics */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    Registrations
                  </h3>
                  <p className="mt-1 text-3xl font-semibold text-gray-900">
                    {registrations.length}
                  </p>
                </div>
              </div>

              {/* Abstract Statistics */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    Abstracts
                  </h3>
                  <p className="mt-1 text-3xl font-semibold text-gray-900">
                    {abstracts.length}
                  </p>
                </div>
              </div>

              {/* Payment Status */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    Completed Payments
                  </h3>
                  <p className="mt-1 text-3xl font-semibold text-gray-900">
                    {
                      registrations.filter(
                        (r) => r.paymentStatus === "Completed"
                      ).length
                    }
                  </p>
                </div>
              </div>
            </div>

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
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from your database
  const registrations = await RegistrationModel.find()
    .sort({ createdAt: -1 })
    .limit(100);
  const abstracts = await AbstractModel.find()
    .sort({ createdAt: -1 })
    .limit(100);

  return {
    props: {
      registrations: JSON.parse(JSON.stringify(registrations)),
      abstracts: JSON.parse(JSON.stringify(abstracts)),
    },
  };
};
