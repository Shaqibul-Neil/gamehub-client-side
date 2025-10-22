import { Link, useNavigate } from "react-router";
import val from "../assets/val.jpeg";
import Container from "../components/Container";
import { useState } from "react";
import passwordError from "../utilities/passwordError";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

const SignUp = () => {
  const [signUpError, setSignUpError] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const {
    createUser,
    updateUserProfile,
    setUser,
    setUserLoading,
    logOutUser,
    signInGoogle,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const displayName = e.target.name.value || "";
    const photoURL = e.target.photo.value || "";

    //error reset
    setSignUpError({ email: "", password: "" });

    //password validation
    const regEx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const passwordCheck = passwordError(regEx, password);
    if (passwordCheck) {
      setSignUpError({ password: passwordCheck });
      return;
    }
    //user creation
    createUser(email, password)
      .then(() => {
        //update profile
        updateUserProfile(displayName, photoURL)
          .then(() => {
            // console.log(res);
            setUserLoading(false);
            //signout user
            logOutUser().then(() => {
              setUser(null);
              toast.success(
                "You've joined the elite. Now Login to make history 👑"
              );
              e.target.reset();
              navigate("/login");
            });
          })
          .catch((err) => toast.error("⚔️ Mission failed: " + err.message));
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          toast.error(
            "⚔️ Mission failed: That email's already taken, recruit ⚠️"
          );
          return;
        }
        toast.error("⚔️ Mission failed: " + err.message);
      });
  };

  //google sign up
  const handleSignInWithGoogle = () => {
    signInGoogle()
      .then(() => {
        setUserLoading(false);
        toast.success("Google says you're legit — you're in, warrior 🪪");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div
      className="relative w-full bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${val})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#00FFE0]/60 to-[#6C63FF]/60 mix-blend-multiply"></div>

      {/* Content */}
      <Container>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12">
          {/* Left side: welcoming text */}
          <div className="max-w-lg text-center space-y-8 lg:text-left drop-shadow-lg">
            <h1 className="md:text-5xl text-3xl font-extrabold text-white tracking-widest audiowide">
              Join the Arena, Gamer
            </h1>
            <p className="md:text-lg text-white/85 leading-relaxed tracking-widest">
              Dive into the world of —{" "}
              <span className="text-[#6C63FF] font-semibold uppercase md:text-xl text-lg audiowide">
                epic battles
              </span>{" "}
              ! Play{" "}
              <span className="text-amber-600 font-semibold uppercase md:text-xl audiowide text-lg">
                PUBG, Call of Duty
              </span>{" "}
              or craft worlds in{" "}
              <span className="text-amber-600 font-semibold uppercase md:text-xl audiowide text-lg">
                Minecraft
              </span>{" "}
              . Track your{" "}
              <span className="text-[#6C63FF] font-semibold uppercase md:text-xl audiowide text-lg">
                stats
              </span>
              , upgrade{" "}
              <span className="text-[#6C63FF] font-semibold uppercase md:text-xl audiowide text-lg">
                gear
              </span>
              , and unlock{" "}
              <span className="text-[#6C63FF] font-semibold uppercase md:text-xl audiowide text-lg">
                rewards
              </span>
              . Let the next{" "}
              <span className="text-[#6C63FF] font-semibold uppercase md:text-xl audiowide text-lg">
                victory
              </span>{" "}
              begin!
            </p>
          </div>

          {/* Right side: Signup card */}
          <div className="w-full max-w-md backdrop-blur-2xl space-y-8 bg-[#6C63FF]/15 border border-[#6C63FF]/25 shadow-2xl rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-center text-white">
              Create Your Account
            </h2>
            <form className="space-y-5" onSubmit={handleSignUp}>
              {/* First Name */}
              <div className="relative mb-7">
                <label className="block text-base mb-1 text-white ">
                  First Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name Here"
                  className=" w-full bg-white/20 placeholder-gray-300 border-b-2 border-white/30 focus:outline-none focus:border-[#6C63FF] transition-all duration-200 p-2 text-secondary"
                />
              </div>

              {/* Photo Url */}
              <div className="relative mb-8">
                <label className="block text-base mb-1 text-white ">
                  Photo
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className=" w-full bg-white/20 placeholder-gray-300 border-b-2 border-white/30 focus:outline-none focus:border-[#6C63FF] transition-all duration-200 p-2 text-secondary"
                />
              </div>

              {/* Email */}
              <div className="relative mb-7">
                <label className="block text-base mb-1 text-white ">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="example@email.com"
                  className=" w-full bg-white/20 placeholder-gray-300 border-b-2 border-white/30 focus:outline-none focus:border-[#6C63FF] transition-all duration-200 p-2 text-secondary"
                  onChange={() => setSignUpError({ ...signUpError, email: "" })}
                />
                {signUpError.email && (
                  <p className="absolute -bottom-5 left-0 text-xs text-red-400">
                    {signUpError.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="relative mb-7">
                <label className="block text-base mb-1 text-white">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Password"
                  className=" w-full bg-white/20 placeholder-gray-300 border-b-2 border-white/30 focus:outline-none focus:border-[#6C63FF] transition-all duration-200 p-2 text-secondary"
                  onChange={() =>
                    setSignUpError({ ...signUpError, password: "" })
                  }
                />
                {signUpError.password && (
                  <p className="absolute -bottom-5 left-0 text-xs text-red-400">
                    {signUpError.password}
                  </p>
                )}
                <span
                  className="absolute top-10 right-5 cursor-pointer z-30"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Eye size={16} color="#00ffe0" />
                  ) : (
                    <EyeOff size={18} color="#00ffe0" />
                  )}
                </span>
              </div>

              {/* Signup button */}
              <button
                type="submit"
                className="btn btn-warning w-full text-white border-3 border-[#6C63FF] hover:bg-white hover:text-[#6C63FF] rounded-md font-semibold transition-colors duration-300 text-xl py-5"
              >
                Create Account
              </button>

              {/* Divider */}
              <div className="flex items-center justify-center gap-2 my-3">
                <div className="h-px w-16 bg-gray-200"></div>
                <span className="text-sm text-gray-200 ">or</span>
                <div className="h-px w-16 bg-gray-200"></div>
              </div>

              {/* Google signup */}
              <button
                type="button"
                onClick={handleSignInWithGoogle}
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold text-sm md:text-base hover:bg-gray-200 transition-all cursor-pointer"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>

              {/* Already have account link */}
              <p className="text-center text-sm text-gray-200 mt-3 ">
                Already have an account?{" "}
                <Link to="/login" className="text-[#00ffe0] underline ">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
