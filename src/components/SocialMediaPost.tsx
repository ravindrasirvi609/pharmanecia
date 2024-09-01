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
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h1
          style={{
            color: "#FFD700",
            fontSize: "60px",
            margin: "0 0 20px",
            fontWeight: "bold",
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
          7<sup>th</sup> and 8<sup>th</sup> March, 2025
        </p>
      </div>

      {/* <div
        style={{
          width: "200px",
          height: "200px",
          overflow: "hidden",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div> */}

      <h3
        style={{
          color: "#FFA500",
          fontSize: "48px",
          margin: "20px 0 10px",
          fontWeight: "bold",
        }}
      >
        {name}
      </h3>

      <p
        style={{
          color: "#FFA500",
          fontSize: "20px",
          margin: "0 0 20px",
        }}
      >
        {affiliation}
      </p>

      <p
        style={{
          color: "#FFA500",
          fontSize: "40px",
          fontWeight: "black",
          margin: "0",
        }}
      >
        Hey! I&apos;m Attending Pharmanecia 4.E
      </p>

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
