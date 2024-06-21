"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

// Define the types for the student state and the component props
interface Student {
  name: string;
  email: string;
  message: string;
  qrCodeUrl: string;
  kitTaken: boolean;
  idCardTaken: boolean;
  breakfastTaken: boolean;
  lunchTaken: boolean;
  certificateTaken: boolean;
}

interface StudentPageProps {
  params: {
    id: string;
  };
}

const StudentPage: React.FC<StudentPageProps> = ({ params }) => {
  const { id } = params;

  const [student, setStudent] = useState<Student>({
    name: "",
    email: "",
    message: "",
    qrCodeUrl: "",
    kitTaken: false,
    idCardTaken: false,
    breakfastTaken: false,
    lunchTaken: false,
    certificateTaken: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/qrcode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      setStudent(data.props.student);
    };

    fetchData();
  }, [id]);

  const handleCheckboxChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = event.target;
    setStudent((prevState) => ({
      ...prevState,
      [name]: checked,
    }));

    await fetch("/api/updateStudent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        [name]: checked,
      }),
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <Image
              className="h-48 w-full object-cover md:w-48"
              src={student.qrCodeUrl}
              alt="QR Code"
              height={300}
              width={300}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Student Information
            </div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
              {student.name}
            </h1>
            <p className="mt-2 text-gray-500">Email: {student.email}</p>
            <p className="mt-2 text-gray-500">Message: {student.message}</p>
            <div className="mt-4">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="kitTaken"
                  checked={student.kitTaken}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-indigo-600"
                />
                <span className="text-gray-700">Kit Taken</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="idCardTaken"
                  checked={student.idCardTaken}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-indigo-600"
                />
                <span className="text-gray-700">ID Card Taken</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="breakfastTaken"
                  checked={student.breakfastTaken}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-indigo-600"
                />
                <span className="text-gray-700">Breakfast Taken</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="lunchTaken"
                  checked={student.lunchTaken}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-indigo-600"
                />
                <span className="text-gray-700">Lunch Taken</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="certificateTaken"
                  checked={student.certificateTaken}
                  onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-indigo-600"
                />
                <span className="text-gray-700">Certificate Taken</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
