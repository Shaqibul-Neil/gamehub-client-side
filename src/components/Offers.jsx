import { useState } from "react";
import { useSpring, a } from "@react-spring/web";
import front from "../assets/front.jpg";
import back from "../assets/back.jpg";

const Offers = () => {
  const [flipped, set] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(1400px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div
      className="relative flex items-center justify-center h-screen w-full cursor-pointer overflow-visible"
      onClick={() => set(!flipped)}
      style={{ perspective: "1400px" }}
    >
      {/* Front Side */}
      <a.div
        className={`absolute w-full h-full bg-cover bg-center [backface-hidden] clipClass`}
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
          backgroundImage: `url(${front})`,
        }}
      >
        <div className="absolute inset-0 bg-black/10 flex flex-col justify-center items-center p-6">
          <div className="contentBoxClasses">
            <h2 className="lg:text-5xl text-2xl font-extrabold text-[#00ffe0] mb-4 tracking-wide audiowide">
              Enter the Ultimate Arena
            </h2>
            <p className="text-md md:text-xl text-gray-200 mb-6 audiowide">
              Join live PvP battles, explore neon arenas, and compete for
              legendary loot.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-2 mb-6">
              <span className="rounded-lg font-semibold bg-white text-black px-6 py-2 shadow-[0_0_10px_#00ffe0] transition-shadow">
                🎮 Multiplayer
              </span>
              <span className="rounded-lg font-semibold bg-black text-[#00ffe0] border border-[#00ffe0] px-6 py-2 shadow-[0_0_10px_#00ffe0]">
                ⚡ Fast-Paced
              </span>
              <span className="rounded-lg font-semibold bg-gray-800 text-gray-300 px-6 py-2 shadow-[0_0_10px_#00ffe0]">
                💎 Epic Rewards
              </span>
            </div>
            <button className="w-full md:w-52 md:-ml-6 py-3 bg-warning text-white font-bold rounded-lg shadow-[0_0_10px_#6c63ff]">
              JOIN THE QUEST
            </button>
          </div>
        </div>
      </a.div>

      {/* Back Side */}
      <a.div
        className={`absolute w-full h-full bg-cover bg-center [backface-hidden] clipClass`}
        style={{
          opacity,
          transform: transform.to((t) => `${t} rotateX(180deg)`),
          backgroundImage: `url(${back})`,
        }}
      >
        <div className="absolute inset-0 bg-black/10 flex flex-col justify-center items-center p-6">
          <div className={"contentBoxClasses"}>
            <h2 className="lg:text-5xl text-2xl font-extrabold text-[#6c63ff] mb-4 tracking-wide audiowide">
              Claim Legendary Loot
            </h2>
            <p className="text-md md:text-xl text-gray-200 mb-6 audiowide">
              Unlock rare skins, hidden levels, and XP boosts. Only the bold
              survive in this cyber-arena!
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-2 mb-6">
              <span className="font-semibold rounded-lg bg-white text-black px-6 py-2 shadow-[0_0_10px_#6c63ff] hover:shadow-[0_0_20px_#6c63ff]">
                ⚔️ Win Battles
              </span>
              <span className="rounded-lg font-semibold bg-black text-[#6c63ff] border border-[#6c63ff] px-6 py-2 shadow-[0_0_10px_#6c63ff]">
                🏆 Battle Glory
              </span>
              <span className="rounded-lg font-semibold bg-gray-800 text-gray-300 px-6 py-2  shadow-[0_0_10px_#6c63ff]">
                🎯 Plan Missions
              </span>
            </div>
            <div className="flex justify-center">
              <button className="py-3 bg-success text-black font-bold rounded-lg shadow-[0_0_10px_#00ffe0] w-full md:w-52 md:-ml-6">
                CLAIM YOUR REWARD
              </button>
            </div>
          </div>
        </div>
      </a.div>
    </div>
  );
};

export default Offers;
