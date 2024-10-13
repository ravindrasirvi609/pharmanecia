import React from "react";
import { Camera } from "lucide-react";

const SocialMediaPost = ({ name, affiliation, imageUrl }: any) => {
  return (
    <div className="w-[1080px] h-[1080px] bg-gradient-to-br from-blue-100 to-purple-100 font-sans text-gray-800 text-center p-10 flex flex-col justify-between rounded-3xl shadow-2xl">
      <div className="space-y-6">
        <h1 className="text-6xl font-extrabold text-blue-600 tracking-tight">
          Pharmanecia 4.E
        </h1>

        <p className="text-2xl font-medium text-purple-600">
          International Research Conference on
        </p>

        <h2 className="text-4xl font-semibold text-gray-700 px-20 leading-tight">
          &quot;Recent Advances in AI and ML Driven Drug Discovery&quot;
        </h2>

        <p className="text-3xl font-bold text-orange-500">
          7<sup>th</sup> and 8<sup>th</sup> March, 2025
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-4xl font-bold text-blue-600">{name}</h3>

        <p className="text-2xl font-medium text-purple-600">{affiliation}</p>

        <p className="text-3xl font-bold text-orange-500 uppercase">
          Excited to Attend Pharmanecia 4.E!
        </p>
      </div>

      <div className="space-y-4 text-lg text-gray-600">
        <p>Organized by Department of Pharmaceutical Chemistry,</p>
        <p>JSS College of Pharmacy, Ooty</p>
        <p>Hosted by Operant Pharmacy Federation</p>
      </div>

      <p className="text-xl font-semibold text-blue-500">
        #Pharmanecia4E #AIinDrugDiscovery #MachineLearning
        #PharmaceuticalSciences
      </p>
    </div>
  );
};

export default SocialMediaPost;
