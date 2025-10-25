import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import ScrollToTop from "react-scroll-to-top";
import { ArrowBigUpDash } from "lucide-react";
import { useEffect, useState } from "react";

const Root = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  // console.log(windowSize);
  useEffect(() => {
    const handleSize = setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  //lg screen
  const isLarge = windowSize >= 1024;

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed z-50 top-0 w-full">
        <Container>
          <Navbar />
        </Container>
      </header>

      <main className="flex-1 lg:pt-20 pt-16">
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
