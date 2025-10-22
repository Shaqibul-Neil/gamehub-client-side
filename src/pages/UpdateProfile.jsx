import Container from "../components/Container";
import obg2 from "../assets/obg2.png";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { updateUserProfile, setUserLoading } = useContext(AuthContext);

  const handleUpdateInfo = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value || "";
    const photoURL = e.target.photo.value || "";
    updateUserProfile(displayName, photoURL)
      .then(() => {
        setUserLoading(false);
        toast.success(
          "⚡ Profile Upgraded Successfully! Your avatar's aura just got stronger, warrior!"
        );
      })
      .catch((err) => toast.error("⚔️ Mission failed: " + err.message));
  };

  return (
    <div
      className="relative w-full bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${obg2})` }}
    >
      <title>GameHub - Update Profile</title>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-linear-to-r from-[#6C63FF]/60 to-[#00FFE0]/60 mix-blend-multiply"></div>
      <Container>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12">
          {/* Left side: Context / Welcome */}
          <div className="max-w-lg text-center lg:text-left text-white space-y-6 drop-shadow-lg">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-widest audiowide">
              Update Your Profile, Warrior
            </h1>
            <p className="text-md text-white/80 leading-relaxed tracking-widest">
              Refresh your{" "}
              <span className="text-[#00FFE0] font-semibold uppercase md:text-xl text-lg audiowide audiowide">
                display name
              </span>{" "}
              and{" "}
              <span className="text-[#00FFE0] font-semibold uppercase md:text-xl text-md audiowide audiowide">
                profile picture
              </span>{" "}
              to stay active on the{" "}
              <span className="text-[#00FFE0] font-semibold uppercase md:text-xl text-md audiowide audiowide">
                battlefield
              </span>{" "}
              . Keep your stats visible, your
              <span className="text-[#00FFE0] font-semibold uppercase md:text-xl text-md audiowide audiowide">
                avatar
              </span>{" "}
              shining, and show the arena your avatar{" "}
              <span className="text-[#00FFE0] font-semibold uppercase md:text-xl text-md audiowide audiowide">
                presence!
              </span>{" "}
            </p>
          </div>

          {/* Right side: Update form */}
          <div className="w-full max-w-md backdrop-blur-2xl bg-white/15 border border-white/25 shadow-2xl rounded-2xl p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-center text-white">
              Update Information
            </h2>
            <form className="space-y-5" onSubmit={handleUpdateInfo}>
              {/* Name */}
              <div className="relative">
                <label className="block text-base mb-1 text-white">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full bg-white/20 placeholder-gray-300 border-b-2 border-white/30 focus:outline-none focus:border-cyan-400 transition-all duration-200 p-2 text-white"
                />
              </div>

              {/* Photo URL */}
              <div className="relative">
                <label className="block text-base mb-1 text-white">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter photo URL"
                  className="w-full bg-white/20 placeholder-gray-300 border-b-2 border-white/30 focus:outline-none focus:border-cyan-400 transition-all duration-200 p-2 text-white"
                />
              </div>

              <button
                type="submit"
                className="btn btn-success text-black w-full rounded-md font-semibold lg:text-xl md:text-lg text-md py-5 hover:bg-white transition-colors duration-300"
              >
                Update Information
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UpdateProfile;
