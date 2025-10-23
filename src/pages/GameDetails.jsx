import { useContext } from "react";
import { Link, useParams } from "react-router";
import AuthContext from "../contexts/AuthContext";
import slugify from "slugify";
import GameDetailsLoading from "../components/GameDetailsLoading";
import Container from "../components/Container";
import { ScrollText } from "lucide-react";
import Character from "../components/Character";
import useScrollAnimation from "../hooks/useScrollAnimation";

const GameDetails = () => {
  const { title } = useParams();
  const { gamesData, gameLoading } = useContext(AuthContext);
  // Animate cards individually
  useScrollAnimation(".scroll-section");

  const particularGame = gamesData.find(
    (game) => slugify(game.title, { lower: true, strict: true }) === title
  );

  return gameLoading ? (
    <GameDetailsLoading />
  ) : (
    <div>
      <title>GameHub - Game Details</title>
      <div className="w-full h-[80vh] bg-black flex items-center justify-center scroll-section">
        <img
          src={particularGame?.coverPhoto}
          alt=""
          className="w-full h-[80vh] object-contain lg:object-fill"
        />
      </div>
      <Container className={"md:py-24 py-12"}>
        <div className="lg:px-5 px-3 space-y-12">
          <div className="flex gap-4 justify-center scroll-section">
            <p>
              Category :{" "}
              <span className="text-white">{particularGame?.category}</span>{" "}
            </p>
            <p>
              Ratings :{" "}
              <span className="text-white">{particularGame?.ratings}</span>
            </p>
          </div>

          <div className="scroll-section">
            <div className="text-4xl text-success audiowide text-center mb-12">
              {particularGame?.title}
            </div>

            <div className="space-y-4 scroll-section">
              <div className="flex w-full flex-col">
                <div className="divider text-2xl text-white">
                  <span className="md:flex hidden">
                    <ScrollText size={40} />
                  </span>
                  Description{" "}
                  <span className="md:flex hidden">
                    <ScrollText size={40} />
                  </span>
                </div>
              </div>

              {particularGame.longDescription.map((el) => (
                <p className="mb-2 text-primary">{el}</p>
              ))}
            </div>
          </div>
          <div className="scroll-section">
            <div className="flex w-full flex-col mb-8">
              <h2 className="divider text-2xl text-white">Characters</h2>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-16">
              {particularGame.characters.map((character, i) => (
                <Character key={i} character={character} />
              ))}
            </div>
          </div>
          <div className="text-center">
            <h4 className="md:text-xl text-md text-success">
              Developed By :{" "}
              <span className="text-white">{particularGame.developer}</span>
            </h4>
            <div className="my-8 flex md:flex-row flex-col gap-4 justify-center">
              <Link
                className="bg-warning border border-success text-white hover:text-warning hover:bg-white px-8 py-2 rounded-md transition-all duration-300"
                to={particularGame.downloadLink}
              >
                Download
              </Link>
              <Link
                className="bg-success border border-warning text-black hover:text-warning hover:bg-white px-8 py-2 rounded-md transition-all duration-300"
                to={"/games"}
              >
                All Game
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GameDetails;
