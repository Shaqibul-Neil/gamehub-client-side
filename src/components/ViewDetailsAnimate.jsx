import { useRef, useEffect } from "react";
import { Link } from "react-router";
import gsap from "gsap";

const ViewDetailsAnimate = ({ to, children }) => {
  const btnRef = useRef(null);

  useEffect(() => {
    if (!btnRef.current) return;

    const line1 = btnRef.current.querySelectorAll(".line-1 span");
    const line2 = btnRef.current.querySelectorAll(".line-2 span");

    // Initial state: line1 visible, line2 hidden
    gsap.set(line1, { y: 0, opacity: 1 });
    gsap.set(line2, { y: 20, opacity: 0 });

    const tl = gsap.timeline({ paused: true });
    // line1 up + hide
    tl.to(line1, { y: -20, opacity: 0, duration: 0.5, stagger: 0.05 });
    // line2 come in from below + show
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

  // const splitText1 = children.split("").map((char, i) => (
  //   <span key={`l1-${i}`} style={{ display: "inline-block" }}>
  //     {char}
  //   </span>
  // ));

  // const splitText2 = children.split("").map((char, i) => (
  //   <span key={`l2-${i}`} style={{ display: "inline-block" }}>
  //     {char}
  //   </span>
  // ));

  // Split text for animation
  const splitText1 = children.split("").map((char, i) => (
    <span key={`l1-${i}`} className="inline-block">
      {char === " " ? "\u00A0" : char} {/* non-breaking space */}
    </span>
  ));

  const splitText2 = children.split("").map((char, i) => (
    <span key={`l2-${i}`} className="inline-block">
      {char === " " ? "\u00A0" : char} {/* non-breaking space */}
    </span>
  ));

  return (
    <Link
      to={to}
      ref={btnRef}
      className="relative btn bg-success text-black hover:bg-white border-2 border-success w-32 rounded-md font-semibold transition-colors duration-300 overflow-hidden h-10 flex items-center justify-center"
    >
      <div className="line-1 absolute inset-0 flex items-center justify-center">
        {splitText1}
      </div>
      <div className="line-2 absolute inset-0 flex items-center justify-center">
        {splitText2}
      </div>
    </Link>
  );
};

export default ViewDetailsAnimate;
