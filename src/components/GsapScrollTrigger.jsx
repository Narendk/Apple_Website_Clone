import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg from '../assets/images/hero.jpeg';

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const img = imageRef.current;

    gsap.fromTo(
      img,
      { scale: 1 }, // Start zoomed-in
      {
        scale: 1.4, // Zoom-out while scrolling
        scrollTrigger: {
          trigger: img,
          start: "top 95%",   // When top of image reaches 80% of viewport height
          end: "0%",     // Until it reaches 30%
          scrub: true,
          ease: "power2.out",
        },
      }
    );

    // Zoom-in again when the image scrolls out (below the end point)
    ScrollTrigger.create({
      trigger: img,
      start: "top 90%",
      end: "bottom top", // Until the bottom of the image leaves the top of the screen
      onLeave: () => {
        gsap.to(img, { scale: 1, ease: "power2.out" });
      },
      onEnterBack: () => {
        gsap.to(img, { scale: 1.4, ease: "power2.out" });
      }
    });
  }, []);

  return (
    <div className="mt-24 flex justify-center items-center">
      <img
        ref={imageRef}
        src={heroImg}
        alt="Scroll Trigger Image"
        style={{
          borderRadius: "0.5rem",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease-out",
          width:"70%"
        }}
      />
    </div>
  );
};

export default GsapScrollTrigger;
