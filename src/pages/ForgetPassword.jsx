import forg from "../assets/forg.jpg";
import Container from "../components/Container";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const { forgetEmail, forgetUserPassword } = useContext(AuthContext);

  const handleReset = (e) => {
    const email = e.target.email.value.trim();
    e.preventDefault();

    if (!email) {
      toast.error(
        "⚠️ Soldier, enter your email to receive your secret code 🦻🏻!"
      );
      return;
    }

    forgetUserPassword(email)
      .then(() =>
        toast.success(
          `🛡️ A reset link has been sent to ${email}! Check your Gmail, Warrior!`
        )
      )
      .catch((err) => toast.error(err.message));

    //redirect to gmail
    setTimeout(() => {
      window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
    }, 1000);

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
        <div className="relative z-10 flex lg:flex-row flex-col gap-10 lg:justify-between items-center min-h-[70vh] lg:mt-0 mt-12">
          {/* Left side: welcoming text */}
          <div className="max-w-lg text-center space-y-8 lg:text-left drop-shadow-lg">
            <h2 className="text-4xl font-semibold text-success audiowide">
              Reset Your Password
            </h2>
            <p className=" text-white/85  tracking-widest md:text-lg leading-relaxed ">
              Oops, lost your keys to the arena? Don’t worry! Enter your
              registered email below and we’ll send a{" "}
              <span className="text-[#00FFE0] font-semibold uppercase md:text-xl text-lg audiowide">
                **reset link**
              </span>{" "}
              straight to your{" "}
              <span className="text-[#00FFE0] font-semibold uppercase md:text-xl text-lg audiowide">
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
                <label className="block text-base mb-1 text-white ">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={forgetEmail}
                  placeholder="example@email.com"
                  className=" w-full bg-white/20 placeholder-gray-300 border-b-2 border-white/30 focus:outline-none focus:border-[#6C63FF] transition-all duration-200 p-2 text-secondary"
                />
              </div>

              {/* Reset button */}
              <button
                type="submit"
                className="btn btn-warning w-full text-white border-3 border-[#6C63FF] hover:bg-white hover:text-[#6C63FF] rounded-md font-semibold transition-colors duration-300  text-xl py-5"
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
