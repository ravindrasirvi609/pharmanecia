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
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

// Define types for the abstract and filters
interface Abstract {
  id: string;
  title: string;
  author: string;
  email: string;
  Status: string;
  file: string;
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

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedAbstract, setSelectedAbstract] = useState<Abstract | null>(
    null
  );

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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleDownload = (abstract: Abstract) => {
    window.open(abstract.file, "_blank");
  };

  const handleStatusUpdate = (abstract: Abstract, newStatus: string) => {
    setAbstracts((prevAbstracts) =>
      prevAbstracts.map((a) =>
        a.id === abstract.id ? { ...a, status: newStatus } : a
      )
    );
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
                    status: checked ? "Pending" : prev.Status,
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
                    status: checked ? "InReview" : prev.Status,
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
                    status: checked ? "Rejected" : prev.Status,
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
                    status: checked ? "Accepted" : prev.Status,
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
                <DropdownMenuRadioItem value="status">
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
                <TableRow
                  key={abstract.id}
                  onClick={() => setSelectedAbstract(abstract)}
                  className="cursor-pointer hover:bg-muted/50"
                >
                  <TableCell className="font-medium">
                    {abstract.title}
                  </TableCell>
                  <TableCell>{abstract.author}</TableCell>
                  <TableCell>{abstract.email}</TableCell>
                  <TableCell>
                    <Badge>{abstract.Status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(abstract);
                      }}
                    >
                      <DownloadIcon className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {selectedAbstract && (
            <Card>
              <CardHeader>
                <CardTitle>{selectedAbstract.title}</CardTitle>
                <CardDescription>
                  {selectedAbstract.author} ({selectedAbstract.email})
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Status: {selectedAbstract.Status}</p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <MoveVerticalIcon className="w-4 h-4" />
                      <span>Update Status</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[200px]">
                    <DropdownMenuRadioGroup
                      value={selectedAbstract.Status}
                      onValueChange={(value) =>
                        handleStatusUpdate(selectedAbstract, value)
                      }
                    >
                      <DropdownMenuRadioItem value="Pending">
                        Pending
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="InReview">
                        In Review
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="Rejected">
                        Rejected
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="Accepted">
                        Accepted
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}

// Icons as JSX components
const FilterIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 4.5h18M3 12h18m-7.5 7.5h-9"
    />
  </svg>
);

const ListOrderedIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6l.672-.895A.75.75 0 0 0 3.75 4.5h1.5m-1.5 6.75h1.5L3.75 15h1.5m-1.5-4.5v-.75h3m-3 4.5V12m3-6.75V4.5h-3m3 0v3m3 0v1.5h-1.5L9 3"
    />
  </svg>
);

const SearchIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-4.35-4.35M15.75 11.25A4.5 4.5 0 1 1 6.75 11.25 4.5 4.5 0 0 1 15.75 11.25z"
    />
  </svg>
);

const MoveVerticalIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 4.5h6m-3 15h.008v.008H12v-.008z"
    />
  </svg>
);

const DownloadIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 15.75l4.5-4.5m0 0L12 6.75m4.5 4.5H3m10.5 4.5h6m0-1.5h-6m0 1.5v-3h-6"
    />
  </svg>
);
