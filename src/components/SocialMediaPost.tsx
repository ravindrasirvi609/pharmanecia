import Image from "next/image";
import React from "react";

const SocialMediaPost = ({ name, affiliation, imageUrl }: any) => {
  return (
    <div
      style={{
        width: "1080px",
        height: "1080px",
        background: "linear-gradient(180deg, #300060 0%, #530060 100%)",
        fontFamily: "Arial, sans-serif",
        color: "white",
        textAlign: "center",
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          color: "#FFD700",
          fontSize: "60px",
          margin: "0 0 20px",
        }}
      >
        Pharmanecia 4.E
      </h1>

      <p
        style={{
          fontSize: "24px",
          margin: "0 0 20px",
        }}
      >
        International Research Conference on
      </p>

      <h2
        style={{
          fontSize: "28px",
          margin: "0 0 20px",
          padding: "0 100px",
          lineHeight: "1.4",
        }}
      >
        &quot;Recent Advances in Artificial Intelligence and Machine Learning
        Driven Drug Discovery&quot;
      </h2>

      <p
        style={{
          fontSize: "24px",
          margin: "0 0 40px",
        }}
      >
        7th and 8th March, 2025
      </p>

      <div
        style={{
          background: "white",
          borderRadius: "20px",
          padding: "30px",
          width: "80%",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "4px solid #FFA500",
            overflow: "hidden",
            margin: "0 auto 20px",
          }}
        >
          <Image
            src={imageUrl}
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <h3
          style={{
            color: "#000080",
            fontSize: "28px",
            margin: "0 0 10px",
          }}
        >
          {name}
        </h3>

        <p
          style={{
            color: "#FFA500",
            fontSize: "24px",
            margin: "0 0 10px",
          }}
        >
          Student
        </p>

        <p
          style={{
            color: "#000000",
            fontSize: "20px",
            margin: "0 0 20px",
          }}
        >
          {affiliation}
        </p>

        <p
          style={{
            color: "#FFA500",
            fontSize: "24px",
            fontWeight: "bold",
            margin: "0",
          }}
        >
          Hey! I&apos;m Attending Pharmanecia 4.E
        </p>
      </div>

      <div
        style={{
          fontSize: "16px",
          marginTop: "30px",
        }}
      >
        <p style={{ margin: "5px 0" }}>
          Organized by Department of Pharmaceutical Chemistry,
        </p>
        <p style={{ margin: "5px 0" }}>JSS College of Pharmacy, Ooty</p>
        <p style={{ margin: "5px 0" }}>Hosted by Operant Pharmacy Federation</p>
      </div>

      <p
        style={{
          fontSize: "16px",
          marginTop: "20px",
        }}
      >
        #Pharmanecia4E #AIinDrugDiscovery #MachineLearning
        #PharmaceuticalSciences
      </p>
    </div>
  );
};

export default SocialMediaPost;
