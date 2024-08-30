import React from "react";
import dynamic from "next/dynamic";
import { X } from "lucide-react";

const DocViewer = dynamic(() => import("react-doc-viewer"), {
  ssr: false,
});

interface FileViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileUrl: string;
  fileName: string;
}

const FileViewerModal: React.FC<FileViewerModalProps> = ({
  isOpen,
  onClose,
  fileUrl,
  fileName,
}) => {
  if (!isOpen) return null;

  const documents = [{ uri: fileUrl, fileName: fileName }];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-4xl h-[90vh] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{fileName}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex-grow overflow-hidden">
          <DocViewer
            documents={documents}
            config={{
              header: {
                disableHeader: true,
                disableFileName: true,
                retainURLParams: false,
              },
            }}
            style={{ height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default FileViewerModal;
