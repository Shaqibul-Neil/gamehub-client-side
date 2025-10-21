import { Link } from "react-router";
import TypeText from "./TypeText";

const Footer = () => {
  return (
    <footer className="bg-gray-900 lg:pt-20 pt-12 pb-8 relative overflow-visible">
      <div className="subscribe">
        <h3 className="mb-2">
          <TypeText />
        </h3>
        <p className="text-sm opacity-90 mb-4 px-4">
          Get the latest apps, tools, and tech straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 w-10/12 sm:w-8/12">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg placeholder-primary text-white input input-bordered input-primary"
          />

          <button
            type="submit"
            className="bg-gray-900 text-[#00FFE0] font-semibold px-6 py-2 rounded-lg hover:bg-opacity-90 transition cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="w-11/12 mx-auto lg:px-8 md:px-4 px-2">
        <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16 md:pt-20 pt-28">
          {/* Quick Links */}
          <div className="col-span-2 sm:col-span-1">
            <p className="relative font-medium text-white">Quick Links</p>
            <ul
              style={{ listStyle: "none" }}
              className="mt-6 space-y-4 text-sm"
            >
              <li>
                <Link
                  to="/"
                  className="transition hover:opacity-75 text-gray-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/apps"
                  className="transition hover:opacity-75 text-gray-200"
                >
                  Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/installation"
                  className="transition hover:opacity-75 text-gray-200"
                >
                  Installation
                </Link>
              </li>
            </ul>
          </div>

          {/* Components */}
          <div className="col-span-2 sm:col-span-1">
            <p className="relative font-medium text-white">Components</p>
            <ul
              style={{ listStyle: "none" }}
              className="mt-6 space-y-4 text-sm"
            >
              <li>
                <Link
                  to="/"
                  className="transition hover:opacity-75 text-gray-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/apps"
                  className="transition hover:opacity-75 text-gray-200"
                >
                  Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/installation"
                  className="transition hover:opacity-75 text-gray-200"
                >
                  Installation
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Tools */}
          <div className="col-span-2 sm:col-span-1">
            <p className="relative font-medium text-white">Useful Tools</p>
            <ul
              style={{ listStyle: "none" }}
              className="mt-6 space-y-4 text-sm"
            >
              <li>
                <Link
                  to="/"
                  className="transition hover:opacity-75 text-gray-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/apps"
                  className="transition hover:opacity-75 text-gray-200"
                >
                  Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/installation"
                  className="transition hover:opacity-75 text-gray-200"
                >
                  Installation
                </Link>
              </li>
            </ul>
          </div>

          {/* Free Icons */}
          <div className="col-span-2 sm:col-span-1">
            <p className="relative font-medium text-white">Free Icons</p>
            <ul
              style={{ listStyle: "none" }}
              className="mt-6 space-y-4 text-sm"
            >
              <li>
                <Link
                  to="/"
                  className="transition hover:opacity-75 text-gray-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/apps"
                  className="transition hover:opacity-75 text-gray-200"
                >
                  Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/installation"
                  className="transition hover:opacity-75 text-gray-200"
                >
                  Installation
                </Link>
              </li>
            </ul>
          </div>

          {/* Category */}
          <div className="col-span-2 sm:col-span-1">
            <p className="relative font-medium text-white">Category</p>
            <ul
              style={{ listStyle: "none" }}
              className="mt-6 space-y-4 text-sm"
            >
              <li>
                <Link
                  to="/"
                  className="transition hover:opacity-75 text-gray-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/apps"
                  className="transition hover:opacity-75 text-gray-200"
                >
                  Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/installation"
                  className="transition hover:opacity-75 text-gray-200"
                >
                  Installation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t pt-8 border-gray-800">
          <p className="text-xs text-gray-400 text-center">
            &copy; 2025. Shaqibul Neil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
