import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Link } from "react-router";
import ovg from "../assets/ovg.jpeg";
import Container from "../components/Container";
import { useState } from "react";
import toast from "react-hot-toast";

const MyProfilePage = () => {
  const [showBorder, setShowBorder] = useState(false);
  const { user } = useContext(AuthContext);

  const profile = {
    username: user?.displayName || "Guest",
    avatar: user?.photoURL || "https://i.pravatar.cc/150?img=3",
    email: user?.email || "guest@example.com",
    level: 25,
    xp: 12450,
    rank: "Gold",
    achievements: ["Sharpshooter", "Explorer", "Collector"],
    favoriteGames: ["Battlefield 6", "Arc Raiders", "Vampire: The Masquerade"],
    friends: 45,
    bio: "Gaming is life! 🎮",
  };

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${ovg})` }}
    >
      <title>GameHub - Profile</title>
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#00FFE0]/60 to-[#6C63FF]/60 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>

      <Container>
        <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 py-12">
          {/* Left side: context / welcome text */}
          <div className="max-w-lg text-center lg:text-left text-white space-y-6 drop-shadow-lg">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-widest audiowide">
              Welcome Back, {profile.username}!
            </h1>
            <p className="text-md text-white/80 leading-relaxed tracking-wide">
              Gear up, check your{" "}
              <span className="text-[#00FFE0] font-semibold uppercase md:text-xl text-md audiowide audiowide">
                stats
              </span>{" "}
              , level up your{" "}
              <span className="text-[#00FFE0] font-semibold uppercase md:text-xl text-md audiowide audiowide">
                gear
              </span>{" "}
              , and explore your favorite gear{" "}
              <span className="text-[#00FFE0] font-semibold uppercase md:text-xl text-md audiowide audiowide">
                games.
              </span>{" "}
              The battlefield is waiting — your next{" "}
              <span className="text-[#00FFE0] font-semibold uppercase md:text-xl text-md audiowide audiowide">
                victory
              </span>{" "}
              begins here. Stay sharp and conquer your{" "}
              <span className="text-[#00FFE0] font-semibold uppercase md:text-xl text-md audiowide audiowide">
                challenges!
              </span>
            </p>
          </div>

          {/* Right side: Profile card */}
          <div
            className={`w-full max-w-md bg-white/10 border border-white/25 transition-all duration-300 rounded-2xl md:p-8 p-4 ${
              showBorder
                ? "shadow-[0_0_10px_#00ffe0] backdrop-blur-xl"
                : "backdrop-blur-md"
            }`}
          >
            {/* Header */}
            <div className="flex items-center space-x-4">
              <img
                className={`w-20 h-20 rounded-md border-2 ${
                  showBorder ? "border-cyan-500" : "border-gray-500"
                }`}
                src={profile.avatar}
                alt={profile.username}
              />
              <div className="space-y-1 w-full">
                <div className="flex justify-between md:flex-row flex-col md:items-center">
                  <h2 className="text-xl font-bold text-white">
                    {profile.username}
                  </h2>
                  <input
                    type="checkbox"
                    className="toggle toggle-success"
                    onClick={() => setShowBorder(!showBorder)}
                  />
                </div>
                <p className="text-white/80 text-sm md:text-md">
                  {profile.email}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 text-center text-white">
              <div>
                <p className="text-sm text-gray-300">Level</p>
                <p
                  className={`font-bold text-lg  ${
                    showBorder ? "text-success" : "text-gray-400"
                  }`}
                >
                  {profile.level}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-300">XP</p>
                <p
                  className={`font-bold text-lg  ${
                    showBorder ? "text-success" : "text-gray-400"
                  }`}
                >
                  {profile.xp}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-300">Rank</p>
                <p
                  className={`font-bold text-lg  ${
                    showBorder ? "text-success" : "text-gray-400"
                  }`}
                >
                  {profile.rank}
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="mt-6">
              <h3 className="font-semibold mb-2 text-white">Achievements</h3>
              <div className="flex flex-wrap gap-2">
                {profile.achievements.map((ach, index) => (
                  <span
                    key={index}
                    className={`text-black px-2 py-1 rounded-full text-xs ${
                      showBorder ? "bg-success" : "bg-gray-500"
                    }`}
                  >
                    {ach}
                  </span>
                ))}
              </div>
            </div>

            {/* Favorites */}
            <div className="mt-6">
              <h3 className="font-semibold mb-2 text-white">Favorite Games</h3>
              <ul className="list-disc list-inside text-gray-300">
                {profile.favoriteGames.map((game, index) => (
                  <li key={index}>{game}</li>
                ))}
              </ul>
            </div>

            {/* Friends */}
            <div className="mt-6 text-center text-white">
              <p className="font-bold text-lg">{profile.friends}</p>
              <p className="text-sm text-gray-400">Friends</p>
            </div>

            {/* Update Button */}
            <div className="text-center mt-6">
              <Link
                to={"/update-profile"}
                className={`btn btn-warning text-white w-full ${
                  showBorder ? "shadow-[0_0_10px_#00ffe0]" : ""
                }`}
              >
                Update Information
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyProfilePage;
