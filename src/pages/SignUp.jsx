import { Link } from "react-router";
import val from "../assets/val.jpeg";
import Container from "../components/Container";

const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
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
            <h1 className="md:text-5xl text-3xl font-extrabold text-white tracking-widest">
              Join the Arena, Gamer
            </h1>
            <p className="md:text-lg text-white/85 leading-relaxed tracking-widest poppins">
              Dive into the world of —{" "}
              <span className="text-[#6C63FF] font-semibold uppercase md:text-xl text-lg">
                epic battles
              </span>{" "}
              ! Play{" "}
              <span className="text-amber-600 font-semibold uppercase md:text-xl text-lg">
                PUBG, Call of Duty
              </span>{" "}
              or craft worlds in{" "}
              <span className="text-amber-600 font-semibold uppercase md:text-xl text-lg">
                Minecraft
              </span>{" "}
              . Track your{" "}
              <span className="text-[#6C63FF] font-semibold uppercase md:text-xl text-lg">
                stats
              </span>
              , upgrade{" "}
              <span className="text-[#6C63FF] font-semibold uppercase md:text-xl text-lg">
                gear
              </span>
              , and unlock{" "}
              <span className="text-[#6C63FF] font-semibold uppercase md:text-xl text-lg">
                rewards
              </span>
              . Let the next{" "}
              <span className="text-[#6C63FF] font-semibold uppercase md:text-xl text-lg">
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
                <label className="block text-base mb-1 text-white poppins">
                  First Name
                </label>
                <input
                  type="text"
                  name="fname"
                  required
                  placeholder="John"
                  className="poppins w-full bg-white/20 placeholder-gray-300 border-b-2 border-white/30 focus:outline-none focus:border-[#6C63FF] transition-all duration-200 p-2"
                />
              </div>

              {/* Last Name */}
              <div className="relative mb-7">
                <label className="block text-base mb-1 text-white poppins">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lname"
                  placeholder="Doe"
                  className="poppins w-full bg-white/20 placeholder-gray-300 border-b-2 border-white/30 focus:outline-none focus:border-[#6C63FF] transition-all duration-200 p-2"
                />
              </div>

              {/* Email */}
              <div className="relative mb-7">
                <label className="block text-base mb-1 text-white poppins">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="example@email.com"
                  className="poppins w-full bg-white/20 placeholder-gray-300 border-b-2 border-white/30 focus:outline-none focus:border-[#6C63FF] transition-all duration-200 p-2"
                />
              </div>

              {/* Password */}
              <div className="relative mb-7">
                <label className="block text-base mb-1 text-white poppins">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Password"
                  className="poppins w-full bg-white/20 placeholder-gray-300 border-b-2 border-white/30 focus:outline-none focus:border-[#6C63FF] transition-all duration-200 p-2"
                />
              </div>

              {/* Signup button */}
              <button
                type="submit"
                className="btn btn-warning w-full text-white border-3 border-[#6C63FF] hover:bg-white hover:text-[#6C63FF] rounded-md font-semibold transition-colors duration-300 poppins text-xl py-5"
              >
                Create Account
              </button>

              {/* Divider */}
              <div className="flex items-center justify-center gap-2 my-3">
                <div className="h-px w-16 bg-gray-200"></div>
                <span className="text-sm text-gray-200 poppins">or</span>
                <div className="h-px w-16 bg-gray-200"></div>
              </div>

              {/* Google signup */}
              <button
                type="button"
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold text-sm md:text-base hover:bg-gray-200 transition-all cursor-pointer poppins"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>

              {/* Already have account link */}
              <p className="text-center text-sm text-gray-200 mt-3 poppins">
                Already have an account?{" "}
                <Link to="/login" className="text-[#00ffe0] underline poppins">
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
