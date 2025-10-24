import { Link } from "react-router";
import NeuralGlow from "./NeuralGlow";
import { FaDiscord } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { Gamepad2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden text-white">
      {/* Glow Background */}
      <NeuralGlow />

      {/* Footer Content */}
      <div className="footer footer-horizontal footer-center rounded px-10 py-16 relative z-10">
        <Link to={"/"} className="flex items-center gap-2">
          <span className="md:flex hidden">
            <Gamepad2 color="#00ffe0" size={36} className="animate-pulse" />{" "}
          </span>
          <span className="lg:text-4xl text-2xl text-[#00ffe0] audiowide animate-pulse">
            GameHub
          </span>
          <span className="md:flex hidden">
            <Gamepad2 color="#00ffe0" size={36} className="animate-pulse" />{" "}
          </span>
        </Link>
        <nav className="flex items-center gap-4 md:flex-row flex-col">
          <Link
            to={"/about"}
            className="hover:text-success transition-all duration-300"
          >
            About us
          </Link>
          <Link
            to={"/games"}
            className="hover:text-success transition-all duration-300"
          >
            Games
          </Link>
          <Link
            to={"/events"}
            className="hover:text-success transition-all duration-300"
          >
            Events
          </Link>
          <Link
            to={"/terms-conditions"}
            className="hover:text-success transition-all duration-300"
          >
            Terms & Conditions
          </Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link
              to="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={24} color="#00ffe0" />
            </Link>

            <Link
              to="https://discord.com/users"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord size={24} color="#00ffe0" />
            </Link>

            <Link
              to="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TiSocialInstagram size={24} color="#00ffe0" />
            </Link>
          </div>
        </nav>
        <aside>
          <p>Copyright © - All right reserved by Shaqibul Islam Neil</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
