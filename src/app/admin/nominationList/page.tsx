"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface Nomination {
  _id: string;
  fullName: string;
  organization: string;
  category: string;
  subCategory: string;
  nominationStatement: string;
}

interface NominationsResponse {
  nominations: Nomination[];
}

const NominationsList: React.FC = () => {
  const [nominations, setNominations] = useState<Nomination[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchNominations = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get<NominationsResponse>(
        "/api/nominationsList"
      );
      setNominations(response.data.nominations);
    } catch (err) {
      setError("Failed to fetch nominations. Please try again later.");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchNominations();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="text-danger text-center">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-8">Nominations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nominations.map((nomination) => (
          <div
            key={nomination._id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-secondary text-white p-4">
              <h2 className="text-xl font-semibold">{nomination.fullName}</h2>
              <p className="text-sm">{nomination.organization}</p>
            </div>
            <div className="p-4">
              <p className="text-sm text-darkgray mb-2">
                <span className="font-semibold">Category:</span>{" "}
                {nomination.category}
              </p>
              <p className="text-sm text-darkgray mb-4">
                <span className="font-semibold">Sub-category:</span>{" "}
                {nomination.subCategory}
              </p>
              <p className="text-sm line-clamp-3">
                {nomination.nominationStatement}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NominationsList;
