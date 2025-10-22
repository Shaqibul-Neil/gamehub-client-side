import HomeBanner from "../components/HomeBanner";
import NewsLetter from "../components/NewsLetter";
import PopularGameCards from "../components/PopularGameCards";

const Home = () => {
  return (
    <section>
      <title>GameHub - Home</title>
      <div>
        <HomeBanner />
      </div>
      <div className="lg:py-32 py-20">
        <PopularGameCards />
      </div>
      <div className="relative">
        <NewsLetter />
      </div>
    </section>
  );
};

export default Home;
