import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Container from "./Container";

//
const gameNewData = [
  {
    id: 1,
    title: "Battlefield 6",
    img: "https://i.postimg.cc/RZzMd48s/23275.jpg",
    longDescription:
      "Battlefield 6 brings the franchise back to its roots with massive multiplayer battles, realistic weapon mechanics, and immersive environments. Players can engage in large-scale warfare with destructible terrains and vehicles.",
    shortDescription:
      "Massive battles with realistic gameplay and destructible environments.",
    rating: 5,
    category: "Shooter",
    developer: "DICE",
  },
  {
    id: 2,
    title: "Vampire: The Masquerade",
    img: "https://i.postimg.cc/9Q4GdP6B/7414.jpg",
    longDescription:
      "Dive into a dark world of vampires, politics, and supernatural powers. Explore your choices, build alliances, and manipulate the undead society while struggling with your own humanity.",
    shortDescription:
      "Dark vampire RPG full of intrigue and supernatural powers.",
    rating: 4,
    category: "RPG",
    developer: "Shah Games",
  },
  {
    id: 3,
    title: "Arc Raiders",
    img: "https://i.postimg.cc/VL2ScxhM/19874.jpg",
    longDescription:
      "Arc Raiders is a co-op action RPG where players battle alien creatures across different dimensions. Gather rare resources, upgrade your gear, and team up with friends to survive high-intensity missions.",
    shortDescription: "Co-op action RPG with alien battles and gear upgrades.",
    rating: 4,
    category: "Action RPG",
    developer: "Embark Studios",
  },
  {
    id: 4,
    title: "Cyberpunk Rebellion",
    img: "https://i.postimg.cc/FF8Ffjx4/22860.jpg",
    longDescription:
      "Step into a neon-lit dystopia filled with cybernetic enhancements and rogue AI. Hack systems, complete missions, and navigate the moral grey of a futuristic city.",
    shortDescription: "Neon cyberpunk adventure with hacking and missions.",
    rating: 4,
    category: "Action",
    developer: "NeoSoft",
  },
  {
    id: 5,
    title: "Mystic Legends",
    img: "https://i.postimg.cc/1zmyxMyY/n.jpg",
    longDescription:
      "An epic fantasy RPG where magic, mythical creatures, and legendary quests await. Build your hero, forge alliances, and change the fate of the realm.",
    shortDescription: "Fantasy RPG with magic, creatures, and epic quests.",
    rating: 5,
    category: "RPG",
    developer: "EpicQuest Studios",
  },
];

const NewReleaseGames = () => {
  return (
    <div className="text-gray-100 p-5 md:p-8 max-w-7xl mx-auto rounded-md">
      <Container>
        <h2 className="text-secondary lg:text-5xl md:text-4xl audiowide text-3xl font-extrabold mb-5 pb-4 md:-ml-8 -ml-3 border-b-2 border-cyan-700/50 uppercase tracking-wider">
          NEW RELEASES
        </h2>

        <Tabs className="flex flex-col lg:flex-row gap-5">
          {/* Tabs */}
          <TabList className="flex-1 lg:min-w-[400px] flex flex-col">
            {gameNewData.map((game) => (
              <Tab
                key={game.id}
                className="flex items-center p-3 mb-2 rounded-md cursor-pointer transition-all duration-200 bg-gray-800 hover:bg-gray-700"
                selectedClassName="bg-linear-to-r from-[#00FFE0] to-[#6C63FF] shadow-md ring-2 ring-white-500/50 text-black"
              >
                <img
                  src={game.img}
                  alt={game.title}
                  className="w-16 h-16 object-cover mr-4 rounded-sm"
                />
                <div className="flex flex-col">
                  <h3 className="text-sm md:text-base font-bold leading-tight audiowide">
                    {game.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{game.category}</p>
                  <p className="text-xs text-gray-600 mt-1">
                    ⭐ {game.rating} | {game.developer}
                  </p>
                </div>
              </Tab>
            ))}
          </TabList>

          {/*  Content */}
          <div className="flex-2 bg-gray-800 rounded-lg overflow-hidden relative min-h-[400px] shadow-sm shadow-cyan-300">
            {gameNewData.map((game) => (
              <TabPanel
                key={game.id}
                className="absolute inset-0 opacity-0 -translate-x-20 pointer-events-none transition-all duration-500"
                selectedClassName="relative opacity-100 translate-x-0 pointer-events-auto"
              >
                <div className="relative">
                  <img
                    src={game.img}
                    alt={game.title}
                    className="w-full h-60 object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-gray-900/70 text-white text-sm px-3 py-1 rounded-sm font-semibold tracking-wider">
                    {game.category}
                  </span>
                </div>
                <div className="p-5 md:p-6">
                  <h2 className="text-3xl font-extrabold text-white mb-3 audiowide">
                    {game.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    {game.longDescription}
                  </p>
                  <div className="text-gray-400 text-sm">
                    <span className="font-semibold">Developer:</span>{" "}
                    {game.developer} |{" "}
                    <span className="font-semibold">Rating:</span> {game.rating}
                  </div>
                </div>
              </TabPanel>
            ))}
          </div>
        </Tabs>
      </Container>
    </div>
  );
};

export default NewReleaseGames;
