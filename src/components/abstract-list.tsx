"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AbstractTable from "./AbstractTable";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [abstractsPerPage] = useState(7);

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

  const handleStatusUpdate = async (
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

  // Get current abstracts
  const indexOfLastAbstract = currentPage * abstractsPerPage;
  const indexOfFirstAbstract = indexOfLastAbstract - abstractsPerPage;
  const currentAbstracts = abstracts.slice(
    indexOfFirstAbstract,
    indexOfLastAbstract
  );

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
                  {["all", "Pending", "InReview", "Revision", "Accepted"].map(
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
          <AbstractTable
            abstracts={currentAbstracts}
            loading={loading}
            error={error}
            filters={filters}
            handleStatusUpdate={handleStatusUpdate}
          />
          <div className="mt-4 flex justify-center">
            {Array.from(
              { length: Math.ceil(abstracts.length / abstractsPerPage) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`mx-1 px-3 py-1 rounded ${
                    currentPage === i + 1
                      ? "bg-[#034C8C] text-white"
                      : "bg-white text-[#034C8C]"
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AbstractList;
