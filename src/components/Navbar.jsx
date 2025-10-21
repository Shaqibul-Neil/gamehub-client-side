import { Link } from "react-router";
import MyLinks from "./MyLinks";
import { Gamepad2 } from "lucide-react";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar lg:py-6 md:py-4 md:px-0 px-2">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-100 mt-3 w-52 p-2 shadow text-secondary border border-[#00ffe0]"
          >
            <li>
              <MyLinks className="poppins" to={"/"}>
                Home
              </MyLinks>
            </li>
            <li>
              <MyLinks className="poppins" to={"/about"}>
                About
              </MyLinks>
            </li>
            <li>
              <MyLinks className="poppins" to={"/games"}>
                Games
              </MyLinks>
            </li>
            <li>
              <MyLinks className="poppins" to={"/events"}>
                Events
              </MyLinks>
            </li>
            <li>
              <MyLinks className="poppins" to={"/community"}>
                Community
              </MyLinks>
            </li>
            {user ? (
              "user"
            ) : (
              <>
                <li>
                  <Link
                    to={"/login"}
                    className={"btn btn-success text-black mb-2 poppins"}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/signup"}
                    className={"btn btn-warning text-white poppins"}
                  >
                    Sign Up
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
            <MyLinks className="poppins" to={"/"}>
              Home
            </MyLinks>
          </li>
          <li>
            <MyLinks className="poppins" to={"/about"}>
              About
            </MyLinks>
          </li>
          <li>
            <MyLinks className="poppins" to={"/games"}>
              Games
            </MyLinks>
          </li>
          <li>
            <MyLinks className="poppins" to={"/events"}>
              Events
            </MyLinks>
          </li>
          <li>
            <MyLinks className="poppins" to={"/community"}>
              Community
            </MyLinks>
          </li>
          {user ? (
            "user"
          ) : (
            <>
              <li>
                <Link
                  to={"/login"}
                  className={
                    "btn btn-success text-black border-3 w-28  border-success  hover:bg-white rounded-md font-semibold transition-colors duration-300 poppins"
                  }
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to={"/signup"}
                  className={
                    "btn btn-warning text-white w-28 hover:bg-white hover:text-warning rounded-md font-semibold transition-colors duration-300 border-3  poppins"
                  }
                >
                  Sign Up
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
