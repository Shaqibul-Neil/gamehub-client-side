import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import ScrollToTop from "react-scroll-to-top";
import { ArrowBigUpDash } from "lucide-react";
import { useEffect, useState } from "react";

const Root = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [scrolled, setScrolled] = useState(false);
  // console.log(windowSize);
  useEffect(() => {
    const handleSize = setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  console.log(window.scrollY);
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 400 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //lg screen
  const isLarge = windowSize >= 1024;

  return (
    <div className="flex flex-col min-h-screen">
      <header className="relative w-full">
        <div
          className={`transition-all duration-300 ease-in-out ${
            scrolled
              ? "fixed top-4 left-1/2 transform -translate-x-1/2 md:w-10/12 w-full lg:px-10 md:px-6 px-1 bg-white/15 backdrop-blur-2xl rounded-lg z-50"
              : "container mx-auto lg:px-10 md:px-6 px-1 bg-transparent relative "
          }`}
        >
          <Navbar />
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      <ScrollToTop
        smooth
        style={{
          backgroundColor: "transparent",
          width: isLarge ? "50px" : "30px",
          height: isLarge ? "50px" : "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          zIndex: "10",
          border: "1px solid #00ffe0",
        }}
        component={<ArrowBigUpDash color="#fff" size={isLarge ? 32 : 20} />}
      />
    </div>
  );
};

export default Root;
