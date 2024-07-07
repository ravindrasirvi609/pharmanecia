import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PharmaneciaScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (containerRef.current && textRef.current) {
      const textWidth = textRef.current.offsetWidth;
      const windowWidth = window.innerWidth;

      gsap.to(textRef.current, {
        x: -(textWidth - windowWidth),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${textWidth}`,
          pin: true,
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[110vh] bg-danger overflow-hidden relative"
    >
      <div
        ref={textRef}
        className="text-[30vw] font-bold whitespace-nowrap absolute top-1/2 left-0 transform -translate-y-1/2 px-[50vw]"
      >
        PHARMANECIA
      </div>
    </div>
  );
};

export default PharmaneciaScroll;
