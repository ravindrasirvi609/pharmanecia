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
      className="h-[80vh] sm:h-[100vh] md:h-[110vh] bg-danger overflow-hidden relative"
    >
      <div
        ref={textRef}
        className="text-[30vw] sm:text-[35vw] md:text-[40vw] font-bold whitespace-nowrap absolute top-1/2 left-0 transform -translate-y-1/2 px-[20vw] sm:px-[30vw] md:px-[50vw]"
      >
        PHARMANECIA 4.E
      </div>
    </div>
  );
};

export default PharmaneciaScroll;
