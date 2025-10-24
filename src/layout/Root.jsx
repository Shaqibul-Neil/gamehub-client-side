import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";

const Root = () => {
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
    </div>
  );
};

export default Root;
