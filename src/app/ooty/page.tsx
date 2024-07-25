"use client";
import React, { useRef, useEffect } from "react";
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
];

const Ooty: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    if (containerRef.current) {
      const sections = sectionsRef.current;

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + containerRef?.current?.offsetWidth,
        },
      });

      sections.forEach((section, i) => {
        gsap.from(section.querySelector(".content"), {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            containerAnimation: containerRef.current
              ? gsap.to(containerRef.current, { x: 0 })
              : undefined,
            start: "left center",
            toggleActions: "play none none reverse",
          },
        });
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <div className="flex">
        {ootyMedia.map((item, index) => (
          <div
            key={item.id}
            ref={(el: HTMLDivElement | null) => {
              sectionsRef.current[index] = el as HTMLDivElement;
            }}
            className="w-screen h-screen flex-shrink-0 relative"
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
              />
            ) : (
              <iframe
                src={item.src}
                title={item.alt}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            )}
            <div className="content absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent text-white">
              <h2 className="text-4xl font-bold mb-4">{item.alt}</h2>
              <p className="text-xl">Discover the beauty of Ooty</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ooty;
