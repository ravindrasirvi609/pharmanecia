import React from "react";

// Theme presets for different post styles
const themes = {
  default: {
    gradientStart: "#300060",
    gradientEnd: "#530060",
    titleColor: "#FFD700",
    accentColor: "#FFA500",
    textColor: "white",
  },
  pharmaBlue: {
    gradientStart: "#0A4D68",
    gradientEnd: "#2E8B8B",
    titleColor: "#00E5FF",
    accentColor: "#FFF176",
    textColor: "white",
  },
  medicalGreen: {
    gradientStart: "#1B5E20",
    gradientEnd: "#4CAF50",
    titleColor: "#C8E6C9",
    accentColor: "#FFEB3B",
    textColor: "white",
  },
  innovationOrange: {
    gradientStart: "#E65100",
    gradientEnd: "#FF9800",
    titleColor: "#FFF3E0",
    accentColor: "#FFEB3B",
    textColor: "white",
  },
  royal: {
    gradientStart: "#4A148C",
    gradientEnd: "#7B1FA2",
    titleColor: "#FFD700",
    accentColor: "#FF6F00",
    textColor: "white",
  },
};

// Layout configurations
const layouts = {
  classic: "classic",
  modern: "modern",
  minimal: "minimal",
  featured: "featured",
  compact: "compact",
} as const;

// Badge types
const badgeTypes = {
  speaker: "Keynote Speaker",
  panelist: "Panelist",
  moderator: "Moderator",
  organizer: "Organizer",
  sponsor: "Sponsor",
  attendee: "Attendee",
  student: "Student",
  researcher: "Researcher",
} as const;

// Background patterns
const backgroundPatterns = {
  none: "",
  dots: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
  lines:
    "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)",
  hexagon:
    'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><polygon points="50,5 85,25 85,75 50,95 15,75 15,25" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></svg>\')',
  molecules:
    'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><circle cx="20" cy="20" r="3" fill="rgba(255,255,255,0.1)"/><circle cx="60" cy="60" r="3" fill="rgba(255,255,255,0.1)"/><line x1="20" y1="20" x2="60" y2="60" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></svg>\')',
};

interface SocialMediaPostProps {
  name: string;
  affiliation: string;
  designation?: string;
  imageUrl: string;
  theme?: keyof typeof themes;
  layout?: keyof typeof layouts;
  badge?: keyof typeof badgeTypes;
  backgroundPattern?: keyof typeof backgroundPatterns;
  customMessage?: string;
  showQRCode?: boolean;
  qrCodeUrl?: string;
  aspectRatio?: "square" | "story" | "banner";
  showAnimations?: boolean;
  customColors?: {
    gradientStart?: string;
    gradientEnd?: string;
    titleColor?: string;
    accentColor?: string;
    textColor?: string;
  };
}

const SocialMediaPost = ({
  name,
  affiliation,
  designation,
  imageUrl,
  theme = "default",
  layout = "classic",
  badge,
  backgroundPattern = "none",
  customMessage,
  showQRCode = false,
  qrCodeUrl,
  aspectRatio = "square",
  showAnimations = false,
  customColors,
}: SocialMediaPostProps) => {
  const selectedTheme = customColors
    ? { ...themes[theme], ...customColors }
    : themes[theme];

  // Aspect ratio dimensions
  const dimensions = {
    square: { width: "1080px", height: "1080px" },
    story: { width: "1080px", height: "1920px" },
    banner: { width: "1920px", height: "1080px" },
  };

  // Animation styles
  const animationStyle = showAnimations
    ? {
        animation: "float 3s ease-in-out infinite",
        "@keyframes float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      }
    : {};

  // Layout-specific styles
  const getLayoutStyles = () => {
    switch (layout) {
      case "modern":
        return {
          padding: "60px",
          justifyContent: "center",
          gap: "30px",
        };
      case "minimal":
        return {
          padding: "80px",
          justifyContent: "space-around",
          gap: "40px",
        };
      case "featured":
        return {
          padding: "40px",
          justifyContent: "flex-start",
          gap: "20px",
        };
      case "compact":
        return {
          padding: "30px",
          justifyContent: "space-between",
          gap: "15px",
        };
      default:
        return {
          padding: "40px",
          justifyContent: "space-between",
          gap: "20px",
        };
    }
  };

  const layoutStyles = getLayoutStyles();

  // Combine gradient and pattern for background
  const backgroundStyle =
    backgroundPattern === "none"
      ? {
          background: `linear-gradient(180deg, ${selectedTheme.gradientStart} 0%, ${selectedTheme.gradientEnd} 100%)`,
        }
      : {
          backgroundImage: `${backgroundPatterns[backgroundPattern]}, linear-gradient(180deg, ${selectedTheme.gradientStart} 0%, ${selectedTheme.gradientEnd} 100%)`,
          backgroundSize: "100px 100px, cover",
        };

  return (
    <div
      style={{
        width: dimensions[aspectRatio].width,
        height: dimensions[aspectRatio].height,
        ...backgroundStyle,
        fontFamily: "Arial, sans-serif",
        color: selectedTheme.textColor,
        textAlign: "center",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        ...layoutStyles,
        ...animationStyle,
      }}
    >
      {/* Decorative elements for enhanced visual appeal */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${selectedTheme.accentColor}20, transparent)`,
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${selectedTheme.titleColor}15, transparent)`,
          zIndex: 1,
        }}
      />

      {/* Badge */}
      {badge && (
        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "20px",
            backgroundColor: selectedTheme.accentColor,
            color: "#000",
            padding: "8px 8px",
            borderRadius: "20px",
            fontSize: "16px",
            fontWeight: "bold",
            zIndex: 10,
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "10px",
          }}
        >
          {badgeTypes[badge]}
        </div>
      )}

      {/* Main Content */}
      <div style={{ zIndex: 5, position: "relative" }}>
        <h1
          style={{
            color: selectedTheme.titleColor,
            fontSize:
              layout === "compact"
                ? "48px"
                : layout === "minimal"
                ? "72px"
                : "60px",
            margin: "0 0 14px",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            lineHeight: "1.0",
          }}
        >
          74th Indian Pharmaceutical Congress 2025
        </h1>

        <p
          style={{
            fontSize: layout === "compact" ? "20px" : "24px",
            margin: "0 0 8px",
            fontWeight: "600",
            textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          AI &amp; TECHNOLOGY IN PHARMA: EDUCATE, INNOVATE, EMPOWER
        </p>

        <h2
          style={{
            fontSize: layout === "compact" ? "24px" : "28px",
            margin: "0 0 10px",
            padding: "0 100px",
            lineHeight: "1.4",
            fontWeight: "bold",
            color: selectedTheme.titleColor,
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          Venue: BIEC Bengaluru
        </h2>

        <p
          style={{
            fontSize: layout === "compact" ? "20px" : "24px",
            margin: "0 0 14px",
            fontWeight: "600",
          }}
        >
          Dec 19-21, 2025
          <br />
          Friday-Sunday
        </p>
      </div>

      {/* Profile Image with enhanced styling */}
      <div
        style={{
          width:
            layout === "compact"
              ? "250px"
              : layout === "featured"
              ? "350px"
              : "300px",
          height:
            layout === "compact"
              ? "250px"
              : layout === "featured"
              ? "350px"
              : "300px",
          margin: "0 auto",
          position: "relative",
          borderRadius: "50%",
          border: `4px solid ${selectedTheme.titleColor}`,
          padding: "4px",
          backgroundColor: selectedTheme.titleColor,
          boxShadow: `0 8px 16px rgba(0,0,0,0.3), 0 0 0 8px ${selectedTheme.accentColor}40`,
          zIndex: 5,
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
          <img
            src={imageUrl}
            alt={name}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              display: "block",
            }}
          />
        </div>
      </div>

      {/* Name and Details */}
      <div style={{ zIndex: 5, position: "relative" }}>
        <h3
          style={{
            color: selectedTheme.accentColor,
            fontSize:
              layout === "compact"
                ? "36px"
                : layout === "featured"
                ? "56px"
                : "48px",
            margin: "4px 0 6px",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          {name}
        </h3>

        {designation && (
          <p
            style={{
              color: selectedTheme.accentColor,
              fontSize: layout === "compact" ? "20px" : "24px",
              margin: "0 0 10px",
              fontWeight: "bold",
            }}
          >
            {designation}
          </p>
        )}

        <p
          style={{
            color: selectedTheme.accentColor,
            fontSize: layout === "compact" ? "18px" : "20px",
            margin: "0 0 10px",
            maxWidth: "80%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {affiliation}
        </p>

        <p
          style={{
            color: selectedTheme.accentColor,
            fontSize: layout === "compact" ? "32px" : "40px",
            fontWeight: "900",
            margin: "0 0 12px",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          {customMessage || "Hey! I'm Attending 74th IPC 2025"}
        </p>

        {/* Footer Information */}
        <div
          style={{
            fontSize: layout === "compact" ? "14px" : "16px",
            marginTop: "12px",
            zIndex: 5,
            position: "relative",
          }}
        >
          <p style={{ margin: "3px 0", opacity: 0.9 }}>
            Organized by: Indian Pharmaceutical Congress Association
          </p>
          <p style={{ margin: "3px 0", opacity: 0.9 }}>
            Hosted by: Association of Pharmaceutical Teachers of India
          </p>
        </div>

        {/* Hashtags */}
        <p
          style={{
            fontSize: layout === "compact" ? "14px" : "16px",
            marginTop: "8px",
            color: selectedTheme.titleColor,
            fontWeight: "600",
            zIndex: 5,
            position: "relative",
          }}
        >
          #IPC2025 #PharmaTech #AIinPharma #PharmaceuticalCongress
          #PharmaInnovation
        </p>
      </div>

      {/* QR Code */}
      {showQRCode && qrCodeUrl && (
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            width: "100px",
            height: "100px",
            backgroundColor: "white",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            color: "#000",
            zIndex: 10,
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          }}
        >
          QR CODE
        </div>
      )}
    </div>
  );
};

export default SocialMediaPost;
