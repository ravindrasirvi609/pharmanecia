"use client";
import React, { useState } from "react";
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

const Ooty: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    gsap.utils.toArray(".section").forEach((section: any, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        pin: true,
        pinSpacing: false,
        onEnter: () => setActiveIndex(i),
        onEnterBack: () => setActiveIndex(i),
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
            <div className="bg-black bg-opacity-60 p-8 rounded-lg max-w-2xl text-center">
              <h2 className="text-5xl font-bold mb-6 tracking-wide text-white">
                {item.alt}
              </h2>
              <p className="text-xl leading-relaxed text-white mb-6">
                {item.description}
              </p>
              {item.type === "video" && (
                <button className="mt-4 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
                  Unmute Video
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-2">
          {ootyMedia.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ooty;
