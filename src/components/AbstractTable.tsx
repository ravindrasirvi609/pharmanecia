import React, { useState } from "react";
import Link from "next/link";
import { Eye, Download, MoreVertical } from "lucide-react";
import FileViewerModal from "./FileViewerModal";

// Assuming you have a designationOptions array defined somewhere
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
  const [fileViewerModal, setFileViewerModal] = useState<{
    isOpen: boolean;
    fileUrl: string;
    fileName: string;
  }>({
    isOpen: false,
    fileUrl: "",
    fileName: "",
  });
  const [statusModal, setStatusModal] = useState<{
    isOpen: boolean;
    abstractId: string | null;
  }>({
    isOpen: false,
    abstractId: null,
  });

  const handleDownload = (abstract: Abstract) => {
    window.open(abstract.abstractFileUrl, "_blank");
  };

  const handleViewFile = (abstract: Abstract) => {
    const fileName = `${abstract.name}'s Abstract`;

    setFileViewerModal({
      isOpen: true,
      fileUrl: abstract.abstractFileUrl,
      fileName: fileName,
    });
  };

  const getDesignationLabel = (value: string) => {
    const designation = designationOptions.find(
      (option) => option.value === value
    );
    return designation ? designation.label : "Unknown Designation";
  };

  const handleStatusUpdateClick = (abstract: Abstract, newStatus: string) => {
    if (newStatus === "Rejected") {
      setRejectPopup({ isOpen: true, abstractId: abstract._id });
    } else if (newStatus === "Accepted") {
      setPresentationTypePopup({ isOpen: true, abstractId: abstract._id });
    } else {
      handleStatusUpdate(abstract._id, newStatus);
    }
    setStatusModal({ isOpen: false, abstractId: null });
  };

  const SkeletonLoader = () => (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-300 rounded mb-4"></div>
      {[...Array(5)].map((_, index) => (
        <div key={index} className="h-16 bg-gray-300 rounded mb-2"></div>
      ))}
    </div>
  );

  const CustomModal = ({
    isOpen,
    onClose,
    title,
    children,
  }: {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
  }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          {children}
          <button
            onClick={onClose}
            className="mt-4 bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  const RejectPopup = () => (
    <CustomModal
      isOpen={rejectPopup.isOpen}
      onClose={() => setRejectPopup({ isOpen: false, abstractId: null })}
      title="Reject Abstract"
    >
      <textarea
        className="w-full h-32 p-2 border rounded mb-4"
        placeholder="Enter rejection reason..."
        value={rejectComment}
        onChange={(e) => setRejectComment(e.target.value)}
      ></textarea>
      <div className="flex justify-end">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
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
    </CustomModal>
  );

  const PresentationTypePopup = () => (
    <CustomModal
      isOpen={presentationTypePopup.isOpen}
      onClose={() =>
        setPresentationTypePopup({ isOpen: false, abstractId: null })
      }
      title="Select Presentation Type"
    >
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
    </CustomModal>
  );

  const StatusChangeModal = () => (
    <CustomModal
      isOpen={statusModal.isOpen}
      onClose={() => setStatusModal({ isOpen: false, abstractId: null })}
      title="Change Status"
    >
      <div className="grid gap-4">
        {["Pending", "InReview", "Rejected", "Accepted"].map((status) => (
          <button
            key={status}
            onClick={() => {
              if (statusModal.abstractId) {
                const abstract = abstracts.find(
                  (a) => a._id === statusModal.abstractId
                );
                if (abstract) {
                  handleStatusUpdateClick(abstract, status);
                }
              }
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            {status}
          </button>
        ))}
      </div>
    </CustomModal>
  );

  if (loading) return <SkeletonLoader />;
  if (error)
    return (
      <div className="text-center py-10">
        <p className="text-red-500 text-xl mb-4">Oops! Something went wrong.</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Retry
        </button>
      </div>
    );

  return (
    <>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-900 text-white uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Subject</th>
            <th className="py-3 px-6 text-left">Author</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Temporary Abstract Code</th>
            <th className="py-3 px-6 text-left">Final Abstract Code</th>
            <th className="py-3 px-6 text-left">Designation</th>
            <th className="py-3 px-6 text-left">Registration Status</th>
            <th className="py-3 px-6 text-left">Registration Code</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {abstracts.map((abstract) => (
            <tr
              key={abstract._id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {abstract.subject}
              </td>
              <td className="py-3 px-6 text-left">
                <Link
                  href={`/abstractForm/${abstract._id}`}
                  className="text-blue-600 hover:text-blue-800"
                >
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
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {abstract.registrationCompleted ? "Complete" : "Incomplete"}
                </span>
              </td>
              <td className="py-3 px-6 text-left">
                {abstract.registrationCode || "-"}
              </td>
              <td className="py-3 px-6 text-left">
                <span
                  className={`py-1 px-3 rounded-full text-xs ${
                    abstract.Status === "Accepted"
                      ? "bg-green-200 text-green-800"
                      : abstract.Status === "Rejected"
                      ? "bg-red-200 text-red-800"
                      : "bg-yellow-200 text-yellow-800"
                  }`}
                >
                  {abstract.Status}
                </span>
              </td>
              <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">
                  <button
                    onClick={() => handleViewFile(abstract)}
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 mx-1"
                    title="View"
                  >
                    <Eye size={16} />
                  </button>
                  <button
                    onClick={() => handleDownload(abstract)}
                    className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2 mx-1"
                    title="Download"
                  >
                    <Download size={16} />
                  </button>
                  <button
                    onClick={() =>
                      setStatusModal({ isOpen: true, abstractId: abstract._id })
                    }
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full p-2 mx-1"
                    title="More Actions"
                  >
                    <MoreVertical size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <RejectPopup />
      <PresentationTypePopup />
      <StatusChangeModal />
      <FileViewerModal
        isOpen={fileViewerModal.isOpen}
        onClose={() =>
          setFileViewerModal({ ...fileViewerModal, isOpen: false })
        }
        fileUrl={fileViewerModal.fileUrl}
        fileName={fileViewerModal.fileName}
      />
    </>
  );
};

export default AbstractTable;
