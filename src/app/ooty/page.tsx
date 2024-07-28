"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface MediaItem {
  id: number;
  type: "image" | "video";
  src: string;
  alt: string;
}

const ootyMedia: MediaItem[] = [
  { id: 1, type: "image", src: "/1.jpeg", alt: "Ooty Tea Gardens" },
  {
    id: 2,
    type: "video",
    src: "https://www.youtube.com/embed/NudsuaFDeAY",
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
    src: "https://www.youtube.com/embed/OPIE5j0SN5Q",
    alt: "Nilgiri Mountain Railway",
  },
  {
    id: 6,
    type: "image",
    src: "/harshal-more-8dS_mTPZ38w-unsplash.jpg",
    alt: "Rose Garden",
  },
  {
    id: 7,
    type: "image",
    src: "/6.jpg",
    alt: "Ketti Valley",
  },
  {
    id: 8,
    type: "image",
    src: "/7.jpg",
    alt: "Lamb's Rock_Coonoor",
  },
  {
    id: 9,
    type: "image",
    src: "/8.jpeg",
    alt: "Ooty Lake",
  },
  {
    id: 10,
    type: "image",
    src: "/9.jpg",
    alt: "Ooty Rose Garden",
  },
  {
    id: 11,
    type: "image",
    src: "/10.jpg",
    alt: "Pykara Falls",
  },
  {
    id: 12,
    type: "image",
    src: "/11.webp",
    alt: "Sim's Park_Coonoor",
  },
  {
    id: 13,
    type: "image",
    src: "/12.webp",
    alt: "Tea Factory_Ooty",
  },
  {
    id: 14,
    type: "image",
    src: "/13.jpg",
    alt: "Tea Museum_Ooty",
  },
  {
    id: 15,
    type: "image",
    src: "/14.jpg",
    alt: "Thunder World_Ooty",
  },
  {
    id: 16,
    type: "image",
    src: "/15.jpg",
    alt: "Wax World_Ooty",
  },
  {
    id: 17,
    type: "image",
    src: "/17.webp",
    alt: "Nilgiri Mountain Railway",
  },
];

const Ooty: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: number]: boolean }>(
    {}
  );

  useGSAP(() => {
    gsap.utils.toArray(".section").forEach((section: any, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });
  }, []);

  const handleImageLoad = (id: number) => {
    setImagesLoaded((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="overflow-x-hidden">
      {ootyMedia.map((item, index) => (
        <div key={item.id} className="section h-screen w-full relative">
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            {!imagesLoaded[item.id] && item.type === "image" && (
              <p className="text-2xl text-gray-600">Loading {item.alt}...</p>
            )}
          </div>
          <div className="absolute inset-0">
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                className={`transition-opacity duration-500 ${
                  imagesLoaded[item.id] ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => handleImageLoad(item.id)}
                onError={() =>
                  console.error(`Failed to load image: ${item.src}`)
                }
              />
            ) : (
              <iframe
                src={`${item.src}?autoplay=1&mute=1&loop=1&playlist=${item.src
                  .split("/")
                  .pop()}`}
                title={item.alt}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-2xl">
              <h2 className="text-5xl font-bold mb-6 tracking-wide text-white">
                {item.alt}
              </h2>
              <p className="text-xl leading-relaxed text-white">
                Experience the breathtaking beauty of Ooty, where nature&apos;s
                wonders await at every turn.
              </p>
              {item.type === "video" && (
                <button className="mt-4 bg-white text-black px-4 py-2 rounded">
                  Unmute Video
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ooty;
