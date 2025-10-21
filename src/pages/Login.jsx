import { Link } from "react-router";
import lol from "../assets/lol.jpg";
import Container from "../components/Container";
const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="relative w-full bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${lol})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#00FFE0]/60 to-[#6C63FF]/60 mix-blend-multiply"></div>

      {/* Content */}
      <Container>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12">
          {/* Left side: welcoming text */}
          <div className="max-w-lg text-center space-y-8 lg:text-left drop-shadow-lg">
            <h1 className="md:text-5xl text-3xl font-extrabold text-white tracking-widest">
              Welcome Back, Warrior
            </h1>
            <p className="md:text-lg text-white/85 leading-relaxed tracking-widest poppins">
              Gear up and jump back into the —
              <span className="text-[#00FFE0] font-semibold uppercase md:text-xl text-lg">
                action
              </span>{" "}
              ! Continue your battle in{" "}
              <span className="text-amber-600 font-semibold uppercase md:text-xl text-lgl">
                PUBG, Call of Duty
              </span>{" "}
              or craft your world in{" "}
              <span className="text-amber-600 font-semibold uppercase md:text-xl text-lg">
                Minecraft
              </span>{" "}
              Manage your{" "}
              <span className="text-[#00FFE0] font-semibold uppercase md:text-xl text-lg">
                {" "}
                stats
              </span>
              , upgrade your{" "}
              <span className="text-[#00FFE0] font-semibold uppercase md:text-xl text-lg">
                gear
              </span>
              , and unlock exclusive{" "}
              <span className="text-[#00FFE0] font-semibold uppercase md:text-xl text-lg">
                rewards
              </span>
              . The arena is waiting — your next{" "}
              <span className="text-[#00FFE0] font-semibold uppercase md:text-xl text-lg">
                victory
              </span>{" "}
              begins right here.
            </p>
          </div>

          {/* Right side: Login card */}
          <div className="w-full max-w-md backdrop-blur-2xl space-y-8 bg-white/15 border border-white/25 shadow-2xl rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-center text-white">
              Login
            </h2>
            <form className="space-y-5" onSubmit={handleLogin}>
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
                  className="poppins w-full bg-white/20 placeholder-gray-300 border-b-2 border-white/30 focus:outline-none focus:border-cyan-400 transition-all duration-200 p-2"
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
                  className="poppins w-full bg-white/20 placeholder-gray-300 border-b-2 border-white/30 focus:outline-none focus:border-cyan-400 transition-all duration-200 p-2"
                />
              </div>
              <div className="flex md:flex-row flex-col md:justify-between md:items-center gap-4">
                {/* Remember Me */}
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    name="checkbox"
                    className="checkbox checkbox-success"
                  />
                  <p className="text-white poppins">Remember Me</p>
                </div>
                {/* Forgot password */}
                <div>
                  <Link
                    className="text-cyan-300 underline cursor-pointer hover:text-amber-600 poppins"
                    to={"/forget-password"}
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

              {/* Login button */}
              <button
                type="submit"
                className="btn btn-success text-black border-3 w-full border-rounded-lg border-success hover:bg-white rounded-md font-semibold transition-colors duration-300 poppins text-xl py-5"
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2 my-3">
              <div className="h-px w-16 bg-gray-200"></div>
              <span className="text-sm text-gray-200 poppins">or</span>
              <div className="h-px w-16 bg-gray-200"></div>
            </div>

            {/* Google login */}
            <button
              type="button"
              className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-200 transition-all cursor-pointer text-sm md:text-base poppins"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>

            {/* Sign up link */}
            <p className="text-center text-sm text-gray-200 mt-3 poppins">
              Don't have an account?{" "}
              <Link to="/signup" className="text-warning poppins underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
