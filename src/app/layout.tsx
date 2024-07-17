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
  title: "Pharmanecia - EMERGING TRENDS IN PHARMACEUTICAL RESEARCH",
  description:
    "Join us for Pharmanecia, the 4th Annual International Convention of the Hosted by Operant BioMedical Researsh Federation. Explore the latest innovations and advancements in pharmacy education and practice.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
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
        <div className="mt-20 bg-light">
          {children}
          <Analytics />
        </div>
        <Footer />
      </body>
    </html>
  );
}
