"use client";

import React, { useState, useMemo, useEffect } from "react";

interface Abstract {
  _id: string;
  title: string;
  author: string;
  email: string;
  Status: string;
  abstractFileUrl: string;
}

interface Filters {
  Status: string;
  search: string;
  sortBy: string;
  sortOrder: string;
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
          abstract.author
            .toLowerCase()
            .includes(filters.search.toLowerCase()) ||
          abstract.email.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    filtered = filtered.sort((a, b) => {
      if (
        a[filters.sortBy as keyof Abstract] <
        b[filters.sortBy as keyof Abstract]
      )
        return filters.sortOrder === "asc" ? -1 : 1;
      if (
        a[filters.sortBy as keyof Abstract] >
        b[filters.sortBy as keyof Abstract]
      )
        return filters.sortOrder === "asc" ? 1 : -1;
      return 0;
    });
    return filtered;
  }, [abstracts, filters]);

  useEffect(() => {
    const fetchAbstracts = async () => {
      try {
        const response = await fetch("/api/abstractList");
        const data = await response.json();

        if (response.ok) {
          setAbstracts(data.abstracts);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError("An error occurred while fetching abstracts.");
      } finally {
        setLoading(false);
      }
    };

    fetchAbstracts();
  }, []);

  if (loading) {
    return (
      <p className="text-center m-4 font-bold text-yellow-500 text-4xl">
        Loading...
      </p>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center mt-4">Error: {error}</p>;
  }

  const handleDownload = (abstract: Abstract) => {
    window.open(abstract.abstractFileUrl, "_blank");
  };

  const handleStatusUpdate = async (abstract: Abstract, newStatus: string) => {
    try {
      const response = await fetch(`/api/updateStatus?id=${abstract._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus, _id: abstract._id }),
      });

      if (response.ok) {
        setAbstracts((prevAbstracts) =>
          prevAbstracts.map((a) =>
            a._id === abstract._id ? { ...a, Status: newStatus } : a
          )
        );
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (err) {
      setError("An error occurred while updating the status.");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#F2F2F2]">
      <header className="bg-[#021373] text-white px-6 py-4 flex items-center justify-between shadow-md">
        <h1 className="text-2xl font-bold">Abstract Management</h1>
        <div className="flex items-center gap-4">
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
                  {["title", "author", "email", "Status"].map((sortOption) => (
                    <button
                      key={sortOption}
                      onClick={() => {
                        setFilters((prev) => ({ ...prev, sortBy: sortOption }));
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
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-[#022873] text-white uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Title</th>
                <th className="py-3 px-6 text-left">Author</th>
                <th className="py-3 px-6 text-left">Email</th>
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
                    {abstract.title}
                  </td>
                  <td className="py-3 px-6 text-left">{abstract.author}</td>
                  <td className="py-3 px-6 text-left">{abstract.email}</td>
                  <td className="py-3 px-6 text-left">
                    <span
                      className={`py-1 px-3 rounded-full text-xs ${
                        abstract.Status === "Accepted"
                          ? "bg-green-200 text-green-800"
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
                          className="bg-[#021373] hover:bg-[#022873] text-white font-bold py-1 px-3 rounded transition duration-300 ease-in-out"
                        >
                          Update Status
                        </button>
                        <div
                          id={`status-dropdown-${abstract._id}`}
                          className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden"
                        >
                          <div
                            className="py-1"
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
        </div>
      </main>
    </div>
  );
}
