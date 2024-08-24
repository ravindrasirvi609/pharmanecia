"use client";

import { designationOptions } from "@/data";
import Link from "next/link";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const RejectPopup = ({
  rejectPopup,
  setRejectPopup,
  rejectComment,
  setRejectComment,
  updateStatus,
}: {
  rejectPopup: { isOpen: boolean; abstractId: string | null };
  setRejectPopup: (popup: {
    isOpen: boolean;
    abstractId: string | null;
  }) => void;
  rejectComment: string;
  setRejectComment: (comment: string) => void;
  updateStatus: (
    abstractId: string,
    newStatus: string,
    comment?: string
  ) => Promise<void>;
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">Reject Abstract</h2>
        <textarea
          ref={textareaRef}
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
                await updateStatus(
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
};

const PresentationTypePopup = ({
  isOpen,
  onClose,
  onSelect,
  abstractId,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (abstractId: string, presentationType: string) => void;
  abstractId: string;
}) => {
  const [selectedType, setSelectedType] = useState<string>("");

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Select Presentation Type</h2>
        <select
          className="w-full p-2 border rounded mb-4"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">Select a type</option>
          <option value="Oral">Oral</option>
          <option value="E-Poster">E-Poster</option>
        </select>
        <div className="flex justify-end">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-[#034C8C] hover:bg-[#022873] text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              if (selectedType) {
                onSelect(abstractId, selectedType);
                onClose();
              } else {
                toast.error("Please select a presentation type");
              }
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export function AbstractList() {
  const [abstracts, setAbstracts] = useState<Abstract[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>({
    Status: "all",
    search: "",
    sortBy: "title",
    sortOrder: "asc",
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

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

  const filteredAbstracts = useMemo(() => {
    let filtered = abstracts;
    if (filters.Status !== "all") {
      filtered = filtered.filter(
        (abstract) => abstract.Status === filters.Status
      );
    }
    if (filters.search) {
      filtered = filtered.filter(
        (abstract) =>
          abstract.title.toLowerCase().includes(filters.search.toLowerCase()) ||
          abstract.name.toLowerCase().includes(filters.search.toLowerCase()) ||
          abstract.email.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    filtered = filtered.sort((a, b) => {
      if (a[filters.sortBy] && b[filters.sortBy]) {
        if (a[filters.sortBy] < b[filters.sortBy])
          return filters.sortOrder === "asc" ? -1 : 1;
        if (a[filters.sortBy] > b[filters.sortBy])
          return filters.sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });
    return filtered;
  }, [abstracts, filters]);

  const fetchAbstracts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/abstractList`);
      const data = await response.json();

      if (response.ok) {
        setAbstracts(data.abstracts);
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      setError("An error occurred while fetching abstracts.");
      toast.error("Failed to load abstracts. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAbstracts();
  }, []);
  const handleDownload = (abstract: Abstract) => {
    window.open(abstract.abstractFileUrl, "_blank");
  };

  const handleStatusUpdate = async (abstract: Abstract, newStatus: string) => {
    if (newStatus === "Rejected") {
      setRejectPopup({ isOpen: true, abstractId: abstract._id });
    } else if (newStatus === "Accepted") {
      setPresentationTypePopup({ isOpen: true, abstractId: abstract._id });
    } else {
      await updateStatus(abstract._id, newStatus);
    }
  };

  const handlePresentationTypeSelect = async (
    abstractId: string,
    presentationType: string
  ) => {
    await updateStatus(abstractId, "Accepted", undefined, presentationType);
  };

  const updateStatus = async (
    abstractId: string,
    newStatus: string,
    comment?: string,
    presentationType?: string
  ) => {
    try {
      const response = await fetch(`/api/updateStatus?id=${abstractId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: newStatus,
          _id: abstractId,
          comment,
          presentationType,
        }),
      });

      if (response.ok) {
        setAbstracts((prevAbstracts) =>
          prevAbstracts.map((a) =>
            a._id === abstractId
              ? {
                  ...a,
                  Status: newStatus,
                  presentationType: presentationType || a.presentationType,
                }
              : a
          )
        );
        toast.success(`Status updated to ${newStatus}`);
      } else {
        const data = await response.json();
        throw new Error(data.message);
      }
    } catch (err) {
      toast.error("Failed to update status. Please try again.");
    }
  };

  const SkeletonLoader = () => (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-300 rounded mb-4"></div>
      {[...Array(5)].map((_, index) => (
        <div key={index} className="h-16 bg-gray-300 rounded mb-2"></div>
      ))}
    </div>
  );

  const getDesignationLabel = (value: any) => {
    const designation = designationOptions.find(
      (option) => option.value === value
    );
    return designation ? designation.label : "Unknown Designation";
  };

  return (
    <div className="flex flex-col h-screen bg-[#F2F2F2]">
      <ToastContainer position="top-right" autoClose={3000} />
      <header className="bg-[#021373] text-white px-6 py-4 flex items-center justify-between shadow-md">
        <h1 className="text-2xl font-bold">Abstract Management</h1>
        <div className="flex items-center gap-4">
          <Link href={"/admin/registrationList"} className="">
            <button className="bg-danger text-white px-4 py-2 text-sm font-medium rounded hover:bg-primary-dark">
              Registration List
            </button>
          </Link>
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="px-4 py-2 bg-[#034C8C] text-white rounded-md text-sm font-medium hover:bg-[#022873] transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#034C8C]"
            >
              Filter
            </button>
            {isFilterOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {["all", "Pending", "InReview", "Rejected", "Accepted"].map(
                    (status) => (
                      <button
                        key={status}
                        onClick={() => {
                          setFilters((prev) => ({ ...prev, Status: status }));
                          setIsFilterOpen(false);
                        }}
                        className="block px-4 py-2 text-sm text-[#021373] hover:bg-[#F2F2F2] hover:text-[#034C8C] w-full text-left transition duration-300 ease-in-out"
                        role="menuitem"
                      >
                        {status === "all" ? "All" : status}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
          <input
            type="search"
            placeholder="Search abstracts..."
            className="px-4 py-2 border border-[#CACACA] rounded-md focus:ring-[#034C8C] focus:border-[#034C8C] bg-white text-[#021373]"
            value={filters.search}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, search: e.target.value }))
            }
          />
          <div className="relative">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="px-4 py-2 bg-[#034C8C] text-white rounded-md text-sm font-medium hover:bg-[#022873] transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#034C8C]"
            >
              Sort
            </button>
            {isSortOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {["title", "name", "email", "Status"].map((sortOption) => (
                    <button
                      key={sortOption}
                      onClick={() => {
                        setFilters((prev) => ({
                          ...prev,
                          sortBy: sortOption as keyof Abstract,
                        }));
                        setIsSortOpen(false);
                      }}
                      className="block px-4 py-2 text-sm text-[#021373] hover:bg-[#F2F2F2] hover:text-[#034C8C] w-full text-left transition duration-300 ease-in-out"
                      role="menuitem"
                    >
                      {sortOption.charAt(0).toUpperCase() + sortOption.slice(1)}
                    </button>
                  ))}
                  <hr className="my-1 border-[#CACACA]" />
                  <button
                    onClick={() => {
                      setFilters((prev) => ({
                        ...prev,
                        sortOrder: prev.sortOrder === "asc" ? "desc" : "asc",
                      }));
                      setIsSortOpen(false);
                    }}
                    className="block px-4 py-2 text-sm text-[#021373] hover:bg-[#F2F2F2] hover:text-[#034C8C] w-full text-left transition duration-300 ease-in-out"
                    role="menuitem"
                  >
                    {filters.sortOrder === "asc" ? "Descending" : "Ascending"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto py-6">
          {loading ? (
            <SkeletonLoader />
          ) : error ? (
            <div className="text-center py-10">
              <p className="text-danger text-xl mb-4">
                Oops! Something went wrong.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-[#034C8C] text-white px-4 py-2 rounded hover:bg-[#022873] transition duration-300"
              >
                Retry
              </button>
              <Link href={"/admin/registrationList"}>
                <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">
                  Registration List
                </button>
              </Link>
            </div>
          ) : (
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
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
                {filteredAbstracts.map((abstract) => (
                  <tr
                    key={abstract._id}
                    className="border-b border-[#CACACA] hover:bg-[#F2F2F2] transition duration-300 ease-in-out"
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {abstract.subject}
                    </td>
                    <Link href={`/abstractForm/${abstract._id}`}>
                      {" "}
                      <td className="py-3 px-6 text-left">{abstract.name}</td>
                    </Link>
                    <td className="py-3 px-6 text-left">{abstract.email}</td>
                    <td className="py-3 px-6 text-left">
                      {abstract.temporyAbstractCode}
                    </td>
                    <td className="py-3 px-6 text-left">
                      {abstract.AbstractCode}
                    </td>
                    <td className="py-3 px-6 text-left">
                      {getDesignationLabel(abstract.designation)}
                    </td>

                    <td className="py-3 px-6 text-left">
                      <span
                        className={`py-1 px-3 rounded-full text-xs ${
                          abstract.registrationCompleted === true
                            ? "bg-green-200 text-green-800"
                            : "bg-[#D94814] text-white"
                        }`}
                      >
                        {abstract.registrationCompleted === true
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
                            onClick={() => {
                              const elem = document.getElementById(
                                `status-dropdown-${abstract._id}`
                              );
                              if (elem) elem.classList.toggle("hidden");
                            }}
                            className="bg-danger hover:bg-[#022873] text-white font-bold py-1 px-3 rounded transition duration-300 ease-in-out"
                          >
                            Update Status
                          </button>
                          <div
                            id={`status-dropdown-${abstract._id}`}
                            className="fixed right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden z-50"
                          >
                            <div
                              className="py-1 z-50"
                              role="menu"
                              aria-orientation="vertical"
                            >
                              {[
                                "Pending",
                                "InReview",
                                "Rejected",
                                "Accepted",
                              ].map((status) => (
                                <button
                                  key={status}
                                  onClick={() => {
                                    handleStatusUpdate(abstract, status);
                                    const elem = document.getElementById(
                                      `status-dropdown-${abstract._id}`
                                    );
                                    if (elem) elem.classList.add("hidden");
                                  }}
                                  className="block w-full text-left px-4 py-2 text-sm text-[#021373] hover:bg-[#F2F2F2] hover:text-[#034C8C] transition duration-300 ease-in-out"
                                  role="menuitem"
                                >
                                  {status}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
      {rejectPopup.isOpen && (
        <RejectPopup
          rejectPopup={rejectPopup}
          setRejectPopup={setRejectPopup}
          rejectComment={rejectComment}
          setRejectComment={setRejectComment}
          updateStatus={updateStatus}
        />
      )}
      {presentationTypePopup.isOpen && presentationTypePopup.abstractId && (
        <PresentationTypePopup
          isOpen={presentationTypePopup.isOpen}
          onClose={() =>
            setPresentationTypePopup({ isOpen: false, abstractId: null })
          }
          onSelect={handlePresentationTypeSelect}
          abstractId={presentationTypePopup.abstractId}
        />
      )}
    </div>
  );
}

export default AbstractList;
