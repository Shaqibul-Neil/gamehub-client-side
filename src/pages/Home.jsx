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
      <div>
        <HomeBanner />
      </div>
      <div className="lg:pt-32 pt-20">
        <UpcomingGames />
      </div>
      <div className="lg:pt-32 pt-20">
        <PopularGameCards />
      </div>
      <div className="py-24 lg:py-36">
        <RecentPosts />
      </div>
      <div className="lg:pb-64 py-20 lg:-mt-24">
        <NewReleaseGames />
      </div>
      <div className="relative">
        <NewsLetter />
      </div>
    </section>
  );
};

export default Home;
