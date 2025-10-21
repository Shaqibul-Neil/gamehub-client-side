import { TypeAnimation } from "react-type-animation";

const TypeText = () => {
  return (
    <span className="text-white font-semibold text-lg md:text-2xl lg:text-3xl">
      <TypeAnimation
        sequence={[
          "Discover epic games 🎮",
          2000,
          "Support indie developers 💪",
          2000,
          "Play. Explore. Level up! 🚀",
          2000,
          "Find your next adventure 🌌",
          2000,
          "Build your dream library 🕹️",
          2000,
          "Where gamers unite 💬",
          2000,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
      />
    </span>
  );
};

export default TypeText;
