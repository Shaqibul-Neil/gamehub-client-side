import HomeBanner from "../components/HomeBanner";
import NewReleaseGames from "../components/NewReleaseGames";
import NewsLetter from "../components/NewsLetter";
import Offers from "../components/Offers";
import PopularGameCards from "../components/PopularGameCards";
import RecentPosts from "../components/RecentPosts";
import Testimonials from "../components/Testimonials";
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
      <div className="pt-12 lg:pt-28 scroll-section">
        <NewReleaseGames />
      </div>
      <div className="py-24 lg:py-28 scroll-section">
        <Offers />
      </div>
      <div className="scroll-section lg:pb-24">
        <RecentPosts />
      </div>
      <div className="lg:pb-64 md:py-20 py-12 lg:-mt-24 scroll-section">
        <Testimonials />
      </div>
      <div className="relative -mt-10 md:mt-0">
        <NewsLetter />
      </div>
    </section>
  );
};

export default Home;
