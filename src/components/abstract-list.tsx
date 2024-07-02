"use client";

import React, { useState, useMemo, useEffect, JSX, SVGProps } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Define types for the abstract and filters
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
    return <p className="text-red-500 text-center mt-4 ">Error: {error}</p>;
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
            a._id === abstract._id ? { ...a, status: newStatus } : a
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
    <div className="flex flex-col h-screen">
      <header className="bg-background border-b px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Abstract Management</h1>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <FilterIcon className="w-4 h-4" />
                <span>Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Filter by status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={filters.Status === "all"}
                onCheckedChange={(checked) =>
                  setFilters((prev) => ({
                    ...prev,
                    Status: checked ? "all" : prev.Status,
                  }))
                }
              >
                All
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filters.Status === "Pending"}
                onCheckedChange={(checked) =>
                  setFilters((prev) => ({
                    ...prev,
                    Status: checked ? "Pending" : prev.Status,
                  }))
                }
              >
                Pending
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filters.Status === "InReview"}
                onCheckedChange={(checked) =>
                  setFilters((prev) => ({
                    ...prev,
                    Status: checked ? "InReview" : prev.Status,
                  }))
                }
              >
                In Review
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filters.Status === "Rejected"}
                onCheckedChange={(checked) =>
                  setFilters((prev) => ({
                    ...prev,
                    Status: checked ? "Rejected" : prev.Status,
                  }))
                }
              >
                Rejected
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filters.Status === "Accepted"}
                onCheckedChange={(checked) =>
                  setFilters((prev) => ({
                    ...prev,
                    Status: checked ? "Accepted" : prev.Status,
                  }))
                }
              >
                Accepted
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search abstracts..."
              className="pl-8 w-[200px]"
              value={filters.search}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, search: e.target.value }))
              }
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <ListOrderedIcon className="w-4 h-4" />
                <span>Sort</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Sort by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={filters.sortBy}
                onValueChange={(value) =>
                  setFilters((prev) => ({ ...prev, sortBy: value }))
                }
              >
                <DropdownMenuRadioItem value="title">
                  Title
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="author">
                  Author
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="email">
                  Email
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Status">
                  Status
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={filters.sortOrder}
                onValueChange={(value) =>
                  setFilters((prev) => ({ ...prev, sortOrder: value }))
                }
              >
                <DropdownMenuRadioItem value="asc">
                  Ascending
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="desc">
                  Descending
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <div className="grid gap-4 p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAbstracts.map((abstract) => (
                <TableRow key={abstract._id}>
                  <TableCell>{abstract.title}</TableCell>
                  <TableCell>{abstract.author}</TableCell>
                  <TableCell>{abstract.email}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{abstract.Status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownload(abstract)}
                      >
                        Download
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm">
                            Update Status
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[200px]">
                          <DropdownMenuLabel>Update Status</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() =>
                              handleStatusUpdate(abstract, "Pending")
                            }
                          >
                            Pending
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() =>
                              handleStatusUpdate(abstract, "InReview")
                            }
                          >
                            In Review
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() =>
                              handleStatusUpdate(abstract, "Rejected")
                            }
                          >
                            Rejected
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() =>
                              handleStatusUpdate(abstract, "Accepted")
                            }
                          >
                            Accepted
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}

// Icons
function FilterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3c2.755 0 4.552 0 5.828.586a5 5 0 0 1 2.586 2.586C21 7.448 21 9.245 21 12s0 4.552-.586 5.828a5 5 0 0 1-2.586 2.586C16.552 21 14.755 21 12 21s-4.552 0-5.828-.586a5 5 0 0 1-2.586-2.586C3 16.552 3 14.755 3 12s0-4.552.586-5.828a5 5 0 0 1 2.586-2.586C7.448 3 9.245 3 12 3z"
      ></path>
    </svg>
  );
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-4.35-4.35m2.475-5.025a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0z"
      ></path>
    </svg>
  );
}

function ListOrderedIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 6.75h12m-12 5.25h12m-12 5.25h12M3 7.5l1.5-1.5V12m-1.5 9h3m-3-3h2.25"
      ></path>
    </svg>
  );
}
