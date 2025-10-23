import { useContext } from "react";
import Container from "./Container";
import AuthContext from "../contexts/AuthContext";
import PopularGameCard from "./PopularGameCard";

const PopularGameCards = () => {
  const { gamesData, gameLoading } = useContext(AuthContext);
  // console.log(gamesData);
  const popularGames = gamesData.filter((games) => games.ratings >= "5");
  // console.log(popularGames);
  return (
    <Container>
      <div className="space-y-12 lg:mb-48">
        <div>
          <h2 className="text-secondary lg:text-5xl md:text-4xl audiowide text-3xl font-extrabold mb-5 pb-2 border-b-2 border-cyan-700/50 uppercase tracking-wider ml-2 md:ml-0">
            Popular Games
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-4">
          {popularGames.map((game) => (
            <PopularGameCard game={game} key={game.id} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PopularGameCards;
