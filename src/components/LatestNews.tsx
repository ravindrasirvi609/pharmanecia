import React from "react";

const LatestNews = () => {
  return (
    <div className="bg-light text-primary px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Latest News and Updates
        </h1>

        <div className="space-y-8">
          {/* News Item 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-secondary">
              Announcement: Keynote Speakers Confirmed
            </h2>
            <p className="text-lg leading-relaxed text-justify mb-4">
              We are thrilled to announce the confirmed keynote speakers for
              Pharmanecia 4.E. Join us to hear from leading experts in
              pharmaceutical research.
            </p>
            <a href="#" className="text-accent hover:text-secondary">
              Read more
            </a>
          </div>

          {/* News Item 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-secondary">
              Article: Emerging Trends in Pharmaceutical Research
            </h2>
            <p className="text-lg leading-relaxed text-justify mb-4">
              Discover the latest trends in pharmaceutical research and how they
              are shaping the future of medicine. Our experts share their
              insights.
            </p>
            <a href="#" className="text-accent hover:text-secondary">
              Read more
            </a>
          </div>

          {/* News Item 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-secondary">
              Update: Abstract Submission Deadline Extended
            </h2>
            <p className="text-lg leading-relaxed text-justify mb-4">
              Good news for researchers! The abstract submission deadline for
              Pharmanecia 4.E has been extended to August 31. Submit your
              abstracts now.
            </p>
            <a href="#" className="text-accent hover:text-secondary">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
