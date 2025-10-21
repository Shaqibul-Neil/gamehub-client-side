import { useContext } from "react";
import Container from "./Container";
import AuthContext from "../contexts/AuthContext";
import PopularGameCard from "./PopularGameCard";

const PopularGameCards = () => {
  const { gamesData, gameLoading, gameError } = useContext(AuthContext);
  console.log(gamesData);
  const popularGames = gamesData.filter((games) => games.ratings >= "4.9");
  console.log(popularGames);
  return (
    <Container>
      <div className="space-y-12">
        <div>
          <h2 className="text-primary text-5xl text-center">Popular Games</h2>
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
