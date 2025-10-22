import Container from "./Container";
import TypeText from "./TypeText";
import news from "../assets/news.png";

const NewsLetter = () => {
  return (
    <Container className="lg:py-36 py-16 md:px-10 ">
      <div className="absolute -top-10 left-1/2 lg:flex hidden transform -translate-x-1/2 -translate-y-1/2 -z-1">
        <img
          src={news}
          alt=""
          className="drop-shadow-[0_0_30px_rgba(108,99,255,0.6)]"
        />
      </div>
      <div className="bg-linear-to-r from-[#00FFE0] to-[#6C63FF] text-white w-11/12 md:w-9/12 lg:w-8/12 rounded-lg shadow-2xl flex flex-col items-center justify-center text-center transform py-8 shadow-cyan-600 mx-auto">
        <h3 className="mb-3">
          <TypeText />
        </h3>
        <p className="text-md opacity-90 mb-4 px-4">
          From alpha builds to pro tips — get gaming news and tools in your
          inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 w-10/12 sm:w-8/12">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg placeholder-primary text-white input input-bordered input-primary"
          />

          <button
            type="submit"
            className="bg-gray-900 text-[#00FFE0] font-semibold px-6 py-2 rounded-lg hover:bg-opacity-90 transition cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </Container>
  );
};

export default NewsLetter;
