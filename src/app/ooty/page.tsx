"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Define the media item type
interface MediaItem {
  id: number;
  type: "image" | "video";
  src: string;
  alt: string;
}

// Sample data (replace with your actual data)
const ootyMedia: MediaItem[] = [
  { id: 1, type: "image", src: "/1.jpeg", alt: "Ooty Tea Gardens" },
  {
    id: 2,
    type: "video",
    src: "https://www.youtube.com/watch?v=NudsuaFDeAY",
    alt: "Ooty Lake",
  },
  {
    id: 3,
    type: "image",
    src: "/Botanical Garden.jpg",
    alt: "Botanical Garden",
  },
  {
    id: 4,
    type: "image",
    src: "/Dolphin nose_Coonoor.jpeg",
    alt: "Dolphin nose_Coonoor",
  },
  {
    id: 5,
    type: "video",
    src: "https://www.youtube.com/watch?v=OPIE5j0SN5Q",
    alt: "Nilgiri Mountain Railway",
  },
  {
    id: 6,
    type: "image",
    src: "/harshal-more-8dS_mTPZ38w-unsplash.jpg",
    alt: "Rose Garden",
  },
];

const Ooty: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (containerRef.current && titleRef.current) {
      // Animate the title
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animate media items
      gsap.utils.toArray(".media-item").forEach((item: any, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: index * 0.1,
        });
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-gradient-to-b from-blue-100 to-green-100 min-h-screen p-8"
    >
      <h1
        ref={titleRef}
        className="text-4xl md:text-6xl font-bold text-center text-blue-800 mb-12"
      >
        Discover the Beauty of Ooty
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ootyMedia.map((item) => (
          <div
            key={item.id}
            className="media-item bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {item.type === "image" ? (
              <div className="relative h-64 md:h-80">
                <Image
                  src={item.src}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            ) : (
              <video
                src={item.src}
                controls
                className="w-full h-64 md:h-80 object-cover"
                poster="/images/video-poster.jpg"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {item.alt}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-transform duration-300 hover:scale-105">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Ooty;
