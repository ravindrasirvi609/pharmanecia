import ClientHomePage from "@/components/ClientHomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Pharmanecia 4.E Conference",
  description:
    "Welcome to Pharmanecia 4.E, exploring AI and ML in drug discovery. Join us on March 7-8, 2025 at JSS College of Pharmacy, Ooty.",
  openGraph: {
    title: "Pharmanecia 4.E",
    description:
      "International Research Conference on AI and ML in Drug Discovery",
    url: "https://www.pharmanecia.org/",
    siteName: "Pharmanecia 4.E",
    images: [
      {
        url: "https://www.pharmanecia.org/og-image.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Pharmanecia 4.E Conference",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmanecia 4.E",
    description:
      "International Research Conference on AI and ML in Drug Discovery",
    images: ["https://www.pharmanecia.org/og-image.png"], // Replace with your actual image URL
  },
};

export default function HomePage() {
  return <ClientHomePage />;
}
