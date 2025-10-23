import HomeBanner from "../components/HomeBanner";
import NewReleaseGames from "../components/NewReleaseGames";
import NewsLetter from "../components/NewsLetter";
import PopularGameCards from "../components/PopularGameCards";

const Home = () => {
  return (
    <section>
      <title>GameHub - Home</title>
      <div>
        <HomeBanner />
      </div>
      <div className="lg:pt-32 pt-20">
        <PopularGameCards />
      </div>
      <div className="lg:pb-56 py-20 lg:-mt-24">
        <NewReleaseGames />
      </div>
      <div className="relative">
        <NewsLetter />
      </div>
    </section>
  );
};

export default Home;
