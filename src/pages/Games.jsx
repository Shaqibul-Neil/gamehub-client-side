import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import tron from "../assets/tron.jpg";
import GameCard from "../components/GameCard";
import Container from "../components/Container";

const Games = () => {
  const { gamesData, gameLoading } = useContext(AuthContext);
  console.log(gamesData);
  return (
    <div>
      <title>GameHub - Games</title>
      {/* Hero Section */}
      <div
        className="relative w-full bg-cover bg-center py-48"
        style={{ backgroundImage: `url(${tron})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-[#6C63FF]/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-4">
          <h1 className="lg:text-5xl text-3xl font-bold audiowide text-success">
            Filter. Explore. Conquer.
          </h1>
          <p className="lg:text-lg text-secondary max-w-2xl">
            Browse through hundreds of games, dive into detailed reviews, and
            find your next obsession. Whether you’re into fast-paced shooters,
            immersive RPGs, or chill indie gems — there’s something here for
            every kind of player.
          </p>
        </div>
      </div>

      {/* cards section */}
      <section className="mt-24 space-y-12">
        <h2 className="text-center text-white audiowide lg:text-3xl text-2xl">
          Step into the arena of legends.
        </h2>
        <Container>
          <div className="grid grid-cols-1 lg:gap-16 gap-12 lg:px-5 px-2">
            {gamesData.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Games;
