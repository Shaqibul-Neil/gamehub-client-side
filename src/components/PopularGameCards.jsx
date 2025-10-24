import { useContext } from "react";
import Container from "./Container";
import AuthContext from "../contexts/AuthContext";
import PopularGameCard from "./PopularGameCard";
import useScrollAnimation from "../hooks/useScrollAnimation";

const PopularGameCards = () => {
  const { gamesData } = useContext(AuthContext);
  const popularGames = gamesData.filter((games) => games.ratings >= "5");

  // Animate cards individually
  useScrollAnimation(".scroll-section");
  return (
    <Container>
      <div className="space-y-12">
        <div className="scroll-section">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold audiowide mb-5 pb-4 border-b-2 border-cyan-700/50 uppercase tracking-wider ml-2 md:ml-0 bg-linear-to-r from-[#00FFE0] to-white bg-clip-text text-center text-white transition-all duration-300"
            style={{
              color: "#00FFE0",
              textShadow: "0 0 6px #00FFE0",
            }}
          >
            Top Charts
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:gap-12 gap-10 lg:w-9/12 mx-auto px-3 scroll-section">
          {popularGames.map((game) => (
            <PopularGameCard game={game} key={game.id} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PopularGameCards;
