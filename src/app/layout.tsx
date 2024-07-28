import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title:
    "Pharmanecia 4.E - International Research Conference on AI and ML in Drug Discovery",
  description:
    "Join us for the Pharmanecia 4.E International Research Conference on Recent Advances in Artificial Intelligence and Machine Learning Driven Drug Discovery, March 7-8, 2025.",
  keywords:
    "Pharmanecia, AI in drug discovery, machine learning, pharmaceutical research, conference",
  alternates: {
    canonical: "https://www.pharmanecia.org",
  },
  openGraph: {
    title: "Pharmanecia 4.E Conference",
    description:
      "International Research Conference on AI and ML in Drug Discovery",
    url: "https://www.pharmanecia.org",
    siteName: "Pharmanecia 4.E",
    images: [
      {
        url: "https://www.pharmanecia.org/og-image.png", // Create this image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmanecia 4.E Conference",
    description:
      "International Research Conference on AI and ML in Drug Discovery",
    images: ["https://www.pharmanecia.org/og-image.png"], // Create this image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", fontHeading.variable, fontBody.variable)}
      >
        <Navbar />
        <div className="mt-[4rem] bg-light">
          {children}
          <Analytics />
        </div>
        <Footer />
      </body>
    </html>
  );
}
