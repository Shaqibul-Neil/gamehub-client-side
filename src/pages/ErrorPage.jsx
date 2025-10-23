import Lottie from "lottie-react";
import alertL from "../lottie/alert.json";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router";
const ErrorPage = () => {
  return (
    <div>
      <title>GameHub - 404 Error</title>
      <div>
        <header>
          <Container>
            <Navbar />
          </Container>
        </header>

        <main>
          <Container
            className={"flex justify-between items-center lg:flex-row flex-col"}
          >
            <div className="flex justify-center">
              <Lottie
                animationData={alertL}
                loop={true}
                className="md:w-120 md:h-120 w-80 h-80"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-center md:text-2xl text-xl text-gray-600 font-bold tracking-wider audiowide">
                Oops! You've Fallen Into the Void…
              </h2>
              <p className="text-center text-md md:text-lg text-gray-600 font-bold tracking-wider audiowide">
                Looks like this level doesn't exist. Maybe the boss moved it, or
                it's hiding in another dimension. Don't worry, you can respawn
                at the Home Base or explore other epic quests!
              </p>
              <div className="flex justify-center md:flex-row flex-col items-center gap-4 mb-8">
                <Link
                  to="/"
                  className="btn btn-success text-black border-3 w-48 border-success  hover:bg-white rounded-md font-semibold transition-colors duration-300"
                >
                  Go Home
                </Link>
                <Link
                  to="/games"
                  className="btn btn-warning text-white border-3 w-48 border-warning  hover:bg-white hover:text-warning rounded-md font-semibold transition-colors duration-300"
                >
                  Show All Games
                </Link>
              </div>
            </div>
          </Container>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default ErrorPage;
