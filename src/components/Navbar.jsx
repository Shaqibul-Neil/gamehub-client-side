import { Link } from "react-router";
import MyLinks from "./MyLinks";
import { Gamepad2 } from "lucide-react";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar lg:py-6 md:py-4">
      <div className="navbar-start lg:w-1/3">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden pl-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-secondary border border-[#00ffe0]"
          >
            <li>
              <MyLinks to={"/"}>Home</MyLinks>
            </li>
            <li>
              <MyLinks to={"/about"}>About</MyLinks>
            </li>
            <li>
              <MyLinks to={"/games"}>Games</MyLinks>
            </li>
            <li>
              <MyLinks to={"/events"}>Events</MyLinks>
            </li>
            <li>
              <MyLinks to={"/community"}>Community</MyLinks>
            </li>
            {user ? (
              "user"
            ) : (
              <>
                <li>
                  <Link
                    to={"/login"}
                    className={"btn btn-success text-black mb-2"}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link to={"/signin"} className={"btn btn-warning text-white"}>
                    Sign In
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to={"/"} className="flex items-center gap-2">
          <span className="md:flex hidden">
            <Gamepad2 color="#00ffe0" size={36} className="animate-pulse" />{" "}
          </span>
          <span className="lg:text-4xl text-2xl text-[#00ffe0]">GameHub</span>
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex lg:w-full">
        <ul className="flex items-center gap-6 text-secondary">
          <li>
            <MyLinks to={"/"}>Home</MyLinks>
          </li>
          <li>
            <MyLinks to={"/about"}>About</MyLinks>
          </li>
          <li>
            <MyLinks to={"/games"}>Games</MyLinks>
          </li>
          <li>
            <MyLinks to={"/events"}>Events</MyLinks>
          </li>
          <li>
            <MyLinks to={"/community"}>Community</MyLinks>
          </li>
          {user ? (
            "user"
          ) : (
            <>
              <li>
                <Link
                  to={"/login"}
                  className={
                    "btn btn-success text-black border-3 border-rounded-lg border-success  hover:bg-white px-6 py-3 rounded-md font-semibold transition-colors duration-300"
                  }
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to={"/signin"}
                  className={
                    "btn btn-warning text-white hover:bg-white hover:text-warning px-6 py-3 rounded-md font-semibold transition-colors duration-300 border-3 border-rounded-lg"
                  }
                >
                  Sign In
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
