"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ArrowDown,
  Calendar,
  Users,
  MapPin,
  Coffee,
  Hotel,
  Wifi,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface MediaItem {
  id: number;
  type: "image" | "video";
  src: string;
  alt: string;
  description?: string;
}
const ootyMedia: MediaItem[] = [
  { id: 1, type: "image", src: "/1.jpeg", alt: "Ooty Tea Gardens" },
  {
    id: 2,
    type: "video",
    src: "https://www.youtube.com/embed/NudsuaFDeAY",
    alt: "Ooty Lake",
    description:
      "Ooty Lake is an artificial lake constructed by John Sullivan in 1824. The lake is surrounded by Eucalyptus trees and greenery. The lake is a popular tourist spot for boating and picnics. The lake is also home to a mini garden, a children's park, and a toy train.",
  },
  {
    id: 3,
    type: "image",
    src: "/Botanical Garden.jpg",
    alt: "Botanical Garden",
    description:
      "The Government Botanical Garden is a botanical garden in Udhagamandalam, near Coimbatore(Ooty), Tamil Nadu state, India laid out in 1848. The Gardens, divided into several sections, cover an area of around 55 hectares, and lie on the lower slopes of Doddabetta peak.",
  },
  {
    id: 4,
    type: "image",
    src: "/Dolphin nose_Coonoor.jpeg",
    alt: "Dolphin nose Coonoor",
    description:
      "Dolphin's Nose is a viewpoint in Coonoor, The Nilgiris, Tamil Nadu. Dolphin's Nose is well over 1,000 feet above sea level, 10 km from Coonoor and is a spectacular spot to visit. The tip of the peak resembles a dolphin's nose, hence the name Dolphin's Nose ",
  },
  {
    id: 5,
    type: "video",
    src: "https://www.youtube.com/embed/OPIE5j0SN5Q",
    alt: "Nilgiri Mountain Railway",
    description:
      "The Nilgiri Mountain Railway is a railway in Tamil Nadu, India, built by the British in 1908, and was initially operated by the Madras Railway. The railway still relies on its fleet of steam locomotives.",
  },
  {
    id: 6,
    type: "image",
    src: "/harshal-more-8dS_mTPZ38w-unsplash.jpg",
    alt: "Rose Garden",
    description:
      "The Government Rose Garden is situated on the slopes of the Elk Hill in Vijayanagaram of Ooty town in Tamil Nadu, India at an altitude of 2200 meters. The Rose Park is maintained by the Tamil Nadu Horticulture Department.",
  },
  {
    id: 7,
    type: "image",
    src: "/6.jpg",
    alt: "Ketti Valley",
    description:
      "The Ketti Valley is a valley in the Nilgiris of Tamil Nadu, India. It is home to the Nilgiri Mountain Railway, which was built by the British in 1908, and still operates on this route.",
  },
  {
    id: 8,
    type: "image",
    src: "/7.jpg",
    alt: "Lamb's Rock Coonoor",
    description:
      "Lamb's Rock is a view point in Coonoor, The Nilgiris, Tamil Nadu. It is on the way to Dolphin's Nose, another view point in Coonoor. It is a very good view point to see the Catherine Falls and Mettupalayam plains.",
  },
  {
    id: 9,
    type: "image",
    src: "/8.jpeg",
    alt: "Ooty Lake",
    description:
      "Ooty Lake is an artificial lake constructed by John Sullivan in 1824. The lake is surrounded by Eucalyptus trees and greenery. The lake is a popular tourist spot for boating and picnics. The lake is also home to a mini garden, a children's park, and a toy train.",
  },
  {
    id: 10,
    type: "image",
    src: "/9.jpg",
    alt: "Ooty Rose Garden",
    description:
      "The Government Rose Garden is situated on the slopes of the Elk Hill in Vijayanagaram of Ooty town in Tamil Nadu, India at an altitude of 2200 meters. The Rose Park is maintained by the Tamil Nadu Horticulture Department.",
  },
  {
    id: 11,
    type: "image",
    src: "/10.jpg",
    alt: "Pykara Falls",
    description:
      "Pykara is the name of a village and river 19 kilometres from Ooty in the Indian State of Tamil Nadu. The Pykara River is considered very sacred by the Todas. The Pykara River is the largest river in Nilgiris district.",
  },
  {
    id: 12,
    type: "image",
    src: "/11.webp",
    alt: "Sim's Park Coonoor",
    description:
      "Sim's Park is a botanical garden in Coonoor, Tamil Nadu, India. The garden has been developed partly in the Japanese style and derived its name from J.D. Sim, the secretary of the Madras Club in 1874.",
  },
  {
    id: 13,
    type: "image",
    src: "/12.webp",
    alt: "Tea Factory Ooty",
    description:
      "The Tea Factory is located in Ooty, Tamil Nadu. The factory is a must-visit place for tea lovers. The factory is a place where one can see the process of tea making and also buy different varieties of tea.",
  },
  {
    id: 14,
    type: "image",
    src: "/13.jpg",
    alt: "Tea Museum Ooty",
    description:
      "The Tea Museum is located in Ooty, Tamil Nadu. The museum is a must-visit place for tea lovers. The museum is a place where one can see the process of tea making and also buy different varieties of tea.",
  },
  {
    id: 15,
    type: "image",
    src: "/14.jpg",
    alt: "Thunder World Ooty",
    description:
      "Thunder World is a theme park located in Ooty, Tamil Nadu. The park is a must-visit place for kids and adults. The park has various rides and attractions.",
  },
  {
    id: 16,
    type: "image",
    src: "/15.jpg",
    alt: "Wax World Ooty",
    description:
      "Wax World is a wax museum located in Ooty, Tamil Nadu. The museum is a must-visit place for kids and adults. The museum has wax statues of famous personalities.",
  },
  {
    id: 17,
    type: "image",
    src: "/17.webp",
    alt: "Nilgiri Mountain Railway",
    description:
      "The Nilgiri Mountain Railway is a railway in Tamil Nadu, India, built by the British in 1908, and was initially operated by the Madras Railway. The railway still relies on its fleet of steam locomotives.",
  },
];

const OotyConference: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    sectionRefs.current.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(index),
        onEnterBack: () => setActiveSection(index),
      });
    });
  }, []);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-100 text-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/1.jpeg"
          alt="Ooty Conference Destination"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-6xl font-bold mb-4">
            Ooty: Your Next Conference Destination
          </h1>
          <p className="text-xl mb-8">
            Experience the perfect blend of nature and networking
          </p>
          <button
            onClick={() => scrollToSection(1)}
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300"
          >
            Explore Ooty
          </button>
        </div>
        <ArrowDown
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
          size={32}
        />
      </section>

      {/* Why Ooty for Conferences */}
      <section
        ref={(el) => {
          sectionRefs.current[1] = el as HTMLDivElement;
        }}
        className="py-20 px-4 md:px-8 lg:px-16"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Ooty for Your Conference?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Calendar size={32} />}
            title="Year-round Pleasant Climate"
            description="Enjoy comfortable temperatures and scenic beauty in any season."
          />
          <FeatureCard
            icon={<Users size={32} />}
            title="Diverse Venue Options"
            description="From intimate meeting rooms to large conference halls, we have it all."
          />
          <FeatureCard
            icon={<MapPin size={32} />}
            title="Easy Accessibility"
            description="Well-connected by road, rail, and air from major cities."
          />
          <FeatureCard
            icon={<Coffee size={32} />}
            title="Rich Cultural Experience"
            description="Immerse in local culture and cuisine during your stay."
          />
          <FeatureCard
            icon={<Hotel size={32} />}
            title="Quality Accommodation"
            description="Wide range of hotels and resorts to suit every budget."
          />
          <FeatureCard
            icon={<Wifi size={32} />}
            title="Modern Amenities"
            description="High-speed internet and state-of-the-art conference facilities."
          />
        </div>
      </section>

      {/* Featured Attractions */}
      <section
        ref={(el) => {
          sectionRefs.current[2] = el as HTMLDivElement;
        }}
        className="py-20 px-4 md:px-8 lg:px-16 bg-white"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Attractions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ootyMedia.slice(0, 6).map((item) => (
            <AttractionCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Navigation Dots */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-2">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              onClick={() => scrollToSection(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                index === activeSection ? "bg-blue-600" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AttractionCard: React.FC<{ item: MediaItem }> = ({ item }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="relative h-48">
      <Image src={item.src} alt={item.alt} layout="fill" objectFit="cover" />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{item.alt}</h3>
      <p className="text-gray-600 line-clamp-3">{item.description}</p>
    </div>
  </div>
);

export default OotyConference;
