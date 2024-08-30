import React, { useState } from "react";
import Link from "next/link";
import { designationOptions } from "@/data";

interface Abstract {
  _id: string;
  title: string;
  subject: string;
  name: string;
  email: string;
  designation: string;
  temporyAbstractCode: string;
  AbstractCode: string;
  registrationCompleted: boolean;
  registrationCode: string;
  Status: string;
  abstractFileUrl: string;
  presentationType: string;
}

interface Filters {
  Status: string;
  search: string;
  sortBy: keyof Abstract;
  sortOrder: "asc" | "desc";
}

interface AbstractTableProps {
  abstracts: Abstract[];
  loading: boolean;
  error: string | null;
  filters: Filters;
  handleStatusUpdate: (
    abstractId: string,
    newStatus: string,
    comment?: string,
    presentationType?: string
  ) => Promise<void>;
}

const AbstractTable: React.FC<AbstractTableProps> = ({
  abstracts,
  loading,
  error,
  filters,
  handleStatusUpdate,
}) => {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [rejectPopup, setRejectPopup] = useState<{
    isOpen: boolean;
    abstractId: string | null;
  }>({
    isOpen: false,
    abstractId: null,
  });
  const [presentationTypePopup, setPresentationTypePopup] = useState<{
    isOpen: boolean;
    abstractId: string | null;
  }>({
    isOpen: false,
    abstractId: null,
  });
  const [rejectComment, setRejectComment] = useState("");

  const handleDownload = (abstract: Abstract) => {
    window.open(abstract.abstractFileUrl, "_blank");
  };

  const getDesignationLabel = (value: any) => {
    const designation = designationOptions.find(
      (option) => option.value === value
    );
    return designation ? designation.label : "Unknown Designation";
  };

  const SkeletonLoader = () => (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-300 rounded mb-4"></div>
      {[...Array(5)].map((_, index) => (
        <div key={index} className="h-16 bg-gray-300 rounded mb-2"></div>
      ))}
    </div>
  );

  const handleStatusUpdateClick = (abstract: Abstract, newStatus: string) => {
    if (newStatus === "Rejected") {
      setRejectPopup({ isOpen: true, abstractId: abstract._id });
    } else if (newStatus === "Accepted") {
      setPresentationTypePopup({ isOpen: true, abstractId: abstract._id });
    } else {
      handleStatusUpdate(abstract._id, newStatus);
    }
  };

  const RejectPopup = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Reject Abstract</h2>
        <textarea
          className="w-full h-32 p-2 border rounded mb-4"
          placeholder="Enter rejection reason..."
          value={rejectComment}
          onChange={(e) => setRejectComment(e.target.value)}
        ></textarea>
        <div className="flex justify-end">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mr-2"
            onClick={() => {
              setRejectPopup({ isOpen: false, abstractId: null });
              setRejectComment("");
            }}
          >
            Cancel
          </button>
          <button
            className="bg-danger hover:bg-danger text-white font-bold py-2 px-4 rounded"
            onClick={async () => {
              if (rejectPopup.abstractId) {
                await handleStatusUpdate(
                  rejectPopup.abstractId,
                  "Rejected",
                  rejectComment
                );
                setRejectPopup({ isOpen: false, abstractId: null });
                setRejectComment("");
              }
            }}
          >
            Confirm Reject
          </button>
        </div>
      </div>
    </div>
  );

  const PresentationTypePopup = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Select Presentation Type</h2>
        <select
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => {
            if (presentationTypePopup.abstractId) {
              handleStatusUpdate(
                presentationTypePopup.abstractId,
                "Accepted",
                undefined,
                e.target.value
              );
              setPresentationTypePopup({ isOpen: false, abstractId: null });
            }
          }}
        >
          <option value="">Select a type</option>
          <option value="Oral">Oral</option>
          <option value="E-Poster">E-Poster</option>
        </select>
        <div className="flex justify-end">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
            onClick={() =>
              setPresentationTypePopup({ isOpen: false, abstractId: null })
            }
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  if (loading) return <SkeletonLoader />;
  if (error)
    return (
      <div className="text-center py-10">
        <p className="text-danger text-xl mb-4">Oops! Something went wrong.</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-[#034C8C] text-white px-4 py-2 rounded hover:bg-[#022873] transition duration-300"
        >
          Retry
        </button>
      </div>
    );

  return (
    <>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden relative">
        <thead>
          <tr className="bg-[#022873] text-white uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Subject</th>
            <th className="py-3 px-6 text-left">Author</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Tempory Abstact Code</th>
            <th className="py-3 px-6 text-left">Final Abstact Code</th>
            <th className="py-3 px-6 text-left">Designation</th>
            <th className="py-3 px-6 text-left">Registration Status</th>
            <th className="py-3 px-6 text-left">Registration Code</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-[#021373] text-sm">
          {abstracts.map((abstract) => (
            <tr
              key={abstract._id}
              className="border-b border-[#CACACA] hover:bg-[#F2F2F2] transition duration-300 ease-in-out"
            >
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {abstract.subject}
              </td>
              <td className="py-3 px-6 text-left">
                <Link href={`/abstractForm/${abstract._id}`}>
                  {abstract.name}
                </Link>
              </td>
              <td className="py-3 px-6 text-left">{abstract.email}</td>
              <td className="py-3 px-6 text-left">
                {abstract.temporyAbstractCode}
              </td>
              <td className="py-3 px-6 text-left">{abstract.AbstractCode}</td>
              <td className="py-3 px-6 text-left">
                {getDesignationLabel(abstract.designation)}
              </td>
              <td className="py-3 px-6 text-left">
                <span
                  className={`py-1 px-3 rounded-full text-xs ${
                    abstract.registrationCompleted
                      ? "bg-green-200 text-green-800"
                      : "bg-[#D94814] text-white"
                  }`}
                >
                  {abstract.registrationCompleted
                    ? "Registration Complete"
                    : "Not Complete"}
                </span>
              </td>
              <td className="py-3 px-6 text-left">
                {abstract.registrationCode || "-"}
              </td>
              <td className="py-3 px-6 text-left">
                <span
                  className={`py-1 px-3 rounded-full text-xs ${
                    abstract.Status === "Accepted"
                      ? "bg-green text-white"
                      : abstract.Status === "Rejected"
                      ? "bg-[#D94814] text-white"
                      : "bg-yellow-200 text-yellow-800"
                  }`}
                >
                  {abstract.Status}
                </span>
              </td>
              <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">
                  <button
                    onClick={() => handleDownload(abstract)}
                    className="bg-[#034C8C] hover:bg-[#022873] text-white font-bold py-1 px-3 rounded mr-2 transition duration-300 ease-in-out"
                  >
                    Download
                  </button>
                  <div className="relative">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenDropdownId(
                          openDropdownId === abstract._id ? null : abstract._id
                        );
                      }}
                      className="bg-danger hover:bg-[#022873] text-white font-bold py-1 px-3 rounded transition duration-300 ease-in-out"
                    >
                      Update Status
                    </button>
                    {openDropdownId === abstract._id && (
                      <div
                        className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                        style={{
                          position: "fixed",
                          transform: "translate(0, -100%)",
                        }}
                      >
                        <div
                          className="py-1 z-50"
                          role="menu"
                          aria-orientation="vertical"
                        >
                          {["Pending", "InReview", "Rejected", "Accepted"].map(
                            (status) => (
                              <button
                                key={status}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleStatusUpdateClick(abstract, status);
                                  setOpenDropdownId(null);
                                }}
                                className="block w-full text-left px-4 py-2 text-sm text-[#021373] hover:bg-[#F2F2F2] hover:text-[#034C8C] transition duration-300 ease-in-out"
                                role="menuitem"
                              >
                                {status}
                              </button>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {rejectPopup.isOpen && <RejectPopup />}
      {presentationTypePopup.isOpen && <PresentationTypePopup />}
    </>
  );
};

export default AbstractTable;
