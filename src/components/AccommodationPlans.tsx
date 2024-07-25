import React from "react";

interface AccommodationPlan {
  type: string;
  price: number;
  features: string[];
}

const accommodationPlans: AccommodationPlan[] = [
  {
    type: "Single Occupancy",
    price: 1770,
    features: ["Private room", "En-suite bathroom", "Wi-Fi"],
  },
  {
    type: "Double Occupancy",
    price: 900,
    features: ["Shared room for two", "En-suite bathroom", "Wi-Fi"],
  },
  {
    type: "Dormitory",
    price: 590,
    features: ["Shared room for 4-6 people", "Shared bathroom", "Wi-Fi"],
  },
];

const AccommodationPlans: React.FC = () => {
  return (
    <div className="py-12 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-6 text-[#021373] text-center">
          Accommodation Plans
        </h2>
        <div className="mt-10 space-y-8 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:gap-8">
          {accommodationPlans.map((plan) => (
            <div
              key={plan.type}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 border border-[#CACACA]"
            >
              <div className="px-6 py-8">
                <h3 className="text-2xl font-semibold text-[#021373] text-center">
                  {plan.type}
                </h3>
                <p className="mt-4 text-4xl font-extrabold text-[#D94814] text-center">
                  ₹ {plan.price}
                  <span className="text-base font-medium text-[#CACACA]">
                    /night
                  </span>
                  <p className="text-base font-medium text-[#050505]">
                    Including GST
                  </p>
                </p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-[#D94814]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-3 text-base text-[#021373]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-4 bg-[#F2F2F2]">
                <button className="w-full bg-[#021373] text-white py-2 px-4 rounded-md hover:bg-[#D94814] transition duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccommodationPlans;
