import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pharmanecia - EMERGING TRENDS IN PHARMACEUTICAL RESEARCH",
  description:
    "Join us for Pharmanecia, the 4th Annual International Convention of the Hosted by Operant BioMedical Researsh Federation. Explore the latest innovations and advancements in pharmacy education and practice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
