import { Link, useNavigate } from "react-router";
import lol from "../assets/lol.jpg";
import Container from "../components/Container";
import { useContext, useRef, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [loginError, setLoginError] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const { signInGoogle, setUserLoading, logInUser, setUser, setForgetEmail } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    //error reset
    setLoginError({ email: "", password: "" });
    //validation
    if (!email) {
      return setLoginError({
        email: "⚒️ Soldier, enter your e-mail to proceed with the mission.",
      });
    }
    if (password.length < 6)
      return setLoginError({
        password: "Weak password detected! Armor too thin, recruit 🛡️",
      });
    //log in user
    logInUser(email, password)
      .then((res) => {
        setUser(res.user);
        toast.success("Welcome Back to the battlefield, Warrior ⚔️");
      })
      .catch((err) => {
        if (err.code === "auth/invalid-credential") {
          setLoginError({
            password:
              "Access denied! Wrong credentials — check your arsenal 🔒",
          });
          return;
        }
        toast.error("⚔️ Mission failed: " + err.message);
      });
  };

  //google sign in
  const handleSignInWithGoogle = () => {
    signInGoogle()
      .then(() => {
        setUserLoading(false);
        toast.success("Google verified your soul 👾 — you're in!");
      })
      .catch((err) => toast.error("⚔️ Mission failed: " + err.message));
  };

  //forget password
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    //for forget password email
    setForgetEmail(email);
    navigate("/forget-password");
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
            <h1 className="md:text-5xl text-3xl font-extrabold text-white tracking-widest audiowide">
              Welcome Back, Warrior
            </h1>
            <p className="md:text-lg text-white/85 leading-relaxed tracking-widest ">
              Gear up and jump back into the —
              <span className="text-[#00FFE0] font-semibold uppercase md:text-xl text-lg audiowide audiowide">
                action
              </span>{" "}
              ! Continue your battle in{" "}
              <span className="text-amber-600 font-semibold uppercase md:text-xl text-lgl audiowide">
                PUBG, Call of Duty
              </span>{" "}
              or craft your world in{" "}
              <span className="text-amber-600 font-semibold uppercase md:text-xl text-lg audiowide">
                Minecraft
              </span>{" "}
              Manage your{" "}
              <span className="text-[#00FFE0] font-semibold uppercase md:text-xl text-lg audiowide">
                {" "}
                stats
              </span>
              , upgrade your{" "}
              <span className="text-[#00FFE0] font-semibold uppercase md:text-xl text-lg audiowide">
                gear
              </span>
              , and unlock exclusive{" "}
              <span className="text-[#00FFE0] font-semibold uppercase md:text-xl text-lg audiowide">
                rewards
              </span>
              . The arena is waiting — your next{" "}
              <span className="text-[#00FFE0] font-semibold uppercase md:text-xl text-lg audiowide">
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
                <label className="block text-base mb-1 text-white ">
                  Email
                </label>
                <input
                  type="email"
                  ref={emailRef}
                  name="email"
                  onClick={() => setLoginError({ ...loginError, email: "" })}
                  placeholder="example@email.com"
                  className=" w-full bg-white/20 placeholder-gray-300 border-b-2 border-white/30 focus:outline-none focus:border-cyan-400 transition-all duration-200 p-2 text-secondary"
                />
                {loginError.email && (
                  <p className="absolute -bottom-5 left-0 text-xs text-red-400">
                    {loginError.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="relative mb-7">
                <label className="block text-base mb-1 text-white ">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onClick={() => setLoginError({ ...loginError, password: "" })}
                  required
                  placeholder="Password"
                  className=" w-full bg-white/20 placeholder-gray-300 border-b-2 border-white/30 focus:outline-none focus:border-cyan-400 transition-all duration-200 p-2 text-secondary"
                />
                {loginError.password && (
                  <p className="absolute -bottom-5 left-0 text-xs text-red-400">
                    {loginError.password}
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
              <div className="flex md:flex-row flex-col md:justify-between md:items-center gap-4">
                {/* Remember Me */}
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    name="checkbox"
                    className="checkbox checkbox-success"
                  />
                  <p className="text-white ">Remember Me</p>
                </div>
                {/* Forgot password */}
                <div>
                  <a
                    className="text-cyan-300 underline cursor-pointer hover:text-amber-600 "
                    onClick={handleForgetPassword}
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>

              {/* Login button */}
              <button
                type="submit"
                className="btn btn-success text-black border-3 w-full border-rounded-lg border-success hover:bg-white rounded-md font-semibold transition-colors duration-300  text-xl py-5"
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2 my-3">
              <div className="h-px w-16 bg-gray-200"></div>
              <span className="text-sm text-gray-200 ">or</span>
              <div className="h-px w-16 bg-gray-200"></div>
            </div>

            {/* Google login */}
            <button
              type="button"
              onClick={handleSignInWithGoogle}
              className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-200 transition-all cursor-pointer text-sm md:text-base "
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>

            {/* Sign up link */}
            <p className="text-center text-sm text-gray-200 mt-3 ">
              Don't have an account?{" "}
              <Link to="/signup" className="text-warning  underline">
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
