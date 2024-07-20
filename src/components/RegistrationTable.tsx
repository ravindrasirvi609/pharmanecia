import React from "react";

interface Registration {
  _id: string;
  name: string;
  email: string;
  registrationType: string;
  paymentStatus: string;
  registrationStatus: string;
  createdAt: string;
}

interface RegistrationTableProps {
  registrations: Registration[];
}

const RegistrationTable: React.FC<RegistrationTableProps> = ({
  registrations,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-primary text-white">
          <tr>
            <th className="px-4 py-2">Registration ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Registration Type</th>
            <th className="px-4 py-2">Payment Status</th>
            <th className="px-4 py-2">Registration Status</th>
            <th className="px-4 py-2">Registration Date</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((registration) => (
            <tr key={registration._id} className="border-b hover:bg-light">
              <td className="px-4 py-2">{registration._id}</td>
              <td className="px-4 py-2">{registration.name}</td>
              <td className="px-4 py-2">{registration.email}</td>
              <td className="px-4 py-2">{registration.registrationType}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded ${getPaymentStatusColor(
                    registration.paymentStatus
                  )}`}
                >
                  {registration.paymentStatus}
                </span>
              </td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded ${getRegistrationStatusColor(
                    registration.registrationStatus
                  )}`}
                >
                  {registration.registrationStatus}
                </span>
              </td>
              <td className="px-4 py-2">
                {new Date(registration.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function getPaymentStatusColor(status: string): string {
  switch (status) {
    case "Completed":
      return "bg-green-500 text-white";
    case "Pending":
      return "bg-yellow-500 text-white";
    case "Failed":
      return "bg-danger text-white";
    default:
      return "bg-gray-500 text-white";
  }
}

function getRegistrationStatusColor(status: string): string {
  switch (status) {
    case "Confirmed":
      return "bg-green-500 text-white";
    case "Pending":
      return "bg-yellow-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
}

export default RegistrationTable;
