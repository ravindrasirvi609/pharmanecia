import Image from "next/image";
import React from "react";

const SocialMediaPost = ({
  name,
  affiliation,
  designation,
  imageUrl,
  gradientStart = "#300060",
  gradientEnd = "#530060",
}: {
  name: string;
  affiliation: string;
  designation?: string;
  imageUrl: string;
  gradientStart?: string;
  gradientEnd?: string;
}) => {
  return (
    <div
      style={{
        width: "1080px",
        height: "1080px",
        background: `linear-gradient(180deg, ${gradientStart} 0%, ${gradientEnd} 100%)`,
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
          74th Indian Pharmaceutical Congress 2025
        </h1>

        <p
          style={{
            fontSize: "24px",
            margin: "0 0 20px",
          }}
        >
          AI &amp; TECHNOLOGY IN PHARMA: EDUCATE, INNOVATE, EMPOWER
        </p>

        <h2
          style={{
            fontSize: "28px",
            margin: "0 0 20px",
            padding: "0 100px",
            lineHeight: "1.4",
            fontWeight: "bold",
          }}
        >
          Venue: BIEC Bengaluru
        </h2>

        <p
          style={{
            fontSize: "24px",
            margin: "0 0 40px",
          }}
        >
          Dec 19-21, 2025
          <br />
          Friday-Sunday
        </p>
      </div>

      <div
        style={{
          width: "300px",
          height: "300px",
          margin: "0 auto",
          position: "relative",
          borderRadius: "50%",
          border: "4px solid #FFD700",
          padding: "4px",
          backgroundColor: "#FFD700",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <Image
            src={imageUrl}
            alt={name}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>

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

      {designation && (
        <p
          style={{
            color: "#FFA500",
            fontSize: "24px",
            margin: "0 0 10px",
            fontWeight: "bold",
          }}
        >
          {designation}
        </p>
      )}

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
          fontWeight: "900",
          margin: "0",
        }}
      >
        Hey! I&apos;m Attending 74th IPC 2025
      </p>

      <div
        style={{
          fontSize: "16px",
          marginTop: "30px",
        }}
      >
        <p style={{ margin: "5px 0" }}>
          Organized by: Indian Pharmaceutical Congress Association
        </p>
        <p style={{ margin: "5px 0" }}>
          Hosted by: Association of Pharmaceutical Teachers of India
        </p>
      </div>

      <p
        style={{
          fontSize: "16px",
          marginTop: "20px",
        }}
      >
        #IPC2025 #PharmaTech #AIinPharma #PharmaceuticalCongress
        #PharmaInnovation
      </p>
    </div>
  );
};

export default SocialMediaPost;
