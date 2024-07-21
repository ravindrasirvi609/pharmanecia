"use client";
import React, { useState } from "react";
import AbstractForm from "@/components/abstract-form";

const AbstractFormPage: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#034C8C] to-[#022873] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-[#F2F2F2] rounded-lg shadow-2xl overflow-hidden">
        <div className="p-6 sm:p-10">
          <h1 className="text-3xl font-extrabold text-[#021373] text-center mb-8">
            Pharmanecia 4.E International Research Conference
          </h1>
          <h2 className="text-2xl font-bold text-[#022873] text-center mb-6">
            &quot;Recent Advances in Artificial Intelligence and Machine
            Learning Driven Drug Discovery&quot;
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <section className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#021373] mb-4">
                  Areas of Specialization
                </h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Pharmaceutical Technology</li>
                  <li>Medicinal Chemistry</li>
                  <li>
                    Pharmacognosy, Indigenous Drugs, Herbal Formulations, and
                    Phytochemistry
                  </li>
                  <li>
                    Pharmacology and Toxicology, Clinical Research &
                    Pharmacovigilance
                  </li>
                  <li>Pharmaceutical Analysis and Quality Assurance</li>
                  <li>Biopharmaceutics, Pharmacokinetics & Drug Metabolism</li>
                  <li>Biotechnology and Biotherapeutics</li>
                  <li>Hospital, Community, and Clinical Pharmacy</li>
                  <li>Pharmaceutical Education and Professional Pharmacy</li>
                  <li>Drug Regulatory Affairs & Pharmaceutical Management</li>
                  <li>Pharmacoeconomics and Pharmacoepidemiology</li>
                  <li>
                    Artificial Intelligence / Bioinformatics / Data Analytics
                  </li>
                </ul>
              </section>

              <section className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#021373] mb-4">
                  Abstract Content
                </h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>
                    The abstract should summarize the work proposed to be
                    presented, including the objectives, methods, results, and
                    conclusions.
                  </li>
                  <li>
                    Abstracts must be original and not previously published or
                    presented at another conference.
                  </li>
                </ul>
              </section>
            </div>

            <div className="space-y-8">
              <section className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#021373] mb-4">
                  Submission Instructions
                </h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>
                    The abstract should be prepared according to the guidelines
                    provided on the website.
                  </li>
                  <li>
                    Submit the abstract in the prescribed format and paste it
                    into the designated space on the submission portal.
                  </li>
                  <li>Abstracts must be submitted online only.</li>
                  <li>The deadline for submission is 31 July, 2024.</li>
                  <li>
                    A model abstract is available for reference on the website.
                  </li>
                </ul>
                <div className="mt-4 space-x-4">
                  <a
                    href="#"
                    className="text-[#034C8C] hover:text-[#021373] transition duration-300"
                  >
                    Pharmanecia MODEL ABSTRACT
                  </a>
                  <a
                    href="#"
                    className="text-[#034C8C] hover:text-[#021373] transition duration-300"
                  >
                    MODEL ABSTRACT POSTER
                  </a>
                </div>
              </section>

              <section className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#021373] mb-4">
                  Review Process
                </h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>All submitted abstracts will be reviewed by the PSC.</li>
                  <li>
                    Selected abstracts will be notified for Poster and/or Oral
                    presentation.
                  </li>
                  <li>
                    The best Poster and/or Oral presentations will be selected
                    from each category and announced during the valedictory
                    function.
                  </li>
                </ul>
              </section>

              <section className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#021373] mb-4">
                  Presentation Guidelines & Rewards
                </h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>
                    Detailed guidelines for Poster and Oral presentations will
                    be provided upon acceptance of the abstract.
                  </li>
                  <li>
                    Presenters must be registered delegates of Pharmanecia 2024.
                  </li>
                  <li>
                    The best Poster and/or Oral presentations in each category
                    will receive a certificate and a memento.
                  </li>
                </ul>
              </section>
            </div>
          </div>

          <section className="mt-8 bg-[#D94814] p-6 rounded-lg shadow-md text-white">
            <h3 className="text-xl font-semibold mb-4">Submit Abstract</h3>
            <p className="mb-4">
              The Pharmanecia Scientific Committee (PSC) invites delegates to
              submit their original scientific work as abstracts for
              presentation during the Congress as Poster and/or Oral
              presentations.
            </p>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-white text-[#D94814] hover:bg-[#F2F2F2] font-bold py-2 px-4 rounded transition duration-300"
            >
              {showForm ? "Hide Form" : "Submit Abstract"}
            </button>
          </section>

          {showForm && (
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <AbstractForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AbstractFormPage;
