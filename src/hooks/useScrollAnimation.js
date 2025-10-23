import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimation = (selector = ".scroll-section") => {
  useEffect(() => {
    const sections = document.querySelectorAll(selector);

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.4,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [selector]);
};

export default useScrollAnimation;
