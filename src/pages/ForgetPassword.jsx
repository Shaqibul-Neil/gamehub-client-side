import { Navigate } from "react-router";
import forg from "../assets/forg.jpg";
import Container from "../components/Container";
const ForgetPassword = () => {
  const handleReset = (e) => {
    e.preventDefault();
    //redirect to gmail
    window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
    e.target.reset();
  };
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${forg})` }} // tmr background image
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#6C63FF]/60 to-[#6C63FF]/40 mix-blend-multiply"></div>

      {/* Content */}
      <Container>
        <div className="relative z-10 flex justify-between items-center min-h-[70vh]">
          {/* Left side: welcoming text */}
          <div className="max-w-lg text-center space-y-8 lg:text-left drop-shadow-lg">
            <h2 className="text-4xl font-semibold text-success">
              Reset Your Password
            </h2>
            <p className=" text-white/85 poppins tracking-widest md:text-lg leading-relaxed ">
              Oops, lost your keys to the arena? Don’t worry! Enter your
              registered email below and we’ll send a{" "}
              <span className="text-[#00FFE0] font-semibold uppercase md:text-xl text-lg">
                **reset link**
              </span>{" "}
              straight to your{" "}
              <span className="text-[#00FFE0] font-semibold uppercase md:text-xl text-lg">
                Gmail .{" "}
              </span>
              Get back to your battles, conquer new quests, and reclaim your
              glory!
            </p>
          </div>

          {/*Right side: Forgot password card */}
          <div className="w-full max-w-md backdrop-blur-2xl space-y-8 bg-[#6C63FF]/15 border border-[#6C63FF]/25 shadow-2xl rounded-2xl p-8">
            <form className="space-y-5" onSubmit={handleReset}>
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

              {/* Reset button */}
              <button
                type="submit"
                className="btn btn-warning w-full text-white border-3 border-[#6C63FF] hover:bg-white hover:text-[#6C63FF] rounded-md font-semibold transition-colors duration-300 poppins text-xl py-5"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ForgetPassword;
