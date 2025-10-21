import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";

const Root = () => {
  return (
    <div>
      <header>
        <Container>
          <Navbar />
        </Container>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Root;
