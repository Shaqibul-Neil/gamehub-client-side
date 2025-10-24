"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

const NeonCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseOver = (e) => {
      if (e.target.matches('a, button, input, [data-hover="true"]'))
        setIsHovering(true);
    };
    const handleMouseOut = (e) => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]">
      {/* Inner cursor */}
      <motion.div
        className="absolute w-5 h-5 rounded-full bg-[#00ffe0] shadow-[0_0_10px_#00ffe0,0_0_20px_#00ffe0,0_0_30px_#00ffe0]"
        animate={{
          x: pos.x - 10,
          y: pos.y - 10,
          scale: isClicking ? 0.8 : 1,
          opacity: isHovering ? 0.2 : 1, // hover hole inner transparent
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Outer circle */}
      <motion.div
        className="absolute w-10 h-10 rounded-full border-2 border-[#00ffe0] opacity-50"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          scale: isHovering ? 1.8 : 1, // hover hole boro
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      {/* Glow */}
      <motion.div
        className="absolute w-16 h-16 rounded-full bg-[#00ffe0]/20 blur-[15px]"
        animate={{
          x: pos.x - 32,
          y: pos.y - 32,
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.8 : 0.4,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />
    </div>
  );
};

export default NeonCursor;
