import destiny from "../assets/destiny.jpg";
import avenger from "../assets/avenger.jpg";
import zombie from "../assets/zombie.jpg";
import voyager from "../assets/voyager.jpg";
import spider from "../assets/spider.jpg";
import rogue from "../assets/rogue.jpg";
import wicked from "../assets/wicked.jpg"; // 6th game
import Container from "../components/Container";
import useScrollAnimation from "../hooks/useScrollAnimation";

const upcomingGamesData = [
  {
    id: 1,
    title: "Spider-Man Reboot",
    description:
      "Swing through New York in this action-packed superhero adventure with stunning visuals and epic battles.",
    developer: "Marvel Studios",
    category: "Action / Adventure",
    releaseDate: "12th November, 2025",
    img: spider,
  },
  {
    id: 2,
    title: "Avenger Strike",
    description:
      "Assemble your team of heroes and face global threats in this fast-paced, cooperative battle game.",
    developer: "Infinity Games",
    category: "Action / RPG",
    releaseDate: "14th November, 2025",
    img: avenger,
  },
  {
    id: 3,
    title: "Zombie Outbreak",
    description:
      "Survive hordes of zombies in a post-apocalyptic world, gather supplies and fortify your base to stay alive.",
    developer: "Nightfall Studios",
    category: "Horror / Survival",
    releaseDate: "13th November, 2025",
    img: zombie,
  },
  {
    id: 4,
    title: "Voyager Quest",
    description:
      "Explore uncharted galaxies, discover alien civilizations, and complete daring missions in this space adventure.",
    developer: "Starlight Interactive",
    category: "Sci-Fi / Adventure",
    releaseDate: "16th November, 2025",
    img: voyager,
  },
  {
    id: 5,
    title: "Rogue Alien",
    description:
      "Fight as a rogue alien across hostile planets, mastering powers and outsmarting enemies in thrilling encounters.",
    developer: "Cosmic Games",
    category: "Action / Sci-Fi",
    releaseDate: "15th November, 2025",
    img: rogue,
  },
  {
    id: 6,
    title: "Wicked Witch",
    description:
      "Enter a dark fantasy world and confront the Wicked Witch, using magic and strategy to survive epic battles.",
    developer: "Hex Studios",
    category: "Fantasy / Adventure",
    releaseDate: "17th November, 2025",
    img: wicked,
  },
];

const UpcomingRelease = () => {
  // Animate cards individually
  useScrollAnimation(".scroll-section");

  return (
    <div className="mb-24">
      <title>Upcoming Games</title>

      {/* Hero Section */}
      <div className="relative w-full h-[80vh] bg-black overflow-hidden scroll-section">
        <img
          src={destiny}
          alt="Upcoming Games Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 lg:px-0 space-y-4">
          <h1 className="lg:text-5xl text-3xl font-bold audiowide text-success drop-shadow-lg">
            Upcoming Game Releases
          </h1>
          <p className="text-lg lg:text-xl text-gray-200 max-w-3xl drop-shadow-md">
            Get ready for the latest gaming sensations! Explore new titles,
            exclusive events, and epic adventures dropping soon.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <section className="mt-24 space-y-12 px-3">
        <h2 className="lg:text-4xl text-white text-3xl flex items-center gap-2 justify-center underline underline-offset-8 audiowide mb-16 scroll-section">
          Gaming Horizons: What's Coming
        </h2>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:px-5 px-2">
            {upcomingGamesData.map((game) => (
              <div
                key={game.id}
                className="rounded-xl overflow-hidden transition-all duration-300 cursor-pointer scroll-section"
              >
                <div className="overflow-hidden">
                  <img
                    src={game.img}
                    alt={game.title}
                    className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-105 hover:-translate-y-2"
                  />
                </div>
                <div className="px-6 py-6 lg:px-12 text-center space-y-3">
                  <h3 className="text-2xl lg:text-3xl font-bold text-success audiowide">
                    {game.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{game.description}</p>
                  <p className="text-gray-400 text-xs">
                    🎮 Developer: {game.developer}
                  </p>
                  <p className="text-gray-400 text-xs">
                    🗂 Category: {game.category}
                  </p>
                  <p className="text-gray-400 text-xs">
                    📅 Release Date: {game.releaseDate}
                  </p>
                  <button className="btn btn-success text-black border-3 w-48 border-success hover:bg-white rounded-md font-semibold transition-colors duration-300 mt-3">
                    Click to Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default UpcomingRelease;
