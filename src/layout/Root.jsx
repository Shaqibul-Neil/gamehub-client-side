import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Container>
          <Navbar />
        </Container>
      </header>
      <main className="flex-1 md:pb-32 pb-40">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Root;
