import { useRef, useEffect } from "react";
import { Link } from "react-router";
import gsap from "gsap";

const ExploreButton = ({ to, children }) => {
  const btnRef = useRef(null);

  useEffect(() => {
    if (!btnRef.current) return;

    const line1 = btnRef.current.querySelectorAll(".line-1 span");
    const line2 = btnRef.current.querySelectorAll(".line-2 span");

    // Initial state
    gsap.set(line1, { y: 0, opacity: 1 });
    gsap.set(line2, { y: 20, opacity: 0 });

    const tl = gsap.timeline({ paused: true });
    tl.to(line1, { y: -20, opacity: 0, duration: 0.5, stagger: 0.05 });
    tl.to(line2, { y: 0, opacity: 1, duration: 0.5, stagger: 0.05 }, "<");

    const handleEnter = () => tl.play();
    const handleLeave = () => tl.reverse();

    btnRef.current.addEventListener("mouseenter", handleEnter);
    btnRef.current.addEventListener("mouseleave", handleLeave);

    return () => {
      btnRef.current?.removeEventListener("mouseenter", handleEnter);
      btnRef.current?.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  // Split text for animation
  const splitText1 = children.split("").map((char, i) => (
    <span key={`l1-${i}`} className="inline-block audiowide">
      {char === " " ? "\u00A0" : char} {/* non-breaking space */}
    </span>
  ));

  const splitText2 = children.split("").map((char, i) => (
    <span key={`l2-${i}`} className="inline-block audiowide">
      {char === " " ? "\u00A0" : char} {/* non-breaking space */}
    </span>
  ));

  return (
    <Link
      to={to}
      ref={btnRef}
      className="relative overflow-hidden flex items-center justify-center bg-success border-3 border-success text-black hover:bg-white lg:px-6 px-4 lg:py-3 py-2 font-semibold transition-colors duration-300 transform rounded-lg w-48 h-12 text-xl"
    >
      <div className="line-1 absolute inset-0 flex items-center justify-center overflow-visible">
        {splitText1}
      </div>
      <div className="line-2 absolute inset-0 flex items-center justify-center overflow-visible">
        {splitText2}
      </div>
    </Link>
  );
};

export default ExploreButton;
