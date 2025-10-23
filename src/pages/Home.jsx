import HomeBanner from "../components/HomeBanner";
import NewReleaseGames from "../components/NewReleaseGames";
import NewsLetter from "../components/NewsLetter";
import PopularGameCards from "../components/PopularGameCards";
import RecentPosts from "../components/RecentPosts";
import UpcomingGames from "../components/UpcomingGames";

const Home = () => {
  return (
    <section>
      <title>GameHub - Home</title>
      <div className="scroll-section">
        <HomeBanner />
      </div>
      <div className="lg:pt-32 pt-20 scroll-section">
        <UpcomingGames />
      </div>
      <div className="lg:pt-32 pt-20">
        <PopularGameCards />
      </div>
      <div className="py-24 lg:py-36 scroll-section">
        <RecentPosts />
      </div>
      <div className="lg:pb-64 py-20 lg:-mt-24 scroll-section">
        <NewReleaseGames />
      </div>
      <div className="relative">
        <NewsLetter />
      </div>
    </section>
  );
};

export default Home;
