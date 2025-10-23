import { SquareStar, Star } from "lucide-react";
import { Link } from "react-router";
import slugify from "slugify";
import useScrollAnimation from "../hooks/useScrollAnimation";

const GameCard = ({ game }) => {
  // Animate cards individually
  useScrollAnimation(".scroll-section");
  const isEven = game.id % 2 === 0;

  return (
    <div className="scroll-section">
      <div
        className={`flex items-center md:p-8 p-2 gap-8 lg:flex-row flex-col border-gray-600 ${
          isEven
            ? "lg:flex-row-reverse border-t-2 border-r-2"
            : "border-b-2 border-l-2"
        }`}
      >
        <div className="lg:w-[600px] lg:h-[300px] w-full">
          <img
            src={game?.coverPhoto}
            alt={game?.title}
            className="lg:w-[600px] lg:h-[300px] brightness-75"
          />
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between md:flex-row flex-col gap-4">
            <h3 className="text-2xl font-semibold text-success audiowide pb-4 border-b border-success">
              {game?.title}
            </h3>
            <p className="text-2xl flex gap-1 text-success">
              {Array.from({ length: game?.ratings }, (_, i) => (
                <SquareStar key={i} />
              ))}
            </p>
          </div>

          <p className="mt-4 text-gray-400">{game?.description}</p>

          <p className="text-md text-gray-200">
            Developed By :{" "}
            <span className="text-success audiowide">{game?.developer}</span>
          </p>
          <div>
            <p className="text-xl my-4 pb-2 border-b w-48 text-gray-200">
              Main Characters :{" "}
            </p>
            <div className="flex flex-col gap-4">
              {game?.characters.map((character) => (
                <div className="flex gap-4 items-center">
                  <img
                    src={character?.image}
                    alt={character?.name}
                    className="w-12 h-12 rounded-md"
                  />
                  <p className="text-white audiowide">{character?.name}</p>
                </div>
              ))}
            </div>
          </div>
          <Link
            className="btn btn-success text-black border-3 w-48 border-success  hover:bg-white rounded-md font-semibold transition-colors duration-300 mt-4"
            to={`/game-details/${slugify(game?.title, {
              lower: true,
              strict: true,
            })}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
