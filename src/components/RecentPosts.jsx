import { Discuss } from "react-loader-spinner";
import Container from "./Container";
import { Slide } from "react-awesome-reveal";
import ViewDetailsAnimate from "./ViewDetailsAnimate";
// Post Data
const postData = [
  {
    id: 1,
    category: "FPS",
    categoryColor: "bg-cyan-500",
    image: "https://i.postimg.cc/2jgybwXw/fantasy-style-fire.jpg",
    title: "Mastering the Winter Battlefield",
    longDescription:
      "Learn key strategies to dominate Winter Edition maps. Tips include sniper positioning, stealth movement, and optimal loadouts to maximize impact. Follow these techniques to outperform opponents and lead your squad to victory in every battle scenario.",
    date: "Dec 12, 2025",
    comments: 14,
  },
  {
    id: 2,
    category: "Adventure",
    categoryColor: "bg-orange-500",
    image: "https://i.postimg.cc/Y0LcBQ60/woman-with-shield-b-her-head.jpg",
    title: "Exploring Hidden Secrets of Eldoria",
    longDescription:
      "Step into Eldoria's hidden dungeons and treasure spots. This guide highlights secret collectibles, rare loot areas, and story-driven easter eggs. Perfect for adventurers aiming to complete the game 100% while enjoying every immersive narrative twist.",
    date: "Nov 20, 2025",
    comments: 9,
  },
  {
    id: 3,
    category: "RPG",
    categoryColor: "bg-purple-500",
    image: "https://i.postimg.cc/ZKY6bZ06/robot-8043131-640.jpg",
    title: "Leveling Fast in Mythic Quest",
    longDescription:
      "Optimized questing paths and rare item farming strategies. Save time, gain XP efficiently, and reach endgame content faster. Includes tips to avoid common pitfalls and maximize experience gain per hour in Mythic Quest's expansive world.",
    date: "Oct 15, 2025",
    comments: 7,
  },
  {
    id: 4,
    category: "MOBA",
    categoryColor: "bg-green-500",
    image: "https://i.postimg.cc/5N2KZBmL/fantasy-8790369-640.jpg",
    title: "Top Hero Combos for Ranked Matches",
    longDescription:
      "Discover the best hero combinations for dominating ranked matches. Tips include lane control, ultimate timing, and team synergy strategies. Perfect for players aiming to climb the ranks with coordinated and efficient gameplay.",
    date: "Sep 30, 2025",
    comments: 5,
  },
];

const RecentPosts = () => {
  return (
    <Container>
      <div className="space-y-12 px-3">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold audiowide mb-5 pb-4 border-b-2 border-cyan-700/50 uppercase tracking-wider ml-2 md:ml-0 bg-linear-to-r from-[#00FFE0] to-white bg-clip-text text-white text-right transition-all duration-300"
          style={{
            color: "#00FFE0",
            textShadow: "0 0 6px #00FFE0",
          }}
        >
          Game Diaries
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {postData.map((post) => (
            <Slide direction={post.id % 2 === 0 ? "" : "right"} key={post.id}>
              <div className="flex flex-col md:flex-row bg-[#1c1c1c] rounded-lg shadow-md hover:shadow-cyan-300 transition-all duration-500 transform hover:-translate-y-1 overflow-hidden">
                {/* Left: Image Section */}
                <div
                  className="relative w-full h-56 md:h-auto md:w-1/2 flex items-start transition-transform duration-500 hover:scale-105 bg-no-repeat bg-cover md:bg-cover"
                  style={{
                    backgroundImage: `url(${post.image})`,
                    backgroundPosition: "center",
                  }}
                >
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`${post.categoryColor} text-white font-semibold px-3 py-1 text-xs rounded-md uppercase`}
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* Comment Icon */}
                  <div className="absolute bottom-4 right-4 flex items-center space-x-1 text-white text-sm bg-black/50 px-2 py-1 rounded-md backdrop-blur-sm">
                    <Discuss height="40" width="40" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                {/* Right: Content Section */}
                <div className="p-6 flex flex-col justify-between w-full md:w-1/2 md:border-l border-[#00FFE0]/30">
                  <h3 className="text-lg font-bold mb-3 leading-wider text-[#00FFE0]">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-5">
                    {post.longDescription}
                  </p>
                  <div className="flex items-center justify-between gap-1 mt-auto">
                    <ViewDetailsAnimate
                      className={"bg-success border-success w-32 h-10"}
                    >
                      Click to read
                    </ViewDetailsAnimate>
                    <span className="text-gray-500 text-xs flex items-center">
                      <svg
                        className="w-4 h-4 mr-1 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 0v14h14V4H3zm2 4h10v2H5V8zm0 4h10v2H5v-2z" />
                      </svg>
                      {post.date}
                    </span>
                  </div>
                </div>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default RecentPosts;
