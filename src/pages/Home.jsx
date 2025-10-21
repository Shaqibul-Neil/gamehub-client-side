import HomeBanner from "../components/HomeBanner";
import PopularGameCards from "../components/PopularGameCards";

const Home = () => {
  return (
    <section>
      <div>
        <HomeBanner />
      </div>
      <div className="lg:py-32 py-20">
        <PopularGameCards />
      </div>
    </section>
  );
};

export default Home;
